/*
egjs-children-differ
Copyright (c) 2019-present NAVER Corp.
MIT license
*/
import * as React from 'react';
import { findDOMNode } from 'react-dom';

export class ElementDetector extends React.Component {
  public element: HTMLElement | null = null;
  public componentDidUpdate() {
    this.element = findDOMNode(this) as HTMLElement;
  }
  public componentDidMount() {
    this.element = findDOMNode(this) as HTMLElement;
  }
  public render() {
    return this.props.children;
  }
}
