import { useState } from 'react';

interface UseMutationState {
  loading: boolean;
  data: undefined | any;
  error: undefined | any;
}

type UseMutationResult = [(data?: any) => void, UseMutationState];

export default function useMutation(url: string): UseMutationResult {
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState<undefined | any>(undefined);
  const [error, setError] = useState<undefined | any>(undefined);

  async function mutationFn(data: any) {
    setLoading(true);

    try {
      const res = await fetch(url, {
        method: 'POST',
        body: JSON.stringify(data),
      });

      const json = await res.json();
      setData(json);
    } catch (error) {
      setError(error);
    } finally {
      setLoading(false);
    }
  }

  return [mutationFn, { loading, data, error }];
}
