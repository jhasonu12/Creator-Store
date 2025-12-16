"use client";

import { useState } from 'react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
// Sonner toaster (install with `npm install sonner`) — optional but recommended
import { Toaster as SonnerToaster } from 'sonner';

// App-level providers that must run on the client.
export default function Providers({ children }) {
  // Create QueryClient once per mounted Providers
  const [queryClient] = useState(() => new QueryClient());

  return (
    <QueryClientProvider client={queryClient}>
      {children}
      {/* Sonner Toaster: mounts once for the whole app. Use richColors to allow colored toasts */}
      <SonnerToaster position="bottom-right" richColors />
    </QueryClientProvider>
  );
}
