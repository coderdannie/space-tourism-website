import DestinationTabs from '../Components/DestinationTabs';
import DestinationArticle from '../Components/DestinationArticle';
import DestinationImgs from '../Components/DestinationImgs';

const Destination = () => {
  return (
    <main className="grid-container grid-container--destination flow">
      <h1 className="numbered-title">
        <span aria-hidden="true">01</span>
        Pick your destination
      </h1>
      <DestinationImgs />
      <DestinationTabs />
      <DestinationArticle />
    </main>
  );
};
export default Destination;
