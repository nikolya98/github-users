import * as React from 'react';
import { LinkProps as BaseLinkProps } from 'react-router-dom';

export type AnchorProps = {
  element: 'a';
} & React.HTMLProps<HTMLAnchorElement>;

export type LinkProps = {
  element: 'link';
} & BaseLinkProps;

export const isLinkProps = (props: AnchorProps | LinkProps): props is LinkProps => {
  return props.element === 'link';
};
