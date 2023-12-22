import Header from '../header/Header'
import './CommonLayout.scss'

const CommonLayout = ({ children }) => {
  return (
    <div className="common-layout">
      <Header />
      {children}
    </div>
  )
}

export default CommonLayout
