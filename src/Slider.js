import { useState } from 'react'
import './Slider.scss'
import classNames from 'classnames'

const ITEMS = [{ id: 1 }, { id: 2 }, { id: 3 }, { id: 4 }]

const Slider = () => {
  const [selected, setSelected] = useState(ITEMS[0])
  const currIndex = ITEMS.findIndex((i) => i.id === selected.id)

  const handleBack = () => {
    if (currIndex > 0) {
      setSelected(ITEMS[currIndex - 1])
    }
  }

  const handleNext = () => {
    if (currIndex < ITEMS.length - 1) {
      setSelected(ITEMS[currIndex + 1])
    }
  }
  return (
    <div className="slider">
      <div className="slider-container">
        {ITEMS.map((item, i) => {
          const isActive = i >= currIndex
          const isHidden = i < currIndex

          let transform = ''
          if (currIndex !== 0 && isActive) {
            transform = `translateX(calc(-${currIndex}00% - ${
              currIndex * 10
            }px))`
          }

          if (isHidden) {
            transform =
              i === 0
                ? 'scale3d(.3,.3,.3)'
                : `translateX(calc(-${i}00% - ${i * 10}px)) scale3d(.3,.3,.3) `
          }

          const style = {
            transform,
          }

          return (
            <div
              className={classNames('slider-item', {
                'is-active': isActive,
                'is-hidden': isHidden,
              })}
              style={style}
              key={item.id}
            >{`Item ${item.id}`}</div>
          )
        })}
      </div>
      <div className="button-group">
        <button onClick={handleBack}>Back</button>
        <button onClick={handleNext}>Next</button>
      </div>
    </div>
  )
}

export default Slider
