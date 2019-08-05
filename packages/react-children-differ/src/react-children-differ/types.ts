/*
egjs-children-differ
Copyright (c) 2019-present NAVER Corp.
MIT license
*/
import * as React from "react";
import { ChildrenDiffResult } from "@egjs/children-differ";

export interface ChildrenDifferProps {
  onUpdate?: (e: ChildrenDiffResult) => any;
  children: React.ReactElement<any> | Array<React.ReactElement<any>>;
}
export interface ChildrenDifferState {}
