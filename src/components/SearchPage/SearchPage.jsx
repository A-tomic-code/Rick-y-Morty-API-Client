import SearchForm from '../SearchForm/SearchForm';
import './SearchPage.css';
import { ResultsGrid } from '../ResultsGrid/ResultsGrid';
import { useSelector } from 'react-redux';

const SearchPage = () => {
  const data = useSelector((state) => state.fetchData.data);

  return (
    <div className="search-page">
      <SearchForm></SearchForm>
      <ResultsGrid data={data}></ResultsGrid>
    </div>
  );
};

export default SearchPage;
