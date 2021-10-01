import React, {useState} from "react";
import { useSelector } from "react-redux";

import TextField, {Input} from '@material/react-text-field';
import MaterialIcon from '@material/react-material-icon';


import logo from "../../assets/logo.svg";
import restaurante from "../../assets/restaurante-fake.png"
import {Card, RestaurantCard, Modal, Map} from "../../components";

import { Container, Carousel, Search, Logo, WrapperGlobal, CarouselTitle, ModalTitle } from './styled';

const Home = () => { 

    const [imputValue,  setImputValue] = useState('');
    const [query, setQuery] =  useState (null);
    const [placeId, setPlaceId] = useState(null);
    const [modalOpened, setModalOpened] = useState(true);

    const { restaurants, restaurantSelected } = useSelector ((state) => state.restaurants);

    const settings = {
        dots: true,
        infinite: true,
        autoplay: true,
        speed: 300,
        slidesToShow: 4,
        slidesToScroll: 4,
        adaptiveHeight: true,
      };

      function handleKeyPress( e ) {
          
          if (e.key === 'Enter') {

              setQuery(imputValue);

          }
      }

      function handleOpenModal(placeId) {
          setPlaceId(placeId);
          setModalOpened(true);
      }

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
                    onKeyPress={handleKeyPress}
                    onChange={(e) => setImputValue(e.target.value)}
                />
                </TextField>
                <CarouselTitle>"Na sua Área"</CarouselTitle>
                <Carousel {...settings}>

                    {restaurants.map((restaurant)=> (
                        <Card 
                            key={restaurant.place_id} 
                            photo={ restaurant.photos ? restaurant.photos[0].getUrl : restaurante}
                            title={restaurant.name}
                        />
                    ))}
                  
                </Carousel>
            </Search>   

                {restaurants.map((restaurant)=> (
                    <RestaurantCard 
                        onClick={() => handleOpenModal (restaurant.place_id)}
                        restaurant={restaurant} 
                    />
                ))}  

        </Container>

            <Map query={query} placeId={placeId}/>
  
        <Modal open={ modalOpened }  onClose={() => setModalOpened (!modalOpened)}> 
            <ModalTitle>{restaurantSelected?.name}</ModalTitle> 
            <ModalTitle>{restaurantSelected?.formatted_phone_number}</ModalTitle>
            <ModalTitle>{restaurantSelected?.formatted_address}</ModalTitle>       
        </Modal>
        
    </WrapperGlobal>   
    )
};   

export default Home;