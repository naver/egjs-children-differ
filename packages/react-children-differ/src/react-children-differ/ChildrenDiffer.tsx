/*
egjs-children-differ
Copyright (c) 2019-present NAVER Corp.
MIT license
*/
import * as React from 'react';
import NativeChildrenDiffer, { ChildrenDiffResult } from "@egjs/children-differ";
import { ElementDetector } from './ElementDetector';
import { ChildrenDifferState, ChildrenDifferProps } from './types';


export default class ChildrenDiffer extends React.PureComponent<ChildrenDifferProps, ChildrenDifferState> {
  public static defaultProps = {
    onUpdate: (result: ChildrenDiffResult) => {},
  };
  private elements: Element[] = [];
  private childrenDiffer?: NativeChildrenDiffer;
  public render() {
    this.elements = [];

    const elements = this.elements;

    const children = React.Children.toArray(this.props.children) as Array<React.ReactElement<any>>;

    return children.map((child, i) => {
      return <ElementDetector key={child.key!} ref={(e: ElementDetector) => {
        if (e) {
          elements[i] = e.element as HTMLElement;
        }
      }}>{child}</ElementDetector>;
    });
  }
  public getElements() {
    return this.elements.filter(el => el);
  }
  public componentDidUpdate() {
    const result = this.childrenDiffer!.update(this.getElements());

    this.props.onUpdate!(result);
  }
  public componentDidMount() {
    this.childrenDiffer = new NativeChildrenDiffer(this.getElements());
  }
}
