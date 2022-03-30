import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { flex } from './StyledMixins'

export const StyledPage = styled.div`
    flex: 6;
    ${flex('column')}
    position: 'relative';
    min-height: 100vh;
    width: 100%;
`

export const StyledLink = styled(Link)`
    text-decoration: none;
    font: 700 normal 1rem/1.5 'Roboto';
    color: darkcyan;
    transition: all 0.3s;
    :hover {
        color: tomato;
        text-decoration: underline;
    }
`
export const Button = styled.button`
    outline: none;
    border: none;
    color: white;
    font: 500 normal 2hmax/1.5 'Fredoka';
    padding: 1vmax 2vmax;
    border-radius: 8px;
    background-color: #6c6cebd1;
    transition: all 0.3s;
    text-transform: uppercase;
    :hover {
        transform: scale(1.1);
        filter: hue-rotate(90deg);
    }
`
