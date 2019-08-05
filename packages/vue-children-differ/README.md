<p align="middle"><img src="https://raw.githubusercontent.com/naver/egjs-list-differ/master/demo/images/logo.png"/></p>
<h2 align="middle">@egjs/vue-children-differ</h2>

<p align="middle"><a href="https://www.npmjs.com/package/@egjs/vue-children-differ" target="_blank"><img src="https://img.shields.io/npm/v/@egjs/vue-children-differ.svg?style=flat-square&color=007acc&label=version&logo=NPM" alt="version" /></a> <a href="https://travis-ci.org/naver/egjs-children-differ" target="_blank"><img alt="Travis (.org)" src="https://img.shields.io/travis/naver/egjs-children-differ.svg?style=flat-square&label=build&logo=travis%20ci" /></a> <a href="https://coveralls.io/github/naver/egjs-children-differ?branch=master&style=flat-square" target="_blank"><img alt="Coveralls github" src="https://img.shields.io/coveralls/github/naver/egjs-children-differ.svg?style=flat-square&label=%E2%9C%85%20coverage"></a> <a href="https://www.npmjs.com/package/@egjs/vue-children-differ" target="_blank"><img src="https://img.shields.io/npm/dm/@egjs/vue-children-differ.svg?style=flat-square&label=%E2%AC%87%20downloads&color=08CE5D" alt="npm downloads per month"></a>  <a href="https://github.com/naver/egjs-children-differ/blob/master/LICENSE" target="_blank"><img alt="GitHub" src="https://img.shields.io/github/license/naver/egjs-children-differ.svg?style=flat-square&label=%F0%9F%93%9C%20license&color=08CE5D"></a></p>

<p align="middle">➕➖🔄 A Vue directive that checks diff when child elements are added, removed, or changed.</p>

## ⚙️ Installation
```sh
$ npm i @egjs/vue-children-differ
```

## 📖 Documentation
* See [**Documentation**](https://naver.github.io/egjs-children-differ/release/latest/doc/index.html) page.
* [Introducing ListDiffer to track changes in data and track changes](https://medium.com/p/27793f0c6f4a)([한국어](https://medium.com/p/9c3f1d770542))
* [How to Make Cross Framework Component](https://medium.com/p/ee76d76708b1)([한국어](https://medium.com/p/234b3fece353))

## 🏃 Quick start
```js
import Vue from "vue";
import ChildrenDiffer from "@egjs/vue-children-differ";

Vue.directive("children-differ", ChildrenDiffer);
```

```vue
<template>
  <div id="wrapper" v-children-differ="foo"></div>
</template>
<script>
  export default {
    methods: {
      foo(diffResult) {
        // This will be called when child nodes of #wrapper is changed

        /*
         * This is called before lifecycle "updated",
         * so if you have to change state in this method,
         * you can use either "this.$nextTick"
         * or assign diffResult to other variable, then handle it on "updated" lifecycle.
         */
      }
    }
  }
</script>
```

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
