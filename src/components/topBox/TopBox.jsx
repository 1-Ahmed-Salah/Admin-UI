import { topDealUsers } from "../../data"

import "./topBox.scss"

const TopBox = () => {
  return (
    <div className="topBox">
        <h2>Top Deals</h2>
        <div className="list">
            {
                topDealUsers.map(user => (
                    <div className="listItem" key={user.id}>
                        <div className="user">
                            <img src={user.img} alt={user.username} />
                            <div className="userTexts">
                                <div className="username">{user.username}</div>
                                <div className="email">{user.email}</div>
                            </div>
                        </div>
                        <div className="amount">{user.amount}</div>
                    </div>
                ))
            }
        </div>
    </div>
  )
}


export default TopBox