import { MenuIcon } from './icons';

const MENU_URL = 'https://onecard.contact/';

export default function Header() {
  return (
    <header className="site-header">
      <div className="container header-inner">
        <a href="#" className="logo">Tap<span>Link</span></a>
        <a
          className="menu-btn"
          aria-label="Ir a onecard.contact"
          href={MENU_URL}
          target="_blank"
          rel="noopener noreferrer"
        >
          <MenuIcon />
        </a>
      </div>
    </header>
  );
}
