import { RouterProvider } from "react-router-dom"
import router from "./components/routes/Routes"
import {
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query'
import AuthProvider from "./components/Authentication/AuthProvider"

const queryClient = new QueryClient()

function App() {
  
  return (
    <AuthProvider>
      <QueryClientProvider client={queryClient}>
        <RouterProvider router={router} />
      </QueryClientProvider>
    </AuthProvider>
   
  )
}

export default App
