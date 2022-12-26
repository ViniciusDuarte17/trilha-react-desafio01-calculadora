import styled from 'styled-components';

export const ButtonContainer = styled.button`
    padding: 20px;
    border: 1px solid #CDCDCD;
    background-color: #00AA;
    color: #FFFFFF;
    font-size: 20px;
    font-weight: 700;
    flex: 1;
    @media (max-width: 570px) {
        font-size: 85%;
     }

     @media (max-width: 390px) {
        font-size:10px;
        padding: 10px;
     }
    &:hover {
        opacity: 0.6;
    }
`