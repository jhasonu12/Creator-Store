import { useState, useCallback } from 'react';

// Simple username state + basic validation hook for the username CTA
export default function useUsername(initial = '') {
  const [username, setUsername] = useState(initial);
  const [error, setError] = useState(null);

  const validate = useCallback((value) => {
    if (!value) return 'Username is required';
    if (!/^[a-z0-9_-]{2,30}$/.test(value)) return 'Use 2-30 chars: a-z, 0-9, - or _';
    return null;
  }, []);

  const set = useCallback((value) => {
    setUsername(value);
    setError(validate(value));
  }, [validate]);

  return { username, setUsername: set, error, validate };
}
