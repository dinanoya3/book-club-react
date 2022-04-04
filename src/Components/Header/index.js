import React from 'react'
import {Logo, HeaderContainer} from './styles'

const Header = ({children}) => (
  <HeaderContainer>
    <a href="/">
      {/* svg takes title attr instead of alt */}
      <Logo title="Book Club logo" />
    </a>
    {/* Search component */}
    {children}
  </HeaderContainer>
)
export default Header
