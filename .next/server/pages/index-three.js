"use strict";
(() => {
var exports = {};
exports.id = 1385;
exports.ids = [1385];
exports.modules = {

/***/ 7295:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ IndexThree),
  "getStaticProps": () => (/* binding */ getStaticProps)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: ./node_modules/next/dynamic.js
var dynamic = __webpack_require__(5152);
var dynamic_default = /*#__PURE__*/__webpack_require__.n(dynamic);
// EXTERNAL MODULE: external "next/head"
var head_ = __webpack_require__(968);
var head_default = /*#__PURE__*/__webpack_require__.n(head_);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);
// EXTERNAL MODULE: external "react-slick"
var external_react_slick_ = __webpack_require__(8096);
var external_react_slick_default = /*#__PURE__*/__webpack_require__.n(external_react_slick_);
;// CONCATENATED MODULE: ./components/common/sliders/card/card-slider-one.js
/* eslint-disable @next/next/no-img-element */ 


function NextArrow({ onClick  }) {
    return /*#__PURE__*/ jsx_runtime_.jsx("button", {
        className: "slide-arrow fugu--arrow",
        onClick: onClick
    });
}
function PrevArrow({ onClick  }) {
    return /*#__PURE__*/ jsx_runtime_.jsx("button", {
        className: "slide-arrow prev-arrow",
        onClick: onClick
    });
}
function CardSliderOne() {
    const settings = {
        infinite: true,
        slidesToShow: 4,
        slidesToScroll: 1,
        arrows: true,
        dots: false,
        autoplay: false,
        nextArrow: /*#__PURE__*/ jsx_runtime_.jsx(NextArrow, {}),
        prevArrow: /*#__PURE__*/ jsx_runtime_.jsx(PrevArrow, {}),
        responsive: [
            {
                breakpoint: 1400,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 767,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    arrows: false
                }
            }
        ]
    };
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        className: "fugu--slider-section",
        children: [
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: "container",
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: "fugu--section-title",
                        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                            className: "fugu--default-content content-sm",
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx("h2", {
                                    children: "This weeks trending collections"
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                    children: "Some of these upcoming trends could change the way we experience the web, brand products, buy and sell art, even create & experience music."
                                })
                            ]
                        })
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: "fugu--slider-one",
                        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)((external_react_slick_default()), {
                            ...settings,
                            children: [
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                    className: "fugu--card-wrap",
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                            className: "fugu--card-thumb",
                                            children: /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                                src: "/images/all-img/v3/card1.jpg",
                                                alt: ""
                                            })
                                        }),
                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                            className: "fugu--card-data",
                                            children: [
                                                /*#__PURE__*/ jsx_runtime_.jsx("h3", {
                                                    children: "Meta Frog Club: VIP Sale"
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                                    children: "Pre-sale : 18 May 2023"
                                                }),
                                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                    className: "fugu--card-footer",
                                                    children: [
                                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                            className: "fugu--card-footer-data",
                                                            children: [
                                                                /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                                    children: "Mint Price:"
                                                                }),
                                                                /*#__PURE__*/ jsx_runtime_.jsx("h4", {
                                                                    children: "0.194 ETH"
                                                                })
                                                            ]
                                                        }),
                                                        /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                                            href: "/",
                                                            legacyBehavior: true,
                                                            children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                                className: "fugu--btn btn-sm bg-white",
                                                                children: "Place a Bid"
                                                            })
                                                        })
                                                    ]
                                                })
                                            ]
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                    className: "fugu--card-wrap",
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                            className: "fugu--card-thumb",
                                            children: /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                                src: "/images/all-img/v3/card2.jpg",
                                                alt: ""
                                            })
                                        }),
                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                            className: "fugu--card-data",
                                            children: [
                                                /*#__PURE__*/ jsx_runtime_.jsx("h3", {
                                                    children: "The Exorians Universe"
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                                    children: "Pre-sale : 18 May 2023"
                                                }),
                                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                    className: "fugu--card-footer",
                                                    children: [
                                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                            className: "fugu--card-footer-data",
                                                            children: [
                                                                /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                                    children: "Mint Price:"
                                                                }),
                                                                /*#__PURE__*/ jsx_runtime_.jsx("h4", {
                                                                    children: "0.194 ETH"
                                                                })
                                                            ]
                                                        }),
                                                        /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                                            href: "/",
                                                            legacyBehavior: true,
                                                            children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                                className: "fugu--btn btn-sm bg-white",
                                                                children: "Place a Bid"
                                                            })
                                                        })
                                                    ]
                                                })
                                            ]
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                    className: "fugu--card-wrap",
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                            className: "fugu--card-thumb",
                                            children: /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                                src: "/images/all-img/v3/card3.jpg",
                                                alt: ""
                                            })
                                        }),
                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                            className: "fugu--card-data",
                                            children: [
                                                /*#__PURE__*/ jsx_runtime_.jsx("h3", {
                                                    children: "CryptoPunks 4D Official"
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                                    children: "Pre-sale : 18 May 2023"
                                                }),
                                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                    className: "fugu--card-footer",
                                                    children: [
                                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                            className: "fugu--card-footer-data",
                                                            children: [
                                                                /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                                    children: "Mint Price:"
                                                                }),
                                                                /*#__PURE__*/ jsx_runtime_.jsx("h4", {
                                                                    children: "0.194 ETH"
                                                                })
                                                            ]
                                                        }),
                                                        /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                                            href: "/",
                                                            legacyBehavior: true,
                                                            children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                                className: "fugu--btn btn-sm bg-white",
                                                                children: "Place a Bid"
                                                            })
                                                        })
                                                    ]
                                                })
                                            ]
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                    className: "fugu--card-wrap",
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                            className: "fugu--card-thumb",
                                            children: /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                                src: "/images/all-img/v3/card4.jpg",
                                                alt: ""
                                            })
                                        }),
                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                            className: "fugu--card-data",
                                            children: [
                                                /*#__PURE__*/ jsx_runtime_.jsx("h3", {
                                                    children: "The Bees Kingdom"
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                                    children: "Pre-sale : 18 May 2023"
                                                }),
                                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                    className: "fugu--card-footer",
                                                    children: [
                                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                            className: "fugu--card-footer-data",
                                                            children: [
                                                                /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                                    children: "Mint Price:"
                                                                }),
                                                                /*#__PURE__*/ jsx_runtime_.jsx("h4", {
                                                                    children: "0.194 ETH"
                                                                })
                                                            ]
                                                        }),
                                                        /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                                            href: "/",
                                                            legacyBehavior: true,
                                                            children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                                className: "fugu--btn btn-sm bg-white",
                                                                children: "Place a Bid"
                                                            })
                                                        })
                                                    ]
                                                })
                                            ]
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                    className: "fugu--card-wrap",
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                            className: "fugu--card-thumb",
                                            children: /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                                src: "/images/all-img/v3/card5.jpg",
                                                alt: ""
                                            })
                                        }),
                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                            className: "fugu--card-data",
                                            children: [
                                                /*#__PURE__*/ jsx_runtime_.jsx("h3", {
                                                    children: "CryptoPunks 4D Official"
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                                    children: "Pre-sale : 18 May 2023"
                                                }),
                                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                    className: "fugu--card-footer",
                                                    children: [
                                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                            className: "fugu--card-footer-data",
                                                            children: [
                                                                /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                                    children: "Mint Price:"
                                                                }),
                                                                /*#__PURE__*/ jsx_runtime_.jsx("h4", {
                                                                    children: "0.194 ETH"
                                                                })
                                                            ]
                                                        }),
                                                        /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                                            href: "/",
                                                            legacyBehavior: true,
                                                            children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                                className: "fugu--btn btn-sm bg-white",
                                                                children: "Place a Bid"
                                                            })
                                                        })
                                                    ]
                                                })
                                            ]
                                        })
                                    ]
                                })
                            ]
                        })
                    })
                ]
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: "fugu--shape1",
                children: /*#__PURE__*/ jsx_runtime_.jsx("img", {
                    src: "/images/shape2/shape1.png",
                    alt: ""
                })
            })
        ]
    });
}

