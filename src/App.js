import PageRoutes from "./routes/PageRoutes.js"
import AuthProvider from "./contexts/Auth.js"

export default function App() {
  return (
    <AuthProvider>
      <PageRoutes />
    </AuthProvider>
  )
}


