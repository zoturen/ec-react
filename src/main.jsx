import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.scss'
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import Home from "./routes/Home.jsx";
import MainLayout from "./components/layouts/MainLayout.jsx";
import SubLayout from "./components/layouts/SubLayout.jsx";
import Contact from "./routes/Contact.jsx";
import {QueryClient, QueryClientProvider} from "@tanstack/react-query";
import News from "./routes/News.jsx";
import NewsView from "./routes/news/NewsView.jsx";
import {CategoryProvider} from "./contexts/categoriesContext";


const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout><Home /></MainLayout>,
  },
  {
    path: "contact",
    element: <SubLayout description="Let's Connect"><Contact /></SubLayout>,
    handle: {
      crumb: () => [
        {
          to: "/",
          name: "Home"
        },
        {
          to: "/contact",
          name: "Contact"
        }
      ]
    }
  },
  {
    path: "news",
    element: <SubLayout description="News & Articles"><News /></SubLayout>,
    handle: {
      crumb: () => [
        {
          to: "/",
          name: "Home"
        },
        {
          to: "/news",
          name: "News"
        }
      ]
    }
  },
  {
    path: "news/:id",
    element: <SubLayout description="News & Articles"><NewsView /></SubLayout>,
    handle: {
      crumb: () => [
        {
          to: "/",
          name: "Home"
        },
        {
          to: "/news",
          name: "News"
        }
      ]
    }
  },
  ]);

const queryClient = new QueryClient()

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <CategoryProvider>
      <QueryClientProvider client={queryClient}>
        <RouterProvider router={router} />
      </QueryClientProvider>
    </CategoryProvider>
  </React.StrictMode>,
)
