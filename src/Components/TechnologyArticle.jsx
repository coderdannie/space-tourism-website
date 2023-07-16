import { useGlobalContext } from '../context/context';

const TechnologyArticle = () => {
  const { spaceData, currentTechItem } = useGlobalContext();
  const [...data] = spaceData.technology;
  const { description, name } = data[currentTechItem];

  return (
    <article className="technology-info flow">
      <header>
        <h2 className="fs-500 ff-sans-cond uppercase text-accent">
          {' '}
          The terminology...{' '}
        </h2>
        <p className="uppercase ff-serif fs-700">{name}</p>
      </header>
      <p>{description}</p>
    </article>
  );
};
export default TechnologyArticle;
