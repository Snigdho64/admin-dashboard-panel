import { css } from 'styled-components'

export const flex = (dir, align, justify) => css`
    display: flex;
    flex-direction: ${dir || 'row'};
    align-items: ${align || 'center'};
    justify-content: ${justify || 'center'};
`

export const gradientText = (dir, ...colorStops) => {}

export const border = (radius, color = null, size = '1px') => css`
    ${() => (color ? { border: `${size} solid ${color}` } : {})}
    border-radius: ${radius || '0.8rem'};
`

export const boxshadow = (blur = '5px', size = '0.5px', color = 'grey') => css`
    box-shadow: 0px 0px ${blur} ${size} ${color};
`
