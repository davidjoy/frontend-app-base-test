import { ApplicationModuleConfig, HeaderTypes } from "@openedx/frontend-base";

const config: ApplicationModuleConfig = {
  routes: [
    {
      path: 'three',
      lazy: async () => {
        const { default: Component } = await import('./ModuleThree');
        return {
          Component,
          handle: {
            headerId: HeaderTypes.STUDIO,
          }
        }
      },
      children: [
        {
          path: 'child',
          lazy: async () => {
            const { default: Component } = await import('./ModuleThreeChild');
            return {
              Component,
            }
          }
        }
      ]
    }
  ]
};

export default config;
