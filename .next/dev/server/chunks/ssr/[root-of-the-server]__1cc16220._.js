module.exports = [
"[project]/src/app/favicon.ico.mjs { IMAGE => \"[project]/src/app/favicon.ico (static in ecmascript, tag client)\" } [app-rsc] (structured image object, ecmascript, Next.js Server Component)", ((__turbopack_context__) => {

__turbopack_context__.n(__turbopack_context__.i("[project]/src/app/favicon.ico.mjs { IMAGE => \"[project]/src/app/favicon.ico (static in ecmascript, tag client)\" } [app-rsc] (structured image object, ecmascript)"));
}),
"[externals]/next/dist/shared/lib/no-fallback-error.external.js [external] (next/dist/shared/lib/no-fallback-error.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/shared/lib/no-fallback-error.external.js", () => require("next/dist/shared/lib/no-fallback-error.external.js"));

module.exports = mod;
}),
"[project]/src/app/loading.tsx [app-rsc] (ecmascript, Next.js Server Component)", ((__turbopack_context__) => {

__turbopack_context__.n(__turbopack_context__.i("[project]/src/app/loading.tsx [app-rsc] (ecmascript)"));
}),
"[project]/src/app/(site)/layout.tsx [app-rsc] (ecmascript, Next.js Server Component)", ((__turbopack_context__) => {

__turbopack_context__.n(__turbopack_context__.i("[project]/src/app/(site)/layout.tsx [app-rsc] (ecmascript)"));
}),
"[project]/src/components/Shop/shopData.ts [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
const shopData = [
    // ================= AC REPAIR INSTALLATION =================
    {
        id: "foam-jet-ac-service",
        title: "Foam Jet AC Service",
        category: "acrepairinstallation",
        subCategory: "ac-service",
        rateCardKey: "ac",
        reviews: 10,
        imgs: {
            thumbnails: [
                "/images/ac/jet-service.png"
            ],
            previews: [
                "/images/ac/jet-service.png"
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
                oldPrice: 699,
                description: "Complete AC inspection and jet cleaning"
            },
            {
                id: 102,
                title: "Window AC Foam Jet Service",
                price: 599,
                oldPrice: 999,
                description: "Deep jet cleaning for two AC units"
            }
        ]
    },
    {
        id: "power-jet-pump-ac-service",
        title: "Power Jet Pump Ac Service",
        category: "acrepairinstallation",
        subCategory: "ac-service",
        rateCardKey: "ac",
        reviews: 10,
        imgs: {
            thumbnails: [
                "/images/ac/basic-ac-service.png"
            ],
            previews: [
                "/images/ac/basic-ac-service.png"
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
                id: 101,
                title: "Split AC Jet Pump Service",
                price: 399,
                oldPrice: 799,
                description: "Basic cleaning and inspection for one AC unit"
            },
            {
                id: 102,
                title: "Window AC Jet Pump Service",
                price: 399,
                oldPrice: 599,
                description: "Basic cleaning and inspection for two AC units"
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
                "/images/ac/gas-charging.jpg"
            ],
            previews: [
                "/images/ac/gas-charging.jpg"
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
                id: 121,
                title: "Split AC Gas Charging",
                price: 1999,
                oldPrice: 2199,
                description: "Gas refill service for split AC with pressure check"
            },
            {
                id: 122,
                title: "Window AC Gas Charging",
                price: 1799,
                oldPrice: 1999,
                description: "Gas refill service for window AC unit"
            }
        ]
    },
    {
        id: "ac-repair",
        title: "AC Repair",
        category: "acrepairinstallation",
        subCategory: "ac-repair",
        rateCardKey: "ac",
        reviews: 18,
        imgs: {
            thumbnails: [
                "/images/ac/ac-repair.jpg"
            ],
            previews: [
                "/images/ac/ac-repair.jpg"
            ]
        },
        variants: []
    },
    {
        id: 6,
        title: "AC Installation & Uninstallation",
        category: "acrepairinstallation",
        subCategory: "ac-installation-uninstallation",
        rateCardKey: "ac",
        reviews: 12,
        imgs: {
            thumbnails: [
                "/images/ac/ac-install-uninstall.jpg"
            ],
            previews: [
                "/images/ac/ac-install-uninstall.jpg"
            ]
        },
        variants: []
    },
    // ================= HOME CLEANING =================
    {
        id: "deep-cleaning",
        title: "Deep Cleaning",
        category: "home-cleaning",
        subCategory: "deep-cleaning",
        rateCardKey: "cleaning",
        reviews: 10,
        imgs: {
            thumbnails: [
                "/images/cleaning/deep.jpg"
            ],
            previews: [
                "/images/cleaning/deep.jpg"
            ]
        },
        variants: []
    },
    {
        id: "bathroom-cleaning",
        title: "Bathroom Cleaning",
        category: "home-cleaning",
        subCategory: "bathroom-cleaning",
        rateCardKey: "cleaning",
        reviews: 9,
        imgs: {
            thumbnails: [
                "/images/cleaning/bathroom.jpg"
            ],
            previews: [
                "/images/cleaning/bathroom.jpg"
            ]
        },
        variants: []
    },
    {
        id: "kitchen-cleaning",
        title: "Kitchen Cleaning",
        category: "home-cleaning",
        subCategory: "kitchen-cleaning",
        rateCardKey: "cleaning",
        reviews: 11,
        imgs: {
            thumbnails: [
                "/images/cleaning/kitchen.jpg"
            ],
            previews: [
                "/images/cleaning/kitchen.jpg"
            ]
        },
        variants: []
    },
    {
        id: 9,
        title: "Full Home Cleaning",
        category: "home-cleaning",
        subCategory: "full-home",
        rateCardKey: "cleaning",
        reviews: 14,
        imgs: {
            thumbnails: [
                "/images/cleaning/full-home.jpg"
            ],
            previews: [
                "/images/cleaning/full-home.jpg"
            ]
        },
        variants: []
    },
    // ================= PAINTING =================
    {
        id: "wall-painting",
        title: "Wall Painting",
        category: "painting",
        subCategory: "wall-paint",
        rateCardKey: "painting",
        reviews: 8,
        imgs: {
            thumbnails: [
                "/images/painting/wall.jpg"
            ],
            previews: [
                "/images/painting/wall.jpg"
            ]
        },
        variants: []
    },
    // ================= HOME APPLIANCES =================
    {
        id: "refrigerator-repair",
        title: "Refrigerator Repair",
        category: "home-appliances",
        subCategory: "refrigerator",
        rateCardKey: "appliances",
        reviews: 8,
        imgs: {
            thumbnails: [
                "/images/appliances/fridge.jpg"
            ],
            previews: [
                "/images/appliances/fridge.jpg"
            ]
        },
        variants: []
    },
    {
        id: "washing-machine-repair",
        title: "Washing Machine Repair",
        category: "home-appliances",
        subCategory: "washing-machine",
        rateCardKey: "appliances",
        reviews: 7,
        imgs: {
            thumbnails: [
                "/images/appliances/washing-machine.jpg"
            ],
            previews: [
                "/images/appliances/washing-machine.jpg"
            ]
        },
        variants: []
    },
    {
        id: "microwave-repair",
        title: "Microwave Repair",
        category: "home-appliances",
        subCategory: "microwave",
        rateCardKey: "appliances",
        reviews: 6,
        imgs: {
            thumbnails: [
                "/images/appliances/microwave.jpg"
            ],
            previews: [
                "/images/appliances/microwave.jpg"
            ]
        },
        variants: []
    },
    // ================= INTERIOR =================
    {
        id: "modular-kitchen-design",
        title: "Modular Kitchen Design",
        category: "interior",
        subCategory: "kitchen-interior",
        rateCardKey: "interior",
        reviews: 9,
        imgs: {
            thumbnails: [
                "/images/interior/modular-kitchen.jpg"
            ],
            previews: [
                "/images/interior/modular-kitchen.jpg"
            ]
        },
        variants: []
    },
    {
        id: "wardrobe-design",
        title: "Wardrobe Design",
        category: "interior",
        subCategory: "wardrobe",
        rateCardKey: "interior",
        reviews: 7,
        imgs: {
            thumbnails: [
                "/images/interior/wardrobe.jpg"
            ],
            previews: [
                "/images/interior/wardrobe.jpg"
            ]
        },
        variants: []
    },
    // ================= ELECTRICIAN =================
    {
        id: "switch-board-repair",
        title: "Switch Board Repair",
        category: "electrician",
        subCategory: "switch-board",
        rateCardKey: "electrician",
        reviews: 12,
        imgs: {
            thumbnails: [
                "/images/electrician/switch-board.jpg"
            ],
            previews: [
                "/images/electrician/switch-board.jpg"
            ]
        },
        variants: []
    },
    {
        id: "fan-installation",
        title: "Fan Installation",
        category: "electrician",
        subCategory: "fan-install",
        rateCardKey: "electrician",
        reviews: 10,
        imgs: {
            thumbnails: [
                "/images/electrician/fan.jpg"
            ],
            previews: [
                "/images/electrician/fan.jpg"
            ]
        },
        variants: []
    },
    {
        id: "light-installation",
        title: "Light Installation",
        category: "electrician",
        subCategory: "light-install",
        rateCardKey: "electrician",
        reviews: 9,
        imgs: {
            thumbnails: [
                "/images/electrician/light.jpg"
            ],
            previews: [
                "/images/electrician/light.jpg"
            ]
        },
        variants: []
    }
];
const __TURBOPACK__default__export__ = shopData;
}),
"[project]/src/app/(site)/(pages)/[category]/[subcategory]/page.tsx [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>SubCategoryPage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-jsx-dev-runtime.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Shop$2f$shopData$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/Shop/shopData.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/image.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.react-server.js [app-rsc] (ecmascript)");
;
;
;
;
async function SubCategoryPage({ params }) {
    const { category, subcategory } = await params;
    const filteredServices = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Shop$2f$shopData$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"].filter((item)=>item.category === category && item.subCategory === subcategory);
    if (filteredServices.length === 0) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "p-20 text-center text-red-600 text-xl",
            children: "No Services Found"
        }, void 0, false, {
            fileName: "[project]/src/app/(site)/(pages)/[category]/[subcategory]/page.tsx",
            lineNumber: 20,
            columnNumber: 7
        }, this);
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "max-w-7xl mx-auto pt-32 pb-32 pt-55 px-4",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                className: "text-2xl font-bold mb-4 capitalize",
                children: subcategory.replace(/-/g, " ")
            }, void 0, false, {
                fileName: "[project]/src/app/(site)/(pages)/[category]/[subcategory]/page.tsx",
                lineNumber: 30,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "inline-block mb-6 px-5 py-2 border border-[#3683ab] text-[#3683ab] rounded-full text-sm font-medium",
                children: [
                    filteredServices.length,
                    " Services Available"
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/(site)/(pages)/[category]/[subcategory]/page.tsx",
                lineNumber: 35,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6",
                children: filteredServices.map((service)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "bg-white rounded-2xl shadow-md p-4 flex items-center justify-between",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center gap-4",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "w-[90px] h-[90px] rounded-xl overflow-hidden",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {
                                            src: service.imgs.thumbnails[0],
                                            alt: service.title,
                                            width: 90,
                                            height: 90,
                                            className: "object-cover w-full h-full"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/(site)/(pages)/[category]/[subcategory]/page.tsx",
                                            lineNumber: 52,
                                            columnNumber: 17
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/(site)/(pages)/[category]/[subcategory]/page.tsx",
                                        lineNumber: 51,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                                className: "text-lg font-semibold",
                                                children: service.title
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/(site)/(pages)/[category]/[subcategory]/page.tsx",
                                                lineNumber: 64,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "text-sm text-gray-500 mt-1",
                                                children: [
                                                    "⭐ 4.7 (",
                                                    service.reviews,
                                                    ")"
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/(site)/(pages)/[category]/[subcategory]/page.tsx",
                                                lineNumber: 68,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "mt-2 inline-block px-4 py-1 border border-[#3683ab] text-[#3683ab] rounded-full text-xs",
                                                children: [
                                                    service.variants.length,
                                                    " Options Available"
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/(site)/(pages)/[category]/[subcategory]/page.tsx",
                                                lineNumber: 72,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {
                                                href: `/ac-services/${service.id}`,
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "mt-2 text-[#3683ab] text-sm font-medium",
                                                    children: "View Details"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/(site)/(pages)/[category]/[subcategory]/page.tsx",
                                                    lineNumber: 77,
                                                    columnNumber: 19
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/(site)/(pages)/[category]/[subcategory]/page.tsx",
                                                lineNumber: 76,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/(site)/(pages)/[category]/[subcategory]/page.tsx",
                                        lineNumber: 62,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/(site)/(pages)/[category]/[subcategory]/page.tsx",
                                lineNumber: 48,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {
                                href: `/ac-services/${service.id}`,
                                className: "w-10 h-10 rounded-full bg-gray-200 flex items-center justify-center text-lg text-[#3683ab]",
                                children: "→"
                            }, void 0, false, {
                                fileName: "[project]/src/app/(site)/(pages)/[category]/[subcategory]/page.tsx",
                                lineNumber: 86,
                                columnNumber: 13
                            }, this)
                        ]
                    }, service.id, true, {
                        fileName: "[project]/src/app/(site)/(pages)/[category]/[subcategory]/page.tsx",
                        lineNumber: 43,
                        columnNumber: 11
                    }, this))
            }, void 0, false, {
                fileName: "[project]/src/app/(site)/(pages)/[category]/[subcategory]/page.tsx",
                lineNumber: 40,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/app/(site)/(pages)/[category]/[subcategory]/page.tsx",
        lineNumber: 27,
        columnNumber: 5
    }, this);
}
}),
"[project]/src/app/(site)/(pages)/[category]/[subcategory]/page.tsx [app-rsc] (ecmascript, Next.js Server Component)", ((__turbopack_context__) => {

__turbopack_context__.n(__turbopack_context__.i("[project]/src/app/(site)/(pages)/[category]/[subcategory]/page.tsx [app-rsc] (ecmascript)"));
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__1cc16220._.js.map