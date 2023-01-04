"use strict";
exports.id = 9735;
exports.ids = [9735];
exports.modules = {

/***/ 1937:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ BlogContentSection)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);
;// CONCATENATED MODULE: ./components/common/blog/blog-pagination.js


function BlogPagination({ theme  }) {
    let themeClassName = theme === "dark" ? "" : "fugo--pagination2";
    return /*#__PURE__*/ jsx_runtime_.jsx("div", {
        className: `fugo--pagination ${themeClassName}`,
        children: /*#__PURE__*/ jsx_runtime_.jsx("nav", {
            "aria-label": "Page navigation example",
            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("ul", {
                className: "pagination",
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("li", {
                        className: "page-item",
                        children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                            href: "/",
                            legacyBehavior: true,
                            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("a", {
                                className: "page-link",
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
                                        children: " Prev "
                                    })
                                ]
                            })
                        })
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("li", {
                        className: "page-item active",
                        children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                            href: "/",
                            legacyBehavior: true,
                            children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                className: "page-link",
                                children: "1"
                            })
                        })
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("li", {
                        className: "page-item",
                        children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                            href: "/",
                            legacyBehavior: true,
                            children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                className: "page-link",
                                children: "2"
                            })
                        })
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("li", {
                        className: "page-item",
                        children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                            href: "/",
                            legacyBehavior: true,
                            children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                className: "page-link",
                                children: "3"
                            })
                        })
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("li", {
                        className: "page-item",
                        children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                            href: "/",
                            legacyBehavior: true,
                            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("a", {
                                className: "page-link",
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                        children: " Next "
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
                    })
                ]
            })
        })
    });
}

;// CONCATENATED MODULE: ./components/common/blog/blog-post-section.js


