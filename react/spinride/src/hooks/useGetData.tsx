import axios from 'axios';
import {useEffect, useState} from 'react';

import {URLS} from '../config';
import type {BikeType, BannerType, CarouselType} from '../types';

export const useGetData = () => {
  const [data, setData] = useState<{
    bikes: BikeType[];
    banners: BannerType[];
    carousel: CarouselType[];
  }>({
    bikes: [],
    banners: [],
    carousel: [],
  });

  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const [bikesResponse, bannersResponse, carouselsResponse] =
          await Promise.all([
            axios.get<{bikes: BikeType[]}>(URLS.GET_BIKES),
            axios.get<{banners: BannerType[]}>(URLS.GET_BANNERS),
            axios.get<{carousels: CarouselType[]}>(URLS.GET_CAROUSEL),
          ]);
        setData({
          bikes: bikesResponse.data.bikes || [],
          banners: bannersResponse.data.banners || [],
          carousel: carouselsResponse.data.carousels || [],
        });
      } catch (err) {
        setError('Failed to fetch data. Please try again later.');
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return {data, loading, error};
};
