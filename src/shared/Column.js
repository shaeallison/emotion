import styled from '@emotion/styled'
import {device} from '../utils'

const columnBase = 12

const StyledColumn = styled.div`
  // col width and col gutter
  ${props => props.cols.map(item => item.breakpoint !== null ?
    `@media ${device[item.breakpoint]} { width: ${(item.size / columnBase) * 100}%; }`
    :
    `width: ${(item.size / columnBase) * 100}%;`
  )}
  ${props => props.gutter.map(item => item.breakpoint !== null ?
    `@media ${device[item.breakpoint]} { padding-left: ${item.size}; }`
    :
    `padding-left: ${item.size};`
  )}
`;

const Column = (props) =>  {
  const {gutter, cols, children, tag} = props

  // used instead of as prop, kind of annoying that there isn't a built in prop for this
  if (tag) {
    const ColumnEl = StyledColumn.withComponent(`${tag}`)
    return (
      <ColumnEl cols={cols} gutter={gutter}>
        {children}
      </ColumnEl>
    )
  } else {
    return (
      <StyledColumn cols={cols} gutter={gutter}>
        {children}
      </StyledColumn>
    )
  }
}

export default Column
