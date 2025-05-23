import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";
import { api } from "../../services/api";
import { toast } from "react-toastify";
import { useNavigate } from "react-router";
import { useUser } from "../../hooks/UserContext";


import { Container, Form, InputContainer, LeftContainer, Link, RightContainer, Title } from './styles';
import { Button } from '../../components/Button';
import Logo from '../../assets/logo.svg'



export function Login() {
  const navigate = useNavigate()
  const { putUserData } = useUser()

  const schema = yup.object({
    email: yup.string()
      .email('Digite seu email')
      .required('E-mail obrigatório.'),
    password: yup.string()
      .min(6, 'A senha deve ter seis caracteres.')
      .required('Senha obrigatória')
  }).required()

  const { register, handleSubmit, formState: { errors } } = useForm({
    resolver: yupResolver(schema)
  })
  console.log(errors)
  const onSubmit = async (data) => {

    const { data: userData } = await toast.promise(
      api.post('/session', {
        email: data.email,
        password: data.password
      }),
      {
        pending: 'Verificando seus dados.',
        success: {
          render() {
            setTimeout(() => {
              if (userData?.admin) {
                navigate('/admin/pedidos')
              } else {
                navigate('/')
              }
            }, 2000)
            return 'Seja bem vindo(a).';
          }
        },
        error: 'A senha ou o e-mail estão incorretos.'
      }
    )

    putUserData(userData)

  }


  return (
    <Container>
      <LeftContainer>
        <img src={Logo} alt="logo-devburger" />
      </LeftContainer>
      <RightContainer>
        <Title>
          Olá, seja bem vindo ao <span> Dev Burguer!</span>
          <br />
          Acesse com seu <span>Login e senha.</span>
        </Title>
        <Form onSubmit={handleSubmit(onSubmit)}>
          <InputContainer>
            <label >Email</label>
            <input type="email" {...register("email")} />
            <p>{errors.email?.message}</p>
          </InputContainer>

          <InputContainer>
            <label>Senha</label>
            <input type="password"  {...register("password")} />
            <p>{errors.password?.message}</p>
          </InputContainer>
          {/* <Link>Esqueci minha senha.</Link>  */}
          <Button type="submit">Entrar</Button>

          <p>
            Não possui conta?<Link to="/cadastro"> Clique aqui.</Link>
          </p>

        </Form>
      </RightContainer>
    </Container>
  );
}
