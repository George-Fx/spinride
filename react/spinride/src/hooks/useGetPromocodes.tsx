import axios from 'axios';
import {useEffect, useState} from 'react';

import {URLS} from '../config';
import type {PromocodeType} from '../types';

export const useGetPromocodes = () => {
  const [promocodes, setPromocodes] = useState<PromocodeType[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchPromocodes = async () => {
      try {
        setLoading(true);
        const response = await axios.get<{promocodes: PromocodeType[]}>(
          URLS.GET_PROMOCODES,
        );
        setPromocodes(response.data.promocodes || []);
      } catch (err) {
        setError('Failed to fetch promocodes. Please try again later.');
      } finally {
        setLoading(false);
      }
    };

    fetchPromocodes();
  }, []);

  return {promocodes, loading, error};
};
