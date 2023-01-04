import Login from "./pages/Login";
import SigUp from "./pages/SignUp"
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/sign-up" element={<SigUp />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App;
