import axios from 'axios';
import {useEffect, useState} from 'react';

import {URLS} from '../config';
import type {BikeType} from '../types';

export const useGetBikes = () => {
  const [bikes, setBikes] = useState<BikeType[]>([]);

  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchBikes = async () => {
      try {
        setLoading(true);
        const response = await axios.get<{bikes: BikeType[]}>(URLS.GET_BIKES);
        setBikes(response.data.bikes || []);
      } catch (err) {
        setError('Failed to fetch bikes. Please try again later.');
      } finally {
        setLoading(false);
      }
    };

    fetchBikes();
  }, []);

  return {bikes, loading, error};
};