// EXTERNAL MODULE: ./components/common/sliders/text/text-slider-two.js
var text_slider_two = __webpack_require__(4178);
// EXTERNAL MODULE: external "react-countup"
var external_react_countup_ = __webpack_require__(609);
var external_react_countup_default = /*#__PURE__*/__webpack_require__.n(external_react_countup_);
;// CONCATENATED MODULE: ./components/home-three/hero-section.js
/* eslint-disable @next/next/no-img-element */ 


function HeroSection() {
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        className: "fugu--hero-section",
        style: {
            backgroundImage: "url(/images/all-img/v3/hero-bg.png)"
        },
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                id: "fugu--counter"
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: "container",
                children: [
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: "row",
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                className: "col-lg-7",
                                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                    className: "fugu--hero-content",
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx("h1", {
                                            className: "wow fadeInUpX",
                                            "data-wow-delay": "0s",
                                            children: "Discover the latest digital art and collect NFTs"
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                            className: "wow fadeInUpX",
                                            "data-wow-delay": "0.10s",
                                            children: "The largest NFT marketplace. We make NFTs easier and more efficient for culture and creativity, built efficiently for you."
                                        }),
                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                            className: "fugu--btn-wrap fugu--hero-btn wow fadeInUpX",
                                            "data-wow-delay": "0.20s",
                                            children: [
                                                /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                                    href: "#",
                                                    legacyBehavior: true,
                                                    children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                        className: "fugu--btn bg-gray active",
                                                        children: "Get Started"
                                                    })
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                                    href: "#",
                                                    legacyBehavior: true,
                                                    children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                        className: "fugu--btn bg-gray",
                                                        children: "View Artwork"
                                                    })
                                                })
                                            ]
                                        }),
                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                            className: "fugu--counter-wrap wow fadeInUpX",
                                            "data-wow-delay": "0.30s",
                                            children: [
                                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                    className: "fugu--counter-data",
                                                    children: [
                                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("h2", {
                                                            children: [
                                                                /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                                    "data-percentage": "45",
                                                                    className: "fugu--counter",
                                                                    children: /*#__PURE__*/ jsx_runtime_.jsx((external_react_countup_default()), {
                                                                        end: 45
                                                                    })
                                                                }),
                                                                /*#__PURE__*/ jsx_runtime_.jsx("strong", {
                                                                    children: "K"
                                                                })
                                                            ]
                                                        }),
                                                        /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                                            children: "Artwork"
                                                        })
                                                    ]
                                                }),
                                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                    className: "fugu--counter-data",
                                                    children: [
                                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("h2", {
                                                            children: [
                                                                /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                                    "data-percentage": "86",
                                                                    className: "fugu--counter",
                                                                    children: /*#__PURE__*/ jsx_runtime_.jsx((external_react_countup_default()), {
                                                                        end: 86
                                                                    })
                                                                }),
                                                                /*#__PURE__*/ jsx_runtime_.jsx("strong", {
                                                                    children: "K"
                                                                })
                                                            ]
                                                        }),
                                                        /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                                            children: "Auction"
                                                        })
                                                    ]
                                                }),
                                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                    className: "fugu--counter-data",
                                                    children: [
                                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("h2", {
                                                            children: [
                                                                /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                                    "data-percentage": "32",
                                                                    className: "fugu--counter",
                                                                    children: /*#__PURE__*/ jsx_runtime_.jsx((external_react_countup_default()), {
                                                                        end: 32
                                                                    })
                                                                }),
                                                                /*#__PURE__*/ jsx_runtime_.jsx("strong", {
                                                                    children: "K"
                                                                })
                                                            ]
                                                        }),
                                                        /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                                            children: "Artist"
                                                        })
                                                    ]
                                                })
                                            ]
                                        })
                                    ]
                                })
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                className: "col-lg-5",
                                children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                    className: "fugu--hero-right",
                                    id: "rotateOne",
                                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                        className: "fugu--card-wrap",
                                        children: [
                                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                className: "fugu--card-thumb",
                                                children: /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                                    src: "/images/all-img/v3/hero-thumb2.png",
                                                    alt: ""
                                                })
                                            }),
                                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                className: "fugu--card-data",
                                                children: [
                                                    /*#__PURE__*/ jsx_runtime_.jsx("h3", {
                                                        children: "The Exorians Universe"
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                                        children: "Pre-sale : 18 May 2023"
                                                    }),
                                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                        className: "fugu--card-footer",
                                                        children: [
                                                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                                className: "fugu--card-footer-data",
                                                                children: [
                                                                    /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                                        children: "Mint Price:"
                                                                    }),
                                                                    /*#__PURE__*/ jsx_runtime_.jsx("h4", {
                                                                        children: "0.194 ETH"
                                                                    })
                                                                ]
                                                            }),
                                                            /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                                                href: "#",
                                                                legacyBehavior: true,
                                                                children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                                    className: "fugu--btn btn-sm bg-white",
                                                                    children: "Place a Bid"
                                                                })
                                                            })
                                                        ]
                                                    })
                                                ]
                                            })
                                        ]
                                    })
                                })
                            })
                        ]
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: "fugu--hero-shape1",
                        children: /*#__PURE__*/ jsx_runtime_.jsx("img", {
                            src: "/images/all-img/v3/shape-hero1.png",
                            alt: ""
                        })
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: "fugu--hero-shape2"
                    })
                ]
            })
        ]
    });
}

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
;// CONCATENATED MODULE: ./components/home-three/news-letter.js
/* eslint-disable @next/next/no-img-element */ 

