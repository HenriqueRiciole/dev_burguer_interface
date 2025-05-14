import { SignOut } from "@phosphor-icons/react"

import Logo from '../../assets/logo.svg'
import { navLinks } from "./navLinks"
import { Container, Footer, NavLink, NavLinksContainer } from "./styles"
import { useUser } from '../../hooks/UserContext.jsx'
import { useResolvedPath } from "react-router"

export function SideNavAdmin() {
  const { logout } = useUser()
  const { pathname } = useResolvedPath()

  return (
    <Container>
      <img src={Logo} alt="Logo DevBurger" />
      <NavLinksContainer>
        {
          navLinks.map((link) => (
            <NavLink
              key={link.id}
              to={link.path}
              $isActive={pathname === link.path}
            >
              {link.icon}
              <span>{link.label}</span>
            </NavLink>
          )
          )
        }
      </NavLinksContainer>
      <Footer>
        <NavLink to="/login" onClick={logout}>
          <SignOut />
          <span>Sair</span>
        </NavLink>
      </Footer>
    </Container>
  )
}