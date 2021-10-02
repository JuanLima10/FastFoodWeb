import React from 'react'


const Pagination = ({ pages, curretnPage ,setCurretnPage, startIndex }) => {
    return(
        <>
        { Array.from(Array(1), (loja, index) => {
            return <button key={ curretnPage } 
            value={ curretnPage === startIndex ? curretnPage = startIndex : curretnPage - 1 } 
            onClick={ (event) => setCurretnPage(Number(event.target.value)) } 
            className="paginationsButtonSpecial"> Anterior </button>
        }) }
        { Array.from(Array(pages), (loja, index) => {
            return <button key={ index } className="paginationsButton" value={ index } 
            style={ index === curretnPage ? { backgroundColor: "#1d1c1f", color: "#ffffff" }: null }
            onClick={ (event) => setCurretnPage(Number(event.target.value)) } >
                { index + 1 }
            </button>
        }) }
        { Array.from(Array(1), (loja, index) => {
            return <button key={ curretnPage } 
            value={ curretnPage === pages - 1 ? curretnPage = pages - 1 : curretnPage + 1 } 
            onClick={ (event) => setCurretnPage(Number(event.target.value)) } 
            className="paginationsButtonSpecial"> Próximo </button>
        }) }
        </>
    )
}

export default Pagination