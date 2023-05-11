import React from "react";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import "./downArrow.scss";

export default function DownArrow(props) {
  const next = props.nextPage;
  return (
    <div className="down-key">
      <a href={"#"+next}>
        <KeyboardArrowDownIcon className={"arrow "+props.curPage}/>
      </a>
    </div>
  );
}
