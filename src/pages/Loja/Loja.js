import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

import api from '../../api/api'

import './module.loja.css'

const Loja = () => {
    const [ lojas, setLojas ] = useState([])
    const { id } = useParams()

    useEffect(() => {
        api.get(`/${ id }`).then((response) => {
            setLojas(response.data)
        })
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    return(
        <>
        <div className="loja">
            <a className="backButton" href="/"><i className="fas fa-long-arrow-alt-left"></i></a>
            <div className="lojaContent">
                <div className="lojaPerfil" key={ lojas.id }>
                    <h1>{ lojas.name }</h1>
                    <p>{ lojas.categories }</p>
                    <p>{ lojas.city }, { lojas.province }, { lojas.country }</p>
                    <p><a target="blank"
                     href={ "https://www.google.com/maps/place/"+ lojas.address +"/@"+ lojas.latitude+","+ lojas.longitude +"/" }>
                         { lojas.address } <i className="fas fa-map-marked-alt"></i>
                    </a></p>
                    <p><a href={ lojas.websites } target="blank">Site Oficial</a></p>
                </div>
                <div>
                    
                </div>
            </div>
        </div>
        </>
    )
}

export default Loja