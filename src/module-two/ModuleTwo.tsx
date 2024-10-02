import { Container } from '@openedx/paragon';
import { Link, Outlet } from 'react-router-dom';

import './moduleTwo.scss';

const ModuleTwo = () => (
  <main>
    <Container className="py-5">
        <h1 className="two">Module Two</h1>
        <ul>
          <li><Link to="child">View the Module Two child page content</Link></li>
          <li><Link to="/">View Module One</Link></li>
          <li><Link to="/three">View Module Three</Link></li>
        </ul>
        <Outlet />
        <p>Module two content after the outlet.</p>
    </Container>
  </main>
);

export default ModuleTwo;
