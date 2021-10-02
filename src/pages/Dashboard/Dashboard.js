/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useEffect, useState } from 'react'

import api from '../../api/api'
import Pagination from '../../components/Pagination/Pagination'

import './module.dashboard.css'

const Dashboard = () => {
    const [ lojas, setLojas ] = useState([])

    useEffect(() => {
        api.get('/list').then((response) => {
            setLojas(response.data)
            setBusca(response.data)
        })
    }, [])

    // Buscas

    const [ busca, setBusca ] = useState([])

    const handleChangeName = ({ target }) => {
        if(!target.value){
            setCurretnPage(0)
            setBusca(lojas)
            return
        }

        const filter = lojas.filter((loja) => loja.name.toLowerCase().includes(target.value))
        setCurretnPage(0)
        setBusca(filter)
    }

    const handleChangeCity = ({ target }) => {
        if(!target.value){
            setCurretnPage(0)
            setBusca(lojas)
            return
        }

        const filter = lojas.filter((loja) => loja.city.toLowerCase().includes(target.value))
        setCurretnPage(0)
        setBusca(filter)
    }

    // Pagination
    const [ lojasPerPage ] = useState(16)
    const [ curretnPage, setCurretnPage ] = useState(0)

    const pages = Math.ceil(busca.length / lojasPerPage)
    const startIndex = curretnPage * lojasPerPage
    const endIndex = startIndex + lojasPerPage
    const currentlojas = busca.slice(startIndex, endIndex)

    // Delete

    function deleteLoja(id){
        api.delete(`/${id}`)
        window.location.reload();
    }

    return(
        <>
        <div className="dash">
            <div className="dashContent">
                <div className="formInput">
                    <input className="formField" placeholder="pesquisa pelo nome" type="text" onChange={ handleChangeName }/>
                    <input className="formField" placeholder="pesquisa pela Cidade" type="text" onChange={ handleChangeCity }/>
                    <a className="buttonField" href="/register"><i className="fas fa-plus"></i> Adicionar Fast Food</a>
                </div>
            <table className="dashTable">
                        <th className="tableTitle">Nome</th>
                        <th className="tableTitle">Cidade</th>
                        <th className="tableTitle">UF</th>
                        <th className="tableTitle">Endereço</th>
                        {currentlojas.map(loja => (
                            <tr className="tableContent" key={ loja.id }>
                                <td className="tableLine">{ loja.name }</td>
                                <td className="tableLine">{ loja.city }</td>
                                <td className="tableLine">{ loja.province }</td>
                                <td className="tableLine">{ loja.address }</td>
                                <td className="tableLine">
                                    <a href={"/loja/"+ loja.id }>
                                        <i className="fas fa-eye"></i>
                                    </a>
                                    <a href={"/edit/"+ loja.id }>
                                        <i className="fas fa-pencil-alt"></i>
                                    </a>
                                    <a onClick={ () => deleteLoja(loja.id) }>
                                        <i className="fas fa-trash-alt"></i>
                                    </a>
                                </td>
                            </tr>
                        ))}
                    </table>
                    <div className="paginations">
                        <Pagination startIndex={ startIndex } pages={ pages } curretnPage={ curretnPage } setCurretnPage={ setCurretnPage }/>
                    </div>
            </div>
        </div>
        </>
    )
}

export default Dashboard