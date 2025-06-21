import React from 'react';
import 'swiper/swiper-bundle.css';
import {Swiper, SwiperSlide} from 'swiper/react';

import {hooks} from '../hooks';
import {BikeType} from '../types';
import {svg} from '../assets/svg';
import {constants} from '../constants';

type Props = {
  bikes: BikeType[];
};

export const HomeBestSellers: React.FC<Props> = ({bikes}) => {
  const {navigate} = hooks.useRouter();
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
            {/* image */}
            <button
              style={{
                width: 200,
                borderRadius: 12,
                overflow: 'hidden',
                position: 'relative',
                marginBottom: 6,
                backgroundColor: 'var(--white-color)',
              }}
              onClick={() => {
                navigate(constants.routes.BIKE, {
                  state: {bikeId: bike.id},
                });
              }}
            >
              <img
                src={bike.image}
                alt={bike.name}
                style={{width: '100%', height: 250, objectFit: 'contain'}}
              />
              <div
                style={{
                  position: 'absolute',
                  top: 0,
                  right: 0,
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                }}
              >
                <div
                  onClick={(e) => {
                    e.preventDefault();
                    e.stopPropagation();
                  }}
                  style={{
                    paddingLeft: 10,
                    paddingRight: 10,
                    paddingTop: 10,
                    paddingBottom: 8,
                  }}
                >
                  <svg.AddToWLHeartSvg />
                </div>
                <div
                  onClick={(e) => {
                    e.preventDefault();
                    e.stopPropagation();
                    // addToCart(bike);
                  }}
                  style={{
                    paddingLeft: 10,
                    paddingRight: 10,
                    paddingBottom: 10,
                    paddingTop: 8,
                  }}
                >
                  <svg.AddToCartBag />
                </div>
              </div>
            </button>
            {/* info */}
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: 4,
                marginBottom: 2,
              }}
            >
              <svg.RatingStarsSvg rating={bike.rating} />
              <span className="t12" style={{marginBottom: 1}}>
                ({bike.rating})
              </span>
            </div>
            <span
              className="t14 number-of-lines-1"
              style={{maxWidth: 200, marginBottom: 3}}
            >
              {bike.name}
            </span>
            <span style={{marginBottom: 9, fontSize: 14, fontWeight: 600}}>
              ${bike.price.toLocaleString()}
            </span>
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
};
