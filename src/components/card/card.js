import React from 'react'
import Logo from '../logo/logo'

const card = ({ icon, title, desc, onClick }) => {
  return (
    <div
      className="card bg-white ba br4 b--black-20 pointer"
      onClick={onClick}>
      <hr className="ma0 ntPoint5 center w-30 ba b--black-20" />
      <div className="card-body content-center tc pa4 pb5">
        <Logo src={icon} width='300' height='250' />
        <h2 className="b f2 mb4">{title}</h2>
        <p className="f4 lh-copy">{desc}</p>
      </div>
    </div>
  )
}

export default card