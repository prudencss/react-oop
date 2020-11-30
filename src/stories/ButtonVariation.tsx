import React, { PropsWithChildren } from 'react';
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Story } from '@storybook/react/types-6-0';

import Button, { IProps, EButtonType } from '../components/Button';
import * as Behavior from '../lib/Behaviors';

interface ButtonProps extends IProps {
  label: string,
}

export class ButtonVariation extends React.Component<{ buttonPropsList: PropsWithChildren<ButtonProps>[] }, {}> {
  render() {
    const { buttonPropsList } = this.props;

    return (<section>
      {buttonPropsList.map((bp: ButtonProps, id) => (
        <article key={id} className="u-mb--large">
          <header><h3>{bp.label}</h3></header>
          <Button {...bp} />
          <hr/>
        </article>)
      )}
    </section>);
  }
}

const Template: Story<{ buttonPropsList: PropsWithChildren<ButtonProps>[]}> = args => <ButtonVariation {...args} />;
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
  label: 'Medium Button',
  children: 'Click me!'
};

export const SizeVariations = Template.bind({});
SizeVariations.args = {
  buttonPropsList: [
    { ...args, size: Behavior.ESize.Tiny, label: 'Tiny Button' },
    { ...args, size: Behavior.ESize.Small, label: 'Small Button' },
    { ...args },
    { ...args, size: Behavior.ESize.Large, label: 'Large Button' },
    { ...args, size: Behavior.ESize.Huge, label: 'Huge Button' },
  ],
};

export const ColorVariations = Template.bind({});
ColorVariations.args = {
  buttonPropsList: [
    { ...args, color: Behavior.EColor.Primary, label: 'Primary Button' },
    { ...args, color: Behavior.EColor.Secondary, label: 'Secondary Button' },
    { ...args, color: Behavior.EColor.Accent, label: 'Accent Button' },
    { ...args, color: Behavior.EColor.Info, label: 'Info Button' },
    { ...args, color: Behavior.EColor.Warn, label: 'Warn Button' },
    { ...args, color: Behavior.EColor.Danger, label: 'Danger Button' },
    { ...args, color: Behavior.EColor.Success, label: 'Sucess Button' },
    { ...args, color: Behavior.EColor.Disabled, label: 'Disabled Themed Button' },
    { ...args, color: Behavior.EColor.NeutralPrimary, label: 'Neutral Primary Button' },
    { ...args, color: Behavior.EColor.NeutralSecondary, label: 'Neutral Secondary Button' },
    { ...args, color: Behavior.EColor.NeutralAccent, label: 'Neutral Accent Button' },
  ],
};

export const DecorationVariations = Template.bind({});
DecorationVariations.args = {
  buttonPropsList: [
    { ...args, decoration: Behavior.EDecoration.Discrete, label: '"Discrete" decorated Button' },
    { ...args, decoration: Behavior.EDecoration.DiscreteBottom, label: '"Discrete Bottom" decorated Button' },
    { ...args, decoration: Behavior.EDecoration.Elevated, label: '"Elevated" decorated Button' },
    { ...args, decoration: Behavior.EDecoration.ElevatedBottom, label: '"Elevated Bottom" decorated Button' },
    { ...args, decoration: Behavior.EDecoration.Sunken, label: '"Sunken" decorated Button' },
    { ...args, decoration: Behavior.EDecoration.Smooth, label: '"Smooth" decorated Button' },
    { ...args, decoration: Behavior.EDecoration.FX1, label: '"FX1" decorated Button' },
    { ...args, decoration: Behavior.EDecoration.FX2, label: '"FX2" decorated Button' },
    { ...args, decoration: Behavior.EDecoration.Dreamy, label: '"Dreamy" decorated Button' },
    { ...args, decoration: Behavior.EDecoration.DreamyExtra, label: '"DreamyExtra" decorated Button' },
  ],
};

export const AnimationVariations = Template.bind({});
AnimationVariations.args = {
  buttonPropsList: [
    { ...args, animation: Behavior.EAnimation.Ripple, label: '"Ripple" animated Button' },
    { ...args, animation: Behavior.EAnimation.Tata, label: '"Tata" animated Button' },
    { ...args, animation: Behavior.EAnimation.Jiggle, label: '"Jiggle" animated Button' },
    { ...args, animation: Behavior.EAnimation.RevealSlide, label: '"RevealSlide" animated Button' },
    { ...args, animation: Behavior.EAnimation.RevealOpacity, label: '"RevealOpacity" animated Button' },
  ],
};

export const DisabledVariations = Template.bind({});
DisabledVariations.args = {
  buttonPropsList: [
    { ...args, disabled: Behavior.EDisabled.Events, label: '"Events disabled" disabled Button' },
    { ...args, disabled: Behavior.EDisabled.Pointer, label: '"Pointer disabled" disabled Button' },
  ],
};

export const TypeVariations = Template.bind({});
TypeVariations.args = {
  buttonPropsList: [
    { ...args, buttonType: EButtonType.Basic, label: '"Basic" typed Button' },
    { ...args, buttonType: EButtonType.Flat, label: '"Flat" typed Button' },
    { ...args, buttonType: EButtonType.Ghost, label: '"Ghost" typed Button' },
    { ...args, buttonType: EButtonType.Stroked, label: '"Stroked" typed Button' },
    { ...args, buttonType: EButtonType.NoBorder, label: '"NoBorder" typed Button' },
  ],
};




