import { useEffect, useState } from 'react'
import OT from '@opentok/client'

// eslint-disable-next-line import/prefer-default-export
export const useGetDevices = () => {
  const [audioInputDevices, setAudioInputDevices] = useState<any>([])
  const [videoInputDevices, setVideoInputDevices] = useState<any>([])

  useEffect(() => {
    OT.getUserMedia({}).then(() => {
      OT.getDevices((_error: any, devices: any) => {
        const audioDevices = devices.filter((device: any) => device.kind === 'audioInput');
        const videoDevices = devices.filter((device:any) => device.kind === 'videoInput');
        setAudioInputDevices(audioDevices)
        setVideoInputDevices(videoDevices);
      })
    })
  }, [])

  return {
    audioInputDevices,
    videoInputDevices,
  }
}
