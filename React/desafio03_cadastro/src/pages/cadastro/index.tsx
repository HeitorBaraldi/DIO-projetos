import { MdEmail, MdLock, MdPerson } from 'react-icons/md'
import { Button } from '../../components/Button';
import { Header } from '../../components/Header';
import { Input } from '../../components/Input';
import { useForm } from "react-hook-form";
import { Container, Title, Column, ColumnD, TitleLogin, SubtitleLogin, EsqueciText, ContaText,CriarText, Row, Wrapper } from './styles';
import { IFormData } from "./types";

const Cadastro = () => {



    const { control, formState: { errors  } } = useForm<IFormData>({
        reValidateMode: 'onChange',
        mode: 'onChange',
    });


    return (<>
        <Header />
        <Container>
            <Column>
                <Title>A plataforma para você aprender com experts, dominar as principais tecnologias
                 e entrar mais rápido nas empresas mais desejadas.</Title>
            </Column>
            <ColumnD>
                <Wrapper>
                    <TitleLogin>Comece agora grátis</TitleLogin>
                    <SubtitleLogin>Crie sua conta e make the change_</SubtitleLogin>
                    <form >
                        <Input placeholder="Nome completo" leftIcon={<MdPerson />} name="name"  control={control} />
                        {errors.name && <span>Nome é obrigatório</span>}
                        <Input placeholder="E-mail" leftIcon={<MdEmail />} name="email"  control={control} />
                        {errors.email && <span>E-mail é obrigatório</span>}
                        <Input type="password" placeholder="Senha" leftIcon={<MdLock />}  name="senha" control={control} />
                        {errors.senha && <span>Senha é obrigatório</span>}
                        <Button title="Criar mina conta" variant="secondary" type="submit"/>
                    </form>
                    <Row>
                        <EsqueciText>Ao clicar em "criar minha conta grátis", declaro que aceito as Políticas de Privacidade e os Termos de USO da DIO.</EsqueciText>
                    </Row>
                    <Row>
                        <ContaText>Já tenho conta. </ContaText>
                        <CriarText>Fazer Login</CriarText>
                    </Row>
                </Wrapper>
            </ColumnD>
        </Container>
    </>)
}

export { Cadastro }