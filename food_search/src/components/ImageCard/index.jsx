import React from 'react';
import styled from 'styled-components';

const Card = styled.div`
    width: 90px;
    height: 90px;
    border-radius: 5px;
    background-image: url(${(props) => props.photo});
    background-size: cover;
`;
const ImageCard = ({photo}) => (
    <Card photo={photo}>
        <p>Nome do Restaurante</p>
    </Card>)

export default ImageCard;