/*! For license information please see main.1ec8e8ff2660096d2e8f.hot-update.js.LICENSE.txt */
"use strict";globalThis.webpackHotUpdateprofile("main",{"./src/components/sections/Questions.jsx":(module,__webpack_exports__,__webpack_require__)=>{eval('__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");\n/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/Grid/Grid.js");\n/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/Container/Container.js");\n/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/Paper/Paper.js");\n/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/Typography/Typography.js");\n/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/Link/Link.js");\n/* harmony import */ var _components_sections_SectionHeader__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../components/sections/SectionHeader */ "./src/components/sections/SectionHeader.jsx");\n/* harmony import */ var _data_questionsData__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../data/questionsData */ "./src/data/questionsData.js");\n/* harmony import */ var _styles_sections_Questions_styles__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../styles/sections/Questions.styles */ "./src/components/styles/sections/Questions.styles.js");\n/* provided dependency */ var __react_refresh_utils__ = __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js");\n/* provided dependency */ var __react_refresh_error_overlay__ = __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/overlay/index.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/overlay/index.js");\n__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ./node_modules/react-refresh/runtime.js */ "./node_modules/react-refresh/runtime.js");\n\nvar _SectionHeader, _Span, _Span2;\n\n\n\n\n\nfunction Questions() {\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_styles_sections_Questions_styles__WEBPACK_IMPORTED_MODULE_3__.QuestionsBackground, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_4__["default"], {\n    sx: {\n      color: \'#f5f5f5\',\n      padding: \'2rem 0rem\'\n    }\n  }, _SectionHeader || (_SectionHeader = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components_sections_SectionHeader__WEBPACK_IMPORTED_MODULE_1__["default"], {\n    title: "Important Questions",\n    subTitle: "Evaluate your digital needs!"\n  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_5__["default"], {\n    maxWidth: "lg"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_4__["default"], {\n    container: true,\n    direction: "row",\n    justifyContent: "center"\n  }, _data_questionsData__WEBPACK_IMPORTED_MODULE_2__["default"].map(question => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_6__["default"], {\n    key: question.id,\n    variant: "outlined",\n    sx: {\n      maxWidth: \'30rem\',\n      height: \'auto\',\n      margin: \'1rem 1rem\',\n      backgroundColor: \'rgba(255, 255, 255, 0.60)\',\n      padding: \'1rem 1.75rem \'\n    }\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_7__["default"], {\n    variant: "h6",\n    sx: {\n      color: \'#f5f5f5\',\n      fontWeight: 600,\n      textAlign: \'center\'\n    }\n  }, question.question), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_7__["default"], {\n    paragraph: true,\n    sx: {\n      color: \'#f5f5f5\',\n      padding: \'1rem 0\'\n    }\n  }, question.details), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_4__["default"], {\n    container: true,\n    direction: "row",\n    justifyContent: "flex-end",\n    alignItems: "center"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_8__["default"], {\n    href: question.link,\n    component: _styles_sections_Questions_styles__WEBPACK_IMPORTED_MODULE_3__.QuestionLinks\n  }, "Learn More"))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_4__["default"], {\n    container: true,\n    direction: "column",\n    justifyContent: "center",\n    alignItems: "center",\n    sx: {\n      padding: \'3rem 0rem 0rem 0rem\'\n    }\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_7__["default"], {\n    variant: "h6",\n    sx: {\n      color: \'#f5f5f5\',\n      fontWeight: 600,\n      textAlign: \'center\'\n    }\n  }, "If you answered", _Span || (_Span = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_styles_sections_Questions_styles__WEBPACK_IMPORTED_MODULE_3__.Span, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", null, " YES "))), "to any of these questions, reach out to us for a consultation on how we can help you establish and enhance your digital presence through web design, app development, and digital marketing strategies. Consider our services to help you get started", _Span2 || (_Span2 = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_styles_sections_Questions_styles__WEBPACK_IMPORTED_MODULE_3__.Span, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", null, " !!!"))))))));\n}\n_c = Questions;\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Questions);\nvar _c;\n__webpack_require__.$Refresh$.register(_c, "Questions");\n\nconst $ReactRefreshModuleId$ = __webpack_require__.$Refresh$.moduleId;\nconst $ReactRefreshCurrentExports$ = __react_refresh_utils__.getModuleExports(\n\t$ReactRefreshModuleId$\n);\n\nfunction $ReactRefreshModuleRuntime$(exports) {\n\tif (true) {\n\t\tlet errorOverlay;\n\t\tif (typeof __react_refresh_error_overlay__ !== \'undefined\') {\n\t\t\terrorOverlay = __react_refresh_error_overlay__;\n\t\t}\n\t\tlet testMode;\n\t\tif (typeof __react_refresh_test__ !== \'undefined\') {\n\t\t\ttestMode = __react_refresh_test__;\n\t\t}\n\t\treturn __react_refresh_utils__.executeRuntime(\n\t\t\texports,\n\t\t\t$ReactRefreshModuleId$,\n\t\t\tmodule.hot,\n\t\t\terrorOverlay,\n\t\t\ttestMode\n\t\t);\n\t}\n}\n\nif (typeof Promise !== \'undefined\' && $ReactRefreshCurrentExports$ instanceof Promise) {\n\t$ReactRefreshCurrentExports$.then($ReactRefreshModuleRuntime$);\n} else {\n\t$ReactRefreshModuleRuntime$($ReactRefreshCurrentExports$);\n}\n\n//# sourceURL=webpack://profile/./src/components/sections/Questions.jsx?')}},(function(_){_.h=()=>"c9daa7ddf3b4784a908e"}));