import { RouterProvider, createBrowserRouter } from "react-router-dom";
import HeroSection from "./pages/Hero/HeroSection";
import AboutSection from "./pages/About/AboutSection";
import ProjectSection from "./pages/Project/ProjectSection";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <HeroSection />,
    },
    {
      path: "/about",
      element: <AboutSection />,
    },
    {
      path: "/project",
      element: <ProjectSection />,
    },
  ]);

  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
