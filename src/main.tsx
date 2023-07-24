import React from 'react'
import ReactDOM from "react-dom/client";
import theme from "./thems.ts";
import routes from "./routes.tsx";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { QueryClientProvider, QueryClient } from "@tanstack/react-query";
import { ChakraProvider, ColorModeScript } from "@chakra-ui/react";
import { RouterProvider } from "react-router-dom";
import "./index.css";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: 3,
      refetchOnWindowFocus: false,
    },
  },
});
ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <ChakraProvider theme={theme}>
      <ColorModeScript initialColorMode={theme.config.initialColorMode} />
      <QueryClientProvider client={queryClient}>
        <ScrollMemory />
        <RouterProvider router={routes} />
        <ReactQueryDevtools />
      </QueryClientProvider>
    </ChakraProvider>
  </React.StrictMode>
);
