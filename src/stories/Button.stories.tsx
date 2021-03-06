import React, { PropsWithChildren } from 'react';
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Story, Meta } from '@storybook/react/types-6-0';

import Button, { IProps as ButtonProps, EButtonType } from '../components/Button';
import * as Behavior from '../lib/Behaviors';

export default {
  title: 'Button',
  component: Button,
  argTypes: {
    animation: { control: { type: 'select', options: Behavior.EAnimation }},
    color: { control : { type: 'select', options: Behavior.EColor }},
    decoration: { control : { type: 'select', options: Behavior.EDecoration}},
    size: { control: { type: 'select', options: Behavior.ESize }},
    disabled: { control: { type: 'select', options: Behavior.EDisabled }},
    type: { control: { type: 'select', options: ['button', 'submit', 'reset']}},
    buttonType: { control: { type: 'select', options: EButtonType }},
  },
} as Meta;

const Template: Story<PropsWithChildren<ButtonProps>> = args => <Button {...args} />;
const args = {
  animation: Behavior.EAnimation.Ripple,
  color: Behavior.EColor.Primary,
  decoration: Behavior.EDecoration.ElevatedBottom,
  size: Behavior.ESize.Medium,
  disabled: undefined,
  type:  "button" as 'button',
  buttonType: EButtonType.Basic,
  moduleSpecificClassList: ['u-mb--medium'],
  fab: false,
  onClick: () => null,
  onBlur: () => null,
  children: 'Click me!'
};

export const Configurable: Story<PropsWithChildren<ButtonProps>> = args => (<>
   <header><h3>Use Storybook Controls to configure</h3></header>
  <Button {...args} />
</>);
Configurable.args = {
  ...args,
};

