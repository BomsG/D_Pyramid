"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/page",{

/***/ "(app-pages-browser)/./src/components/OurGallery.jsx":
/*!***************************************!*\
  !*** ./src/components/OurGallery.jsx ***!
  \***************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ OurGallery; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_slick__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-slick */ \"(app-pages-browser)/./node_modules/react-slick/lib/index.js\");\n/* harmony import */ var slick_carousel_slick_slick_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! slick-carousel/slick/slick.css */ \"(app-pages-browser)/./node_modules/slick-carousel/slick/slick.css\");\n/* harmony import */ var slick_carousel_slick_slick_theme_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! slick-carousel/slick/slick-theme.css */ \"(app-pages-browser)/./node_modules/slick-carousel/slick/slick-theme.css\");\n/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! framer-motion */ \"(app-pages-browser)/./node_modules/framer-motion/dist/es/value/use-scroll.mjs\");\n/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! framer-motion */ \"(app-pages-browser)/./node_modules/framer-motion/dist/es/value/use-transform.mjs\");\n/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! framer-motion */ \"(app-pages-browser)/./node_modules/framer-motion/dist/es/render/dom/motion.mjs\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\n\n// Custom Arrow Components\nconst PrevArrow = (param)=>{\n    let { onClick } = param;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n        onClick: onClick,\n        className: \"slick-arrow slick-prev\",\n        style: {\n            left: \"10px\",\n            zIndex: 1,\n            background: \"rgba(0,0,0,0.5)\",\n            color: \"#fff\",\n            border: \"none\",\n            padding: \"10px\",\n            borderRadius: \"50%\"\n        },\n        children: \"◀\"\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\HP\\\\Documents\\\\pyrammid\\\\src\\\\components\\\\OurGallery.jsx\",\n        lineNumber: 10,\n        columnNumber: 3\n    }, undefined);\n};\n_c = PrevArrow;\nconst NextArrow = (param)=>{\n    let { onClick } = param;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n        onClick: onClick,\n        className: \"slick-arrow slick-next\",\n        style: {\n            right: \"10px\",\n            zIndex: 1,\n            background: \"rgba(0,0,0,0.5)\",\n            color: \"#fff\",\n            border: \"none\",\n            padding: \"10px\",\n            borderRadius: \"50%\"\n        },\n        children: \"▶\"\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\HP\\\\Documents\\\\pyrammid\\\\src\\\\components\\\\OurGallery.jsx\",\n        lineNumber: 28,\n        columnNumber: 3\n    }, undefined);\n};\n_c1 = NextArrow;\nfunction OurGallery() {\n    _s();\n    const settings = {\n        dots: true,\n        infinite: true,\n        speed: 500,\n        slidesToShow: 1,\n        slidesToScroll: 1,\n        adaptiveHeight: true,\n        autoplay: true,\n        autoplaySpeed: 3000,\n        prevArrow: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(PrevArrow, {}, void 0, false, {\n            fileName: \"C:\\\\Users\\\\HP\\\\Documents\\\\pyrammid\\\\src\\\\components\\\\OurGallery.jsx\",\n            lineNumber: 55,\n            columnNumber: 16\n        }, this),\n        nextArrow: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(NextArrow, {}, void 0, false, {\n            fileName: \"C:\\\\Users\\\\HP\\\\Documents\\\\pyrammid\\\\src\\\\components\\\\OurGallery.jsx\",\n            lineNumber: 56,\n            columnNumber: 16\n        }, this),\n        responsive: [\n            {\n                breakpoint: 1024,\n                settings: {\n                    slidesToShow: 3,\n                    slidesToScroll: 1\n                }\n            },\n            {\n                breakpoint: 768,\n                settings: {\n                    slidesToShow: 1,\n                    slidesToScroll: 1\n                }\n            }\n        ]\n    };\n    const ref = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)();\n    const { scrollYProgress } = (0,framer_motion__WEBPACK_IMPORTED_MODULE_5__.useScroll)({\n        target: ref,\n        offset: [\n            \"0 1\",\n            \"1.3\"\n        ]\n    });\n    const scaleProgress = (0,framer_motion__WEBPACK_IMPORTED_MODULE_6__.useTransform)(scrollYProgress, [\n        0,\n        1\n    ], [\n        0.7,\n        1\n    ]);\n    const scaleOpacity = (0,framer_motion__WEBPACK_IMPORTED_MODULE_6__.useTransform)(scrollYProgress, [\n        0,\n        1\n    ], [\n        0.8,\n        1\n    ]);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"section\", {\n        className: \"w-full\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"container max-w-screen-xl mx-auto px-4\",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"section\", {\n                    className: \"mt-12\",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"container max-w-screen-xl mx-auto px-4 xl:relative\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                                className: \"font-semibold text-gray-900 text-2xl md:text-4xl text-center leading-normal mb-2\",\n                                children: \"Our Gallery\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\HP\\\\Documents\\\\pyrammid\\\\src\\\\components\\\\OurGallery.jsx\",\n                                lineNumber: 88,\n                                columnNumber: 13\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                className: \"font-normal text-gray-400 text-lg md:text-xl text-center\",\n                                children: \"We're exceptional at what we do\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\HP\\\\Documents\\\\pyrammid\\\\src\\\\components\\\\OurGallery.jsx\",\n                                lineNumber: 91,\n                                columnNumber: 13\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\HP\\\\Documents\\\\pyrammid\\\\src\\\\components\\\\OurGallery.jsx\",\n                        lineNumber: 87,\n                        columnNumber: 11\n                    }, this)\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\HP\\\\Documents\\\\pyrammid\\\\src\\\\components\\\\OurGallery.jsx\",\n                    lineNumber: 86,\n                    columnNumber: 9\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_7__.motion.div, {\n                    className: \"relative\" // Ensure container is positioned for arrow positioning\n                    ,\n                    ref: ref,\n                    style: {\n                        scale: scaleProgress,\n                        opacity: scaleOpacity\n                    },\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_slick__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                        ...settings,\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                                    src: \"/images/roof1.jpg\",\n                                    alt: \"Gallery Image 1\",\n                                    className: \"w-full sm:h-[600px] h-[300px] object-cover hover:opacity-75 transition ease-in-out duration-500\"\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\HP\\\\Documents\\\\pyrammid\\\\src\\\\components\\\\OurGallery.jsx\",\n                                    lineNumber: 107,\n                                    columnNumber: 15\n                                }, this)\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\HP\\\\Documents\\\\pyrammid\\\\src\\\\components\\\\OurGallery.jsx\",\n                                lineNumber: 106,\n                                columnNumber: 13\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                                    src: \"/images/roof3.jpg\",\n                                    alt: \"Gallery Image 2\",\n                                    className: \"w-full sm:h-[600px] h-[300px] object-cover hover:opacity-75 transition ease-in-out duration-500\"\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\HP\\\\Documents\\\\pyrammid\\\\src\\\\components\\\\OurGallery.jsx\",\n                                    lineNumber: 114,\n                                    columnNumber: 15\n                                }, this)\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\HP\\\\Documents\\\\pyrammid\\\\src\\\\components\\\\OurGallery.jsx\",\n                                lineNumber: 113,\n                                columnNumber: 13\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                                    src: \"/images/roof4.jpeg\",\n                                    alt: \"Gallery Image 3\",\n                                    className: \"w-full sm:h-[600px] h-[300px] object-cover hover:opacity-75 transition ease-in-out duration-500\"\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\HP\\\\Documents\\\\pyrammid\\\\src\\\\components\\\\OurGallery.jsx\",\n                                    lineNumber: 121,\n                                    columnNumber: 15\n                                }, this)\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\HP\\\\Documents\\\\pyrammid\\\\src\\\\components\\\\OurGallery.jsx\",\n                                lineNumber: 120,\n                                columnNumber: 13\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                                    src: \"/images/heroo1.jpeg\",\n                                    alt: \"Gallery Image 4\",\n                                    className: \"w-full sm:h-[600px] h-[300px] object-cover hover:opacity-75 transition ease-in-out duration-500\"\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\HP\\\\Documents\\\\pyrammid\\\\src\\\\components\\\\OurGallery.jsx\",\n                                    lineNumber: 128,\n                                    columnNumber: 15\n                                }, this)\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\HP\\\\Documents\\\\pyrammid\\\\src\\\\components\\\\OurGallery.jsx\",\n                                lineNumber: 127,\n                                columnNumber: 13\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                                    src: \"/images/hero4.jpeg\",\n                                    alt: \"Gallery Image 5\",\n                                    className: \"w-full sm:h-[600px] h-[300px] object-cover hover:opacity-75 transition ease-in-out duration-500\"\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\HP\\\\Documents\\\\pyrammid\\\\src\\\\components\\\\OurGallery.jsx\",\n                                    lineNumber: 135,\n                                    columnNumber: 15\n                                }, this)\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\HP\\\\Documents\\\\pyrammid\\\\src\\\\components\\\\OurGallery.jsx\",\n                                lineNumber: 134,\n                                columnNumber: 13\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\HP\\\\Documents\\\\pyrammid\\\\src\\\\components\\\\OurGallery.jsx\",\n                        lineNumber: 105,\n                        columnNumber: 11\n                    }, this)\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\HP\\\\Documents\\\\pyrammid\\\\src\\\\components\\\\OurGallery.jsx\",\n                    lineNumber: 97,\n                    columnNumber: 9\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"C:\\\\Users\\\\HP\\\\Documents\\\\pyrammid\\\\src\\\\components\\\\OurGallery.jsx\",\n            lineNumber: 85,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\HP\\\\Documents\\\\pyrammid\\\\src\\\\components\\\\OurGallery.jsx\",\n        lineNumber: 84,\n        columnNumber: 5\n    }, this);\n}\n_s(OurGallery, \"MDzhecrxA0dMugm9sJMGX2N6ix8=\", false, function() {\n    return [\n        framer_motion__WEBPACK_IMPORTED_MODULE_5__.useScroll,\n        framer_motion__WEBPACK_IMPORTED_MODULE_6__.useTransform,\n        framer_motion__WEBPACK_IMPORTED_MODULE_6__.useTransform\n    ];\n});\n_c2 = OurGallery;\nvar _c, _c1, _c2;\n$RefreshReg$(_c, \"PrevArrow\");\n$RefreshReg$(_c1, \"NextArrow\");\n$RefreshReg$(_c2, \"OurGallery\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9jb21wb25lbnRzL091ckdhbGxlcnkuanN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7OztBQUNzQztBQUNMO0FBQ087QUFDTTtBQUNrQjtBQUVoRSwwQkFBMEI7QUFDMUIsTUFBTU0sWUFBWTtRQUFDLEVBQUVDLE9BQU8sRUFBRTt5QkFDNUIsOERBQUNDO1FBQ0NELFNBQVNBO1FBQ1RFLFdBQVU7UUFDVkMsT0FBTztZQUNMQyxNQUFNO1lBQ05DLFFBQVE7WUFDUkMsWUFBWTtZQUNaQyxPQUFPO1lBQ1BDLFFBQVE7WUFDUkMsU0FBUztZQUNUQyxjQUFjO1FBQ2hCO2tCQUNEOzs7Ozs7O0tBYkdYO0FBa0JOLE1BQU1ZLFlBQVk7UUFBQyxFQUFFWCxPQUFPLEVBQUU7eUJBQzVCLDhEQUFDQztRQUNDRCxTQUFTQTtRQUNURSxXQUFVO1FBQ1ZDLE9BQU87WUFDTFMsT0FBTztZQUNQUCxRQUFRO1lBQ1JDLFlBQVk7WUFDWkMsT0FBTztZQUNQQyxRQUFRO1lBQ1JDLFNBQVM7WUFDVEMsY0FBYztRQUNoQjtrQkFDRDs7Ozs7OztNQWJHQztBQWtCUyxTQUFTRTs7SUFDdEIsTUFBTUMsV0FBVztRQUNmQyxNQUFNO1FBQ05DLFVBQVU7UUFDVkMsT0FBTztRQUNQQyxjQUFjO1FBQ2RDLGdCQUFnQjtRQUNoQkMsZ0JBQWdCO1FBQ2hCQyxVQUFVO1FBQ1ZDLGVBQWU7UUFDZkMseUJBQVcsOERBQUN4Qjs7Ozs7UUFDWnlCLHlCQUFXLDhEQUFDYjs7Ozs7UUFDWmMsWUFBWTtZQUNWO2dCQUNFQyxZQUFZO2dCQUNaWixVQUFVO29CQUNSSSxjQUFjO29CQUNkQyxnQkFBZ0I7Z0JBQ2xCO1lBQ0Y7WUFDQTtnQkFDRU8sWUFBWTtnQkFDWlosVUFBVTtvQkFDUkksY0FBYztvQkFDZEMsZ0JBQWdCO2dCQUNsQjtZQUNGO1NBQ0Q7SUFDSDtJQUVBLE1BQU1RLE1BQU1qQyw2Q0FBTUE7SUFDbEIsTUFBTSxFQUFFa0MsZUFBZSxFQUFFLEdBQUdoQyx3REFBU0EsQ0FBQztRQUNwQ2lDLFFBQVFGO1FBQ1JHLFFBQVE7WUFBQztZQUFPO1NBQU07SUFDeEI7SUFDQSxNQUFNQyxnQkFBZ0JqQywyREFBWUEsQ0FBQzhCLGlCQUFpQjtRQUFDO1FBQUc7S0FBRSxFQUFFO1FBQUM7UUFBSztLQUFFO0lBQ3BFLE1BQU1JLGVBQWVsQywyREFBWUEsQ0FBQzhCLGlCQUFpQjtRQUFDO1FBQUc7S0FBRSxFQUFFO1FBQUM7UUFBSztLQUFFO0lBRW5FLHFCQUNFLDhEQUFDSztRQUFRL0IsV0FBVTtrQkFDakIsNEVBQUNnQztZQUFJaEMsV0FBVTs7OEJBQ2IsOERBQUMrQjtvQkFBUS9CLFdBQVU7OEJBQ2pCLDRFQUFDZ0M7d0JBQUloQyxXQUFVOzswQ0FDYiw4REFBQ2lDO2dDQUFHakMsV0FBVTswQ0FBbUY7Ozs7OzswQ0FHakcsOERBQUNrQztnQ0FBRWxDLFdBQVU7MENBQTJEOzs7Ozs7Ozs7Ozs7Ozs7Ozs4QkFNNUUsOERBQUNMLGlEQUFNQSxDQUFDcUMsR0FBRztvQkFDVGhDLFdBQVUsV0FBVyx1REFBdUQ7O29CQUM1RXlCLEtBQUtBO29CQUNMeEIsT0FBTzt3QkFDTGtDLE9BQU9OO3dCQUNQTyxTQUFTTjtvQkFDWDs4QkFFQSw0RUFBQ3JDLG1EQUFNQTt3QkFBRSxHQUFHbUIsUUFBUTs7MENBQ2xCLDhEQUFDb0I7MENBQ0MsNEVBQUNLO29DQUNDQyxLQUFJO29DQUNKQyxLQUFJO29DQUNKdkMsV0FBVTs7Ozs7Ozs7Ozs7MENBR2QsOERBQUNnQzswQ0FDQyw0RUFBQ0s7b0NBQ0NDLEtBQUk7b0NBQ0pDLEtBQUk7b0NBQ0p2QyxXQUFVOzs7Ozs7Ozs7OzswQ0FHZCw4REFBQ2dDOzBDQUNDLDRFQUFDSztvQ0FDQ0MsS0FBSTtvQ0FDSkMsS0FBSTtvQ0FDSnZDLFdBQVU7Ozs7Ozs7Ozs7OzBDQUdkLDhEQUFDZ0M7MENBQ0MsNEVBQUNLO29DQUNDQyxLQUFJO29DQUNKQyxLQUFJO29DQUNKdkMsV0FBVTs7Ozs7Ozs7Ozs7MENBR2QsOERBQUNnQzswQ0FDQyw0RUFBQ0s7b0NBQ0NDLEtBQUk7b0NBQ0pDLEtBQUk7b0NBQ0p2QyxXQUFVOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFRMUI7R0FyR3dCVzs7UUErQk1qQixvREFBU0E7UUFJZkUsdURBQVlBO1FBQ2JBLHVEQUFZQTs7O01BcENYZSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvY29tcG9uZW50cy9PdXJHYWxsZXJ5LmpzeD8yZjQ5Il0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIGNsaWVudFwiO1xuaW1wb3J0IFJlYWN0LCB7IHVzZVJlZiB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IFNsaWRlciBmcm9tIFwicmVhY3Qtc2xpY2tcIjtcbmltcG9ydCBcInNsaWNrLWNhcm91c2VsL3NsaWNrL3NsaWNrLmNzc1wiO1xuaW1wb3J0IFwic2xpY2stY2Fyb3VzZWwvc2xpY2svc2xpY2stdGhlbWUuY3NzXCI7XG5pbXBvcnQgeyB1c2VTY3JvbGwsIG1vdGlvbiwgdXNlVHJhbnNmb3JtIH0gZnJvbSBcImZyYW1lci1tb3Rpb25cIjtcblxuLy8gQ3VzdG9tIEFycm93IENvbXBvbmVudHNcbmNvbnN0IFByZXZBcnJvdyA9ICh7IG9uQ2xpY2sgfSkgPT4gKFxuICA8YnV0dG9uXG4gICAgb25DbGljaz17b25DbGlja31cbiAgICBjbGFzc05hbWU9XCJzbGljay1hcnJvdyBzbGljay1wcmV2XCJcbiAgICBzdHlsZT17e1xuICAgICAgbGVmdDogXCIxMHB4XCIsXG4gICAgICB6SW5kZXg6IDEsXG4gICAgICBiYWNrZ3JvdW5kOiBcInJnYmEoMCwwLDAsMC41KVwiLFxuICAgICAgY29sb3I6IFwiI2ZmZlwiLFxuICAgICAgYm9yZGVyOiBcIm5vbmVcIixcbiAgICAgIHBhZGRpbmc6IFwiMTBweFwiLFxuICAgICAgYm9yZGVyUmFkaXVzOiBcIjUwJVwiLFxuICAgIH19XG4gID5cbiAgICAmIzk2NjQ7XG4gIDwvYnV0dG9uPlxuKTtcblxuY29uc3QgTmV4dEFycm93ID0gKHsgb25DbGljayB9KSA9PiAoXG4gIDxidXR0b25cbiAgICBvbkNsaWNrPXtvbkNsaWNrfVxuICAgIGNsYXNzTmFtZT1cInNsaWNrLWFycm93IHNsaWNrLW5leHRcIlxuICAgIHN0eWxlPXt7XG4gICAgICByaWdodDogXCIxMHB4XCIsXG4gICAgICB6SW5kZXg6IDEsXG4gICAgICBiYWNrZ3JvdW5kOiBcInJnYmEoMCwwLDAsMC41KVwiLFxuICAgICAgY29sb3I6IFwiI2ZmZlwiLFxuICAgICAgYm9yZGVyOiBcIm5vbmVcIixcbiAgICAgIHBhZGRpbmc6IFwiMTBweFwiLFxuICAgICAgYm9yZGVyUmFkaXVzOiBcIjUwJVwiLFxuICAgIH19XG4gID5cbiAgICAmIzk2NTQ7XG4gIDwvYnV0dG9uPlxuKTtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gT3VyR2FsbGVyeSgpIHtcbiAgY29uc3Qgc2V0dGluZ3MgPSB7XG4gICAgZG90czogdHJ1ZSxcbiAgICBpbmZpbml0ZTogdHJ1ZSxcbiAgICBzcGVlZDogNTAwLFxuICAgIHNsaWRlc1RvU2hvdzogMSxcbiAgICBzbGlkZXNUb1Njcm9sbDogMSxcbiAgICBhZGFwdGl2ZUhlaWdodDogdHJ1ZSxcbiAgICBhdXRvcGxheTogdHJ1ZSxcbiAgICBhdXRvcGxheVNwZWVkOiAzMDAwLFxuICAgIHByZXZBcnJvdzogPFByZXZBcnJvdyAvPixcbiAgICBuZXh0QXJyb3c6IDxOZXh0QXJyb3cgLz4sXG4gICAgcmVzcG9uc2l2ZTogW1xuICAgICAge1xuICAgICAgICBicmVha3BvaW50OiAxMDI0LCAvLyBBZGp1c3QgYnJlYWtwb2ludCBmb3IgdGFibGV0cyBhbmQgbGFyZ2VyIHNjcmVlbnNcbiAgICAgICAgc2V0dGluZ3M6IHtcbiAgICAgICAgICBzbGlkZXNUb1Nob3c6IDMsXG4gICAgICAgICAgc2xpZGVzVG9TY3JvbGw6IDEsXG4gICAgICAgIH0sXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBicmVha3BvaW50OiA3NjgsIC8vIEZvciBtb2JpbGUgZGV2aWNlcywgdXNlIHRoZSBkZWZhdWx0IHNldHRpbmdzXG4gICAgICAgIHNldHRpbmdzOiB7XG4gICAgICAgICAgc2xpZGVzVG9TaG93OiAxLFxuICAgICAgICAgIHNsaWRlc1RvU2Nyb2xsOiAxLFxuICAgICAgICB9LFxuICAgICAgfSxcbiAgICBdLFxuICB9O1xuXG4gIGNvbnN0IHJlZiA9IHVzZVJlZigpO1xuICBjb25zdCB7IHNjcm9sbFlQcm9ncmVzcyB9ID0gdXNlU2Nyb2xsKHtcbiAgICB0YXJnZXQ6IHJlZixcbiAgICBvZmZzZXQ6IFtcIjAgMVwiLCBcIjEuM1wiXSxcbiAgfSk7XG4gIGNvbnN0IHNjYWxlUHJvZ3Jlc3MgPSB1c2VUcmFuc2Zvcm0oc2Nyb2xsWVByb2dyZXNzLCBbMCwgMV0sIFswLjcsIDFdKTtcbiAgY29uc3Qgc2NhbGVPcGFjaXR5ID0gdXNlVHJhbnNmb3JtKHNjcm9sbFlQcm9ncmVzcywgWzAsIDFdLCBbMC44LCAxXSk7XG5cbiAgcmV0dXJuIChcbiAgICA8c2VjdGlvbiBjbGFzc05hbWU9XCJ3LWZ1bGxcIj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyIG1heC13LXNjcmVlbi14bCBteC1hdXRvIHB4LTRcIj5cbiAgICAgICAgPHNlY3Rpb24gY2xhc3NOYW1lPVwibXQtMTJcIj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lciBtYXgtdy1zY3JlZW4teGwgbXgtYXV0byBweC00IHhsOnJlbGF0aXZlXCI+XG4gICAgICAgICAgICA8aDEgY2xhc3NOYW1lPVwiZm9udC1zZW1pYm9sZCB0ZXh0LWdyYXktOTAwIHRleHQtMnhsIG1kOnRleHQtNHhsIHRleHQtY2VudGVyIGxlYWRpbmctbm9ybWFsIG1iLTJcIj5cbiAgICAgICAgICAgICAgT3VyIEdhbGxlcnlcbiAgICAgICAgICAgIDwvaDE+XG4gICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJmb250LW5vcm1hbCB0ZXh0LWdyYXktNDAwIHRleHQtbGcgbWQ6dGV4dC14bCB0ZXh0LWNlbnRlclwiPlxuICAgICAgICAgICAgICBXZSZhcG9zO3JlIGV4Y2VwdGlvbmFsIGF0IHdoYXQgd2UgZG9cbiAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9zZWN0aW9uPlxuXG4gICAgICAgIDxtb3Rpb24uZGl2XG4gICAgICAgICAgY2xhc3NOYW1lPVwicmVsYXRpdmVcIiAvLyBFbnN1cmUgY29udGFpbmVyIGlzIHBvc2l0aW9uZWQgZm9yIGFycm93IHBvc2l0aW9uaW5nXG4gICAgICAgICAgcmVmPXtyZWZ9XG4gICAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICAgIHNjYWxlOiBzY2FsZVByb2dyZXNzLFxuICAgICAgICAgICAgb3BhY2l0eTogc2NhbGVPcGFjaXR5LFxuICAgICAgICAgIH19XG4gICAgICAgID5cbiAgICAgICAgICA8U2xpZGVyIHsuLi5zZXR0aW5nc30+XG4gICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICA8aW1nXG4gICAgICAgICAgICAgICAgc3JjPVwiL2ltYWdlcy9yb29mMS5qcGdcIlxuICAgICAgICAgICAgICAgIGFsdD1cIkdhbGxlcnkgSW1hZ2UgMVwiXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwidy1mdWxsIHNtOmgtWzYwMHB4XSBoLVszMDBweF0gb2JqZWN0LWNvdmVyIGhvdmVyOm9wYWNpdHktNzUgdHJhbnNpdGlvbiBlYXNlLWluLW91dCBkdXJhdGlvbi01MDBcIlxuICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICA8aW1nXG4gICAgICAgICAgICAgICAgc3JjPVwiL2ltYWdlcy9yb29mMy5qcGdcIlxuICAgICAgICAgICAgICAgIGFsdD1cIkdhbGxlcnkgSW1hZ2UgMlwiXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwidy1mdWxsIHNtOmgtWzYwMHB4XSBoLVszMDBweF0gb2JqZWN0LWNvdmVyIGhvdmVyOm9wYWNpdHktNzUgdHJhbnNpdGlvbiBlYXNlLWluLW91dCBkdXJhdGlvbi01MDBcIlxuICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICA8aW1nXG4gICAgICAgICAgICAgICAgc3JjPVwiL2ltYWdlcy9yb29mNC5qcGVnXCJcbiAgICAgICAgICAgICAgICBhbHQ9XCJHYWxsZXJ5IEltYWdlIDNcIlxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInctZnVsbCBzbTpoLVs2MDBweF0gaC1bMzAwcHhdIG9iamVjdC1jb3ZlciBob3ZlcjpvcGFjaXR5LTc1IHRyYW5zaXRpb24gZWFzZS1pbi1vdXQgZHVyYXRpb24tNTAwXCJcbiAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgPGltZ1xuICAgICAgICAgICAgICAgIHNyYz1cIi9pbWFnZXMvaGVyb28xLmpwZWdcIlxuICAgICAgICAgICAgICAgIGFsdD1cIkdhbGxlcnkgSW1hZ2UgNFwiXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwidy1mdWxsIHNtOmgtWzYwMHB4XSBoLVszMDBweF0gb2JqZWN0LWNvdmVyIGhvdmVyOm9wYWNpdHktNzUgdHJhbnNpdGlvbiBlYXNlLWluLW91dCBkdXJhdGlvbi01MDBcIlxuICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICA8aW1nXG4gICAgICAgICAgICAgICAgc3JjPVwiL2ltYWdlcy9oZXJvNC5qcGVnXCJcbiAgICAgICAgICAgICAgICBhbHQ9XCJHYWxsZXJ5IEltYWdlIDVcIlxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInctZnVsbCBzbTpoLVs2MDBweF0gaC1bMzAwcHhdIG9iamVjdC1jb3ZlciBob3ZlcjpvcGFjaXR5LTc1IHRyYW5zaXRpb24gZWFzZS1pbi1vdXQgZHVyYXRpb24tNTAwXCJcbiAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvU2xpZGVyPlxuICAgICAgICA8L21vdGlvbi5kaXY+XG4gICAgICA8L2Rpdj5cbiAgICA8L3NlY3Rpb24+XG4gICk7XG59XG4iXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VSZWYiLCJTbGlkZXIiLCJ1c2VTY3JvbGwiLCJtb3Rpb24iLCJ1c2VUcmFuc2Zvcm0iLCJQcmV2QXJyb3ciLCJvbkNsaWNrIiwiYnV0dG9uIiwiY2xhc3NOYW1lIiwic3R5bGUiLCJsZWZ0IiwiekluZGV4IiwiYmFja2dyb3VuZCIsImNvbG9yIiwiYm9yZGVyIiwicGFkZGluZyIsImJvcmRlclJhZGl1cyIsIk5leHRBcnJvdyIsInJpZ2h0IiwiT3VyR2FsbGVyeSIsInNldHRpbmdzIiwiZG90cyIsImluZmluaXRlIiwic3BlZWQiLCJzbGlkZXNUb1Nob3ciLCJzbGlkZXNUb1Njcm9sbCIsImFkYXB0aXZlSGVpZ2h0IiwiYXV0b3BsYXkiLCJhdXRvcGxheVNwZWVkIiwicHJldkFycm93IiwibmV4dEFycm93IiwicmVzcG9uc2l2ZSIsImJyZWFrcG9pbnQiLCJyZWYiLCJzY3JvbGxZUHJvZ3Jlc3MiLCJ0YXJnZXQiLCJvZmZzZXQiLCJzY2FsZVByb2dyZXNzIiwic2NhbGVPcGFjaXR5Iiwic2VjdGlvbiIsImRpdiIsImgxIiwicCIsInNjYWxlIiwib3BhY2l0eSIsImltZyIsInNyYyIsImFsdCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/components/OurGallery.jsx\n"));

/***/ })

});