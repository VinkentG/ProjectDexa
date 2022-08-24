import React from "react";
import { Head, InertiaLink, useForm, Link } from "@inertiajs/inertia-react";
import Authenticated from "@/Layouts/Authenticated";
// import { InertiaLink, useForm } from "@inertiajs/inertia-react";
import Form from "react-bootstrap/Form";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import { useState } from "react";
import "../../css/app.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Button from "react-bootstrap/Button";
import Tilt from "react-parallax-tilt";

export default function Add(props) {
    // const [show, setShow] = useState(false);

    const { data, setData, post, processing, errors, reset } = useForm({
        Nama: "",
        DOB: "",
        POB: "",
        Gender: "",
        KTP: "",
    });

    function handleSubmit(e) {
        e.preventDefault();
        post(route("posts.store"));
    }

    return (
        <Authenticated auth={props.auth} errors={props.errors}>
            <Tilt>
                <div className="contains">
                    <span className="span1"></span>
                    <Form
                        name="createForm"
                        onSubmit={handleSubmit}
                        className="in"
                    >
                        <div className="div1">
                            <h1 className="title title-primary">Add Data</h1>
                        </div>
                        <Form.Group controlId="formBasicEmail">
                            <Form.Label>
                                Name{" "}
                                <span className="font-small text-red-600">
                                    {errors.Nama}
                                </span>
                            </Form.Label>
                            <Form.Control
                                type="text"
                                placeholder="Enter Name"
                                className="in"
                                name="Nama"
                                value={data.Nama}
                                required
                                onChange={(e) =>
                                    setData("Nama", e.target.value)
                                }
                            />
                        </Form.Group>

                        <Form.Group>
                            <Form.Label>
                                DateOfBirth{" "}
                                <span className="font-small text-red-600">
                                    {errors.DOB}
                                </span>
                            </Form.Label>
                            <Form.Control
                                type="date"
                                className="in"
                                name="DOB"
                                value={data.DOB}
                                required
                                onChange={(e) => setData("DOB", e.target.value)}
                            />
                        </Form.Group>

                        <Form.Group>
                            <Form.Label>
                                PlaceOfBirth{" "}
                                <span className="font-small text-red-600">
                                    {errors.POB}
                                </span>
                            </Form.Label>
                            <Form.Control
                                type="text"
                                placeholder="Enter PlaceOfBirth"
                                className="in"
                                name="POB"
                                value={data.POB}
                                required
                                onChange={(e) => setData("POB", e.target.value)}
                            />
                        </Form.Group>

                        <Form.Group as={Row}>
                            <Form.Label as="legend" column sm={2}>
                                Gender{" "}
                                <span className="font-small text-red-600">
                                    {errors.Gender}
                                </span>
                            </Form.Label>
                            <Col sm={12}>
                                <Form.Check
                                    type="radio"
                                    label="Female"
                                    name="formHorizontalRadios"
                                    id="formHorizontalRadios1"
                                    value="Female"
                                    required
                                    onChange={(e) =>
                                        setData("Gender", e.target.value)
                                    }
                                    inline
                                />
                                <Form.Check
                                    type="radio"
                                    label="Male"
                                    name="formHorizontalRadios"
                                    id="formHorizontalRadios2"
                                    value="Male"
                                    required
                                    onChange={(e) =>
                                        setData("Gender", e.target.value)
                                    }
                                    inline
                                />
                            </Col>
                        </Form.Group>

                        <Form.Group>
                            <Form.Label>
                                Id{" "}
                                <span className="font-small text-red-600">
                                    {errors.KTP}
                                </span>
                            </Form.Label>
                            <Form.Control
                                type="number"
                                placeholder="Enter Id"
                                className="in mb-4"
                                name="KTP"
                                value={data.KTP}
                                required
                                onChange={(e) => setData("KTP", e.target.value)}
                            />
                        </Form.Group>

                        <Button variant="primary" type="submit">
                            Submit
                        </Button>
                    </Form>
                </div>
            </Tilt>
        </Authenticated>
    );
}