/* eslint-disable @next/next/no-img-element */ function BlogPostSection() {
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        className: "row",
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: "col-md-6",
                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                    className: "fugu--blog-wrap fugu--blog-wrap2 wow fadeInUpX",
                    "data-wow-delay": "0s",
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            className: "fugu--blog-thumb",
                            children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                href: "/single-blog-light",
                                children: /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                    src: "/images/all-img/blog2/dark/blog14.png",
                                    alt: ""
                                })
                            })
                        }),
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                            className: "fugu--blog-content",
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                    className: "fugu--blog-date",
                                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("ul", {
                                        children: [
                                            /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                                    href: "#",
                                                    children: "Art & Analusis"
                                                })
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                                    href: "#",
                                                    children: "July 18, 2022"
                                                })
                                            })
                                        ]
                                    })
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                    className: "fugu--blog-title",
                                    children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                        href: "/single-blog-light",
                                        children: /*#__PURE__*/ jsx_runtime_.jsx("h3", {
                                            children: "What does the NFT Ecosystem look like after the Boom?"
                                        })
                                    })
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                    href: "single-blog-light",
                                    legacyBehavior: true,
                                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("a", {
                                        className: "fugu--readmore-btn",
                                        href: "single-blog.html",
                                        children: [
                                            "Read more",
                                            /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                children: /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                                    src: "/images/svg2/arrow-right-white.svg",
                                                    alt: ""
                                                })
                                            })
                                        ]
                                    })
                                })
                            ]
                        })
                    ]
                })
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: "col-md-6",
                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                    className: "fugu--blog-wrap fugu--blog-wrap2 wow fadeInUpX",
                    "data-wow-delay": ".10s",
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            className: "fugu--blog-thumb",
                            children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                href: "/single-blog-light",
                                children: /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                    src: "/images/all-img/blog2/dark/blog7.png",
                                    alt: ""
                                })
                            })
                        }),
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                            className: "fugu--blog-content",
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                    className: "fugu--blog-date",
                                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("ul", {
                                        children: [
                                            /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                                    href: "#",
                                                    children: "Art & Analusis"
                                                })
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                                    href: "#",
                                                    children: "July 18, 2022"
                                                })
                                            })
                                        ]
                                    })
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                    className: "fugu--blog-title",
                                    children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                        href: "/single-blog-light",
                                        children: /*#__PURE__*/ jsx_runtime_.jsx("h3", {
                                            children: "Mekaverse Launch: Let’s take a step back with data!"
                                        })
                                    })
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                    href: "single-blog-light",
                                    legacyBehavior: true,
                                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("a", {
                                        className: "fugu--readmore-btn",
                                        href: "single-blog.html",
                                        children: [
                                            "Read more",
                                            /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                children: /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                                    src: "/images/svg2/arrow-right-white.svg",
                                                    alt: ""
                                                })
                                            })
                                        ]
                                    })
                                })
                            ]
                        })
                    ]
                })
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: "col-md-6",
                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                    className: "fugu--blog-wrap fugu--blog-wrap2 wow fadeInUpX",
                    "data-wow-delay": ".20s",
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            className: "fugu--blog-thumb",
                            children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                href: "/single-blog-light",
                                children: /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                    src: "/images/all-img/blog2/dark/blog8.png",
                                    alt: ""
                                })
                            })
                        }),
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                            className: "fugu--blog-content",
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                    className: "fugu--blog-date",
                                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("ul", {
                                        children: [
                                            /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                                    href: "#",
                                                    children: "Art & Analusis"
                                                })
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                                    href: "#",
                                                    children: "July 18, 2022"
                                                })
                                            })
                                        ]
                                    })
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                    className: "fugu--blog-title",
                                    children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                        href: "/single-blog-light",
                                        children: /*#__PURE__*/ jsx_runtime_.jsx("h3", {
                                            children: "We’ve valued one of the best NFT portfolios in the world!"
                                        })
                                    })
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                    href: "single-blog-light",
                                    legacyBehavior: true,
                                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("a", {
                                        className: "fugu--readmore-btn",
                                        href: "single-blog.html",
                                        children: [
                                            "Read more",
                                            /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                children: /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                                    src: "/images/svg2/arrow-right-white.svg",
                                                    alt: ""
                                                })
                                            })
                                        ]
                                    })
                                })
                            ]
                        })
                    ]
                })
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: "col-md-6",
                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                    className: "fugu--blog-wrap fugu--blog-wrap2 wow fadeInUpX",
                    "data-wow-delay": ".30s",
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            className: "fugu--blog-thumb",
                            children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                href: "/single-blog-light",
                                children: /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                    src: "/images/all-img/blog2/dark/blog9.png",
                                    alt: ""
                                })
                            })
                        }),
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                            className: "fugu--blog-content",
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                    className: "fugu--blog-date",
                                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("ul", {
                                        children: [
                                            /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                                    href: "#",
                                                    children: "Art & Analusis"
                                                })
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                                    href: "#",
                                                    children: "July 18, 2022"
                                                })
                                            })
                                        ]
                                    })
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                    className: "fugu--blog-title",
                                    children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                        href: "/single-blog-light",
                                        children: /*#__PURE__*/ jsx_runtime_.jsx("h3", {
                                            children: "The distribution of players on blockchain gaming"
                                        })
                                    })
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                    href: "single-blog-light",
                                    legacyBehavior: true,
                                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("a", {
                                        className: "fugu--readmore-btn",
                                        href: "single-blog.html",
                                        children: [
                                            "Read more",
                                            /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                children: /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                                    src: "/images/svg2/arrow-right-white.svg",
                                                    alt: ""
                                                })
                                            })
                                        ]
                                    })
                                })
                            ]
                        })
                    ]
                })
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: "col-md-6",
                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                    className: "fugu--blog-wrap fugu--blog-wrap2 wow fadeInUpX",
                    "data-wow-delay": ".40s",
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            className: "fugu--blog-thumb",
                            children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                href: "/single-blog-light",
                                children: /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                    src: "/images/all-img/blog2/dark/blog10.png",
                                    alt: ""
                                })
                            })
                        }),
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                            className: "fugu--blog-content",
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                    className: "fugu--blog-date",
                                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("ul", {
                                        children: [
                                            /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                                    href: "#",
                                                    children: "Art & Analusis"
                                                })
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                                    href: "#",
                                                    children: "July 18, 2022"
                                                })
                                            })
                                        ]
                                    })
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                    className: "fugu--blog-title",
                                    children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                        href: "/single-blog-light",
                                        children: /*#__PURE__*/ jsx_runtime_.jsx("h3", {
                                            children: "Celebrities and NFTs: what’s all the hype about?"
                                        })
                                    })
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                    href: "single-blog-light",
                                    legacyBehavior: true,
                                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("a", {
                                        className: "fugu--readmore-btn",
                                        href: "single-blog.html",
                                        children: [
                                            "Read more",
                                            /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                children: /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                                    src: "/images/svg2/arrow-right-white.svg",
                                                    alt: ""
                                                })
                                            })
                                        ]
                                    })
                                })
                            ]
                        })
                    ]
                })
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: "col-md-6",
                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                    className: "fugu--blog-wrap fugu--blog-wrap2 wow fadeInUpX",
                    "data-wow-delay": ".50s",
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            className: "fugu--blog-thumb",
                            children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                href: "/single-blog-light",
                                children: /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                    src: "/images/all-img/blog2/dark/blog11.png",
                                    alt: ""
                                })
                            })
                        }),
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                            className: "fugu--blog-content",
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                    className: "fugu--blog-date",
                                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("ul", {
                                        children: [
                                            /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                                    href: "#",
                                                    children: "Art & Analusis"
                                                })
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                                    href: "#",
                                                    children: "July 18, 2022"
                                                })
                                            })
                                        ]
                                    })
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                    className: "fugu--blog-title",
                                    children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                        href: "/single-blog-light",
                                        children: /*#__PURE__*/ jsx_runtime_.jsx("h3", {
                                            children: "What’s coming next after the rescue of the MoonCats?"
                                        })
                                    })
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                    href: "single-blog-light",
                                    legacyBehavior: true,
                                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("a", {
                                        className: "fugu--readmore-btn",
                                        href: "single-blog.html",
                                        children: [
                                            "Read more",
                                            /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                children: /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                                    src: "/images/svg2/arrow-right-white.svg",
                                                    alt: ""
                                                })
                                            })
                                        ]
                                    })
                                })
                            ]
                        })
                    ]
                })
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: "col-md-6",
                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                    className: "fugu--blog-wrap fugu--blog-wrap2 wow fadeInUpX",
                    "data-wow-delay": ".60s",
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            className: "fugu--blog-thumb",
                            children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                href: "/single-blog-light",
                                children: /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                    src: "/images/all-img/blog2/dark/blog12.png",
                                    alt: ""
                                })
                            })
                        }),
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                            className: "fugu--blog-content",
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                    className: "fugu--blog-date",
                                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("ul", {
                                        children: [
                                            /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                                    href: "#",
                                                    children: "Art & Analusis"
                                                })
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                                    href: "#",
                                                    children: "July 18, 2022"
                                                })
                                            })
                                        ]
                                    })
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                    className: "fugu--blog-title",
                                    children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                        href: "/single-blog-light",
                                        children: /*#__PURE__*/ jsx_runtime_.jsx("h3", {
                                            children: "The Matrix NFT Avatars are coming to Nifty’s!"
                                        })
                                    })
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                    href: "single-blog-light",
                                    legacyBehavior: true,
                                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("a", {
                                        className: "fugu--readmore-btn",
                                        href: "single-blog.html",
                                        children: [
                                            "Read more",
                                            /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                children: /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                                    src: "/images/svg2/arrow-right-white.svg",
                                                    alt: ""
                                                })
                                            })
                                        ]
                                    })
                                })
                            ]
                        })
                    ]
                })
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: "col-md-6",
                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                    className: "fugu--blog-wrap fugu--blog-wrap2 wow fadeInUpX",
                    "data-wow-delay": ".70s",
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            className: "fugu--blog-thumb",
                            children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                href: "/single-blog-light",
                                children: /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                    src: "/images/all-img/blog2/dark/blog13.png",
                                    alt: ""
                                })
                            })
                        }),
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                            className: "fugu--blog-content",
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                    className: "fugu--blog-date",
                                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("ul", {
                                        children: [
                                            /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                                    href: "#",
                                                    children: "Art & Analusis"
                                                })
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                                    href: "#",
                                                    children: "July 18, 2022"
                                                })
                                            })
                                        ]
                                    })
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                    className: "fugu--blog-title",
                                    children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                        href: "/single-blog-light",
                                        children: /*#__PURE__*/ jsx_runtime_.jsx("h3", {
                                            children: "Our NFT Market Report Q1 2022 is published"
                                        })
                                    })
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                    href: "single-blog-light",
                                    legacyBehavior: true,
                                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("a", {
                                        className: "fugu--readmore-btn",
                                        href: "single-blog.html",
                                        children: [
                                            "Read more",
                                            /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                children: /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                                    src: "/images/svg2/arrow-right-white.svg",
                                                    alt: ""
                                                })
                                            })
                                        ]
                                    })
                                })
                            ]
                        })
                    ]
                })
            })
        ]
    });
}

