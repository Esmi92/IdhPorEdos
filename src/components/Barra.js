import React, { useState, useEffect } from 'react'
import './barra.scss'
import estados from '../utils/estados'

//Context
import { useIdhContext } from '../IdhContext'

//Chart js
import { Bar } from 'react-chartjs-2'

function Barra() {
    //Data for Chart js 
    const [theLabels, setTheLabels] = useState([])
    const [theData, setTheData] = useState([])

    // context information
    const context = useIdhContext()
    const colors = context.arrayColors
    const information = context.newArray


    useEffect(() => {
        // Mapping the data into the chart 
        if (context.state === ""){
            const colors = estados().map((edo) => {
                return edo.color
            })
            context.setArrayColors(colors)
        if (context.year !== '' && context.order === '' ) {
            const states = information.sort((a, b) => {
                return (a.nombre > b.nombre) ? 1 : -1
            })
            const state = states.map((edo) => {
                return edo.nombre
            })
            const idh = states.map((edo) => {
                return edo.idh
            })

            setTheLabels(state)
            setTheData(idh)
        } else if (context.year !== '' && context.order === 'abc' ) {
            const statesAbc = information.sort((a, b) => {
                return (a.nombre > b.nombre) ? 1 : -1
            })
            const stateAbc = statesAbc.map((edo) => {
                return edo.nombre
            })
            const idhAbc = statesAbc.map((edo) => {
                return edo.idh
            })

            setTheLabels(stateAbc)
            setTheData(idhAbc)
        } else if (context.year !== '' && context.order === '123' ){
            const asc = information.sort((a, b) => {
                return (a.idh > b.idh) ? 1 : -1
            })
            const statesAsc = asc.map((edo) => {
                return edo.nombre
            })
            const idhAsc = asc.map((edo) => {
                return edo.idh
            })
            setTheLabels(statesAsc)
            setTheData(idhAsc)
        } else if (context.year !== '' && context.order === '321') {
            const desc = information.sort((a, b) => {
                return (a.idh < b.idh) ? 1 : -1
            })
            const statesDesc = desc.map((edo) => {
                return edo.nombre
            })
            const idhDesc = desc.map((edo) => {
                return edo.idh
            })

            setTheLabels(statesDesc)
            setTheData(idhDesc)

        }}
        //Mapping the colors when a state is selected
        else if (context.state !== "") {
            const colorState = []
            context.setArrayColors(colorState)
            for (let i = 0; i < 32; i++) {
                if (context.state === information[i].nombre) {
                    colorState.push('#fe7f2d')
                } else {
                    colorState.push('#f0efeb')
                }
            }
                
           
            
        }
    }, [context.year, context.order,context.state])

    


//Chart: 
    const state = {
        labels: theLabels,
        datasets: [
            {
                label: 'IDH por Estados',
                backgroundColor: colors,
                borderColor: 'rgba(0,0,0,1)',
                borderWidth: 2,
                data: theData
            }
        ]
    }

    return (
        <div className="barra">
            <Bar
                data={state}
                options={{
                    title: {
                        display: true,
                        text: 'IDH por Estados',
                        fontSize: 20
                    },
                    legend: {
                        display: false
                    }
                }}
            />
        </div>
    );


}

export default Barra;