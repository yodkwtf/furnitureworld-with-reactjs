import React from 'react';
import styled from 'styled-components';
import { BsStarFill, BsStarHalf, BsStar } from 'react-icons/bs';

const Stars = ({ stars, reviews }) => {
  // jsx
  return (
    <Wrapper>
      <div className="stars">
        {/* star 1 */}
        <span>
          {stars >= 1 ? (
            <BsStarFill />
          ) : stars > 0.5 ? (
            <BsStarHalf />
          ) : (
            <BsStar />
          )}
        </span>
        {/* end of star */}
        {/* star 2 */}
        <span>
          {stars >= 2 ? (
            <BsStarFill />
          ) : stars > 1.5 ? (
            <BsStarHalf />
          ) : (
            <BsStar />
          )}
        </span>
        {/* end of star */}
        {/* star 3 */}
        <span>
          {stars >= 3 ? (
            <BsStarFill />
          ) : stars > 2.5 ? (
            <BsStarHalf />
          ) : (
            <BsStar />
          )}
        </span>
        {/* end of star */}
        {/* star 4 */}
        <span>
          {stars >= 4 ? (
            <BsStarFill />
          ) : stars > 3.5 ? (
            <BsStarHalf />
          ) : (
            <BsStar />
          )}
        </span>
        {/* end of star */}
        {/* star 5 */}
        <span>
          {stars === 5 ? (
            <BsStarFill />
          ) : stars > 4.5 ? (
            <BsStarHalf />
          ) : (
            <BsStar />
          )}
        </span>
        {/* end of star */}
      </div>
      <p className="reviews">({reviews} reviews)</p>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  span {
    color: #d4af37;
    font-size: 1rem;
    margin-right: 0.25rem;
  }
  p {
    margin-left: 0.5rem;
    margin-bottom: 0;
  }
  margin-bottom: 0.5rem;
`;
export default Stars;
