"use strict";
(() => {
var exports = {};
exports.id = 5628;
exports.ids = [5628];
exports.modules = {

/***/ 7084:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ BlogLight),
  "getStaticProps": () => (/* binding */ getStaticProps)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: ./node_modules/next/dynamic.js
var dynamic = __webpack_require__(5152);
var dynamic_default = /*#__PURE__*/__webpack_require__.n(dynamic);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
;// CONCATENATED MODULE: ./components/blog-light/blog-pagination.js


function BlogPaginationLight() {
    return /*#__PURE__*/ jsx_runtime_.jsx("div", {
        className: "row",
        children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
            className: "col-12",
            children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: "fugo--pagination fugo--pagination2 wow fadeInUpX rt-mb-100",
                "data-wow-delay": "0.60s",
                children: /*#__PURE__*/ jsx_runtime_.jsx("nav", {
                    "aria-label": "Page navigation example",
                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("ul", {
                        className: "pagination",
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                className: "page-item",
                                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("a", {
                                    className: "page-link",
                                    href: "#",
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx("svg", {
                                            width: "20",
                                            height: "16",
                                            viewBox: "0 0 20 16",
                                            fill: "none",
                                            xmlns: "http://www.w3.org/2000/svg",
                                            children: /*#__PURE__*/ jsx_runtime_.jsx("path", {
                                                d: "M11.8333 1.58301L18.25 7.99967M18.25 7.99967L11.8333 14.4163M18.25 7.99967L1.75 7.99967",
                                                stroke: "white",
                                                "stroke-width": "2",
                                                "stroke-linecap": "round",
                                                "stroke-linejoin": "round"
                                            })
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                            children: "Prev"
                                        })
                                    ]
                                })
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                className: "page-item active",
                                children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                    className: "page-link",
                                    href: "#",
                                    children: "1"
                                })
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                className: "page-item",
                                children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                    className: "page-link",
                                    href: "#",
                                    children: "2"
                                })
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                className: "page-item",
                                children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                    className: "page-link",
                                    href: "#",
                                    children: "3"
                                })
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                className: "page-item",
                                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("a", {
                                    className: "page-link",
                                    href: "#",
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                            children: "Next"
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("svg", {
                                            width: "20",
                                            height: "16",
                                            viewBox: "0 0 20 16",
                                            fill: "none",
                                            xmlns: "http://www.w3.org/2000/svg",
                                            children: /*#__PURE__*/ jsx_runtime_.jsx("path", {
                                                d: "M11.8333 1.58301L18.25 7.99967M18.25 7.99967L11.8333 14.4163M18.25 7.99967L1.75 7.99967",
                                                stroke: "white",
                                                "stroke-width": "2",
                                                "stroke-linecap": "round",
                                                "stroke-linejoin": "round"
                                            })
                                        })
                                    ]
                                })
                            })
                        ]
                    })
                })
            })
        })
    });
}

// EXTERNAL MODULE: ./components/blog-light/blog-top-section.js
var blog_top_section = __webpack_require__(7117);
// EXTERNAL MODULE: ./components/blog-light/breadcrumbs-section.js
var breadcrumbs_section = __webpack_require__(1543);
;// CONCATENATED MODULE: ./components/blog-light/blog-inner-section.js





const BlogFilterning = dynamic_default()(()=>__webpack_require__.e(/* import() */ 2319).then(__webpack_require__.bind(__webpack_require__, 2319)), {
    loadableGenerated: {
        modules: [
            "..\\components\\blog-light\\blog-inner-section.js -> " + "./blog-filtering"
        ]
    },
    ssr: false
});
function BlogInnerSection() {
    return /*#__PURE__*/ jsx_runtime_.jsx("div", {
        className: "fugu--inner-section light-version",
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
            className: "container",
            children: [
                /*#__PURE__*/ jsx_runtime_.jsx(breadcrumbs_section/* default */.Z, {}),
                /*#__PURE__*/ jsx_runtime_.jsx(blog_top_section/* default */.Z, {}),
                /*#__PURE__*/ jsx_runtime_.jsx(BlogFilterning, {}),
                /*#__PURE__*/ jsx_runtime_.jsx(BlogPaginationLight, {})
            ]
        })
    });
}

;// CONCATENATED MODULE: ./pages/blog-light.js


function BlogLight() {
    return /*#__PURE__*/ jsx_runtime_.jsx(BlogInnerSection, {});
}
async function getStaticProps() {
    return {
        props: {
            header: "four",
            footer: "four"
        }
    };
}


/***/ }),

/***/ 2349:
/***/ ((module) => {

module.exports = require("isotope-layout");

/***/ }),

/***/ 3280:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/app-router-context.js");

/***/ }),

/***/ 2796:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/head-manager-context.js");

/***/ }),

/***/ 4014:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/i18n/normalize-locale-path.js");

/***/ }),

/***/ 8524:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/is-plain-object.js");

/***/ }),

/***/ 5832:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/loadable.js");

/***/ }),

/***/ 8020:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/mitt.js");

/***/ }),

/***/ 4406:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/page-path/denormalize-page-path.js");

/***/ }),

/***/ 4964:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router-context.js");

/***/ }),

/***/ 1751:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/add-path-prefix.js");

/***/ }),

/***/ 6220:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/compare-states.js");

/***/ }),

/***/ 299:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/format-next-pathname-info.js");

/***/ }),

/***/ 3938:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/format-url.js");

/***/ }),

/***/ 9565:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/get-asset-path-from-route.js");

/***/ }),

/***/ 5789:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/get-next-pathname-info.js");

/***/ }),

/***/ 1897:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/is-bot.js");

/***/ }),

/***/ 1428:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/is-dynamic.js");

/***/ }),

/***/ 8854:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/parse-path.js");

/***/ }),

/***/ 1292:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/parse-relative-url.js");

/***/ }),

/***/ 4567:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/path-has-prefix.js");

/***/ }),

/***/ 979:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/querystring.js");

/***/ }),

/***/ 3297:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/remove-trailing-slash.js");

/***/ }),

/***/ 6052:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/resolve-rewrites.js");

/***/ }),

/***/ 4226:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/route-matcher.js");

/***/ }),

/***/ 5052:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/route-regex.js");

/***/ }),

/***/ 9232:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/utils.js");

/***/ }),

/***/ 6689:
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ 6405:
/***/ ((module) => {

module.exports = require("react-dom");

/***/ }),

/***/ 997:
/***/ ((module) => {

module.exports = require("react/jsx-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [676,1664,5152,1295], () => (__webpack_exec__(7084)));
module.exports = __webpack_exports__;

})();