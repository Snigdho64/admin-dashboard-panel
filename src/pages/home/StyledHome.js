import styled from 'styled-components'
import { flex } from '../../components/common/StyledMixins'

export const StyledHome = styled.div`
    width: 100%;
    height: 100%;
    ${flex('column')}
    .statsContainer {
        width: 100%;
        margin-top: 1rem;
        ${flex('row', 'center', 'space-evenly')}
        flex-wrap: wrap;
    }
`
