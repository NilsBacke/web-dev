import React, { useState, useEffect } from "react";
import TuitListItem from "./tuit-list-item";
import "./tuits.css";
import { useDispatch, useSelector } from "react-redux";
import { createTuit, findAllTuits } from "../actions/tuits-actions";

const TuitList = () => {
  const tuits = useSelector((state) => state.tuits);
  const dispatch = useDispatch();

  const [newTuit, setNewTuit] = useState({ tuit: "New tuit" });

  useEffect(() => findAllTuits(dispatch), [dispatch]);

  return (
    <>
      <button
        onClick={() => createTuit(dispatch, newTuit)}
        className="btn btn-primary float-end"
      >
        Tuit
      </button>
      <textarea
        className="form-control w-75"
        onChange={(e) => setNewTuit({ ...newTuit, tuit: e.target.value })}
      ></textarea>
      <ul className="ttr-tuits list-group">
        {tuits.map &&
          tuits.map((tuit) => <TuitListItem key={tuit._id} tuit={tuit} />)}
      </ul>
    </>
  );
};

export default TuitList;
