import React from "react";
import * as MdIcon from "react-icons/md";
import * as AiIcon from "react-icons/ai";
import { Link } from "react-router-dom";

export const DetailButton = ({ path, text, handleInput }) => {
  return (
    <button className="details" to={path} onClick={handleInput}>
      <MdIcon.MdRemoveRedEye size={12} />
      {text}
    </button>
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

export const SearchButton = ({ path, text }) => {
  return (
    <div className="button search">
      <Link to={path}>
        <AiIcon.AiOutlineSearch size={12} />
        {text}
      </Link>
    </div>
  );
};

export const SaveButton = ({ path, text, handleInput }) => {
  return (
    <button to={path} className="save" onClick={handleInput}>
      <AiIcon.AiOutlineSave size={12} />
      {text}
    </button>
  );
};

export const BackButton = ({ path, text, handleInput }) => {
  return (
    <button to={path} className="back" onClick={handleInput}>
      <AiIcon.AiOutlineLeft size={12} />
      {text}
    </button>
  );
};

export const DoneTask = ({ path, text, handleInput }) => {
  return (
    <button to={path} className="save" onClick={handleInput}>
      <AiIcon.AiOutlineFileDone size={12} />
      {text}
    </button>
  );
};

export const DeleteButton = ({ path, text, handleInput }) => {
  return (
    <button to={path} className="delete" onClick={handleInput}>
      <AiIcon.AiOutlineDelete size={12} />
      {text}
    </button>
  );
};
