import { useState } from 'react'
import './SliderShow.scss'
import classNames from 'classnames'

const GAP = 10 // px

const SliderShow = ({ items }) => {
  const [selectedItem, setSelectedItem] = useState(items[0])
  const currIndex = items.findIndex((i) => i.id === selectedItem.id)

  const handleBack = () => {
    if (currIndex > 0) {
      setSelectedItem(items[currIndex - 1])
    }
  }

  const handleNext = () => {
    if (currIndex < items.length - 1) {
      setSelectedItem(items[currIndex + 1])
    }
  }
  return (
    <div className="slider">
      <div className="slider-container" style={{ gap: GAP }}>
        {items.map(({ id, children }, i) => {
          const isActive = i >= currIndex
          const isHidden = i < currIndex
          let transform = ''
          if (isHidden) {
            transform =
              i === 0
                ? 'scale3d(.3,.3,.3)'
                : `translateX(calc(-${i}00% - ${i * GAP}px)) scale3d(.3,.3,.3)`
            // isActive and not the first item in the list
          } else if (currIndex !== 0) {
            transform = `translateX(calc(-${currIndex}00% - ${
              currIndex * GAP
            }px))`
          }

          return (
            <div
              className={classNames('slider-item', {
                'is-active': isActive,
                'is-hidden': isHidden,
              })}
              style={{ transform }}
              key={id}
            >
              {children}
            </div>
          )
        })}
      </div>
      <div className="button-group">
        <button onClick={handleBack} disabled={currIndex === 0}>
          Back
        </button>
        <button onClick={handleNext} disabled={currIndex === items.length - 1}>
          Next
        </button>
      </div>
    </div>
  )
}

export default SliderShow
