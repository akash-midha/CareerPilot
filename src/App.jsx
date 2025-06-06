import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './App.css'
import { Button } from './components/ui/button'
import AppLayout from './layouts/app-layout';
import LandingPage from './pages/Landing-Page';
import OnboardingPage from './pages/Onboarding-Page';
import JobListingPage from './pages/JobListingPage';
import JobPage from './pages/JobPage';
import SavedJobs from './pages/SavedJobs';
import PostJob from './pages/PostJob';
import { ThemeProvider } from './components/theme-provider';

const router = createBrowserRouter([
  {
    element: <AppLayout />,
    children: [
      {
        path: '/',
        element: <LandingPage />
      },
      {
        path: '/onboarding',
        element: <OnboardingPage />
      },
      {
        path: '/jobs',
        element: <JobListingPage />
      },
      {
        path: '/job/:id',
        element: <JobPage />
      },
      {
        path: '/post-job',
        element: <PostJob />
      },
      {
        path: '/saved-job',
        element: <SavedJobs />
      },
    ]
  },
]);

function App() {
  return (
    <ThemeProvider defaultTheme='dark' storageKey='vite-ui-theme'>
      <RouterProvider router={router} />
    </ThemeProvider>
  )
}

export default App
