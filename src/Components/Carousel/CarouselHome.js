import carrou1 from '../../Assets/carrou1.png'
import carrou2 from '../../Assets/carrou2.png'
import carrou3 from '../../Assets/carrou3.png'
import React, { useState } from 'react';
import {
  Carousel,
  CarouselItem,
  CarouselControl,
  CarouselIndicators,
  CarouselCaption,
} from 'reactstrap';
import { useNavigate } from 'react-router-dom';



const items = [
  {
    src: carrou1,
    altText: 'Slide 1',
    caption: 'Le Bercail',
    path : 'Restaurant',
    key: 1,
  },
  {
    src: carrou2,
    altText: 'Carte des Boissons  ',
    caption: 'Carte des Boissons',
    path : 'Carte',
    key: 2,
  },
  {
    src: carrou3,
    altText: 'Carte du Restaurent ',
    caption: 'Carte du Restaurent ',
    path : 'Carte',
    key: 3,
  },
];

function CarouselHome(args,props) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [animating, setAnimating] = useState(false);

  let navigate = useNavigate(); 
  const routeChange = (path) =>{ 
    navigate(path);
   
  }

  const next = () => {
    if (animating) return;
    const nextIndex = activeIndex === items.length - 1 ? 0 : activeIndex + 1;
    setActiveIndex(nextIndex);
  };

  const previous = () => {
    if (animating) return;
    const nextIndex = activeIndex === 0 ? items.length - 1 : activeIndex - 1;
    setActiveIndex(nextIndex);
  };

  const goToIndex = (newIndex) => {
    if (animating) return;
    setActiveIndex(newIndex);
  };

  const slides = items.map((item) => {
    return (
      <CarouselItem

        
        onExiting={() => setAnimating(true)}
        onExited={() => setAnimating(false)}
        key={item.src}
      >
        <img         onClick={() => routeChange('/'+item.path)}
   style={{cursor : 'pointer'}} width={"100%"} height={"100%"} src={item.src} alt={item.altText} />
        <CarouselCaption
          captionText={item.caption}
          captionHeader={item.caption}
        />
      </CarouselItem>
    );
  });

  return (
    <Carousel
      activeIndex={activeIndex}
      next={next}
      previous={previous}
      {...args}
    >
      <CarouselIndicators
        items={items}
        activeIndex={activeIndex}
        onClickHandler={goToIndex}
      />
      {slides}
      <CarouselControl
        direction="prev"
        directionText="Previous"
        onClickHandler={previous}
      />
      <CarouselControl
        direction="next"
        directionText="Next"
        onClickHandler={next}
      />
    </Carousel>
  );
}

export default CarouselHome;










