// import reactImg from '../../assets/logo.png';
import './Header.css';

export default function Header({page}) {

  return (
    <header className="nav-bar">
      <h5><a>Jane Hairstylist</a></h5>
      {/* <img src={reactImg} alt="Logo" /> */}
      <ul className="nav-bar__items">
        <li className={"nav-bar__items" + (page ==='Home'      ? '--selected' : "")}><a href=''>Home</a></li>
        <li className={"nav-bar__items" + (page ==='Services'  ? '--selected' : "")}><a href=''>Services</a></li>
        <li className={"nav-bar__items" + (page ==='Contact'   ? '--selected' : "")}><a href=''>Contact</a></li>
        <li className={"nav-bar__items" + (page ==='Hours'     ? '--selected' : "")}><a href=''>Hours</a></li>
      </ul>
    </header>
  );
}