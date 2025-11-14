import '../index.css';

const graduates = [
  { id: 1, image: "/images/graduates/11.png" },
  { id: 2, image: "/images/graduates/12.png" },
  { id: 3, image: "/images/graduates/13.png" },
  { id: 4, image: "/images/graduates/14.png" },
  { id: 5, image: "/images/graduates/15.png" },
  { id: 6, image: "/images/graduates/16.png" },
  { id: 7, image: "/images/graduates/18.png" },
  { id: 8, image: "/images/graduates/19.png" },
  { id: 9, image: "/images/graduates/20.png" },
  { id: 10, image: "/images/graduates/21.png" },
  { id: 11, image: "/images/graduates/22.png" },
  { id: 12, image: "/images/graduates/23.png" },
  { id: 13, image: "/images/graduates/24.png" }
];

function Graduated() {
  return (
    <section className="graduates-section">
      <h3>Our graduates have worked in</h3>
      <div className="graduates-grid">
        {graduates.map(grad => (
          <div key={grad.id} className="graduate-card">
            <img src={grad.image} alt={`Graduate ${grad.id}`} />
          </div>
        ))}
      </div>
    </section>
  );
}

export default Graduated;
