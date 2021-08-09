import { FC, useState } from 'react';
import { OTSubscriber } from 'opentok-react';
import CheckboxComponent from '../CheckBox';

const SubscriberComponent : FC<{}> = () => {
  const [audio, changeAudio] = useState<boolean>(true);
  const [video, changeVideo] = useState<boolean>(true);
  const [error, setError] = useState<any>(null);
  const setAudio = (_audio: any) => {
    changeAudio(_audio);
  }

  const setVideo = (_video : any) => {
    changeVideo(_video);
  }

  const onError = (err: any) => {
    setError(`Failed to Subscribe : ${err}`);
  }

  return (
    <div>
      Subscriber
      {error && (
      <h1>
        {' '}
        {error}
      </h1>
      )}
      <OTSubscriber
        properties={{
          subscribeToAudio: audio,
          subscribeToVideo: video,
        }}
        onError={onError}
      />
      <CheckboxComponent label="Subscribe to Audio" initialChecked={audio} _onChange={setAudio} />
      <CheckboxComponent label="Subscribe to Video" initialChecked={video} _onChange={setVideo} />
    </div>
  )
}

export default SubscriberComponent;
