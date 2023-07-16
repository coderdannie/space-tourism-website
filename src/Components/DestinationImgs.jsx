import moonPng from '../assets/destination/image-moon.png';
import moonWebp from '../assets/destination/image-moon.webp';
import marsPng from '../assets/destination/image-mars.png';
import marsWebp from '../assets/destination/image-mars.webp';
import europaPng from '../assets/destination/image-europa.png';
import europaWebp from '../assets/destination/image-europa.webp';
import titanPng from '../assets/destination/image-titan.png';
import titanWebp from '../assets/destination/image-titan.webp';
import { useGlobalContext } from '../context/context';

const DestinationImgs = () => {
  const { spaceData, currentDestinationItem } = useGlobalContext();
  const [...destination] = spaceData.destinations;
  const { name } = destination[currentDestinationItem];
  return (
    <>
      <picture className={name === 'Moon' ? 'rotate-animation' : 'hidden'}>
        <source srcSet={moonWebp} type="image/webp" />
        <img src={moonPng} alt="Moon images" />
      </picture>
      <picture className={name === 'Mars' ? 'rotate-animation' : 'hidden'}>
        <source srcSet={marsWebp} type="image/webp" />
        <img src={marsPng} alt="Mars image" />
      </picture>
      <picture className={name === 'Europa' ? 'rotate-animation' : 'hidden'}>
        <source srcSet={europaWebp} type="image/webp" />
        <img src={europaPng} alt="europa image" />
      </picture>
      <picture className={name === 'Titan' ? 'rotate-animation' : 'hidden'}>
        <source srcSet={titanWebp} type="image/webp" />
        <img src={titanPng} alt="Titan image" />
      </picture>
    </>
  );
};
export default DestinationImgs;
