import React from 'react';
import ReactStars from "react-rating-stars-component";
import restaurant from '../../assets/restaurante-fake.png';


import { Restaurant, RestaurantInfo, TitleRest, AddressRest, PhotoRest } from './styled';

const RestaurantCard = () => (
    <Restaurant>
        <RestaurantInfo>
            <TitleRest>Nome Restaurante</TitleRest>
            <ReactStars count={5} isHalf value={3} edit={false} activeColor="#e7711c"/> 
            <AddressRest>Cidade ...!, Rua...!, Bairro...! </AddressRest>
        </RestaurantInfo>
        <PhotoRest src={restaurant} alt="Foto do Restaurante"/>
    </Restaurant>)

export default RestaurantCard;