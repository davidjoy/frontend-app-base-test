import { getConfig } from '@openedx/frontend-base';
import { Container } from '@openedx/paragon';
import { Link, Outlet } from 'react-router-dom';

import './moduleOne.css';

const ModuleOne = () => (
  <main>
    <Container className="py-5">
        <h1 className="one">Module One</h1>
        <p>This module is acting as a homepage because it was mounted at the root.</p>
        <p>The site's name is {getConfig().SITE_NAME}!</p>
        <ul>
          <li><Link to="child">View the child page content</Link></li>
          <li><Link to="/two">View Module Two</Link></li>
          <li><Link to="/three">View Module Three</Link></li>
        </ul>
        <Outlet />
        <p>Module one content after the outlet.</p>
    </Container>
  </main>
);

export default ModuleOne;
