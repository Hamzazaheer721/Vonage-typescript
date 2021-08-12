/* eslint-disable react/require-default-props */
import { FC, memo, useMemo } from 'react'
import SmallerText from './index.styled';

interface IConnectionProps {
  connection? : boolean;
}
const ConnectionStatusComponent : FC<IConnectionProps> = memo(({ connection }:IConnectionProps) => {
  const status = useMemo(() => (connection ? 'Connected' : 'Not-Connected'), [connection])
  return (
    <div>
      <strong>
        <SmallerText>
          Status:
          {' '}
          {status}
        </SmallerText>

      </strong>
    </div>
  )
})

export default ConnectionStatusComponent;
