/* eslint-disable react/prop-types */
/* eslint-disable no-console */
import React, {
  createRef, FC, useState,
} from 'react';
import { OTPublisher, OTPublisherRef } from 'opentok-react';
import CheckboxComponent from '../CheckBox';
import { Button, InputContainer } from '../Login/index.styled';

// interface IPublisherProps {
//   changeConnected: () => void;
// }
const PublisherComponent : FC<{
  // eslint-disable-next-line no-unused-vars
  onSend: (message: string) => void;
}> = ({ onSend }) => {
  const [error, setError] = useState<any>(null);
  const [audio, changeAudio] = useState<any>(true);
  const [video, changeVideo] = useState<any>(true);
  const [videoSource, setVideoSource] = useState<any>('camera');
  const [inputValue, setInputValue] = useState<string>('');
  const otPublisher = createRef<OTPublisherRef>()

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
  // eslint-disable-next-line no-unused-vars
  const onSignalReceive = (data: any) => {
    console.info('onSignalReceive');
    console.info(data)
  }

  const handleButtonPressed = () => {
    if (otPublisher.current) {
      onSend(inputValue);
    }
  }

  const handleChange = (e : React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value)
  }
  return (
    <div>
      <h5>I&apos;m publishing the following the video</h5>
      {error ? (
        <div>
          {error}
        </div>
      ) : null}
      <InputContainer type="text" placeholder="Enter a message" value={inputValue} onChange={handleChange} />
      <Button onClick={handleButtonPressed}> Click to send message</Button>
      <OTPublisher
        ref={otPublisher}
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
