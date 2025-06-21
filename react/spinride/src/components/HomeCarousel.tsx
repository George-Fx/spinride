import React, {useEffect, useState} from 'react';
import useEmblaCarousel from 'embla-carousel-react';

import type {CarouselType} from '../types';

type Props = {
  carousel: CarouselType[];
};

export const HomeCarousel: React.FC<Props> = ({carousel}) => {
  // if (!carousel || carousel.length === 0) {
  //   return null;
  // }
  const [emblaRef, emblaApi] = useEmblaCarousel();
  const [selectedIndex, setSelectedIndex] = useState(0);

  useEffect(() => {
    if (!emblaApi) return;
    const onSelect = () => setSelectedIndex(emblaApi.selectedScrollSnap());
    emblaApi.on('select', onSelect);
    onSelect();
    return () => {
      emblaApi.off('select', onSelect);
    };
  }, [emblaApi, setSelectedIndex]);

  const renderContent = () => {
    return (
      <section style={{position: 'relative'}}>
        <div className="embla" ref={emblaRef}>
          <div className="embla__container">
            {carousel.map((item, index) => (
              <div className="embla__slide" key={index}>
                <img
                  src={item.image}
                  alt={`Slide ${index + 1}`}
                  style={{width: '100%', borderRadius: '12px'}}
                />
              </div>
            ))}
          </div>
        </div>
        <ul
          style={{
            position: 'absolute',
            // bottom: 20,
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center',
            gap: 4,
            left: '50%',
            transform: 'translateX(-50%)',
            zIndex: 99999999,
          }}
        >
          {carousel.map((_, index) => (
            <li
              key={index}
              style={{
                backgroundColor:
                  index === selectedIndex ? 'red' : 'rgba(255, 255, 255, 0.5)',
                height: 6,
                width: 6,
                borderRadius: '50%',
              }}
              onClick={() => emblaApi && emblaApi.scrollTo(index)}
            />
          ))}
        </ul>
      </section>
    );
  };

  return renderContent();
};
