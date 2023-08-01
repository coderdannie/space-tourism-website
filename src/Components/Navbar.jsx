import { Link, NavLink } from 'react-router-dom';
import styled from 'styled-components';
import logo from '../assets/shared/logo.svg';
import iconClose from '../assets/shared/icon-close.svg';
import toggleBar from '../assets/shared/icon-hamburger.svg';
import { navLinks } from '../utils/constant';
import { useGlobalContext } from '../context/context';

const Navbar = () => {
  const { handleItemClick, activeItem, handleClick, isExpanded } =
    useGlobalContext();

  return (
    <Wrapper className="primary-header flex ">
      <div>
        <Link to="/">
          <img src={logo} className="logo" alt="space tourism website" />
        </Link>
      </div>

      <button
        className="mobile-nav-toggle"
        aria-controls="primary-navigation"
        aria-expanded={isExpanded}
        onClick={handleClick}
      >
        <span className="sr-only">Menu</span>
      </button>
      <nav>
        <ul className="primary-navigation flex  underline-indicators">
          {navLinks.map((link, i) => {
            const index = i + 1;
            const { id, text, url, num } = link;
            return (
              <li key={id} onClick={() => handleItemClick(index)}>
                <NavLink
                  to={url}
                  className={({ isActive }) => {
                    return isActive
                      ? 'ff-sans-cond uppercase text-white letter-spacing-2 active'
                      : 'ff-sans-cond uppercase text-white letter-spacing-2';
                  }}
                >
                  <span>{num}</span> {text}
                </NavLink>
              </li>
            );
          })}
        </ul>
      </nav>
    </Wrapper>
  );
};

const Wrapper = styled.header`
  justify-content: space-between;
  align-items: center;
  .logo {
    margin: 1.5rem clamp(1.5rem, 5vw, 3.5rem);
  }

  .primary-navigation a > span {
    font-weight: 700;
    margin-right: 0.5em;
  }
  .mobile-nav-toggle {
    display: block;
    position: absolute;
    z-index: 2000;
    right: 1rem;
    top: 2rem;
    background: transparent;
    background-image: url(${toggleBar});
    background-repeat: no-repeat;
    background-position: center;
    width: 1.5rem;
    aspect-ratio: 1;
    border: 0;
    cursor: pointer;
  }
  @media (max-width: 35em) {
    .primary-navigation {
      display: none;
    }
  }
  @media (min-width: 35em) {
    .mobile-nav-toggle {
      display: none;
    }
  }
  @media (max-width: 35rem) {
    .mobile-nav-toggle[aria-expanded='true'] {
      background-image: url(${iconClose});
    }

    .mobile-nav-toggle:focus-visible {
      outline: 5px solid white;
      outline-offset: 5px;
    }
  }
  @media (min-width: 35em) and (max-width: 790px) {
    .primary-navigation a > span {
      display: none;
    }
  }

  @media (min-width: 45em) {
    nav {
      order: 2;
    }
  }

  .tab-list {
    --gap: 2rem;
  }

  .dot-indicators > * {
    cursor: pointer;
    border: 0;
    border-radius: 50%;
    padding: 0.5em;
    background-color: hsl(var(--clr-white) / 0.25);
  }

  .dot-indicators > *:hover,
  .dot-indicators > *:focus {
    background-color: hsl(var(--clr-white) / 0.5);
  }

  .dot-indicators > [aria-selected='true'] {
    background-color: hsl(var(--clr-white) / 1);
  }
  @media (min-width: 45em) {
    .primary-navigation {
      margin-block: 2rem;
      width: max-content;
    }
  }
`;
export default Navbar;
