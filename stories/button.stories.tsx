import React from 'react';

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

export default {
  title: 'Button',
}

export const Sizes = () => (<>
  <h1>
    Button sizes
  </h1>
  <p>
    tiny, small, medium, large, huge
  </p>
  <Button.Component
    size={(Behaviours.ComponentSize.Tiny as unknown as Function)('btn')}
    {...buttonPropsDefault}
  />
  <Button.Component
    size={(Behaviours.ComponentSize.Small as unknown as Function)('btn')}
    {...buttonPropsDefault}
  />
  <Button.Component
    size={(Behaviours.ComponentSize.Medium as unknown as Function)('btn')}
    {...buttonPropsDefault}
  />
  <Button.Component
    size={(Behaviours.ComponentSize.Large as unknown as Function)('btn')}
    {...buttonPropsDefault}
  />
  <Button.Component
    size={(Behaviours.ComponentSize.Huge as unknown as Function)('btn')}
    {...buttonPropsDefault}
  />
</>);
