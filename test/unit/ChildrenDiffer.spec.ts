import ChildrenDiffer from "../../src/ChildrenDiffer";

[true, false].forEach(isMap => {
  describe(`test children (window has Map: ${isMap})`, () => {
    let div: Element;
    let differ: ChildrenDiffer;
    beforeEach(() => {
      div = document.createElement("div");

      const els = [0, 1, 2, 3, 4].map(() => document.createElement("div"));
      els.forEach(el => {
        div.appendChild(el);
      });
      differ = new ChildrenDiffer();

      if (!isMap) {
        (differ as any).findKeyCallback = (() => {
          let childrenCount = 0;

          return (el: Element) => (el as any).__DIFF_KEY__ || ((el as any).__DIFF_KEY__ = ++childrenCount);
        })();
      }

      differ.update(div.children);
    });
    if (!isMap) {
      it("test element has DIFF_KEY", () => {
        // Given / When / Then
        expect([].slice.call(div.children).map(el => el.__DIFF_KEY__)).toEqual([1, 2, 3, 4, 5]);
      });
    }
    it("test no update", () => {
      // Given
      // When
      const result = differ.update(div.children);

      // Then
      expect(result.added).toEqual([]);
      expect(result.removed).toEqual([]);
      expect(result.changed).toEqual([]);
      expect(result.maintained).toEqual([[0, 0], [1, 1], [2, 2], [3, 3], [4, 4]]);
    });
    it("test added", () => {
      // Given
      // When
      div.appendChild(document.createElement("div"));
      const result = differ.update(div.children);

      // Then
      expect(result.added).toEqual([5]);
      expect(result.removed).toEqual([]);
      expect(result.changed).toEqual([]);
      expect(result.maintained).toEqual([[0, 0], [1, 1], [2, 2], [3, 3], [4, 4]]);
    });
    it("test added with insertBefore", () => {
      // Given
      // When
      div.insertBefore(document.createElement("div"), div.children[2]);
      const result = differ.update(div.children);

      // Then
      expect(result.added).toEqual([2]);
      expect(result.removed).toEqual([]);
      expect(result.changed).toEqual([[2, 3], [3, 4], [4, 5]]);
      expect(result.pureChanged).toEqual([]);
      expect(result.maintained).toEqual([[0, 0], [1, 1], [2, 3], [3, 4], [4, 5]]);
    });
    it("test removed", () => {
      // Given
      // When
      div.children[2].remove();
      const result = differ.update(div.children);

      // Then
      expect(result.added).toEqual([]);
      expect(result.removed).toEqual([2]);
      expect(result.changed).toEqual([[3, 2], [4, 3]]);
      expect(result.pureChanged).toEqual([]);
      expect(result.maintained).toEqual([[0, 0], [1, 1], [3, 2], [4, 3]]);
    });
    it("test changed", () => {
      // Given
      // When
      div.insertBefore(div.children[2], div.children[4]);
      const result = differ.update(div.children);

      // Then
      expect(result.added).toEqual([]);
      expect(result.removed).toEqual([]);
      expect(result.changed).toEqual([[3, 2], [2, 3]]);
      expect(result.pureChanged).toEqual([[3, 2]]);
      expect(result.ordered).toEqual([[3, 2]]);
      expect(result.maintained).toEqual([[0, 0], [1, 1], [3, 2], [2, 3], [4, 4]]);
    });
  });
});
