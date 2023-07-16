import { Link } from 'react-router-dom';
import { styled } from 'styled-components';

const Home = () => {
  return (
    <Wrapper className="grid-container grid-container--home flow">
      <div>
        <h1 className="fs-500 text-accent ff-sans-cond uppercase letter-space-1">
          So, you want to travel to{' '}
          <span className="fs-900 ff-serif text-white d-block">Space</span>
        </h1>
        <p>
          Let’s face it; if you want to go to space, you might as well genuinely
          go to outer space and not hover kind of on the edge of it. Well sit
          back, and relax because we’ll give you a truly out of this world
          experience!{' '}
        </p>
      </div>
      <div>
        <Link
          className="large-btn ff-serif text-dark bg-white uppercase"
          to="/destination"
        >
          Explore
        </Link>
      </div>
    </Wrapper>
  );
};
export default Home;

const Wrapper = styled.main`
  @media (min-width: 35em) {
  }
  .large-btn {
    font-size: 2rem;
    position: relative;
    display: inline-grid;
    place-items: center;
    border-radius: 50%;
    padding: 0 2em;
    text-decoration: none;
    z-index: 1;
    aspect-ratio: 1;
  }
  .large-btn::after {
    content: '';
    position: absolute;
    width: 100%;
    height: 100%;
    background: hsl(var(--clr-white) / 0.1);
    border-radius: 50%;
    opacity: 0;
    transition: opacity 500ms linear, transform 750ms ease-in-out;
    z-index: -1;
  }
  .large-btn:hover::after,
  .large-bt:focus::after {
    opacity: 1;
    transform: scale(1.5);
  }
`;
