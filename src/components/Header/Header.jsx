// import reactImg from '../../assets/logo.png';
import './Header.css';
// import Button from '../Button/Button.jsx'

export default function Header({page}) {

  return (
    <header className="nav-bar">
      <h5><a href='.nav-bar'>Jane Hairstylist</a></h5>
      {/* <img src={reactImg} alt="Logo" /> */}
      <ul className="nav-bar__items">
        <li className={"nav-bar__items" + (page ==='Home'      ? '--selected' : "")}><a href='index.html'>Home</a></li>
        <li className={"nav-bar__items" + (page ==='Services'  ? '--selected' : "")}><a href='#services'>Services</a></li>
        <li className={"nav-bar__items" + (page ==='Hours'     ? '--selected' : "")}><a href='#hours'>Hours</a></li>
        {/* <li className={"nav-bar__items" + (page ==='Book Now'   ? '--selected' : "")}><Button size="small"/></li> */}
      </ul>
    </header>
  );
}