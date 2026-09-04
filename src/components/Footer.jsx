import footerLogo from '../assets/footer-logo.png';

export default function Footer() {
  return (
    <footer className="site-footer" id="footer">
      <div className="container footer-inner">
        <a href="#" className="logo">
          <img src={footerLogo} alt="One Smart Business Card" className="footer-logo-img" />
        </a>
        <p className="footer-text">One tap. Endless connections. © 2026 One Card LLC.</p>
      </div>
    </footer>
  );
}
