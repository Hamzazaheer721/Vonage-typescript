/* eslint-disable react/require-default-props */
import { FC, memo, useMemo } from 'react'

interface IConnectionProps {
  connection? : boolean;
}
const ConnectionStatusComponent : FC<IConnectionProps> = memo(({ connection }:IConnectionProps) => {
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
})

export default ConnectionStatusComponent;
