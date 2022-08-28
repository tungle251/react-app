import './App.scss'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div>
          <h4> GET Insight</h4>
        </div>
        <div className="breadcrumbs">
          <ul>
            <li>
              <a href="#">Home</a>
            </li>
            <li>
              <a href="#">Main</a>
            </li>
            <li>
              <a href="#">About</a>
            </li>
          </ul>
          <h4>test</h4>
        </div>

        <div className="left">
          <button>Save & Add another</button>
          <button>Save & Done</button>
        </div>
      </header>
    </div>
  )
}

export default App
