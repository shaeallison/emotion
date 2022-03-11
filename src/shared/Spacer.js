import styled from '@emotion/styled'

/**
 * The Spacer Component Configuration
 * @param {Object} props
 * @param {'padding'|'margin'} props.name
 * @param {string | string[]} props.pos Ex. 'horizontal', 'top', ['top', 'right']
 * @param {string | string[]} props.size Ex. '2', ['2', '5']
 */

const StyledSpacer = styled.div`
  ${props => {
    const {name, pos, size} = props

    if (pos === 'vertical') {
      return `
        ${name}-top: ${size}rem;
        ${name}-bottom: ${size}rem;
    `
    } else if (pos === 'horizontal') {
      return `
        ${name}-left: ${size}rem;
        ${name}-right: ${size}rem;
    `
    } else if (Array.isArray(pos) && Array.isArray(size)) {
      return pos.map((position, i) => `${name}-${position}: ${size[i]}rem;`)
    } else {
      return `${name}-${pos}: ${size}rem;`
    }
  }}
`

const Spacer = (props) => {
  const {name, pos, size, children} = props

  return (
    <StyledSpacer name={name} pos={pos} size={size}>{children}</StyledSpacer>
  )
}

export default Spacer
