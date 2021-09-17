import './SearchPage.css';
import TuneOutlinedIcon from '@material-ui/icons/TuneOutlined';
import ChannelRow from './ChannelRow/ChannelRow';
import VideoRow from './VideoRow/VideoRow';

const SearchPage = () => {
  return (
    <div className="searchPage">
      <div className="searchPage__filter">
        <TuneOutlinedIcon />
        <h2>FILTER</h2>
      </div>

      <hr/>

      <ChannelRow
        image="https://yt3.ggpht.com/ytc/AKedOLSTlyjkFtJLtdgLaKxe5YlBEvDUpRDKzEdVvINPHw=s176-c-k-c0x00ffffff-no-rj-mo"
        channel="Lil Pump"
        verified
        subs="17,7 mln"
        numberOfVideos={44}
        description="Official YouTube channel of Tha Lights Global artist"
      />

      <hr/>

      <VideoRow
        channelImage="https://yt3.ggpht.com/ytc/AKedOLSTlyjkFtJLtdgLaKxe5YlBEvDUpRDKzEdVvINPHw=s176-c-k-c0x00ffffff-no-rj-mo"
        views="2,1 mln"
        description="Produced By: Ronny J Follow Lil Pump: Twitter: https://twitter.com/lilpump Instagram: https://www.instagram.com/lilpump ..."
        timestamp="1 month ago"
        channel="Lil Pump"
        title="Lil Pump - Racks To The Ceiling ft. Tory Lanez (Official Music Video)"
        image="https://i.ytimg.com/vi/Z_NCXR3NcCQ/hqdefault.jpg?sqp=-oaymwEcCOADEI4CSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCuuQ-2tUTG7alKZ4_capZvJtfbfA"
      />

      <VideoRow
        channelImage="https://yt3.ggpht.com/ytc/AKedOLSTlyjkFtJLtdgLaKxe5YlBEvDUpRDKzEdVvINPHw=s176-c-k-c0x00ffffff-no-rj-mo"
        views="46 mln"
        description="Booking/Business Inquiries: pumpbooking@aultouring.com."
        timestamp="1 year ago"
        channel="Lil Pump"
        title='Lil Pump & Anuel AA - "ILLUMINATI" (Official Music Video)'
        image="https://i.ytimg.com/vi/vpJQk02KJ7Y/hq720.jpg?sqp=-oaymwEcCOgCEMoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCppHh7WgECzd_9DNYq1TnHryun9A"
      />
    </div>
  )
}

export default SearchPage
