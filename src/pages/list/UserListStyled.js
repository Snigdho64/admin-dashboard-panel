import styled from 'styled-components'
import { flex } from '../../components/common/StyledMixins'

export const UsersListStyled = styled.div`
    width: 100%;
    flex: 1;
    /* padding: 5rem; */
    ${flex('column')};
    .MuiDataGrid-root {
        width: 100%;
        .MuiDataGrid-columnHeader {
            background-color: #efc32162;
            font-size: 1.5rem;
            color: grey;
            div {
                justify-content: center;
                font-family: Fredoka;
                text-align: center;
            }
        }
        .MuiDataGrid-cell {
            justify-content: center;
            div {
                font-weight: bold;
                text-align: center;
                text-transform: capitalize;
            }
            background-color: #eaf4;
            font-size: 1.2rem;
            min-height: 6vmax !important;
        }
        .MuiDataGrid-row {
            min-height: 6vmax !important;
        }
        .userCell {
            ${flex('', '', '')}
            img {
                width: 5vmax;
                height: 5vmax;
                border-radius: 50%;
                object-fit: cover;
                object-position: center;
                margin-right: 1rem;
            }
            span {
                color: teal;
                margin-left: 1rem;
                font-size: 1rem;
                background-color: #aefc;
            }
        }
    }
`
