import { useGlobalContext } from '../context/context';

const DestinationArticle = () => {
  const { spaceData, currentDestinationItem } = useGlobalContext();
  const [...destinationArticle] = spaceData.destinations;
  const { name, description, distance, travel } =
    destinationArticle[currentDestinationItem];

  return (
    <>
      {}
      <article className="destination-info flow" role="tabpanel">
        <h2 className="fs-800 uppercase ff-serif">{name}</h2>
        <p>{description}</p>

        <div className="destination-meta flex">
          <div>
            <h3 className="text-accent fs-200 uppercase">Avg. distance</h3>
            <p className="ff-serif uppercase">{distance}</p>
          </div>
          <div>
            <h3 className="text-accent fs-200 uppercase">Est. travel time</h3>
            <p className="ff-serif uppercase">{travel}</p>
          </div>
        </div>
      </article>
    </>
  );
};

export default DestinationArticle;
