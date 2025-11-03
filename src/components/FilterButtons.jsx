import "../index.css";

function FilterButtons({ currentFilter, setFilter }) {
  const categories = ["All", "Design", "Design Tools", "UX", "Career"];

  return (
    <div className="filter-buttons">
      {categories.map((category) => (
        <button
          key={category}
          onClick={() => setFilter(category)}
          className={`filter-btn ${currentFilter === category ? "active" : ""}`}
        >
          {category}
        </button>
      ))}
    </div>
  );
}

export default FilterButtons;
