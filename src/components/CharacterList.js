import React from 'react';
import '../static/css/style.css'
export default function CharacterList (props) {
  return (
    <div className="row font-wight-bold text-uppercase">
      <div className="col text-danger">
        <h1 className="name__Name">{props.name}</h1>
        <ul className="list-group p-4">
          <li className="list-group-item shadow p-1 mb-3 rounded">
            <span>Gender: </span>
            {props.gender}
          </li>
          <li className="list-group-item shadow p-1 mb-3 rounded">
            <span>Reward: </span>
            {props.reward}
          </li>
          <li className="list-group-item shadow p-1 mb-3 rounded">
            <span>Fruit_name: </span>
            {props.fruit_name}
          </li>
          <li className="list-group-item shadow p-1 mb-3 rounded">
            <span>Fruit_type: </span>
            {props.fruit_type}
          </li>
        </ul>
        <p className="p-2 mb-5">
          <span>{props.description}</span>
        </p>
      </div>
      <div className="col d-flex justify-content-center">
        <img className="image__Image-main" src={props.image} alt={props.name}/>
      </div>
      <div className="col d-flex justify-content-center">
        <img className="image__Image-background" src={props.image} alt={props.name}/>
      </div>
    </div>
  );
}
