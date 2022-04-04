import styled from 'styled-components'
import {Pill} from '../../styles'
import {ReactComponent as MagnifyingIcon} from '../../assets/search.svg'

// house the input element and the icons
export const SearchContainer = styled(Pill)`
  /* border: 2px solid #000;
  border-radius: 30px;
  height: 20px; 
  background-color: #a7e1f8;
  padding: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden; */
  width: ${({$showOnDesktop}) => ($showOnDesktop ? '420px' : '20px')};
  transition: 500ms;
  @media (max-width: 800px) {
    width: 85%;
  }

  input,
  button {
    display: ${({$showOnDesktop}) => ($showOnDesktop ? 'block' : 'none')};

    @media (max-width: 800px) {
      display: block;
    }
  }
`

export const Input = styled.input`
  font-family: 'Work Sans', sans-serif;
  font-weight: 700;
  font-size: 18px;
  /* for the icons */
  flex-grow: 1;
  background: inherit;
  border: none;
  padding: 6px;
`

export const Icon = styled(MagnifyingIcon)`
  width: 20px;
  cursor: pointer;
`

// for mobile view
export const Wrapper = styled.div`
  @media (max-width: 800px) {
    background: #ffbccc;
    border-top: 2px solid #000;
    display: flex;
    align-items: center;
    justify-content: center;
    height: 64px;
    width: 100vw;
    position: fixed;
    left: 0;
    bottom: 0;
    z-index: 1;
  }
`
