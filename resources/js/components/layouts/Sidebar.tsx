import React from 'react';
import { NavLink } from 'react-router-dom';

function Sidebar() {

  return (
    <>
    <nav id="app-nav-main" className="app-nav app-nav-main flex-grow-1">
    <ul className="app-menu list-unstyled accordion" id="menu-accordion">
        <li className="nav-item">
            <a className="nav-link active" href="index.html">
                <span className="nav-icon">
                <svg width="1em" height="1em" viewBox="0 0 16 16" className="bi bi-house-door" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" d="M7.646 1.146a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 .146.354v7a.5.5 0 0 1-.5.5H9.5a.5.5 0 0 1-.5-.5v-4H7v4a.5.5 0 0 1-.5.5H2a.5.5 0 0 1-.5-.5v-7a.5.5 0 0 1 .146-.354l6-6zM2.5 7.707V14H6v-4a.5.5 0 0 1 .5-.5h3a.5.5 0 0 1 .5.5v4h3.5V7.707L8 2.207l-5.5 5.5z"/>
<path fill-rule="evenodd" d="M13 2.5V6l-2-2V2.5a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5z"/>
</svg>
                 </span>
                 <span className="nav-link-text">Overview</span>
            </a>
        </li>
        <li className="nav-item">
            <a className="nav-link" href="docs.html">
                <span className="nav-icon">
                <svg width="1em" height="1em" viewBox="0 0 16 16" className="bi bi-folder" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
<path d="M9.828 4a3 3 0 0 1-2.12-.879l-.83-.828A1 1 0 0 0 6.173 2H2.5a1 1 0 0 0-1 .981L1.546 4h-1L.5 3a2 2 0 0 1 2-2h3.672a2 2 0 0 1 1.414.586l.828.828A2 2 0 0 0 9.828 3v1z"/>
<path fill-rule="evenodd" d="M13.81 4H2.19a1 1 0 0 0-.996 1.09l.637 7a1 1 0 0 0 .995.91h10.348a1 1 0 0 0 .995-.91l.637-7A1 1 0 0 0 13.81 4zM2.19 3A2 2 0 0 0 .198 5.181l.637 7A2 2 0 0 0 2.826 14h10.348a2 2 0 0 0 1.991-1.819l.637-7A2 2 0 0 0 13.81 3H2.19z"/>
</svg>
                 </span>
                 <span className="nav-link-text">Docs</span>
            </a>
        </li>
        <li className="nav-item">
            <a className="nav-link" href="orders.html">
                <span className="nav-icon">
                <svg width="1em" height="1em" viewBox="0 0 16 16" className="bi bi-card-list" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" d="M14.5 3h-13a.5.5 0 0 0-.5.5v9a.5.5 0 0 0 .5.5h13a.5.5 0 0 0 .5-.5v-9a.5.5 0 0 0-.5-.5zm-13-1A1.5 1.5 0 0 0 0 3.5v9A1.5 1.5 0 0 0 1.5 14h13a1.5 1.5 0 0 0 1.5-1.5v-9A1.5 1.5 0 0 0 14.5 2h-13z"/>
<path fill-rule="evenodd" d="M5 8a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7A.5.5 0 0 1 5 8zm0-2.5a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7a.5.5 0 0 1-.5-.5zm0 5a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7a.5.5 0 0 1-.5-.5z"/>
<circle cx="3.5" cy="5.5" r=".5"/>
<circle cx="3.5" cy="8" r=".5"/>
<circle cx="3.5" cy="10.5" r=".5"/>
</svg>
                 </span>
                 <span className="nav-link-text">Orders</span>
            </a>
        </li>
        <li className="nav-item has-submenu">
            <a className="nav-link submenu-toggle" href="#" data-bs-toggle="collapse" data-bs-target="#submenu-1" aria-expanded="false" aria-controls="submenu-1">
                <span className="nav-icon">
                <svg width="1em" height="1em" viewBox="0 0 16 16" className="bi bi-files" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" d="M4 2h7a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2zm0 1a1 1 0 0 0-1 1v10a1 1 0 0 0 1 1h7a1 1 0 0 0 1-1V4a1 1 0 0 0-1-1H4z"/>
<path d="M6 0h7a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2v-1a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H6a1 1 0 0 0-1 1H4a2 2 0 0 1 2-2z"/>
</svg>
                 </span>
                 <span className="nav-link-text">Pages</span>
                 <span className="submenu-arrow">
                     <svg width="1em" height="1em" viewBox="0 0 16 16" className="bi bi-chevron-down" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z"/>
</svg>
                 </span>
            </a>
            <div id="submenu-1" className="collapse submenu submenu-1" data-bs-parent="#menu-accordion">
                <ul className="submenu-list list-unstyled">
                    <li className="submenu-item"><a className="submenu-link" href="notifications.html">Notifications</a></li>
                    <li className="submenu-item"><a className="submenu-link" href="account.html">Account</a></li>
                    <li className="submenu-item"><a className="submenu-link" href="settings.html">Settings</a></li>
                </ul>
            </div>
        </li>
        <li className="nav-item has-submenu">
            <a className="nav-link submenu-toggle" href="#" data-bs-toggle="collapse" data-bs-target="#submenu-2" aria-expanded="false" aria-controls="submenu-2">
                <span className="nav-icon">
                <svg width="1em" height="1em" viewBox="0 0 16 16" className="bi bi-columns-gap" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" d="M6 1H1v3h5V1zM1 0a1 1 0 0 0-1 1v3a1 1 0 0 0 1 1h5a1 1 0 0 0 1-1V1a1 1 0 0 0-1-1H1zm14 12h-5v3h5v-3zm-5-1a1 1 0 0 0-1 1v3a1 1 0 0 0 1 1h5a1 1 0 0 0 1-1v-3a1 1 0 0 0-1-1h-5zM6 8H1v7h5V8zM1 7a1 1 0 0 0-1 1v7a1 1 0 0 0 1 1h5a1 1 0 0 0 1-1V8a1 1 0 0 0-1-1H1zm14-6h-5v7h5V1zm-5-1a1 1 0 0 0-1 1v7a1 1 0 0 0 1 1h5a1 1 0 0 0 1-1V1a1 1 0 0 0-1-1h-5z"/>
</svg>
                 </span>
                 <span className="nav-link-text">External</span>
                 <span className="submenu-arrow">
                     <svg width="1em" height="1em" viewBox="0 0 16 16" className="bi bi-chevron-down" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z"/>
</svg>
                 </span>
            </a>
            <div id="submenu-2" className="collapse submenu submenu-2" data-bs-parent="#menu-accordion">
                <ul className="submenu-list list-unstyled">
                    <li className="submenu-item"><a className="submenu-link" href="login.html">Login</a></li>
                    <li className="submenu-item"><a className="submenu-link" href="signup.html">Signup</a></li>
                    <li className="submenu-item"><a className="submenu-link" href="reset-password.html">Reset password</a></li>
                    <li className="submenu-item"><a className="submenu-link" href="404.html">404 page</a></li>
                </ul>
            </div>
        </li>

       
        <li className="nav-item">
            <a className="nav-link" href="charts.html">
                <span className="nav-icon">
                <svg width="1em" height="1em" viewBox="0 0 16 16" className="bi bi-bar-chart-line" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" d="M11 2a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v12h.5a.5.5 0 0 1 0 1H.5a.5.5 0 0 1 0-1H1v-3a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v3h1V7a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v7h1V2zm1 12h2V2h-2v12zm-3 0V7H7v7h2zm-5 0v-3H2v3h2z"/>
</svg>
                 </span>
                 <NavLink className="nav-link-text" to="/users">User Manager</NavLink>
            </a>
        </li>				    
    </ul>
  </nav>
  </>
  );
}

export default React.memo(Sidebar);