function NewsLetter() {
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        className: "fugu--newslatter-section",
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: "container",
                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                    className: "fugu--newslatter-wrap",
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            className: "fugu--section-title",
                            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                className: "fugu--default-content content-sm",
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx("h2", {
                                        children: "Subscribe to get the latest news updates about NFTS"
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                        children: "Get regular updates about interesting & secret upcoming NFT projects & events that are coming exclusively on our site."
                                    })
                                ]
                            })
                        }),
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                            className: "fugu--newsletter",
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx("input", {
                                    type: "email",
                                    placeholder: "Type your email here"
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("button", {
                                    type: "submit",
                                    id: "fugu--submit-btn",
                                    children: "Subscribe"
                                })
                            ]
                        })
                    ]
                })
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: "fugu--shape4",
                children: /*#__PURE__*/ jsx_runtime_.jsx("img", {
                    src: "/images/shape2/shape4.png",
                    alt: ""
                })
            })
        ]
    });
}

;// CONCATENATED MODULE: ./components/home-three/nft-roadmap.js
/* eslint-disable react/no-unescaped-entities */ /* eslint-disable @next/next/no-img-element */ 
function NftRoadMap() {
    return /*#__PURE__*/ jsx_runtime_.jsx("div", {
        className: "fugu--roadmap-section",
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
            className: "container",
            children: [
                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    className: "fugu--section-title",
                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: "fugu--default-content content-sm",
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx("h2", {
                                children: "Create and sell your NFTs"
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                children: "Anyone can make a profile on Foundation but only selected creators can mint NFTs & published a complete guide."
                            })
                        ]
                    })
                }),
                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                    className: "row",
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            className: "col-xl-3 col-md-6",
                            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                className: "fugu--iconbox-wrap wow fadeInUpX",
                                "data-wow-delay": "0s",
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                        className: "fugu--iconbox-thumb",
                                        children: /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                            src: "/images/all-img/v3/roadmap-icon1.png",
                                            alt: ""
                                        })
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                        className: "fugu--iconbox-data",
                                        children: [
                                            /*#__PURE__*/ jsx_runtime_.jsx("h4", {
                                                children: "Set up your wallet"
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                                children: "Once you've set up your wallet of choice, connect it by clicking the wallet icon easily."
                                            })
                                        ]
                                    })
                                ]
                            })
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            className: "col-xl-3 col-md-6",
                            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                className: "fugu--iconbox-wrap wow fadeInUpX",
                                "data-wow-delay": "0.10s",
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                        className: "fugu--iconbox-thumb",
                                        children: /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                            src: "/images/all-img/v3/roadmap-icon2.png",
                                            alt: ""
                                        })
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                        className: "fugu--iconbox-data",
                                        children: [
                                            /*#__PURE__*/ jsx_runtime_.jsx("h4", {
                                                children: "Create collection"
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                                children: "Click my collections and set up your collection. Add social links a description and others."
                                            })
                                        ]
                                    })
                                ]
                            })
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            className: "col-xl-3 col-md-6",
                            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                className: "fugu--iconbox-wrap wow fadeInUpX",
                                "data-wow-delay": "0.20s",
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                        className: "fugu--iconbox-thumb",
                                        children: /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                            src: "/images/all-img/v3/roadmap-icon3.png",
                                            alt: ""
                                        })
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                        className: "fugu--iconbox-data",
                                        children: [
                                            /*#__PURE__*/ jsx_runtime_.jsx("h4", {
                                                children: "Add your NFT"
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                                children: "Upload your work (Image, art, video, audio, or 3D art) add a title and description."
                                            })
                                        ]
                                    })
                                ]
                            })
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            className: "col-xl-3 col-md-6",
                            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                className: "fugu--iconbox-wrap wow fadeInUpX",
                                "data-wow-delay": "0.30s",
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                        className: "fugu--iconbox-thumb",
                                        children: /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                            src: "/images/all-img/v3/roadmap-icon4.png",
                                            alt: ""
                                        })
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                        className: "fugu--iconbox-data",
                                        children: [
                                            /*#__PURE__*/ jsx_runtime_.jsx("h4", {
                                                children: "List them for sale"
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                                children: "Choose between action, fixed-price listings & pricing listings. We help you sell them."
                                            })
                                        ]
                                    })
                                ]
                            })
                        })
                    ]
                })
            ]
        })
    });
}

