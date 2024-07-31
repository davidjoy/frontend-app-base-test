import { Container } from '@openedx/paragon';

const ModuleTwo = () => (
  <main>
    <Container className="py-5">
      <h1>Module Two</h1>
      <p>Hello world two!</p>

    </Container>
  </main>
);

export default ModuleTwo;

export const config = {
  path: 'module-two',
  component: ModuleTwo,
};
