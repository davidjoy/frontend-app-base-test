import { getConfig } from '@openedx/frontend-base';
import { Container } from '@openedx/paragon';
import { Link, Route, Routes } from 'react-router-dom';

const ModuleOne = () => (
  <main>
    <Container className="py-5">
        <h1>Module One</h1>
        <p>This module is acting as a homepage because it was mounted at the root.</p>
        <p>The site's name is {getConfig().SITE_NAME}!</p>
        <ul>
          <li><Link to="child">View the child page content</Link></li>
          <li><Link to="/two">View Module Two</Link></li>
          <li><Link to="/three">View Module THree</Link></li>
        </ul>
        <Routes>
          <Route path="child" element={
            <div>You're viewing the content of the child page at /child</div>
          }/>
        </Routes>
    </Container>
  </main>
);

export default ModuleOne;

export const config = {
  path: 'one',
  component: ModuleOne,
};
