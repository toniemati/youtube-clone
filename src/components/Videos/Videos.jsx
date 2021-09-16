import { useState } from 'react';
import VideoCard from './VideoCard/VideoCard';
import './Videos.css';

const Videos = () => {
  const [video, setVideo] = useState({
    title: 'How to "Google It" like a Senior Software Engineer',
    views: '27k Views',
    timestamp: '3 hours ago',
    channelImage: 'https://yt3.ggpht.com/ytc/AKedOLTcIl6kKt3lEPJEySUf_hpHiKDKiFeo9eWPReLysQ=s68-c-k-c0x00ffffff-no-rj',
    channel: 'Firestore',
    image: 'https://i.ytimg.com/vi/cEBkvm0-rg0/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLD0Vmp4bO--UpVg3cmitp-dDcZISg'
  });

  return (
    <div className="videos">
      <h2>Recommended</h2>

      <div className="videos__all">
        <VideoCard video={video} />
        <VideoCard video={video} />
        <VideoCard video={video} />
        <VideoCard video={video} />
        <VideoCard video={video} />
        <VideoCard video={video} />
        <VideoCard video={video} />
        <VideoCard video={video} />
        <VideoCard video={video} />
        <VideoCard video={video} />
        <VideoCard video={video} />
        <VideoCard video={video} />
        <VideoCard video={video} />
        <VideoCard video={video} />
        <VideoCard video={video} />
        <VideoCard video={video} />
      </div>
    </div>
  )
}

export default Videos