// EXTERNAL MODULE: ./components/home-three/Team.js
var Team = __webpack_require__(5940);
;// CONCATENATED MODULE: ./pages/index-three.js









const FilterGalarryOne = dynamic_default()(()=>__webpack_require__.e(/* import() */ 2845).then(__webpack_require__.bind(__webpack_require__, 2845)), {
    loadableGenerated: {
        modules: [
            "index-three.js -> " + "../components/common/filter-gallary/filter-gallary-one"
        ]
    },
    ssr: false
});
function IndexThree() {
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx((head_default()), {
                children: /*#__PURE__*/ jsx_runtime_.jsx("title", {
                    children: "fugu - index o3"
                })
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(HeroSection, {}),
            /*#__PURE__*/ jsx_runtime_.jsx(CardSliderOne, {}),
            /*#__PURE__*/ jsx_runtime_.jsx(FilterGalarryOne, {}),
            /*#__PURE__*/ jsx_runtime_.jsx(text_slider_two/* default */.Z, {}),
            /*#__PURE__*/ jsx_runtime_.jsx(Team/* default */.Z, {}),
            /*#__PURE__*/ jsx_runtime_.jsx(NftRoadMap, {}),
            /*#__PURE__*/ jsx_runtime_.jsx(NewsLetter, {})
        ]
    });
}
async function getStaticProps() {
    return {
        props: {
            header: "three",
            footer: "three"
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

/***/ 968:
/***/ ((module) => {

module.exports = require("next/head");

/***/ }),

/***/ 6689:
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ 609:
/***/ ((module) => {

module.exports = require("react-countup");

/***/ }),

/***/ 6405:
/***/ ((module) => {

module.exports = require("react-dom");

/***/ }),

/***/ 8096:
/***/ ((module) => {

module.exports = require("react-slick");

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
var __webpack_exports__ = __webpack_require__.X(0, [676,1664,5152,4766], () => (__webpack_exec__(7295)));
module.exports = __webpack_exports__;

})();