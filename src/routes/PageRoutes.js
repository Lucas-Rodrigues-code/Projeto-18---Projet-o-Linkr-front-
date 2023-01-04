import { BrowserRouter, Route, Routes } from "react-router-dom"
import Timeline from "../pages/TimelinePage"
import { HashTagPage } from "../pages/hashtagPage.js"
export default function PageRoutes() {

    return (


        <BrowserRouter>

            <Routes>
                {/* <Route path="/" element={<HomePage />}></Route> */}
                <Route path="/timeline" element={<Timeline  />}></Route>
                <Route path="/hashTagPage" element={<HashTagPage/>}></Route>
            </Routes>

        </BrowserRouter>

    )
}