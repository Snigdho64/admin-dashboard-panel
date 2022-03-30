import styled from 'styled-components'
import { flex } from '../common/StyledMixins'

export const StyledNavbar = styled.nav`
    height: fit-content;
    width: 100%;
    background-color: lightpink;
    ${flex('row', 'center', 'space-betwwen')}
    padding: 0rem 0.5rem;
    position: sticky;
    top: 0;
    left: 0;
    z-index: 100;
    * {
        cursor: default;
    }
    > .left {
        flex: 1;
        h3 {
            font: 500 1.4rem 'Fredoka';
            background: linear-gradient(to bottom right, purple, red);
            background-clip: text;
            -webkit-background-clip: text;
            color: transparent;
        }
        color: tomato;
        font-weight: 700;
        svg {
            font-size: 4vmax;
            cursor: pointer;
            :hover {
                color: white;
            }
        }
    }
    > .center {
        flex: 0.5;
        width: fit-content;
        display: flex;
        align-items: center;
        justify-content: space-evenly;
        .MuiBottomNavigation-root {
            background-color: transparent;
            width: fit-content;
            height: fit-content;
            span {
                font-size: 12px;
            }
            > button {
                margin: 0;
                padding-left: 0;
                padding-right: 0;
                min-width: 40px;
                max-width: 60px;
                svg {
                    color: teal;
                }
                > span {
                    color: teal;
                }
                &.Mui-selected {
                    svg {
                        color: tomato;
                    }
                    span {
                        color: tomato;
                    }
                    .MuiBadge-root {
                        span {
                            background-color: red;
                            color: white;
                        }
                    }
                }
            }
        }
    }
    > .right {
        flex: 0.5;
        ${flex()}
        * {
            transition: all 0.3s;
        }
        .MuiBackdrop-root {
            width: 100%;
            height: 100%;
        }
        .MuiSpeedDial-root {
            position: absolute;
            top: 10%;
            right: 3%;
            > button {
                width: fit-content;
                height: fit-content;
                border: none;
                box-shadow: none;
                background-color: transparent;
                span {
                    background-color: transparent;
                }
                span > svg {
                    color: cornflowerblue;
                    font-size: 2rem;
                }
                :hover > span > svg {
                    color: tomato;
                }
            }
            .MuiButtonBase-root {
                cursor: pointer;
            }
            .MuiSpeedDial-actions {
                > span {
                    font-size: 2rem;
                    > span {
                        background-color: cornflowerblue;
                    }
                    > button {
                        background-color: cornflowerblue;
                        > svg {
                        }
                        > span {
                        }
                    }
                    :hover {
                        > span {
                            background-color: tomato;
                            color: white;
                        }
                        > button {
                            background-color: tomato;
                        }
                        svg {
                            color: white;
                        }
                    }
                }
            }
        }
    }
    @media screen and (min-width: 600px) {
        > .center {
            flex: 0.5;
            width: fit-content;
            display: flex;
            align-items: center;
            justify-content: space-evenly;
            .MuiBottomNavigation-root {
                background-color: transparent;
                width: fit-content;
                height: fit-content;
                span {
                    font-size: 0.8rem;
                }
                > button {
                    min-width: unset;
                    width: fit-content;
                    min-height: fit-content;
                    max-width: unset;
                    margin: 0rem 1rem;
                    svg {
                        font-size: 1.8rem;
                    }
                }
            }
        }
        > .right {
            .MuiSpeedDial-root {
                > button span > svg {
                    font-size: 2.8rem;
                }
            }
        }
    }
`
