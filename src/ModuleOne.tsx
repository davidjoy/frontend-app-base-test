import { getConfig } from '@openedx/frontend-base';
import { Container } from '@openedx/paragon';

const ModuleOne = () => (
  <main>
    <Container className="py-5">
      <h1>Module One</h1>
      <p>Hello world one!</p>
      {getConfig().SITE_NAME}
    </Container>
  </main>
);

export default ModuleOne;

export const config = {
  path: 'module-one',
  component: ModuleOne,
};
