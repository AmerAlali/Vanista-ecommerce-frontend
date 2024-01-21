"use client";
import API from "@/lib/API";
import { NextUIProvider } from "@nextui-org/react";
import { SessionProvider } from "next-auth/react";
import { useRouter } from "next/navigation";

import { FC } from "react";

type ProvidersProps = {
  children: React.ReactNode;
  session: any;
};

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
      <SessionProvider session={session}>{children}</SessionProvider>
    </NextUIProvider>
  );
};

export default Providers;
