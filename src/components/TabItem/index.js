// Write your code here
import './index.css'

const TabItem = props => {
  const {eachTabItem, generateAppItems, isActive} = props
  const {tabId, displayText} = eachTabItem

  const onTabItemClicked = () => {
    generateAppItems(tabId)
  }
  const borderStyleStatus = isActive ? 'borderStyle' : ''
  const textStyleStatus = isActive ? 'textStyle' : ''

  return (
    <li className={`liTabItemContainer ${borderStyleStatus}`}>
      <button>
        <p
          onClick={onTabItemClicked}
          className={`tabItemBtn ${textStyleStatus}`}
        >
          {displayText}
        </p>
      </button>
    </li>
  )
}

export default TabItem
