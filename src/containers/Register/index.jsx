import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";
import { api } from "../../services/api";
import { toast } from "react-toastify";
import { useNavigate } from "react-router";


import { Container, Form, InputContainer, LeftContainer, Link, RightContainer, Title } from './styles';
import { Button } from '../../components/Button';
import Logo from '../../assets/logo.svg'



export function Register() {
  const navigate = useNavigate()

  const schema = yup.object({
    name: yup.string()
      .required('O nome é obrigatório'),
    email: yup.string()
      .email('Digite seu email')
      .required('E-mail obrigatório.'),
    password: yup.string()
      .min(6, 'A senha deve ter seis caracteres.')
      .required('Senha obrigatória'),
    confirmPassword: yup.string()
      .oneOf([yup.ref('password')], 'As senhas devem ser iguais')
      .required('Confirme sua senha')
  }).required()

  const { register, handleSubmit, formState: { errors } } = useForm({
    resolver: yupResolver(schema)
  })
  console.log(errors)
  const onSubmit = async (data) => {
    try {
      const { status } = await api.post(
        '/users', {
        name: data.name,
        email: data.email,
        password: data.password
      },
        {
          validateStatus: () => true
        }
      );
      if (status === 200 || status === 201) {
        setTimeout(() => {
          navigate('/login')
        }, 2000)
        toast.success('Conta criada com sucesso!')
      } else if (status === 400) {
        toast.error('Email já cadastrado! Faça Login para continuar!')
      } else {
        throw new Error()
      }

    } catch (error) {
      toast.error('Falha no Sistema!')
    }

  }
  return (
    <Container>
      <LeftContainer>
        <img src={Logo} alt="logo-devburger" />
      </LeftContainer>
      <RightContainer>
        <Title>
          Criar conta.
        </Title>
        <Form onSubmit={handleSubmit(onSubmit)}>
          <InputContainer>
            <label >Nome</label>
            <input type="text" {...register("name")} />
            <p>{errors.name?.message}</p>
          </InputContainer>

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

          <InputContainer>
            <label>Confirmar senha</label>
            <input type="password"  {...register("confirmPassword")} />
            <p>{errors?.confirmPassword?.message}</p>
          </InputContainer>
          {/* <Link>Esqueci minha senha.</Link>  */}
          <Button type="submit">Criar Conta</Button>

          <p>
            Já possui conta?<Link to="/login"> Clique aqui.</Link>
          </p>

        </Form>
      </RightContainer>
    </Container>
  );
}
