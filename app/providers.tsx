'use client'

import React from 'react';
import { NextUIProvider } from "@nextui-org/system";
import { useRouter } from 'next/navigation';
import { ThemeProvider as NextThemesProvider } from "next-themes";
import { ThemeProviderProps } from "next-themes/dist/types";
import { Auth0Provider } from '@auth0/auth0-react';

export interface ProvidersProps {
  children: React.ReactNode;
  themeProps?: ThemeProviderProps;
}

export function Providers({ children, themeProps }: ProvidersProps) {
  const router = useRouter();

  return (
    <Auth0Provider
    domain="dev-g3fxhe78xxn2i0nq.us.auth0.com"
    clientId="ZXUvt8kixw3UfSrmngCPxiyTUT84JYIJ"
      authorizationParams={{
        redirect_uri: window.location.origin
      }}
    >
      <NextUIProvider navigate={router.push}>
        <NextThemesProvider {...themeProps}>{children}</NextThemesProvider>
      </NextUIProvider>
    </Auth0Provider>
  );
}
