import { useNavigate, useLocation } from 'react-router-dom';
import querystring from 'query-string';
import { useForm } from '../../hooks/useForm';
import { HeroCard } from '../components';
import { getHeroesByName } from '../helpers';

export const SearchPage = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { q = '' } = querystring.parse(location.search);
  const heroes = getHeroesByName(q);

  const showSearchDiv = (q.length === 0);
  const showErrorDiv = (q.length > 0) && heroes.length === 0;

  const { searchText, onInputChange } = useForm({
    searchText: q
  });

  const onSearchSubmit = (event) => {
    event.preventDefault();
    // if (searchText.trim().length <= 1) return;

    navigate(`?q=${searchText.toLowerCase().trim()}`);
  }

  return (
    <>
      <h1>Search</h1>
      <hr />

      <div className="row">
        <div className="col-5">
          <h4>Searching</h4>
          <hr />

          <form onSubmit={onSearchSubmit} aria-label="form">
            <input
              type="text"
              placeholder="Search a hero"
              className="form-control"
              name="searchText"
              autoComplete="off"
              value={searchText}
              onChange={onInputChange}
            />

            <button className="btn btn-outline-primary mt-1">
              Search
            </button>
          </form>
        </div>

        <div className="col-7">
          <h4>Results</h4>
          <hr />

          {/* {
            (q === '')
              ? <div className="alert alert-primary">Search a Hero</div>
              : (heroes.length === 0) && <div className="alert alert-danger">There's no a Hero with <b>{q}</b></div>
          } */}

          <div
            className="alert alert-primary animate__animated animate__fadeIn"
            style={{ display: showSearchDiv ? '' : 'none' }}
          >
            Search a Hero
          </div>

          <div
            aria-label="error-div"
            className="alert alert-danger animate__animated animate__fadeIn"
            style={{ display: showErrorDiv ? '' : 'none' }}
          >
            No hero with <b>{q}</b>
          </div>

          {
            heroes.map(hero => (
              <HeroCard key={hero.id} {...hero} />
            ))
          }
        </div>
      </div>
    </>
  );
};
