import React from 'react';
import ReactStars from "react-rating-stars-component";
import restaurante from '../../assets/restaurante-fake.png'


import { Restaurant, RestaurantInfo, TitleRest, AddressRest, PhotoRest } from './styled';

const RestaurantCard = ({restaurant, onClick}) => (
    <Restaurant onClick={onclick}>
        <RestaurantInfo>
            <TitleRest>{restaurant.name}</TitleRest>
            <ReactStars count={5} isHalf value={restaurant.rating} edit={false} activeColor="#e7711c"/> 
            <AddressRest>{restaurant.vicinity || restaurant.formatted_address} </AddressRest>
        </RestaurantInfo>
        <PhotoRest 
            src={restaurant.photos ? restaurant.photos[0].getUrl() : restaurante}
            alt="Foto do Restaurante"
        />
    </Restaurant>
);

export default RestaurantCard;