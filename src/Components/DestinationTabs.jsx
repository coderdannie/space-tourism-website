import { useGlobalContext } from '../context/context';

const DestinationTabs = () => {
  const { spaceData, currentDestinationItem, setCurrentDestinationItem } =
    useGlobalContext();
  const [...destination] = spaceData.destinations;

  return (
    <div
      className="tab-list underline-indicators flex"
      aria-label="destination lists"
    >
      {destination.map((destination, index) => {
        const { name } = destination;
        const tabName = `${name}-tab`;
        return (
          <button
            aria-selected={currentDestinationItem == index ? 'true' : 'false'}
            role="tab"
            aria-controls={tabName}
            className="uppercase ff-sans-cond text-accent letter-spacing-2"
            key={index}
            onClick={() => setCurrentDestinationItem(index)}
          >
            {name}
          </button>
        );
      })}
    </div>
  );
};

export default DestinationTabs;
