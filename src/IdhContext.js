import React, { useState, useEffect } from 'react';

import estados from './utils/estados'
import mergeArray from './utils/mergeArray'

const IdhContext = React.createContext()

function IdhProvider(props) {
    const [arrayColors, setArrayColors] = useState([])
    const [newArray, setNewArray] = useState([]) // este es para relacionar el edo al idh 
    const [order, setOrder] = useState('')
    const [year, setYear] = useState('')
    const [state, setState] = useState('')

    useEffect(() => {
        const colors = estados().map((edo) => {
            return edo.color
        })
        setArrayColors(colors)

        const states = estados().map((edo) => {
            return edo.nombre
        })
        const code = estados().map((edo) => {
            return edo.clave
        })
        const idh = []
        for (let i = 0; i <= 31; i++) {
            const idhRandom = Math.random() * 1
            idh.push(idhRandom)
        }
        const info = mergeArray(states, idh, code) 

        setNewArray(info)
    
    } , [])

    const changeYear = ()=>{
        const statesNew = estados().map((edo) => {
            return edo.nombre
        })
        const codeNew = estados().map((edo) => {
            return edo.clave
        })
        const idhNew = []
        for (let i = 0; i <= 31; i++) {
            const idhRandom = Math.random() * 1
            idhNew.push(idhRandom)
        }
        const infoNew = mergeArray(statesNew, idhNew,codeNew)

        setNewArray(infoNew)

    }
    

    const value = {
        arrayColors,
        setArrayColors,
        newArray,
        order,
        setOrder,
        year,
        setYear,
        state,
        setState,
        changeYear

    }

    return (
        <IdhContext.Provider value={value} {...props} />)

}

const useIdhContext = () => {
    const context = React.useContext(IdhContext)
    return context
}

export {
    IdhProvider,
    useIdhContext
}