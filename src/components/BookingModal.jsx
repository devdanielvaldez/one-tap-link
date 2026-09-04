import { useMemo, useState } from 'react';
import { CloseIcon, CalendarIcon, ClockIcon, MailSmallIcon, PhoneSmallIcon, CheckCircleIcon } from './icons';

const TIME_SLOTS = ['10:00', '11:00', '12:00', '13:00', '14:00', '15:00'];

function formatSlotLabel(slot) {
  const [h] = slot.split(':').map(Number);
  const end = h + 1;
  const to12 = (n) => {
    const hour = n % 12 === 0 ? 12 : n % 12;
    const suffix = n < 12 || n === 24 ? 'AM' : 'PM';
    return `${hour}:00 ${suffix}`;
  };
  return `${to12(h)} – ${to12(end)}`;
}

function buildDates(count = 10) {
  const dates = [];
  const cursor = new Date();
  while (dates.length < count) {
    if (cursor.getDay() !== 0) dates.push(new Date(cursor)); // skip Sundays
    cursor.setDate(cursor.getDate() + 1);
  }
  return dates;
}

const WEEKDAY = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
const MONTH = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

export default function BookingModal({ onClose }) {
  const dates = useMemo(() => buildDates(10), []);
  const [selectedDate, setSelectedDate] = useState(null);
  const [selectedTime, setSelectedTime] = useState(null);
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [errors, setErrors] = useState({});
  const [confirmed, setConfirmed] = useState(false);

  const dateKey = (d) => d.toISOString().slice(0, 10);

  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = {};
    if (!selectedDate) newErrors.date = 'Selecciona una fecha';
    if (!selectedTime) newErrors.time = 'Selecciona un horario';
    if (!/^\S+@\S+\.\S+$/.test(email)) newErrors.email = 'Correo inválido';
    if (phone.trim().length < 7) newErrors.phone = 'Teléfono inválido';
    setErrors(newErrors);
    if (Object.keys(newErrors).length === 0) {
      setConfirmed(true);
    }
  };

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-box" onClick={(e) => e.stopPropagation()}>
        <button className="modal-close" onClick={onClose} aria-label="Cerrar">
          <CloseIcon />
        </button>

        {confirmed ? (
          <div className="modal-success">
            <span className="success-icon"><CheckCircleIcon /></span>
            <h3>¡Reunión agendada!</h3>
            <p>
              Tu demo quedó reservada para el <strong>{selectedDate.getDate()} de {MONTH[selectedDate.getMonth()]}</strong>{' '}
              de <strong>{formatSlotLabel(selectedTime)}</strong>.
            </p>
            <p className="success-sub">Enviaremos la confirmación a <strong>{email}</strong> y te contactaremos al <strong>{phone}</strong> si es necesario.</p>
            <button className="btn btn-gold" onClick={onClose}>Listo</button>
          </div>
        ) : (
          <>
            <h3 className="modal-title">Agenda tu Demo</h3>
            <p className="modal-sub">Horarios disponibles de 10:00 AM a 4:00 PM</p>

            <form onSubmit={handleSubmit}>
              <label className="field-label"><CalendarIcon /> Elige una fecha</label>
              <div className="date-scroller">
                {dates.map((d) => {
                  const active = selectedDate && dateKey(d) === dateKey(selectedDate);
                  return (
                    <button
                      type="button"
                      key={dateKey(d)}
                      className={`date-chip ${active ? 'active' : ''}`}
                      onClick={() => setSelectedDate(d)}
                    >
                      <span className="date-chip-day">{WEEKDAY[d.getDay()]}</span>
                      <span className="date-chip-num">{d.getDate()}</span>
                      <span className="date-chip-month">{MONTH[d.getMonth()]}</span>
                    </button>
                  );
                })}
              </div>
              {errors.date && <p className="field-error">{errors.date}</p>}

              <label className="field-label"><ClockIcon /> Elige un horario</label>
              <div className="time-grid">
                {TIME_SLOTS.map((slot) => (
                  <button
                    type="button"
                    key={slot}
                    className={`time-chip ${selectedTime === slot ? 'active' : ''}`}
                    onClick={() => setSelectedTime(slot)}
                  >
                    {formatSlotLabel(slot)}
                  </button>
                ))}
              </div>
              {errors.time && <p className="field-error">{errors.time}</p>}

              <label className="field-label" htmlFor="email"><MailSmallIcon /> Correo electrónico</label>
              <input
                id="email"
                type="email"
                className="field-input"
                placeholder="tucorreo@ejemplo.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              {errors.email && <p className="field-error">{errors.email}</p>}

              <label className="field-label" htmlFor="phone"><PhoneSmallIcon /> Teléfono</label>
              <input
                id="phone"
                type="tel"
                className="field-input"
                placeholder="+52 55 1234 5678"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
              />
              {errors.phone && <p className="field-error">{errors.phone}</p>}

              <button type="submit" className="btn btn-gold modal-submit">Confirmar Reunión</button>
            </form>
          </>
        )}
      </div>
    </div>
  );
}
