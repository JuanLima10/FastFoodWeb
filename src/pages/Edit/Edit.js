import React, { useEffect, useState } from 'react'
import { ErrorMessage, Formik, Form, Field } from 'formik'
import * as yup from 'yup'

import { useParams } from 'react-router-dom'
import { history } from '../../history'
import api from '../../api/api'

import './module.edit.css'

const Edit = () => {
    const { id } = useParams()

    const handleSubmit = values => {
        api.put(`/${ id }`, values).then(response => {
            history.push('/')
        })
    }

    const [ lojas, setLojas ] = useState([])

    useEffect(() => {
        api.get(`/${ id }`).then((response) => {
            setLojas(response.data)
        })
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    const validations = yup.object().shape({
        name: yup.string().required("Nome Obrigatório"),
        categories: yup.string().required("Categoria Obrigatório"),
        city: yup.string().required("Cidade Obrigatório"),
        postalcode: yup.string().required("Codigo Postal Obrigatório"),
        country: yup.string().required("País Obrigatório"),
        address: yup.string().required("Endereço Obrigatório"),
        province: yup.string().required("UF Obrigatório"),
    })

    return(
        <>
        <div className="edit">
            <div className="editContent">
            <Formik initialValues={{}} onSubmit={ handleSubmit } validationSchema={ validations }>
                    <Form className="editForm">
                        <div className="formInput">
                            <Field name="name" className="formField" placeholder={ lojas.name }/>
                            <ErrorMessage component="span" name="name" className="formError"/>
                        </div>
                        <div className="formInput">
                            <Field name="categories" className="formField" placeholder={ lojas.categories }/>
                            <ErrorMessage component="span" name="categories" className="formError"/>
                        </div>
                        <div className="formInput">
                            <Field name="city" className="formField" placeholder={ lojas.city }/>
                            <ErrorMessage component="span" name="city" className="formError"/>
                        </div>
                        <div className="formInput">
                            <Field name="postalcode" className="formField" placeholder={ lojas.postalcode }/>
                            <ErrorMessage component="span" name="postalcode" className="formError"/>
                        </div>
                        <div className="formInput">
                            <Field name="country" className="formField" placeholder={ lojas.country }/>
                            <ErrorMessage component="span" name="country" className="formError"/>
                        </div>
                        <div className="formInput">
                            <Field name="address" className="formField" placeholder={ lojas.address }/>
                            <ErrorMessage component="span" name="address" className="formError"/>
                        </div>
                        <div className="formInput">
                            <Field name="latitude" className="formField" placeholder={ lojas.latitude }/>
                        </div>
                        <div className="formInput">
                            <Field name="longitude" className="formField" placeholder={ lojas.longitude }/>
                        </div>
                        <div className="formInput">
                            <Field name="province" className="formField" placeholder={ lojas.province }/>
                            <ErrorMessage component="span" name="province" className="formError"/>
                        </div>
                        <div className="formInput">
                            <Field name="websites" className="formField" placeholder={ lojas.websites }/>
                            <ErrorMessage component="span" name="websites" className="formError"/>
                        </div>
                        <button className="buttonFieldForm" type="submit">Editar</button>
                    </Form>
                </Formik>
            </div>
        </div>
        </>
    )
}

export default Edit