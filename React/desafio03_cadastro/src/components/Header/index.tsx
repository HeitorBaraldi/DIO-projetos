import logo from '../../assets/logo-dio.png';
import { Button } from '../Button';
import { Container, Wrapper, BuscarInputContainer, Input, Row, Menu, MenuRight}  from './styles';
import { IHeader } from './types';

const Header = ({autenticado}:IHeader) => {
  return (
    <Wrapper>
      <Container>
          <Row>
            <img src={logo} alt="Logo da dio"/>
            {autenticado ? (
              <>
               <BuscarInputContainer>
                <Input placeholder='Buscar...'/>
               </BuscarInputContainer>
                <Menu>Live Code</Menu>
                <Menu>Global</Menu>
              </>
            ) : null}
          </Row>
          <Row>
                <MenuRight>Home</MenuRight>
                <Button title="Entrar" />
                <Button title="Cadastrar" />
          </Row>
      </Container>
    </Wrapper>
  )
}

export { Header }