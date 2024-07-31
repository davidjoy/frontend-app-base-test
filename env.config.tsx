import { OpenedXConfig } from '@openedx/frontend-base';
import './project.scss';
import { ModuleOne, ModuleTwo } from './src';

const config: OpenedXConfig = {
  app: () => (
    <>
      <ModuleOne />
      <ModuleTwo />
    </>
  )
};

export default config;
