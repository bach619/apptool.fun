'use client';

import { useSearchParams } from 'next/navigation';
import { useMemo } from 'react';

export function useUrlParams() {
  const searchParams = useSearchParams();
  
  return useMemo(() => {
    const params: Record<string, string> = {};
    searchParams.forEach((value, key) => {
      params[key] = value;
    });
    return params;
  }, [searchParams]);
}
