import styled from 'styled-components'
import colors from '../../themes/colors'

const Header = styled.header`
  background-color: ${colors.secondary};
  color: ${colors.primary};
  text-align: center;
  padding: 24px 0;
`
const Title = styled.h1`
  font-size: 2rem;
`

const Cabecalho = () => (
  <Header>
    <Title>EBAC Jobs</Title>
  </Header>
)

export default Cabecalho
