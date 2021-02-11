import React, { useState } from "react";
import { Button, ButtonGroup, ToggleButton } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHome,
  faCommentAlt,
  faBriefcase,
  faUsers,
} from "@fortawesome/free-solid-svg-icons";

export default function PathBar(props) {
  const radios = [
    { name: "Events", value: "1" },
    { name: "Registrations", value: "2" },
    { name: "Materials", value: "3" },
  ];
  const [radioValue, setRadioValue] = useState("1");
  const [subPath, setSubPath] = useState(radios[0].name);

  const handleClick = (e) => {
    setRadioValue(e.target.value);
    radios.map((item) => {
      if (item.value === e.target.value) {
        setSubPath(item.name);
      }
    });

    props.handleButtonClick(e.target.value);
  };

  return (
    <>
      <span className="pathName">
        <FontAwesomeIcon icon={faHome} />
        <p className="pathTitle">Home > {subPath}</p>
      </span>
      <span className="pathLinks">
        <ButtonGroup toggle>
          {radios.map((radio, idx) => (
            <ToggleButton
              key={idx}
              type="radio"
              variant="secondary"
              name="radio"
              value={radio.value}
              checked={radioValue === radio.value}
              onChange={(e) => handleClick(e)}
            >
              {radio.name}
            </ToggleButton>
          ))}
        </ButtonGroup>
      </span>
    </>
  );
}
