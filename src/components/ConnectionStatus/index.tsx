/* eslint-disable react/require-default-props */
import { FC, useEffect, useRef } from 'react'

interface IConnectionProps {
  connection? : string;
}
const ConnectionStatusComponent : FC<IConnectionProps> = ({ connection }:IConnectionProps) => {
  const status = useRef<string>('');
  useEffect(() => {
    status.current = connection ? 'Connected' : 'Not-Connected'
  }, [])
  return (
    <div>
      <strong>
        {' '}
        Status:
        {status.current}
      </strong>
    </div>
  )
}

export default ConnectionStatusComponent;
