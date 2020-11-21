import React from 'react';

export default function CharacterChange (props) {
  return (
    <div className="row">
      <button type="button" onClick={props.handleChange} className="col btn btn-outline-danger d-flex justify-content-center">
        Change Character
      </button>
    </div>
  )
}
