import { FC, lazy, Suspense } from 'react';
import Loader from '../../components/Loader';

const LazyView = lazy(() => import('./view'))
const Welcome: FC<any> = (props) => (
  <Suspense fallback={Loader}>
    <LazyView {...props} />
  </Suspense>

)

export default Welcome;
