"use strict";
(() => {
  var __create = Object.create;
  var __defProp = Object.defineProperty;
  var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
  var __getOwnPropNames = Object.getOwnPropertyNames;
  var __getProtoOf = Object.getPrototypeOf;
  var __hasOwnProp = Object.prototype.hasOwnProperty;
  var __commonJS = (cb, mod) => function __require() {
    return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
  };
  var __copyProps = (to, from, except, desc) => {
    if (from && typeof from === "object" || typeof from === "function") {
      for (let key of __getOwnPropNames(from))
        if (!__hasOwnProp.call(to, key) && key !== except)
          __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
    }
    return to;
  };
  var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
    isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
    mod
  ));

  // ../../node_modules/html-tags/html-tags.json
  var require_html_tags = __commonJS({
    "../../node_modules/html-tags/html-tags.json"(exports, module) {
      module.exports = [
        "a",
        "abbr",
        "address",
        "area",
        "article",
        "aside",
        "audio",
        "b",
        "base",
        "bdi",
        "bdo",
        "blockquote",
        "body",
        "br",
        "button",
        "canvas",
        "caption",
        "cite",
        "code",
        "col",
        "colgroup",
        "data",
        "datalist",
        "dd",
        "del",
        "details",
        "dfn",
        "dialog",
        "div",
        "dl",
        "dt",
        "em",
        "embed",
        "fieldset",
        "figcaption",
        "figure",
        "footer",
        "form",
        "h1",
        "h2",
        "h3",
        "h4",
        "h5",
        "h6",
        "head",
        "header",
        "hgroup",
        "hr",
        "html",
        "i",
        "iframe",
        "img",
        "input",
        "ins",
        "kbd",
        "label",
        "legend",
        "li",
        "link",
        "main",
        "map",
        "mark",
        "math",
        "menu",
        "menuitem",
        "meta",
        "meter",
        "nav",
        "noscript",
        "object",
        "ol",
        "optgroup",
        "option",
        "output",
        "p",
        "param",
        "picture",
        "pre",
        "progress",
        "q",
        "rb",
        "rp",
        "rt",
        "rtc",
        "ruby",
        "s",
        "samp",
        "script",
        "section",
        "select",
        "slot",
        "small",
        "source",
        "span",
        "strong",
        "style",
        "sub",
        "summary",
        "sup",
        "svg",
        "table",
        "tbody",
        "td",
        "template",
        "textarea",
        "tfoot",
        "th",
        "thead",
        "time",
        "title",
        "tr",
        "track",
        "u",
        "ul",
        "var",
        "video",
        "wbr"
      ];
    }
  });

  // ../../node_modules/html-tags/index.js
  var require_html_tags2 = __commonJS({
    "../../node_modules/html-tags/index.js"(exports, module) {
      "use strict";
      module.exports = require_html_tags();
    }
  });

  // ../lment/lib/api/tag.js
  var isEventListener = (entry) => entry[0].startsWith("on");
  var isAttribute = (entry) => !isEventListener(entry);
  var transformEvent = (entry) => [
    entry[0].slice(2),
    entry[1]
  ];
  var addListener = (element) => (entry) => element.addEventListener(entry[0], entry[1]);
  var addAttribute = (element) => (entry) => element.setAttribute(entry[0], entry[1]);
  var tag = (tag2, attrs, children) => {
    const element = document.createElement(tag2);
    Object.entries(attrs).filter(isEventListener).map(transformEvent).forEach(addListener(element));
    Object.entries(attrs).filter(isAttribute).forEach(addAttribute(element));
    return {
      tag: tag2,
      attrs,
      children,
      element
    };
  };
  var text = (text2) => {
    const element = document.createTextNode(text2);
    return { text: text2, element };
  };
  var createTag = (tagName) => {
    return function(attrs, children) {
      return tag(tagName, attrs, children);
    };
  };

  // ../lment/lib/api/lment.js
  var import_html_tags = __toESM(require_html_tags2());

  // ../lment/lib/api/render.js
  var render = (mount, root) => {
    if (mount == null) {
      throw new Error("mount element not defined");
    }
    const rootElement = root.element;
    if ("children" in root) {
      root.children?.forEach((child) => {
        render(rootElement, child);
      });
    }
    mount.appendChild(rootElement);
  };

  // ../lment/lib/api/lment.js
  function component(fn) {
    return function(attrs = {}, children = []) {
      const rendered = fn(attrs, children);
      return rendered;
    };
  }
  var tagFns = {};
  import_html_tags.default.forEach((item) => tagFns[item] = createTag(item));
  var LM = { render, component, text, ...tagFns };

  // src/index.ts
  function another({ message }) {
    return LM.text(message);
  }
  var Another = LM.component(another);
  function onclick() {
    alert("Hello world again!!");
  }
  var Test = LM.component(() => {
    return LM.div({ id: "foo" }, [
      LM.ul({ id: "bar", onclick }, [
        LM.li({ id: "hej" }, [
          LM.text("Hello"),
          Another({ message: " World" })
        ])
      ])
    ]);
  });
  LM.render(document.getElementById("app"), Test());
})();
