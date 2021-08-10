/* eslint-disable react/require-default-props */
import { FC, useMemo } from 'react'

interface IConnectionProps {
  connection? : boolean;
}
const ConnectionStatusComponent : FC<IConnectionProps> = ({ connection }:IConnectionProps) => {
  const status = useMemo(() => (connection ? 'Connected' : 'Not-Connected'), [connection])
  return (
    <div>
      <strong>
        {' '}
        Status:
        {' '}
        {status}
      </strong>
    </div>
  )
}

export default ConnectionStatusComponent;
