import './Header.css';
import MenuIcon from '@material-ui/icons/Menu';
import SearchIcon from '@material-ui/icons/Search';
import VideoCallIcon from '@material-ui/icons/VideoCall';
import AppsIcon from '@material-ui/icons/Apps';
import NotificationsIcon from '@material-ui/icons/Notifications';
import { Avatar, IconButton } from '@material-ui/core';
import { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';

const Header = () => {
  const history = useHistory();
  const [inputSearch, setInputSearch] = useState('');

  const handleSearchSubmit = (e) => {
    e.preventDefault();

    if (!inputSearch) return;
    
    history.push(`/search/${inputSearch}`);
    setInputSearch('');
  }

  return (
    <div className="header">

      <div className="header__left">
        <MenuIcon />
        <Link to="/">
          <img className="header__logo" src="https://babyzdroj.pl/wp-content/uploads/2021/03/YouTube-Logo.png" alt="youtube" />
        </Link>
      </div>

      <form onSubmit={handleSearchSubmit} className="header__center">
        <input value={inputSearch} onChange={(e) => setInputSearch(e.target.value)} placeholder="Search..." type="text" />
        <IconButton type="submit">
          <SearchIcon />
        </IconButton>
      </form>

      <div className="header__right">
        <VideoCallIcon />
        <AppsIcon/>
        <NotificationsIcon />
        <Avatar src="https://cdn.boop.pl/uploads/2020/02/34-3.jpg" />
      </div>
    </div>
  )
}

export default Header
