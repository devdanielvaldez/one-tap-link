import {
  PersonIcon, ShareIcon, GlobeIcon, MailIcon, LeafIcon,
  WifiIcon, PhoneIcon, LinkedInIcon, InstagramIcon, AddUserIcon,
} from './icons';

const AVATAR_URL = 'https://media.base44.com/images/public/6a999c858e092faeb3c56ddb/d7788a3a3_generated_25eeee56.jpg/v1/fill/w_192,h_192,al_c,q_90,usm_0.66_1.00_0.01,enc_webp,quality_auto/d7788a3a3_generated_25eeee56.webp';

const listItems = [
  { icon: <PersonIcon />, text: 'Share Your Contact Details' },
  { icon: <ShareIcon />, text: 'Connect on Social Media' },
  { icon: <GlobeIcon />, text: 'Drive Traffic to Your Website' },
  { icon: <MailIcon />, text: 'Add Email, Phone & More' },
  { icon: <LeafIcon />, text: 'Go Digital. Go Green.' },
];

export default function Hero() {
  return (
    <section className="hero container">
      <div className="hero-text">
        <p className="eyebrow">SMART BUSINESS CARD</p>
        <h1 className="hero-title">
          One Card.<br />
          <span className="gold">Endless</span><br />
          <span className="gold">Connections.</span>
        </h1>
        <p className="hero-desc">A smarter way to share your contact details, social media, website and more — instantly with one tap.</p>

        <ul className="feature-list">
          {listItems.map((item, i) => (
            <li key={i}>
              <span className="icon-circle">{item.icon}</span>
              <span>{item.text}</span>
            </li>
          ))}
        </ul>
      </div>

      <div className="hero-visual">
        <div className="mockup-wrap">
          <div className="phone-mockup">
            <div className="phone-screen">
              <div className="avatar-ring">
                <img src={AVATAR_URL} alt="Carlos Herrera" />
              </div>
              <h3 className="profile-name">Carlos Herrera</h3>
              <p className="profile-role">Marketing Director</p>

              <div className="icon-grid">
                <span className="grid-icon"><PhoneIcon /></span>
                <span className="grid-icon"><MailIcon /></span>
                <span className="grid-icon"><GlobeIcon /></span>
                <span className="grid-icon"><LinkedInIcon /></span>
                <span className="grid-icon"><InstagramIcon /></span>
                <span className="grid-icon"><AddUserIcon /></span>
              </div>

              <button className="tap-btn">
                <WifiIcon />
                Tap to Connect
              </button>
            </div>
          </div>

          <div className="card-mockup">
            <span className="card-wifi"><WifiIcon /></span>
            <span className="card-logo-box">[ Your Logo ]</span>
          </div>
        </div>
      </div>
    </section>
  );
}
