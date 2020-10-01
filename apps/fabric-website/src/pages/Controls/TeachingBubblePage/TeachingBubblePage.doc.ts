import { TFabricPlatformPageProps } from '../../../interfaces/Platforms';
import { TeachingBubblePageProps as ExternalProps } from '@fluentui/react-examples/lib/office-ui-fabric-react/TeachingBubble/TeachingBubble.doc';

const related = require('!raw-loader!@uifabric/fabric-website/src/pages/Controls/TeachingBubblePage/docs/TeachingBubbleRelated.md') as string;
// const componentUrl =
//   'https://github.com/microsoft/fluentui/tree/master/apps/fabric-website/src/pages/Controls/TeachingBubblePage';

export const TeachingBubblePageProps: TFabricPlatformPageProps = {
  web: {
    ...(ExternalProps as any),
    related,
  },
};
