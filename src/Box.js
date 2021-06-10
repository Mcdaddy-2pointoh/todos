import React from "react";
import DeleteTwoToneIcon from "@material-ui/icons/DeleteTwoTone";
import "./Box.css";
import Checkbox from "@material-ui/core/Checkbox";

const Box = ({ details, id, onSelect, onClick }) => {
  return (
    <>
      <div className="box">
        <li>
          <Checkbox
            color="default"
            inputProps={{ "aria-label": "secondary checkbox" }}
          />
          {details}
          <button
            onClick={() => {
              onSelect(id);
            }}
          >
            <DeleteTwoToneIcon />
          </button>
        </li>
      </div>
    </>
  );
};

export default Box;
