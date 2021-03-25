import { useState } from 'react';
import { Link } from 'react-router-dom';

import {
  HomeIcon,
  SalesIcon,
  StatisticsIcon,
  MailIcon,
  BellIcon,
  SettingsIcon,
  LogoIcon,
  ExitLogo
} from '../../assets/icons';

import './main.scss';

interface IProps {
  slice?: any;
}

const Sidebar = () => {
  let windowLocation = window.location.pathname.slice(1);
  

  const [activePage, setActivePage] = useState(windowLocation);

  return (
    <div className="sidebar">
      <div className="sidebar-links">
        <Link to="/" className="sidebar-logo">
          <div className="sidebar-logo-icon">
            <LogoIcon/>
          </div>
        </Link>

        <Link
          to="/"
          className={`sidebar-item ${activePage == '' ? 'active' : ''}`}
          onClick={() => setActivePage('')}
        >
          <div className="sidebar-item-icon">
            <HomeIcon />
          </div>
        </Link>

        <Link
          to="/"
          className={`sidebar-item ${activePage == 'sales' ? 'active' : ''}`}
          onClick={() => setActivePage('sales')}
        >
          <div className="sidebar-item-icon">
            <SalesIcon />
          </div>
        </Link>

        <Link
          to="/statistics"
          className={`sidebar-item ${activePage == 'statistics' ? 'active' : ''}`}
          onClick={() => setActivePage('statistics')}
        >
          <div className="sidebar-item-icon">
            <StatisticsIcon />
          </div>
        </Link>

        <Link
          to="/"
          className={`sidebar-item ${activePage == 'mail' ? 'active' : ''}`}
          onClick={() => setActivePage('mail')}
        >
          <div className="sidebar-item-icon">
            <MailIcon />
          </div>
        </Link>

        <Link
          to="/"
          className={`sidebar-item ${activePage == 'bell' ? 'active' : ''}`}
          onClick={() => setActivePage('bell')}
        >
          <div className="sidebar-item-icon">
            <BellIcon />
          </div>
        </Link>

        <Link
          to="/settings"
          className={`sidebar-item ${activePage == 'settings' ? 'active' : ''}`}
          onClick={() => setActivePage('settings')}
        >
          <div className="sidebar-item-icon">
            <SettingsIcon />
          </div>
        </Link>
      </div>

      <Link to="/exit" className="sidebar-exit">
        <ExitLogo/>
      </Link>
    </div>
  )
}

export default Sidebar;