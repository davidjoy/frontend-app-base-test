import { Container } from '@openedx/paragon';
import { Link, Route, Routes } from 'react-router-dom';

const ModuleThree = () => (
  <main>
    <Container className="py-5">
        <h1>Module Three</h1>
        <ul>
          <li><Link to="child">View the Module Three child page content</Link></li>
          <li><Link to="/">View Module One</Link></li>
          <li><Link to="/two">View Module Two</Link></li>
        </ul>
        <Routes>
          <Route path="child" element={
            <div>You're viewing the child page of Module Three</div>
          } />
        </Routes>
    </Container>
  </main>
);

export default ModuleThree;

export const config = {
  path: 'three',
  component: ModuleThree,
};
