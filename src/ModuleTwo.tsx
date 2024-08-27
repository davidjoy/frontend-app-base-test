import { Container } from '@openedx/paragon';
import { Link, Route, Routes } from 'react-router-dom';

const ModuleTwo = () => (
  <main>
    <Container className="py-5">
        <h1>Module Two</h1>
        <ul>
          <li><Link to="child">View the Module Two child page content</Link></li>
          <li><Link to="/">View Module One</Link></li>
          <li><Link to="/three">View Module Three</Link></li>
        </ul>
        <Routes>
          <Route path="child" element={
            <div>You're viewing the child page of Module Two.</div>
          } />
        </Routes>
    </Container>
  </main>
);

export default ModuleTwo;

export const config = {
  path: 'two',
  component: ModuleTwo,
};
