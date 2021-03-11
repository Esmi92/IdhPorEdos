import React, { useState, useEffect } from 'react';

import estados from './utils/estados'
import mergeArray from './utils/mergeArray'
import generateIdh from './utils/generateIdh'

const IdhContext = React.createContext()

function IdhProvider(props) {
    const [arrayColors, setArrayColors] = useState([])
    const [newArray, setNewArray] = useState([]) // este es para relacionar el edo al idh 
    const [order, setOrder] = useState('')
    const [year, setYear] = useState('')
    const [state, setState] = useState('')
    const [allData,setAllData] = useState([])

    const changeYear =  (_year)=>{
            
        const state =  estados().map((edo) => {
            return edo.nombre
        })
        const code =  estados().map((edo) => {
            return edo.clave
        })

        const yearIdhFilter =  allData.filter((y)=>{
            return _year == y.year
        }).map((ye)=>{
            return ye.idhPerYear
        })

        console.log(allData)

    const infoNew = mergeArray(state, yearIdhFilter[0],code)

    setNewArray(infoNew)
    setYear(_year)

}

    useEffect(() => {
        const colors = estados().map((edo) => {
            return edo.color
        })
        setArrayColors(colors)
        setAllData(generateIdh())

    } , [])

    
    

    const value = {
        arrayColors,
        setArrayColors,
        newArray,
        order,
        setOrder,
        year,
        state,
        setState,
        changeYear,
        allData

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