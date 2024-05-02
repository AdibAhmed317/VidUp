import { useEffect, useState } from 'react';
import { Alert } from 'react-native';

const useAppwrite = (fn) => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const fetchData = async () => {
    setIsLoading(true);

    try {
      const res = await fn();
      setData(res);
    } catch (error) {
      Alert.alert('Error', error.message);
    } finally {
      setIsLoading(false);
    }
  };

  const refetch = () => {
    fetchData();
  };

  useEffect(() => {
    fetchData();
  }, []);

  return { data, isLoading, refetch };
};

export default useAppwrite;
