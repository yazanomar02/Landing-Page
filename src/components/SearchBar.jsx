import '../index.css';

function SearchBar({ searchTerm, setSearchTerm }) {
    const handleSearch = (e) => {
        setSearchTerm(e.target.value)
    };
    return (
        <input
            type="text"
            placeholder="Search"
            value={searchTerm}
            onChange={handleSearch}
            className="search-input"
        />
    );
}

export default SearchBar;