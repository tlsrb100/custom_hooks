import axios from 'axios';
import { useState, useEffect } from 'react';

const useAxios = (opts, axiosInstance = axios) => {
  const [state, setState] = useState({
    loading: true,
    error: null,
    data: null,
  });
  const [trigger, setTrigger] = useState(0);
  const refetch = () => {
    setState({ ...state, loading: true });
    setTrigger(Date.now());
  };
  useEffect(() => {
    axiosInstance(opts)
      .then((res) => {
        setState({ ...state, data: res, loading: false });
      })
      .catch((err) => {
        setState({ ...state, error: err, loading: false });
      });
  }, [trigger]);
  if (!opts.url) {
    return;
  }
  return { ...state, refetch };
};

export default useAxios;
