import { HandTapIcon, ShieldIcon, PencilIcon, LeafIcon } from './icons';

const features = [
  { icon: <HandTapIcon />, text: 'One Tap Instant Sharing' },
  { icon: <ShieldIcon />, text: 'Secure & Reliable' },
  { icon: <PencilIcon />, text: 'Always Up to Date' },
  { icon: <LeafIcon />, text: 'Eco-Friendly Solution' },
];

export default function Features() {
  return (
    <section className="features container" id="features">
      {features.map((f, i) => (
        <div className="feature-item" key={i}>
          <span className="feature-icon">{f.icon}</span>
          <p>{f.text}</p>
        </div>
      ))}
    </section>
  );
}
