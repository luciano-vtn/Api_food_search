import React, {useState} from "react";
import { useSelector } from 'react-redux';

import TextField, {Input} from '@material/react-text-field';
import MaterialIcon from '@material/react-material-icon';


import logo from "../../assets/logo.svg";
import restaurante from "../../assets/restaurante-fake.png"
import {Card, RestaurantCard, Modal, Map, Loader, ImageSkeleton} from "../../components";

import { 
    Container, 
    Carousel, 
    Search, 
    Logo, 
    WrapperGlobal, 
    CarouselTitle, 
    ModalTitle, 
    ModalContent 
} from './styled';

const Home = () => { 

    const [imputValue,  setImputValue] = useState('');
    const [query, setQuery] =  useState (null);
    const [placeId, setPlaceId] = useState(null);
    const [modalOpened, setModalOpened] = useState(false);
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

                {restaurants.length > 0 ? (
                    <>
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
                    </>
                ) : ( <Loader/> ) }
             
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
              {restaurantSelected ? (
                  <>
                    <ModalTitle>{restaurantSelected?.name}</ModalTitle> 
                    <ModalContent>{restaurantSelected?.formatted_phone_number}</ModalContent>
                    <ModalContent>{restaurantSelected?.formatted_address}</ModalContent>
                    <ModalContent>{restaurantSelected?.opening_hours?.open_now ? 'Aberto agora :-)' : 'Fechado.'}</ModalContent>                
                  </>
              ) : (
                <>
                    <ImageSkeleton width="10px" height="10px"/>
                    <ImageSkeleton width="10px" height="10px"/>
                    <ImageSkeleton width="10px" height="10px"/>
                </>

              )}                  
        </Modal>        
    </WrapperGlobal>   
    )
};   

export default Home;