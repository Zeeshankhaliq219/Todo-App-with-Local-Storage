import React from 'react'

export default function Header() {
  return (
    <>
      <nav className="navbar bg-primary">
        <div className="container-fluid">
          <span className="fs-3 ms-3 text-white">
            <i className="fa-solid fa-calendar-check "></i>
            <span className='fw-bold ms-1'>Todo List App</span>
          </span>
        </div>
      </nav>
    </>
  );
}
