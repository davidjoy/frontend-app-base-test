import { FormattedMessage } from '@edx/frontend-platform/i18n';
import { Container } from '@openedx/paragon';

const ExamplePage = () => (
  <main>
    <Container className="py-5">
      <h1>Example Page</h1>
      <p>Hello world!</p>
      <FormattedMessage
        id="example.helloWorld"
        defaultMessage="Hello world!"
        description="A generic hello world message."
      />
    </Container>
  </main>
);

export default ExamplePage;
