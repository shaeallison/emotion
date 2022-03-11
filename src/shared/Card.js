import styled from '@emotion/styled'
import {Form} from './'

const StyledCard = styled.div`
  background: ${({ theme }) => theme.colors.white};
  border-radius: 0.5rem;
  color: ${({ theme }) => theme.colors.primary};
  padding: 3rem;
`;

const Card = () =>  {
  return (
    <StyledCard>
      <Form/>
    </StyledCard>
  )
}

export default Card
