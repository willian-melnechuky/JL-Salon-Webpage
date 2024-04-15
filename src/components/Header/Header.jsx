// import reactImg from '../../assets/logo.png';
import './Header.css';

export default function Header({page}) {

  return (
    <header className="nav-bar">
      <h5><a href='.nav-bar'>Jane Hairstylist</a></h5>
      {/* <img src={reactImg} alt="Logo" /> */}
      <ul className="nav-bar__items">
        <li className={"nav-bar__items" + (page ==='Home'      ? '--selected' : "")}><a href='.nav-bar'>Home</a></li>
        <li className={"nav-bar__items" + (page ==='Services'  ? '--selected' : "")}><a href='.nav-bar'>Services</a></li>
        <li className={"nav-bar__items" + (page ==='Contact'   ? '--selected' : "")}><a href='.nav-bar'>Contact</a></li>
        <li className={"nav-bar__items" + (page ==='Hours'     ? '--selected' : "")}><a href='.nav-bar'>Hours</a></li>
      </ul>
    </header>
  );
}