/* eslint-disable no-console */
import { OTPublisher } from 'opentok-react';
import { FC, useState } from 'react';
import CheckboxComponent from '../CheckBox';

const PublisherComponent : FC<{}> = () => {
  const [error, setError] = useState<any>(null);
  const [audio, changeAudio] = useState<any>(true);
  const [video, changeVideo] = useState<any>(true);
  const [videoSource, setVideoSource] = useState<any>('camera');

  const setAudio = (_audio: any) => {
    changeAudio(_audio)
  }

  const setVideo = (_video : any) => {
    changeVideo(_video)
  }

  // eslint-disable-next-line no-unused-vars
  const changeVideoSource = (_videoSource : any) => {
    if (videoSource !== 'camera') {
      setVideoSource('camera')
    } else {
      setVideoSource('screen')
    }
  }

  const onError = (err : any) => {
    setError(`Failed to publish : ${err.message}`)
  }

  const onPublish = () => {
    console.info('Publish Success');
  };

  const publisherEventHandlers = {
    accessDenied: () => {
      console.info('User denied access to media source');
    },
    streamCreated: () => {
      console.info('Publisher stream created');
    },
    streamDestroyed: ({ reason }: { reason: string }) => {
      if (reason === 'mediaStopped') {
        // User clicked stop sharing
        console.info('STREAM HAS BEEN STOPPED')
      } else {
        console.info(`Publisher stream destroyed because: ${reason}`);
      }
    },
  };
  return (
    <div>
      I am going in Publisher
      {error ? (
        <div>
          {error}
        </div>
      ) : null}
      <OTPublisher
        properties={{
          publishAudio: audio,
          publishVideo: video,
          videoSource: videoSource === 'screen' ? 'screen' : undefined,
        }}
        onPublish={onPublish}
        onError={onError}
        eventHandlers={publisherEventHandlers}
      />
      <CheckboxComponent label="Share Screen" _onChange={changeVideoSource} />
      <CheckboxComponent label="Publish Audio" _onChange={setAudio} />
      <CheckboxComponent label="Publish Video" _onChange={setVideo} />
    </div>
  )
}

export default PublisherComponent;
