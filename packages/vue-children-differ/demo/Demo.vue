<template>
  <div id="app">
    <div v-children-differ="update">
      <div v-for="val in list" :key="val">
        {{val}}
      </div>
    </div>
    <button @click="list.push(list.length)" />
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import ChildrenDiffer from "../src/ChildrenDiffer";

export default {
  name: "app",
  data() {
    return {
      list: [],
      result: undefined,
    };
  },
  methods: {
    update(result) {
      console.log("DIFF");
      this.result = result;
      if (this.list.length < 10) {
        this.list.push(this.list.length);
      }
    },
  },
  directives: {
    "children-differ": ChildrenDiffer,
  },
  updated() {
    // console.log(this.result);
    console.log("UPDATED");
  },
};
</script>

