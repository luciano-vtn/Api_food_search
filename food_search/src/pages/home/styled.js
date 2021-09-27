import styled from 'styled-components';
import Slider from 'react-slick';




export const WrapperGlobal = styled.div`//WrapperGlobal => Area do site;
    display: flex;
 
`;

export const Container = styled.aside`

    background-color: ${(props) => props.theme.colors.background};
    width: 360px;
    height: 100vh;
    overflow-y: auto;
`;

export const Search = styled.section`

    display: flex;
    flex-direction: column;
    justify-content: center;
    background-color: #fff;
    font-size: 10px;
    padding: 20px;
    margin-bottom: 5px;
`;

export const Logo = styled.img`
    margin-bottom: 16px;
`;

export const Map = styled.div`
    background-color: #00CED1;
    width: 100vw;
`;

export const Carousel = styled(Slider)`
    .slick-styled{
        margin-right: 5px;
    }

`;
    
export const CarouselTitle = styled.h1`
    font-family: ${(props) => props.theme.fonts.regular};
    color: ${(props) => props.theme.colors.text};
    font-size: 24px;
    font-weight: bold;
    line-height: 24px;
    margin: 16px 0;
`;