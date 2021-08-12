/* eslint-disable no-console */
import { createRef, FC, useState } from 'react';
import { OTSubscriber, OTSubscriberRef } from 'opentok-react';
import CheckboxComponent from '../CheckBox';

interface ISubscriberComponentProps{
  stream : any
}
const SubscriberComponent : FC<ISubscriberComponentProps> = ({ stream }:ISubscriberComponentProps) => {
  const [audio, changeAudio] = useState<boolean>(true);
  const [video, changeVideo] = useState<boolean>(true);
  const [error, setError] = useState<any>(null);
  const otSubscriber = createRef<OTSubscriberRef>();
  const setAudio = (_audio: any) => {
    changeAudio(_audio);
  }

  const setVideo = (_video : any) => {
    changeVideo(_video);
  }

  const onError = (err: any) => {
    setError(`Failed to Subscribe : ${err}`);
  }

  const handleSubscribeEvent = {
    connected: () => {
      console.info('SUBSCRIBER IS CONNECTED TO YOUR VIDEO STREAM')
    },
    destroyed: () => {
      console.info('SUBSCRIBED CONNECTION HAS BEEN DESTORYED')
    },
  }
  return (
    <div>
      <h5>I&apos;m subscribing to following video</h5>
      {error && (
      <h1>
        {' '}
        {error}
      </h1>
      )}
      <OTSubscriber
        ref={otSubscriber}
        stream={stream}
        properties={{
          subscribeToAudio: audio,
          subscribeToVideo: video,
        }}
        // eslint-disable-next-line no-console
        onSubscribe={() => console.info('SUBSCRIBED SUCCESSFULLY')}
        eventHandlers={handleSubscribeEvent}
        onError={onError}
      />
      <CheckboxComponent label="Subscribe to Audio" initialChecked={audio} _onChange={setAudio} />
      <CheckboxComponent label="Subscribe to Video" initialChecked={video} _onChange={setVideo} />
    </div>
  )
}

export default SubscriberComponent;
