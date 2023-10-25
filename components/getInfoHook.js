import { useState } from 'react';
import axios from 'axios';

export default function getInfoHook(url) {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(true); // Add loading state

  const fetchData = async () => {
    try {
      const response = await axios.get(url);
      console.log(response.data);
      setData(response.data);
    } catch (error) {
      console.log(error);
      throw error;
    } finally {
      setIsLoading(false); // Set loading to false when API call is completed
    }
  };

  if (isLoading) {
    // Return loading state while data is being fetched
    return {
      data: null,
      isLoading: true,
      fetchData,
    };
  }

  return {
    data,
    isLoading: false,
    fetchData,
  };
}