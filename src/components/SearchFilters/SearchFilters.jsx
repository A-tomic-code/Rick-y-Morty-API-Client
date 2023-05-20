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
        const [categoryName, valuesSet] = category
        return (
          <select
            id={categoryName}
            key={categoryName}
            onChange={handleChange}
          >
            {/* placeholder */}

            <option value="" defaultValue>
              {categoryName}
            </option>

            {/* listar las categorias */}

            {valuesSet.map((item) => {
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
