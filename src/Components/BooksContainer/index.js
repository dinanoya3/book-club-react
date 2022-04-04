import React, {useRef, useEffect, useState} from 'react'
import {debounce} from 'lodash-es'
import {Container, H2, BookList} from './styles'
import Book from '../Book'

const BooksContainer = ({books, pickBook, isPanelOpen, title}) => {
  // store y-coord scroll position in browser as px value
  const [scroll, setScroll] = useState(0)
  const prevPanelState = useRef(false)

  useEffect(() => {
    // debounce function delays invoking a function until after some time passed
    const handleScroll = debounce(() => {
      // setScroll captures y-coord scroll position
      setScroll(window.scrollY)
    }, 100)
    // if panel is open, track scroll position
    if (!isPanelOpen) {
      window.addEventListener('scroll', handleScroll)
    }

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [isPanelOpen])

  // console.log(scroll)

  // maintain scroll position on page
  useEffect(() => {
    if (prevPanelState.current && !isPanelOpen) {
      // scroll(x-coord, y-coord)
      window.scroll(0, scroll)
    }
    prevPanelState.current = isPanelOpen
  }, [isPanelOpen, prevPanelState, scroll])

  // console.log(prevPanelState.current)

  return (
    <Container $isPanelOpen={isPanelOpen} $top={scroll}>
      <H2>{title}</H2>
      <BookList>
        {books.map((book) => (
          <Book key={book.id} book={book} pickBook={pickBook} />
        ))}
      </BookList>
    </Container>
  )
}

export default BooksContainer
