import Button from "../components/Button";
import { GoBell, GoCloudDownload, GoDatabase } from "react-icons/go";
// import {Button} from "./components/button.jsx"

function ButtonPage() {
  const handleClick = () => {
    console.log("clicked");
  };
  const handleHover = () => {
    console.log("hovered");
  };
  return (
    <div>
      <div>
        <Button
          primary
          rounded
          outline
          onClick={handleClick}
          onMouseEnter={handleHover}
        >
          <GoBell /> click me
        </Button>
      </div>
      <div>
        <Button secondary onMouseEnter={handleHover} onClick={handleClick}>
          <GoCloudDownload /> no, click me
        </Button>
      </div>
      <div>
        <Button
          danger
          className="bg-red-500"
          onMouseEnter={handleHover}
          onClick={handleClick}
        >
          <GoDatabase />really, click me
        </Button>
      </div>
      <div>
        <Button warning onMouseEnter={handleHover} onClick={handleClick}>
          <GoDatabase />absolutely must click me
        </Button>
      </div>
      <div>
        <Button success onMouseEnter={handleHover} onClick={handleClick}>
          <GoDatabase />really should click me
        </Button>
      </div>
      <div>
        <Button
          primary
          outline
          onMouseEnter={handleHover}
          onClick={handleClick}
        >
          <GoDatabase /> please click me
        </Button>
      </div>
      <div>
        <Button
          outline
          rounded
          onMouseEnter={handleHover}
          onClick={handleClick}
        >
          <GoDatabase /> I have a database
        </Button>
      </div>
    </div>
  );
}

export default ButtonPage;
