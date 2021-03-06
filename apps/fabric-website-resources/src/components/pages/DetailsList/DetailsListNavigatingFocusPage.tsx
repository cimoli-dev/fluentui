import * as React from 'react';
import { DemoPage } from '../../DemoPage';
import { DetailsListNavigatingFocusPageProps } from '@fluentui/react-examples/lib/office-ui-fabric-react/DetailsList/DetailsList.doc';

export const DetailsListNavigatingFocusPage = (props: { isHeaderVisible: boolean }) => (
  <DemoPage {...{ ...DetailsListNavigatingFocusPageProps, ...props }} />
);
