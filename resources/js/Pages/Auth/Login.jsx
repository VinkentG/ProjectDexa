import React, { useEffect } from "react";
import Button from "@/Components/Button";
import Checkbox from "@/Components/Checkbox";
import Guest1 from "@/Layouts/Guest1";
import Input from "@/Components/Input";
import Label from "@/Components/Label";
import ValidationErrors from "@/Components/ValidationErrors";
import { Head, Link, useForm } from "@inertiajs/inertia-react";
import "../../../css/app.css";
import logo1 from "../Logo/login.png";
import logo2 from "../Logo/employee.png";

export default function Login({ status, canResetPassword }) {
    const { data, setData, post, processing, errors, reset } = useForm({
        email: "",
        password: "",
        remember: "",
    });

    useEffect(() => {
        return () => {
            reset("password");
        };
    }, []);

    const onHandleChange = (event) => {
        setData(
            event.target.name,
            event.target.type === "checkbox"
                ? event.target.checked
                : event.target.value
        );
    };

    const submit = (e) => {
        e.preventDefault();

        post(route("login"));
    };

    return (
        <Guest1>
            <div className="main">
                <div className="main-container">
                    <div className="left">
                        <span></span>
                        <div className="in img-class">
                            <img src={logo1} id="img-id" alt="" srcSet=""></img>
                        </div>
                        <form className="in" onSubmit={submit}>
                            <label for="email">Email</label>
                            <input
                                placeholder="Enter your Email..."
                                type="email"
                                id="email"
                                value={data.email}
                                autoComplete="username"
                                isFocused={true}
                                required
                                onChange={(e) =>
                                    setData("email", e.target.value)
                                }
                            ></input>
                            <label for="password">Password</label>
                            <input
                                placeholder="Enter your Password"
                                type="password"
                                id="password"
                                value={data.password}
                                autoComplete="current-password"
                                required
                                onChange={(e) =>
                                    setData("password", e.target.value)
                                }
                            ></input>

                            <Link
                                href={route("password.request")}
                                className="underline text-sm text-gray-600 hover:text-gray-900"
                            >
                                Forgot your password?
                            </Link>
                            <Link
                                href={route("register")}
                                className="ml-5 underline text-sm text-gray-600 hover:text-gray-900"
                            >
                                Register
                            </Link>

                            <button className="mt-3" type="submit" id="submit">
                                Submit
                            </button>
                        </form>
                    </div>

                    <div className="right">
                        <span></span>
                        <img src={logo2} id="logo" alt="" srcSet=""></img>
                        <h1 className="welcome title">Welcome</h1>
                        <div className="m-auto ml-5">
                            {status && (
                                <div className="mb-4 font-small text-sm text-green-600">
                                    {status}
                                </div>
                            )}

                            <ValidationErrors errors={errors} />
                        </div>
                        {/* <div class="rainbow">Rainbow border</div> */}
                    </div>
                </div>
            </div>
        </Guest1>
    );
}
