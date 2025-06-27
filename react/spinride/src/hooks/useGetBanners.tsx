import axios from 'axios';
import {useEffect, useState} from 'react';

import {URLS} from '../config';
import type {BannerType} from '../types';

export const useGetBanners = () => {
  const [banners, setBanners] = useState<BannerType[]>([]);

  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchBanners = async () => {
      try {
        setLoading(true);
        const response = await axios.get(URLS.GET_BANNERS);
        setBanners(response.data);
      } catch (err) {
        setError('Failed to fetch banners');
      } finally {
        setLoading(false);
      }
    };

    fetchBanners();
  }, []);

  return {banners, loading, error};
};
