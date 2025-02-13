import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import Home from "./pages/Home";
import Redirect from "./pages/Redirect";
import { Toaster } from "react-hot-toast";
import AllLinks from "./pages/AllLinks";

// Create a client
const queryClient = new QueryClient();

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
    },
    {
      path: "/:id",
      element: <Redirect />,
    },
    {
      path: "/all-links",
      element: <AllLinks />,
    },
  ]);

  return (
    <QueryClientProvider client={queryClient}>
      <Toaster />
      <RouterProvider router={router} />
    </QueryClientProvider>
  );
}

export default App;
