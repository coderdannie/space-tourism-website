import { Link } from 'react-router-dom';
import { navLinks } from '../utils/constant';
import styled from 'styled-components';
import { useGlobalContext } from '../context/context';
const Sidebar = () => {
  const { handleItemClick, activeItem, isExpanded } = useGlobalContext();
  return (
    <Wrapper
      className={
        isExpanded ? 'aside-navigation open-sidebar' : 'aside-navigation'
      }
    >
      <ul className=" flex underline-indicators mobile-links" data-visible="">
        {navLinks.map((link, i) => {
          const index = i + 1;

          const { id, text, url, num } = link;
          return (
            <li
              key={id}
              className={activeItem == index ? 'active' : ''}
              onClick={() => handleItemClick(index)}
            >
              <Link
                to={url}
                className="ff-sans-cond uppercase text-white letter-spacing-2"
              >
                <span>{num}</span> {text}
              </Link>
            </li>
          );
        })}
      </ul>
    </Wrapper>
  );
};
const Wrapper = styled.aside`
  .mobile-nav {
    display: block;
    z-index: 2000;
    right: 1rem;
    top: 2rem;
    background: transparent;
    width: 1.5rem;
    aspect-ratio: 1;
    border: 0;
  }

  .mobile-links {
    --underline-gap: 0.5rem;
    --gap: clamp(1.5rem, 5vw, 3.5rem);
    padding-left: 0;
    flex-direction: column;
    li {
      list-style: none;
    }
    a {
      text-decoration: none;
    }
  }
`;
export default Sidebar;
