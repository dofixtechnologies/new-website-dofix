(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/src/components/Header/menuData.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "menuData",
    ()=>menuData
]);
const menuData = [
    {
        id: 1,
        title: "Home",
        newTab: false,
        path: "/"
    },
    {
        id: 3,
        title: "About Us",
        newTab: false,
        path: "/about"
    },
    {
        id: 7,
        title: "Blogs",
        newTab: false,
        path: "/blog"
    },
    // {
    //   id: 6,
    //   title: "pages",
    //   newTab: false,
    //   path: "/",
    //   submenu: [
    //     {
    //       id: 61,
    //       title: "Shop With Sidebar",
    //       newTab: false,
    //       path: "/shop-with-sidebar",
    //     },
    //     {
    //       id: 62,
    //       title: "Shop Without Sidebar",
    //       newTab: false,
    //       path: "/shop-without-sidebar",
    //     },
    //     {
    //       id: 64,
    //       title: "Checkout",
    //       newTab: false,
    //       path: "/checkout",
    //     },
    //     {
    //       id: 65,
    //       title: "Cart",
    //       newTab: false,
    //       path: "/cart",
    //     },
    //     {
    //       id: 66,
    //       title: "Wishlist",
    //       newTab: false,
    //       path: "/wishlist",
    //     },
    //     {
    //       id: 67,
    //       title: "Sign in",
    //       newTab: false,
    //       path: "/signin",
    //     },
    //     {
    //       id: 68,
    //       title: "Sign up",
    //       newTab: false,
    //       path: "/signup",
    //     },
    //     {
    //       id: 69,
    //       title: "My Account",
    //       newTab: false,
    //       path: "/my-account",
    //     },
    //     {
    //       id: 70,
    //       title: "Contact",
    //       newTab: false,
    //       path: "/contact",
    //     },
    //     {
    //       id: 62,
    //       title: "Error",
    //       newTab: false,
    //       path: "/error",
    //     },
    //     {
    //       id: 63,
    //       title: "Mail Success",
    //       newTab: false,
    //       path: "/mail-success",
    //     },
    //   ],
    // },
    // {
    //   id: 7,
    //   title: "blogs",
    //   newTab: false,
    //   path: "/",
    //   submenu: [
    //     {
    //       id: 71,
    //       title: "Blog Grid with sidebar",
    //       newTab: false,
    //       path: "/blogs/blog-grid-with-sidebar",
    //     },
    //     {
    //       id: 72,
    //       title: "Blog Grid",
    //       newTab: false,
    //       path: "/blogs/blog-grid",
    //     },
    //     {
    //       id: 73,
    //       title: "Blog details with sidebar",
    //       newTab: false,
    //       path: "/blogs/blog-details-with-sidebar",
    //     },
    //     {
    //       id: 74,
    //       title: "Blog details",
    //       newTab: false,
    //       path: "/blogs/blog-details",
    //     },
    //   ],
    // },
    {
        id: 3,
        title: "Contact Us",
        newTab: false,
        path: "/contact"
    }
];
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/Header/Dropdown.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/navigation.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
;
;
;
const Dropdown = ({ menuItem, stickyMenu })=>{
    _s();
    const [dropdownToggler, setDropdownToggler] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const pathUrl = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["usePathname"])();
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
        onClick: ()=>setDropdownToggler(!dropdownToggler),
        className: `group relative before:w-0 before:h-[3px] before:bg-blue before:absolute before:left-0 before:top-0 before:rounded-b-[3px] before:ease-out before:duration-200 hover:before:w-full ${pathUrl.includes(menuItem.title) && "before:!w-full"}`,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                href: "#",
                className: `hover:text-[#3683ab] text-custom-sm font-medium text-dark flex items-center gap-1.5 capitalize ${stickyMenu ? "xl:py-4" : "xl:py-6"} ${pathUrl.includes(menuItem.title) && "!text-[#3683ab]"}`,
                children: [
                    menuItem.title,
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                        className: "fill-current cursor-pointer",
                        width: "16",
                        height: "16",
                        viewBox: "0 0 16 16",
                        fill: "none",
                        xmlns: "http://www.w3.org/2000/svg",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                            fillRule: "evenodd",
                            clipRule: "evenodd",
                            d: "M2.95363 5.67461C3.13334 5.46495 3.44899 5.44067 3.65866 5.62038L7.99993 9.34147L12.3412 5.62038C12.5509 5.44067 12.8665 5.46495 13.0462 5.67461C13.2259 5.88428 13.2017 6.19993 12.992 6.37964L8.32532 10.3796C8.13808 10.5401 7.86178 10.5401 7.67453 10.3796L3.00787 6.37964C2.7982 6.19993 2.77392 5.88428 2.95363 5.67461Z",
                            fill: ""
                        }, void 0, false, {
                            fileName: "[project]/src/components/Header/Dropdown.tsx",
                            lineNumber: 31,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0))
                    }, void 0, false, {
                        fileName: "[project]/src/components/Header/Dropdown.tsx",
                        lineNumber: 23,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/Header/Dropdown.tsx",
                lineNumber: 16,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                className: `dropdown ${dropdownToggler && "flex"} ${stickyMenu ? "xl:group-hover:translate-y-0" : "xl:group-hover:translate-y-0"}`,
                children: menuItem.submenu.map((item, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                            href: item.path,
                            className: `flex text-custom-sm hover:text-[#3683ab] hover:bg-gray-1 py-[7px] px-4.5 ${pathUrl === item.path && "text-[#3683ab] bg-gray-1"} `,
                            children: item.title
                        }, void 0, false, {
                            fileName: "[project]/src/components/Header/Dropdown.tsx",
                            lineNumber: 50,
                            columnNumber: 13
                        }, ("TURBOPACK compile-time value", void 0))
                    }, i, false, {
                        fileName: "[project]/src/components/Header/Dropdown.tsx",
                        lineNumber: 49,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0)))
            }, void 0, false, {
                fileName: "[project]/src/components/Header/Dropdown.tsx",
                lineNumber: 41,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/Header/Dropdown.tsx",
        lineNumber: 10,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
_s(Dropdown, "69phRPNzDgAVMgq24z1cCj539RY=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["usePathname"]
    ];
});
_c = Dropdown;
const __TURBOPACK__default__export__ = Dropdown;
var _c;
__turbopack_context__.k.register(_c, "Dropdown");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/redux/hooks.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useAppDispatch",
    ()=>useAppDispatch,
    "useAppSelector",
    ()=>useAppSelector
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$redux$2f$dist$2f$react$2d$redux$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react-redux/dist/react-redux.mjs [app-client] (ecmascript)");
var _s = __turbopack_context__.k.signature();
"use client";
;
const useAppDispatch = ()=>{
    _s();
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$redux$2f$dist$2f$react$2d$redux$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useDispatch"])();
};
_s(useAppDispatch, "jI3HA1r1Cumjdbu14H7G+TUj798=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$redux$2f$dist$2f$react$2d$redux$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useDispatch"]
    ];
});
const useAppSelector = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$redux$2f$dist$2f$react$2d$redux$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSelector"];
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/Shop/shopData.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
const shopData = [
    // ================= AC Service =================
    {
        id: "foam-jet-ac-service",
        title: "Foam Jet AC Service",
        category: "acrepairinstallation",
        subCategory: "ac-service",
        rateCardKey: "ac",
        reviews: 10,
        imgs: {
            thumbnails: [
                "/images/ac/foam-jet.png"
            ],
            previews: [
                "/images/ac/foam-jet.png"
            ]
        },
        description: {
            about: [
                "High-pressure jet cleaning of indoor unit",
                "Deep cleaning of cooling coil",
                "Blower and fan cleaning",
                "Drain line cleaning",
                "Outdoor condenser jet wash",
                "Cooling performance testing"
            ],
            benefits: [
                "Strong and fast cooling",
                "Removal of deep dirt and blockages",
                "Improved airflow",
                "Reduced electricity consumption",
                "Extended AC lifespan"
            ]
        },
        variants: [
            {
                id: 101,
                title: "Split AC Foam Jet Service",
                price: 499,
                oldPrice: 599,
                img: "/images/ac/foam-jet.png",
                // description: "Complete AC inspection and jet cleaning",
                description: "Deep foam jet cleaning and inspection for split AC"
            },
            {
                id: 102,
                title: "Window AC Foam Jet Service",
                price: 499,
                oldPrice: 599,
                img: "/images/ac/foam-w.png",
                // description: "Deep jet cleaning for two AC units",
                description: "Deep foam jet cleaning and inspection for window AC"
            },
            {
                id: 99,
                title: "Window AC Foam Jet Service (2 AC)",
                price: 949,
                oldPrice: 1199,
                img: "/images/ac/foam-w.png",
                description: "Deep jet cleaning for three AC units"
            },
            {
                id: 98,
                title: "Split AC Foam Jet Service (2 AC)",
                price: 949,
                oldPrice: 1199,
                img: "/images/ac/foam-jet.png",
                description: "Deep jet cleaning for Four AC units"
            },
            {
                id: 97,
                title: "Window AC Foam Jet Service (3 AC)",
                price: 1348,
                oldPrice: 1799,
                img: "/images/ac/foam-w.png",
                description: "Deep jet cleaning for three AC units"
            },
            {
                id: 96,
                title: "Split AC Foam Jet Service (3 AC)",
                price: 1348,
                oldPrice: 1799,
                img: "/images/ac/foam-jet.png",
                description: "Deep jet cleaning for Four AC units"
            },
            {
                id: 95,
                title: "Window AC Foam Jet Service (4 AC)",
                price: 1697,
                oldPrice: 2399,
                img: "/images/ac/foam-w.png",
                description: "Deep jet cleaning for three AC units"
            },
            {
                id: 94,
                title: "Split AC Foam Jet Service (4 AC)",
                price: 1697,
                oldPrice: 2399,
                img: "/images/ac/foam-jet.png",
                description: "Deep jet cleaning for Four AC units"
            },
            {
                id: 93,
                title: "Window AC Foam Jet Service (5 AC)",
                price: 2120,
                oldPrice: 2999,
                img: "/images/ac/foam-w.png",
                description: "Deep jet cleaning for three AC units"
            },
            {
                id: 92,
                title: "Split AC Foam Jet Service (5 AC)",
                price: 2120,
                oldPrice: 2999,
                img: "/images/ac/foam-jet.png",
                description: "Deep jet cleaning for Four AC units"
            },
            {
                id: 91,
                title: "Window AC Foam Jet Service (6 AC)",
                price: 2544,
                oldPrice: 3599,
                img: "/images/ac/foam-w.png",
                description: "Deep jet cleaning for three AC units"
            },
            {
                id: 90,
                title: "Split AC Foam Jet Service (6 AC)",
                price: 2544,
                oldPrice: 3599,
                img: "/images/ac/foam-jet.png",
                description: "Deep jet cleaning for Four AC units"
            }
        ]
    },
    {
        id: "jet-pump-ac-service",
        title: "Jet Pump Ac Service",
        category: "acrepairinstallation",
        subCategory: "ac-service",
        rateCardKey: "ac",
        reviews: 10,
        imgs: {
            thumbnails: [
                "/images/ac/jet-pump.png"
            ],
            previews: [
                "/images/ac/jet-pump.png"
            ]
        },
        description: {
            about: [
                "Basic cleaning of indoor AC unit",
                "Air filter cleaning and dust removal",
                "Cooling coil surface cleaning",
                "Drain pipe inspection and cleaning",
                "Outdoor unit basic cleaning",
                "Complete AC performance check"
            ],
            benefits: [
                "Maintains healthy airflow",
                "Improves cooling efficiency",
                "Reduces dust and bad smell",
                "Helps lower electricity consumption",
                "Prevents minor AC issues"
            ]
        },
        variants: [
            {
                id: 103,
                title: "Split AC Jet Pump Service",
                price: 399,
                oldPrice: 799,
                img: "/images/ac/split-j.png",
                // description: "Basic cleaning and inspection for one AC unit",
                description: "Basic jet pump cleaning and inspection for split AC"
            },
            {
                id: 104,
                title: "Window AC Jet Pump Service",
                price: 399,
                oldPrice: 599,
                img: "/images/ac/window-j.png",
                // description: "Basic cleaning and inspection for two AC units",
                description: "Basic jet pump cleaning and inspection for window AC"
            },
            {
                id: 89,
                title: "Split AC Jet Pump Service (2 AC)",
                price: 759,
                oldPrice: 999,
                img: "/images/ac/split-j.png",
                description: "Basic cleaning and inspection for three AC units"
            },
            {
                id: 88,
                title: "Window AC Jet Pump Service (2 AC)",
                price: 759,
                oldPrice: 999,
                img: "/images/ac/window-j.png",
                description: "Basic cleaning and inspection for four AC units"
            },
            {
                id: 87,
                title: "Split AC Jet Pump Service (3 AC)",
                price: 1078,
                oldPrice: 1499,
                img: "/images/ac/split-j.png",
                description: "Basic cleaning and inspection for three AC units"
            },
            {
                id: 86,
                title: "Window AC Jet Pump Service (3 AC)",
                price: 1078,
                oldPrice: 1499,
                img: "/images/ac/window-j.png",
                description: "Basic cleaning and inspection for four AC units"
            },
            {
                id: 85,
                title: "Split AC Jet Pump Service (4 AC)",
                price: 1357,
                oldPrice: 1999,
                img: "/images/ac/split-j.png",
                description: "Basic cleaning and inspection for three AC units"
            },
            {
                id: 84,
                title: "Window AC Jet Pump Service (4 AC)",
                price: 1357,
                oldPrice: 1999,
                img: "/images/ac/window-j.png",
                description: "Basic cleaning and inspection for four AC units"
            },
            {
                id: 83,
                title: "Split AC Jet Pump Service (5 AC)",
                price: 1695,
                oldPrice: 2499,
                img: "/images/ac/split-j.png",
                description: "Basic cleaning and inspection for three AC units"
            },
            {
                id: 82,
                title: "Window AC Jet Pump Service (5 AC)",
                price: 1695,
                oldPrice: 2499,
                img: "/images/ac/window-j.png",
                description: "Basic cleaning and inspection for four AC units"
            },
            {
                id: 81,
                title: "Split AC Jet Pump Service (6 AC)",
                price: 2034,
                oldPrice: 2999,
                img: "/images/ac/split-j.png",
                description: "Basic cleaning and inspection for three AC units"
            },
            {
                id: 80,
                title: "Window AC Jet Pump Service (6 AC)",
                price: 2034,
                oldPrice: 2999,
                img: "/images/ac/window-j.png",
                description: "Basic cleaning and inspection for four AC units"
            }
        ]
    },
    {
        id: "ac-gas-charging",
        title: "AC Gas Charging",
        category: "acrepairinstallation",
        subCategory: "ac-service",
        rateCardKey: "ac",
        reviews: 6,
        imgs: {
            thumbnails: [
                "/images/ac/gas-charge.png"
            ],
            previews: [
                "/images/ac/gas-charge.png"
            ]
        },
        description: {
            about: [
                "Complete AC gas pressure inspection",
                "Leak detection and basic check",
                "Top-up or refill of AC refrigerant gas",
                "Cooling performance testing",
                "System pressure balancing"
            ],
            benefits: [
                "Restores proper cooling performance",
                "Improves AC efficiency",
                "Prevents compressor overload",
                "Reduces electricity consumption",
                "Ensures longer AC lifespan"
            ]
        },
        variants: [
            {
                id: 105,
                title: "Rubber Washer (1 Peice)",
                price: 50,
                oldPrice: 100,
                img: "/images/ac/gas1.png",
                // description: "Gas refill service for split AC with pressure check",
                description: "Refrigerant gas refill service for AC up to 1 Ton capacity"
            },
            {
                id: 106,
                title: "Cooling Coil U Band (Per Peice)",
                price: 50,
                oldPrice: 100,
                img: "/images/ac/gas2.png",
                // description: "Gas refill service for split AC with pressure check",
                description: "Refrigerant gas refill service for AC up to 1.5 Ton capacity"
            },
            {
                id: 107,
                title: "Pin Valve (Per Peice)",
                price: 50,
                oldPrice: 100,
                img: "/images/ac/gas2.png",
                // description: "Gas refill service for split AC with pressure check",
                description: "Refrigerant gas refill service for AC up to 1.5 Ton capacity"
            },
            {
                id: 108,
                title: "Expansion Valve Replaced",
                price: 1149,
                oldPrice: 1299,
                img: "/images/ac/gas2.png",
                // description: "Gas refill service for split AC with pressure check",
                description: "Refrigerant gas refill service for AC up to 1.5 Ton capacity"
            },
            {
                id: 109,
                title: "Gas Charging (1 to 2 Ton)",
                price: 2739,
                oldPrice: 2999,
                img: "/images/ac/gas3.png",
                // description: "Gas refill service for split AC with pressure check",
                description: "Refrigerant gas refill service for AC up to 2 Ton capacity"
            }
        ]
    },
    {
        id: "cassette-ac-jet-service",
        title: "Cassette AC Jet Service",
        category: "acrepairinstallation",
        subCategory: "ac-service",
        rateCardKey: "ac",
        reviews: 6,
        imgs: {
            thumbnails: [
                "/images/ac/c-jet.png"
            ],
            previews: [
                "/images/ac/c-jet.png"
            ]
        },
        description: {
            about: [
                "Deep jet cleaning of cassette AC indoor unit",
                "Cooling coil cleaning with high-pressure jet",
                "Blower and fan blade cleaning",
                "Drain tray and drain pipe cleaning",
                "Dust and dirt removal from air vents",
                "Complete AC performance testing after service"
            ],
            benefits: [
                "Improves cooling performance",
                "Removes dust, bacteria and bad odor",
                "Ensures smooth airflow",
                "Reduces electricity consumption",
                "Increases AC lifespan"
            ]
        },
        variants: [
            {
                id: 110,
                title: "Cassette AC Jet Service",
                price: 599,
                oldPrice: 799,
                img: "/images/ac/c-jet-service.png",
                // description: "Deep jet cleaning service for cassette AC units",
                description: "High pressure jet cleaning service for cassette AC units"
            }
        ]
    },
    // ================= Ac Repair =================
    {
        id: "ac-less-no-cooling-repair",
        title: "Ac Less/No Cooling Repair",
        category: "acrepairinstallation",
        subCategory: "ac-repair",
        rateCardKey: "ac",
        reviews: 18,
        imgs: {
            thumbnails: [
                "/images/ac/ac-less.png"
            ],
            previews: [
                "/images/ac/ac-less.png"
            ]
        },
        description: {
            about: [
                "Complete inspection of indoor and outdoor AC units",
                "Cooling coil and air filter check",
                "Refrigerant gas pressure inspection",
                "Compressor and capacitor testing",
                "Electrical wiring and thermostat check",
                "Cooling performance testing after repair"
            ],
            benefits: [
                "Restores proper cooling performance",
                "Identifies root cause of cooling issue",
                "Prevents compressor damage",
                "Improves AC efficiency",
                "Reduces electricity consumption"
            ]
        },
        variants: [
            {
                id: 201,
                title: "Window AC Repair (Inspection Charges)",
                price: 249,
                oldPrice: 499,
                img: "/images/ac/less-w.png",
                // description: "Deep jet cleaning service for cassette AC units",
                description: "Inspection charge for window AC cooling issues"
            },
            {
                id: 202,
                title: "Split AC Repair (Inspection Charges)",
                price: 249,
                oldPrice: 499,
                img: "/images/ac/less-s.png",
                // description: "Deep jet cleaning service for cassette AC units",
                description: "Inspection charge for split AC cooling issues"
            }
        ]
    },
    {
        id: "ac-power-issue-repair",
        title: "Ac Power Issue Repair",
        category: "acrepairinstallation",
        subCategory: "ac-repair",
        rateCardKey: "ac",
        reviews: 18,
        imgs: {
            thumbnails: [
                "/images/ac/ac-power.png"
            ],
            previews: [
                "/images/ac/ac-power.png"
            ]
        },
        description: {
            about: [
                "Inspection of AC electrical components",
                "Power supply and wiring check",
                "PCB board testing",
                "Contactor and capacitor inspection",
                "Thermostat and sensor check",
                "Safe power restoration testing"
            ],
            benefits: [
                "Fixes AC not turning on issue",
                "Prevents electrical damage",
                "Ensures safe AC operation",
                "Improves AC reliability",
                "Extends AC lifespan"
            ]
        },
        variants: [
            {
                id: 203,
                title: "Window AC Power Issue Repair",
                price: 299,
                oldPrice: 499,
                img: "/images/ac/power-w.png",
                description: "Deep jet cleaning service for cassette AC units"
            },
            {
                id: 204,
                title: "Split AC Power Issue Repair",
                price: 299,
                oldPrice: 499,
                img: "/images/ac/power-s.png",
                description: "Deep jet cleaning service for cassette AC units"
            }
        ]
    },
    {
        id: "ac-noise-smell-repair",
        title: "Ac Noise/Smell Repair",
        category: "acrepairinstallation",
        subCategory: "ac-repair",
        rateCardKey: "ac",
        reviews: 18,
        imgs: {
            thumbnails: [
                "/images/ac/ac-noise.png"
            ],
            previews: [
                "/images/ac/ac-noise.png"
            ]
        },
        description: {
            about: [
                "Inspection of blower motor and fan blades",
                "Cleaning of cooling coil and air filters",
                "Drain tray and drainage pipe check",
                "Loose component tightening",
                "Removal of bacteria and bad odor sources",
                "AC performance test after repair"
            ],
            benefits: [
                "Eliminates unpleasant AC smell",
                "Reduces abnormal AC noise",
                "Improves air quality",
                "Ensures smooth AC operation",
                "Enhances indoor comfort"
            ]
        },
        variants: [
            {
                id: 205,
                title: "Window AC Noise or Smell Repair",
                price: 339,
                oldPrice: 699,
                img: "/images/ac/noise-w.png",
                description: "Deep jet cleaning service for cassette AC units"
            },
            {
                id: 206,
                title: "Split AC Noise or Smell Repair",
                price: 339,
                oldPrice: 699,
                img: "/images/ac/noise-s.png",
                description: "Deep jet cleaning service for cassette AC units"
            }
        ]
    },
    {
        id: "ac-water-leakage-repair",
        title: "Ac Water Leakage Repair",
        category: "acrepairinstallation",
        subCategory: "ac-repair",
        rateCardKey: "ac",
        reviews: 18,
        imgs: {
            thumbnails: [
                "/images/ac/ac-leakage.png"
            ],
            previews: [
                "/images/ac/ac-leakage.png"
            ]
        },
        description: {
            about: [
                "Inspection of AC drainage system",
                "Drain pipe blockage removal",
                "Cooling coil and drain tray cleaning",
                "Indoor unit installation level check",
                "Water flow testing",
                "Complete leakage solution and performance test"
            ],
            benefits: [
                "Stops indoor water leakage",
                "Prevents wall and furniture damage",
                "Improves AC efficiency",
                "Ensures smooth water drainage",
                "Extends AC lifespan"
            ]
        },
        variants: [
            {
                id: 207,
                title: "Window AC Water Leakage Repair",
                price: 449,
                oldPrice: 699,
                img: "/images/ac/leakage-w.png",
                description: "Deep jet cleaning service for cassette AC units"
            },
            {
                id: 208,
                title: "Split AC Water Leakage Repair",
                price: 449,
                oldPrice: 799,
                img: "/images/ac/leakage-s.png",
                description: "Deep jet cleaning service for cassette AC units"
            }
        ]
    },
    {
        id: "ac-gas-refill-checkup",
        title: "Ac Gas Refill/CheckUp",
        category: "acrepairinstallation",
        subCategory: "ac-repair",
        rateCardKey: "ac",
        reviews: 18,
        imgs: {
            thumbnails: [
                "/images/ac/ac-refill.png"
            ],
            previews: [
                "/images/ac/ac-refill.png"
            ]
        },
        description: {
            about: [
                "Inspection of refrigerant gas pressure",
                "Leak detection and basic repair",
                "Vacuuming of AC system if required",
                "Gas refill using proper refrigerant",
                "Cooling efficiency testing",
                "System pressure balancing"
            ],
            benefits: [
                "Restores proper AC cooling",
                "Improves AC performance",
                "Prevents compressor overload",
                "Reduces electricity consumption",
                "Increases AC lifespan"
            ]
        },
        variants: [
            // {
            // id: 209,
            // title: "Gas Refill 1 Ton",
            // price: 2499,
            // oldPrice: 2599,
            // img: "/images/ac/ac-refill.png",
            // description: "Deep jet cleaning service for cassette AC units",
            // },
            // {
            // id: 210,
            // title: "Gas Refill 1.5 Ton",
            // price: 2799,
            // oldPrice: 2899,
            // img: "/images/ac/refill-1.5.png",
            // description: "Deep jet cleaning service for cassette AC units",
            // },
            {
                id: 211,
                title: "Gas Refill 1 to 2 Ton",
                price: 2739,
                oldPrice: 3299,
                img: "/images/ac/refill-2.png",
                description: "Deep jet cleaning service for cassette AC units"
            }
        ]
    },
    {
        id: "cassette-ac-repair",
        title: "Cassette Ac Repair",
        category: "acrepairinstallation",
        subCategory: "ac-repair",
        rateCardKey: "ac",
        reviews: 18,
        imgs: {
            thumbnails: [
                "/images/ac/cass.png"
            ],
            previews: [
                "/images/ac/cass.png"
            ]
        },
        description: {
            about: [
                "Inspection of cassette AC indoor unit",
                "Cooling coil and blower cleaning",
                "Drain tray and drain pipe check",
                "Electrical components testing",
                "Fan motor and compressor inspection",
                "Complete AC performance testing"
            ],
            benefits: [
                "Restores proper cooling performance",
                "Improves airflow and air quality",
                "Reduces unusual AC noise",
                "Prevents major AC breakdown",
                "Increases AC lifespan"
            ]
        },
        variants: [
            {
                id: 212,
                title: "Cassette AC Gas Refill 1.5 Ton",
                price: 3000,
                oldPrice: 3299,
                img: "/images/ac/refill-2.png",
                description: "Deep jet cleaning service for cassette AC units"
            },
            {
                id: 213,
                title: "Cassette AC Gas Refill 2 Ton",
                price: 4000,
                oldPrice: 4299,
                img: "/images/ac/refill-2.png",
                description: "Deep jet cleaning service for cassette AC units"
            },
            {
                id: 214,
                title: "Cassette AC Gas Refill 2.5 Ton",
                price: 5000,
                oldPrice: 5299,
                img: "/images/ac/refill-2.png",
                description: "Deep jet cleaning service for cassette AC units"
            },
            {
                id: 215,
                title: "Cassette AC Gas Refill 3 Ton",
                price: 6500,
                oldPrice: 6799,
                img: "/images/ac/refill-2.png",
                description: "Deep jet cleaning service for cassette AC units"
            },
            {
                id: 216,
                title: "Cassette AC Gas Refill 5 Ton",
                price: 8000,
                oldPrice: 8299,
                img: "/images/ac/refill-2.png",
                description: "Deep jet cleaning service for cassette AC units"
            }
        ]
    },
    // ================= Installation =================
    {
        id: "ac-installation",
        title: "AC Installation",
        category: "acrepairinstallation",
        subCategory: "ac-installation-uninstallation",
        rateCardKey: "ac",
        reviews: 12,
        imgs: {
            thumbnails: [
                "/images/ac/ac-ins.png"
            ],
            previews: [
                "/images/ac/ac-ins.png"
            ]
        },
        description: {
            about: [
                "Professional installation of indoor and outdoor units",
                "Copper pipe connection and insulation",
                "Drain pipe setup for water flow",
                "Electrical wiring and power connection",
                "Vacuuming and gas pressure check",
                "Complete AC performance testing"
            ],
            benefits: [
                "Ensures safe AC installation",
                "Improves cooling efficiency",
                "Prevents gas leakage issues",
                "Reduces power consumption",
                "Enhances AC lifespan"
            ]
        },
        variants: [
            {
                id: 301,
                title: "Window AC Installation",
                price: 799,
                oldPrice: 899,
                img: "/images/ac/ins-w.png",
                description: "Deep jet cleaning service for cassette AC units"
            },
            {
                id: 302,
                title: "Split AC Installation",
                price: 1349,
                oldPrice: 1599,
                img: "/images/ac/ins-s.png",
                description: "Deep jet cleaning service for cassette AC units"
            }
        ]
    },
    {
        id: "ac-uninstallation",
        title: "AC Uninstallation",
        category: "acrepairinstallation",
        subCategory: "ac-installation-uninstallation",
        rateCardKey: "ac",
        reviews: 12,
        imgs: {
            thumbnails: [
                "/images/ac/ac-unins.png"
            ],
            previews: [
                "/images/ac/ac-unins.png"
            ]
        },
        description: {
            about: [
                "Safe removal of indoor and outdoor units",
                "Disconnection of electrical wiring",
                "Copper pipe removal and sealing",
                "Refrigerant gas safety handling",
                "AC components safety check",
                "Preparation for reinstallation or relocation"
            ],
            benefits: [
                "Safe AC removal without damage",
                "Prevents gas leakage",
                "Protects AC components",
                "Makes relocation easy",
                "Ready for reinstall at new location"
            ]
        },
        variants: [
            {
                id: 303,
                title: "Window AC Uninstallation",
                price: 449,
                oldPrice: 799,
                img: "/images/ac/unins-w.png",
                description: "Deep jet cleaning service for cassette AC units"
            },
            {
                id: 304,
                title: "Split AC Uninstallation",
                price: 699,
                oldPrice: 799,
                img: "/images/ac/unins-s.png",
                description: "Deep jet cleaning service for cassette AC units"
            }
        ]
    },
    // ================= Addon =================
    {
        id: "compressor-replacement",
        title: "Compressor Replacement",
        category: "acrepairinstallation",
        subCategory: "ac-addon-services",
        rateCardKey: "ac",
        reviews: 27,
        imgs: {
            thumbnails: [
                "/images/ac/comp-rep.png"
            ],
            previews: [
                "/images/ac/comp-rep.png"
            ]
        },
        description: {
            about: [
                "Removal of faulty compressor",
                "Installation of new compatible compressor",
                "Vacuuming of refrigeration system",
                "Refrigerant gas refill",
                "Electrical connection setup",
                "Complete AC performance testing"
            ],
            benefits: [
                "Restores AC cooling performance",
                "Improves system reliability",
                "Prevents further compressor damage",
                "Ensures stable AC operation",
                "Increases AC lifespan"
            ]
        },
        variants: [
            {
                id: 401,
                title: "Compressor Replacement (0.8 Ton to 1 Ton)",
                price: 6349,
                oldPrice: 7499,
                img: "/images/ac/compressor1.png",
                description: "AC compressor replacement service"
            },
            {
                id: 402,
                title: "Compressor Replacement (1.5 Ton)",
                price: 7349,
                oldPrice: 8499,
                img: "/images/ac/compressor2.png",
                description: "AC compressor replacement service"
            },
            {
                id: 403,
                title: "Compressor Replacement (2 Ton)",
                price: 9049,
                oldPrice: 10499,
                img: "/images/ac/compressor3.png",
                description: "AC compressor replacement service"
            }
        ]
    },
    {
        id: "compressor-labour",
        title: "Replacement Compressor Labour Charge",
        category: "acrepairinstallation",
        subCategory: "ac-addon-services",
        rateCardKey: "ac",
        reviews: 25,
        imgs: {
            thumbnails: [
                "/images/ac/rep-comp.png"
            ],
            previews: [
                "/images/ac/rep-comp.png"
            ]
        },
        variants: [
            {
                id: 404,
                title: "Replacement Compressor 1 to 2 Ton (Labour Extra)",
                price: 1500,
                oldPrice: 2999,
                img: "/images/ac/compressor-labour1.png",
                description: "Labour charge for AC compressor replacement"
            }
        ]
    },
    {
        id: "ac-service-valve",
        title: "Service Valve",
        category: "acrepairinstallation",
        subCategory: "ac-addon-services",
        rateCardKey: "ac",
        reviews: 30,
        imgs: {
            thumbnails: [
                "/images/ac/valve.png"
            ],
            previews: [
                "/images/ac/valve.png"
            ]
        },
        variants: [
            {
                id: 407,
                title: "Service Valve 1/4",
                price: 399,
                oldPrice: 599,
                img: "/images/ac/valve1.png",
                description: "AC service valve replacement"
            },
            {
                id: 408,
                title: "Service Valve 3/8",
                price: 449,
                oldPrice: 699,
                img: "/images/ac/valve2.png",
                description: "AC service valve replacement"
            },
            {
                id: 409,
                title: "Service Valve 5/8",
                price: 599,
                oldPrice: 799,
                img: "/images/ac/valve3.png",
                description: "AC service valve replacement"
            },
            {
                id: 410,
                title: "Service Valve 1/2",
                price: 599,
                oldPrice: 799,
                img: "/images/ac/valve4.png",
                description: "AC service valve replacement"
            }
        ]
    },
    {
        id: "ac-fan-motor",
        title: "Fan Motor",
        category: "acrepairinstallation",
        subCategory: "ac-addon-services",
        rateCardKey: "ac",
        reviews: 21,
        imgs: {
            thumbnails: [
                "/images/ac/fan.png"
            ],
            previews: [
                "/images/ac/fan.png"
            ]
        },
        variants: [
            {
                id: 411,
                title: "AC Fan Motor Split AC Outdoor",
                price: 1799,
                oldPrice: 1999,
                img: "/images/ac/fan-motor1.png",
                description: "AC outdoor fan motor replacement"
            },
            {
                id: 412,
                title: "AC Fan Motor Window AC",
                price: 2499,
                oldPrice: 2999,
                img: "/images/ac/fan-motor2.png",
                description: "AC outdoor fan motor replacement"
            },
            {
                id: 4112,
                title: "DC Fan Motor (Outdoor Unit)",
                price: 3199,
                oldPrice: 3499,
                img: "/images/ac/fan-motor2.png",
                description: "AC outdoor fan motor replacement"
            },
            {
                id: 412,
                title: "DC Fan Motor (Indoor Unit)",
                price: 3399,
                oldPrice: 3999,
                img: "/images/ac/fan-motor2.png",
                description: "AC outdoor fan motor replacement"
            }
        ]
    },
    {
        id: "ac-blower-motor",
        title: "Blower Motor",
        category: "acrepairinstallation",
        subCategory: "ac-addon-services",
        rateCardKey: "ac",
        reviews: 22,
        imgs: {
            thumbnails: [
                "/images/ac/blower.png"
            ],
            previews: [
                "/images/ac/blower.png"
            ]
        },
        variants: [
            {
                id: 413,
                title: "Blower Replacement",
                price: 999,
                oldPrice: 2199,
                img: "/images/ac/blower1.png",
                description: "AC indoor blower motor replacement"
            },
            {
                id: 414,
                title: "Blower Replacement",
                price: 3800,
                oldPrice: 3999,
                img: "/images/ac/blower2.png",
                description: "AC indoor blower motor replacement"
            }
        ]
    },
    {
        id: "ac-contactor",
        title: "Contactor",
        category: "acrepairinstallation",
        subCategory: "ac-addon-services",
        rateCardKey: "ac",
        reviews: 1,
        imgs: {
            thumbnails: [
                "/images/ac/cont.png"
            ],
            previews: [
                "/images/ac/cont.png"
            ]
        },
        variants: [
            {
                id: 415,
                title: "Contactor Replaced",
                price: 499,
                oldPrice: 599,
                img: "/images/ac/contactor1.png",
                description: "AC contactor replacement"
            },
            {
                id: 416,
                title: "Contactor Daikin or O-General",
                price: 1299,
                oldPrice: 1499,
                img: "/images/ac/contactor2.png",
                description: "AC contactor replacement"
            }
        ]
    },
    {
        id: "ac-stabilizer",
        title: "Stabilizer",
        category: "acrepairinstallation",
        subCategory: "ac-addon-services",
        rateCardKey: "ac",
        reviews: 28,
        imgs: {
            thumbnails: [
                "/images/ac/stab.png"
            ],
            previews: [
                "/images/ac/stab.png"
            ]
        },
        description: {
            about: [
                "AC stabilizer installation",
                "Voltage fluctuation protection",
                "Electrical safety check",
                "Stabilizer wiring setup"
            ],
            benefits: [
                "Protects AC from voltage fluctuations",
                "Prevents compressor damage",
                "Improves AC lifespan"
            ]
        },
        variants: [
            {
                id: 417,
                title: "Stabilizer Repair",
                price: 1449,
                oldPrice: 2499,
                img: "/images/ac/stabilizer1.png",
                description: "Professional stabilizer installation for AC"
            },
            {
                id: 418,
                title: "Stabilizer Connection",
                price: 149,
                oldPrice: 449,
                img: "/images/ac/stabilizer2.png",
                description: "Professional stabilizer installation for AC"
            },
            {
                id: 4118,
                title: "Stabilizer Repair (up to Single Boost)",
                price: 1499,
                oldPrice: 2449,
                img: "/images/ac/stabilizer2.png",
                description: "Professional stabilizer installation for AC"
            },
            {
                id: 4118,
                title: "Stabilizer Repair (up to Double Boost)",
                price: 2499,
                oldPrice: 2999,
                img: "/images/ac/stabilizer2.png",
                description: "Professional stabilizer installation for AC"
            }
        ]
    },
    {
        id: "pcb-repair-replace",
        title: "PCB Replace & Repair",
        category: "acrepairinstallation",
        subCategory: "ac-addon-services",
        rateCardKey: "ac",
        reviews: 22,
        imgs: {
            thumbnails: [
                "/images/ac/pcb.png"
            ],
            previews: [
                "/images/ac/pcb.png"
            ]
        },
        description: {
            about: [
                "AC stabilizer installation",
                "Voltage fluctuation protection",
                "Electrical safety check",
                "Stabilizer wiring setup"
            ],
            benefits: [
                "Protects AC from voltage fluctuations",
                "Prevents compressor damage",
                "Improves AC lifespan"
            ]
        },
        variants: [
            {
                id: 419,
                title: "Non Inverter PCB Repair",
                price: 1499,
                oldPrice: 1599,
                img: "/images/ac/pcb1.png",
                description: "AC PCB board repair service"
            },
            {
                id: 420,
                title: "Inverter PCB Repair",
                price: 3999,
                oldPrice: 4599,
                img: "/images/ac/pcb2.png",
                description: "AC PCB board replacement"
            },
            {
                id: 421,
                title: "Fuse Change in PCB",
                price: 149,
                oldPrice: 599,
                img: "/images/ac/pcb3.png",
                description: "AC PCB board repair service"
            },
            {
                id: 422,
                title: "Convert PCB With Remote",
                price: 1499,
                oldPrice: 1599,
                img: "/images/ac/pcb4.png",
                description: "AC PCB board replacement"
            }
        ]
    },
    // {
    //   id: "copper-pipe-service",
    //   title: "Copper Pipe Service",
    //   category: "acrepairinstallation",
    //   subCategory: "ac-addon-services",
    //   rateCardKey: "ac",
    //   reviews: 27,
    //   imgs: {
    //     thumbnails: ["/images/ac/cop-pipe.png"],
    //     previews: ["/images/ac/cop-pipe.png"],
    //   },
    //   description: {
    //   about: [
    //     "Installation or replacement of AC copper pipe",
    //     "Proper pipe insulation for cooling efficiency",
    //     "Leak prevention and sealing",
    //     "Secure pipe fitting with indoor and outdoor units",
    //     "Gas pressure testing after installation",
    //   ],
    //   benefits: [
    //     "Prevents refrigerant gas leakage",
    //     "Improves cooling efficiency",
    //     "Ensures proper refrigerant flow",
    //     "Increases AC lifespan",
    //   ],
    // },
    //   variants: [
    //     {
    //       id: 423,
    //       title: "Copper Pipe 0.5 inch",
    //       price: 2000,
    //       oldPrice: 2500,
    //       img: "/images/ac/copper1.png",
    //       description: "Copper pipe installation for AC",
    //     },
    //     {
    //       id: 424,
    //       title: "Copper Pipe 0.25 inch",
    //       price: 1300,
    //       oldPrice: 2000,
    //       img: "/images/ac/copper2.png",
    //       description: "Copper pipe installation for AC",
    //     },
    //     {
    //       id: 425,
    //       title: "Copper Pipe 0.375 inch",
    //       price: 1500,
    //       oldPrice: 1800,
    //       img: "/images/ac/copper3.png",
    //       description: "Copper pipe installation for AC",
    //     },
    //     {
    //       id: 426,
    //       title: "Copper Pipe 0.625 inch",
    //       price: 1600,
    //       oldPrice: 2000,
    //       img: "/images/ac/copper4.png",
    //       description: "Copper pipe installation for AC",
    //     },
    //   ],
    // },
    {
        id: "ac-reinstallation",
        title: "AC Re - Installation",
        category: "acrepairinstallation",
        subCategory: "ac-addon-services",
        rateCardKey: "ac",
        reviews: 28,
        imgs: {
            thumbnails: [
                "/images/ac/re-ins.png"
            ],
            previews: [
                "/images/ac/re-ins.png"
            ]
        },
        variants: [
            {
                id: 427,
                title: "Re-installation Outdoor",
                price: 699,
                oldPrice: 799,
                img: "/images/ac/reinstall1.png",
                description: "AC reinstall after shifting"
            },
            {
                id: 428,
                title: "Re-installation Indoor",
                price: 699,
                oldPrice: 799,
                img: "/images/ac/reinstall2.png",
                description: "AC reinstall after shifting"
            }
        ]
    },
    {
        id: "sensor",
        title: "Sensor",
        category: "acrepairinstallation",
        subCategory: "ac-addon-services",
        rateCardKey: "ac",
        reviews: 28,
        imgs: {
            thumbnails: [
                "/images/ac/sensor.png"
            ],
            previews: [
                "/images/ac/sensor.png"
            ]
        },
        variants: [
            {
                id: 429,
                title: "Replace Sensor",
                price: 299,
                oldPrice: 599,
                img: "/images/ac/sensor1.png",
                description: "AC reinstall after shifting"
            }
        ]
    },
    {
        id: "coil-repair",
        title: "Coil Repair",
        category: "acrepairinstallation",
        subCategory: "ac-addon-services",
        rateCardKey: "ac",
        reviews: 28,
        imgs: {
            thumbnails: [
                "/images/ac/coil-re.png"
            ],
            previews: [
                "/images/ac/coil-re.png"
            ]
        },
        variants: [
            {
                id: 430,
                title: "Cooling Coil Repair & Anti-Rush (Coating)",
                price: 849,
                oldPrice: 1499,
                img: "/images/ac/coil-re1.png",
                description: "AC reinstall after shifting"
            },
            {
                id: 431,
                title: "Condenser Coil Repair",
                price: 500,
                oldPrice: 1099,
                img: "/images/ac/coil-re2.png",
                description: "AC reinstall after shifting"
            }
        ]
    },
    {
        id: "spare-parts",
        title: "Spare Parts",
        category: "acrepairinstallation",
        subCategory: "ac-addon-services",
        rateCardKey: "ac",
        reviews: 28,
        imgs: {
            thumbnails: [
                "/images/ac/spare.png"
            ],
            previews: [
                "/images/ac/spare.png"
            ]
        },
        variants: [
            {
                id: 432,
                title: "Sleeves (Per mtr)",
                price: 50,
                oldPrice: 99,
                img: "/images/ac/spare1.png",
                description: "AC reinstall after shifting"
            },
            {
                id: 433,
                title: "Drain Pipe Replacement (1m)",
                price: 99,
                oldPrice: 299,
                img: "/images/ac/spare2.png",
                description: "AC reinstall after shifting"
            },
            {
                id: 434,
                title: "Connector Wire(1m)",
                price: 100,
                oldPrice: 120,
                img: "/images/ac/spare3.png",
                description: "AC reinstall after shifting"
            },
            {
                id: 435,
                title: "1 ft Copper Pipe Set(Insulation+Wire)",
                price: 299,
                oldPrice: 499,
                img: "/images/ac/spare4.png",
                description: "AC reinstall after shifting"
            },
            {
                id: 436,
                title: "Anti-Rush Spray",
                price: 199,
                oldPrice: 299,
                img: "/images/ac/spare5.png",
                description: "AC reinstall after shifting"
            },
            {
                id: 437,
                title: "Flap or Swing Motor Rplacement (Labour Charge)",
                price: 399,
                oldPrice: 599,
                img: "/images/ac/spare6.png",
                description: "AC reinstall after shifting"
            },
            {
                id: 438,
                title: "Swing Blade Replacement",
                price: 399,
                oldPrice: 1299,
                img: "/images/ac/spare7.png",
                description: "AC reinstall after shifting"
            },
            {
                id: 439,
                title: "Drain Tray Window AC",
                price: 449,
                oldPrice: 999,
                img: "/images/ac/spare8.png",
                description: "AC reinstall after shifting"
            },
            {
                id: 440,
                title: "Universal Remote",
                price: 599,
                oldPrice: 899,
                img: "/images/ac/spare9.png",
                description: "AC reinstall after shifting"
            },
            {
                id: 441,
                title: "AC Fan Blade",
                price: 649,
                oldPrice: 1200,
                img: "/images/ac/spare10.png",
                description: "AC reinstall after shifting"
            },
            {
                id: 442,
                title: "Motor Bearing Change",
                price: 999,
                oldPrice: 1199,
                img: "/images/ac/spare11.png",
                description: "AC reinstall after shifting"
            },
            {
                id: 443,
                title: "Grill Cover",
                price: 1499,
                oldPrice: 1599,
                img: "/images/ac/spare12.png",
                description: "AC reinstall after shifting"
            },
            {
                id: 444,
                title: "Fan Motor Window AC",
                price: 2400,
                oldPrice: 2999,
                img: "/images/ac/spare13.png",
                description: "AC reinstall after shifting"
            }
        ]
    },
    {
        id: "capacitor",
        title: "Capacitor",
        category: "acrepairinstallation",
        subCategory: "ac-addon-services",
        rateCardKey: "ac",
        reviews: 28,
        imgs: {
            thumbnails: [
                "/images/ac/capa.png"
            ],
            previews: [
                "/images/ac/capa.png"
            ]
        },
        variants: [
            {
                id: 445,
                title: "Compressor Capacitor 25-60 MFD (Labour Charge)",
                price: 399,
                oldPrice: 999,
                img: "/images/ac/capa1.png",
                description: "AC reinstall after shifting"
            },
            {
                id: 446,
                title: "Fan Capacitor(2.5-10 MFD)",
                price: 249,
                oldPrice: 799,
                img: "/images/ac/capa2.png",
                description: "AC reinstall after shifting"
            },
            {
                id: 447,
                title: "Combo Capacitor(Comp with Fan)",
                price: 499,
                oldPrice: 799,
                img: "/images/ac/capa3.png",
                description: "AC reinstall after shifting"
            }
        ]
    },
    {
        id: "split-installation",
        title: "Split Installation",
        category: "acrepairinstallation",
        subCategory: "ac-addon-services",
        rateCardKey: "ac",
        reviews: 28,
        imgs: {
            thumbnails: [
                "/images/ac/sp-ins.png"
            ],
            previews: [
                "/images/ac/sp-ins.png"
            ]
        },
        variants: [
            {
                id: 454,
                title: "Fastener Set 6 Piece",
                price: 149,
                oldPrice: 299,
                img: "/images/ac/sp-ins7.png",
                description: "AC reinstall after shifting"
            },
            {
                id: 448,
                title: "Flare Nut Replacement",
                price: 149,
                oldPrice: 200,
                img: "/images/ac/sp-ins1.png",
                description: "AC reinstall after shifting"
            },
            {
                id: 453,
                title: "Universal Back Plate",
                price: 249,
                oldPrice: 300,
                img: "/images/ac/sp-ins6.png",
                description: "AC reinstall after shifting"
            },
            {
                id: 449,
                title: "Capillary & Filter Replacement",
                price: 299,
                oldPrice: 350,
                img: "/images/ac/sp-ins2.png",
                description: "AC reinstall after shifting"
            },
            {
                id: 450,
                title: "Wall Stand",
                price: 549,
                oldPrice: 799,
                img: "/images/ac/sp-ins3.png",
                description: "AC reinstall after shifting"
            },
            {
                id: 451,
                title: "Floor Stand",
                price: 649,
                oldPrice: 799,
                img: "/images/ac/sp-ins4.png",
                description: "AC reinstall after shifting"
            },
            {
                id: 452,
                title: "Long Stand",
                price: 1299,
                oldPrice: 1949,
                img: "/images/ac/sp-ins5.png",
                description: "AC reinstall after shifting"
            }
        ]
    },
    {
        id: "minor-repairs",
        title: "Minor Repair",
        category: "acrepairinstallation",
        subCategory: "ac-addon-services",
        rateCardKey: "ac",
        reviews: 28,
        imgs: {
            thumbnails: [
                "/images/ac/minor.png"
            ],
            previews: [
                "/images/ac/minor.png"
            ]
        },
        variants: [
            {
                id: 456,
                title: "Adjust Grill Locks with Labour Charge",
                price: 399,
                oldPrice: 499,
                img: "/images/ac/minor2.png",
                description: "AC reinstall after shifting"
            },
            {
                id: 455,
                title: "Water Leakage Repair Split AC",
                price: 499,
                oldPrice: 599,
                img: "/images/ac/minor1.png",
                description: "AC reinstall after shifting"
            },
            {
                id: 457,
                title: "Adjust Pipe or Compresser Screw",
                price: 349,
                oldPrice: 399,
                img: "/images/ac/minor3.png",
                description: "AC reinstall after shifting"
            },
            {
                id: 458,
                title: "External Dust or Stick Removal",
                price: 399,
                oldPrice: 499,
                img: "/images/ac/minor4.png",
                description: "AC reinstall after shifting"
            },
            {
                id: 459,
                title: "Insulation Re-fix",
                price: 399,
                oldPrice: 499,
                img: "/images/ac/minor5.png",
                description: "AC reinstall after shifting"
            },
            {
                id: 460,
                title: "Noise Adjustment(All Types)",
                price: 499,
                oldPrice: 549,
                img: "/images/ac/minor6.png",
                description: "AC reinstall after shifting"
            }
        ]
    },
    {
        id: "copper-coil",
        title: "Copper Coil",
        category: "acrepairinstallation",
        subCategory: "ac-addon-services",
        rateCardKey: "ac",
        reviews: 28,
        imgs: {
            thumbnails: [
                "/images/ac/co-coil.png"
            ],
            previews: [
                "/images/ac/co-coil.png"
            ]
        },
        variants: [
            {
                id: 461,
                title: "Window AC Condenser Coil 1 Ton",
                price: 4000,
                oldPrice: 4200,
                img: "/images/ac/co-coil1.png",
                description: "AC reinstall after shifting"
            },
            {
                id: 462,
                title: "Window AC Cooling Coil 1 Ton",
                price: 4000,
                oldPrice: 4500,
                img: "/images/ac/co-coil2.png",
                description: "AC reinstall after shifting"
            },
            {
                id: 463,
                title: "Split AC Condenser Coil 1 Ton",
                price: 3800,
                oldPrice: 4900,
                img: "/images/ac/co-coil3.png",
                description: "AC reinstall after shifting"
            },
            {
                id: 464,
                title: "Split AC Cooling Coil 1 Ton",
                price: 6500,
                oldPrice: 6700,
                img: "/images/ac/co-coil4.png",
                description: "AC reinstall after shifting"
            },
            {
                id: 465,
                title: "Window AC Condenser Coil 1.5 Ton",
                price: 4500,
                oldPrice: 4699,
                img: "/images/ac/co-coil5.png",
                description: "AC reinstall after shifting"
            },
            {
                id: 466,
                title: "Window AC Condenser Coil 2 Ton",
                price: 2600,
                oldPrice: 2799,
                img: "/images/ac/co-coil6.png",
                description: "AC reinstall after shifting"
            },
            {
                id: 467,
                title: "Window AC Cooling Coil 1.5 Ton",
                price: 4500,
                oldPrice: 4799,
                img: "/images/ac/co-coil7.png",
                description: "AC reinstall after shifting"
            },
            {
                id: 468,
                title: "Window AC Cooling Coil 2 Ton",
                price: 5000,
                oldPrice: 5299,
                img: "/images/ac/co-coil8.png",
                description: "AC reinstall after shifting"
            },
            {
                id: 469,
                title: "Split AC Condenser Coil 1.5 Ton",
                price: 4400,
                oldPrice: 4599,
                img: "/images/ac/co-coil9.png",
                description: "AC reinstall after shifting"
            },
            {
                id: 470,
                title: "Split AC Condenser Coil 2 Ton",
                price: 4800,
                oldPrice: 4900,
                img: "/images/ac/co-coil10.png",
                description: "AC reinstall after shifting"
            },
            {
                id: 471,
                title: "Split AC Cooling Coil 1.5 Ton",
                price: 7500,
                oldPrice: 7800,
                img: "/images/ac/co-coil11.png",
                description: "AC reinstall after shifting"
            },
            {
                id: 472,
                title: "Split AC Cooling Coil 2 Ton",
                price: 8500,
                oldPrice: 8700,
                img: "/images/ac/co-coil12.png",
                description: "AC reinstall after shifting"
            }
        ]
    },
    {
        id: "wire",
        title: "Wire",
        category: "acrepairinstallation",
        subCategory: "ac-addon-services",
        rateCardKey: "ac",
        reviews: 28,
        imgs: {
            thumbnails: [
                "/images/ac/wire.png"
            ],
            previews: [
                "/images/ac/wire.png"
            ]
        },
        variants: [
            {
                id: 473,
                title: "3 Core Wire 2.5mm",
                price: 100.00,
                oldPrice: 149.00,
                img: "/images/ac/wire1.png",
                description: "AC reinstall after shifting"
            },
            {
                id: 474,
                title: "4 Core Wire 2.5mm",
                price: 130,
                oldPrice: 179,
                img: "/images/ac/wire2.png",
                description: "AC reinstall after shifting"
            },
            {
                id: 475,
                title: "6 Core Wire 2.5mm",
                price: 160,
                oldPrice: 199,
                img: "/images/ac/wire3.png",
                description: "AC reinstall after shifting"
            }
        ]
    },
    // ================= HOME CLEANING =================
    {
        id: "bathroom-classic-hand-cleaning",
        title: "Bathroom Classic Hand Cleaning",
        category: "home-cleaning",
        subCategory: "bathroom-cleaning",
        rateCardKey: "cleaning",
        reviews: 10,
        imgs: {
            thumbnails: [
                "/images/ac/bath-class.png"
            ],
            previews: [
                "/images/ac/bath-class.png"
            ]
        },
        variants: [
            {
                id: 501,
                title: "Bathroom Hand Cleaning",
                price: 449,
                oldPrice: 499,
                img: "/images/ac/wire1.png",
                description: "AC reinstall after shifting"
            },
            {
                id: 502,
                title: "2 Bathroom Cleaning",
                price: 769,
                oldPrice: 999,
                img: "/images/ac/wire2.png",
                description: "AC reinstall after shifting"
            },
            {
                id: 503,
                title: "3 Bathroom Cleaning",
                price: 1179,
                oldPrice: 1399,
                img: "/images/ac/wire3.png",
                description: "AC reinstall after shifting"
            }
        ]
    },
    {
        id: "bathroom-deep-cleaning",
        title: "Bathroom Deep Cleaning",
        category: "home-cleaning",
        subCategory: "bathroom-cleaning",
        rateCardKey: "cleaning",
        reviews: 9,
        imgs: {
            thumbnails: [
                "/images/ac/bath-deep.png"
            ],
            previews: [
                "/images/ac/bath-deep.png"
            ]
        },
        variants: [
            {
                id: 504,
                title: "Bathroom Deep Cleaning",
                price: 349,
                oldPrice: 699,
                img: "/images/ac/wire3.png",
                description: "AC reinstall after shifting"
            },
            {
                id: 505,
                title: "2 Bathroom Deep Cleaning",
                price: 749,
                oldPrice: 999,
                img: "/images/ac/wire3.png",
                description: "AC reinstall after shifting"
            },
            {
                id: 506,
                title: "3 Bathroom Deep Cleaning",
                price: 1149,
                oldPrice: 1499,
                img: "/images/ac/wire3.png",
                description: "AC reinstall after shifting"
            },
            {
                id: 507,
                title: "4 Bathroom Deep Cleaning",
                price: 1549,
                oldPrice: 1999,
                img: "/images/ac/wire3.png",
                description: "AC reinstall after shifting"
            }
        ]
    },
    {
        id: "basic-kitchen-cleaning",
        title: "Basic Kitchen Cleaning",
        category: "home-cleaning",
        subCategory: "kitchen-cleaning",
        rateCardKey: "cleaning",
        reviews: 11,
        imgs: {
            thumbnails: [
                "/images/ac/basic-kitch.png"
            ],
            previews: [
                "/images/ac/basic-kitch.png"
            ]
        },
        variants: [
            {
                id: 508,
                title: "Basic Kitchen Cleaning",
                price: 949,
                oldPrice: 1499,
                img: "/images/ac/wire3.png",
                description: "AC reinstall after shifting"
            }
        ]
    },
    {
        id: "deep-full-kitchen-cleaning",
        title: "Deep Full Kitchen Cleaning",
        category: "home-cleaning",
        subCategory: "kitchen-cleaning",
        rateCardKey: "cleaning",
        reviews: 11,
        imgs: {
            thumbnails: [
                "/images/ac/deep-kitch.png"
            ],
            previews: [
                "/images/ac/deep-kitch.png"
            ]
        },
        variants: [
            {
                id: 509,
                title: "Deep Kitchen Cleaning",
                price: 1720,
                oldPrice: 1999,
                img: "/images/ac/wire3.png",
                description: "AC reinstall after shifting"
            }
        ]
    },
    {
        id: "complete-hand-cleaning",
        title: "Complete Hand Cleaning",
        category: "home-cleaning",
        subCategory: "home-cleaning",
        rateCardKey: "cleaning",
        reviews: 14,
        imgs: {
            thumbnails: [
                "/images/ac/comp-hand.png"
            ],
            previews: [
                "/images/ac/comp-hand.png"
            ]
        },
        variants: [
            {
                id: 510,
                title: "1 BHK Hand Cleaning",
                price: 1949,
                oldPrice: 2799,
                img: "/images/ac/wire3.png",
                description: "AC reinstall after shifting"
            },
            {
                id: 511,
                title: "2 BHK Hand Cleaning",
                price: 2649,
                oldPrice: 4999,
                img: "/images/ac/wire3.png",
                description: "AC reinstall after shifting"
            },
            {
                id: 512,
                title: "3 BHK Hand Cleaning",
                price: 3249,
                oldPrice: 6999,
                img: "/images/ac/wire3.png",
                description: "AC reinstall after shifting"
            },
            {
                id: 513,
                title: "4 BHK Hand Cleaning",
                price: 3540,
                oldPrice: 7999,
                img: "/images/ac/wire3.png",
                description: "AC reinstall after shifting"
            }
        ]
    },
    {
        id: "complete-deep-machine-cleaning",
        title: "Complete Deep Machine Cleaning",
        category: "home-cleaning",
        subCategory: "home-cleaning",
        rateCardKey: "cleaning",
        reviews: 14,
        imgs: {
            thumbnails: [
                "/images/ac/comp-deep.png"
            ],
            previews: [
                "/images/ac/comp-deep.png"
            ]
        },
        variants: [
            {
                id: 514,
                title: "1 BHK Deep Machine Cleaning",
                price: 2749,
                oldPrice: 3499,
                img: "/images/ac/wire3.png",
                description: "AC reinstall after shifting"
            },
            {
                id: 515,
                title: "2 BHK Deep Machine Cleaning",
                price: 3049,
                oldPrice: 3999,
                img: "/images/ac/wire3.png",
                description: "AC reinstall after shifting"
            },
            {
                id: 516,
                title: "3 BHK Deep Machine Cleaning",
                price: 3799,
                oldPrice: 5999,
                img: "/images/ac/wire3.png",
                description: "AC reinstall after shifting"
            },
            {
                id: 517,
                title: "4 BHK Deep Machine Cleaning",
                price: 5099,
                oldPrice: 7999,
                img: "/images/ac/wire3.png",
                description: "AC reinstall after shifting"
            }
        ]
    },
    {
        id: "bungalow-cleaning",
        title: "Bungalow Cleaning",
        category: "home-cleaning",
        subCategory: "home-cleaning",
        rateCardKey: "cleaning",
        reviews: 14,
        imgs: {
            thumbnails: [
                "/images/ac/bung.png"
            ],
            previews: [
                "/images/ac/bung.png"
            ]
        },
        variants: [
            {
                id: 518,
                title: "Deep Bungalow Cleaning (3000-4000 squareFeet)",
                price: 11999,
                oldPrice: 12999,
                img: "/images/ac/wire3.png",
                description: "AC reinstall after shifting"
            },
            {
                id: 519,
                title: "Deep Bungalow Cleaning (4000-5000 squareFeet)",
                price: 12999,
                oldPrice: 14999,
                img: "/images/ac/wire3.png",
                description: "AC reinstall after shifting"
            },
            {
                id: 520,
                title: "Deep Bungalow Cleaning (6000-7000 squareFeet)",
                price: 13999,
                oldPrice: 16999,
                img: "/images/ac/wire3.png",
                description: "AC reinstall after shifting"
            }
        ]
    },
    {
        id: "basic-chimney-cleaning",
        title: "Basic Chimney Cleaning",
        category: "home-cleaning",
        subCategory: "chimney-cleaning",
        rateCardKey: "cleaning",
        reviews: 14,
        imgs: {
            thumbnails: [
                "/images/ac/chim.png"
            ],
            previews: [
                "/images/ac/chim.png"
            ]
        },
        variants: [
            {
                id: 521,
                title: "Full Basic Chimney Cleaning",
                price: 375,
                oldPrice: 599,
                img: "/images/ac/wire3.png",
                description: "AC reinstall after shifting"
            }
        ]
    },
    {
        id: "deep-chimney-cleaning",
        title: "Deep Chimney Cleaning",
        category: "home-cleaning",
        subCategory: "chimney-cleaning",
        rateCardKey: "cleaning",
        reviews: 14,
        imgs: {
            thumbnails: [
                "/images/ac/chim.png"
            ],
            previews: [
                "/images/ac/chim.png"
            ]
        },
        variants: [
            {
                id: 522,
                title: "Full Deep Chimney Cleaning",
                price: 1199,
                oldPrice: 1699,
                img: "/images/ac/wire3.png",
                description: "AC reinstall after shifting"
            }
        ]
    },
    {
        id: "mattress-vacuum-service",
        title: "Mattress Vacuum Service",
        category: "home-cleaning",
        subCategory: "mattress-cleaning",
        rateCardKey: "cleaning",
        reviews: 14,
        imgs: {
            thumbnails: [
                "/images/ac/matt-vac.png"
            ],
            previews: [
                "/images/ac/matt-vac.png"
            ]
        },
        variants: [
            {
                id: 523,
                title: "Single Mattress Cleaning",
                price: 399,
                oldPrice: 499,
                img: "/images/ac/wire3.png",
                description: "AC reinstall after shifting"
            },
            {
                id: 524,
                title: "Double Mattress Cleaning",
                price: 599,
                oldPrice: 699,
                img: "/images/ac/wire3.png",
                description: "AC reinstall after shifting"
            }
        ]
    },
    {
        id: "sofa-cleaning",
        title: "Sofa Cleaning",
        category: "home-cleaning",
        subCategory: "sofa-cleaning",
        rateCardKey: "cleaning",
        reviews: 14,
        imgs: {
            thumbnails: [
                "/images/ac/sofa-c.png"
            ],
            previews: [
                "/images/ac/sofa-c.png"
            ]
        },
        variants: [
            {
                id: 525,
                title: "Sofa Cleaning 3 Seater",
                price: 399,
                oldPrice: 799,
                img: "/images/ac/wire3.png",
                description: "AC reinstall after shifting"
            },
            {
                id: 526,
                title: "Sofa Cleaning 4 Seater",
                price: 499,
                oldPrice: 899,
                img: "/images/ac/wire3.png",
                description: "AC reinstall after shifting"
            },
            {
                id: 527,
                title: "Sofa Cleaning 5 Seater",
                price: 599,
                oldPrice: 999,
                img: "/images/ac/wire3.png",
                description: "AC reinstall after shifting"
            },
            {
                id: 528,
                title: "Sofa Cleaning 6 Seater",
                price: 699,
                oldPrice: 1199,
                img: "/images/ac/wire3.png",
                description: "AC reinstall after shifting"
            },
            {
                id: 529,
                title: "Sofa Cleaning 7 Seater",
                price: 799,
                oldPrice: 1399,
                img: "/images/ac/wire3.png",
                description: "AC reinstall after shifting"
            },
            {
                id: 530,
                title: "Sofa Cleaning 8 Seater",
                price: 899,
                oldPrice: 1599,
                img: "/images/ac/wire3.png",
                description: "AC reinstall after shifting"
            },
            {
                id: 531,
                title: "Sofa Cleaning 9 Seater",
                price: 999,
                oldPrice: 1899,
                img: "/images/ac/wire3.png",
                description: "AC reinstall after shifting"
            },
            {
                id: 532,
                title: "Sofa Cleaning 10 Seater",
                price: 1099,
                oldPrice: 1999,
                img: "/images/ac/wire3.png",
                description: "AC reinstall after shifting"
            },
            {
                id: 533,
                title: "Sofa Cleaning 11 Seater",
                price: 1199,
                oldPrice: 2399,
                img: "/images/ac/wire3.png",
                description: "AC reinstall after shifting"
            },
            {
                id: 534,
                title: "Sofa Cleaning 12 Seater",
                price: 1299,
                oldPrice: 2599,
                img: "/images/ac/wire3.png",
                description: "AC reinstall after shifting"
            }
        ]
    },
    {
        id: "carpet-deep-cleaning",
        title: "Carpet Deep Cleaning",
        category: "home-cleaning",
        subCategory: "sofa-cleaning",
        rateCardKey: "cleaning",
        reviews: 14,
        imgs: {
            thumbnails: [
                "/images/ac/carpet-d.png"
            ],
            previews: [
                "/images/ac/carpet-d.png"
            ]
        },
        variants: [
            {
                id: 535,
                title: "Carpet Deep Cleaning 25 sq ft",
                price: 399,
                oldPrice: 699,
                img: "/images/ac/wire3.png",
                description: "AC reinstall after shifting"
            },
            {
                id: 536,
                title: "Carpet Deep Cleaning (25 to 50 sq ft)",
                price: 499,
                oldPrice: 699,
                img: "/images/ac/wire3.png",
                description: "AC reinstall after shifting"
            }
        ]
    },
    {
        id: "cushion-cleaning",
        title: "Cushion Cleaning",
        category: "home-cleaning",
        subCategory: "sofa-cleaning",
        rateCardKey: "cleaning",
        reviews: 14,
        imgs: {
            thumbnails: [
                "/images/ac/cushion-c.png"
            ],
            previews: [
                "/images/ac/cushion-c.png"
            ]
        },
        variants: [
            {
                id: 537,
                title: "Cushions Cleaning 5 to 10 Pieces",
                price: 359,
                oldPrice: 699,
                img: "/images/ac/wire3.png",
                description: "AC reinstall after shifting"
            }
        ]
    },
    // ================= PAINTING =================
    {
        id: "single-wall-painting",
        title: "Single Wall Painting",
        category: "painting",
        subCategory: "interior-painting",
        rateCardKey: "painting",
        reviews: 8,
        imgs: {
            thumbnails: [
                "/images/ac/sing-wall.png"
            ],
            previews: [
                "/images/ac/sing-wall.png"
            ]
        },
        variants: [
            {
                id: 601,
                title: "Visiting Charge",
                price: 0.00,
                oldPrice: 49,
                img: "/images/ac/wire3.png",
                description: "AC reinstall after shifting"
            }
        ]
    },
    {
        id: "single-room-painting",
        title: "Single Room Painting",
        category: "painting",
        subCategory: "interior-painting",
        rateCardKey: "painting",
        reviews: 8,
        imgs: {
            thumbnails: [
                "/images/ac/sing-room.png"
            ],
            previews: [
                "/images/ac/sing-room.png"
            ]
        },
        variants: [
            {
                id: 602,
                title: "Visiting Charge",
                price: 0.00,
                oldPrice: 49,
                img: "/images/ac/wire3.png",
                description: "AC reinstall after shifting"
            }
        ]
    },
    {
        id: "front-home-painting",
        title: "Front Home Painting",
        category: "painting",
        subCategory: "exterior-painting",
        rateCardKey: "painting",
        reviews: 8,
        imgs: {
            thumbnails: [
                "/images/ac/front-home.png"
            ],
            previews: [
                "/images/ac/front-home.png"
            ]
        },
        variants: [
            {
                id: 603,
                title: "Visiting Charge",
                price: 0.00,
                oldPrice: 49,
                img: "/images/ac/wire3.png",
                description: "AC reinstall after shifting"
            }
        ]
    },
    {
        id: "full-home-painting",
        title: "Full Home Painting",
        category: "painting",
        subCategory: "exterior-painting",
        rateCardKey: "painting",
        reviews: 8,
        imgs: {
            thumbnails: [
                "/images/ac/full-home.png"
            ],
            previews: [
                "/images/ac/full-home.png"
            ]
        },
        variants: [
            {
                id: 604,
                title: "Visiting Charge",
                price: 0.00,
                oldPrice: 49,
                img: "/images/ac/wire3.png",
                description: "AC reinstall after shifting"
            }
        ]
    },
    {
        id: "grill-painting",
        title: "Grill Painting",
        category: "painting",
        subCategory: "grill-painting",
        rateCardKey: "painting",
        reviews: 8,
        imgs: {
            thumbnails: [
                "/images/ac/grill-pai.png"
            ],
            previews: [
                "/images/ac/grill-pai.png"
            ]
        },
        variants: [
            {
                id: 605,
                title: "Visiting Charge",
                price: 0.00,
                oldPrice: 49,
                img: "/images/ac/wire3.png",
                description: "AC reinstall after shifting"
            }
        ]
    },
    {
        id: "window-painting",
        title: "Window Painting",
        category: "painting",
        subCategory: "grill-painting",
        rateCardKey: "painting",
        reviews: 8,
        imgs: {
            thumbnails: [
                "/images/ac/wind-pai.png"
            ],
            previews: [
                "/images/ac/wind-pai.png"
            ]
        },
        variants: [
            {
                id: 606,
                title: "Visiting Charge",
                price: 0.00,
                oldPrice: 49,
                img: "/images/ac/wire3.png",
                description: "AC reinstall after shifting"
            }
        ]
    },
    {
        id: "door-painting",
        title: "Door Painting",
        category: "painting",
        subCategory: "grill-painting",
        rateCardKey: "painting",
        reviews: 8,
        imgs: {
            thumbnails: [
                "/images/ac/do-pai.png"
            ],
            previews: [
                "/images/ac/do-pai.png"
            ]
        },
        variants: [
            {
                id: 607,
                title: "Visiting Charge",
                price: 0.00,
                oldPrice: 49,
                img: "/images/ac/wire3.png",
                description: "AC reinstall after shifting"
            }
        ]
    },
    {
        id: "exterior-water-proofing",
        title: "Exterior Water Proofing",
        category: "painting",
        subCategory: "water-proofing",
        rateCardKey: "painting",
        reviews: 8,
        imgs: {
            thumbnails: [
                "/images/ac/ex-wat-pr.png"
            ],
            previews: [
                "/images/ac/ex-wat-pr.png"
            ]
        },
        variants: [
            {
                id: 608,
                title: "Visiting Charge",
                price: 0.00,
                oldPrice: 49,
                img: "/images/ac/wire3.png",
                description: "AC reinstall after shifting"
            }
        ]
    },
    {
        id: "interior-water-proofing",
        title: "Interior Water Proofing",
        category: "painting",
        subCategory: "water-proofing",
        rateCardKey: "painting",
        reviews: 8,
        imgs: {
            thumbnails: [
                "/images/ac/in-wat-pr.png"
            ],
            previews: [
                "/images/ac/in-wat-pr.png"
            ]
        },
        variants: [
            {
                id: 609,
                title: "Visiting Charge",
                price: 0.00,
                oldPrice: 49,
                img: "/images/ac/wire3.png",
                description: "AC reinstall after shifting"
            }
        ]
    },
    {
        id: "grouting",
        title: "Grouting",
        category: "painting",
        subCategory: "water-proofing",
        rateCardKey: "painting",
        reviews: 8,
        imgs: {
            thumbnails: [
                "/images/ac/grout.png"
            ],
            previews: [
                "/images/ac/grout.png"
            ]
        },
        variants: [
            {
                id: 610,
                title: "Visiting Charge",
                price: 0.00,
                oldPrice: 49,
                img: "/images/ac/wire3.png",
                description: "AC reinstall after shifting"
            }
        ]
    },
    {
        id: "damp-proofing",
        title: "Damp Proofing",
        category: "painting",
        subCategory: "water-proofing",
        rateCardKey: "painting",
        reviews: 8,
        imgs: {
            thumbnails: [
                "/images/ac/da-pr.png"
            ],
            previews: [
                "/images/ac/da-pr.png"
            ]
        },
        variants: [
            {
                id: 611,
                title: "Visiting Charge",
                price: 0.00,
                oldPrice: 49,
                img: "/images/ac/wire3.png",
                description: "AC reinstall after shifting"
            }
        ]
    },
    {
        id: "bed-polish",
        title: "Bed Polish",
        category: "painting",
        subCategory: "wood-polish",
        rateCardKey: "painting",
        reviews: 8,
        imgs: {
            thumbnails: [
                "/images/ac/bed-po.png"
            ],
            previews: [
                "/images/ac/bed-po.png"
            ]
        },
        variants: [
            {
                id: 612,
                title: "Visiting Charge",
                price: 0.00,
                oldPrice: 49,
                img: "/images/ac/wire3.png",
                description: "AC reinstall after shifting"
            }
        ]
    },
    {
        id: "door-polish",
        title: "Door Polish",
        category: "painting",
        subCategory: "wood-polish",
        rateCardKey: "painting",
        reviews: 8,
        imgs: {
            thumbnails: [
                "/images/ac/door-po.png"
            ],
            previews: [
                "/images/ac/door-po.png"
            ]
        },
        variants: [
            {
                id: 613,
                title: "Visiting Charge",
                price: 0.00,
                oldPrice: 49,
                img: "/images/ac/wire3.png",
                description: "AC reinstall after shifting"
            }
        ]
    },
    {
        id: "window-polish",
        title: "Window Polish",
        category: "painting",
        subCategory: "wood-polish",
        rateCardKey: "painting",
        reviews: 8,
        imgs: {
            thumbnails: [
                "/images/ac/wind-po.png"
            ],
            previews: [
                "/images/ac/wind-po.png"
            ]
        },
        variants: [
            {
                id: 614,
                title: "Visiting Charge",
                price: 0.00,
                oldPrice: 49,
                img: "/images/ac/wire3.png",
                description: "AC reinstall after shifting"
            }
        ]
    },
    // ================= HOME APPLIANCES =================
    {
        id: "chimney-installation-wall-mount",
        title: "Chimney Installation Wall Mount",
        category: "home-appliances",
        subCategory: "chimney-repair-service",
        rateCardKey: "appliances",
        reviews: 8,
        imgs: {
            thumbnails: [
                "/images/ac/chim-inst.png"
            ],
            previews: [
                "/images/ac/chim-inst.png"
            ]
        },
        variants: [
            {
                id: 701,
                title: "Chimney Installation By Any Brand",
                price: 549,
                oldPrice: 899,
                img: "/images/ac/wire3.png",
                description: "AC reinstall after shifting"
            }
        ]
    },
    {
        id: "chimney-inspection-repair-warranty",
        title: "Chimney Inspection & Repair Warranty",
        category: "home-appliances",
        subCategory: "chimney-repair-service",
        rateCardKey: "appliances",
        reviews: 8,
        imgs: {
            thumbnails: [
                "/images/ac/chim-ins.png"
            ],
            previews: [
                "/images/ac/chim-ins.png"
            ]
        },
        variants: [
            {
                id: 702,
                title: "Chimney Inspection",
                price: 259,
                oldPrice: 599,
                img: "/images/ac/wire3.png",
                description: "AC reinstall after shifting"
            }
        ]
    },
    {
        id: "water-purifier-service",
        title: "Water Purifier Service",
        category: "home-appliances",
        subCategory: "ro-repair",
        rateCardKey: "appliances",
        reviews: 8,
        imgs: {
            thumbnails: [
                "/images/ac/water-p.png"
            ],
            previews: [
                "/images/ac/water-p.png"
            ]
        },
        variants: [
            {
                id: 703,
                title: "Water Purifier Service",
                price: 349,
                oldPrice: 399,
                img: "/images/ac/wire3.png",
                description: "AC reinstall after shifting"
            },
            {
                id: 704,
                title: "Water Purifier Installation",
                price: 399,
                oldPrice: 599,
                img: "/images/ac/wire3.png",
                description: "AC reinstall after shifting"
            },
            {
                id: 705,
                title: "Water Purifier Uninstallation",
                price: 399,
                oldPrice: 599,
                img: "/images/ac/wire3.png",
                description: "AC reinstall after shifting"
            }
        ]
    },
    {
        id: "geyser-service-repair",
        title: "Geyser Service Repair",
        category: "home-appliances",
        subCategory: "geyser-repair-service",
        rateCardKey: "appliances",
        reviews: 8,
        imgs: {
            thumbnails: [
                "/images/ac/geyser.png"
            ],
            previews: [
                "/images/ac/geyser.png"
            ]
        },
        variants: [
            {
                id: 706,
                title: "Geyser Inspection Service",
                price: 169,
                oldPrice: 199,
                img: "/images/ac/wire3.png",
                description: "AC reinstall after shifting"
            },
            {
                id: 707,
                title: "Geyser Installation",
                price: 499,
                oldPrice: 599,
                img: "/images/ac/wire3.png",
                description: "AC reinstall after shifting"
            },
            {
                id: 708,
                title: "Geyser Uninstallation",
                price: 399,
                oldPrice: 599,
                img: "/images/ac/wire3.png",
                description: "AC reinstall after shifting"
            },
            {
                id: 709,
                title: "Geyser Servicing",
                price: 499,
                oldPrice: 599,
                img: "/images/ac/wire3.png",
                description: "AC reinstall after shifting"
            },
            {
                id: 710,
                title: "Geyser Shifting",
                price: 999,
                oldPrice: 1299,
                img: "/images/ac/wire3.png",
                description: "AC reinstall after shifting"
            }
        ]
    },
    {
        id: "washing-machine-inspection",
        title: "Washing Machine Inspection-Front Load",
        category: "home-appliances",
        subCategory: "washing-machine-service",
        rateCardKey: "appliances",
        reviews: 7,
        imgs: {
            thumbnails: [
                "/images/ac/washing-machine.png"
            ],
            previews: [
                "/images/ac/washing-machine.png"
            ]
        },
        variants: [
            {
                id: 711,
                title: "Washing Machine Inspection-Front Load",
                price: 249,
                oldPrice: 299,
                img: "/images/ac/wire3.png",
                description: "AC reinstall after shifting"
            },
            {
                id: 712,
                title: "Washing Machine Inspection-Top Load",
                price: 269,
                oldPrice: 299,
                img: "/images/ac/wire3.png",
                description: "AC reinstall after shifting"
            },
            {
                id: 713,
                title: "Washing Machine Inspection Semi Full Automic",
                price: 269,
                oldPrice: 299,
                img: "/images/ac/wire3.png",
                description: "AC reinstall after shifting"
            }
        ]
    },
    // {
    //   id: "microwave-repair",
    //   title: "Microwave Repair",
    //   category: "home-appliances",
    //   subCategory: "microwave",
    //   rateCardKey: "appliances",
    //   reviews: 6,
    //   imgs: {
    //     thumbnails: ["/images/ac/microwave.png"],
    //     previews: ["/images/ac/microwave.png"],
    //   },
    //   variants: [],
    // },
    // ================= INTERIOR =================
    {
        id: "home-visit",
        title: "Home Visit",
        category: "home-interior-renovation",
        subCategory: "visit",
        rateCardKey: "interior",
        reviews: 9,
        imgs: {
            thumbnails: [
                "/images/ac/home-visit.png"
            ],
            previews: [
                "/images/ac/home-visit.png"
            ]
        },
        variants: [
            {
                id: 714,
                title: "Visit",
                price: 99,
                oldPrice: 199,
                img: "/images/ac/wire3.png",
                description: "AC reinstall after shifting"
            }
        ]
    },
    // ================= Plumber =================
    {
        id: "wash-basin-installation",
        title: "Wash Basin Installation",
        category: "plumber-services",
        subCategory: "basin-sink",
        rateCardKey: "plumber",
        reviews: 12,
        imgs: {
            thumbnails: [
                "/images/ac/wash-basin.png"
            ],
            previews: [
                "/images/ac/wash-basin.png"
            ]
        },
        variants: []
    },
    {
        id: "water-pipe-replacement",
        title: "Water Pipe Replacement",
        category: "plumber-services",
        subCategory: "basin-sink",
        rateCardKey: "plumber",
        reviews: 12,
        imgs: {
            thumbnails: [
                "/images/ac/waste-pipe.png"
            ],
            previews: [
                "/images/ac/waste-pipe.png"
            ]
        },
        variants: []
    },
    {
        id: "sink-drainage-removal",
        title: "Sink Drainage Removal",
        category: "plumber-services",
        subCategory: "basin-sink",
        rateCardKey: "plumber",
        reviews: 12,
        imgs: {
            thumbnails: [
                "/images/ac/sink-drain.png"
            ],
            previews: [
                "/images/ac/sink-drain.png"
            ]
        },
        variants: []
    },
    {
        id: "bath-accessory-installation",
        title: "Bath Accessory Installation",
        category: "plumber-services",
        subCategory: "bath-fittings",
        rateCardKey: "plumber",
        reviews: 12,
        imgs: {
            thumbnails: [
                "/images/ac/bath-access.png"
            ],
            previews: [
                "/images/ac/bath-access.png"
            ]
        },
        variants: []
    },
    {
        id: "tap-installation",
        title: "Tap Installation",
        category: "plumber-services",
        subCategory: "tap-fitting",
        rateCardKey: "plumber",
        reviews: 12,
        imgs: {
            thumbnails: [
                "/images/ac/tap-ins.png"
            ],
            previews: [
                "/images/ac/tap-ins.png"
            ]
        },
        variants: []
    },
    {
        id: "ceiling-mounted",
        title: "Ceiling Mounted",
        category: "plumber-services",
        subCategory: "shower-installation",
        rateCardKey: "plumber",
        reviews: 12,
        imgs: {
            thumbnails: [
                "/images/ac/ceil-mount.png"
            ],
            previews: [
                "/images/ac/ceil-mount.png"
            ]
        },
        variants: []
    },
    {
        id: "wall-mounted-hand-held",
        title: "Wall Mounted/Hand Held",
        category: "plumber-services",
        subCategory: "shower-installation",
        rateCardKey: "plumber",
        reviews: 12,
        imgs: {
            thumbnails: [
                "/images/ac/wall-mount.png"
            ],
            previews: [
                "/images/ac/wall-mount.png"
            ]
        },
        variants: []
    },
    {
        id: "waste-pipe-basin",
        title: "Waste Pipe Basin",
        category: "plumber-services",
        subCategory: "water-coupling",
        rateCardKey: "plumber",
        reviews: 12,
        imgs: {
            thumbnails: [
                "/images/ac/was-pipe.png"
            ],
            previews: [
                "/images/ac/was-pipe.png"
            ]
        },
        variants: []
    },
    {
        id: "bottle-trap-basin",
        title: "Bottle Trap Basin",
        category: "plumber-services",
        subCategory: "water-coupling",
        rateCardKey: "plumber",
        reviews: 12,
        imgs: {
            thumbnails: [
                "/images/ac/bot-trap.png"
            ],
            previews: [
                "/images/ac/bot-trap.png"
            ]
        },
        variants: []
    },
    {
        id: "drainage-cover-installation",
        title: "Drainage Cover Installation",
        category: "plumber-services",
        subCategory: "drainage",
        rateCardKey: "plumber",
        reviews: 12,
        imgs: {
            thumbnails: [
                "/images/ac/drain-cover.png"
            ],
            previews: [
                "/images/ac/drain-cover.png"
            ]
        },
        variants: []
    },
    {
        id: "bathroom-drainage-removal",
        title: "Bathroom Drainage Removal",
        category: "plumber-services",
        subCategory: "drainage",
        rateCardKey: "plumber",
        reviews: 12,
        imgs: {
            thumbnails: [
                "/images/ac/bath-drain.png"
            ],
            previews: [
                "/images/ac/bath-drain.png"
            ]
        },
        variants: []
    },
    {
        id: "balcony-drainage-removal",
        title: "Balcony Drainage Removal",
        category: "plumber-services",
        subCategory: "drainage",
        rateCardKey: "plumber",
        reviews: 12,
        imgs: {
            thumbnails: [
                "/images/ac/bal-drain.png"
            ],
            previews: [
                "/images/ac/bal-drain.png"
            ]
        },
        variants: []
    },
    {
        id: "concealed-pvc-flush-tank",
        title: "Concealed PVC Flush Tank",
        category: "plumber-services",
        subCategory: "flush-tank-repair",
        rateCardKey: "plumber",
        reviews: 12,
        imgs: {
            thumbnails: [
                "/images/ac/con-pvc.png"
            ],
            previews: [
                "/images/ac/con-pvc.png"
            ]
        },
        variants: []
    },
    {
        id: "concealed-push-cock-flush-tank",
        title: "Concealed Push Cock Flush Tank",
        category: "plumber-services",
        subCategory: "flush-tank-repair",
        rateCardKey: "plumber",
        reviews: 12,
        imgs: {
            thumbnails: [
                "/images/ac/con-push.png"
            ],
            previews: [
                "/images/ac/con-push.png"
            ]
        },
        variants: []
    },
    {
        id: "flush-tank-repair",
        title: "Flush Tank Repair (External Ceramic)",
        category: "plumber-services",
        subCategory: "flush-tank-repair",
        rateCardKey: "plumber",
        reviews: 12,
        imgs: {
            thumbnails: [
                "/images/ac/flush-tank.png"
            ],
            previews: [
                "/images/ac/flush-tank.png"
            ]
        },
        variants: []
    },
    {
        id: "wastern-toilet-repair",
        title: "Wastern Toilet Repair (Floor Mounted)",
        category: "plumber-services",
        subCategory: "flush-tank-repair",
        rateCardKey: "plumber",
        reviews: 12,
        imgs: {
            thumbnails: [
                "/images/ac/wastern-toilet.png"
            ],
            previews: [
                "/images/ac/wastern-toilet.png"
            ]
        },
        variants: []
    },
    {
        id: "toilet-pot-blockage-removal",
        title: "Toilet Pot Blockage Removal",
        category: "plumber-services",
        subCategory: "flush-tank-repair",
        rateCardKey: "plumber",
        reviews: 12,
        imgs: {
            thumbnails: [
                "/images/ac/toilet-pot.png"
            ],
            previews: [
                "/images/ac/toilet-pot.png"
            ]
        },
        variants: []
    },
    {
        id: "jet-spray-installation",
        title: "Jet Spray Installation",
        category: "plumber-services",
        subCategory: "flush-tank-repair",
        rateCardKey: "plumber",
        reviews: 12,
        imgs: {
            thumbnails: [
                "/images/ac/jet-sp.png"
            ],
            previews: [
                "/images/ac/jet-sp.png"
            ]
        },
        variants: []
    },
    {
        id: "cockroach-termite",
        title: "Cockroach, Ant & Termite Control And Kitchen & Bathroom Total Pest Control",
        category: "pest-control",
        subCategory: "cockroach-ant-termite-control",
        rateCardKey: "pest",
        reviews: 12,
        imgs: {
            thumbnails: [
                "/images/ac/cock-ant.png"
            ],
            previews: [
                "/images/ac/cock-ant.png"
            ]
        },
        variants: []
    },
    {
        id: "cockroach-control-service",
        title: "Cockroach Control Service",
        category: "pest-control",
        subCategory: "pest-control-bungalow",
        rateCardKey: "pest",
        reviews: 12,
        imgs: {
            thumbnails: [
                "/images/ac/cock-control.png"
            ],
            previews: [
                "/images/ac/cock-control.png"
            ]
        },
        variants: []
    },
    {
        id: "termite-control-apartment",
        title: "Termite Control Apartment",
        category: "pest-control",
        subCategory: "pest-control-bungalow",
        rateCardKey: "pest",
        reviews: 12,
        imgs: {
            thumbnails: [
                "/images/ac/ter-apart.png"
            ],
            previews: [
                "/images/ac/ter-apart.png"
            ]
        },
        variants: []
    },
    {
        id: "termite-control-bungalow",
        title: "Termite Control Bungalow",
        category: "pest-control",
        subCategory: "pest-control-bungalow",
        rateCardKey: "pest",
        reviews: 12,
        imgs: {
            thumbnails: [
                "/images/ac/ter-bung.png"
            ],
            previews: [
                "/images/ac/ter-bung.png"
            ]
        },
        variants: []
    },
    {
        id: "power-unit",
        title: "Power Unit",
        category: "refrigerator",
        subCategory: "single-door",
        rateCardKey: "pest",
        reviews: 12,
        imgs: {
            thumbnails: [
                "/images/ac/pow-uni.png"
            ],
            previews: [
                "/images/ac/pow-uni.png"
            ]
        },
        variants: []
    },
    {
        id: "cooling-issue",
        title: "Cooling Issue",
        category: "refrigerator",
        subCategory: "single-door",
        rateCardKey: "pest",
        reviews: 12,
        imgs: {
            thumbnails: [
                "/images/ac/coo-uni.png"
            ],
            previews: [
                "/images/ac/coo-uni.png"
            ]
        },
        variants: []
    },
    {
        id: "gas-charge",
        title: "Gas Charge",
        category: "refrigerator",
        subCategory: "single-door",
        rateCardKey: "pest",
        reviews: 12,
        imgs: {
            thumbnails: [
                "/images/ac/gas-ch.png"
            ],
            previews: [
                "/images/ac/gas-ch.png"
            ]
        },
        variants: []
    },
    {
        id: "compressor",
        title: "Compressor",
        category: "refrigerator",
        subCategory: "single-door",
        rateCardKey: "pest",
        reviews: 12,
        imgs: {
            thumbnails: [
                "/images/ac/com.png"
            ],
            previews: [
                "/images/ac/com.png"
            ]
        },
        variants: []
    },
    {
        id: "minor-repair",
        title: "Minor Repair (Labour ₹299)",
        category: "refrigerator",
        subCategory: "single-door",
        rateCardKey: "pest",
        reviews: 12,
        imgs: {
            thumbnails: [
                "/images/ac/min-re-la.png"
            ],
            previews: [
                "/images/ac/min-re-la.png"
            ]
        },
        variants: []
    },
    {
        id: "accessories",
        title: "Accessories",
        category: "refrigerator",
        subCategory: "single-door",
        rateCardKey: "pest",
        reviews: 12,
        imgs: {
            thumbnails: [
                "/images/ac/acc.png"
            ],
            previews: [
                "/images/ac/acc.png"
            ]
        },
        variants: []
    },
    {
        id: "power-unit",
        title: "Power Unit",
        category: "refrigerator",
        subCategory: "double-door",
        rateCardKey: "pest",
        reviews: 12,
        imgs: {
            thumbnails: [
                "/images/ac/power-unit.png"
            ],
            previews: [
                "/images/ac/power-unit.png"
            ]
        },
        variants: []
    },
    {
        id: "defrost-issue",
        title: "Defrost Issue",
        category: "refrigerator",
        subCategory: "double-door",
        rateCardKey: "pest",
        reviews: 12,
        imgs: {
            thumbnails: [
                "/images/ac/power-unit.png"
            ],
            previews: [
                "/images/ac/power-unit.png"
            ]
        },
        variants: []
    },
    {
        id: "gas-charge",
        title: "Gas Charge",
        category: "refrigerator",
        subCategory: "double-door",
        rateCardKey: "pest",
        reviews: 12,
        imgs: {
            thumbnails: [
                "/images/ac/power-unit.png"
            ],
            previews: [
                "/images/ac/power-unit.png"
            ]
        },
        variants: []
    },
    {
        id: "compressor-unit",
        title: "Compressor Unit",
        category: "refrigerator",
        subCategory: "double-door",
        rateCardKey: "pest",
        reviews: 12,
        imgs: {
            thumbnails: [
                "/images/ac/power-unit.png"
            ],
            previews: [
                "/images/ac/power-unit.png"
            ]
        },
        variants: []
    },
    {
        id: "cooling-issue",
        title: "Cooling Issue",
        category: "refrigerator",
        subCategory: "double-door",
        rateCardKey: "pest",
        reviews: 12,
        imgs: {
            thumbnails: [
                "/images/ac/power-unit.png"
            ],
            previews: [
                "/images/ac/power-unit.png"
            ]
        },
        variants: []
    },
    {
        id: "accessories",
        title: "Accessories",
        category: "refrigerator",
        subCategory: "double-door",
        rateCardKey: "pest",
        reviews: 12,
        imgs: {
            thumbnails: [
                "/images/ac/power-unit.png"
            ],
            previews: [
                "/images/ac/power-unit.png"
            ]
        },
        variants: []
    },
    {
        id: "power-unit",
        title: "Power Unit",
        category: "refrigerator",
        subCategory: "side-by-side",
        rateCardKey: "pest",
        reviews: 12,
        imgs: {
            thumbnails: [
                "/images/ac/pow-uni.png"
            ],
            previews: [
                "/images/ac/pow-uni.png"
            ]
        },
        variants: []
    },
    {
        id: "power-unit",
        title: "Power Unit",
        category: "refrigerator",
        subCategory: "side-by-side",
        rateCardKey: "pest",
        reviews: 12,
        imgs: {
            thumbnails: [
                "/images/ac/power-unit.png"
            ],
            previews: [
                "/images/ac/power-unit.png"
            ]
        },
        variants: []
    },
    {
        id: "power-unit",
        title: "Power Unit",
        category: "refrigerator",
        subCategory: "side-by-side",
        rateCardKey: "pest",
        reviews: 12,
        imgs: {
            thumbnails: [
                "/images/ac/power-unit.png"
            ],
            previews: [
                "/images/ac/power-unit.png"
            ]
        },
        variants: []
    },
    {
        id: "power-unit",
        title: "Power Unit",
        category: "refrigerator",
        subCategory: "side-by-side",
        rateCardKey: "pest",
        reviews: 12,
        imgs: {
            thumbnails: [
                "/images/ac/power-unit.png"
            ],
            previews: [
                "/images/ac/power-unit.png"
            ]
        },
        variants: []
    },
    {
        id: "power-unit",
        title: "Power Unit",
        category: "refrigerator",
        subCategory: "side-by-side",
        rateCardKey: "pest",
        reviews: 12,
        imgs: {
            thumbnails: [
                "/images/ac/power-unit.png"
            ],
            previews: [
                "/images/ac/power-unit.png"
            ]
        },
        variants: []
    },
    {
        id: "power-unit",
        title: "Power Unit",
        category: "refrigerator",
        subCategory: "side-by-side",
        rateCardKey: "pest",
        reviews: 12,
        imgs: {
            thumbnails: [
                "/images/ac/power-unit.png"
            ],
            previews: [
                "/images/ac/power-unitpng"
            ]
        },
        variants: []
    },
    {
        id: "power-unit",
        title: "Power Unit",
        category: "refrigerator",
        subCategory: "side-by-side",
        rateCardKey: "pest",
        reviews: 12,
        imgs: {
            thumbnails: [
                "/images/ac/power-unit.png"
            ],
            previews: [
                "/images/ac/power-unit.png"
            ]
        },
        variants: []
    },
    {
        id: "power-unit",
        title: "Power Unit",
        category: "refrigerator",
        subCategory: "side-by-side",
        rateCardKey: "pest",
        reviews: 12,
        imgs: {
            thumbnails: [
                "/images/ac/min-re.png"
            ],
            previews: [
                "/images/ac/min-re.png"
            ]
        },
        variants: []
    }
];
const __TURBOPACK__default__export__ = shopData;
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/redux/features/cart-slice.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "addItemToCart",
    ()=>addItemToCart,
    "cart",
    ()=>cart,
    "default",
    ()=>__TURBOPACK__default__export__,
    "removeAllItemsFromCart",
    ()=>removeAllItemsFromCart,
    "removeItemFromCart",
    ()=>removeItemFromCart,
    "selectCartItems",
    ()=>selectCartItems,
    "selectTotalPrice",
    ()=>selectTotalPrice,
    "updateCartItemQuantity",
    ()=>updateCartItemQuantity
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$reselect$2f$dist$2f$reselect$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/reselect/dist/reselect.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$reduxjs$2f$toolkit$2f$dist$2f$redux$2d$toolkit$2e$modern$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/@reduxjs/toolkit/dist/redux-toolkit.modern.mjs [app-client] (ecmascript) <locals>");
;
const initialState = {
    items: []
};
const cart = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$reduxjs$2f$toolkit$2f$dist$2f$redux$2d$toolkit$2e$modern$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["createSlice"])({
    name: "cart",
    initialState,
    reducers: {
        // ✅ Add Item
        addItemToCart: (state, action)=>{
            const item = action.payload;
            const existingItem = state.items.find((cartItem)=>String(cartItem.id) === String(item.id));
            if (existingItem) {
                existingItem.quantity += item.quantity;
            } else {
                // ✅ Full object push so category/subCategory bhi save ho
                state.items.push({
                    ...item
                });
            }
        },
        // ✅ Remove Item
        removeItemFromCart: (state, action)=>{
            const itemId = action.payload;
            state.items = state.items.filter((item)=>String(item.id) !== String(itemId));
        },
        // ✅ Update Quantity
        updateCartItemQuantity: (state, action)=>{
            const { id, quantity } = action.payload;
            const existingItem = state.items.find((item)=>String(item.id) === String(id));
            if (existingItem) {
                existingItem.quantity = quantity;
            }
        },
        // ✅ Clear Cart
        removeAllItemsFromCart: (state)=>{
            state.items = [];
        }
    }
});
const selectCartItems = (state)=>state.cartReducer.items;
const selectTotalPrice = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$reselect$2f$dist$2f$reselect$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createSelector"])([
    selectCartItems
], (items)=>{
    return items.reduce((total, item)=>total + item.price * item.quantity, 0);
});
const { addItemToCart, removeItemFromCart, updateCartItemQuantity, removeAllItemsFromCart } = cart.actions;
const __TURBOPACK__default__export__ = cart.reducer;
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/app/context/CartSidebarModalContext.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "CartModalProvider",
    ()=>CartModalProvider,
    "useCartModalContext",
    ()=>useCartModalContext
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature(), _s1 = __turbopack_context__.k.signature();
"use client";
;
const CartModalContext = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createContext"])(undefined);
const useCartModalContext = ()=>{
    _s();
    const context = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useContext"])(CartModalContext);
    if (!context) {
        throw new Error("useModalContext must be used within a ModalProvider");
    }
    return context;
};
_s(useCartModalContext, "b9L3QQ+jgeyIrH0NfHrJ8nn7VMU=");
const CartModalProvider = ({ children })=>{
    _s1();
    const [isCartModalOpen, setIsCartModalOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const openCartModal = ()=>{
        setIsCartModalOpen(true);
    };
    const closeCartModal = ()=>{
        setIsCartModalOpen(false);
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(CartModalContext.Provider, {
        value: {
            isCartModalOpen,
            openCartModal,
            closeCartModal
        },
        children: children
    }, void 0, false, {
        fileName: "[project]/src/app/context/CartSidebarModalContext.tsx",
        lineNumber: 34,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
_s1(CartModalProvider, "UUCiFZZr3ZT070vmW+6sChc4bLY=");
_c = CartModalProvider;
var _c;
__turbopack_context__.k.register(_c, "CartModalProvider");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/Header/index.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
// import CustomSelect from "./CustomSelect";
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Header$2f$menuData$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/Header/menuData.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Header$2f$Dropdown$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/Header/Dropdown.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$redux$2f$hooks$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/redux/hooks.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Shop$2f$shopData$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/Shop/shopData.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/navigation.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$redux$2f$dist$2f$react$2d$redux$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react-redux/dist/react-redux.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$redux$2f$features$2f$cart$2d$slice$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/redux/features/cart-slice.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$context$2f$CartSidebarModalContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/context/CartSidebarModalContext.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/image.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
;
;
;
;
;
;
const Header = ()=>{
    _s();
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"])();
    const [searchQuery, setSearchQuery] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [searchResults, setSearchResults] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [showResults, setShowResults] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [location, setLocation] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("Detecting...");
    const [fullLocation, setFullLocation] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [openLocationModal, setOpenLocationModal] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    // const [searchQuery, setSearchQuery] = useState("");
    // const [location, setLocation] = useState("Detecting...");
    // const [location, setLocation] = useState("Detecting location...");
    const [navigationOpen, setNavigationOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [stickyMenu, setStickyMenu] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const { openCartModal } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$context$2f$CartSidebarModalContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCartModalContext"])();
    const product = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$redux$2f$hooks$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAppSelector"])({
        "Header.useAppSelector[product]": (state)=>state.cartReducer.items
    }["Header.useAppSelector[product]"]);
    const totalPrice = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$redux$2f$dist$2f$react$2d$redux$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSelector"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$redux$2f$features$2f$cart$2d$slice$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["selectTotalPrice"]);
    const handleOpenCartModal = ()=>{
        openCartModal();
    };
    // Sticky menu
    const handleStickyMenu = ()=>{
        if (window.scrollY >= 80) {
            setStickyMenu(true);
        } else {
            setStickyMenu(false);
        }
    };
    const handleSearch = (value)=>{
        setSearchQuery(value);
        if (value.length < 2) {
            setSearchResults([]);
            setShowResults(false);
            return;
        }
        const filtered = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Shop$2f$shopData$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].filter((service)=>service.title.toLowerCase().includes(value.toLowerCase()));
        setSearchResults(filtered);
        setShowResults(true);
    };
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Header.useEffect": ()=>{
            window.addEventListener("scroll", handleStickyMenu);
            return ({
                "Header.useEffect": ()=>{
                    window.removeEventListener("scroll", handleStickyMenu);
                }
            })["Header.useEffect"];
        }
    }["Header.useEffect"], []);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Header.useEffect": ()=>{
            if (!navigator.geolocation) {
                setLocation("Location not supported");
                return;
            }
            navigator.geolocation.getCurrentPosition({
                "Header.useEffect": async (position)=>{
                    const { latitude, longitude } = position.coords;
                    try {
                        const res = await fetch(`https://nominatim.openstreetmap.org/reverse?lat=${latitude}&lon=${longitude}&format=json`);
                        const data = await res.json();
                        const address = data.address;
                        const shortLocation = `${address.suburb || address.city || address.town}, ${address.state}`;
                        const fullAddress = [
                            address.house_number,
                            address.road,
                            address.suburb,
                            address.city || address.town,
                            address.state,
                            address.postcode
                        ].filter(Boolean).join(", ");
                        setLocation(shortLocation);
                        setFullLocation(fullAddress);
                    } catch  {
                        setLocation("Location unavailable");
                    }
                }
            }["Header.useEffect"]);
        }
    }["Header.useEffect"], []);
    // const options = [
    //   { label: "All Services", value: "0" },
    //   { label: "Ac Repair", value: "1" },
    //   { label: "Home Cleaning", value: "2" },
    //   { label: "Interior Work", value: "3" },
    //   { label: "Home Appliance", value: "4" },
    //   { label: "Painting", value: "5" },
    //   { label: "Electrician", value: "6" },
    // ];
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("header", {
        className: `fixed left-0 top-0 w-full z-9999 bg-white transition-all ease-in-out duration-300 ${stickyMenu && "shadow"}`,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "max-w-[1170px] mx-auto px-4 sm:px-7.5 xl:px-0 ",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: `flex flex-col lg:flex-row gap-5 items-end lg:items-center xl:justify-between ease-out duration-200 ${stickyMenu ? "py-4" : "py-6"}`,
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "xl:w-auto flex-col sm:flex-row w-full flex sm:justify-between sm:items-center gap-5 sm:gap-10",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                    className: "flex-shrink-0",
                                    href: "/",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                        src: "/images/logo/headerlogo.webp",
                                        alt: "Logo",
                                        width: 150,
                                        height: 100
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/Header/index.tsx",
                                        lineNumber: 141,
                                        columnNumber: 15
                                    }, ("TURBOPACK compile-time value", void 0))
                                }, void 0, false, {
                                    fileName: "[project]/src/components/Header/index.tsx",
                                    lineNumber: 140,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "max-w-[475px] w-full",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
                                        onSubmit: (e)=>e.preventDefault(),
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex items-center gap-3 w-full",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                    onClick: ()=>setOpenLocationModal(true),
                                                    className: "flex items-center gap-2 px-4 bg-gray-1 border border-gray-3 rounded-l-[5px] text-sm font-medium text-[#4a4949] h-[42px]",
                                                    children: location
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/Header/index.tsx",
                                                    lineNumber: 153,
                                                    columnNumber: 19
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "relative max-w-[333px] sm:min-w-[333px] w-full",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "absolute left-0 top-1/2 -translate-y-1/2 inline-block w-px h-5.5 bg-gray-4"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/Header/index.tsx",
                                                            lineNumber: 162,
                                                            columnNumber: 21
                                                        }, ("TURBOPACK compile-time value", void 0)),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                            onChange: (e)=>handleSearch(e.target.value),
                                                            value: searchQuery,
                                                            type: "search",
                                                            name: "search",
                                                            id: "search",
                                                            placeholder: "I am looking for...",
                                                            autoComplete: "off",
                                                            className: "custom-search w-full rounded-r-[5px] bg-gray-1 !border-l-0 border border-gray-3 py-2.5 pl-4 pr-10 outline-none ease-in duration-200"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/Header/index.tsx",
                                                            lineNumber: 163,
                                                            columnNumber: 21
                                                        }, ("TURBOPACK compile-time value", void 0)),
                                                        showResults && searchResults.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "absolute left-0 top-full mt-2 w-full bg-white border border-gray-200 rounded-lg shadow-lg z-50 max-h-80 overflow-y-auto",
                                                            children: searchResults.map((item)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    onClick: ()=>{
                                                                        router.push(`/service/${item.id}`);
                                                                        setSearchQuery("");
                                                                        setShowResults(false);
                                                                    },
                                                                    className: "flex items-center gap-3 p-3 hover:bg-gray-100 cursor-pointer",
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                                            src: item.imgs.previews[0],
                                                                            alt: item.title,
                                                                            width: 40,
                                                                            height: 40
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/src/components/Header/index.tsx",
                                                                            lineNumber: 187,
                                                                            columnNumber: 30
                                                                        }, ("TURBOPACK compile-time value", void 0)),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                            className: "text-sm font-medium",
                                                                            children: item.title
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/src/components/Header/index.tsx",
                                                                            lineNumber: 194,
                                                                            columnNumber: 30
                                                                        }, ("TURBOPACK compile-time value", void 0))
                                                                    ]
                                                                }, item.id, true, {
                                                                    fileName: "[project]/src/components/Header/index.tsx",
                                                                    lineNumber: 178,
                                                                    columnNumber: 28
                                                                }, ("TURBOPACK compile-time value", void 0)))
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/Header/index.tsx",
                                                            lineNumber: 175,
                                                            columnNumber: 24
                                                        }, ("TURBOPACK compile-time value", void 0)),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                            id: "search-btn",
                                                            "aria-label": "Search",
                                                            className: "flex items-center justify-center absolute right-3 top-1/2 -translate-y-1/2 ease-in duration-200 hover:text-[#3683ab]",
                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                                                className: "fill-current",
                                                                width: "18",
                                                                height: "18",
                                                                viewBox: "0 0 18 18",
                                                                fill: "none",
                                                                xmlns: "http://www.w3.org/2000/svg",
                                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                                    d: "M17.2687 15.6656L12.6281 11.8969C14.5406 9.28123 14.3437 5.5406 11.9531 3.1781C10.6875 1.91248 8.99995 1.20935 7.19995 1.20935C5.39995 1.20935 3.71245 1.91248 2.44683 3.1781C-0.168799 5.79373 -0.168799 10.0687 2.44683 12.6844C3.71245 13.95 5.39995 14.6531 7.19995 14.6531C8.91558 14.6531 10.5187 14.0062 11.7843 12.8531L16.4812 16.65C16.5937 16.7344 16.7343 16.7906 16.875 16.7906C17.0718 16.7906 17.2406 16.7062 17.3531 16.5656C17.5781 16.2844 17.55 15.8906 17.2687 15.6656ZM7.19995 13.3875C5.73745 13.3875 4.38745 12.825 3.34683 11.7844C1.20933 9.64685 1.20933 6.18748 3.34683 4.0781C4.38745 3.03748 5.73745 2.47498 7.19995 2.47498C8.66245 2.47498 10.0125 3.03748 11.0531 4.0781C13.1906 6.2156 13.1906 9.67498 11.0531 11.7844C10.0406 12.825 8.66245 13.3875 7.19995 13.3875Z",
                                                                    fill: ""
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/components/Header/index.tsx",
                                                                    lineNumber: 216,
                                                                    columnNumber: 25
                                                                }, ("TURBOPACK compile-time value", void 0))
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/Header/index.tsx",
                                                                lineNumber: 208,
                                                                columnNumber: 23
                                                            }, ("TURBOPACK compile-time value", void 0))
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/Header/index.tsx",
                                                            lineNumber: 203,
                                                            columnNumber: 21
                                                        }, ("TURBOPACK compile-time value", void 0))
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/components/Header/index.tsx",
                                                    lineNumber: 160,
                                                    columnNumber: 19
                                                }, ("TURBOPACK compile-time value", void 0))
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/Header/index.tsx",
                                            lineNumber: 152,
                                            columnNumber: 17
                                        }, ("TURBOPACK compile-time value", void 0))
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/Header/index.tsx",
                                        lineNumber: 150,
                                        columnNumber: 15
                                    }, ("TURBOPACK compile-time value", void 0))
                                }, void 0, false, {
                                    fileName: "[project]/src/components/Header/index.tsx",
                                    lineNumber: 149,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/Header/index.tsx",
                            lineNumber: 139,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex w-full lg:w-auto items-center gap-7.5",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "hidden xl:flex items-center gap-3.5",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                            width: "24",
                                            height: "24",
                                            viewBox: "0 0 24 24",
                                            fill: "none",
                                            xmlns: "http://www.w3.org/2000/svg",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                    fillRule: "evenodd",
                                                    clipRule: "evenodd",
                                                    d: "M4.7177 3.09215C5.94388 1.80121 7.9721 2.04307 8.98569 3.47665L10.2467 5.26014C11.0574 6.4068 10.9889 8.00097 10.0214 9.01965L9.7765 9.27743C9.77582 9.27921 9.7751 9.28115 9.77436 9.28323C9.76142 9.31959 9.7287 9.43538 9.7609 9.65513C9.82765 10.1107 10.1793 11.0364 11.607 12.5394C13.0391 14.0472 13.9078 14.4025 14.3103 14.4679C14.484 14.4961 14.5748 14.4716 14.6038 14.4614L15.0124 14.0312C15.8862 13.1113 17.2485 12.9301 18.347 13.5623L20.2575 14.662C21.8904 15.6019 22.2705 17.9011 20.9655 19.275L19.545 20.7705C19.1016 21.2373 18.497 21.6358 17.75 21.7095C15.9261 21.8895 11.701 21.655 7.27161 16.9917C3.13844 12.6403 2.35326 8.85538 2.25401 7.00615L2.92011 6.9704L2.25401 7.00615C2.20497 6.09248 2.61224 5.30879 3.1481 4.74464L4.7177 3.09215ZM7.7609 4.34262C7.24855 3.61797 6.32812 3.57473 5.80528 4.12518L4.23568 5.77767C3.90429 6.12656 3.73042 6.52646 3.75185 6.92576C3.83289 8.43558 4.48307 11.8779 8.35919 15.9587C12.4234 20.2375 16.1676 20.3584 17.6026 20.2167C17.8864 20.1887 18.1783 20.0313 18.4574 19.7375L19.8779 18.2419C20.4907 17.5968 20.3301 16.4345 19.5092 15.962L17.5987 14.8624C17.086 14.5673 16.4854 14.6584 16.1 15.0642L15.6445 15.5437L15.1174 15.043C15.6445 15.5438 15.6438 15.5445 15.6432 15.5452L15.6417 15.5467L15.6388 15.5498L15.6324 15.5562L15.6181 15.5704C15.6078 15.5803 15.5959 15.5913 15.5825 15.6031C15.5556 15.6266 15.5223 15.6535 15.4824 15.6819C15.4022 15.7387 15.2955 15.8012 15.1606 15.8544C14.8846 15.9633 14.5201 16.0216 14.0699 15.9485C13.1923 15.806 12.0422 15.1757 10.5194 13.5724C8.99202 11.9644 8.40746 10.7647 8.27675 9.87259C8.21022 9.41852 8.26346 9.05492 8.36116 8.78035C8.40921 8.64533 8.46594 8.53766 8.51826 8.4559C8.54435 8.41514 8.56922 8.381 8.5912 8.35322C8.60219 8.33933 8.61246 8.32703 8.62182 8.31627L8.63514 8.30129L8.64125 8.29465L8.64415 8.29154L8.64556 8.29004C8.64625 8.28931 8.64694 8.28859 9.17861 8.79357L8.64695 8.28858L8.93376 7.98662C9.3793 7.51755 9.44403 6.72317 9.02189 6.1261L7.7609 4.34262Z",
                                                    fill: "#3683ab"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/Header/index.tsx",
                                                    lineNumber: 238,
                                                    columnNumber: 17
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                    d: "M13.2595 1.88008C13.3257 1.47119 13.7122 1.19381 14.1211 1.26001C14.1464 1.26485 14.2279 1.28007 14.2705 1.28958C14.3559 1.30858 14.4749 1.33784 14.6233 1.38106C14.9201 1.46751 15.3347 1.60991 15.8323 1.83805C16.8286 2.2948 18.1544 3.09381 19.5302 4.46961C20.906 5.84541 21.705 7.17122 22.1617 8.1675C22.3899 8.66511 22.5323 9.07972 22.6187 9.3765C22.6619 9.5249 22.6912 9.64393 22.7102 9.72926C22.7197 9.77193 22.7267 9.80619 22.7315 9.8315L22.7373 9.86269C22.8034 10.2716 22.5286 10.6741 22.1197 10.7403C21.712 10.8063 21.3279 10.5303 21.2601 10.1233C21.258 10.1124 21.2522 10.083 21.2461 10.0553C21.2337 9.99994 21.2124 9.91212 21.1786 9.79597C21.1109 9.56363 20.9934 9.2183 20.7982 8.79262C20.4084 7.94232 19.7074 6.76813 18.4695 5.53027C17.2317 4.2924 16.0575 3.59141 15.2072 3.20158C14.7815 3.00642 14.4362 2.88889 14.2038 2.82122C14.0877 2.78739 13.9417 2.75387 13.8863 2.74154C13.4793 2.67372 13.1935 2.2878 13.2595 1.88008Z",
                                                    fill: "#3683ab"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/Header/index.tsx",
                                                    lineNumber: 244,
                                                    columnNumber: 17
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                    fillRule: "evenodd",
                                                    clipRule: "evenodd",
                                                    d: "M13.4861 5.32955C13.5999 4.93128 14.015 4.70066 14.4133 4.81445L14.2072 5.53559C14.4133 4.81445 14.4136 4.81455 14.414 4.81465L14.4147 4.81486L14.4162 4.81531L14.4196 4.81628L14.4273 4.81859L14.4471 4.82476C14.4622 4.82958 14.481 4.83586 14.5035 4.84383C14.5484 4.85976 14.6077 4.88243 14.6805 4.91363C14.8262 4.97607 15.0253 5.07249 15.2698 5.2172C15.7593 5.50688 16.4275 5.98806 17.2124 6.77303C17.9974 7.558 18.4786 8.22619 18.7683 8.71565C18.913 8.96016 19.0094 9.15923 19.0718 9.30491C19.103 9.37772 19.1257 9.43708 19.1416 9.48199C19.1496 9.50444 19.1559 9.52327 19.1607 9.53835L19.1669 9.55814L19.1692 9.56589L19.1702 9.56922L19.1706 9.57075L19.1708 9.57148C19.1709 9.57184 19.171 9.57219 18.4499 9.77823L19.171 9.57219C19.2848 9.97047 19.0542 10.3856 18.6559 10.4994C18.261 10.6122 17.8496 10.3864 17.7317 9.99438L17.728 9.9836C17.7227 9.96858 17.7116 9.93899 17.6931 9.89579C17.6561 9.80946 17.589 9.66823 17.4774 9.47963C17.2544 9.10289 16.8517 8.53364 16.1518 7.83369C15.4518 7.13374 14.8826 6.73103 14.5058 6.50806C14.3172 6.39645 14.176 6.32935 14.0897 6.29235C14.0465 6.27383 14.0169 6.2628 14.0019 6.25747L13.9911 6.25377C13.599 6.13589 13.3733 5.72445 13.4861 5.32955Z",
                                                    fill: "#3683ab"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/Header/index.tsx",
                                                    lineNumber: 248,
                                                    columnNumber: 17
                                                }, ("TURBOPACK compile-time value", void 0))
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/Header/index.tsx",
                                            lineNumber: 231,
                                            columnNumber: 15
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "block text-2xs text-dark-4 uppercase",
                                                    children: "24/7 SUPPORT"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/Header/index.tsx",
                                                    lineNumber: 257,
                                                    columnNumber: 17
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                                    href: "tel:+918383849293",
                                                    className: "font-medium text-custom-sm text-dark hover:text-[#3683ab]",
                                                    children: "+91 8383849293"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/Header/index.tsx",
                                                    lineNumber: 260,
                                                    columnNumber: 17
                                                }, ("TURBOPACK compile-time value", void 0))
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/Header/index.tsx",
                                            lineNumber: 256,
                                            columnNumber: 15
                                        }, ("TURBOPACK compile-time value", void 0))
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/Header/index.tsx",
                                    lineNumber: 230,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "hidden xl:block w-px h-7.5 bg-gray-4"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/Header/index.tsx",
                                    lineNumber: 267,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex w-full lg:w-auto justify-between items-center gap-5",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex items-center gap-5",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                    href: "/signin",
                                                    className: "flex items-center gap-2.5",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                                            width: "24",
                                                            height: "24",
                                                            viewBox: "0 0 24 24",
                                                            fill: "none",
                                                            xmlns: "http://www.w3.org/2000/svg",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                                    fillRule: "evenodd",
                                                                    clipRule: "evenodd",
                                                                    d: "M12 1.25C9.37666 1.25 7.25001 3.37665 7.25001 6C7.25001 8.62335 9.37666 10.75 12 10.75C14.6234 10.75 16.75 8.62335 16.75 6C16.75 3.37665 14.6234 1.25 12 1.25ZM8.75001 6C8.75001 4.20507 10.2051 2.75 12 2.75C13.7949 2.75 15.25 4.20507 15.25 6C15.25 7.79493 13.7949 9.25 12 9.25C10.2051 9.25 8.75001 7.79493 8.75001 6Z",
                                                                    fill: "#3683ab"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/components/Header/index.tsx",
                                                                    lineNumber: 279,
                                                                    columnNumber: 21
                                                                }, ("TURBOPACK compile-time value", void 0)),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                                    fillRule: "evenodd",
                                                                    clipRule: "evenodd",
                                                                    d: "M12 12.25C9.68646 12.25 7.55494 12.7759 5.97546 13.6643C4.4195 14.5396 3.25001 15.8661 3.25001 17.5L3.24995 17.602C3.24882 18.7638 3.2474 20.222 4.52642 21.2635C5.15589 21.7761 6.03649 22.1406 7.22622 22.3815C8.41927 22.6229 9.97424 22.75 12 22.75C14.0258 22.75 15.5808 22.6229 16.7738 22.3815C17.9635 22.1406 18.8441 21.7761 19.4736 21.2635C20.7526 20.222 20.7512 18.7638 20.7501 17.602L20.75 17.5C20.75 15.8661 19.5805 14.5396 18.0246 13.6643C16.4451 12.7759 14.3136 12.25 12 12.25ZM4.75001 17.5C4.75001 16.6487 5.37139 15.7251 6.71085 14.9717C8.02681 14.2315 9.89529 13.75 12 13.75C14.1047 13.75 15.9732 14.2315 17.2892 14.9717C18.6286 15.7251 19.25 16.6487 19.25 17.5C19.25 18.8078 19.2097 19.544 18.5264 20.1004C18.1559 20.4022 17.5365 20.6967 16.4762 20.9113C15.4193 21.1252 13.9742 21.25 12 21.25C10.0258 21.25 8.58075 21.1252 7.5238 20.9113C6.46354 20.6967 5.84413 20.4022 5.4736 20.1004C4.79033 19.544 4.75001 18.8078 4.75001 17.5Z",
                                                                    fill: "#3683ab"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/components/Header/index.tsx",
                                                                    lineNumber: 285,
                                                                    columnNumber: 21
                                                                }, ("TURBOPACK compile-time value", void 0))
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/components/Header/index.tsx",
                                                            lineNumber: 272,
                                                            columnNumber: 19
                                                        }, ("TURBOPACK compile-time value", void 0)),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                    className: "block text-2xs text-dark-4 uppercase",
                                                                    children: "account"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/components/Header/index.tsx",
                                                                    lineNumber: 294,
                                                                    columnNumber: 21
                                                                }, ("TURBOPACK compile-time value", void 0)),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                    className: "font-medium text-custom-sm text-dark",
                                                                    children: "Sign In"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/components/Header/index.tsx",
                                                                    lineNumber: 297,
                                                                    columnNumber: 21
                                                                }, ("TURBOPACK compile-time value", void 0))
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/components/Header/index.tsx",
                                                            lineNumber: 293,
                                                            columnNumber: 19
                                                        }, ("TURBOPACK compile-time value", void 0))
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/components/Header/index.tsx",
                                                    lineNumber: 271,
                                                    columnNumber: 17
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                    className: "flex items-center gap-2.5",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "inline-block relative",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                                                    width: "24",
                                                                    height: "24",
                                                                    viewBox: "0 0 24 24",
                                                                    fill: "none",
                                                                    xmlns: "http://www.w3.org/2000/svg",
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                                            d: "M15.5433 9.5172C15.829 9.21725 15.8174 8.74252 15.5174 8.45686C15.2175 8.17119 14.7428 8.18277 14.4571 8.48272L12.1431 10.9125L11.5433 10.2827C11.2576 9.98277 10.7829 9.97119 10.483 10.2569C10.183 10.5425 10.1714 11.0173 10.4571 11.3172L11.6 12.5172C11.7415 12.6658 11.9378 12.75 12.1431 12.75C12.3483 12.75 12.5446 12.6658 12.6862 12.5172L15.5433 9.5172Z",
                                                                            fill: "#3683ab"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/src/components/Header/index.tsx",
                                                                            lineNumber: 313,
                                                                            columnNumber: 23
                                                                        }, ("TURBOPACK compile-time value", void 0)),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                                            fillRule: "evenodd",
                                                                            clipRule: "evenodd",
                                                                            d: "M1.29266 2.7512C1.43005 2.36044 1.8582 2.15503 2.24896 2.29242L2.55036 2.39838C3.16689 2.61511 3.69052 2.79919 4.10261 3.00139C4.54324 3.21759 4.92109 3.48393 5.20527 3.89979C5.48725 4.31243 5.60367 4.76515 5.6574 5.26153C5.66124 5.29706 5.6648 5.33321 5.66809 5.36996L17.1203 5.36996C17.9389 5.36995 18.7735 5.36993 19.4606 5.44674C19.8103 5.48584 20.1569 5.54814 20.4634 5.65583C20.7639 5.76141 21.0942 5.93432 21.3292 6.23974C21.711 6.73613 21.7777 7.31414 21.7416 7.90034C21.7071 8.45845 21.5686 9.15234 21.4039 9.97723L21.3935 10.0295L21.3925 10.0341L20.8836 12.5033C20.7339 13.2298 20.6079 13.841 20.4455 14.3231C20.2731 14.8346 20.0341 15.2842 19.6076 15.6318C19.1811 15.9793 18.6925 16.1226 18.1568 16.1882C17.6518 16.25 17.0278 16.25 16.2862 16.25L10.8804 16.25C9.53464 16.25 8.44479 16.25 7.58656 16.1283C6.69032 16.0012 5.93752 15.7285 5.34366 15.1022C4.79742 14.526 4.50529 13.9144 4.35897 13.0601C4.22191 12.2598 4.20828 11.2125 4.20828 9.75996V7.03832C4.20828 6.29837 4.20726 5.80316 4.16611 5.42295C4.12678 5.0596 4.05708 4.87818 3.96682 4.74609C3.87876 4.61723 3.74509 4.4968 3.44186 4.34802C3.11902 4.18961 2.68026 4.03406 2.01266 3.79934L1.75145 3.7075C1.36068 3.57012 1.15527 3.14197 1.29266 2.7512ZM5.70828 6.86996L5.70828 9.75996C5.70828 11.249 5.72628 12.1578 5.83744 12.8068C5.93933 13.4018 6.11202 13.7324 6.43219 14.0701C6.70473 14.3576 7.08235 14.5418 7.79716 14.6432C8.53783 14.7482 9.5209 14.75 10.9377 14.75H16.2406C17.0399 14.75 17.5714 14.7487 17.9746 14.6993C18.3573 14.6525 18.5348 14.571 18.66 14.469C18.7853 14.3669 18.9009 14.2095 19.024 13.8441C19.1537 13.4592 19.2623 12.9389 19.4237 12.156L19.9225 9.73591L19.9229 9.73369C20.1005 8.84376 20.217 8.2515 20.2444 7.80793C20.2704 7.38648 20.2043 7.23927 20.1429 7.15786C20.1367 7.15259 20.0931 7.11565 19.9661 7.07101C19.8107 7.01639 19.5895 6.97049 19.2939 6.93745C18.6991 6.87096 17.9454 6.86996 17.089 6.86996H5.70828Z",
                                                                            fill: "#3683ab"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/src/components/Header/index.tsx",
                                                                            lineNumber: 317,
                                                                            columnNumber: 23
                                                                        }, ("TURBOPACK compile-time value", void 0)),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                                            fillRule: "evenodd",
                                                                            clipRule: "evenodd",
                                                                            d: "M5.2502 19.5C5.2502 20.7426 6.25756 21.75 7.5002 21.75C8.74285 21.75 9.7502 20.7426 9.7502 19.5C9.7502 18.2573 8.74285 17.25 7.5002 17.25C6.25756 17.25 5.2502 18.2573 5.2502 19.5ZM7.5002 20.25C7.08599 20.25 6.7502 19.9142 6.7502 19.5C6.7502 19.0857 7.08599 18.75 7.5002 18.75C7.91442 18.75 8.2502 19.0857 8.2502 19.5C8.2502 19.9142 7.91442 20.25 7.5002 20.25Z",
                                                                            fill: "#3683ab"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/src/components/Header/index.tsx",
                                                                            lineNumber: 323,
                                                                            columnNumber: 23
                                                                        }, ("TURBOPACK compile-time value", void 0)),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                                            fillRule: "evenodd",
                                                                            clipRule: "evenodd",
                                                                            d: "M14.25 19.5001C14.25 20.7427 15.2574 21.7501 16.5 21.7501C17.7426 21.7501 18.75 20.7427 18.75 19.5001C18.75 18.2574 17.7426 17.2501 16.5 17.2501C15.2574 17.2501 14.25 18.2574 14.25 19.5001ZM16.5 20.2501C16.0858 20.2501 15.75 19.9143 15.75 19.5001C15.75 19.0859 16.0858 18.7501 16.5 18.7501C16.9142 18.7501 17.25 19.0859 17.25 19.5001C17.25 19.9143 16.9142 20.2501 16.5 20.2501Z",
                                                                            fill: "#3683ab"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/src/components/Header/index.tsx",
                                                                            lineNumber: 329,
                                                                            columnNumber: 23
                                                                        }, ("TURBOPACK compile-time value", void 0))
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/src/components/Header/index.tsx",
                                                                    lineNumber: 306,
                                                                    columnNumber: 21
                                                                }, ("TURBOPACK compile-time value", void 0)),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                    className: "flex items-center justify-center font-medium text-2xs absolute -right-2 -top-2.5 bg-[#3683ab] w-4.5 h-4.5 rounded-full text-white",
                                                                    children: product.length
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/components/Header/index.tsx",
                                                                    lineNumber: 337,
                                                                    columnNumber: 21
                                                                }, ("TURBOPACK compile-time value", void 0))
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/components/Header/index.tsx",
                                                            lineNumber: 305,
                                                            columnNumber: 19
                                                        }, ("TURBOPACK compile-time value", void 0)),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                                            href: "/cart",
                                                            className: "cursor-pointer",
                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                        className: "block text-2xs text-dark-4 uppercase",
                                                                        children: "cart"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/components/Header/index.tsx",
                                                                        lineNumber: 344,
                                                                        columnNumber: 23
                                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                        className: "font-medium text-custom-sm text-dark",
                                                                        children: [
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                                                                children: "₹"
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/src/components/Header/index.tsx",
                                                                                lineNumber: 348,
                                                                                columnNumber: 25
                                                                            }, ("TURBOPACK compile-time value", void 0)),
                                                                            totalPrice
                                                                        ]
                                                                    }, void 0, true, {
                                                                        fileName: "[project]/src/components/Header/index.tsx",
                                                                        lineNumber: 347,
                                                                        columnNumber: 23
                                                                    }, ("TURBOPACK compile-time value", void 0))
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/src/components/Header/index.tsx",
                                                                lineNumber: 343,
                                                                columnNumber: 20
                                                            }, ("TURBOPACK compile-time value", void 0))
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/Header/index.tsx",
                                                            lineNumber: 342,
                                                            columnNumber: 18
                                                        }, ("TURBOPACK compile-time value", void 0))
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/components/Header/index.tsx",
                                                    lineNumber: 303,
                                                    columnNumber: 17
                                                }, ("TURBOPACK compile-time value", void 0))
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/Header/index.tsx",
                                            lineNumber: 270,
                                            columnNumber: 15
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            id: "Toggle",
                                            "aria-label": "Toggler",
                                            className: "xl:hidden block",
                                            onClick: ()=>setNavigationOpen(!navigationOpen),
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "block relative cursor-pointer w-5.5 h-5.5",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "du-block absolute right-0 w-full h-full",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: `block relative top-0 left-0 bg-dark rounded-sm w-0 h-0.5 my-1 ease-in-out duration-200 delay-[0] ${!navigationOpen && "!w-full delay-300"}`
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/Header/index.tsx",
                                                                lineNumber: 364,
                                                                columnNumber: 21
                                                            }, ("TURBOPACK compile-time value", void 0)),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: `block relative top-0 left-0 bg-dark rounded-sm w-0 h-0.5 my-1 ease-in-out duration-200 delay-150 ${!navigationOpen && "!w-full delay-400"}`
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/Header/index.tsx",
                                                                lineNumber: 369,
                                                                columnNumber: 21
                                                            }, ("TURBOPACK compile-time value", void 0)),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: `block relative top-0 left-0 bg-dark rounded-sm w-0 h-0.5 my-1 ease-in-out duration-200 delay-200 ${!navigationOpen && "!w-full delay-500"}`
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/Header/index.tsx",
                                                                lineNumber: 374,
                                                                columnNumber: 21
                                                            }, ("TURBOPACK compile-time value", void 0))
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/components/Header/index.tsx",
                                                        lineNumber: 363,
                                                        columnNumber: 19
                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "block absolute right-0 w-full h-full rotate-45",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: `block bg-dark rounded-sm ease-in-out duration-200 delay-300 absolute left-2.5 top-0 w-0.5 h-full ${!navigationOpen && "!h-0 delay-[0] "}`
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/Header/index.tsx",
                                                                lineNumber: 382,
                                                                columnNumber: 21
                                                            }, ("TURBOPACK compile-time value", void 0)),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: `block bg-dark rounded-sm ease-in-out duration-200 delay-400 absolute left-0 top-2.5 w-full h-0.5 ${!navigationOpen && "!h-0 dealy-200"}`
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/Header/index.tsx",
                                                                lineNumber: 387,
                                                                columnNumber: 21
                                                            }, ("TURBOPACK compile-time value", void 0))
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/components/Header/index.tsx",
                                                        lineNumber: 381,
                                                        columnNumber: 19
                                                    }, ("TURBOPACK compile-time value", void 0))
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/Header/index.tsx",
                                                lineNumber: 362,
                                                columnNumber: 17
                                            }, ("TURBOPACK compile-time value", void 0))
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/Header/index.tsx",
                                            lineNumber: 356,
                                            columnNumber: 15
                                        }, ("TURBOPACK compile-time value", void 0))
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/Header/index.tsx",
                                    lineNumber: 269,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/Header/index.tsx",
                            lineNumber: 229,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/Header/index.tsx",
                    lineNumber: 133,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0))
            }, void 0, false, {
                fileName: "[project]/src/components/Header/index.tsx",
                lineNumber: 131,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: " bg-[#3683ab]",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "max-w-[1170px] mx-auto px-4 sm:px-7.5 xl:px-0",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center justify-between",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: `w-[288px] absolute right-4 top-full xl:static xl:w-auto h-0 xl:h-auto invisible xl:visible xl:flex items-center justify-between ${navigationOpen && `!visible bg-[#3683ab] shadow-lg border border-gray-3 !h-auto max-h-[400px] overflow-y-scroll rounded-md p-5`}`,
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("nav", {
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                        className: "flex xl:items-center flex-col xl:flex-row gap-5 xl:gap-6",
                                        children: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Header$2f$menuData$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["menuData"].map((menuItem, i)=>menuItem.submenu ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Header$2f$Dropdown$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                menuItem: menuItem,
                                                stickyMenu: stickyMenu
                                            }, i, false, {
                                                fileName: "[project]/src/components/Header/index.tsx",
                                                lineNumber: 417,
                                                columnNumber: 23
                                            }, ("TURBOPACK compile-time value", void 0)) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                className: "group relative before:w-0 before:h-[3px] before:bg-[#d4eefb] before:absolute before:left-0 before:top-0 before:rounded-b-[3px] before:ease-out before:duration-200 hover:before:w-full ",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                    href: menuItem.path,
                                                    className: `hover:text-[#d4eefb] text-custom-sm font-medium text-white flex ${stickyMenu ? "xl:py-4" : "xl:py-6"}`,
                                                    children: menuItem.title
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/Header/index.tsx",
                                                    lineNumber: 427,
                                                    columnNumber: 25
                                                }, ("TURBOPACK compile-time value", void 0))
                                            }, i, false, {
                                                fileName: "[project]/src/components/Header/index.tsx",
                                                lineNumber: 423,
                                                columnNumber: 23
                                            }, ("TURBOPACK compile-time value", void 0)))
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/Header/index.tsx",
                                        lineNumber: 414,
                                        columnNumber: 17
                                    }, ("TURBOPACK compile-time value", void 0))
                                }, void 0, false, {
                                    fileName: "[project]/src/components/Header/index.tsx",
                                    lineNumber: 413,
                                    columnNumber: 15
                                }, ("TURBOPACK compile-time value", void 0))
                            }, void 0, false, {
                                fileName: "[project]/src/components/Header/index.tsx",
                                lineNumber: 406,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "hidden xl:block",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                    className: "flex items-center gap-5.5",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                        className: "py-4"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/Header/index.tsx",
                                        lineNumber: 447,
                                        columnNumber: 17
                                    }, ("TURBOPACK compile-time value", void 0))
                                }, void 0, false, {
                                    fileName: "[project]/src/components/Header/index.tsx",
                                    lineNumber: 446,
                                    columnNumber: 15
                                }, ("TURBOPACK compile-time value", void 0))
                            }, void 0, false, {
                                fileName: "[project]/src/components/Header/index.tsx",
                                lineNumber: 445,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/Header/index.tsx",
                        lineNumber: 404,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0))
                }, void 0, false, {
                    fileName: "[project]/src/components/Header/index.tsx",
                    lineNumber: 403,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0))
            }, void 0, false, {
                fileName: "[project]/src/components/Header/index.tsx",
                lineNumber: 402,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            openLocationModal && // <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-[9999]">
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "fixed inset-0 backdrop-blur-md flex items-center justify-center z-[9999]",
                style: {
                    background: "rgba(0,0,0,0.65)"
                },
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "bg-white rounded-xl p-6 w-[400px]",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                            className: "text-lg font-semibold mb-3",
                            children: "Your Location"
                        }, void 0, false, {
                            fileName: "[project]/src/components/Header/index.tsx",
                            lineNumber: 506,
                            columnNumber: 7
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "text-sm text-gray-600 mb-4",
                            children: fullLocation
                        }, void 0, false, {
                            fileName: "[project]/src/components/Header/index.tsx",
                            lineNumber: 510,
                            columnNumber: 7
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            onClick: ()=>setOpenLocationModal(false),
                            className: "bg-[#3683ab] text-white px-4 py-2 rounded-md",
                            children: "Close"
                        }, void 0, false, {
                            fileName: "[project]/src/components/Header/index.tsx",
                            lineNumber: 514,
                            columnNumber: 7
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/Header/index.tsx",
                    lineNumber: 504,
                    columnNumber: 5
                }, ("TURBOPACK compile-time value", void 0))
            }, void 0, false, {
                fileName: "[project]/src/components/Header/index.tsx",
                lineNumber: 502,
                columnNumber: 1
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/Header/index.tsx",
        lineNumber: 126,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
_s(Header, "/vgh4zp4KOLpgdbR6W+pIZc5jo0=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"],
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$context$2f$CartSidebarModalContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCartModalContext"],
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$redux$2f$hooks$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAppSelector"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$redux$2f$dist$2f$react$2d$redux$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSelector"]
    ];
});
_c = Header;
const __TURBOPACK__default__export__ = Header;
var _c;
__turbopack_context__.k.register(_c, "Header");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/Footer/index.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
;
const Footer = ()=>{
    const year = new Date().getFullYear();
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("footer", {
        className: "overflow-hidden",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "max-w-[1170px] mx-auto px-4 sm:px-8 xl:px-0",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex flex-wrap xl:flex-nowrap gap-10 xl:gap-19 xl:justify-between pt-17.5 xl:pt-22.5 pb-10 xl:pb-15",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "max-w-[330px] w-full",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                    className: "mb-7.5 text-custom-1 font-medium text-dark",
                                    children: "Help & Support"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/Footer/index.tsx",
                                    lineNumber: 13,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                    className: "flex flex-col gap-3",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                            className: "flex gap-4.5",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "flex-shrink-0",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                                        width: "24",
                                                        height: "24",
                                                        viewBox: "0 0 24 24",
                                                        fill: "none",
                                                        xmlns: "http://www.w3.org/2000/svg",
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                            fillRule: "evenodd",
                                                            clipRule: "evenodd",
                                                            d: "M4.25 8.51464C4.25 4.45264 7.77146 1.25 12 1.25C16.2285 1.25 19.75 4.45264 19.75 8.51464C19.75 12.3258 17.3871 16.8 13.5748 18.4292C12.574 18.8569 11.426 18.8569 10.4252 18.4292C6.61289 16.8 4.25 12.3258 4.25 8.51464ZM12 2.75C8.49655 2.75 5.75 5.38076 5.75 8.51464C5.75 11.843 7.85543 15.6998 11.0147 17.0499C11.639 17.3167 12.361 17.3167 12.9853 17.0499C16.1446 15.6998 18.25 11.843 18.25 8.51464C18.25 5.38076 15.5034 2.75 12 2.75ZM12 7.75C11.3096 7.75 10.75 8.30964 10.75 9C10.75 9.69036 11.3096 10.25 12 10.25C12.6904 10.25 13.25 9.69036 13.25 9C13.25 8.30964 12.6904 7.75 12 7.75ZM9.25 9C9.25 7.48122 10.4812 6.25 12 6.25C13.5188 6.25 14.75 7.48122 14.75 9C14.75 10.5188 13.5188 11.75 12 11.75C10.4812 11.75 9.25 10.5188 9.25 9ZM3.59541 14.9966C3.87344 15.3036 3.84992 15.7779 3.54288 16.0559C2.97519 16.57 2.75 17.0621 2.75 17.5C2.75 18.2637 3.47401 19.2048 5.23671 19.998C6.929 20.7596 9.31952 21.25 12 21.25C14.6805 21.25 17.071 20.7596 18.7633 19.998C20.526 19.2048 21.25 18.2637 21.25 17.5C21.25 17.0621 21.0248 16.57 20.4571 16.0559C20.1501 15.7779 20.1266 15.3036 20.4046 14.9966C20.6826 14.6895 21.1569 14.666 21.4639 14.9441C22.227 15.635 22.75 16.5011 22.75 17.5C22.75 19.2216 21.2354 20.5305 19.3788 21.3659C17.4518 22.2331 14.8424 22.75 12 22.75C9.15764 22.75 6.54815 22.2331 4.62116 21.3659C2.76457 20.5305 1.25 19.2216 1.25 17.5C1.25 16.5011 1.77305 15.635 2.53605 14.9441C2.84309 14.666 3.31738 14.6895 3.59541 14.9966Z",
                                                            fill: "#3683ab"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/Footer/index.tsx",
                                                            lineNumber: 27,
                                                            columnNumber: 21
                                                        }, ("TURBOPACK compile-time value", void 0))
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/Footer/index.tsx",
                                                        lineNumber: 20,
                                                        columnNumber: 19
                                                    }, ("TURBOPACK compile-time value", void 0))
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/Footer/index.tsx",
                                                    lineNumber: 19,
                                                    columnNumber: 17
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                                    href: "https://www.google.com/maps/place/DOFIX/@28.5922201,77.3131555,17z/data=!3m1!4b1!4m6!3m5!1s0x390ce5d299ab59bf:0xf344f6052d87445e!8m2!3d28.5922201!4d77.3157304!16s%2Fg%2F11x7dpwbq8?entry=ttu&g_ep=EgoyMDI2MDIxNy4wIKXMDSoASAFQAw%3D%3D",
                                                    target: "_blank",
                                                    rel: "noopener noreferrer",
                                                    className: "hover:text-[#3683ab] transition duration-200",
                                                    children: "B-30, Sector-06, Noida, Uttar Pradesh, 201301"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/Footer/index.tsx",
                                                    lineNumber: 35,
                                                    columnNumber: 15
                                                }, ("TURBOPACK compile-time value", void 0))
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/Footer/index.tsx",
                                            lineNumber: 18,
                                            columnNumber: 15
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                                href: "tel:+918383849293",
                                                className: "flex items-center gap-4.5",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                                        width: "24",
                                                        height: "24",
                                                        viewBox: "0 0 24 24",
                                                        fill: "none",
                                                        xmlns: "http://www.w3.org/2000/svg",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                                fillRule: "evenodd",
                                                                clipRule: "evenodd",
                                                                d: "M4.7177 3.0919C5.94388 1.80096 7.9721 2.04283 8.98569 3.47641L10.2467 5.25989C11.0574 6.40656 10.9889 8.00073 10.0214 9.0194L9.7765 9.27719C9.77582 9.27897 9.7751 9.2809 9.77436 9.28299C9.76142 9.31935 9.7287 9.43513 9.7609 9.65489C9.82765 10.1104 10.1793 11.0361 11.607 12.5392C13.0391 14.0469 13.9078 14.4023 14.3103 14.4677C14.484 14.4959 14.5748 14.4714 14.6038 14.4612L15.0124 14.031C15.8862 13.111 17.2485 12.9298 18.347 13.5621L20.2575 14.6617C21.8904 15.6016 22.2705 17.9008 20.9655 19.2747L19.545 20.7703C19.1016 21.2371 18.497 21.6355 17.75 21.7092C15.9261 21.8893 11.701 21.6548 7.27161 16.9915C3.13844 12.64 2.35326 8.85513 2.25401 7.00591L2.92011 6.97016L2.25401 7.00591C2.20497 6.09224 2.61224 5.30855 3.1481 4.7444L4.7177 3.0919ZM7.7609 4.34237C7.24855 3.61773 6.32812 3.57449 5.80528 4.12493L4.23568 5.77743C3.90429 6.12632 3.73042 6.52621 3.75185 6.92552C3.83289 8.43533 4.48307 11.8776 8.35919 15.9584C12.4234 20.2373 16.1676 20.3581 17.6026 20.2165C17.8864 20.1885 18.1783 20.031 18.4574 19.7373L19.8779 18.2417C20.4907 17.5965 20.3301 16.4342 19.5092 15.9618L17.5987 14.8621C17.086 14.567 16.4854 14.6582 16.1 15.064L15.6445 15.5435L15.1174 15.0428C15.6445 15.5435 15.6438 15.5442 15.6432 15.545L15.6417 15.5464L15.6388 15.5495L15.6324 15.556L15.6181 15.5701C15.6078 15.5801 15.5959 15.591 15.5825 15.6028C15.5556 15.6264 15.5223 15.6533 15.4824 15.6816C15.4022 15.7384 15.2955 15.8009 15.1606 15.8541C14.8846 15.963 14.5201 16.0214 14.0699 15.9483C13.1923 15.8058 12.0422 15.1755 10.5194 13.5722C8.99202 11.9642 8.40746 10.7645 8.27675 9.87234C8.21022 9.41827 8.26346 9.05468 8.36116 8.78011C8.40921 8.64508 8.46594 8.53742 8.51826 8.45566C8.54435 8.41489 8.56922 8.38075 8.5912 8.35298C8.60219 8.33909 8.61246 8.32678 8.62182 8.31603L8.63514 8.30104L8.64125 8.29441L8.64415 8.2913L8.64556 8.2898C8.64625 8.28907 8.64694 8.28835 9.17861 8.79333L8.64695 8.28834L8.93376 7.98637C9.3793 7.51731 9.44403 6.72292 9.02189 6.12586L7.7609 4.34237Z",
                                                                fill: "#3683ab"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/Footer/index.tsx",
                                                                lineNumber: 54,
                                                                columnNumber: 21
                                                            }, ("TURBOPACK compile-time value", void 0)),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                                d: "M13.2595 1.87983C13.3257 1.47094 13.7122 1.19357 14.1211 1.25976C14.1464 1.26461 14.2279 1.27983 14.2705 1.28933C14.3559 1.30834 14.4749 1.33759 14.6233 1.38082C14.9201 1.46726 15.3347 1.60967 15.8323 1.8378C16.8286 2.29456 18.1544 3.09356 19.5302 4.46936C20.906 5.84516 21.705 7.17097 22.1617 8.16725C22.3899 8.66487 22.5323 9.07947 22.6187 9.37625C22.6619 9.52466 22.6912 9.64369 22.7102 9.72901C22.7197 9.77168 22.7267 9.80594 22.7315 9.83125L22.7373 9.86245C22.8034 10.2713 22.5286 10.6739 22.1197 10.7401C21.712 10.8061 21.3279 10.53 21.2601 10.1231C21.258 10.1121 21.2522 10.0828 21.2461 10.0551C21.2337 9.9997 21.2124 9.91188 21.1786 9.79572C21.1109 9.56339 20.9934 9.21806 20.7982 8.79238C20.4084 7.94207 19.7074 6.76789 18.4695 5.53002C17.2317 4.29216 16.0575 3.59117 15.2072 3.20134C14.7815 3.00618 14.4362 2.88865 14.2038 2.82097C14.0877 2.78714 13.9417 2.75363 13.8863 2.7413C13.4793 2.67347 13.1935 2.28755 13.2595 1.87983Z",
                                                                fill: "#3683ab"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/Footer/index.tsx",
                                                                lineNumber: 60,
                                                                columnNumber: 21
                                                            }, ("TURBOPACK compile-time value", void 0)),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                                fillRule: "evenodd",
                                                                clipRule: "evenodd",
                                                                d: "M13.4861 5.32931C13.5999 4.93103 14.015 4.70041 14.4133 4.81421L14.2072 5.53535C14.4133 4.81421 14.4136 4.81431 14.414 4.81441L14.4147 4.81462L14.4162 4.81506L14.4196 4.81604L14.4273 4.81835L14.4471 4.82451C14.4622 4.82934 14.481 4.83562 14.5035 4.84358C14.5484 4.85952 14.6077 4.88218 14.6805 4.91339C14.8262 4.97582 15.0253 5.07224 15.2698 5.21695C15.7593 5.50664 16.4275 5.98781 17.2124 6.77279C17.9974 7.55776 18.4786 8.22595 18.7683 8.71541C18.913 8.95992 19.0094 9.15899 19.0718 9.30467C19.103 9.37748 19.1257 9.43683 19.1416 9.48175C19.1496 9.5042 19.1559 9.52303 19.1607 9.5381L19.1669 9.55789L19.1692 9.56564L19.1702 9.56898L19.1706 9.57051L19.1708 9.57124C19.1709 9.5716 19.171 9.57195 18.4499 9.77799L19.171 9.57195C19.2848 9.97023 19.0542 10.3853 18.6559 10.4991C18.261 10.612 17.8496 10.3862 17.7317 9.99414L17.728 9.98336C17.7227 9.96833 17.7116 9.93875 17.6931 9.89555C17.6561 9.80921 17.589 9.66798 17.4774 9.47939C17.2544 9.10265 16.8517 8.5334 16.1518 7.83345C15.4518 7.13349 14.8826 6.73079 14.5058 6.50782C14.3172 6.3962 14.176 6.32911 14.0897 6.2921C14.0465 6.27359 14.0169 6.26256 14.0019 6.25722L13.9911 6.25353C13.599 6.13565 13.3733 5.7242 13.4861 5.32931Z",
                                                                fill: "#3683ab"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/Footer/index.tsx",
                                                                lineNumber: 64,
                                                                columnNumber: 21
                                                            }, ("TURBOPACK compile-time value", void 0))
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/components/Footer/index.tsx",
                                                        lineNumber: 47,
                                                        columnNumber: 19
                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                    "+91 8383849293"
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/Footer/index.tsx",
                                                lineNumber: 46,
                                                columnNumber: 17
                                            }, ("TURBOPACK compile-time value", void 0))
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/Footer/index.tsx",
                                            lineNumber: 45,
                                            columnNumber: 15
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                                href: "mailto:support@dofix.in",
                                                className: "flex items-center gap-4.5",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                                        width: "24",
                                                        height: "24",
                                                        viewBox: "0 0 24 24",
                                                        fill: "none",
                                                        xmlns: "http://www.w3.org/2000/svg",
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                            fillRule: "evenodd",
                                                            clipRule: "evenodd",
                                                            d: "M9.94358 3.25H14.0564C15.8942 3.24998 17.3498 3.24997 18.489 3.40314C19.6614 3.56076 20.6104 3.89288 21.3588 4.64124C22.1071 5.38961 22.4392 6.33856 22.5969 7.51098C22.75 8.65019 22.75 10.1058 22.75 11.9436V12.0564C22.75 13.8942 22.75 15.3498 22.5969 16.489C22.4392 17.6614 22.1071 18.6104 21.3588 19.3588C20.6104 20.1071 19.6614 20.4392 18.489 20.5969C17.3498 20.75 15.8942 20.75 14.0564 20.75H9.94359C8.10583 20.75 6.65019 20.75 5.51098 20.5969C4.33856 20.4392 3.38961 20.1071 2.64124 19.3588C1.89288 18.6104 1.56076 17.6614 1.40314 16.489C1.24997 15.3498 1.24998 13.8942 1.25 12.0564V11.9436C1.24998 10.1058 1.24997 8.65019 1.40314 7.51098C1.56076 6.33856 1.89288 5.38961 2.64124 4.64124C3.38961 3.89288 4.33856 3.56076 5.51098 3.40314C6.65019 3.24997 8.10582 3.24998 9.94358 3.25ZM5.71085 4.88976C4.70476 5.02502 4.12511 5.27869 3.7019 5.7019C3.27869 6.12511 3.02502 6.70476 2.88976 7.71085C2.75159 8.73851 2.75 10.0932 2.75 12C2.75 13.9068 2.75159 15.2615 2.88976 16.2892C3.02502 17.2952 3.27869 17.8749 3.7019 18.2981C4.12511 18.7213 4.70476 18.975 5.71085 19.1102C6.73851 19.2484 8.09318 19.25 10 19.25H14C15.9068 19.25 17.2615 19.2484 18.2892 19.1102C19.2952 18.975 19.8749 18.7213 20.2981 18.2981C20.7213 17.8749 20.975 17.2952 21.1102 16.2892C21.2484 15.2615 21.25 13.9068 21.25 12C21.25 10.0932 21.2484 8.73851 21.1102 7.71085C20.975 6.70476 20.7213 6.12511 20.2981 5.7019C19.8749 5.27869 19.2952 5.02502 18.2892 4.88976C17.2615 4.75159 15.9068 4.75 14 4.75H10C8.09318 4.75 6.73851 4.75159 5.71085 4.88976ZM5.42383 7.51986C5.68901 7.20165 6.16193 7.15866 6.48014 7.42383L8.63903 9.22291C9.57199 10.0004 10.2197 10.5384 10.7666 10.8901C11.2959 11.2306 11.6549 11.3449 12 11.3449C12.3451 11.3449 12.7041 11.2306 13.2334 10.8901C13.7803 10.5384 14.428 10.0004 15.361 9.22291L17.5199 7.42383C17.8381 7.15866 18.311 7.20165 18.5762 7.51986C18.8413 7.83807 18.7983 8.31099 18.4801 8.57617L16.2836 10.4066C15.3973 11.1452 14.6789 11.7439 14.0448 12.1517C13.3843 12.5765 12.7411 12.8449 12 12.8449C11.2589 12.8449 10.6157 12.5765 9.95518 12.1517C9.32112 11.7439 8.60272 11.1452 7.71636 10.4066L5.51986 8.57617C5.20165 8.31099 5.15866 7.83807 5.42383 7.51986Z",
                                                            fill: "#3683ab"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/Footer/index.tsx",
                                                            lineNumber: 84,
                                                            columnNumber: 21
                                                        }, ("TURBOPACK compile-time value", void 0))
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/Footer/index.tsx",
                                                        lineNumber: 77,
                                                        columnNumber: 19
                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                    "support@dofix.in"
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/Footer/index.tsx",
                                                lineNumber: 76,
                                                columnNumber: 17
                                            }, ("TURBOPACK compile-time value", void 0))
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/Footer/index.tsx",
                                            lineNumber: 75,
                                            columnNumber: 15
                                        }, ("TURBOPACK compile-time value", void 0))
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/Footer/index.tsx",
                                    lineNumber: 17,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex items-center gap-4 mt-7.5",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                            href: "https://www.facebook.com/profile.php?id=61574626560232",
                                            "aria-label": "Facebook Social Link",
                                            className: "flex ease-out duration-200 hover:text-[#3683ab]",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                                className: "fill-current",
                                                width: "18",
                                                height: "18",
                                                viewBox: "0 0 18 18",
                                                fill: "none",
                                                xmlns: "http://www.w3.org/2000/svg",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                        d: "M8.99984 0.666504C7.48706 0.666504 6.09165 1.04648 4.81361 1.80644C3.53557 2.54019 2.51836 3.5491 1.76197 4.83317C1.03166 6.11724 0.666504 7.51923 0.666504 9.03915C0.666504 10.428 0.966452 11.7252 1.56635 12.9307C2.19233 14.1099 3.04 15.0926 4.10938 15.8788C5.17876 16.6649 6.37855 17.1497 7.70876 17.3332V11.4763H5.59608V9.03915H7.70876V7.19166C7.70876 6.16965 7.98262 5.37038 8.53035 4.79386C9.10417 4.21734 9.8736 3.92908 10.8386 3.92908C11.4646 3.92908 12.0906 3.98149 12.7166 4.08632V6.16965H11.6602C11.1908 6.16965 10.8386 6.30068 10.6039 6.56273C10.3952 6.79858 10.2909 7.09994 10.2909 7.46682V9.03915H12.6383L12.2471 11.4763H10.2909V17.3332C11.6472 17.1235 12.86 16.6256 13.9294 15.8395C14.9988 15.0533 15.8334 14.0706 16.4333 12.8913C17.0332 11.6859 17.3332 10.4018 17.3332 9.03915C17.3332 7.51923 16.955 6.11724 16.1986 4.83317C15.4683 3.5491 14.4641 2.54019 13.1861 1.80644C11.908 1.04648 10.5126 0.666504 8.99984 0.666504Z",
                                                        fill: ""
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/Footer/index.tsx",
                                                        lineNumber: 111,
                                                        columnNumber: 19
                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                        opacity: "0.04",
                                                        d: "M7.70887 11.4764V17.3333H10.291V11.4764H12.2472L12.6384 9.03926H10.291V7.46693C10.291 7.10006 10.3954 6.7987 10.604 6.56285C10.8388 6.30079 11.1909 6.16977 11.6604 6.16977H12.7167V4.08643C12.0907 3.98161 11.4647 3.9292 10.8388 3.9292C9.87371 3.9292 9.10428 4.21746 8.53046 4.79398C7.98273 5.3705 7.70887 6.16977 7.70887 7.19178V9.03926H5.59619V11.4764H7.70887Z",
                                                        fill: ""
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/Footer/index.tsx",
                                                        lineNumber: 115,
                                                        columnNumber: 19
                                                    }, ("TURBOPACK compile-time value", void 0))
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/Footer/index.tsx",
                                                lineNumber: 103,
                                                columnNumber: 17
                                            }, ("TURBOPACK compile-time value", void 0))
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/Footer/index.tsx",
                                            lineNumber: 98,
                                            columnNumber: 15
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                            href: "https://www.instagram.com/dofix.in/",
                                            "aria-label": "Instagram Social Link",
                                            className: "flex ease-out duration-200 hover:text-[#3683ab]",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                                className: "fill-current",
                                                width: "20",
                                                height: "20",
                                                viewBox: "0 0 20 20",
                                                fill: "none",
                                                xmlns: "http://www.w3.org/2000/svg",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("g", {
                                                        clipPath: "url(#clip0_317_501)",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                                d: "M19.6562 6C19.625 5 19.4375 4.28125 19.2187 3.625C19 2.96875 18.6562 2.4375 18.125 1.90625C17.5937 1.375 17.0625 1.0625 16.4375 0.8125C15.8125 0.5625 15.125 0.40625 14.0625 0.375C12.9687 0.3125 12.6562 0.3125 10 0.3125C7.34375 0.3125 7.0625 0.3125 6 0.34375C4.9375 0.375 4.28125 0.5625 3.625 0.78125C2.96875 1 2.4375 1.375 1.90625 1.90625C1.375 2.4375 1.03125 2.96875 0.8125 3.625C0.5625 4.25 0.40625 4.9375 0.375 6C0.34375 7.0625 0.3125 7.34375 0.3125 10C0.3125 12.6562 0.3125 12.9375 0.34375 14C0.375 15.0625 0.5625 15.7188 0.78125 16.375C1 17.0312 1.34375 17.5625 1.875 18.0938C2.40625 18.625 2.96875 18.9688 3.59375 19.1875C4.21875 19.4062 4.90625 19.5938 5.96875 19.625C7.03125 19.6875 7.3125 19.6875 9.96875 19.6875C12.625 19.6875 12.9062 19.6875 13.9687 19.6562C15.0312 19.625 15.6875 19.4375 16.3437 19.2188C17 19 17.5312 18.6562 18.0625 18.125C18.5937 17.5938 18.9375 17.0312 19.1562 16.4062C19.375 15.7812 19.5625 15.0938 19.5937 14.0312C19.625 13.0312 19.625 12.7188 19.625 10.0625C19.625 7.40625 19.6875 7.0625 19.6562 6ZM17.9062 13.9062C17.875 14.8438 17.6875 15.3438 17.5625 15.7188C17.375 16.1562 17.1562 16.5 16.8125 16.8125C16.4687 17.1562 16.1562 17.3438 15.7187 17.5625C15.375 17.6875 14.875 17.875 13.9062 17.9062C12.9062 17.9062 12.5937 17.9062 10.0312 17.9062C7.46875 17.9062 7.125 17.9062 6.125 17.875C5.1875 17.8438 4.6875 17.6562 4.3125 17.5312C3.875 17.3438 3.53125 17.125 3.21875 16.7812C2.875 16.4375 2.6875 16.125 2.46875 15.6875C2.34375 15.3438 2.15625 14.8438 2.125 13.875C2.125 12.9063 2.125 12.5938 2.125 10C2.125 7.40625 2.125 7.09375 2.15625 6.09375C2.1875 5.15625 2.375 4.65625 2.5 4.28125C2.6875 3.84375 2.90625 3.5 3.21875 3.1875C3.5625 2.84375 3.875 2.65625 4.3125 2.46875C4.65625 2.34375 5.15625 2.15625 6.125 2.125C7.125 2.09375 7.4375 2.09375 10.0312 2.09375C12.625 2.09375 12.9375 2.09375 13.9375 2.125C14.875 2.15625 15.375 2.34375 15.75 2.46875C16.1875 2.65625 16.5312 2.875 16.8437 3.1875C17.1875 3.53125 17.375 3.84375 17.5937 4.28125C17.7187 4.625 17.9062 5.125 17.9375 6.09375C17.9687 7.09375 17.9687 7.40625 17.9687 10C17.9687 12.5938 17.9375 12.9062 17.9062 13.9062Z",
                                                                fill: ""
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/Footer/index.tsx",
                                                                lineNumber: 157,
                                                                columnNumber: 21
                                                            }, ("TURBOPACK compile-time value", void 0)),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                                d: "M10.0005 5.03125C7.21924 5.03125 5.03174 7.28125 5.03174 10C5.03174 12.7812 7.28174 14.9688 10.0005 14.9688C12.7192 14.9688 15.0005 12.7812 15.0005 10C15.0005 7.21875 12.7817 5.03125 10.0005 5.03125ZM10.0005 13.25C8.18799 13.25 6.75049 11.7812 6.75049 10C6.75049 8.21875 8.21924 6.75 10.0005 6.75C11.813 6.75 13.2505 8.1875 13.2505 10C13.2505 11.8125 11.813 13.25 10.0005 13.25Z",
                                                                fill: ""
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/Footer/index.tsx",
                                                                lineNumber: 161,
                                                                columnNumber: 21
                                                            }, ("TURBOPACK compile-time value", void 0)),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                                d: "M15.2188 5.96875C15.8573 5.96875 16.375 5.45106 16.375 4.8125C16.375 4.17391 15.8573 3.65625 15.2188 3.65625C14.5802 3.65625 14.0625 4.17391 14.0625 4.8125C14.0625 5.45106 14.5802 5.96875 15.2188 5.96875Z",
                                                                fill: ""
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/Footer/index.tsx",
                                                                lineNumber: 165,
                                                                columnNumber: 21
                                                            }, ("TURBOPACK compile-time value", void 0))
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/components/Footer/index.tsx",
                                                        lineNumber: 156,
                                                        columnNumber: 19
                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("defs", {
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("clipPath", {
                                                            id: "clip0_317_501",
                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                                                                width: "20",
                                                                height: "20",
                                                                fill: "white"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/Footer/index.tsx",
                                                                lineNumber: 172,
                                                                columnNumber: 23
                                                            }, ("TURBOPACK compile-time value", void 0))
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/Footer/index.tsx",
                                                            lineNumber: 171,
                                                            columnNumber: 21
                                                        }, ("TURBOPACK compile-time value", void 0))
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/Footer/index.tsx",
                                                        lineNumber: 170,
                                                        columnNumber: 19
                                                    }, ("TURBOPACK compile-time value", void 0))
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/Footer/index.tsx",
                                                lineNumber: 148,
                                                columnNumber: 17
                                            }, ("TURBOPACK compile-time value", void 0))
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/Footer/index.tsx",
                                            lineNumber: 143,
                                            columnNumber: 15
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                            href: "https://www.linkedin.com/company/dofix-technologies-private-limited/",
                                            "aria-label": "Linkedin Social Link",
                                            className: "flex ease-out duration-200 hover:text-[#3683ab]",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                                className: "fill-current",
                                                width: "20",
                                                height: "20",
                                                viewBox: "0 0 20 20",
                                                fill: "none",
                                                xmlns: "http://www.w3.org/2000/svg",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                        d: "M16.6535 1.6665C17.1222 1.6665 17.5129 1.83577 17.8254 2.17432C18.1639 2.48682 18.3332 2.87744 18.3332 3.34619V16.6535C18.3332 17.1222 18.1639 17.5259 17.8254 17.8644C17.5129 18.1769 17.1222 18.3332 16.6535 18.3332H3.34619C2.87744 18.3332 2.4738 18.1769 2.13525 17.8644C1.82275 17.5259 1.6665 17.1222 1.6665 16.6535V3.34619C1.6665 2.87744 1.82275 2.48682 2.13525 2.17432C2.4738 1.83577 2.87744 1.6665 3.34619 1.6665H16.6535ZM15.4295 15.4295V11.0155C15.4295 10.2603 15.1561 9.62223 14.6092 9.1014C14.0884 8.55452 13.4504 8.28109 12.6952 8.28109C12.3306 8.28109 11.966 8.38525 11.6014 8.59359C11.2368 8.80192 10.9634 9.06234 10.7811 9.37484V8.43734H8.43734V15.4295H10.7811V11.2889C10.7811 10.9764 10.8853 10.716 11.0936 10.5077C11.328 10.2733 11.6014 10.1561 11.9139 10.1561C12.2524 10.1561 12.5259 10.2733 12.7342 10.5077C12.9686 10.716 13.0858 10.9764 13.0858 11.2889V15.4295H15.4295ZM5.74202 7.14827C6.13265 7.14827 6.45817 7.01807 6.71859 6.75765C7.00505 6.47119 7.14827 6.13265 7.14827 5.74202C7.14827 5.3514 7.00505 5.02588 6.71859 4.76546C6.45817 4.479 6.13265 4.33577 5.74202 4.33577C5.3514 4.33577 5.01286 4.479 4.7264 4.76546C4.46598 5.02588 4.33577 5.3514 4.33577 5.74202C4.33577 6.13265 4.46598 6.47119 4.7264 6.75765C5.01286 7.01807 5.3514 7.14827 5.74202 7.14827ZM6.87484 15.4295V8.43734H4.57015V15.4295H6.87484Z",
                                                        fill: ""
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/Footer/index.tsx",
                                                        lineNumber: 191,
                                                        columnNumber: 19
                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                        opacity: "0.04",
                                                        d: "M15.4297 15.4297V11.0156C15.4297 10.2604 15.1562 9.6224 14.6094 9.10156C14.0885 8.55469 13.4505 8.28125 12.6953 8.28125C12.3307 8.28125 11.9661 8.38542 11.6016 8.59375C11.237 8.80208 10.9635 9.0625 10.7812 9.375V8.4375H8.4375V15.4297H10.7812V11.2891C10.7812 10.9766 10.8854 10.7161 11.0938 10.5078C11.3281 10.2734 11.6016 10.1562 11.9141 10.1562C12.2526 10.1562 12.526 10.2734 12.7344 10.5078C12.9688 10.7161 13.0859 10.9766 13.0859 11.2891V15.4297H15.4297ZM5.74219 7.14844C6.13281 7.14844 6.45833 7.01823 6.71875 6.75781C7.00521 6.47135 7.14844 6.13281 7.14844 5.74219C7.14844 5.35156 7.00521 5.02604 6.71875 4.76562C6.45833 4.47917 6.13281 4.33594 5.74219 4.33594C5.35156 4.33594 5.01302 4.47917 4.72656 4.76562C4.46615 5.02604 4.33594 5.35156 4.33594 5.74219C4.33594 6.13281 4.46615 6.47135 4.72656 6.75781C5.01302 7.01823 5.35156 7.14844 5.74219 7.14844ZM6.875 15.4297V8.4375H4.57031V15.4297H6.875Z",
                                                        fill: ""
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/Footer/index.tsx",
                                                        lineNumber: 195,
                                                        columnNumber: 19
                                                    }, ("TURBOPACK compile-time value", void 0))
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/Footer/index.tsx",
                                                lineNumber: 183,
                                                columnNumber: 17
                                            }, ("TURBOPACK compile-time value", void 0))
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/Footer/index.tsx",
                                            lineNumber: 178,
                                            columnNumber: 15
                                        }, ("TURBOPACK compile-time value", void 0))
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/Footer/index.tsx",
                                    lineNumber: 97,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/Footer/index.tsx",
                            lineNumber: 12,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "w-full sm:w-auto",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                    className: "mb-7.5 text-custom-1 font-medium text-dark",
                                    children: "Account"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/Footer/index.tsx",
                                    lineNumber: 207,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                    className: "flex flex-col gap-3.5",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                                className: "ease-out duration-200 hover:text-[#3683ab]",
                                                href: "#",
                                                children: "My Account"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/Footer/index.tsx",
                                                lineNumber: 213,
                                                columnNumber: 17
                                            }, ("TURBOPACK compile-time value", void 0))
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/Footer/index.tsx",
                                            lineNumber: 212,
                                            columnNumber: 15
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                                className: "ease-out duration-200 hover:text-[#3683ab]",
                                                href: "/signin",
                                                children: "Login / Register"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/Footer/index.tsx",
                                                lineNumber: 218,
                                                columnNumber: 17
                                            }, ("TURBOPACK compile-time value", void 0))
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/Footer/index.tsx",
                                            lineNumber: 217,
                                            columnNumber: 15
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                                className: "ease-out duration-200 hover:text-[#3683ab]",
                                                href: "/wishlist",
                                                children: "Wishlist"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/Footer/index.tsx",
                                                lineNumber: 224,
                                                columnNumber: 17
                                            }, ("TURBOPACK compile-time value", void 0))
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/Footer/index.tsx",
                                            lineNumber: 223,
                                            columnNumber: 15
                                        }, ("TURBOPACK compile-time value", void 0))
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/Footer/index.tsx",
                                    lineNumber: 211,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/Footer/index.tsx",
                            lineNumber: 206,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "w-full sm:w-auto",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                    className: "mb-7.5 text-custom-1 font-medium text-dark",
                                    children: "Quick Link"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/Footer/index.tsx",
                                    lineNumber: 233,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                    className: "flex flex-col gap-3",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                                className: "ease-out duration-200 hover:text-[#3683ab]",
                                                href: "/privacy-policy",
                                                children: "Privacy Policy"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/Footer/index.tsx",
                                                lineNumber: 239,
                                                columnNumber: 17
                                            }, ("TURBOPACK compile-time value", void 0))
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/Footer/index.tsx",
                                            lineNumber: 238,
                                            columnNumber: 15
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                                className: "ease-out duration-200 hover:text-[#3683ab]",
                                                href: "/refund-policy",
                                                children: "Refund Policy"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/Footer/index.tsx",
                                                lineNumber: 244,
                                                columnNumber: 17
                                            }, ("TURBOPACK compile-time value", void 0))
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/Footer/index.tsx",
                                            lineNumber: 243,
                                            columnNumber: 15
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                                className: "ease-out duration-200 hover:text-[#3683ab]",
                                                href: "/terms",
                                                children: "Terms & Conditions"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/Footer/index.tsx",
                                                lineNumber: 249,
                                                columnNumber: 17
                                            }, ("TURBOPACK compile-time value", void 0))
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/Footer/index.tsx",
                                            lineNumber: 248,
                                            columnNumber: 15
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                                className: "ease-out duration-200 hover:text-[#3683ab]",
                                                href: "/contact",
                                                children: "Contact Us"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/Footer/index.tsx",
                                                lineNumber: 259,
                                                columnNumber: 17
                                            }, ("TURBOPACK compile-time value", void 0))
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/Footer/index.tsx",
                                            lineNumber: 258,
                                            columnNumber: 15
                                        }, ("TURBOPACK compile-time value", void 0))
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/Footer/index.tsx",
                                    lineNumber: 237,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/Footer/index.tsx",
                            lineNumber: 232,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "w-full sm:w-auto",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                    className: "mb-7.5 text-custom-1 font-medium text-dark lg:text-right",
                                    children: "Download App"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/Footer/index.tsx",
                                    lineNumber: 267,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                    className: "flex flex-col lg:items-end gap-3",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                                className: "inline-flex items-center gap-3 py-[9px] pl-4 pr-7.5 text-white rounded-md bg-[#000] ease-out duration-200 hover:bg-opacity-95",
                                                href: "https://apps.apple.com/in/app/dofix/id6748050890",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                                        className: "fill-current",
                                                        width: "34",
                                                        height: "35",
                                                        viewBox: "0 0 34 35",
                                                        fill: "none",
                                                        xmlns: "http://www.w3.org/2000/svg",
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                            d: "M29.5529 12.3412C29.3618 12.4871 25.9887 14.3586 25.9887 18.5198C25.9887 23.3331 30.2809 25.0358 30.4093 25.078C30.3896 25.1818 29.7275 27.41 28.1463 29.6804C26.7364 31.6783 25.264 33.6731 23.024 33.6731C20.7841 33.6731 20.2076 32.3918 17.6217 32.3918C15.1018 32.3918 14.2058 33.7152 12.1569 33.7152C10.1079 33.7152 8.6783 31.8664 7.03456 29.5961C5.13062 26.93 3.59229 22.7882 3.59229 18.8572C3.59229 12.552 7.756 9.20804 11.8538 9.20804C14.0312 9.20804 15.8462 10.6157 17.2133 10.6157C18.5144 10.6157 20.5436 9.12373 23.0207 9.12373C23.9595 9.12373 27.3327 9.20804 29.5529 12.3412ZM21.8447 6.45441C22.8692 5.25759 23.5939 3.59697 23.5939 1.93635C23.5939 1.70607 23.5741 1.47254 23.5313 1.28442C21.8645 1.34605 19.8815 2.37745 18.6857 3.74292C17.7469 4.79379 16.8707 6.45441 16.8707 8.13773C16.8707 8.39076 16.9135 8.64369 16.9333 8.72476C17.0387 8.74426 17.21 8.76694 17.3813 8.76694C18.8768 8.76694 20.7577 7.78094 21.8447 6.45441Z",
                                                            fill: ""
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/Footer/index.tsx",
                                                            lineNumber: 289,
                                                            columnNumber: 21
                                                        }, ("TURBOPACK compile-time value", void 0))
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/Footer/index.tsx",
                                                        lineNumber: 281,
                                                        columnNumber: 19
                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: "block text-custom-xs",
                                                                children: "Download on the"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/Footer/index.tsx",
                                                                lineNumber: 296,
                                                                columnNumber: 21
                                                            }, ("TURBOPACK compile-time value", void 0)),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                className: "font-medium",
                                                                children: "App Store"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/Footer/index.tsx",
                                                                lineNumber: 299,
                                                                columnNumber: 21
                                                            }, ("TURBOPACK compile-time value", void 0))
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/components/Footer/index.tsx",
                                                        lineNumber: 295,
                                                        columnNumber: 19
                                                    }, ("TURBOPACK compile-time value", void 0))
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/Footer/index.tsx",
                                                lineNumber: 277,
                                                columnNumber: 17
                                            }, ("TURBOPACK compile-time value", void 0))
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/Footer/index.tsx",
                                            lineNumber: 276,
                                            columnNumber: 15
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                                className: "inline-flex items-center gap-3 py-[9px] pl-4 pr-8.5 text-white rounded-md bg-[#3683ab] ease-out duration-200 hover:bg-opacity-95",
                                                href: "https://play.google.com/store/apps/details?id=com.dofix.appcustomer&hl=en_IN",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                                        className: "fill-current",
                                                        width: "34",
                                                        height: "35",
                                                        viewBox: "0 0 34 35",
                                                        fill: "none",
                                                        xmlns: "http://www.w3.org/2000/svg",
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                            d: "M5.45764 1.03125L19.9718 15.5427L23.7171 11.7973C18.5993 8.69224 11.7448 4.52679 8.66206 2.65395L6.59681 1.40278C6.23175 1.18039 5.84088 1.06062 5.45764 1.03125ZM3.24214 2.76868C3.21276 2.92814 3.1875 3.08837 3.1875 3.26041V31.939C3.1875 32.0593 3.21169 32.1713 3.22848 32.2859L17.9939 17.5205L3.24214 2.76868ZM26.1785 13.2916L21.9496 17.5205L26.1047 21.6756C28.3062 20.3412 29.831 19.4147 30.0003 19.3126C30.7486 18.8552 31.1712 18.1651 31.1586 17.4112C31.1474 16.6713 30.7247 16.0098 30.0057 15.6028C29.8449 15.5104 28.3408 14.6022 26.1785 13.2916ZM19.9718 19.4983L5.50135 33.9688C5.78248 33.9198 6.06327 33.836 6.33182 33.6737C6.70387 33.4471 16.7548 27.3492 23.6433 23.1699L19.9718 19.4983Z",
                                                            fill: ""
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/Footer/index.tsx",
                                                            lineNumber: 317,
                                                            columnNumber: 21
                                                        }, ("TURBOPACK compile-time value", void 0))
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/Footer/index.tsx",
                                                        lineNumber: 309,
                                                        columnNumber: 19
                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: "block text-custom-xs",
                                                                children: " Get in On "
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/Footer/index.tsx",
                                                                lineNumber: 324,
                                                                columnNumber: 21
                                                            }, ("TURBOPACK compile-time value", void 0)),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                className: "font-medium",
                                                                children: "Google Play"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/Footer/index.tsx",
                                                                lineNumber: 325,
                                                                columnNumber: 21
                                                            }, ("TURBOPACK compile-time value", void 0))
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/components/Footer/index.tsx",
                                                        lineNumber: 323,
                                                        columnNumber: 19
                                                    }, ("TURBOPACK compile-time value", void 0))
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/Footer/index.tsx",
                                                lineNumber: 305,
                                                columnNumber: 17
                                            }, ("TURBOPACK compile-time value", void 0))
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/Footer/index.tsx",
                                            lineNumber: 304,
                                            columnNumber: 15
                                        }, ("TURBOPACK compile-time value", void 0))
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/Footer/index.tsx",
                                    lineNumber: 275,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/Footer/index.tsx",
                            lineNumber: 266,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/Footer/index.tsx",
                    lineNumber: 11,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0))
            }, void 0, false, {
                fileName: "[project]/src/components/Footer/index.tsx",
                lineNumber: 9,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "py-5 xl:py-7.5 bg-gray-1",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "max-w-[1170px] mx-auto px-4 sm:px-8 xl:px-0",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex gap-5 flex-wrap items-center justify-between",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "text-dark font-medium",
                            children: [
                                "© ",
                                year,
                                ". All rights reserved by Dofix Technologies Private Limited."
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/Footer/index.tsx",
                            lineNumber: 339,
                            columnNumber: 13
                        }, ("TURBOPACK compile-time value", void 0))
                    }, void 0, false, {
                        fileName: "[project]/src/components/Footer/index.tsx",
                        lineNumber: 338,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0))
                }, void 0, false, {
                    fileName: "[project]/src/components/Footer/index.tsx",
                    lineNumber: 337,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0))
            }, void 0, false, {
                fileName: "[project]/src/components/Footer/index.tsx",
                lineNumber: 336,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/Footer/index.tsx",
        lineNumber: 8,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
_c = Footer;
const __TURBOPACK__default__export__ = Footer;
var _c;
__turbopack_context__.k.register(_c, "Footer");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/redux/features/quickView-slice.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__,
    "quickView",
    ()=>quickView,
    "resetQuickView",
    ()=>resetQuickView,
    "updateQuickView",
    ()=>updateQuickView
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$reduxjs$2f$toolkit$2f$dist$2f$redux$2d$toolkit$2e$modern$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/@reduxjs/toolkit/dist/redux-toolkit.modern.mjs [app-client] (ecmascript) <locals>");
;
const initialState = {
    value: null
};
const quickView = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$reduxjs$2f$toolkit$2f$dist$2f$redux$2d$toolkit$2e$modern$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["createSlice"])({
    name: "quickView",
    initialState,
    reducers: {
        updateQuickView: (state, action)=>{
            state.value = action.payload;
        },
        resetQuickView: (state)=>{
            state.value = null;
        }
    }
});
const { updateQuickView, resetQuickView } = quickView.actions;
const __TURBOPACK__default__export__ = quickView.reducer;
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/redux/features/wishlist-slice.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "addItemToWishlist",
    ()=>addItemToWishlist,
    "default",
    ()=>__TURBOPACK__default__export__,
    "removeAllItemsFromWishlist",
    ()=>removeAllItemsFromWishlist,
    "removeItemFromWishlist",
    ()=>removeItemFromWishlist,
    "wishlist",
    ()=>wishlist
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$reduxjs$2f$toolkit$2f$dist$2f$redux$2d$toolkit$2e$modern$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/@reduxjs/toolkit/dist/redux-toolkit.modern.mjs [app-client] (ecmascript) <locals>");
;
const initialState = {
    items: []
};
const wishlist = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$reduxjs$2f$toolkit$2f$dist$2f$redux$2d$toolkit$2e$modern$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["createSlice"])({
    name: "wishlist",
    initialState,
    reducers: {
        addItemToWishlist: (state, action)=>{
            const existingItem = state.items.find((item)=>item.id === action.payload.id);
            if (!existingItem) {
                state.items.push(action.payload);
            }
        },
        removeItemFromWishlist: (state, action)=>{
            state.items = state.items.filter((item)=>item.id !== action.payload);
        },
        removeAllItemsFromWishlist: (state)=>{
            state.items = [];
        }
    }
});
const { addItemToWishlist, removeItemFromWishlist, removeAllItemsFromWishlist } = wishlist.actions;
const __TURBOPACK__default__export__ = wishlist.reducer;
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/redux/features/product-details.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__,
    "productDetails",
    ()=>productDetails,
    "updateproductDetails",
    ()=>updateproductDetails
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$reduxjs$2f$toolkit$2f$dist$2f$redux$2d$toolkit$2e$modern$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/@reduxjs/toolkit/dist/redux-toolkit.modern.mjs [app-client] (ecmascript) <locals>");
;
const initialState = {
    value: null
};
const productDetails = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$reduxjs$2f$toolkit$2f$dist$2f$redux$2d$toolkit$2e$modern$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["createSlice"])({
    name: "productDetails",
    initialState,
    reducers: {
        updateproductDetails: (state, action)=>{
            state.value = action.payload;
        }
    }
});
const { updateproductDetails } = productDetails.actions;
const __TURBOPACK__default__export__ = productDetails.reducer;
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/redux/store.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "persistor",
    ()=>persistor,
    "store",
    ()=>store
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$reduxjs$2f$toolkit$2f$dist$2f$redux$2d$toolkit$2e$modern$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/@reduxjs/toolkit/dist/redux-toolkit.modern.mjs [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$redux$2f$dist$2f$redux$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/redux/dist/redux.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$redux$2f$features$2f$quickView$2d$slice$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/redux/features/quickView-slice.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$redux$2f$features$2f$cart$2d$slice$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/redux/features/cart-slice.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$redux$2f$features$2f$wishlist$2d$slice$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/redux/features/wishlist-slice.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$redux$2f$features$2f$product$2d$details$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/redux/features/product-details.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$redux$2d$persist$2f$es$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/redux-persist/es/index.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$redux$2d$persist$2f$es$2f$persistStore$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__persistStore$3e$__ = __turbopack_context__.i("[project]/node_modules/redux-persist/es/persistStore.js [app-client] (ecmascript) <export default as persistStore>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$redux$2d$persist$2f$es$2f$persistReducer$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__persistReducer$3e$__ = __turbopack_context__.i("[project]/node_modules/redux-persist/es/persistReducer.js [app-client] (ecmascript) <export default as persistReducer>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$redux$2d$persist$2f$lib$2f$storage$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/redux-persist/lib/storage/index.js [app-client] (ecmascript)");
;
;
;
;
;
;
;
const rootReducer = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$redux$2f$dist$2f$redux$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["combineReducers"])({
    quickViewReducer: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$redux$2f$features$2f$quickView$2d$slice$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"],
    cartReducer: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$redux$2f$features$2f$cart$2d$slice$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"],
    wishlistReducer: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$redux$2f$features$2f$wishlist$2d$slice$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"],
    productDetailsReducer: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$redux$2f$features$2f$product$2d$details$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]
});
const persistConfig = {
    key: "root",
    storage: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$redux$2d$persist$2f$lib$2f$storage$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"],
    whitelist: [
        "cartReducer",
        "wishlistReducer"
    ]
};
const persistedReducer = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$redux$2d$persist$2f$es$2f$persistReducer$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__persistReducer$3e$__["persistReducer"])(persistConfig, rootReducer);
const store = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$reduxjs$2f$toolkit$2f$dist$2f$redux$2d$toolkit$2e$modern$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["configureStore"])({
    reducer: persistedReducer,
    middleware: (getDefaultMiddleware)=>getDefaultMiddleware({
            serializableCheck: false
        })
});
const persistor = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$redux$2d$persist$2f$es$2f$persistStore$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__persistStore$3e$__["persistStore"])(store);
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/redux/provider.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ReduxProvider",
    ()=>ReduxProvider
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$redux$2f$dist$2f$react$2d$redux$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react-redux/dist/react-redux.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$redux$2f$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/redux/store.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$redux$2d$persist$2f$es$2f$integration$2f$react$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/redux-persist/es/integration/react.js [app-client] (ecmascript)");
"use client";
;
;
;
;
function ReduxProvider({ children }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$redux$2f$dist$2f$react$2d$redux$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Provider"], {
        store: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$redux$2f$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["store"],
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$redux$2d$persist$2f$es$2f$integration$2f$react$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PersistGate"], {
            loading: null,
            persistor: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$redux$2f$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["persistor"],
            children: children
        }, void 0, false, {
            fileName: "[project]/src/redux/provider.tsx",
            lineNumber: 11,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/redux/provider.tsx",
        lineNumber: 10,
        columnNumber: 5
    }, this);
}
_c = ReduxProvider;
var _c;
__turbopack_context__.k.register(_c, "ReduxProvider");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/app/context/QuickViewModalContext.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ModalProvider",
    ()=>ModalProvider,
    "useModalContext",
    ()=>useModalContext
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature(), _s1 = __turbopack_context__.k.signature();
"use client";
;
const ModalContext = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createContext"])(undefined);
const useModalContext = ()=>{
    _s();
    const context = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useContext"])(ModalContext);
    if (!context) {
        throw new Error("useModalContext must be used within a ModalProvider");
    }
    return context;
};
_s(useModalContext, "b9L3QQ+jgeyIrH0NfHrJ8nn7VMU=");
const ModalProvider = ({ children })=>{
    _s1();
    const [isModalOpen, setIsModalOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const openModal = ()=>{
        setIsModalOpen(true);
    };
    const closeModal = ()=>{
        setIsModalOpen(false);
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(ModalContext.Provider, {
        value: {
            isModalOpen,
            openModal,
            closeModal
        },
        children: children
    }, void 0, false, {
        fileName: "[project]/src/app/context/QuickViewModalContext.tsx",
        lineNumber: 32,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
_s1(ModalProvider, "mLsII5HRP5G63IA/8vjZ5YHXWr8=");
_c = ModalProvider;
var _c;
__turbopack_context__.k.register(_c, "ModalProvider");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/app/context/QuickViewModalContextService.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ModalProviderService",
    ()=>ModalProviderService,
    "useModalContextService",
    ()=>useModalContextService
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature(), _s1 = __turbopack_context__.k.signature();
"use client";
;
const ModalContext = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createContext"])(undefined);
const useModalContextService = ()=>{
    _s();
    const context = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useContext"])(ModalContext);
    if (!context) {
        throw new Error("useModalContext must be used within a ModalProvider");
    }
    return context;
};
_s(useModalContextService, "b9L3QQ+jgeyIrH0NfHrJ8nn7VMU=");
const ModalProviderService = ({ children })=>{
    _s1();
    const [isModalOpen, setIsModalOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const openModal = ()=>{
        setIsModalOpen(true);
    };
    const closeModal = ()=>{
        setIsModalOpen(false);
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(ModalContext.Provider, {
        value: {
            isModalOpen,
            openModal,
            closeModal
        },
        children: children
    }, void 0, false, {
        fileName: "[project]/src/app/context/QuickViewModalContextService.tsx",
        lineNumber: 32,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
_s1(ModalProviderService, "mLsII5HRP5G63IA/8vjZ5YHXWr8=");
_c = ModalProviderService;
var _c;
__turbopack_context__.k.register(_c, "ModalProviderService");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/app/context/PreviewSliderContext.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "PreviewSliderProvider",
    ()=>PreviewSliderProvider,
    "usePreviewSlider",
    ()=>usePreviewSlider
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature(), _s1 = __turbopack_context__.k.signature();
"use client";
;
const PreviewSlider = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createContext"])(undefined);
const usePreviewSlider = ()=>{
    _s();
    const context = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useContext"])(PreviewSlider);
    if (!context) {
        throw new Error("usePreviewSlider must be used within a ModalProvider");
    }
    return context;
};
_s(usePreviewSlider, "b9L3QQ+jgeyIrH0NfHrJ8nn7VMU=");
const PreviewSliderProvider = ({ children })=>{
    _s1();
    const [isModalPreviewOpen, setIsModalOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const openPreviewModal = ()=>{
        setIsModalOpen(true);
    };
    const closePreviewModal = ()=>{
        setIsModalOpen(false);
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(PreviewSlider.Provider, {
        value: {
            isModalPreviewOpen,
            openPreviewModal,
            closePreviewModal
        },
        children: children
    }, void 0, false, {
        fileName: "[project]/src/app/context/PreviewSliderContext.tsx",
        lineNumber: 32,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
_s1(PreviewSliderProvider, "sP7O8OempjzoOkNAlQlBedyZHQs=");
_c = PreviewSliderProvider;
var _c;
__turbopack_context__.k.register(_c, "PreviewSliderProvider");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/rate-card/RateCardPreview.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/navigation.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
const RateCardPreview = ({ rateCardKey })=>{
    _s();
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"])();
    if (!rateCardKey) return null;
    const handleNavigate = ()=>{
        router.push(`/rate-card/${rateCardKey}`);
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
        onClick: handleNavigate,
        className: "text-[#3683ab] font-medium underline hover:text-[#14455b] transition",
        children: "View Rate Card"
    }, void 0, false, {
        fileName: "[project]/src/components/rate-card/RateCardPreview.tsx",
        lineNumber: 18,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
_s(RateCardPreview, "fN7XvhJ+p5oE6+Xlo0NJmXpxjC8=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"]
    ];
});
_c = RateCardPreview;
const __TURBOPACK__default__export__ = RateCardPreview;
var _c;
__turbopack_context__.k.register(_c, "RateCardPreview");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/Common/QuickViewModal.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$context$2f$QuickViewModalContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/context/QuickViewModalContext.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$redux$2f$hooks$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/redux/hooks.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/image.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$rate$2d$card$2f$RateCardPreview$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/rate-card/RateCardPreview.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$context$2f$PreviewSliderContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/context/PreviewSliderContext.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$redux$2f$features$2f$product$2d$details$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/redux/features/product-details.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/navigation.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
;
;
;
;
const QuickViewModal = ()=>{
    _s();
    const { isModalOpen, closeModal } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$context$2f$QuickViewModalContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useModalContext"])();
    const { openPreviewModal } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$context$2f$PreviewSliderContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["usePreviewSlider"])();
    const [activePreview] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0);
    const dispatch = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$redux$2f$hooks$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAppDispatch"])();
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"])();
    const pathname = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["usePathname"])();
    const product = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$redux$2f$hooks$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAppSelector"])({
        "QuickViewModal.useAppSelector[product]": (state)=>state.quickViewReducer.value
    }["QuickViewModal.useAppSelector[product]"]);
    const handlePreviewSlider = ()=>{
        dispatch((0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$redux$2f$features$2f$product$2d$details$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["updateproductDetails"])(product));
        openPreviewModal();
    };
    const handleBookNow = ()=>{
        if (!product) return;
        router.push(`/service/${product.id}`);
        closeModal();
    };
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "QuickViewModal.useEffect": ()=>{
            if (isModalOpen) closeModal();
        }
    }["QuickViewModal.useEffect"], [
        pathname
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "QuickViewModal.useEffect": ()=>{
            function handleClickOutside(event) {
                const target = event.target;
                if (!target.closest(".modal-content")) closeModal();
            }
            if (isModalOpen) {
                document.addEventListener("mousedown", handleClickOutside);
            }
            return ({
                "QuickViewModal.useEffect": ()=>{
                    document.removeEventListener("mousedown", handleClickOutside);
                }
            })["QuickViewModal.useEffect"];
        }
    }["QuickViewModal.useEffect"], [
        isModalOpen
    ]);
    if (!product) return null;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: `${isModalOpen ? "z-[9999]" : "hidden"} fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center px-4`,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "modal-content w-full max-w-[1100px] bg-white rounded-2xl shadow-2xl p-8 relative max-h-[90vh] overflow-y-auto",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                    onClick: closeModal,
                    "aria-label": "Close modal",
                    className: "absolute top-4 right-4 z-50 flex items-center justify-center w-9 h-9 rounded-full bg-white shadow-md hover:bg-gray-100 transition",
                    children: "✕"
                }, void 0, false, {
                    fileName: "[project]/src/components/Common/QuickViewModal.tsx",
                    lineNumber: 65,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "grid lg:grid-cols-2 gap-10",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "relative flex items-center justify-center w-full bg-gray-50 rounded-xl",
                            children: product?.imgs?.previews?.[activePreview] && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                src: product.imgs.previews[activePreview],
                                alt: "preview",
                                width: 450,
                                height: 450,
                                className: "object-contain rounded-xl"
                            }, void 0, false, {
                                fileName: "[project]/src/components/Common/QuickViewModal.tsx",
                                lineNumber: 78,
                                columnNumber: 15
                            }, ("TURBOPACK compile-time value", void 0))
                        }, void 0, false, {
                            fileName: "[project]/src/components/Common/QuickViewModal.tsx",
                            lineNumber: 76,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex flex-col",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                    className: "text-2xl font-semibold bg-[#d7f1ff] text-[#3683ab] px-6 py-2.5 rounded-md mb-4 w-fit",
                                    children: product.title
                                }, void 0, false, {
                                    fileName: "[project]/src/components/Common/QuickViewModal.tsx",
                                    lineNumber: 92,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0)),
                                product?.description?.about && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "mb-6",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                            className: "text-sm font-semibold text-gray-800 mb-2",
                                            children: "Service Includes"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/Common/QuickViewModal.tsx",
                                            lineNumber: 99,
                                            columnNumber: 17
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                            className: "text-gray-600 text-sm space-y-1",
                                            children: product.description.about.slice(0, 4).map((item, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                    children: [
                                                        "• ",
                                                        item
                                                    ]
                                                }, index, true, {
                                                    fileName: "[project]/src/components/Common/QuickViewModal.tsx",
                                                    lineNumber: 105,
                                                    columnNumber: 21
                                                }, ("TURBOPACK compile-time value", void 0)))
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/Common/QuickViewModal.tsx",
                                            lineNumber: 103,
                                            columnNumber: 17
                                        }, ("TURBOPACK compile-time value", void 0))
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/Common/QuickViewModal.tsx",
                                    lineNumber: 98,
                                    columnNumber: 15
                                }, ("TURBOPACK compile-time value", void 0)),
                                product?.description?.benefits && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "mb-6",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                            className: "text-sm font-semibold text-gray-800 mb-2",
                                            children: "Benefits"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/Common/QuickViewModal.tsx",
                                            lineNumber: 114,
                                            columnNumber: 17
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                            className: "text-gray-600 text-sm space-y-1",
                                            children: product.description.benefits.slice(0, 3).map((item, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                    children: [
                                                        "✔ ",
                                                        item
                                                    ]
                                                }, index, true, {
                                                    fileName: "[project]/src/components/Common/QuickViewModal.tsx",
                                                    lineNumber: 120,
                                                    columnNumber: 21
                                                }, ("TURBOPACK compile-time value", void 0)))
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/Common/QuickViewModal.tsx",
                                            lineNumber: 118,
                                            columnNumber: 17
                                        }, ("TURBOPACK compile-time value", void 0))
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/Common/QuickViewModal.tsx",
                                    lineNumber: 113,
                                    columnNumber: 15
                                }, ("TURBOPACK compile-time value", void 0)),
                                product?.rateCardKey && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "mb-6",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$rate$2d$card$2f$RateCardPreview$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                        rateCardKey: product.rateCardKey
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/Common/QuickViewModal.tsx",
                                        lineNumber: 129,
                                        columnNumber: 17
                                    }, ("TURBOPACK compile-time value", void 0))
                                }, void 0, false, {
                                    fileName: "[project]/src/components/Common/QuickViewModal.tsx",
                                    lineNumber: 128,
                                    columnNumber: 15
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    onClick: handleBookNow,
                                    className: "w-[220px] bg-[#3683ab] hover:bg-[#14455b] text-white py-3 rounded-lg font-semibold transition shadow-md",
                                    children: "Book Now"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/Common/QuickViewModal.tsx",
                                    lineNumber: 134,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/Common/QuickViewModal.tsx",
                            lineNumber: 89,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/Common/QuickViewModal.tsx",
                    lineNumber: 73,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0))
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/Common/QuickViewModal.tsx",
            lineNumber: 62,
            columnNumber: 7
        }, ("TURBOPACK compile-time value", void 0))
    }, void 0, false, {
        fileName: "[project]/src/components/Common/QuickViewModal.tsx",
        lineNumber: 57,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
_s(QuickViewModal, "D2CAQhqssPzN6+ML9Sre7mpDVX4=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$context$2f$QuickViewModalContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useModalContext"],
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$context$2f$PreviewSliderContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["usePreviewSlider"],
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$redux$2f$hooks$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAppDispatch"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["usePathname"],
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$redux$2f$hooks$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAppSelector"]
    ];
});
_c = QuickViewModal;
const __TURBOPACK__default__export__ = QuickViewModal;
var _c;
__turbopack_context__.k.register(_c, "QuickViewModal");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/Common/CartSidebarModal/SingleItem.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$redux$2f$hooks$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/redux/hooks.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/image.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
;
;
const SingleItem = ({ item, removeItemFromCart })=>{
    _s();
    const dispatch = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$redux$2f$hooks$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAppDispatch"])();
    const handleRemoveFromCart = ()=>{
        dispatch(removeItemFromCart(item.id));
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "flex items-center justify-between gap-5",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "w-full flex items-center gap-6",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center justify-center rounded-[10px] bg-gray-3 max-w-[90px] w-full h-22.5",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                            src: item.imgs?.thumbnails[0],
                            alt: "product",
                            width: 100,
                            height: 100
                        }, void 0, false, {
                            fileName: "[project]/src/components/Common/CartSidebarModal/SingleItem.tsx",
                            lineNumber: 17,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0))
                    }, void 0, false, {
                        fileName: "[project]/src/components/Common/CartSidebarModal/SingleItem.tsx",
                        lineNumber: 16,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                className: "font-medium text-dark mb-1 ease-out duration-200 hover:text-[#3683ab]",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                    href: "#",
                                    children: [
                                        " ",
                                        item.title,
                                        " "
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/Common/CartSidebarModal/SingleItem.tsx",
                                    lineNumber: 22,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0))
                            }, void 0, false, {
                                fileName: "[project]/src/components/Common/CartSidebarModal/SingleItem.tsx",
                                lineNumber: 21,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-custom-sm",
                                children: [
                                    "Price: ₹",
                                    item.discountedPrice
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/Common/CartSidebarModal/SingleItem.tsx",
                                lineNumber: 24,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/Common/CartSidebarModal/SingleItem.tsx",
                        lineNumber: 20,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/Common/CartSidebarModal/SingleItem.tsx",
                lineNumber: 15,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                onClick: handleRemoveFromCart,
                "aria-label": "button for remove product from cart",
                className: "flex items-center justify-center rounded-lg max-w-[38px] w-full h-9.5 bg-gray-2 border border-gray-3 text-dark ease-out duration-200 hover:bg-red-light-6 hover:border-red-light-4 hover:text-red",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                    className: "fill-current",
                    width: "22",
                    height: "22",
                    viewBox: "0 0 22 22",
                    fill: "none",
                    xmlns: "http://www.w3.org/2000/svg",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                            fillRule: "evenodd",
                            clipRule: "evenodd",
                            d: "M9.45017 2.06252H12.5498C12.7482 2.06239 12.921 2.06228 13.0842 2.08834C13.7289 2.19129 14.2868 2.59338 14.5883 3.17244C14.6646 3.319 14.7192 3.48298 14.7818 3.6712L14.8841 3.97819C14.9014 4.03015 14.9064 4.04486 14.9105 4.05645C15.0711 4.50022 15.4873 4.80021 15.959 4.81217C15.9714 4.81248 15.9866 4.81254 16.0417 4.81254H18.7917C19.1714 4.81254 19.4792 5.12034 19.4792 5.50004C19.4792 5.87973 19.1714 6.18754 18.7917 6.18754H3.20825C2.82856 6.18754 2.52075 5.87973 2.52075 5.50004C2.52075 5.12034 2.82856 4.81254 3.20825 4.81254H5.95833C6.01337 4.81254 6.02856 4.81248 6.04097 4.81217C6.51273 4.80021 6.92892 4.50024 7.08944 4.05647C7.09366 4.0448 7.09852 4.03041 7.11592 3.97819L7.21823 3.67122C7.28083 3.48301 7.33538 3.319 7.41171 3.17244C7.71324 2.59339 8.27112 2.19129 8.91581 2.08834C9.079 2.06228 9.25181 2.06239 9.45017 2.06252ZM8.25739 4.81254C8.30461 4.71993 8.34645 4.6237 8.38245 4.52419C8.39338 4.49397 8.4041 4.4618 8.41787 4.42048L8.50936 4.14601C8.59293 3.8953 8.61217 3.84416 8.63126 3.8075C8.73177 3.61448 8.91773 3.48045 9.13263 3.44614C9.17345 3.43962 9.22803 3.43754 9.49232 3.43754H12.5077C12.772 3.43754 12.8265 3.43962 12.8674 3.44614C13.0823 3.48045 13.2682 3.61449 13.3687 3.8075C13.3878 3.84416 13.4071 3.89529 13.4906 4.14601L13.5821 4.42031L13.6176 4.52421C13.6535 4.62372 13.6954 4.71994 13.7426 4.81254H8.25739Z",
                            fill: ""
                        }, void 0, false, {
                            fileName: "[project]/src/components/Common/CartSidebarModal/SingleItem.tsx",
                            lineNumber: 41,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                            d: "M5.42208 7.74597C5.39683 7.36711 5.06923 7.08047 4.69038 7.10572C4.31152 7.13098 4.02487 7.45858 4.05013 7.83743L4.47496 14.2099C4.55333 15.3857 4.61663 16.3355 4.76511 17.0808C4.91947 17.8557 5.18203 18.5029 5.72432 19.0103C6.26662 19.5176 6.92987 19.7365 7.7133 19.839C8.46682 19.9376 9.41871 19.9376 10.5971 19.9375H11.4028C12.5812 19.9376 13.5332 19.9376 14.2867 19.839C15.0701 19.7365 15.7334 19.5176 16.2757 19.0103C16.818 18.5029 17.0805 17.8557 17.2349 17.0808C17.3834 16.3355 17.4467 15.3857 17.525 14.2099L17.9499 7.83743C17.9751 7.45858 17.6885 7.13098 17.3096 7.10572C16.9308 7.08047 16.6032 7.36711 16.5779 7.74597L16.1563 14.0702C16.0739 15.3057 16.0152 16.1654 15.8864 16.8122C15.7614 17.4396 15.5869 17.7717 15.3363 18.0062C15.0857 18.2406 14.7427 18.3926 14.1084 18.4756C13.4544 18.5612 12.5927 18.5625 11.3545 18.5625H10.6455C9.40727 18.5625 8.54559 18.5612 7.89164 18.4756C7.25731 18.3926 6.91433 18.2406 6.6637 18.0062C6.41307 17.7717 6.2386 17.4396 6.11361 16.8122C5.98476 16.1654 5.92607 15.3057 5.8437 14.0702L5.42208 7.74597Z",
                            fill: ""
                        }, void 0, false, {
                            fileName: "[project]/src/components/Common/CartSidebarModal/SingleItem.tsx",
                            lineNumber: 47,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                            d: "M8.63993 9.39928C9.01774 9.3615 9.35464 9.63715 9.39242 10.015L9.85076 14.5983C9.88854 14.9761 9.61289 15.313 9.23508 15.3508C8.85727 15.3886 8.52036 15.1129 8.48258 14.7351L8.02425 10.1518C7.98647 9.77397 8.26212 9.43706 8.63993 9.39928Z",
                            fill: ""
                        }, void 0, false, {
                            fileName: "[project]/src/components/Common/CartSidebarModal/SingleItem.tsx",
                            lineNumber: 51,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                            d: "M13.3601 9.39928C13.7379 9.43706 14.0135 9.77397 13.9758 10.1518L13.5174 14.7351C13.4796 15.1129 13.1427 15.3886 12.7649 15.3508C12.3871 15.313 12.1115 14.9761 12.1492 14.5983L12.6076 10.015C12.6454 9.63715 12.9823 9.3615 13.3601 9.39928Z",
                            fill: ""
                        }, void 0, false, {
                            fileName: "[project]/src/components/Common/CartSidebarModal/SingleItem.tsx",
                            lineNumber: 55,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/Common/CartSidebarModal/SingleItem.tsx",
                    lineNumber: 33,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0))
            }, void 0, false, {
                fileName: "[project]/src/components/Common/CartSidebarModal/SingleItem.tsx",
                lineNumber: 28,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/Common/CartSidebarModal/SingleItem.tsx",
        lineNumber: 14,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
_s(SingleItem, "BJQ1DUn/XFEl2NsQ3DWyHAXfnkY=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$redux$2f$hooks$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAppDispatch"]
    ];
});
_c = SingleItem;
const __TURBOPACK__default__export__ = SingleItem;
var _c;
__turbopack_context__.k.register(_c, "SingleItem");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/Common/CartSidebarModal/EmptyCart.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$context$2f$CartSidebarModalContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/context/CartSidebarModalContext.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
;
;
const EmptyCart = ()=>{
    _s();
    const { closeCartModal } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$context$2f$CartSidebarModalContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCartModalContext"])();
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "text-center",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "mx-auto pb-7.5",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                    className: "mx-auto",
                    width: "100",
                    height: "100",
                    viewBox: "0 0 100 100",
                    fill: "none",
                    xmlns: "http://www.w3.org/2000/svg",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                            cx: "50",
                            cy: "50",
                            r: "50",
                            fill: "#F3F4F6"
                        }, void 0, false, {
                            fileName: "[project]/src/components/Common/CartSidebarModal/EmptyCart.tsx",
                            lineNumber: 19,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                            fillRule: "evenodd",
                            clipRule: "evenodd",
                            d: "M36.1693 36.2421C35.6126 36.0565 35.0109 36.3574 34.8253 36.9141C34.6398 37.4707 34.9406 38.0725 35.4973 38.258L35.8726 38.3831C36.8308 38.7025 37.4644 38.9154 37.9311 39.1325C38.373 39.3381 38.5641 39.5036 38.6865 39.6734C38.809 39.8433 38.9055 40.0769 38.9608 40.5612C39.0192 41.0726 39.0208 41.7409 39.0208 42.751L39.0208 46.5361C39.0208 48.4735 39.0207 50.0352 39.1859 51.2634C39.3573 52.5385 39.7241 53.6122 40.5768 54.4649C41.4295 55.3176 42.5032 55.6844 43.7783 55.8558C45.0065 56.0209 46.5681 56.0209 48.5055 56.0209H59.9166C60.5034 56.0209 60.9791 55.5452 60.9791 54.9584C60.9791 54.3716 60.5034 53.8959 59.9166 53.8959H48.5833C46.5498 53.8959 45.1315 53.8936 44.0615 53.7498C43.022 53.61 42.4715 53.3544 42.0794 52.9623C41.9424 52.8253 41.8221 52.669 41.7175 52.4792H55.7495C56.3846 52.4792 56.9433 52.4793 57.4072 52.4292C57.9093 52.375 58.3957 52.2546 58.8534 51.9528C59.3111 51.651 59.6135 51.2513 59.8611 50.8111C60.0898 50.4045 60.3099 49.891 60.56 49.3072L61.2214 47.7641C61.766 46.4933 62.2217 45.4302 62.4498 44.5655C62.6878 43.6634 62.7497 42.7216 62.1884 41.8704C61.627 41.0191 60.737 40.705 59.8141 40.5684C58.9295 40.4374 57.7729 40.4375 56.3903 40.4375L41.0845 40.4375C41.0806 40.3979 41.0765 40.3588 41.0721 40.3201C40.9937 39.6333 40.8228 39.0031 40.4104 38.4309C39.998 37.8588 39.4542 37.4974 38.8274 37.2058C38.2377 36.9315 37.4879 36.6816 36.6005 36.3858L36.1693 36.2421ZM41.1458 42.5625C41.1458 42.6054 41.1458 42.6485 41.1458 42.692L41.1458 46.4584C41.1458 48.1187 41.1473 49.3688 41.2262 50.3542H55.6975C56.4 50.3542 56.8429 50.3528 57.1791 50.3165C57.4896 50.2829 57.6091 50.2279 57.6836 50.1787C57.7582 50.1296 57.8559 50.0415 58.009 49.7692C58.1748 49.4745 58.3506 49.068 58.6273 48.4223L59.2344 47.0057C59.8217 45.6355 60.2119 44.7177 60.3951 44.0235C60.5731 43.3488 60.4829 43.1441 60.4143 43.0401C60.3458 42.9362 60.1931 42.7727 59.5029 42.6705C58.7927 42.5653 57.7954 42.5625 56.3047 42.5625H41.1458Z",
                            fill: "#8D93A5"
                        }, void 0, false, {
                            fileName: "[project]/src/components/Common/CartSidebarModal/EmptyCart.tsx",
                            lineNumber: 20,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                            fillRule: "evenodd",
                            clipRule: "evenodd",
                            d: "M40.4375 60.625C40.4375 62.3855 41.8646 63.8125 43.625 63.8125C45.3854 63.8125 46.8125 62.3855 46.8125 60.625C46.8125 58.8646 45.3854 57.4375 43.625 57.4375C41.8646 57.4375 40.4375 58.8646 40.4375 60.625ZM43.625 61.6875C43.0382 61.6875 42.5625 61.2118 42.5625 60.625C42.5625 60.0382 43.0382 59.5625 43.625 59.5625C44.2118 59.5625 44.6875 60.0382 44.6875 60.625C44.6875 61.2118 44.2118 61.6875 43.625 61.6875Z",
                            fill: "#8D93A5"
                        }, void 0, false, {
                            fileName: "[project]/src/components/Common/CartSidebarModal/EmptyCart.tsx",
                            lineNumber: 26,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                            fillRule: "evenodd",
                            clipRule: "evenodd",
                            d: "M56.375 63.8126C54.6146 63.8126 53.1875 62.3856 53.1875 60.6251C53.1875 58.8647 54.6146 57.4376 56.375 57.4376C58.1354 57.4376 59.5625 58.8647 59.5625 60.6251C59.5625 62.3856 58.1354 63.8126 56.375 63.8126ZM55.3125 60.6251C55.3125 61.212 55.7882 61.6876 56.375 61.6876C56.9618 61.6876 57.4375 61.212 57.4375 60.6251C57.4375 60.0383 56.9618 59.5626 56.375 59.5626C55.7882 59.5626 55.3125 60.0383 55.3125 60.6251Z",
                            fill: "#8D93A5"
                        }, void 0, false, {
                            fileName: "[project]/src/components/Common/CartSidebarModal/EmptyCart.tsx",
                            lineNumber: 32,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/Common/CartSidebarModal/EmptyCart.tsx",
                    lineNumber: 11,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0))
            }, void 0, false, {
                fileName: "[project]/src/components/Common/CartSidebarModal/EmptyCart.tsx",
                lineNumber: 10,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: "pb-6",
                children: "Your cart is empty!"
            }, void 0, false, {
                fileName: "[project]/src/components/Common/CartSidebarModal/EmptyCart.tsx",
                lineNumber: 41,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                onClick: ()=>closeCartModal(),
                href: "/",
                className: "w-full lg:w-10/12 mx-auto flex justify-center font-medium text-white bg-dark py-[13px] px-6 rounded-md ease-out duration-200 hover:bg-opacity-95",
                children: "Continue Shopping"
            }, void 0, false, {
                fileName: "[project]/src/components/Common/CartSidebarModal/EmptyCart.tsx",
                lineNumber: 43,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/Common/CartSidebarModal/EmptyCart.tsx",
        lineNumber: 9,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
_s(EmptyCart, "ovdFIHYGxTx8oI24VvcsI2jsu5Q=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$context$2f$CartSidebarModalContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCartModalContext"]
    ];
});
_c = EmptyCart;
const __TURBOPACK__default__export__ = EmptyCart;
var _c;
__turbopack_context__.k.register(_c, "EmptyCart");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/Common/CartSidebarModal/index.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$context$2f$CartSidebarModalContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/context/CartSidebarModalContext.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$redux$2f$features$2f$cart$2d$slice$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/redux/features/cart-slice.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$redux$2f$hooks$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/redux/hooks.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$redux$2f$dist$2f$react$2d$redux$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react-redux/dist/react-redux.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Common$2f$CartSidebarModal$2f$SingleItem$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/Common/CartSidebarModal/SingleItem.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Common$2f$CartSidebarModal$2f$EmptyCart$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/Common/CartSidebarModal/EmptyCart.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
;
;
;
const CartSidebarModal = ()=>{
    _s();
    const { isCartModalOpen, closeCartModal } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$context$2f$CartSidebarModalContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCartModalContext"])();
    const cartItems = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$redux$2f$hooks$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAppSelector"])({
        "CartSidebarModal.useAppSelector[cartItems]": (state)=>state.cartReducer.items
    }["CartSidebarModal.useAppSelector[cartItems]"]);
    const totalPrice = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$redux$2f$dist$2f$react$2d$redux$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSelector"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$redux$2f$features$2f$cart$2d$slice$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["selectTotalPrice"]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "CartSidebarModal.useEffect": ()=>{
            // closing modal while clicking outside
            function handleClickOutside(event) {
                if (!event.target.closest(".modal-content")) {
                    closeCartModal();
                }
            }
            if (isCartModalOpen) {
                document.addEventListener("mousedown", handleClickOutside);
            }
            return ({
                "CartSidebarModal.useEffect": ()=>{
                    document.removeEventListener("mousedown", handleClickOutside);
                }
            })["CartSidebarModal.useEffect"];
        }
    }["CartSidebarModal.useEffect"], [
        isCartModalOpen,
        closeCartModal
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: `fixed top-0 left-0 z-99999 overflow-y-auto no-scrollbar w-full h-screen bg-dark/70 ease-linear duration-300 ${isCartModalOpen ? "translate-x-0" : "translate-x-full"}`,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex items-center justify-end",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "w-full max-w-[500px] shadow-1 bg-white px-4 sm:px-7.5 lg:px-11 relative modal-content",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "sticky top-0 bg-white flex items-center justify-between pb-7 pt-4 sm:pt-7.5 lg:pt-11 border-b border-gray-3 mb-7.5",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                className: "font-medium text-dark text-lg sm:text-2xl",
                                children: "Cart View"
                            }, void 0, false, {
                                fileName: "[project]/src/components/Common/CartSidebarModal/index.tsx",
                                lineNumber: 47,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: ()=>closeCartModal(),
                                "aria-label": "button for close modal",
                                className: "flex items-center justify-center ease-in duration-150 bg-meta text-dark-5 hover:text-dark",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                    className: "fill-current",
                                    width: "30",
                                    height: "30",
                                    viewBox: "0 0 30 30",
                                    fill: "none",
                                    xmlns: "http://www.w3.org/2000/svg",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                            d: "M12.5379 11.2121C12.1718 10.846 11.5782 10.846 11.212 11.2121C10.8459 11.5782 10.8459 12.1718 11.212 12.5379L13.6741 15L11.2121 17.4621C10.846 17.8282 10.846 18.4218 11.2121 18.7879C11.5782 19.154 12.1718 19.154 12.5379 18.7879L15 16.3258L17.462 18.7879C17.8281 19.154 18.4217 19.154 18.7878 18.7879C19.154 18.4218 19.154 17.8282 18.7878 17.462L16.3258 15L18.7879 12.5379C19.154 12.1718 19.154 11.5782 18.7879 11.2121C18.4218 10.846 17.8282 10.846 17.462 11.2121L15 13.6742L12.5379 11.2121Z",
                                            fill: ""
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/Common/CartSidebarModal/index.tsx",
                                            lineNumber: 63,
                                            columnNumber: 17
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                            fillRule: "evenodd",
                                            clipRule: "evenodd",
                                            d: "M15 1.5625C7.57867 1.5625 1.5625 7.57867 1.5625 15C1.5625 22.4213 7.57867 28.4375 15 28.4375C22.4213 28.4375 28.4375 22.4213 28.4375 15C28.4375 7.57867 22.4213 1.5625 15 1.5625ZM3.4375 15C3.4375 8.61421 8.61421 3.4375 15 3.4375C21.3858 3.4375 26.5625 8.61421 26.5625 15C26.5625 21.3858 21.3858 26.5625 15 26.5625C8.61421 26.5625 3.4375 21.3858 3.4375 15Z",
                                            fill: ""
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/Common/CartSidebarModal/index.tsx",
                                            lineNumber: 67,
                                            columnNumber: 17
                                        }, ("TURBOPACK compile-time value", void 0))
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/Common/CartSidebarModal/index.tsx",
                                    lineNumber: 55,
                                    columnNumber: 15
                                }, ("TURBOPACK compile-time value", void 0))
                            }, void 0, false, {
                                fileName: "[project]/src/components/Common/CartSidebarModal/index.tsx",
                                lineNumber: 50,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/Common/CartSidebarModal/index.tsx",
                        lineNumber: 46,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "h-[66vh] overflow-y-auto no-scrollbar",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex flex-col gap-6",
                            children: cartItems.length > 0 ? cartItems.map((item, key)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Common$2f$CartSidebarModal$2f$SingleItem$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                    item: item,
                                    removeItemFromCart: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$redux$2f$features$2f$cart$2d$slice$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["removeItemFromCart"]
                                }, key, false, {
                                    fileName: "[project]/src/components/Common/CartSidebarModal/index.tsx",
                                    lineNumber: 82,
                                    columnNumber: 19
                                }, ("TURBOPACK compile-time value", void 0))) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Common$2f$CartSidebarModal$2f$EmptyCart$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                                fileName: "[project]/src/components/Common/CartSidebarModal/index.tsx",
                                lineNumber: 89,
                                columnNumber: 17
                            }, ("TURBOPACK compile-time value", void 0))
                        }, void 0, false, {
                            fileName: "[project]/src/components/Common/CartSidebarModal/index.tsx",
                            lineNumber: 78,
                            columnNumber: 13
                        }, ("TURBOPACK compile-time value", void 0))
                    }, void 0, false, {
                        fileName: "[project]/src/components/Common/CartSidebarModal/index.tsx",
                        lineNumber: 77,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "border-t border-gray-3 bg-white pt-5 pb-4 sm:pb-7.5 lg:pb-11 mt-7.5 sticky bottom-0",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center justify-between gap-5 mb-6",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "font-medium text-xl text-dark",
                                        children: "Subtotal:"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/Common/CartSidebarModal/index.tsx",
                                        lineNumber: 96,
                                        columnNumber: 15
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "font-medium text-xl text-dark",
                                        children: [
                                            "$",
                                            totalPrice
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/Common/CartSidebarModal/index.tsx",
                                        lineNumber: 98,
                                        columnNumber: 15
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/Common/CartSidebarModal/index.tsx",
                                lineNumber: 95,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center gap-4",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                        onClick: ()=>closeCartModal(),
                                        href: "/cart",
                                        className: "w-full flex justify-center font-medium text-white bg-blue py-[13px] px-6 rounded-md ease-out duration-200 hover:bg-blue-dark",
                                        children: "View Cart"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/Common/CartSidebarModal/index.tsx",
                                        lineNumber: 102,
                                        columnNumber: 15
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                        href: "/checkout",
                                        className: "w-full flex justify-center font-medium text-white bg-dark py-[13px] px-6 rounded-md ease-out duration-200 hover:bg-opacity-95",
                                        children: "Checkout"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/Common/CartSidebarModal/index.tsx",
                                        lineNumber: 110,
                                        columnNumber: 15
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/Common/CartSidebarModal/index.tsx",
                                lineNumber: 101,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/Common/CartSidebarModal/index.tsx",
                        lineNumber: 94,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/Common/CartSidebarModal/index.tsx",
                lineNumber: 45,
                columnNumber: 9
            }, ("TURBOPACK compile-time value", void 0))
        }, void 0, false, {
            fileName: "[project]/src/components/Common/CartSidebarModal/index.tsx",
            lineNumber: 44,
            columnNumber: 7
        }, ("TURBOPACK compile-time value", void 0))
    }, void 0, false, {
        fileName: "[project]/src/components/Common/CartSidebarModal/index.tsx",
        lineNumber: 39,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
_s(CartSidebarModal, "70w9HxcrAiMfbNbkSAz1ijwgrXo=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$context$2f$CartSidebarModalContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCartModalContext"],
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$redux$2f$hooks$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAppSelector"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$redux$2f$dist$2f$react$2d$redux$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSelector"]
    ];
});
_c = CartSidebarModal;
const __TURBOPACK__default__export__ = CartSidebarModal;
var _c;
__turbopack_context__.k.register(_c, "CartSidebarModal");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/Common/PreviewSlider.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$swiper$2f$swiper$2d$react$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/swiper/swiper-react.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/image.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$context$2f$PreviewSliderContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/context/PreviewSliderContext.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$redux$2f$hooks$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/redux/hooks.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
;
;
const PreviewSliderModal = ()=>{
    _s();
    const { closePreviewModal, isModalPreviewOpen } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$context$2f$PreviewSliderContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["usePreviewSlider"])();
    const data = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$redux$2f$hooks$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAppSelector"])({
        "PreviewSliderModal.useAppSelector[data]": (state)=>state.productDetailsReducer.value
    }["PreviewSliderModal.useAppSelector[data]"]);
    const sliderRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const handlePrev = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "PreviewSliderModal.useCallback[handlePrev]": ()=>{
            if (!sliderRef.current) return;
            sliderRef.current.swiper.slidePrev();
        }
    }["PreviewSliderModal.useCallback[handlePrev]"], []);
    const handleNext = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "PreviewSliderModal.useCallback[handleNext]": ()=>{
            if (!sliderRef.current) return;
            sliderRef.current.swiper.slideNext();
        }
    }["PreviewSliderModal.useCallback[handleNext]"], []);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: `preview-slider w-full h-screen  z-999999 inset-0 flex justify-center items-center bg-[#000000F2] bg-opacity-70 ${isModalPreviewOpen ? "fixed" : "hidden"}`,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                onClick: ()=>closePreviewModal(),
                "aria-label": "button for close modal",
                className: "absolute top-0 right-0 sm:top-6 sm:right-6 flex items-center justify-center w-10 h-10 rounded-full ease-in duration-150 text-white hover:text-meta-5 z-10",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                    className: "fill-current",
                    width: "36",
                    height: "36",
                    viewBox: "0 0 26 26",
                    fill: "none",
                    xmlns: "http://www.w3.org/2000/svg",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                        fillRule: "evenodd",
                        clipRule: "evenodd",
                        d: "M14.3108 13L19.2291 8.08167C19.5866 7.72417 19.5866 7.12833 19.2291 6.77083C19.0543 6.59895 18.8189 6.50262 18.5737 6.50262C18.3285 6.50262 18.0932 6.59895 17.9183 6.77083L13 11.6892L8.08164 6.77083C7.90679 6.59895 7.67142 6.50262 7.42623 6.50262C7.18104 6.50262 6.94566 6.59895 6.77081 6.77083C6.41331 7.12833 6.41331 7.72417 6.77081 8.08167L11.6891 13L6.77081 17.9183C6.41331 18.2758 6.41331 18.8717 6.77081 19.2292C7.12831 19.5867 7.72414 19.5867 8.08164 19.2292L13 14.3108L17.9183 19.2292C18.2758 19.5867 18.8716 19.5867 19.2291 19.2292C19.5866 18.8717 19.5866 18.2758 19.2291 17.9183L14.3108 13Z",
                        fill: ""
                    }, void 0, false, {
                        fileName: "[project]/src/components/Common/PreviewSlider.tsx",
                        lineNumber: 46,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0))
                }, void 0, false, {
                    fileName: "[project]/src/components/Common/PreviewSlider.tsx",
                    lineNumber: 38,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0))
            }, void 0, false, {
                fileName: "[project]/src/components/Common/PreviewSlider.tsx",
                lineNumber: 33,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        className: "rotate-180 absolute left-100 p-5 cursor-pointer z-10 ",
                        onClick: handlePrev,
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                            width: "36",
                            height: "36",
                            viewBox: "0 0 26 26",
                            fill: "none",
                            xmlns: "http://www.w3.org/2000/svg",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                fillRule: "evenodd",
                                clipRule: "evenodd",
                                d: "M14.5918 5.92548C14.9091 5.60817 15.4236 5.60817 15.7409 5.92548L22.2409 12.4255C22.5582 12.7428 22.5582 13.2572 22.2409 13.5745L15.7409 20.0745C15.4236 20.3918 14.9091 20.3918 14.5918 20.0745C14.2745 19.7572 14.2745 19.2428 14.5918 18.9255L19.7048 13.8125H4.33301C3.88428 13.8125 3.52051 13.4487 3.52051 13C3.52051 12.5513 3.88428 12.1875 4.33301 12.1875H19.7048L14.5918 7.07452C14.2745 6.75722 14.2745 6.24278 14.5918 5.92548Z",
                                fill: "#FDFDFD"
                            }, void 0, false, {
                                fileName: "[project]/src/components/Common/PreviewSlider.tsx",
                                lineNumber: 67,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0))
                        }, void 0, false, {
                            fileName: "[project]/src/components/Common/PreviewSlider.tsx",
                            lineNumber: 60,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0))
                    }, void 0, false, {
                        fileName: "[project]/src/components/Common/PreviewSlider.tsx",
                        lineNumber: 56,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        className: "absolute right-100 p-5 cursor-pointer z-10",
                        onClick: handleNext,
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                            width: "36",
                            height: "36",
                            viewBox: "0 0 26 26",
                            fill: "none",
                            xmlns: "http://www.w3.org/2000/svg",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                fillRule: "evenodd",
                                clipRule: "evenodd",
                                d: "M14.5918 5.92548C14.9091 5.60817 15.4236 5.60817 15.7409 5.92548L22.2409 12.4255C22.5582 12.7428 22.5582 13.2572 22.2409 13.5745L15.7409 20.0745C15.4236 20.3918 14.9091 20.3918 14.5918 20.0745C14.2745 19.7572 14.2745 19.2428 14.5918 18.9255L19.7048 13.8125H4.33301C3.88428 13.8125 3.52051 13.4487 3.52051 13C3.52051 12.5513 3.88428 12.1875 4.33301 12.1875H19.7048L14.5918 7.07452C14.2745 6.75722 14.2745 6.24278 14.5918 5.92548Z",
                                fill: "#FDFDFD"
                            }, void 0, false, {
                                fileName: "[project]/src/components/Common/PreviewSlider.tsx",
                                lineNumber: 87,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0))
                        }, void 0, false, {
                            fileName: "[project]/src/components/Common/PreviewSlider.tsx",
                            lineNumber: 80,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0))
                    }, void 0, false, {
                        fileName: "[project]/src/components/Common/PreviewSlider.tsx",
                        lineNumber: 76,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/Common/PreviewSlider.tsx",
                lineNumber: 55,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$swiper$2f$swiper$2d$react$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Swiper"], {
                ref: sliderRef,
                slidesPerView: 1,
                spaceBetween: 20,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$swiper$2f$swiper$2d$react$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SwiperSlide"], {
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex justify-center items-center",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                src: "/images/products/service-1-bg-1.png",
                                alt: "product image",
                                width: 450,
                                height: 450
                            }, void 0, false, {
                                fileName: "[project]/src/components/Common/PreviewSlider.tsx",
                                lineNumber: 100,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0))
                        }, void 0, false, {
                            fileName: "[project]/src/components/Common/PreviewSlider.tsx",
                            lineNumber: 99,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0))
                    }, void 0, false, {
                        fileName: "[project]/src/components/Common/PreviewSlider.tsx",
                        lineNumber: 98,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$swiper$2f$swiper$2d$react$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SwiperSlide"], {
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex justify-center items-center",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                src: "/images/products/service-1-bg-2.png",
                                alt: "product image",
                                width: 450,
                                height: 450
                            }, void 0, false, {
                                fileName: "[project]/src/components/Common/PreviewSlider.tsx",
                                lineNumber: 110,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0))
                        }, void 0, false, {
                            fileName: "[project]/src/components/Common/PreviewSlider.tsx",
                            lineNumber: 109,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0))
                    }, void 0, false, {
                        fileName: "[project]/src/components/Common/PreviewSlider.tsx",
                        lineNumber: 108,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/Common/PreviewSlider.tsx",
                lineNumber: 97,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/Common/PreviewSlider.tsx",
        lineNumber: 29,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
_s(PreviewSliderModal, "kGBchdKBzf1rO+aCy1RVWZwAMKk=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$context$2f$PreviewSliderContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["usePreviewSlider"],
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$redux$2f$hooks$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAppSelector"]
    ];
});
_c = PreviewSliderModal;
const __TURBOPACK__default__export__ = PreviewSliderModal;
var _c;
__turbopack_context__.k.register(_c, "PreviewSliderModal");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/Common/ScrollToTop.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>ScrollToTop
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
function ScrollToTop() {
    _s();
    const [isVisible, setIsVisible] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    // Top: 0 takes us all the way back to the top of the page
    // Behavior: smooth keeps it smooth!
    const scrollToTop = ()=>{
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    };
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "ScrollToTop.useEffect": ()=>{
            // Button is displayed after scrolling for 500 pixels
            const toggleVisibility = {
                "ScrollToTop.useEffect.toggleVisibility": ()=>{
                    if (window.pageYOffset > 300) {
                        setIsVisible(true);
                    } else {
                        setIsVisible(false);
                    }
                }
            }["ScrollToTop.useEffect.toggleVisibility"];
            window.addEventListener("scroll", toggleVisibility);
            return ({
                "ScrollToTop.useEffect": ()=>window.removeEventListener("scroll", toggleVisibility)
            })["ScrollToTop.useEffect"];
        }
    }["ScrollToTop.useEffect"], []);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
        children: isVisible && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
            onClick: scrollToTop,
            className: `items-center justify-center w-10 h-10 rounded-[4px] shadow-lg bg-[#3683ab] ease-out duration-200 hover:bg-[#3683ab] fixed bottom-8 right-8 z-999 ${isVisible ? "flex" : "hidden"}`,
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                className: "fill-white w-5 h-5",
                xmlns: "http://www.w3.org/2000/svg",
                viewBox: "0 0 512 512",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                    d: "M233.4 105.4c12.5-12.5 32.8-12.5 45.3 0l192 192c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L256 173.3 86.6 342.6c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3l192-192z"
                }, void 0, false, {
                    fileName: "[project]/src/components/Common/ScrollToTop.tsx",
                    lineNumber: 45,
                    columnNumber: 13
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/Common/ScrollToTop.tsx",
                lineNumber: 40,
                columnNumber: 11
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/components/Common/ScrollToTop.tsx",
            lineNumber: 34,
            columnNumber: 9
        }, this)
    }, void 0, false);
}
_s(ScrollToTop, "J3yJOyGdBT4L7hs1p1XQYVGMdrY=");
_c = ScrollToTop;
var _c;
__turbopack_context__.k.register(_c, "ScrollToTop");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/Common/PreLoader.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
;
const PreLoader = ()=>{
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "fixed inset-0 z-[9999] flex items-center justify-center bg-white",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "h-16 w-16 animate-spin rounded-full border-4 border-[#3683ab] border-t-transparent"
        }, void 0, false, {
            fileName: "[project]/src/components/Common/PreLoader.tsx",
            lineNumber: 6,
            columnNumber: 7
        }, ("TURBOPACK compile-time value", void 0))
    }, void 0, false, {
        fileName: "[project]/src/components/Common/PreLoader.tsx",
        lineNumber: 5,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
_c = PreLoader;
const __TURBOPACK__default__export__ = PreLoader;
var _c;
__turbopack_context__.k.register(_c, "PreLoader");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/app/(site)/layout.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>RootLayout
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Header$2f$index$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/Header/index.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Footer$2f$index$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/Footer/index.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$redux$2f$provider$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/redux/provider.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$context$2f$CartSidebarModalContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/context/CartSidebarModalContext.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$context$2f$QuickViewModalContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/context/QuickViewModalContext.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$context$2f$QuickViewModalContextService$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/context/QuickViewModalContextService.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$context$2f$PreviewSliderContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/context/PreviewSliderContext.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Common$2f$QuickViewModal$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/Common/QuickViewModal.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Common$2f$CartSidebarModal$2f$index$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/Common/CartSidebarModal/index.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Common$2f$PreviewSlider$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/Common/PreviewSlider.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Common$2f$ScrollToTop$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/Common/ScrollToTop.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Common$2f$PreLoader$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/Common/PreLoader.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
function RootLayout({ children }) {
    _s();
    const [mounted, setMounted] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "RootLayout.useEffect": ()=>{
            setMounted(true);
        }
    }["RootLayout.useEffect"], []);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("html", {
        lang: "en",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("body", {
            children: [
                !mounted && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Common$2f$PreLoader$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                    fileName: "[project]/src/app/(site)/layout.tsx",
                    lineNumber: 37,
                    columnNumber: 22
                }, this),
                mounted && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$redux$2f$provider$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ReduxProvider"], {
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$context$2f$CartSidebarModalContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CartModalProvider"], {
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$context$2f$QuickViewModalContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ModalProvider"], {
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$context$2f$QuickViewModalContextService$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ModalProviderService"], {
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$context$2f$PreviewSliderContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PreviewSliderProvider"], {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Header$2f$index$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                                            fileName: "[project]/src/app/(site)/layout.tsx",
                                            lineNumber: 45,
                                            columnNumber: 21
                                        }, this),
                                        children,
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Common$2f$QuickViewModal$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                                            fileName: "[project]/src/app/(site)/layout.tsx",
                                            lineNumber: 49,
                                            columnNumber: 21
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Common$2f$CartSidebarModal$2f$index$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                                            fileName: "[project]/src/app/(site)/layout.tsx",
                                            lineNumber: 50,
                                            columnNumber: 21
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Common$2f$PreviewSlider$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                                            fileName: "[project]/src/app/(site)/layout.tsx",
                                            lineNumber: 51,
                                            columnNumber: 21
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/(site)/layout.tsx",
                                    lineNumber: 44,
                                    columnNumber: 19
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/app/(site)/layout.tsx",
                                lineNumber: 43,
                                columnNumber: 17
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/app/(site)/layout.tsx",
                            lineNumber: 42,
                            columnNumber: 15
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/app/(site)/layout.tsx",
                        lineNumber: 41,
                        columnNumber: 13
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/app/(site)/layout.tsx",
                    lineNumber: 40,
                    columnNumber: 11
                }, this),
                mounted && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Common$2f$ScrollToTop$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                            fileName: "[project]/src/app/(site)/layout.tsx",
                            lineNumber: 61,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Footer$2f$index$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                            fileName: "[project]/src/app/(site)/layout.tsx",
                            lineNumber: 62,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true)
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/(site)/layout.tsx",
            lineNumber: 36,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/app/(site)/layout.tsx",
        lineNumber: 35,
        columnNumber: 5
    }, this);
}
_s(RootLayout, "LrrVfNW3d1raFE0BNzCTILYmIfo=");
_c = RootLayout;
var _c;
__turbopack_context__.k.register(_c, "RootLayout");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=src_5ee579ba._.js.map