;// CONCATENATED MODULE: ./components/common/blog/blog-sidebar-section.js


/* eslint-disable @next/next/no-img-element */ function BlogSidebarSection() {
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        className: "fugu--blog-sidebar",
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: "fugu--blog-sidebar-item",
                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                    className: "fugu--newsletter fugu--search",
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx("input", {
                            type: "email",
                            placeholder: "Search..."
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("button", {
                            type: "submit",
                            id: "fugu--submit-btn",
                            children: "Search"
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("button", {
                            id: "fugu--search-btn",
                            children: /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                src: "/images/svg2/search.svg",
                                alt: ""
                            })
                        })
                    ]
                })
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: "fugu--blog-sidebar-item",
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("h4", {
                        children: "Categories:"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: "fugu--category",
                        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("ul", {
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                    children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                        href: "#",
                                        children: " Art & Analysis (04)"
                                    })
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                    children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                        href: "#",
                                        children: " Collectible (02)"
                                    })
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                    children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                        href: "#",
                                        children: " Metaverse (06)"
                                    })
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                    children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                        href: "#",
                                        children: " Utility (27)"
                                    })
                                })
                            ]
                        })
                    })
                ]
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: "fugu--blog-sidebar-item",
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("h4", {
                        children: "Latest Posts:"
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: "fugu--blog-post-wrap",
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                className: "fugu--blog-post-thumb",
                                children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                    href: "#",
                                    children: /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                        src: "/images/all-img/blog2/dark/blog1.png",
                                        alt: ""
                                    })
                                })
                            }),
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                className: "fugu--blog-post-data",
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                        href: "#",
                                        children: /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                            children: "July 27, 2022"
                                        })
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                        href: "#",
                                        children: /*#__PURE__*/ jsx_runtime_.jsx("h5", {
                                            children: "We’ve valued one of the biggest NFT portfolios in the world!"
                                        })
                                    })
                                ]
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: "fugu--blog-post-wrap",
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                className: "fugu--blog-post-thumb",
                                children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                    href: "#",
                                    children: /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                        src: "/images/all-img/blog2/dark/blog2.png",
                                        alt: ""
                                    })
                                })
                            }),
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                className: "fugu--blog-post-data",
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                        href: "#",
                                        children: /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                            children: "July 27, 2022"
                                        })
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                        href: "#",
                                        children: /*#__PURE__*/ jsx_runtime_.jsx("h5", {
                                            children: "One global or several tiny NFT communities? Traders version"
                                        })
                                    })
                                ]
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: "fugu--blog-post-wrap",
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                className: "fugu--blog-post-thumb",
                                children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                    href: "#",
                                    children: /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                        src: "/images/all-img/blog2/dark/blog3.png",
                                        alt: ""
                                    })
                                })
                            }),
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                className: "fugu--blog-post-data",
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                        href: "#",
                                        children: /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                            children: "July 27, 2022"
                                        })
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                        href: "#",
                                        children: /*#__PURE__*/ jsx_runtime_.jsx("h5", {
                                            children: "Always be on time on your metaverse event with Dwiss!"
                                        })
                                    })
                                ]
                            })
                        ]
                    })
                ]
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: "fugu--blog-sidebar-item",
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("h4", {
                        children: "Tags:"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: "fugu--tags",
                        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("ul", {
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                    children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                        href: "#",
                                        children: " NFTs art"
                                    })
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                    children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                        href: "#",
                                        children: " Cryptocurrency"
                                    })
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                    children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                        href: "#",
                                        children: " Digital "
                                    })
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                    children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                        href: "#",
                                        children: " Analysis"
                                    })
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                    children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                        href: "#",
                                        children: " Earning"
                                    })
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                    children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                        href: "#",
                                        children: " Creative works"
                                    })
                                })
                            ]
                        })
                    })
                ]
            })
        ]
    });
}

;// CONCATENATED MODULE: ./components/common/blog/blog-content-section.js




function BlogContentSection({ theme  }) {
    return /*#__PURE__*/ jsx_runtime_.jsx("div", {
        className: "fugu--blog-sidebar-section",
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
            className: "row",
            children: [
                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                    className: "col-lg-8",
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx(BlogPostSection, {}),
                        /*#__PURE__*/ jsx_runtime_.jsx(BlogPagination, {
                            theme: theme
                        })
                    ]
                }),
                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    className: "col-lg-4",
                    children: /*#__PURE__*/ jsx_runtime_.jsx(BlogSidebarSection, {})
                })
            ]
        })
    });
}


/***/ }),

/***/ 7359:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ BreadcrumbsSection)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);

function BreadcrumbsSection() {
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        className: "fugu--breadcrumbs-section",
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
            className: "fugu--breadcrumbs-data",
            children: [
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h1", {
                    children: "Blog & Resources"
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                    children: "Your source of market analysis, news, developments, and project reviews for the NFT ecosystem. Discover and keep up to date with the latest NFT."
                })
            ]
        })
    });
}


/***/ })

};
;