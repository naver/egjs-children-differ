# ngx-children-differ [![npm version](https://badge.fury.io/js/%40egjs%2Fngx-children-differ.svg)](https://badge.fury.io/js/%40egjs%2Fngx-children-differ)
An Angular directive that checks diff when child elements are added, removed, or changed

## Quick start

### Module definition

```js
import { NgxChildrenDifferDirective } from '@egjs/ngx-children-differ'; // import
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

@NgModule({
  declarations: [
    AppComponent,
    NgxChildrenDifferDirective /* Add in declarations */
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
```

### Template

```html
<div ngxChildrenDiffer (update)="onUpdate($event)">
  <div class="panel" *ngFor="let val of list">{{val}}</div>
</div>
```

### Script
```ts
export class AppComponent implements OnInit {
  list: number[];

  onUpdate(diffResult: ChildrenDiffResult) {
    console.log('Result Callback : added: %o, removed: %o, changed: %o', diffResult.added, diffResult.removed, diffResult.changed);
  }
}
```

For the more information of result(`diffResult`), reference [egjs-list-differ](https://github.com/naver/egjs-list-differ#readme) documentation.

## Installing dependency

Run `npm install`


## Build

Run `ng build ngx-children-differ` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running example

Run `ng serve ngx-children-differ-example` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## License
@egjs/ngx-children-differ is released under the [MIT license](http://naver.github.io/egjs/license.txt).

```
Copyright (c) 2019-present NAVER Corp.

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT.  IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE.
```

