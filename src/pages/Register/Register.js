import React from 'react'
import { ErrorMessage, Formik, Form, Field } from 'formik'
import * as yup from 'yup'

import { history } from '../../history'
import api from '../../api/api'

import './module.register.css'

const Register = () => {
    
    const handleSubmit = values => {
        api.put('/register', values).then(response => {
            history.push('/edit/1')
        })
    }

    const validations = yup.object().shape({
        name: yup.string().required("Nome Obrigatório"),
        categories: yup.string().required("Categoria Obrigatório"),
        city: yup.string().required("Cidade Obrigatório"),
        postalcode: yup.number().required("Codigo Postal Obrigatório"),
        country: yup.string().required("País Obrigatório"),
        address: yup.string().required("Endereço Obrigatório"),
        province: yup.string().required("UF Obrigatório"),
    })

    return(
        <>
        <div className="register">
            <div className="registerContent">
            <Formik initialValues={{}} onSubmit={ handleSubmit } validationSchema={ validations }>
                    <Form className="registerForm">
                        <div className="formInput">
                            <Field name="name" className="formField" placeholder="Nome da empresa"/>
                            <ErrorMessage component="span" name="name" className="formError"/>
                        </div>
                        <div className="formInput">
                            <Field name="categories" className="formField" placeholder="Categoria"/>
                            <ErrorMessage component="span" name="categories" className="formError"/>
                        </div>
                        <div className="formInput">
                            <Field name="city" className="formField" placeholder="Cidade"/>
                            <ErrorMessage component="span" name="city" className="formError"/>
                        </div>
                        <div className="formInput">
                            <Field name="postalcode" className="formField" placeholder="Postal Code"/>
                            <ErrorMessage component="span" name="postalcode" className="formError"/>
                        </div>
                        <div className="formInput">
                            <Field name="country" className="formField" placeholder="País"/>
                            <ErrorMessage component="span" name="country" className="formError"/>
                        </div>
                        <div className="formInput">
                            <Field name="address" className="formField" placeholder="Endereço"/>
                            <ErrorMessage component="span" name="address" className="formError"/>
                        </div>
                        <div className="formInput">
                            <Field name="latitude" className="formField" placeholder="Latitude"/>
                            <ErrorMessage component="span" name="latitude" className="formError"/>
                        </div>
                        <div className="formInput">
                            <Field name="longitude" className="formField" placeholder="Longitude"/>
                            <ErrorMessage component="span" name="longitude" className="formError"/>
                        </div>
                        <div className="formInput">
                            <Field name="province" className="formField" placeholder="Estado"/>
                            <ErrorMessage component="span" name="province" className="formError"/>
                        </div>
                        <div className="formInput">
                            <Field name="websites" className="formField" placeholder="Link do Site"/>
                            <ErrorMessage component="span" name="websites" className="formError"/>
                        </div>
                        <button className="buttonFieldForm" type="submit">Cadastrar</button>
                    </Form>
                </Formik>
            </div>
        </div>
        </>
    )
}

export default Register