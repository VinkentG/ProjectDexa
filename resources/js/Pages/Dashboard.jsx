import React from "react";
import Authenticated from "@/Layouts/Authenticated";
import { Head, InertiaLink, useForm, Link } from "@inertiajs/inertia-react";
import Table from "react-bootstrap/Table";
import { useState } from "react";
import "../../css/app.css";
import "bootstrap/dist/css/bootstrap.min.css";

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

                    <Table striped bordered hover size="sm" className="mt-5">
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
                                      );
                                  })
                                : ""}
                        </tbody>
                    </Table>
                </div>
            </div>

            <div className="mainpage"></div>
        </Authenticated>
    );
}
