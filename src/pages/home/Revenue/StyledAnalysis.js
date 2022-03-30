import styled from 'styled-components'
import { border, flex } from '../../../components/common/StyledMixins'

export const StyledAnalysis = styled.div`
    ${flex('column')}
    padding:1rem;
    ${border('0.8rem', '#ccc')}
    background-color:#6389ff6e;
    .total {
        width: 100%;
        ${flex('', '', 'space-between')};
        gap: 2rem;
        > div {
            font: 500 1.5rem 'Lato';
            ${border()}
            background-color: bisque;
            padding: 1rem;
            text-align: center;
            color: violet;
            span {
                color: green;
            }
        }
    }
    .progress {
        width: 100%;
        position: relative;
        ${flex('', '', 'space-evenly')}
        .MuiCircularProgress-root {
            padding: 0;
            margin: 0;
            color: teal;
            svg {
                transform: rotateY(180deg) scale(-1);
            }
        }
        h3 {
            font-size: 2rem;
            font-weight: bold;
            color: green;
            position: absolute;
            top: calc(50% - 1rem);
            width: 100%;
            text-align: center;
        }
        > div:not(.progress) {
            width: 30%;
            ${flex('column', 'stretch', 'center')}/* text-align:center; */
        }
        p {
            width: 100%;
            padding: 0.25rem 0;
            font: 400 1.4rem 'Lato';
            color: grey;
        }
        span {
            width: 50%;
            font: 400 1.3rem 'Lato';
            color: teal;
            margin-left: 0.5rem;
        }
    }

    .summary {
        width: 100%;
        margin: 1rem;
        flex: 1;
        gap: 2rem;
        ${flex('', 'stretch', 'space-between')}
        & > div {
            ${border('0.8rem', '#ccc')}
            background-color:#f8efcba3;
            padding: 0.5rem;
            width: 100%;
            ${flex('column', 'flex-start', 'space-between')}
            >p {
                width: 100%;
                color: #ea4d4db3;
                font: 500 1.2rem 'Fredoka';
                border-bottom: 1px solid grey;
                text-align: center;
            }
            > div {
                width: 100%;
                ${flex('column', 'flex-start')}
                p {
                    width: 100%;
                    font: 400 1.2rem 'Lato';
                    color: grey;
                }
                span {
                    font: 400 1.1rem 'Lato';
                    color: teal;
                    margin-left: 0.5rem;
                }
                svg {
                    /* color: tomato; */
                }
            }
        }
    }
    @media (max-width: 800px) {
        width: fit-content;
        .total {
        }
        .progress {
            .MuiCircularProgress-root {
                position: relative;
                svg {
                    height: 10vmax;
                    position: absolute;
                    left: calc(50% / 2);
                    top: calc(50% / 2);
                }
            }
            h3 {
                font-size: 1.5rem;
            }
            div {
                p,
                span {
                    font-size: 1.2rem !important;
                }
            }
        }
        .summary {
            div {
                width: fit-content;
            }
        }
        p,
        span,
        div {
            font: 300 1rem 'Roboto' !important;
            * {
                font-size: 1rem !important;
            }
        }
    } ;
`
