/*
egjs-children-differ
Copyright (c) 2019-present NAVER Corp.
MIT license
*/
import { diff } from "@egjs/children-differ";
import { DirectiveOptions, DirectiveBinding } from "vue/types/options";
import { VNode } from "vue";

const vueChildrenDiffer: Partial<DirectiveOptions> = {
  componentUpdated(el: HTMLElement, binding: DirectiveBinding, vnode: VNode, oldVnode: VNode) {
    const oldChildren = oldVnode.children
      ? oldVnode.children.map(n => n && n.elm as HTMLElement)
      : [];
    const newChildren = vnode.children
      ? vnode.children.map(n => n && n.elm as HTMLElement)
      : [];

    const diffResult = diff(oldChildren, newChildren);

    binding.value(diffResult);
  },
};

export default vueChildrenDiffer;
