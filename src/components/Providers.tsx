"use client";
import API from "@/lib/API";
import { NextUIProvider } from "@nextui-org/react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { SessionProvider } from "next-auth/react";
import { useRouter } from "next/navigation";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

import { FC } from "react";

type ProvidersProps = {
  children: React.ReactNode;
  session: any;
};

const queryClient = new QueryClient();

const Providers: FC<ProvidersProps> = ({ children, session }) => {
  if (session?.user) {
    const { token } = session.user;
    API.defaults.headers.common["Authorization"] = `Bearer ${token}`;
  } else {
    API.defaults.headers.common["Authorization"] = null;
  }
  const router = useRouter();
  return (
    <NextUIProvider navigate={router.push}>
      <QueryClientProvider client={queryClient}>
        <SessionProvider session={session}>{children}</SessionProvider>
        <ReactQueryDevtools initialIsOpen />
      </QueryClientProvider>
    </NextUIProvider>
  );
};

export default Providers;
