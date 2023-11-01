import { useState } from 'react';

interface UseMutationState {
  loading: boolean;
  data: undefined | any;
  error: undefined | any;
}

type UseMutationResult = [(data?: any) => void, UseMutationState];

export default function useMutation(url: string): UseMutationResult {
  const [state, setState] = useState({
    loading: false,
    data: undefined,
    error: undefined,
  });

  async function mutationFn(data: any) {
    setState((prev) => ({ ...prev, loading: true }));

    try {
      const res = await fetch(url, {
        method: 'POST',
        body: JSON.stringify(data),
      });

      const json = await res.json();
      setState((prev) => ({ ...prev, data: json }));
    } catch (error: any) {
      setState((prev) => ({ ...prev, error }));
    } finally {
      setState((prev) => ({ ...prev, loading: false }));
    }
  }

  return [mutationFn, state];
}
