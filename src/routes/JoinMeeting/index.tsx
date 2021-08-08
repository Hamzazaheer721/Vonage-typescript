import { FC, lazy, Suspense } from 'react'
import Loader from '../../components/Loader';

const JoinMeeting: FC<{}> = (props) => {
  const LazyView = lazy(() => import('./view'));
  return (
    <Suspense fallback={Loader}>
      <LazyView {...props} />
    </Suspense>
  )
}

export default JoinMeeting;
