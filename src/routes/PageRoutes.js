import { BrowserRouter, Route, Routes } from "react-router-dom"
import Timeline from "../pages/TimelinePage"
export default function PageRoutes() {

    return (


        <BrowserRouter>

            <Routes>
                {/* <Route path="/" element={<HomePage />}></Route> */}
                <Route path="/timeline" element={<Timeline  />}></Route>
            </Routes>

        </BrowserRouter>

    )
}