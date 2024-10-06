import reactImage from "../../assets/react-core-concepts.png";
import './Header.css'

export default function Header(props) {
  const reactDescriptions = ["Fundamental", "Crucial", "Core"];

  function genRandomInt(max) {
    return Math.floor(Math.random() * (max + 1));
  }

  const expression = reactDescriptions[genRandomInt(2)];

//   console.log(props);

  return (
    <header>
      <img src={reactImage} alt="Stylized atom" />
      <h1>React Essentials</h1>
      <p>
        {expression} React concepts you will need for almost any app you are
        going to build!
      </p>
    </header>
  );
}
