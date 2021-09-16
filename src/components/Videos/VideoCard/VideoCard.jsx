import { Avatar } from '@material-ui/core';
import './VideoCard.css';

const VideoCard = ({ video }) => {
  console.log(video);

  return (
    <div className="videoCard">
      <img className="videoCard__thumbnail" src={video.image} alt="video thumbnail" />

      <div className="videoCard__info">
        <Avatar className="videoCard__avatar" src={video.channelImage} alt={video.channel} />

        <div className="videoCard__text">
          <h4>{video.title}</h4>
          <p>{video.channel}</p>
          <p>{video.views} • {video.timestamp}</p>
        </div>
      </div>
    </div>
  )
}

export default VideoCard;
