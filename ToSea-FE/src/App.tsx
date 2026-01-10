import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import "./App.css";
import MainPage from "./pages/MainPage";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Layout } from "./layout/Layout";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
      retry: 3,
    },
  },
});

const router = createBrowserRouter([
  {
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <MainPage />,
      },
    ],
  },
]);

function App() {
  return (
    <>
      <QueryClientProvider client={queryClient}>
        <RouterProvider router={router} />
      </QueryClientProvider>
    </>
  );
}

export default App;
