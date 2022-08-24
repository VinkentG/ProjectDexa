import React from "react";
import Authenticated from "@/Layouts/Authenticated";
import { Head, InertiaLink, useForm, Link } from "@inertiajs/inertia-react";
import Table from "react-bootstrap/Table";
import { useState } from "react";
import "../../css/app.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";
import CardGroup from "react-bootstrap/CardGroup";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";

export default function Dashboard(props) {
    return (
        <Authenticated
            auth={props.auth}
            errors={props.errors}
            // header={
            //     <h2 className="font-semibold text-xl text-gray-800 leading-tight">
            //         Dashboard
            //     </h2>
            // }
        >
            <Head title="Dashboard" />
            <div className="py-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    {status && (
                        <div className="mb-4 font-medium text-sm text-green-600">
                            {status}
                        </div>
                    )}
                    <Link
                        className="px-6 py-2 text-white bg-blue-500 rounded-md focus:outline-none"
                        href={route("posts.create")}
                        style={{ textDecoration: "none" }}
                    >
                        Add
                    </Link>

                    {/* <Table striped bordered hover size="sm" className="mt-5">
                        <thead>
                            <tr>
                                <th>No.</th>
                                <th>Nama</th>
                                <th>DOB</th>
                                <th>Place of Birth</th>
                                <th>Gender</th>
                                <th>KTP</th>
                            </tr>
                        </thead>
                        <tbody>
                            {props.karyawan
                                ? props.karyawan.map((data, i) => {
                                      return (
                                          <tr key={i}>
                                              <td>{i + 1}</td>
                                              <td>{data.Nama}</td>
                                              <td>{data.DOB}</td>
                                              <td>{data.POB}</td>
                                              <td>{data.Gender}</td>
                                              <td>{data.KTP}</td>
                                          </tr>
                                      )
                                  })
                                :
                        </tbody>
                    </Table> */}

                    <Row className="row-cols-1 row-cols-md-4 g-4">
                        {/* <CardGroup> */}
                        {props.karyawan
                            ? props.karyawan.map((data, i) => {
                                  return (
                                      <Col>
                                          <Card
                                              style={{ width: "18rem" }}
                                              key={i}
                                          >
                                              <Card.Header>
                                                  <p>
                                                      Data karyawan no. {i + 1}
                                                  </p>
                                              </Card.Header>
                                              <Card.Body>
                                                  {/* <Card.Title>Nama</Card.Title> */}
                                                  <Card.Text>
                                                      <p>Nama = {data.Nama}</p>
                                                  </Card.Text>
                                              </Card.Body>
                                              <ListGroup className="list-group-flush">
                                                  <ListGroup.Item>
                                                      <p>
                                                          Tanggal Lahir ={" "}
                                                          {data.DOB}
                                                      </p>
                                                  </ListGroup.Item>
                                                  <ListGroup.Item>
                                                      <p>
                                                          Kota Lahir ={" "}
                                                          {data.POB}
                                                      </p>
                                                  </ListGroup.Item>
                                                  <ListGroup.Item>
                                                      <p>
                                                          Jenis kelamin =
                                                          {data.Gender}
                                                      </p>
                                                  </ListGroup.Item>
                                                  <ListGroup.Item>
                                                      <p>KTP = {data.KTP}</p>
                                                  </ListGroup.Item>
                                              </ListGroup>
                                          </Card>
                                      </Col>
                                  );
                              })
                            : ""}
                        {/* </CardGroup> */}
                    </Row>
                </div>
            </div>

            <div className="mainpage"></div>
        </Authenticated>
    );
}
