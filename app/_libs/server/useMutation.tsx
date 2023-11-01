import { useState } from 'react';

interface mutationObj {
  loading: boolean;
  data: undefined | any;
  error: undefined | any;
}

type voidFn = (data?: any) => void;

export default function useMutation(url: string): [voidFn, mutationObj] {
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState<undefined | any>(undefined);
  const [error, setError] = useState<undefined | any>(undefined);

  function mutationFn(data: any) {}

  return [mutationFn, { loading, data, error }];
}
