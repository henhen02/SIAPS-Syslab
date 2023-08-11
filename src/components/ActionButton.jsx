import React from "react";
import * as MdIcon from "react-icons/md";
import * as AiIcon from "react-icons/ai";
import { Link } from "react-router-dom";

export const DetailButton = ({ path, text }) => {
  return (
    <div className="button details">
      <Link to={path}>
        <MdIcon.MdRemoveRedEye size={12} />
        {text}
      </Link>
    </div>
  );
};

export const AddButton = ({ path, text }) => {
  return (
    <div className="button add">
      <Link to={path}>
        <AiIcon.AiOutlinePlus size={12} />
        {text}
      </Link>
    </div>
  );
};

export const SearchButton = ({ func, text }) => {
  return (
    <button className="search" onClick={func}>
      <AiIcon.AiOutlineSearch size={12} />
      {text}
    </button>
  );
};

export const SaveButton = ({ path, text }) => {
  return (
    <div className="button save">
      <Link to={path}>
        <AiIcon.AiOutlineSave size={12} />
        {text}
      </Link>
    </div>
  );
};
