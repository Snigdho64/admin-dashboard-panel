import styled from 'styled-components'
import { flex } from '../../../components/common/StyledMixins'

export const StyledRevenue = styled.div`
    width: 100%;
    margin: 4rem 1rem;
    padding: 1rem;
    ${flex('', '', 'space-between')};
    .revenueChart {
        flex: 1;
        width: 100%;
        height: 100%;
        padding: 1rem;
    }
    .revenueAnalysis {
    }
    @media (max-width: 800px) {
        flex-direction: column;
    }
`
