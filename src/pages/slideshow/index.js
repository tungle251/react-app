import CommonLayout from '../../components/layouts/CommonLayout'
import SliderShow from '../../components/slideshow/SlideShow'

const ITEMS = [
  { id: 1, children: <div>Item 1</div> },
  { id: 2, children: <div>Item 2</div> },
  { id: 3, children: <div>Item 3</div> },
  { id: 4, children: <div>Item 4</div> },
  { id: 5, children: <div>Item 5</div> },
]

const SlideShowPage = () => {
  return (
    <CommonLayout>
      <SliderShow items={ITEMS} />
    </CommonLayout>
  )
}

export default SlideShowPage
