import { useRef, useState } from 'react'
import './SliderShow.scss'
import classNames from 'classnames'

const GAP = 10 // px

const SliderShow = ({ items }) => {
  const [selectedItem, setSelectedItem] = useState(items[0])
  const currIndex = items.findIndex((i) => i.id === selectedItem.id)
  const [isMouseDown, setIsMouseDown] = useState(false)
  const handleBack = () => {
    if (currIndex > 0) {
      setSelectedItem(items[currIndex - 1])
    }
  }
  const ourRef = useRef()
  const mouseCoords = useRef({
    startX: 0,
    startY: 0,
    scrollLeft: 0,
    scrollTop: 0,
  })

  const handleDragStart = (e) => {
    if (!ourRef.current) return
    const slider = ourRef.current
    console.log({ slider })
    const startX = e.pageX - slider.offsetLeft
    const startY = e.pageY - slider.offsetTop
    const scrollLeft = slider.scrollLeft
    const scrollTop = slider.scrollTop
    console.log({ scrollLeft, scrollTop })
    mouseCoords.current = { startX, startY, scrollLeft, scrollTop }
    document.body.style.cursor = 'grabbing'
    setIsMouseDown(true)
  }
  const handleDragEnd = () => {
    if (!ourRef.current) return
    document.body.style.cursor = 'default'
    setIsMouseDown(false)
  }

  const handleDrag = (e) => {
    if (!isMouseDown || !ourRef.current) return
    e.preventDefault()
    const slider = ourRef.current
    const x = e.pageX - slider.offsetLeft
    const y = e.pageY - slider.offsetTop
    const walkX = (x - mouseCoords.current.startX) * 1.5
    const walkY = (y - mouseCoords.current.startY) * 1.5
    slider.scrollLeft = mouseCoords.current.scrollLeft - walkX
    slider.scrollTop = mouseCoords.current.scrollTop - walkY
  }
  const handleNext = () => {
    if (currIndex < items.length - 1) {
      setSelectedItem(items[currIndex + 1])
    }
  }
  return (
    <div className="slider" ref={ourRef}>
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
              onMouseDown={handleDragStart}
              onMouseUp={handleDragEnd}
              onMouseMove={handleDrag}
              onMouseLeave={() => {
                setIsMouseDown(false)
              }}
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
