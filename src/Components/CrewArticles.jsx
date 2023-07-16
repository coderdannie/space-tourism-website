import { useGlobalContext } from '../context/context';
const CrewArticles = () => {
  const { spaceData, currentItem } = useGlobalContext();
  const [...crews] = spaceData.crew;
  const { name, role, bio } = crews[currentItem];

  return (
    <article className="crew-details flow">
      <header className="flow flow--space-small">
        <h2 className="fs-600 ff-serif uppercase">{role}</h2>
        <p className="fs-700 uppercase ff-serif">{name}</p>
      </header>
      <p>{bio}</p>
    </article>
  );
};
export default CrewArticles;
