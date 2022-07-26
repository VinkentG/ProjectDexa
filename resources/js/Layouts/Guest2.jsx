import React from "react";
import ApplicationLogo from "@/Components/ApplicationLogo";
import { Link } from "@inertiajs/inertia-react";
import logo1 from "../Pages/Logo/login.png";
import "../../css/home.css";

export default function Guest({ children }) {
    return <div className="homescreen">{children}</div>;
}
