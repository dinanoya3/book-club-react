import styled from 'styled-components'
import {Pill} from '../../styles'

export const Panel = styled.article`
  background-color: #ffae82;
  border-left: 2px solid #000;
  /* subtract 82px from vh, 82px is from Header's height; use console for dimension */
  height: calc(100vh - 82px);
  width: 660px;
  position: fixed;
  z-index: 2;
  /* right: 0; */
  right: ${({$state}) => ($state === 'entering' || $state === 'entered' ? 0 : '-660px')};
  bottom: 0;
  box-sizing: border-box;
  padding: 40px 120px 60px 40px;
  overflow: scroll;
  transition: 500ms;

  @media (max-width: 800px) {
    border-left: none;
    padding: 40px 86px 20px 20px;
    width: 100vw;
    height: calc(100vh - 75px);
    /* bottom: 0; */
    bottom: ${({$state}) => ($state === 'entering' || $state === 'entered' ? 0 : '-100vh')};
    right: unset;
    z-index: 3;
  }
`

export const P = styled.p`
  font-family: 'Libre Baskerville', serif;
  font-size: 16px;
  line-height: 1.6;
  margin: 30px 0 0;
`
export const Em = styled.em`
  font-style: italic;
`

export const CloseWrapper = styled(Pill)`
  /* background: #a7e1f8;
  border: 2px solid #000;
  border-radius: 30px;
  height: 20px;
  width: 20px;
  padding: 8px; */
  /* align-items: center;
  justify-content: center;
  overflow: hidden; */
  /* display: flex; */
  display: ${({$state}) => ($state === 'entered' ? 'flex' : 'none')};
  cursor: pointer;
  top: 120px;
  right: 40px;
  position: fixed;
  z-index: 4;

  @media (max-width: 800px) {
    top: unset;
    bottom: 20px;
    right: 20px;
  }
`

export const BG = styled.div`
  background: rgba(0, 0, 0, 0.3);
  cursor: pointer;
  position: fixed;
  height: 100vh;
  width: 100vw;
  top: 0;
  z-index: 1;
  opacity: ${({$state}) => ($state === 'entering' || $state === 'entered' ? 1 : 0)};
  pointer-events: ${({$state}) => ($state === 'exited' ? 'none' : 'auto')};
  transition: 500ms;
`
