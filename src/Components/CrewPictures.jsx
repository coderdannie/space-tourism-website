import { useGlobalContext } from '../context/context';
import imgHurleyPng from '../assets/crew/image-douglas-hurley.png';
import imgHurleyWebp from '../assets/crew/image-douglas-hurley.webp';
import markPng from '../assets/crew/image-mark-shuttleworth.png';
import markWebp from '../assets/crew/image-mark-shuttleworth.webp';
import VictorPng from '../assets/crew/image-victor-glover.png';
import VictorWebp from '../assets/crew/image-victor-glover.webp';
import anoushehPng from '../assets/crew/image-anousheh-ansari.png';
import anoushehWebp from '../assets/crew/image-anousheh-ansari.webp';
const CrewPictures = () => {
  const { spaceData, currentItem } = useGlobalContext();
  const [...crews] = spaceData.crew;
  const { name, images } = crews[currentItem];
  return (
    <>
      <picture className={name === 'Douglas Hurley' ? '' : 'hidden'}>
        <source srcSet={imgHurleyWebp} type="image/webp" />
        <img src={imgHurleyPng} alt="'Douglas Hurley" />
      </picture>
      <picture className={name === 'Mark Shuttleworth' ? '' : 'hidden'}>
        <source srcSet={markWebp} type="image/webp" />
        <img src={markPng} alt="Mark Shuttleworth" />
      </picture>
      <picture className={name === 'Victor Glover' ? '' : 'hidden'}>
        <source srcSet={VictorWebp} type="image/webp" />
        <img src={VictorPng} alt="Victor Glover" />
      </picture>
      <picture className={name === 'Anousheh Ansari' ? '' : 'hidden'}>
        <source srcSet={anoushehWebp} type="image/webp" />
        <img src={anoushehPng} alt="Anousheh Ansari" />
      </picture>
    </>
  );
};
export default CrewPictures;
