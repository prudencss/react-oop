import * as React from 'react';

import { Disabled as DisabledBehaviour } from '../../lib/Behaviours';

export class Component extends React.Component<IProps, IState> {
  public render(): React.ReactNode {
    const { onClick, onBlur,  animation, color, decoration, disabled, size, buttonType, moduleSpecificClassList, htmlType } = this.props;
    const _disabled: string = disabled ? DisabledBehaviour : '';
    const classList = [animation, color, decoration, size, buttonType, _disabled];
    const optionalDisabledProps = disabled ? { disabled: true, "aria-disabled": true } : {};

    return (
      <button
        type={htmlType}
        className={`${disabled ? 'disabled' : ''} c-btn ${classList.join(' ')} ${(moduleSpecificClassList || []).join(' ')}`}
        {...optionalDisabledProps}
        onClick={onClick}
        onBlur={onBlur}
        onTransitionEnd={this.handleTransitionEndEvents}
      >
        {this.props.children}
      </button >
    );
  }

  protected handleTransitionEndEvents = (ev: React.TransitionEvent<HTMLElement>): boolean => {
    ev.stopPropagation();
    ev.preventDefault();

    return false;
  }
}

export interface IProps {
  htmlType?: 'button' | 'submit' | 'reset' | undefined;
  moduleSpecificClassList?: string[];
  animation?: string;
  color?: string;
  decoration?: string;
  disabled?: boolean;
  size?: string;
  buttonType?: string;
  onClick: (ev: React.SyntheticEvent<HTMLButtonElement>) => void;
  onBlur?: (ev: React.SyntheticEvent<HTMLButtonElement>) => void;
}

interface IState {}

export default Component;

