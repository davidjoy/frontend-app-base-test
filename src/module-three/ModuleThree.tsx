import { Container } from '@openedx/paragon';
import { Link, Outlet } from 'react-router-dom';

import './moduleThree.scss';

export default function ModuleThree() {
  return (
    <main>
      <Container className="py-5">
          <h1 className="three">Module Three</h1>
          <ul>
            <li><Link to="child">View the Module Three child page content</Link></li>
            <li><Link to="/">View Module One</Link></li>
            <li><Link to="/two">View Module Two</Link></li>
          </ul>
          <Outlet />
          <p>Module three content after the outlet.</p>
      </Container>
    </main>
  )
}
