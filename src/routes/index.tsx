import { FC } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import JoinMeeting from './JoinMeeting';
import Welcome from './Welcome';

const RouterComponent: FC<{}> = () => (
  <div>
    <Router>
      <Switch>
        <Route exact path="/" component={Welcome} />
        <Route exact path="/join-meeting/:id" component={JoinMeeting} />
      </Switch>
    </Router>
  </div>
)
export default RouterComponent
