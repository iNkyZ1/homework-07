import { useState, useEffect, useCallback } from "react";

export function useFetch(initialUrl, initialOptions = {}) {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const refetch = useCallback(() => {}, []);

  useEffect(() => {}, []);

  return {
    data,
    isLoading,
    error,
    refetch,
  };
}
