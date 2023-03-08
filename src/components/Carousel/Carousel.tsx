import { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import style from '../Carousel/Carousel.module.scss'
import banner1 from '../../assets/banner1.jpg';
import banner2 from '../../assets/banner2.jpg';
import banner3 from '../../assets/banner3.jpg';

function ControlledCarousel() {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex:number) => {
    setIndex(selectedIndex);
  };

  return (
    <Carousel className= {style.container} activeIndex={index} onSelect={handleSelect} nextIcon>
      <Carousel.Item>
        <img
          className={`d-block w-100 ${style.img}`}
          src={banner2}
          alt="Second slide"
        />
        <div className={style.billboard}>
          <h1 className="ud-heading-serif-xxl ">Un aprendizaje interesante</h1>
          <p className="ud-text-md ">
            Habilidades para tu presente (y tu futuro). Da tus primeros pasos con nosotros.
          </p>
        </div>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className={`d-block w-100 ${style.img}`}
          src={banner3}
          alt="Third slide"
        />
      </Carousel.Item>
    </Carousel>
  );
}

export default ControlledCarousel;