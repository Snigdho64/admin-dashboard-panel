import styled from 'styled-components'
import {
    border,
    boxshadow,
    flex,
} from '../../../components/common/StyledMixins'

export const StyledStatsCard = styled.div`
    padding: 0.5rem;
    position: relative;
    /* z-index: -1; */
    &:first-child,
    &:last-child {
        margin: 0;
    }
    ${border('0.8rem', '#ccc')}
    ${flex('column', 'center', 'center')};
    background: linear-gradient(-180deg, white, white);
    &:hover {
        ${boxshadow()}
    }

    .mainIcon {
        position: absolute;
        top: 0;
        font-size: 2rem;
        color: teal;
        padding: 0.5rem;
        &.left {
            left: 0;
        }
        &.right {
            right: 0;
        }
        :hover {
            transform: scale(1.1);
            color: tomato;
        }
    }

    .chart {
        flex: 0.5;
        width: 30vmin;
        height: 30vmin;
    }

    .infoGrid {
        flex: 1;
        display: grid;
        grid-template-columns: 1fr 1fr;
        > div {
            padding: 0.5rem;
            p,
            span {
                ${flex('row', 'center', 'space-between')}
            }
        }
        > div.left {
            margin-right: 0.5rem;
            ${border('0.8rem', '#ccc')}
            ${flex('column')}
            > p {
                font: 500 1rem 'Fredoka';
                color: mediumvioletred;
                span {
                    color: #f3c;
                    font-size: 1.2rem;
                    font-weight: bold;
                    margin-left: 0.5rem;
                }
            }
            .new {
                span {
                    color: green;
                }
                svg {
                    font-size: 1.1rem;
                }
            }
        }

        > div.right {
            margin-left: 0.5rem;
            ${flex('column')} ${border('0.8rem', '#ccc')}
            p {
                font: 300 1rem 'Roboto';
                padding: 0.5rem;
            }
            span {
                margin-left: 0.5rem;
                color: green;
                svg {
                    font-size: 1.5rem;
                    border-radius: 50%;
                    margin-left: 0.5rem;
                }
                &.positive {
                    color: green;
                    svg {
                        color: green;
                        background-color: #3eff2355;
                    }
                }
                &.negative {
                    color: red;
                    svg {
                        background-color: #ffe38877;
                        color: red;
                    }
                }
            }
        }
    }
    @media (max-width: 800px) {
        margin: 1rem;
        flex-direction: column;
        width: min-content;
        .infoGrid {
            div.left,
            div.right {
                * {
                    font: 300 1rem 'Roboto' !important;
                }
            }
        }
    }
`
