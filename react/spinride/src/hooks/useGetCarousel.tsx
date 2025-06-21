import axios from 'axios';
import {useEffect, useState} from 'react';

import {URLS} from '../config';
import type {CarouselType} from '../types';

export const useGetCarousel = () => {
  const [carousel, setCarousel] = useState<CarouselType[]>([]);

  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchCarousel = async () => {
      try {
        setLoading(true);
        const response = await axios.get<{carousel: CarouselType[]}>(
          URLS.GET_CAROUSEL,
        );
        setCarousel(response.data.carousel || []);
      } catch (err) {
        setError('Failed to fetch carousel data');
      } finally {
        setLoading(false);
      }
    };

    fetchCarousel();
  }, []);

  return {carousel, loading, error};
};
