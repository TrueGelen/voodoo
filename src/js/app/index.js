/* libs */
import React, { useState, useEffect, useMemo } from 'react'
/* components */
import Card from 'react-bootstrap/Card'
import searchSvg from '../../svg/search.svg'
/* styles */
import md from './app.module.scss'

function App(props) {

  const [search, setSearch] = useState("")
  const [posts, setPosts] = useState([])
  const [authors, setAuthors] = useState([])
  const [fetchErr, setFetchErr] = useState(false)

  useEffect(() => {
    async function fetchData() {
      try {
        let posts = await fetch('https://jsonplaceholder.typicode.com/posts?_limit=15')
        posts = await posts.json()
        let authors = await fetch('https://jsonplaceholder.typicode.com/users?_limit=4')
        authors = await authors.json()

        posts.forEach(post => post.userId = authors[Math.floor(Math.random() * 4)].id)

        setAuthors(authors)
        setPosts(posts)
      } catch (e) {
        setFetchErr(true)
      }
    }
    fetchData()
  }, [])
  // console.log(authors, posts)

  let data = useMemo(() => {
    let arr = []

    const templateMaker = (post = null) => {
      arr.push(<div key={post.id} className="col-12 mt-4 col-md-6 col-lg-4">
        <Card border="secondary" >
          <Card.Header>{authors[post.userId - 1].name}</Card.Header>
          <Card.Body>
            <Card.Title>{post.title}</Card.Title>
            <Card.Text>{post.body}</Card.Text>
          </Card.Body>
        </Card>
      </div>)
    }

    posts.forEach(post => {
      if (search) {
        if (authors[post.userId - 1].name.toLowerCase().includes(search.toLowerCase())) {
          templateMaker(post)
        } else {
        }
      } else {
        templateMaker(post)
      }

    })

    if (fetchErr)
      return <p className={md.badRequest}>Не удалось получить данные с сервера :(</p>
    else
      return arr.length ? arr : <p>По вашему запросу ничего не найдено</p>
  }, [search, posts, fetchErr])

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
          {data}
        </div>
      </main>
    </>
  )
}

export default App