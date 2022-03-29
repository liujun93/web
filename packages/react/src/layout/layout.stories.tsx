import React from 'react';
import { storiesOf } from '@storybook/react';
import { boolean } from '@storybook/addon-knobs';
import { Layout } from './index';

storiesOf('Examples/Hello', module).add('Register', () => {
  return (
    <>
      <Layout>
        Hello
      </Layout>
    </>
  );
});
