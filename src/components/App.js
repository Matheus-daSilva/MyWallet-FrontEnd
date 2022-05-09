import { BrowserRouter, Routes, Route } from 'react-router-dom';
import TokenProvider from '../context/Token';
import SingIn from "./SingIn";
import SingUp from "./SingUp";
import Wallet from "./Wallet";

export default function App() {
    return (
        <TokenProvider>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<SingIn />} />
                    <Route path="/singup" element={<SingUp />} />
                    <Route path="/wallet" element={<Wallet />} />
                </Routes>
            </BrowserRouter>
        </TokenProvider>
    )
}