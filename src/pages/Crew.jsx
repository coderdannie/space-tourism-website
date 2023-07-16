import { styled } from 'styled-components';

import CrewArticles from '../Components/CrewArticles';
import CrewPictures from '../Components/CrewPictures';
import DotsIndicators from '../Components/DotsIndicators';
const Crew = () => {
  return (
    <Wrapper className="grid-container grid-container--crew flow">
      <h1 className="numbered-title">
        <span aria-hidden="true">02</span> Meet your crew
      </h1>
      <DotsIndicators />
      <CrewArticles />
      <CrewPictures />
    </Wrapper>
  );
};

const Wrapper = styled.main`
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
`;
export default Crew;
