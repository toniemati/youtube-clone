import { Avatar } from '@material-ui/core';
import './ChannelRow.css';
import CheckCircleOutlineOutlinedIcon from '@material-ui/icons/CheckCircleOutlineOutlined';

const ChannelRow = ({ image, channel, verified, subs, numberOfVideos, description }) => {
  return (
    <div className="channelRow">
      <Avatar className="channelRow__logo" src={image} alt={channel} />

      <div className="channelRow__text">
        <h4>{channel} {verified && <CheckCircleOutlineOutlinedIcon/>}</h4>
        <p>{subs} subscribers • {numberOfVideos} videos</p>
        <p>{description}</p>
      </div>
    </div>
  )
}

export default ChannelRow
