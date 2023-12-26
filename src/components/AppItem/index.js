// Write your code here
import './index.css'

const AppItem = props => {
  const {eachAppItem} = props
  const {appName, imageUrl, category} = eachAppItem

  return (
    <li className="liTabContainer">
      <img src={imageUrl} alt={appName} className="tabItemImage" />
      <p className="itemName">{appName}</p>
    </li>
  )
}

export default AppItem
