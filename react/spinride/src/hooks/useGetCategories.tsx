import axios from 'axios';
import {useEffect, useState} from 'react';

import {URLS} from '../config';
import type {CategoryType} from '../types';

export const useGetCategories = () => {
  const [categories, setCategories] = useState<CategoryType[]>([]);

  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        setLoading(true);
        const response = await axios.get<{categories: CategoryType[]}>(
          URLS.GET_CATEGORIES,
        );
        setCategories(response.data.categories || []);
      } catch (err) {
        setError('Failed to fetch categories. Please try again later.');
      } finally {
        setLoading(false);
      }
    };

    fetchCategories();
  }, []);

  return {categories, loading, error};
};
