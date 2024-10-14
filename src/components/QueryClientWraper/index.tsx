"use client";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { FC, ReactNode } from "react";

interface QueryClientWraperProps {
  children: ReactNode;
}

const queryClient = new QueryClient();

const QueryClientWraper: FC<QueryClientWraperProps> = ({ children }) => {
  return (
    <QueryClientProvider client={queryClient}>
      {children}
    </QueryClientProvider>
  );
};

export default QueryClientWraper;