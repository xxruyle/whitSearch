import WHITAKER from './services/whitWord.json'
import {useState} from 'react'

const Search = () => { 
  const [searchTerm, setSearchTerm] = useState('')

  const handleSearchChange = (event) => { 
    setSearchTerm(event.target.value)
  }

  return ( 
    <div>
      <form>
        <input type="text" placeholder="Search..." onChange={handleSearchChange}/>
      </form>

    {WHITAKER.filter((val) => {
      if (searchTerm == "") {
        return null 
      } else if (val.word.toLowerCase().includes(searchTerm.toLowerCase())) {
        return val 
      }
    }).map((val, key) => {
      return (
        <div key={key}>
          <ul>
            {val.word}
            <li>
              {val.definition.map((def) => {
                return (
                  <div>
                    {def}
                  </div>
                )
              })}
            </li>
          </ul>
        </div>
      )
    })}
    </div>
  )
}



const App = () => { 

  return (
    <div>
      <Search /> 
    </div>

  )
}

export default App;
