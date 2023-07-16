import { useGlobalContext } from '../context/context';

const DotsIndicators = () => {
  const { spaceData, currentItem, setCurrentItem } = useGlobalContext();
  const [...crews] = spaceData.crew;

  return (
    <div
      className="dot-indicators flex"
      role="tablist"
      aria-label="crew member list"
    >
      {crews.map((dots, index) => {
        const { role } = dots;
        return (
          <button
            aria-selected={currentItem === index ? 'true' : 'false'}
            key={index}
            onClick={(e) => {
              e.target.setAttribute('aria-selected', 'true');
              setCurrentItem(index);
            }}
          >
            <span className="sr-only"> The {role}</span>
          </button>
        );
      })}
    </div>
  );
};
export default DotsIndicators;
