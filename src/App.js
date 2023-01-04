import PageRoutes from "./routes/PageRoutes.js"
import AuthProvider from "./contexts/Auth"

export default function App() {
  return (
    <AuthProvider>

      <PageRoutes />

    </AuthProvider>
  )
}