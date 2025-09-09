import { createRoot } from 'react-dom/client'
import { Auth0Provider } from '@auth0/auth0-react'
import Router from './router.tsx'
import { RouterProvider } from 'react-router/dom'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'

const queryClient = new QueryClient()

document.addEventListener('DOMContentLoaded', () => {
  createRoot(document.getElementById('app') as HTMLElement).render(
    <Auth0Provider
    domain="mako-2025-kaylin"
    clientId="
6Eeg1i0wq20dcHw6IlYb9DWHnNOfbcvy"
    authorizationParams={{
      redirect_uri: window.location.origin,
      audience: 'https://travelai/api',
    }}
  ><QueryClientProvider client={queryClient}>
      <RouterProvider router={Router} />,
      <ReactQueryDevtools />
    </QueryClientProvider>,
    </Auth0Provider>,
  )
})
