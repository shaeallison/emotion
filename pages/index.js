import styled from '@emotion/styled'
import {device} from '../src/utils'
import {Grid, Column, Card} from '../src/shared'

const Wrapper = styled.div`
  background: linear-gradient(315deg, #00B2A9 0%, #005776 100%);
  padding-top: 1rem;
`

const SidebarContent = styled.div`
  background: ${({ theme }) => theme.colors.tertiary};
  color: ${({ theme }) => theme.colors.white};
  min-height: calc(100vh - 1rem);
  height: 100%;
`

const MainContent = styled.div`
  background: ${({ theme }) => theme.colors.primary};
  color: ${({ theme }) => theme.colors.white};
  min-height: calc(100vh - 1rem);
  padding: 5rem 2rem;
  height: 100%;

  @media ${device.md} {
    padding: 5rem;
  }
`

const Title = styled.h1`
  font-size: 4.4rem;
  margin-bottom: 3rem;
`

const gutters = [
  {breakpoint: null, size: '0'},
]

const Layout = () => (
  <Wrapper>
    <Grid gutter={gutters}>
      <Column
        tag='sidebar'
        gutter={gutters}
        cols={[
          {breakpoint: null, size: '12'},
          {breakpoint: 'md', size: '3'},
        ]}
        key='sidebar-col'>
          <SidebarContent>
            Sidebar Content
          </SidebarContent>
      </Column>
      <Column
        tag='main'
        gutter={gutters}
        cols={[
          {breakpoint: null, size: '12'},
          {breakpoint: 'md', size: '9'},
        ]}
        key='main-col'>
          <MainContent>
            <Title>My Account</Title>
            <Card/>
          </MainContent>
      </Column>
    </Grid>
  </Wrapper>
)

export default Layout
