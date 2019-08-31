import React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import { Button } from '../src';

import * as Behaviours from '../src/lib/Behaviours';

import './index.sass';

const buttonPropsDefault: Button.IProps = {
  animation: Behaviours.Animation.Ripple,
  color: (Behaviours.ComponentColor.Primary as unknown as Function)('btn'),
  size: (Behaviours.ComponentSize.Small as unknown as Function)('btn'),
  buttonType: Behaviours.ButtonType.Flat,
  onClick: action('clicked'),
};

const sizeGenerator = size => (size as unknown as Function)('btn');
const colorGenerator = color => (color as unknown as Function)('btn');


storiesOf('Button', module)
  .add('size variants', () => <Button.Component
    {...buttonPropsDefault}>Hello Button</Button.Component>)
  .add('with some emoji', () => <Button.Component {...buttonPropsDefault}>😀 😎 👍 💯</Button.Component>);
