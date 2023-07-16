import { styled } from 'styled-components';

import TechnologyArticle from '../Components/TechnologyArticle';

import TechnologyPictures from '../Components/TechnologyPictures';
import TechnologyTabs from '../Components/TechnologyTabs';

const Technology = () => {
  return (
    <Wrapper className=" grid-container grid-container--technology flow">
      <h1 className="numbered-title">
        <span aria-hidden="true">03</span>
        Space launch 101
      </h1>
      <TechnologyPictures />
      <TechnologyTabs />
      <TechnologyArticle />
    </Wrapper>
  );
};
const Wrapper = styled.main`
  h2 {
    margin-bottom: 1rem;
  }

  .numbered-list > * {
    padding: 0 1em;
    font-size: var(--fs-500);
    border-radius: 50%;
    border: 2px solid hsl(var(--clr-light) / 0.5);
    background-color: transparent;
    aspect-ratio: 1;
    place-items: center;
    font-weight: 700;
    transition: background-color 500ms ease-in-out;
    cursor: pointer;
  }
  .numbered-list > *:hover,
  .numbered-list > *:focus {
    background-color: hsl(var(--clr-light) / 0.2);
  }
  .numbered-list > [aria-selected='true'] {
    background: hsl(var(--clr-white));
    color: hsl(var(--clr-dark)) !important;
  }

  @media (max-width: 44.99em) {
    article {
      padding-left: 1rem;
      padding-right: 1rem;
    }
    .numbered-title {
      padding-left: 1rem;
    }
    margin-bottom: 2rem;
  }

  .tech-img-desktop {
    display: none;
  }

  @media (min-width: 45em) {
    .numbered-list {
      --gap: 1.875rem;
      flex-direction: column;
    }
    .numbered-list > * {
      padding: 0 0.7em;
    }
    h2 {
      margin-bottom: 1.2rem;
    }
    .tech-img-mobile {
      display: none;
    }
    .tech-img-desktop {
      display: block;
    }
  }
`;
export default Technology;
