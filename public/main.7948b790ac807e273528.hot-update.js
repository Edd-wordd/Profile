/*! For license information please see main.7948b790ac807e273528.hot-update.js.LICENSE.txt */
"use strict";globalThis.webpackHotUpdateprofile("main",{"./src/components/sections/HmServices.jsx":(module,__webpack_exports__,__webpack_require__)=>{eval('__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");\n/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/Container/Container.js");\n/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/Hidden/Hidden.js");\n/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/Grid/Grid.js");\n/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/Paper/Paper.js");\n/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/Typography/Typography.js");\n/* harmony import */ var _mui_icons_material_PhoneIphone__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @mui/icons-material/PhoneIphone */ "./node_modules/@mui/icons-material/PhoneIphone.js");\n/* harmony import */ var _mui_icons_material_Computer__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @mui/icons-material/Computer */ "./node_modules/@mui/icons-material/Computer.js");\n/* harmony import */ var _mui_icons_material_Description__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @mui/icons-material/Description */ "./node_modules/@mui/icons-material/Description.js");\n/* harmony import */ var _mui_icons_material_MultilineChart__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @mui/icons-material/MultilineChart */ "./node_modules/@mui/icons-material/MultilineChart.js");\n/* harmony import */ var _mui_icons_material_ShoppingCart__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @mui/icons-material/ShoppingCart */ "./node_modules/@mui/icons-material/ShoppingCart.js");\n/* harmony import */ var _mui_icons_material_GroupAdd__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @mui/icons-material/GroupAdd */ "./node_modules/@mui/icons-material/GroupAdd.js");\n/* harmony import */ var _data_hmServicesData__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../data/hmServicesData */ "./src/data/hmServicesData.js");\n/* harmony import */ var _components_sections_SectionHeader__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../components/sections/SectionHeader */ "./src/components/sections/SectionHeader.jsx");\n/* harmony import */ var react_transition_group_Transition__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! react-transition-group/Transition */ "./node_modules/react-transition-group/esm/Transition.js");\n/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/Slide/Slide.js");\n/* harmony import */ var _styles_sections_HmServices_styles__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../styles/sections/HmServices.styles */ "./src/components/styles/sections/HmServices.styles.js");\n/* provided dependency */ var __react_refresh_utils__ = __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js");\n/* provided dependency */ var __react_refresh_error_overlay__ = __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/overlay/index.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/overlay/index.js");\n__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ./node_modules/react-refresh/runtime.js */ "./node_modules/react-refresh/runtime.js");\n\nvar _Hidden,\n  _SectionHeader,\n  _s = __webpack_require__.$Refresh$.signature();\n\n\n\n\n\n\n\n\n\n// import { SectionHeader } from \'../index\'\n\n\n\n\nconst icons = [_mui_icons_material_MultilineChart__WEBPACK_IMPORTED_MODULE_4__["default"], _mui_icons_material_Computer__WEBPACK_IMPORTED_MODULE_5__["default"], _mui_icons_material_Description__WEBPACK_IMPORTED_MODULE_6__["default"], _mui_icons_material_PhoneIphone__WEBPACK_IMPORTED_MODULE_7__["default"], _mui_icons_material_ShoppingCart__WEBPACK_IMPORTED_MODULE_8__["default"], _mui_icons_material_GroupAdd__WEBPACK_IMPORTED_MODULE_9__["default"]];\nfunction HmServices(props) {\n  _s();\n  const classes = (0,_styles_sections_HmServices_styles__WEBPACK_IMPORTED_MODULE_3__.useStyles)(props);\n  const [inProp, setInProp] = react__WEBPACK_IMPORTED_MODULE_0__.useState(false);\n  const servicesSlide = (entries, observer) => {\n    const [entry] = entries;\n    // guard clause\n    if (!entry.isIntersecting) return;\n    if (entry.isIntersecting) {\n      setInProp(true);\n      observer.unobserve(entry.target);\n    }\n  };\n  const servicesObserver = new IntersectionObserver(servicesSlide, {\n    root: null,\n    threshold: 0.2\n  });\n  react__WEBPACK_IMPORTED_MODULE_0__.useEffect(() => {\n    const target = document.querySelector(\'#services\');\n    servicesObserver.observe(target);\n    return () => {\n      servicesObserver.unobserve(target);\n    };\n  }, []);\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {\n    className: classes.root,\n    id: "services"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_10__["default"], {\n    maxWidth: "xl"\n  }, _Hidden || (_Hidden = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_11__["default"], {\n    smUp: true\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components_sections_SectionHeader__WEBPACK_IMPORTED_MODULE_2__["default"], {\n    title: "Our Services",\n    subTitle: "Let us Help build the Future!"\n  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_12__["default"], {\n    container: true,\n    direction: "row",\n    justifyContent: "center",\n    alignItems: "center",\n    className: classes.cardWrapper\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_11__["default"], {\n    xsDown: true\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_12__["default"], {\n    container: true,\n    direction: "row",\n    justifyContent: "center",\n    className: classes.sectionTitle\n  }, _SectionHeader || (_SectionHeader = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components_sections_SectionHeader__WEBPACK_IMPORTED_MODULE_2__["default"], {\n    title: "Our Services",\n    subTitle: "Let us Help build the Future!"\n  })))), _data_hmServicesData__WEBPACK_IMPORTED_MODULE_1__["default"].map((service, index) => {\n    const Icon = icons[index];\n    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_transition_group_Transition__WEBPACK_IMPORTED_MODULE_13__["default"], {\n      in: !!setInProp,\n      timeout: 1000,\n      key: service.id\n    }, () => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_14__["default"], {\n      direction: index >= 0 && index <= 2 ? \'right\' : \'left\',\n      in: inProp,\n      mountOnEnter: true,\n      unmountOnExit: true,\n      timeout: 3000\n    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_15__["default"], {\n      elevation: 10,\n      id: `card_${index}`,\n      className: classes.cards\n    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_16__["default"], {\n      variant: "h5",\n      className: classes.cardTitle\n    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(Icon, {\n      className: classes.cardIcon\n    }), service.serviceTitle), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_16__["default"], {\n      paragraph: true\n    }, service.serviceDescription))));\n  }))));\n}\n_s(HmServices, "ZrrBJtudpZOqueRcIWB+Fl0zCp0=", false, function () {\n  return [_styles_sections_HmServices_styles__WEBPACK_IMPORTED_MODULE_3__.useStyles];\n});\n_c = HmServices;\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (HmServices);\nvar _c;\n__webpack_require__.$Refresh$.register(_c, "HmServices");\n\nconst $ReactRefreshModuleId$ = __webpack_require__.$Refresh$.moduleId;\nconst $ReactRefreshCurrentExports$ = __react_refresh_utils__.getModuleExports(\n\t$ReactRefreshModuleId$\n);\n\nfunction $ReactRefreshModuleRuntime$(exports) {\n\tif (true) {\n\t\tlet errorOverlay;\n\t\tif (typeof __react_refresh_error_overlay__ !== \'undefined\') {\n\t\t\terrorOverlay = __react_refresh_error_overlay__;\n\t\t}\n\t\tlet testMode;\n\t\tif (typeof __react_refresh_test__ !== \'undefined\') {\n\t\t\ttestMode = __react_refresh_test__;\n\t\t}\n\t\treturn __react_refresh_utils__.executeRuntime(\n\t\t\texports,\n\t\t\t$ReactRefreshModuleId$,\n\t\t\tmodule.hot,\n\t\t\terrorOverlay,\n\t\t\ttestMode\n\t\t);\n\t}\n}\n\nif (typeof Promise !== \'undefined\' && $ReactRefreshCurrentExports$ instanceof Promise) {\n\t$ReactRefreshCurrentExports$.then($ReactRefreshModuleRuntime$);\n} else {\n\t$ReactRefreshModuleRuntime$($ReactRefreshCurrentExports$);\n}\n\n//# sourceURL=webpack://profile/./src/components/sections/HmServices.jsx?')}},(function(_){_.h=()=>"6fd47a04bbf79ccd1490"}));