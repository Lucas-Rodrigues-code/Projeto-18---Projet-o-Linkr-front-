import { BrowserRouter, Route, Routes } from "react-router-dom"
import { HashTagPage } from "../pages/hashtagPage.js"
export default function PageRoutes() {

    return (


        <BrowserRouter>

            <Routes>
                <Route path="/hashTagPage" element={<HashTagPage/>}></Route>
            </Routes>

        </BrowserRouter>

    )
}