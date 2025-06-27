import axios from 'axios';
import {useEffect, useState} from 'react';

import {URLS} from '../config';
import type {BikeType} from '../types';

export const useGetBike = (id: number) => {
  const [bike, setBike] = useState<BikeType>();

  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchBikes = async () => {
      try {
        setLoading(true);
        const response = await axios.get<{bikes: BikeType[]}>(URLS.GET_BIKES);
        const bikes = response.data.bikes || [];
        const bike = bikes.find((bike: BikeType) => bike.id === id);
        if (!bike) {
          throw new Error('Bike not found');
        }
        setBike(bike);
      } catch (err) {
        setError('Failed to fetch bikes. Please try again later.');
      } finally {
        setLoading(false);
      }
    };

    fetchBikes();
  }, []);

  return {bike, loading, error};
};
