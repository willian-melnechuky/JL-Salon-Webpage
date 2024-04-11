import reactImg from '../../assets/logo.png';
import './Header.css';

const reactDescriptions = ['Fundamental', 'Crucial', 'Core'];

function genRandomInt(max) {
  return Math.floor(Math.random() * (max + 1));
}

export default function Header() {
  const description = reactDescriptions[genRandomInt(2)];

  return (
    <>
    <header>
      <img src={reactImg} alt="Logo" />
      <h1>Jane Hairstylist</h1>
    </header>
    <p>
      {description} React concepts you will need for almost any app you are
      going to build!
  </p>
  </>
  );
}