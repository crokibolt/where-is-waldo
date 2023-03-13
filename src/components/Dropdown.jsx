import React from "react";
import { uuidv4 } from "@firebase/util";
import PropTypes from "prop-types";

function Dropdown(props) {
  const { list, toggleDropdown, coordinates, handleWin, checkCharacter } =
    props;

  const handleClick = (e) => {
    toggleDropdown();
    if (checkCharacter(coordinates)) {
      list.shift(e.target.key, 1);
    }
    if (list.length === 0) {
      handleWin();
    }
  };

  return (
    <div
      className="z-10 absolute bg-slate-300"
      style={{ top: coordinates.y + 5, left: coordinates.x + 6 }}>
      <ul>
        {list.map((element, i) => (
          <li onClick={handleClick} data-index={i} key={uuidv4()}>
            {element}
          </li>
        ))}
      </ul>
    </div>
  );
}

Dropdown.propTypes = {
  list: PropTypes.arrayOf(PropTypes.string).isRequired,
  toggleDropdown: PropTypes.func.isRequired,
  coordinates: PropTypes.shape({
    x: PropTypes.number,
    y: PropTypes.number,
    clickX: PropTypes.number,
    clickY: PropTypes.number,
  }).isRequired,
  handleWin: PropTypes.func.isRequired,
  checkCharacter: PropTypes.func.isRequired,
};

export default Dropdown;
