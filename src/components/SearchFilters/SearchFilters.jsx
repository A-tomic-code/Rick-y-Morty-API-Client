import { useSearchFilters } from '../../hooks/useSearchFilters';
import './SearchFilters.css';

export const SearchFilters = () => {
  const { handleFilterChange, categories } = useSearchFilters();

  const handleChange = (e) => {
    handleFilterChange(e);
    e.target.value
      ? (e.target.style.borderColor = 'var(--primary-color)')
      : (e.target.style.borderColor = '');
  };
  return (
    <div className="filters">
      {Object.entries(categories).map((category) => {
        return (
          <select
            id={category[0]}
            key={category[0]}
            onChange={handleChange}
          >
            {/* placeholder */}

            <option value="" defaultValue>
              ---
            </option>

            {/* listar las categorias */}

            {category[1].map((item) => {
              return (
                <option key={item} value={item}>
                  {item}
                </option>
              );
            })}
          </select>
        );
      })}
    </div>
  );
};
