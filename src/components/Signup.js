import React from "react";
import { Formik, Form } from "formik";
import { TextField } from "./TextField";
import * as Yup from 'yup';
// import {TextField} from 'bootstrap'

export const Signup = () => {
    const validate = Yup.object({
        firstName: Yup.string()
        .max(15, 'Must be 15 characters or less')
        .required('Required!!'),
        lastName: Yup.string()
        .max(15, 'Must be 20 characters or less')
        .required('Required!!'),
        email: Yup.string()
        .email('Email is invalid')
        .required('Required!!'),
        password: Yup.string()
        .min(6, 'Password must be at least 6 characters')
        .required('Password is required!!'),
        confirmPassword: Yup.string()
            .required('Confirm Password is required')
            .oneOf([Yup.ref('password')], 'Passwords must match!!')
    })


    return (
        <Formik initialValues={{
            firstName: '',
            lastName: '',
            email: '',
            password: '',
            confirmPassword: ''
        }}
            validationSchema={validate}
            onSubmit={values => {
                console.log(values)
            }}
        >
            {formik => (
                <div>
                <h1 className="my-4 font-weight-bold-display-4">Sign Up</h1>
                <Form className="formulario">
                    <TextField className="nombre" label="First Name" name="firstName" type="text" />
                    <TextField className="nombre" label="Last Name" name="lastName" type="text" />
                    <TextField className="nombre" label="Email" name="email" type="email" />
                    <TextField className="nombre" label="Password" name="password" type="password" />
                    <TextField className="nombre" label="Confirm Password" name="confirmPassword" type="password" />
                    <button className="btn btn-dark mt-3 ml-3" type="submit">Register</button>
                    <button className="btn btn-dark mt-3 ml-3" type="reset">Clear</button>
                </Form>
                </div>
            )}
        </Formik>
    )
}