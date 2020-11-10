/* libs */
import React, { useState, useEffect } from 'react'
/* components */
import Card from 'react-bootstrap/Card'
import searchSvg from '../../svg/search.svg'
/* styles */
import md from './app.module.scss'

function App(props) {

  const [search, setSearch] = useState("")
  const [posts, setPosts] = useState([])
  const [fetchErr, setFetchErr] = useState(false)

  useEffect(() => {
    async function fetchData() {
      try {
        let posts = await fetch('https://jsonplaceholder.typicode.com/posts?_limit=15')
        posts = await posts.json()
        let authors = await fetch('https://jsonplaceholder.typicode.com/users?_limit=4')
        authors = await authors.json()
        posts.forEach(post => post.author = authors[Math.floor(Math.random() * 4)].name)

        setPosts(posts)
      } catch (e) {
        setFetchErr(true)
      }
    }
    fetchData()
  }, [])

  let arrPostElements = []
  posts.forEach(post => {
    if (search) {
      if (post.author.toLowerCase().includes(search.toLowerCase())) {
        arrPostElements.push(
          <div key={post.id} className="col-12 mt-4 col-md-6 col-lg-4">
            <Card border="secondary" >
              <Card.Header>{post.author}</Card.Header>
              <Card.Body>
                <Card.Title>{post.title}</Card.Title>
                <Card.Text>{post.body}</Card.Text>
              </Card.Body>
            </Card>
          </div>)
      }
    } else {
      arrPostElements.push(
        <div key={post.id} className="col-12 mt-4 col-md-6 col-lg-4">
          <Card border="secondary" >
            <Card.Header>{post.author}</Card.Header>
            <Card.Body>
              <Card.Title>{post.title}</Card.Title>
              <Card.Text>{post.body}</Card.Text>
            </Card.Body>
          </Card>
        </div>)
    }
  })

  const onSearch = () => setSearch(search)
  const onCha = (e) => setSearch(e.target.value)

  return (
    <>
      <header className="container pt-3">

        <div className="input-group mb-3">
          <div className="input-group-prepend">
            <button className="btn btn-outline-secondary" type="button"
              onClick={onSearch}>
              <img src={searchSvg} />
            </button>
          </div>
          <input type="text" className="form-control" placeholder="Filter by author..." aria-label="" aria-describedby="basic-addon1"
            value={search}
            onChange={onCha} />
        </div>

      </header>
      {/* content */}
      <main className="container">
        <div className="row flex-wrap">
          {
            !fetchErr ?
              arrPostElements.length && arrPostElements
              :
              <p className={md.badRequest}>Не удалось получить данные с сервера :(</p>
          }
        </div>
      </main>
    </>
  )
}

export default App