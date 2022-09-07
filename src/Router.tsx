import { Route, Routes, BrowserRouter } from "react-router-dom";
import { App } from "./App";
import { Direct } from "./pages/Direct";

export function Router(){
    return(
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<App />} />
                <Route path="/direct" element={<Direct />} />
            </Routes>
        </BrowserRouter>
    )
}