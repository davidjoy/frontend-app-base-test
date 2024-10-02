import { ApplicationModuleConfig, HeaderTypes } from "@openedx/frontend-base";

const config: ApplicationModuleConfig = {
  routes: [
    {
      path: 'two',
      lazy: async () => {
        const { default: Component } = await import('./ModuleTwo');
        return {
          Component,
          handle: {
            headerId: HeaderTypes.LEARNING,
          }
        }
      },
      children: [
        {
          path: 'child',
          lazy: async () => {
            const { default: Component } = await import('./ModuleTwoChild');
            return {
              Component,
              handle: {
                headerId: HeaderTypes.DEFAULT
              }
            }
          }
        }
      ]
    }
  ],
};

export default config;
