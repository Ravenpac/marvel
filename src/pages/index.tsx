import { NextPage } from "next";
import Head from "next/head";
import { useState, FormEvent, useEffect } from "react";
import {
  Checkbox,
  Choose,
  Container,
  Content,
  Forgot,
  Form,
  Logo,
  Input,
  Login,
  SignUp,
  Image,
} from "../styles/pages/Home";
import { useRouter } from "next/router";
import SplashScreen from "../components/Splashscreen";
import BackgroundImg from "../components/BackgroundImg";

const Home: NextPage = () => {
  const router = useRouter();

  interface SignInDataProps {
    user: string;
    password: string;
  }

  const [signInData, setSignInData] = useState<SignInDataProps>({
    user: "",
    password: "",
  });

  function handleSignIn(e: FormEvent) {
    e.preventDefault();

    router.push("/personagens");
  }

  const [splashScreen, setSplashScreen] = useState(false);

  useEffect(() => {
    setSplashScreen(true);
    setTimeout(() => {
      setSplashScreen(false);
    }, 2500);
  }, []);

  if (splashScreen) {
    return <SplashScreen />;
  } else
    return (
      <>
        <Head>
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1.0"
          />
          <title>MARVEL</title>
        </Head>

        <Container>
          <Content>
            <Logo>
              <div>
                <h1>MARVEL</h1>
              </div>
            </Logo>
            <Form onSubmit={handleSignIn}>
              <h2>Bem-vindo(a) de volta!</h2>

              <h3>Acesse sua conta:</h3>

              <Input
                type="text"
                placeholder="Usuário"
                id="user"
                required
                onChange={(event) =>
                  setSignInData({ ...signInData, user: event.target.value })
                }
              />

              <Input
                type="password"
                placeholder="Senha"
                id="password"
                required
                onChange={(event) =>
                  setSignInData({ ...signInData, user: event.target.value })
                }
              />

              <Choose>
                <Checkbox type="checkbox" id="checkbox" />
                <p>Salvar login</p>
                <Forgot>Esqueci a senha</Forgot>
              </Choose>
              <Login>Entrar</Login>
              <SignUp>
                Ainda não tem o login? <span>Cadastre-se</span>
              </SignUp>
            </Form>
          </Content>
          <Image>
            <BackgroundImg boxShadow="100%" width="100%" height="100vh" />
          </Image>
        </Container>
      </>
    );
};

export default Home;
