import styled from 'styled-components';

export const Restaurant = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 5px;
  padding: 12px;
  cursor: pointer;
  background-color: white;
  border-left: 5px solid transparent;
    :hover{
        background-color: ${(props) => props.theme.colors.background};
        border-left-color: ${(props) => props.theme.colors.primary};
  }
`;

export const RestaurantInfo = styled.div`
    display: flex;
    flex-direction: column;
`;

export const TitleRest = styled.span`
    font-family: ${(props) => props.theme.fonts.regular};
    color: ${(props) => props.theme.colors.text};
    font-size: 24px;
    font-weight: bold;
    line-height: 29px;
    margin-bottom: 10px;
`;

export const AddressRest = styled.span`
    font-family: ${(props) => props.theme.fonts.regular};
    color: ${(props) => props.theme.colors.text};
    font-size: 16px;
    line-height: 18px;
    margin-bottom: 10px;
    margin-top: 10px;
`;

export const PhotoRest = styled.img`
    width: 100px;
    height: 100px;
    border-radius: 6px;
    object-fit: cover;

`;

