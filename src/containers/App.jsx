import React, { useState, useEffect } from "react"
import "./App.css"

import CardList from "../components/CardList"
import Searchbox from "../components/Searchbox"
import Scroll from "../components/Scroll.jsx"
import ErrorBoundry from "../components/ErrorBoundry"

function App() {
  const [robots, setRobots] = useState([])
  const [searchfield, setSearchfield] = useState("")

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((users) => setRobots(users))
  }, [])

  const onSearchChange = (event) => {
    setSearchfield(event.target.value)
  }
  const filteredRebots = robots.filter((robot) => {
    return robot.name.toLowerCase().includes(searchfield.toLowerCase())
  })

  return !robots.length ? (
    <h1 className='tc'>loading</h1>
  ) : (
    <div className='tc'>
      <h1 className='f2'>RoboFriends</h1>
      <Searchbox searchChange={onSearchChange} />
      <Scroll>
        <ErrorBoundry>
          <CardList robots={filteredRebots} />
        </ErrorBoundry>
      </Scroll>
    </div>
  )
}

export default App
