import { ChildrenDiffResult } from '@egjs/children-differ';
import { Component, OnInit, ElementRef} from '@angular/core';
import Axes, {PanInput} from '@egjs/axes';

@Component({
  selector: 'app-root',
  template: `
    <!--The content below is only a placeholder and can be replaced.-->
    <h2>ngxChildrenDiffer Example</h2>
    <h3>Notice</h3>
    <ol>
      <li>Add Item: click the 'ADD' Button</li>
      <li>Remove Item: double click on a target item</li>
      <li>Log: Open developer tools to show logs</li>
    </ol>
    <button (click)="appendItem()">Append</button>
    <button (click)="prependItem()">Prepend</button>
    <div id="axes-target">
      <div class="wrapper" ngxChildrenDiffer (update)="onUpdate($event)">
        <div class="panel" *ngFor="let val of list">{{val.num}}</div>
      </div>
    </div>
  `,
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'ngx-children-differ-example';
  list: object[] = [
    {num: 0},
    {num: 1},
    {num: 2}
  ];

  constructor(private elRef: ElementRef) {
  }

  ngOnInit() {
    const nativeEl = this.elRef.nativeElement;

    // Test for too many checked event by ngAfterContentChecked.
    const axes = new Axes({
      x: {
        range: [0, 100],
        bounce: 50
      }
    }, {});

    const wrapper = nativeEl.querySelector('.wrapper');
    const target = nativeEl.querySelector('#axes-target');
    const panInput = new PanInput(target);
    axes.connect(['x'], panInput);

    axes.on('change', e => {
      wrapper.style.left = `${e.pos.x}px`;
    });

    // remove item
    wrapper.addEventListener('dblclick', e => {
      if (e.target.className !== 'panel') {
        return;
      }

      console.dir();

      let matchIndex = -1;

      const chidrenCollection = e.target.parentElement.children;
      const len = chidrenCollection.length;
      for (matchIndex = 0; matchIndex < len; matchIndex++) {
        if (chidrenCollection[matchIndex] === e.target) {
          console.log('match', matchIndex);
          break;
        }
      }

      if (matchIndex !== -1) {
        this.removeItem(matchIndex);
      }
    });
  }

  appendItem() {
    const val = {num: this.list.length % 5};
    console.log(`New Item: ${val} at ${this.list.length}`);

    this.list = [...this.list, val];
    // setTimeout(() => {
      // this.list.push(val);
    // });
    // this.cd.detectChanges();
  }

  prependItem() {
    // const val = this.list.length % 5;
    const val = {num: this.list.length % 5};
    // const last = this.list[this.list.length - 1];
    console.log(`New Item: ${val} at ${this.list.length}`);

    this.list = [val, ...this.list];
  }

  removeItem(index) {
    console.log(`Remove Item: ${index}th`);

    this.list.splice(index, 1);
    this.list = [...this.list];
  }

  onUpdate(diffResult: ChildrenDiffResult) {
    console.log('Result Callback : added: %o, removed: %o, changed: %o', diffResult.added, diffResult.removed, diffResult.changed);
  }
}
