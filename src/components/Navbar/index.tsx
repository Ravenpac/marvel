import Image from "next/image";
import { Header, Logo, Marvel, Navigation, Links, Site } from "./styles";
import User from "../../../public/images/profile-picture.png";
import { useRouter } from "next/router";

const Navbar = () => {
  const router = useRouter();

  return (
    <Header>
      <Logo>
        <Marvel>MARVEL</Marvel>
      </Logo>
      <Navigation>
        <Links>
          <li>
            <Site
              href="/personagens"
              isActive={router.asPath === "/personagens"}
            >
              Personagens
            </Site>
          </li>
          <li>
            <Site href="/filmes" isActive={router.asPath === "/filmes"}>
              Filmes
            </Site>
          </li>
          <li>
            <Site href="/quadrinhos" isActive={router.asPath === "/quadrinhos"}>
              HQs
            </Site>
          </li>
          <li>
            <Image src={User} alt="Usuário" width="55px" height="55px" />
            <Site href="/" isActive={router.asPath === "/"}>
              Sair
            </Site>
          </li>
        </Links>
      </Navigation>
    </Header>
  );
};

export default Navbar;
