import { useState, useEffect, useCallback } from "react";
import { buildUrlWithParams } from "../utils/buildUrlWithParams";

export function useFetch(initialUrl, initialOptions = {}) {
  const [url, setUrl] = useState(initialUrl);
  const [options, setOptions] = useState(initialOptions);

  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const performFetch = useCallback(async (currentUrl, currentOptions) => {
    setIsLoading(true);
    setError(null);

    try {
      const { params, ...fetchOptions } = currentOptions || {};
      const finalUrl = buildUrlWithParams(currentUrl, params);

      const response = await fetch(finalUrl, fetchOptions);

      if (!response.ok) {
        throw new Error("Request failed with status " + response.status);
      }

      const json = await response.json();
      setData(json);
    } catch (err) {
      setError(err);
      setData(null);
    } finally {
      setIsLoading(false);
    }
  }, []);

  useEffect(() => {
    if (!url) return;
    performFetch(url, options);
  }, [url, options, performFetch]);

  const refetch = useCallback((newOptions = {}) => {
    setOptions((prevOptions) => {
      const prevParams = prevOptions?.params || {};
      const newParams = newOptions?.params || {};
      const mergedParams = { ...prevParams, ...newParams };

      return {
        ...prevOptions,
        ...newOptions,
        params: mergedParams,
      };
    });

    if (newOptions.url) {
      setUrl(newOptions.url);
    }
  }, []);

  return { data, isLoading, error, refetch };
}
