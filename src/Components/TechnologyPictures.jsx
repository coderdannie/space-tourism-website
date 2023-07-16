import imgVehicle1 from '../assets/technology/image-launch-vehicle-landscape.jpg';
import imgVehicle2 from '../assets/technology/image-launch-vehicle-portrait.jpg';
import imgCapsule1 from '../assets/technology/image-space-capsule-landscape.jpg';
import imgCapsule2 from '../assets/technology/image-space-capsule-portrait.jpg';
import imgSpaceport1 from '../assets/technology/image-spaceport-landscape.jpg';
import imgSpaceport2 from '../assets/technology/image-spaceport-portrait.jpg';

import { useGlobalContext } from '../context/context';

const TechnologyPictures = () => {
  const { spaceData, currentTechItem } = useGlobalContext();
  const [...data] = spaceData.technology;
  const { name } = data[currentTechItem];
  return (
    <>
      <picture
        className={
          name === 'Spaceport' ? 'tech-img-mobile' : 'tech-img-mobile hidden'
        }
      >
        <img src={imgSpaceport1} alt="Spaceport image" />
      </picture>
      <picture
        className={
          name === 'Spaceport' ? 'tech-img-desktop' : 'tech-img-desktop hidden'
        }
      >
        <img src={imgSpaceport2} alt="Spaceport image" />
      </picture>

      <picture
        className={
          name === 'Launch vehicle'
            ? 'tech-img-mobile'
            : 'tech-img-mobile hidden'
        }
      >
        <img src={imgVehicle1} alt="Launch vehicle image" />
      </picture>
      <picture
        className={
          name === 'Launch vehicle'
            ? 'tech-img-desktop'
            : 'tech-img-desktop hidden'
        }
      >
        <img src={imgVehicle2} alt="Launch vehicle image" />
      </picture>

      <picture
        className={
          name === 'Space capsule'
            ? 'tech-img-mobile'
            : 'tech-img-mobile hidden'
        }
      >
        <img src={imgCapsule1} alt="Space capsule image" />
      </picture>
      <picture
        className={
          name === 'Space capsule'
            ? 'tech-img-desktop'
            : 'tech-img-desktop hidden'
        }
      >
        <img src={imgCapsule2} alt="Space capsule image" />
      </picture>
    </>
  );
};
export default TechnologyPictures;
