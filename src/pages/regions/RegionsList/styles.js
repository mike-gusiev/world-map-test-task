import styled from 'styled-components';
import { Container } from 'react-bootstrap';

export const StyledContainer = styled(Container)`
    &&&{
        margin-top: 30px;
        width: 70%;
        min-height: 300px;
        border: 2px solid ${({theme}) => theme.colors.grayColor};
        padding: 20px;
        border-radius: 12px;
        background-color: rgba(255,255,255,0.8);
        box-shadow: -7px 9px 11px -7px rgba(0,0,0,0.65);
    }
`