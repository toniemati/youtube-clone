import { Avatar } from '@material-ui/core';
import './VideoRow.css';

const VideoRow = ({ views, description, timestamp, channelImage, channel, title, image }) => {
  return (
    <div className="videoRow">
      <img src={image} alt={title} />

      <div className="videoRow__text">
        <h3>{title}</h3>
        <p>{views} • {timestamp}</p>

        <div className="videoRow__author">
          <Avatar src={channelImage} />
          <p>{channel}</p>
        </div>
        <p>{description}</p>
      </div>
    </div>
  )
}

export default VideoRow
