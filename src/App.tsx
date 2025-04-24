import { createBrowserRouter, RouterProvider } from "react-router";
import Home from "./pages/Home";
import RootLayout from "./layout/RootLayout";
import AdminPlaylist from "./pages/admin/AdminPlaylist";
import AdminSong from "./pages/admin/AdminSong";
import AdminSinger from "./pages/admin/AdminSinger";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/sonner";
import { ThemeProvider } from "./components/theme-provider";

const queryClient = new QueryClient();
const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      {
        path: "",
        element: <Home />,
      },
      {
        path: "/admin/playlist",
        element: <AdminPlaylist />,
      },
      {
        path: "/admin/song",
        element: <AdminSong />,
      },
      {
        path: "/admin/singer",
        element: <AdminSinger />,
      },
    ],
  },
]);

function App() {
  return (
    <>
      <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
        <QueryClientProvider client={queryClient}>
          <RouterProvider router={router} />
          <Toaster richColors />
        </QueryClientProvider>
      </ThemeProvider>
    </>
  );
}
export default App;
