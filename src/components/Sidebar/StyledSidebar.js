import styled from 'styled-components'

const StyledSidebar = styled.div`
    padding: 5vmax 1vmax;
    transition: all 0.3s;
    background-color: lightcyan;
    min-width: fit-content;
    flex: 1;
    position: sticky;
    top: 0;
    left: 0;
    height: 100vh;
    border-right: 0.5px solid lightgrey;
    & > div:first-child {
        display: flex;
        justify-content: center;
        align-items: center;
        & > span {
            font: 700 1.2rem 'Lato';
            color: #6439ff;
            text-align: center;
        }
    }
    hr {
        height: 0;
        background-color: lightsalmon;
    }
    & > div > ul {
        * {
            cursor: pointer;
        }
        min-width: fit-content;
        margin-top: 5vmax;
        display: flex;
        flex-direction: column;
        align-items: center;
        text-align: center;
        /* FOR THE MAIN LI */
        & > li {
            width: 100%;
            margin-top: 3vmax;
            cursor: pointer;
            & > span {
                font-size: 1.2rem;
                display: flex;
                align-items: center;
                justify-content: space-evenly;
                transition: all 0.3s;
                :hover {
                    transform: scale(1.1);
                    color: teal;
                    background-color: lightgray;
                }
            }
            &:nth-of-type(odd) + ul {
                li:hover {
                    svg {
                        transform: rotate(180deg);
                    }
                }
            }
        }
        /* FOR HIDDEN SUB-UL  */
        & > ul {
            width: fit-content;
            & > li {
                display: flex;
                color: #3a3e3e;
                align-items: center;
                justify-content: space-evenly;
                margin: 1vmax;
                border-radius: 4px;
                width: 100%;
                transition: all 0.3s;
                svg {
                    transition: all 0.4s;
                    color: #3a3e3e;
                }
                :hover {
                    background-color: lightsalmon;
                    transform: scale(1.1);
                    color: lightgoldenrodyellow;
                    font-weight: bold;
                    > svg {
                        color: tomato;
                        transform: scale(1.1);
                    }
                }
            }
        }
    }

    /* COLOR OPTIONS */
    & > div:last-child {
        cursor: pointer;
        h3 {
            margin-top: 2vmax;
            color: salmon;
            background-color: lightsteelblue;
            text-align: center;
            border-radius: 5px;
            :hover {
                box-shadow: 0 0 5px 1px rgba(0, 0, 0, 0.5);
            }
        }
        & > div {
            display: flex;
            padding: 1rem;
            justify-content: space-around;
            > span {
                width: 4vmax;
                height: 4vmax;
                border-radius: 50%;
                background-color: white;
                border: 1px solid lightcoral;
                cursor: pointer;
                &.dark {
                    background-color: darkgrey;
                }
                :hover {
                    transform: scale(1.1);
                }
            }
        }
    }
    /* FOR WIDE-SCREEN */
    @media (min-width: 768px) {
        min-width: min-content;
        padding: 1vmax 2vmax 0;
        * {
            font: 500 1.2rem 'Lato';
        }
        div:first-child {
            margin: 0;
            span {
                margin: 0;
                padding: 0;
                font-size: 1.5rem;
            }
        }
        hr {
            margin-top: 1vmax;
        }
        > div > ul {
            min-width: fit-content;
            margin-top: 0vmax;
            width: 100%;
            li {
                margin-top: 1vmax;
            }
            & > ul {
                li {
                    margin-top: 1vmax;
                    padding-top: 0;
                    font: 300 1rem 'Lato';
                }
            }
        }
        > div:last-child {
            > div > span {
                width: 2.5vmax;
                height: 2.5vmax;
            }
        }
    }
    &:not(&.open) {
        padding: 0;
        margin: 0;
        min-width: 0%;
        flex: 0;
        opacity: 0;
        transform: translateX(-100%);
        * {
            display: none;
        }
    }
`
export default StyledSidebar
