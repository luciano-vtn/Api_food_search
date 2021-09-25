import React, {useState} from "react";
import TextField, {Input} from '@material/react-text-field';
import MaterialIcon from '@material/react-material-icon';


import logo from "../../assets/logo.svg";

import { Container, Search, Logo, WrapperGlobal, Map, CarouselTitle } from './styled';

const Home = () => { 

    const [imputValue,  setImputValue] = useState('');

    return(
    <WrapperGlobal>
        <Container>
            <Search>
                <Logo src={logo} alt="Logo do Restaurante"/>

                <TextField
                    label='Pesquisar Restaurantes'
                    outlined	
                    trailingIcon={<MaterialIcon role="button" icon="search"/>}
                >
                <Input
                    value={imputValue}
                    onChange={(e) => setImputValue(e.target.value)}
                />
                </TextField>
                <CarouselTitle>"Na sua Área"</CarouselTitle>
            </Search>        
        </Container>

        <Map/>
    </WrapperGlobal>

        
    )
};

    

export default Home;