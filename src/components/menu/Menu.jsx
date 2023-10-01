import { Link } from "react-router-dom"
import { menu } from "../../data"
import "./menu.scss"

const Menu = () => {
  return (
    <div className="menu">

      {
        menu.map(item => (
          <div key={item.id} className="item">
            <span className="title">{item.title}</span>
            {
              item.listItems.map(itemLink => (
                <Link to={itemLink.url} key={itemLink.id} className="listItem">
                  <img src={itemLink.icon} alt="home-icon" />
                  <span className="listItemTitle">{itemLink.title}</span>
                </Link>
              ))
            }
            
          </div>
        ))
      }

    </div>
  )
}

export default Menu