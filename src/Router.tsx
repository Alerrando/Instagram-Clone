import { Route, Routes, BrowserRouter } from "react-router-dom";
import { App } from "./App";
import { Direct } from "./pages/Direct";
import { NewMessage } from "./pages/Direct/Main/NewMessage";

export function Router(){
    return(
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<App />} />
                <Route path="/direct" element={<Direct />} />
                <Route path="/direct/new-message" element={<NewMessage />} />
            </Routes>
        </BrowserRouter>
    )
}