import React from 'react';
import styled from 'styled-components';
import { useFilterContext } from '../context/filter_context';
import { getUniqueValues, formatPrice } from '../utils/helpers';
import { FaCheck } from 'react-icons/fa';

const Filters = () => {
  // get data from context
  const {
    filters: {
      text,
      category,
      company,
      color,
      min_price,
      price,
      max_price,
      shipping,
    },
    updateFilters,
    clearFilters,
    all_products,
  } = useFilterContext();

  // get unique values
  const categories = getUniqueValues(all_products, 'category');
  const companies = getUniqueValues(all_products, 'company');
  const colors = getUniqueValues(all_products, 'colors');

  // jsx
  return (
    <Wrapper>
      <div className="content">
        <form onSubmit={(e) => e.preventDefault()}>
          <div>
            {/* categories */}
            <div className="form-control small-sc">
              <h5>category</h5>
              <div>
                {categories.map((cur, index) => (
                  <button
                    key={index}
                    onClick={updateFilters}
                    name="category"
                    className={`${category === cur.toLowerCase() && 'active'}`}
                  >
                    {cur}
                  </button>
                ))}
              </div>
            </div>
            {/* end of categories */}
            <button className="clear-btn small-sc" onClick={clearFilters}>
              clear filters
            </button>
          </div>

          <div>
            {/* search input */}
            <div className="form-control">
              <input
                type="text"
                name="text"
                placeholder="search"
                className="search-input"
                value={text}
                onChange={updateFilters}
              />
            </div>
            {/* end of search input */}

            {/* categories */}
            <div className="form-control big-sc">
              <h5>category</h5>
              <div>
                {categories.map((cur, index) => (
                  <button
                    key={index}
                    onClick={updateFilters}
                    name="category"
                    className={`${category === cur.toLowerCase() && 'active'}`}
                  >
                    {cur}
                  </button>
                ))}
              </div>
            </div>
            {/* end of categories */}

            {/* companies */}
            <div className="form-control">
              <h5>company</h5>
              <select
                name="company"
                value={company}
                onChange={updateFilters}
                className="company"
              >
                {companies.map((company, index) => (
                  <option key={index} value={company}>
                    {company}
                  </option>
                ))}
              </select>
            </div>
            {/* end of companies */}

            {/* colors */}
            <div className="form-control">
              <h5>colors</h5>
              <div className="colors">
                {colors.map((cur, index) => {
                  if (cur === 'all') {
                    return (
                      <button
                        key={index}
                        name="color"
                        className={`all-btn ${color === 'all' && 'active'}`}
                        data-color="all"
                        onClick={updateFilters}
                      >
                        all
                      </button>
                    );
                  }
                  return (
                    <button
                      key={index}
                      name="color"
                      style={{ background: cur }}
                      className={`color-btn ${color === cur && 'active'}`}
                      data-color={cur}
                      onClick={updateFilters}
                    >
                      {color === cur && <FaCheck />}
                    </button>
                  );
                })}
              </div>
            </div>
            {/* end of colors */}

            {/* price */}
            <div className="form-control">
              <h5>price</h5>
              <p className="price">{formatPrice(price)}</p>
              <input
                type="range"
                name="price"
                min={min_price}
                max={max_price}
                value={price}
                onChange={updateFilters}
              />
            </div>
            {/* end of price */}

            {/* shipping */}
            <div className="form-control shipping">
              <label htmlFor="shipping">free shipping</label>
              <input
                type="checkbox"
                name="shipping"
                id="shipping"
                onChange={updateFilters}
                checked={shipping}
              />
            </div>
            {/* end of shipping */}
            <button className="clear-btn big-sc" onClick={clearFilters}>
              clear filters
            </button>
          </div>
        </form>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  .form-control {
    margin-bottom: 1.25rem;
    h5 {
      margin-bottom: 0.5rem;
    }
  }

  .content form {
    display: grid;
    grid-template-columns: 1fr;
  }
  .small-sc {
    display: none;
  }
  .big-sc {
    display: block;
  }
  @media (max-width: 768px) {
    .content form {
      width: 100%;
      grid-template-columns: 40% 1fr;
      column-gap: 2rem;
    }
    .small-sc {
      display: block;
    }
    .big-sc {
      display: none;
    }
  }
  .search-input {
    padding: 0.5rem;
    background: var(--clr-grey-10);
    border-radius: var(--radius);
    border-color: transparent;
    letter-spacing: var(--spacing);
  }
  .search-input::placeholder {
    text-transform: capitalize;
  }

  button {
    display: block;
    margin: 0.25em 0;
    padding: 0.25rem 0;
    text-transform: capitalize;
    background: transparent;
    border: none;
    border-bottom: 1px solid transparent;
    letter-spacing: var(--spacing);
    color: var(--clr-grey-5);
    cursor: pointer;
  }
  .active {
    border-color: var(--clr-grey-5);
  }
  .company {
    background: var(--clr-grey-10);
    border-radius: var(--radius);
    border-color: transparent;
    padding: 0.25rem;
  }
  .colors {
    display: flex;
    align-items: center;
  }
  .color-btn {
    display: inline-block;
    width: 1rem;
    height: 1rem;
    border-radius: 50%;
    background: #222;
    margin-right: 0.5rem;
    border: none;
    cursor: pointer;
    opacity: 0.5;
    display: flex;
    align-items: center;
    justify-content: center;
    svg {
      font-size: 0.5rem;
      color: var(--clr-white);
    }
  }
  .all-btn {
    display: flex;
    align-items: center;
    justify-content: center;
    margin-right: 0.5rem;
    opacity: 0.5;
  }
  .active {
    opacity: 1;
  }
  .all-btn .active {
    text-decoration: underline;
  }
  .price {
    margin-bottom: 0.25rem;
  }
  .shipping {
    display: grid;
    grid-template-columns: auto 1fr;
    align-items: center;
    text-transform: capitalize;
    column-gap: 0.5rem;
    font-size: 1rem;
  }
  .clear-btn {
    background: var(--clr-red-dark);
    color: var(--clr-white);
    padding: 0.25rem 0.5rem;
    border-radius: var(--radius);
  }
  @media (min-width: 768px) {
    .content {
      position: sticky;
      top: 1rem;
    }
  }
`;

export default Filters;
