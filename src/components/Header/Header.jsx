import './Header.css';
import MenuIcon from '@material-ui/icons/Menu';
import SearchIcon from '@material-ui/icons/Search';
import VideoCallIcon from '@material-ui/icons/VideoCall';
import AppsIcon from '@material-ui/icons/Apps';
import NotificationsIcon from '@material-ui/icons/Notifications';
import { Avatar } from '@material-ui/core';

const Header = () => {
  return (
    <div className="header">

      <div className="header__left">
        <MenuIcon />
        <img className="header__logo" src="https://babyzdroj.pl/wp-content/uploads/2021/03/YouTube-Logo.png" alt="youtube" />
      </div>

      <div className="header__center">
        <input placeholder="Search..." type="text" />
        <SearchIcon />
      </div>

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
