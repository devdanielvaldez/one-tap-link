export default function Stats() {
  return (
    <section className="stats-section container" id="stats">
      <div className="stats-box">
        <h2 className="stats-number">50K+</h2>
        <p className="stats-label">Connections Made</p>
        <div className="avatar-stack">
          <span style={{ background: '#e0b84c' }}>JD</span>
          <span style={{ background: '#39435c' }}>MK</span>
          <span style={{ background: '#8b93a6' }}>SL</span>
          <span style={{ background: '#e0b84c' }}>RF</span>
          <span style={{ background: '#39435c' }}>AT</span>
        </div>
        <p className="rating">
          <span className="stars">★★★★★</span> 4.9/5 <span className="sep">·</span> Loved by Professionals
        </p>
      </div>
    </section>
  );
}
