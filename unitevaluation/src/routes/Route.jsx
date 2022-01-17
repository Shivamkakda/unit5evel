import { Route, Routes } from "react-router-dom";
import { Login } from "../components/Login";
import { Navbar } from "../components/Navbar";
import {Jobbfeed} from "../components/Jobbfeed"
import { Dashboard } from "../components/Dashboard";

export const Router = () => {

    return (
        <>
            <Navbar />

            <Routes>
                <Route path={'/home'} element={<Jobbfeed />} />
                <Route path={'/dashboard'} element={<Dashboard />} />
                <Route path={'/login'} element={<Login />} />
            </Routes>

        </>
    );
};