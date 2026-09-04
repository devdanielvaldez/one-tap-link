import { CartIcon, CalendarIcon } from './icons';

const PAYPAL_URL = 'https://www.paypal.com/ncp/payment/FV5MVL5XM4AAL';
const BOOKING_URL = 'https://onecard.contact/profile/m3pkl';

export default function CTA() {
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
      <a
        className="btn btn-dark"
        href={BOOKING_URL}
        target="_blank"
        rel="noopener noreferrer"
      >
        <CalendarIcon />
        Book a Demo
      </a>
    </section>
  );
}
