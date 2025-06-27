import 'swiper/swiper-bundle.css';
import React, {useState} from 'react';
import {Swiper, SwiperSlide} from 'swiper/react';

import type {BikeType} from '../types';

type Props = {
  images: BikeType['images'] | undefined;
};

export const BikeCarousel: React.FC<Props> = ({images}) => {
  const [activeIndex, setActiveIndex] = useState(0);

  if (!images) return null;

  return (
    <section style={{position: 'relative', marginBottom: 20}}>
      <Swiper onSlideChange={(swiper) => setActiveIndex(swiper.activeIndex)}>
        {images.map((image, index) => {
          return (
            <SwiperSlide
              style={{
                width: '100%',
                paddingLeft: 20,
                paddingRight: 20,
                height: 398,
                borderRadius: 12,
              }}
              key={index}
            >
              <div
                style={{
                  height: '100%',
                  width: '100%',
                  backgroundColor: 'var(--white-color)',
                  borderRadius: 12,
                  overflow: 'hidden',
                }}
              >
                <img
                  src={image}
                  alt={`Bike image ${index + 1}`}
                  style={{
                    width: '100%',
                    objectFit: 'contain',
                    borderRadius: 12,
                    overflow: 'hidden',
                    height: '100%',
                  }}
                />
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
      <ul
        style={{
          position: 'absolute',
          zIndex: 1,
          display: 'flex',
          flexDirection: 'row',
          bottom: 20,
          left: '50%',
          transform: 'translateX(-50%)',
          gap: 4,
        }}
      >
        {images.map((image, index) => {
          return (
            <li
              key={index}
              style={{
                width: 6,
                height: 6,
                borderRadius: '50%',
                backgroundColor:
                  activeIndex === index
                    ? 'var(--main-dark-color)'
                    : 'rgba(0, 0, 0, 0.3)',
              }}
            />
          );
        })}
      </ul>
    </section>
  );
};
