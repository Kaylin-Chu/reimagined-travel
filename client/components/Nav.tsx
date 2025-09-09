import { IfAuthenticated, IfNotAuthenticated } from './Authenticated.tsx'
import styled from 'styled-components'
import { useAuth0 } from '@auth0/auth0-react'

const NavGroup = styled.nav`
  float: right;
`

const NavButton = styled.button`
  margin-right: 30px;
`

function Nav() {
  const { user, logout, loginWithRedirect } = useAuth0()

  const handleSignOut = () => {
    //console.log('sign out')
    logout()
  }

  const handleSignIn = () => {
    //console.log('sign in')
    loginWithRedirect()
  }

  return (
    <>
      <NavGroup>
        <IfAuthenticated>
          <NavButton onClick={handleSignOut}>Sign out</NavButton>
          {user && <p>Signed in as: {user?.nickname}</p>}
          {/* {console.log(user)} */}
        </IfAuthenticated>
        <IfNotAuthenticated>
          <NavButton onClick={handleSignIn}>Sign in</NavButton>
        </IfNotAuthenticated>
      </NavGroup>
    </>
  )
}

export default Nav