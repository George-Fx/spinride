import React from 'react';
import 'swiper/swiper-bundle.css';
import {Swiper, SwiperSlide} from 'swiper/react';

import {items} from '../items';
import type {BikeType} from '../types';

type Props = {
  bikes: BikeType[];
};

export const HomeBestSellers: React.FC<Props> = ({bikes}) => {
  const bestSellers = bikes.filter((bike) => bike.isBestSeller);

  return (
    <Swiper
      spaceBetween={14}
      slidesPerView={'auto'}
      pagination={{clickable: true}}
      mousewheel={true}
      style={{paddingLeft: 20, paddingRight: 20}}
    >
      {bestSellers.map((bike) => {
        return (
          <SwiperSlide style={{width: 'auto'}} key={bike.id}>
            <items.BestSellerItem bike={bike} />
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
};
