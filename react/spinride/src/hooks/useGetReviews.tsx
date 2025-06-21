import axios from 'axios';
import {useEffect, useState} from 'react';

import {URLS} from '../config';
import type {ReviewType} from '../types';

export const useGetReviews = () => {
  const [reviews, setReviews] = useState<ReviewType[]>([]);

  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchReviews = async () => {
      try {
        setLoading(true);
        const response = await axios.get<{reviews: ReviewType[]}>(
          URLS.GET_REVIEWS,
        );
        setReviews(response.data.reviews || []);
      } catch (err) {
        setError('Failed to fetch reviews. Please try again later.');
      } finally {
        setLoading(false);
      }
    };

    fetchReviews();
  }, []);

  return {reviews, loading, error};
};
