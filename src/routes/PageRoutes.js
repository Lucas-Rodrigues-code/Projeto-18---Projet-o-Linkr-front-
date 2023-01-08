import { BrowserRouter, Route, Routes } from "react-router-dom"
import Timeline from "../pages/TimelinePage"
import { HashTagPage } from "../pages/hashtagPage.js"

import SigUp from "../pages/SignUp"
import Login from "../pages/Login"

export default function PageRoutes() {

    return (


        <BrowserRouter>

            <Routes>
                {/* <Route path="/" element={<HomePage />}></Route> */}
                <Route path="/timeline" element={<Timeline />}></Route>
                <Route path="/trends/:hashtag" element={<HashTagPage />}></Route>
                <Route path="/" element={<Login />} />
                <Route path="/sign-up" element={<SigUp />} />
            </Routes>

        </BrowserRouter>

    )
}