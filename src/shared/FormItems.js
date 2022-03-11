import styled from '@emotion/styled'
import {Text} from './'

const StyledFormItem = styled.div`
  margin-bottom: 2rem;
`;

const StyledLabel = styled.label`
  margin-bottom: 1rem;
  display: block;
`

const StyledInput = styled.input`
  border: 0.1rem solid ${({ theme }) => theme.colors.primary};
  border-radius: 0.8rem;
  display: block;
  width: 100%;
  padding: 1rem 1.2rem;
`

const FormItems = (props) =>  {
  const {label, type, required, id, help, error} = props

  return (
    <StyledFormItem>
      <StyledLabel htmlFor={id}>{label}</StyledLabel>
      <StyledInput id={id} type={type} required={required}/>
      {help !== null &&
        <Text as='span' style='help'>{help}</Text>
      }
      <Text as='span' style='error'>{error}</Text>
    </StyledFormItem>
  )
}

export default FormItems
