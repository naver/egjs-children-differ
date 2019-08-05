<p align="middle"><img src="https://raw.githubusercontent.com/naver/egjs-list-differ/master/demo/images/logo.png"/></p>
<h2 align="middle">@egjs/react-children-differ</h2>

<p align="middle"><a href="https://www.npmjs.com/package/@egjs/react-children-differ" target="_blank"><img src="https://img.shields.io/npm/v/@egjs/react-children-differ.svg?style=flat-square&color=007acc&label=version&logo=NPM" alt="version" /></a> <a href="https://travis-ci.org/naver/egjs-children-differ" target="_blank"><img alt="Travis (.org)" src="https://img.shields.io/travis/naver/egjs-children-differ.svg?style=flat-square&label=build&logo=travis%20ci" /></a> <a href="https://coveralls.io/github/naver/egjs-children-differ?branch=master&style=flat-square" target="_blank"><img alt="Coveralls github" src="https://img.shields.io/coveralls/github/naver/egjs-children-differ.svg?style=flat-square&label=%E2%9C%85%20coverage"></a> <a href="https://www.npmjs.com/package/@egjs/react-children-differ" target="_blank"><img src="https://img.shields.io/npm/dm/@egjs/react-children-differ.svg?style=flat-square&label=%E2%AC%87%20downloads&color=08CE5D" alt="npm downloads per month"></a>  <a href="https://github.com/naver/egjs-children-differ/blob/master/LICENSE" target="_blank"><img alt="GitHub" src="https://img.shields.io/github/license/naver/egjs-children-differ.svg?style=flat-square&label=%F0%9F%93%9C%20license&color=08CE5D"></a></p>

<p align="middle">➕➖🔄 A React Component that checks diff when child elements are added, removed, or changed.</p>

## ⚙️ Installation
```sh
$ npm i @egjs/react-children-differ
```

## 📖 Documentation
* See [**Documentation**](https://naver.github.io/egjs-children-differ/release/latest/doc/index.html) page.
* [Introducing ListDiffer to track changes in data and track changes](https://medium.com/p/27793f0c6f4a)([한국어](https://medium.com/p/9c3f1d770542))
* [How to Make Cross Framework Component](https://medium.com/p/ee76d76708b1)([한국어](https://medium.com/p/234b3fece353))

## 🏃 Quick start
```js
import ChildrenDiffer from "@egjs/react-children-differ";

render() {
    return (
        <ChildrenDiffer onUpdate={this.onUpdate}>
            {[1, 2, 3, 4, 5].map(key => (<div key={key}>{key}</div>))}
        </ChildrenDiffer>
    );
}
onUpdate(result) {
    console.log(result);
}
```


## Development
### `npm start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.

## 📝 Feedback
Please file an [Issue](https://github.com/naver/egjs-children-differ/issues).

## 📜 License
@egjs/vue-children-differ is released under the [MIT license](http://naver.github.io/egjs/license.txt).

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
