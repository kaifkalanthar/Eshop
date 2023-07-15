import React from 'react'
import ReactDOM from "react-dom/client";
import theme from "./thems.ts";
import routes from "./routes.tsx";
import { QueryClientProvider, QueryClient } from "@tanstack/react-query";
import { ChakraProvider, ColorModeScript } from "@chakra-ui/react";
import { RouterProvider } from "react-router-dom";
import ms from "ms";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: 3,
      cacheTime: ms("5m"),
      refetchOnWindowFocus: false,
      refetchOnReconnect: false,
    },
  },
});
ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <ChakraProvider theme={theme}>
      <ColorModeScript initialColorMode={theme.config.initialColorMode} />
      <QueryClientProvider client={queryClient}>
        <RouterProvider router={routes} />
      </QueryClientProvider>
    </ChakraProvider>
  </React.StrictMode>
);
