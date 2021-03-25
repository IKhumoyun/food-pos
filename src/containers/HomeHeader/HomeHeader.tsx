import './main.scss';

import { SearchIcon } from '../../assets/icons';

const HomeHeader = () => {
  return (
    <div className="home-header">
      <div className="home-header-left">
      <h1 className="home-header-title">Jaegar Resto</h1>
      <h3 className="home-header-subtitle">Tuesday, 2 Feb 2021</h3>
      </div>

      <label htmlFor="search-input" className="home-header-input-label">
        <SearchIcon/>
        <input className="home-header-input" type="search" id="search-input" placeholder="Search for food, coffee, etc.."/>
      </label>
    </div>
  )
}

export default HomeHeader;