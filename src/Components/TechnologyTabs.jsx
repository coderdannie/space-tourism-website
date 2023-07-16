import { useGlobalContext } from '../context/context';

const TechnologyTabs = () => {
  const { spaceData, currentTechItem, setCurrentTechItem } = useGlobalContext();
  const [...data] = spaceData.technology;
  return (
    <div
      className="numbered-list flex flex-jc-c"
      aria-label="technology list"
      role="tab list"
    >
      {data.map((_, i) => {
        return (
          <button
            className="ff-serif text-accent flex"
            aria-selected={currentTechItem == i ? 'true' : 'false'}
            key={i}
            onClick={() => {
              setCurrentTechItem(i);
            }}
          >
            {i + 1}
          </button>
        );
      })}
    </div>
  );
};
export default TechnologyTabs;
