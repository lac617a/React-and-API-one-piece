import React from 'react';
import '../static/css/style.css'
import Logo from '../static/img/header-logo.png'
export default function HeaderCharacter (){
  return(
    <div className="row"> 
      <div className="col m-5 d-flex justify-content-center">
        <img src={Logo} className="rounded-0" alt="" />
      </div>
    </div>
  )
}
