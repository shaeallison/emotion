import styled from '@emotion/styled'

const HelpText = styled.div`
  margin-top: 0.2rem;
  display: block;
`

const LegendText = styled.div`
  text-transform: uppercase;
  font-weight: 600;
`

const ErrorText = styled.div`
  color: red;
`

const Text = (props) => {
  const {as, style, children} = props

  return (
    <>
      {style === 'help' &&
        <HelpText as={as}>{children}</HelpText>
      }

      {style === 'legend' &&
        <LegendText as={as}>{children}</LegendText>
      }

      {style === 'error' &&
        <ErrorText as={as}>{children}</ErrorText>
      }
    </>
  )
}

export default Text
