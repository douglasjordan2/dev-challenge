import search from "../assets/search.svg";
import account from "../assets/account.svg";
import cart from "../assets/cart.svg";

function UserIcons() {
  return (
    <ul className="user-icons">
      <li className="user-icons__icon search">
        <img alt="search icon" src={search} />
      </li>

      <li className="user-icons__icon account">
        <img alt="account icon" src={account} />
      </li>

      <li className="user-icons__icon cart">
        <img alt="cart icon" src={cart} />
      </li>
    </ul>
  );
}

export default UserIcons;
