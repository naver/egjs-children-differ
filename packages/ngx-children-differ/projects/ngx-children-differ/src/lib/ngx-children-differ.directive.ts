/*
egjs-children-differ
Copyright (c) 2019-present NAVER Corp.
MIT license
*/
import { Directive, AfterContentChecked, ElementRef, Output, EventEmitter } from '@angular/core';
import ChildrenDiffer, {ChildrenDiffResult} from '@egjs/children-differ';

@Directive({
  selector: '[ngxChildrenDiffer]'
})
export class NgxChildrenDifferDirective implements AfterContentChecked {
  @Output() update = new EventEmitter<ChildrenDiffResult>();
  childrenDiffer: ChildrenDiffer;
  prevContent: string;

  constructor(private elRef: ElementRef) {
    this.prevContent = null;
  }

  getElements() {
    return this.elRef.nativeElement.children;
  }

  ngAfterContentChecked() {
    const content = this.elRef.nativeElement.innerHTML;

    if (!this.childrenDiffer) {
      this.childrenDiffer = new ChildrenDiffer(this.getElements());
      this.prevContent = content;
      return;
    }

    // Check if DOM is changed
    if (content === this.prevContent) {
      return; // DOM isn't changed.
    }

    this.prevContent = content;

    const newChild = this.getElements();
    const result = this.childrenDiffer.update(newChild);
    this.update.emit(result);
  }
}
