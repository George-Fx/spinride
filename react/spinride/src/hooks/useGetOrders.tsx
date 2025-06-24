import axios from 'axios';
import {useEffect, useState} from 'react';

import {URLS} from '../config';
import type {OrderType} from '../types';

export const useGetOrders = () => {
  const [orders, setOrders] = useState<OrderType[]>([]);

  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchOrders = async () => {
      try {
        setLoading(true);
        const response = await axios.get<{orders: OrderType[]}>(
          URLS.GET_ORDERS,
        );
        setOrders(response.data.orders || []);
      } catch (err) {
        setError('Failed to fetch orders. Please try again later.');
      } finally {
        setLoading(false);
      }
    };

    fetchOrders();
  }, []);

  return {orders, loading, error};
};
