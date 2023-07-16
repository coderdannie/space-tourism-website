import { Link } from 'react-router-dom';
import styled from 'styled-components';
import errorBkg from '../assets/errorImg/not-found.svg';
const Error = () => {
  return (
    <Wrapper className="bg-dark flex">
      <h5 className="ff-sans-cond">404</h5>
      <p>page not found</p>
      <Link className="text-dark bg-white" to="/">
        back to home
      </Link>
    </Wrapper>
  );
};

const Wrapper = styled.main`
  flex-direction: column;
  justify-content: end;
  align-items: center;
  background-image: url(${errorBkg});
  background-repeat: no-repeat;
  background-size: contain;
  background-position: top;
  padding-bottom: 5rem;
  h5 {
    font-size: var(--fs-700);
  }
  p {
    font-size: var(--fs-400);
  }
  a {
    text-decoration: none;
    padding: 1em;
  }
`;
export default Error;
