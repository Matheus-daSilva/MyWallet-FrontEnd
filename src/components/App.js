import { BrowserRouter, Routes, Route } from 'react-router-dom';
import SingIn from "./SingIn";

export default function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<SingIn />} />
            </Routes>
        </BrowserRouter>
    )
}