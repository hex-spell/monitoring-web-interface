import { useEffect, useState } from "react";

export function useAsync<T>(callback: () => Promise<T>) {
  const [loading, setLoadingState] = useState(true);
  const [data, setDataState] = useState<T | null>(null);
  const [error, setErrorState] = useState<null | string>(null);

  useEffect(() => {
    (async () => {
      try {
        const awaitedData = await callback();
        setDataState(awaitedData);
      } catch (err) {
        setErrorState(JSON.stringify(err));
      } finally {
        setLoadingState(false);
      }
    })();
  }, []);

  return { loading, data, error };
}
