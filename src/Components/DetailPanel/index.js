import React, {useRef, useEffect} from 'react'
import {Panel, P, Em, CloseWrapper, BG} from './styles'
import {Close} from '../../styles'
import Book from '../Book'

const DetailPanel = ({book, closePanel, state}) => {
  // ref variables to reset open panel top position
  const panelEl = useRef(null)
  const prevBook = useRef(null)
  console.log(prevBook.current)

  useEffect(() => {
    if (prevBook.current !== book) {
      panelEl.current.scrollTop = 0
    }
    prevBook.current = book
  }, [book, prevBook])

  // console.log(state)
  return (
    <>
      <BG onClick={closePanel} $state={state} />
      <Panel $state={state} ref={panelEl}>
        <CloseWrapper onClick={closePanel} $state={state}>
          <Close />
        </CloseWrapper>
        {/* only render Book and P components if there's a valid book object */}
        {book && (
          <>
            {/* isLarge is a transient prop */}
            <Book book={book} isLarge={true} />
            {/* <figure>
      <img src={book.image} alt="" />
      <h3>{book.title}</h3>
      <h4>by {book.author}</h4>
    </figure> */}

            <P>{book.description}</P>
            <P>
              <Em>Published in {book.published}</Em>
            </P>
          </>
        )}
      </Panel>
    </>
  )
}

export default DetailPanel
