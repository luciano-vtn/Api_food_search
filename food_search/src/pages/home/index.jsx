import React, {useState} from "react";

import TextField, {Input} from '@material/react-text-field';
import MaterialIcon from '@material/react-material-icon';


import logo from "../../assets/logo.svg";
import restaurante from "../../assets/restaurante-fake.png"
import {Card, RestaurantCard, Modal, Map} from "../../components";

import { Container, Carousel, Search, Logo, WrapperGlobal, CarouselTitle } from './styled';

const Home = () => { 

    const [imputValue,  setImputValue] = useState('');
    const [modalOpened, setModalOpened] = useState(true);

    const settings = {
        dots: true,
        infinite: true,
        speed: 300,
        slidesToShow: 4,
        slidesToScroll: 4,
        adaptiveHeight: true,
      };

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
                <Carousel {...settings}>
                   <Card photo={restaurante} title="nome/restaurante"/>
                   <Card photo={restaurante} title="nome/restaurante"/>
                   <Card photo={restaurante} title="nome/restaurante"/>
                   <Card photo={restaurante} title="nome/restaurante"/>
                   <Card photo={restaurante} title="nome/restaurante"/>
                   <Card photo={restaurante} title="nome/restaurante"/>
                   <Card photo={restaurante} title="nome/restaurante"/>
                </Carousel>
            </Search>                 
            <RestaurantCard/>       
        </Container>
        <Map/>
        {/* <Modal open={ modalOpened } onClose={() => setModalOpened( ! modalOpened)}   /> */}
    </WrapperGlobal>

        
    )
};

    

export default Home;