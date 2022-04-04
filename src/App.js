import React, {useState, useEffect} from 'react'
import {GlobalStyle} from './styles'
import Header from './Components/Header'
import Search from './Components/Search'
import BooksContainer from './Components/BooksContainer'
import DetailPanel from './Components/DetailPanel'
import {Transition} from 'react-transition-group'

const App = () => {
  // store API response as an array
  const [books, setBooks] = useState([])
  const [selectedBook, setSelectedBook] = useState(null)
  // panel's opened/closed status
  const [showPanel, setShowPanel] = useState(false)
  const [filteredBooks, setFilteredBooks] = useState([])

  // console.log(`this message displays every time component renders`)
  // fetch data and store in state variable
  // side effects in a component (after it's rendered to dom)
  useEffect(() => {
    const getData = async () => {
      // ASYNC AWAIT PATTERN
      try {
        const response = await fetch('https://book-club-json.herokuapp.com/books')
        const books = await response.json()
        setBooks(books)
        setFilteredBooks(books)
      } catch (error) {
        console.log(error)
      }

      // response.ok returns a boolean
      // if (response.ok) {
      //   const books = await response.json()
      //   console.log(`json-ified response: `, books)
      //   setBooks(books)
      // }

      // // 200 = success
      // if (response.status === 200) {
      //   const books = await response.json()
      //   console.log(`json-ified response: `, books)
      //   setBooks(books)
      // }

      // PROMISE pattern
      // fetch('https://book-club-json.herokuapp.com/books')
      //   .then((response) => {
      //     console.log(`here's what the fetch request returns`, response)
      //     // this returns a promise, can use another .then()
      //     return response.json()
      //   })
      //   .then((books) => {
      //     console.log(`json-ified response: `, books)
      //     // update state variable
      //     return setBooks(books)
      //   })
    }

    getData()
    // add empty dependency array so useEffect only runs ONCE
  }, [])

  // console.log(`the books array in our state:`, books)

  const pickBook = (book) => {
    setSelectedBook(book)
    setShowPanel(true)
  }
  // console.log(selectedBook)

  const closePanel = () => {
    // setSelectedBook(null)
    setShowPanel(false)
  }

  const filterBooks = (searchTerm) => {
    const stringSearch = (bookAttribute, searchTerm) =>
      bookAttribute.toLowerCase().includes(searchTerm.toLowerCase())

    if (!searchTerm) {
      // return books
      setFilteredBooks(books)
    } else {
      setFilteredBooks(
        books.filter(
          (book) => stringSearch(book.title, searchTerm) || stringSearch(book.author, searchTerm)
        )

        // book.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        // book.author.toLowerCase().includes(searchTerm.toLowerCase())
      )
    }
  }

  // console.log(filterBooks(null))
  // console.log(filterBooks('beale'))

  const hasFiltered = filteredBooks.length !== books.length
  // console.log(hasFiltered)

  return (
    <>
      <GlobalStyle />
      <Header>
        <Search filterBooks={filterBooks} />
      </Header>
      {/* <BooksContainer books={books} pickBook={pickBook} isPanelOpen={selectedBook !== null} /> */}
      <BooksContainer
        books={filteredBooks}
        pickBook={pickBook}
        isPanelOpen={showPanel}
        title={hasFiltered ? 'Search Results' : 'All Books'}
      />
      {/* conditional rendering detail panel */}
      {/* only render DetailPanel if selectedBook equals true */}
      {/* {selectedBook && <DetailPanel book={selectedBook} closePanel={closePanel} />} */}
      <Transition in={showPanel} timeout={300}>
        {(state) => <DetailPanel book={selectedBook} closePanel={closePanel} state={state} />}
      </Transition>
    </>
  )
}

export default App
