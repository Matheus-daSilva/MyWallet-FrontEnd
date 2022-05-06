import { BrowserRouter, Routes, Route } from 'react-router-dom';
import SingIn from "./SingIn";
import SingUp from "./SingUp"

export default function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<SingIn />} />
                <Route path="/singup" element={<SingUp />} />
            </Routes>
        </BrowserRouter>
    )
}