import { useState } from 'react';
import { CartIcon, CalendarIcon } from './icons';
import BookingModal from './BookingModal';

const PAYPAL_URL = 'https://www.paypal.com/ncp/payment/FV5MVL5XM4AAL';

export default function CTA() {
  const [showBooking, setShowBooking] = useState(false);

  return (
    <section className="cta container" id="cta">
      <a
        className="btn btn-gold"
        href={PAYPAL_URL}
        target="_blank"
        rel="noopener noreferrer"
      >
        <CartIcon />
        Order Now
      </a>
      <button className="btn btn-dark" onClick={() => setShowBooking(true)}>
        <CalendarIcon />
        Book a Demo
      </button>

      {showBooking && <BookingModal onClose={() => setShowBooking(false)} />}
    </section>
  );
}
