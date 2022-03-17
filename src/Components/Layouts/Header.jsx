import React from 'react'
import { Link } from 'react-router-dom'

export default function Header() {
  return (
      <div>
          <div id="topbar" className="d-flex align-items-center fixed-top">
        <div className="container d-flex justify-content-center justify-content-md-between">

          <div className="contact-info d-flex align-items-center">
            <i className="bi bi-phone d-flex align-items-center"><span>+1 5589 55488 55</span></i>
            <i className="bi bi-clock d-flex align-items-center ms-4"><span> Mon-Sat: 11AM - 23PM</span></i>
          </div>

          <div className="languages d-none d-md-flex align-items-center">
            <ul>
              <li>En</li>
              <li><a href="#">De</a></li>
            </ul>
          </div>
        </div>
      </div>

      <header id="header" className="fixed-top d-flex align-items-cente">
        <div className="container-fluid container-xl d-flex align-items-center justify-content-lg-between">

          <h1 className="logo me-auto me-lg-0"><a href="index.html">Restaurantly</a></h1>

          <a href="index.html" className="logo me-auto me-lg-0"><img src="assets/img/logo.png" alt="" className="img-fluid"/></a>

          <nav id="navbar" className="navbar order-last order-lg-0">
            <ul>
              <li><Link to={'/'} className="nav-link scrollto active">Home</Link></li>
              <li><Link to={'/about'} className="nav-link scrollto">About</Link></li>
              <li><Link to={'/menu'} className="nav-link scrollto">Menu</Link></li>
              <li><Link to={'/event'} className="nav-link scrollto">Events</Link></li>
              <li><a className="nav-link scrollto" href="#chefs">Chefs</a></li>
              <li><a className="nav-link scrollto" href="#gallery">Gallery</a></li>
              <li className="dropdown"><a href="#"><span>Drop Down</span> <i className="bi bi-chevron-down"></i></a>
                <ul>
                  <li><a href="#">Drop Down 1</a></li>
                  <li className="dropdown"><a href="#"><span>Deep Drop Down</span> <i className="bi bi-chevron-right"></i></a>
                    <ul>
                      <li><a href="#">Deep Drop Down 1</a></li>
                      <li><a href="#">Deep Drop Down 2</a></li>
                      <li><a href="#">Deep Drop Down 3</a></li>
                      <li><a href="#">Deep Drop Down 4</a></li>
                      <li><a href="#">Deep Drop Down 5</a></li>
                    </ul>
                  </li>
                  <li><a href="#">Drop Down 2</a></li>
                  <li><a href="#">Drop Down 3</a></li>
                  <li><a href="#">Drop Down 4</a></li>
                </ul>
              </li>
              <li><a className="nav-link scrollto" href="#contact">Contact</a></li>
            </ul>
            <i className="bi bi-list mobile-nav-toggle"></i>
          </nav>
          <a href="#book-a-table" className="book-a-table-btn scrollto d-none d-lg-flex">Book a table</a>

        </div>
      </header>
    </div>
  )
}
