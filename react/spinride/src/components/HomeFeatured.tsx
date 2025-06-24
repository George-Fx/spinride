import React from 'react';
import 'swiper/swiper-bundle.css';
import {Swiper, SwiperSlide} from 'swiper/react';

import {hooks} from '../hooks';
import {items} from '../items';
import {BikeType} from '../types';

type Props = {
  bikes: BikeType[];
};

export const HomeFeatured: React.FC<Props> = ({bikes}) => {
  const {navigate} = hooks.useRouter();
  const featured = bikes.filter((bike) => bike.isFeatured);

  return (
    <Swiper
      spaceBetween={14}
      slidesPerView={'auto'}
      pagination={{clickable: true}}
      mousewheel={true}
      style={{paddingLeft: 20, paddingRight: 20}}
    >
      {featured.map((bike) => {
        return (
          <SwiperSlide style={{width: 'auto'}} key={bike.id}>
            <items.FeaturedItem bike={bike} />
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
};
