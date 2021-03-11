import React,{useEffect,useState} from 'react';
import './idh.scss';

// utils y components
import years from '../utils/years';
import Barra from '../components/Barra';

//material
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import Box from '@material-ui/core/Box';

//Context
import { useIdhContext } from '../IdhContext'


function FullScreen() {
    const context = useIdhContext()
    const information = context.newArray
    const [idhSelected, setIdhSelected] = useState('')

    // To get the Idh Selected 
    useEffect(() => {
        information.map((edo) => {
            if (edo.nombre === context.state) {
                setIdhSelected(edo.idh)
            }
        })


    }, [context.state])


    return (
        <div className="Idh">
            <Container maxWidth="lg" className="container">
                <h1>Indice de desarrollo humano por estados</h1>
                {/*View if state */}
                {context.state === "" ?
                    <Grid container>
                        <Grid spacing={1} item xs={4} className="grid">

                             {/*View if year */}
                            {context.year === '' ?
                                <select name="year" id="year" className="select"
                                    onChange={(event) => {
                                        context.changeYear(event.target.value)
                                    }}
                                >
                                    <option value="" selected disabled>Año</option>
                                    {years(2011).map((year) => (
                                        <option value={year}>{year}</option>
                                    ))}
                                </select> :
                                <select name="year" id="year" className="select"
                                    onChange={(event) => {
                                        context.changeYear(event.target.value)
                                    }}
                                >
                                    <option value="" selected disabled>{context.year}</option>
                                    {years(2011).map((year) => (
                                        <option value={year}>{year}</option>
                                    ))}
                                </select>}

                        </Grid>
                        <Grid spacing={1} item xs={4} className="grid">

                            {/*View if year */}
                            {context.year === '' ? 
                                <select name="orden" id="orden" className="select">
                                    <option value="">Selecciona Año</option>
                                    <option value="abc" disabled>Alfabéticamente</option>
                                    <option value="123" disabled>Ascendente </option>
                                    <option value="321" disabled>Descendente </option>
                                </select> :
                                <select name="orden" id="orden" className="select"
                                    onChange={(event) => {
                                        context.setOrder(event.target.value)
                                    }}
                                >
                                    <option value="" selected>Default</option>
                                    <option value="abc">Alfabéticamente </option>
                                    <option value="123">Ascendente </option>
                                    <option value="321">Descendente </option>
                                </select>
                            }
                        </Grid>

                        <Grid spacing={1} item xs={4} className="grid" >

                            {/*View if year */}
                            {context.year === '' ?
                                <select name="estado" id="estado" className="select">
                                    <option value="" selected disabled>Selecciona Año</option>

                                </select> :
                                <select name="estado" id="estado" className="select"
                                    onChange={(event) => {
                                        context.setState(event.target.value)
                                    }}
                                >
                                    <option value="" selected>ESTADO</option>
                                    {information.map((edo) => (
                                        <option value={edo.nombre}>{edo.nombre}</option>
                                    ))}
                                </select>}
                        </Grid>
                    </Grid> : 
                    <Grid> {/*View if state != "" */}
                        <Grid spacing={1} item xs={12} className="grid" >
                            <select name="estado" id="estado" className="select"
                                onChange={(event) => {
                                    context.setState(event.target.value)
                                }}
                            >
                                <option value="" selected disabled>{context.state}</option>
                                {information.map((edo) => (
                                    <option value={edo.nombre}>{edo.nombre}</option>
                                ))}
                            </select>

                        </Grid>

                        <Box display="flex" justifyContent="center" m={1} p={1} bgcolor="#edf6f9">
                            <Button id="btn" variant="contained" color="primary" className="button"
                                onClick={() => {
                                    context.setState("")
                                }}>Volver</Button>
                        </Box>

                        {/*Show state selected */}
                        <h4>{`IDH de ${context.state}: ${idhSelected}`}</h4>

                    </Grid>}

                <Barra />

            </Container>
        </div>
    );
}

export default FullScreen;