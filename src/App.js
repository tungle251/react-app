import Slider from './Slider'
const ITEMS = [
  { id: 1, children: <div>Item 1</div> },
  { id: 2, children: <div>Item 2</div> },
  { id: 3, children: <div>Item 3</div> },
  { id: 4, children: <div>Item 4</div> },
]

function App() {
  return (
    <div className="App">
      <Slider items={ITEMS} />
    </div>
  )
}

export default App
