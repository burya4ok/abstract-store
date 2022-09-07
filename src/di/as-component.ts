import React, {PropsWithChildren} from 'react';
import {injectComponent} from 'react-obsidian';
import {AppGraph, AppGraphDependencies} from './app-graph';

export type Component<Props extends {}, InjectedProps = AppGraphDependencies> = React.FC<
  PropsWithChildren<Props & InjectedProps>
>;

export type PropsAreEqualFn<Props extends {}> = (
  prevProps: Readonly<Props & AppGraphDependencies>,
  nextProps: Readonly<Props & AppGraphDependencies>
) => boolean;

export const asComponent = <Props extends {}>(
  Component: Component<Props>,
  displayName: string,
  propsAreEqual?: PropsAreEqualFn<Props>
) => {
  Component.displayName = displayName;

  const MemoizedComponent = React.memo(Component, propsAreEqual);

  const ExtendedComponent = injectComponent(MemoizedComponent, AppGraph);

  ExtendedComponent.displayName = `asComponent(${displayName})`;

  return ExtendedComponent;
};
