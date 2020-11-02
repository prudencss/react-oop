import * as React from 'react';
import classNames from 'classnames';

import {
  EDisabled,
  IBehaviorProps,
  componentSize,
  componentColor,
} from '../../lib/Behaviors';

export enum EButtonType {
  Basic = 'c-btn-basic',
  NoBorder = 'c-btn--no-border',
  Stroked = 'c-btn--stroked',
  Flat = 'c-btn--flat',
  Ghost = 'c-btn--ghost',
};

export interface IProps extends IBehaviorProps {
  /**
   * Define _button behavior_
   * *default:* 'button'
   * *options:* 'button', 'submit', 'reset'
   * *example:*
   * ```tsx
   * import Button, { IProps as IButtonProps } from '@prudencss/react-oop/components';
   *
   *   <Button
   *     htmlType="submit"
   *   >
   *     {buttonContent}
   *   </Button>
   * ```
   */
  type?: 'button' | 'submit' | 'reset';

  /**
   * Add _custom styles_ as string-array class-list
   * *default:* []
   * *example:*
   * ```tsx
   * import Button, { EButtonType } from '@prudencss/react-fp';
   *
   * <Button
   *   moduleSpecificClassList={['first-module__buttons--primary', 'u-hidden@xl']}
   * >
   *   {buttonContent}
   * </Button>
   * ```
   */
  moduleSpecificClassList?: string[];

  /**
   * Add prepackaged styles per type easily
   * *options:* ```EButtonType```
   */
  buttonType?: EButtonType;

  /**
   * Make the button a Floating Action Button (circular)
   */
  fab?: boolean;
  onClick: (ev: React.SyntheticEvent<HTMLButtonElement>) => void;
  onBlur?: (ev: React.SyntheticEvent<HTMLButtonElement>) => void;
}

export class Component extends React.Component<IProps, {}> {
  render(): React.ReactNode {
    const {
      onClick,
      onBlur,
      animation,
      color,
      decoration,
      disabled,
      size,
      buttonType,
      fab,
      moduleSpecificClassList,
      type
    } = this.props;
    const _disabled: string = disabled ? EDisabled.Pointer : '';
    const classList = classNames(
      animation,
      { 'c-btn--fab': fab ?? false },
      color ? componentColor('btn')(color) : null,
      decoration,
      size ? componentSize('btn')(size) : null,
      buttonType,
      _disabled
    );
    const optionalDisabledProps = disabled ? { disabled: true, "aria-disabled": true } : {};

    return (
      <button
        type={type}
        className={`
          ${disabled ? 'disabled' : ''}
          c-btn
          ${classList}
          ${(moduleSpecificClassList || []).join(' ')}
        `}
        {...optionalDisabledProps}
        onClick={onClick}
        onBlur={onBlur}
        onTransitionEnd={this.handleTransitionEndEvents}
      >
        {this.props.children}
      </button >
    );
  }

  handleTransitionEndEvents = (ev: React.TransitionEvent<HTMLElement>): boolean => {
    ev.stopPropagation();
    ev.preventDefault();

    return false;
  }
}

export default Component;

