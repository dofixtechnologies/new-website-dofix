module.exports = [
"[project]/src/components/BookingAddress/index.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>BookingAddress
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/navigation.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$google$2d$maps$2f$api$2f$dist$2f$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@react-google-maps/api/dist/esm.js [app-ssr] (ecmascript)");
"use client";
;
;
;
;
const defaultCenter = {
    lat: 28.6139,
    lng: 77.2090
};
function BookingAddress() {
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRouter"])();
    const mapRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    const [position, setPosition] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(defaultCenter);
    const [addressType, setAddressType] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("Home");
    const [formData, setFormData] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])({
        fullAddress: "",
        houseNo: "",
        floor: "",
        street: "",
        country: "",
        state: "",
        pincode: ""
    });
    const { isLoaded } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$google$2d$maps$2f$api$2f$dist$2f$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useJsApiLoader"])({
        googleMapsApiKey: ("TURBOPACK compile-time value", "AIzaSyBLI5I6o95GqluNuRh0YT3zRj5yqoix8zA")
    });
    // Reverse Geocode
    const fetchAddressFromLatLng = async (lat, lng)=>{
        const res = await fetch(`https://maps.googleapis.com/maps/api/geocode/json?latlng=${lat},${lng}&key=${("TURBOPACK compile-time value", "AIzaSyBLI5I6o95GqluNuRh0YT3zRj5yqoix8zA")}`);
        const data = await res.json();
        if (data.results?.length > 0) {
            const result = data.results[0];
            let state = "";
            let country = "";
            let pincode = "";
            let street = "";
            result.address_components.forEach((component)=>{
                if (component.types.includes("administrative_area_level_1")) {
                    state = component.long_name;
                }
                if (component.types.includes("country")) {
                    country = component.long_name;
                }
                if (component.types.includes("postal_code")) {
                    pincode = component.long_name;
                }
                if (component.types.includes("route")) {
                    street = component.long_name;
                }
            });
            setFormData((prev)=>({
                    ...prev,
                    fullAddress: result.formatted_address,
                    state,
                    country,
                    pincode,
                    street
                }));
        }
    };
    // Button click location detect
    const getCurrentLocation = ()=>{
        if (!navigator.geolocation) return;
        navigator.geolocation.getCurrentPosition((pos)=>{
            const lat = pos.coords.latitude;
            const lng = pos.coords.longitude;
            const newPos = {
                lat,
                lng
            };
            setPosition(newPos);
            if (mapRef.current) {
                mapRef.current.panTo(newPos);
            }
            fetchAddressFromLatLng(lat, lng);
        }, ()=>{
            alert("Unable to fetch location");
        });
    };
    const validateAddress = ()=>{
        if (!formData.houseNo || !formData.street || !formData.pincode) {
            alert("Please fill full Address");
            return false;
        }
        return true;
    };
    if (!isLoaded) return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
        children: "Loading Map..."
    }, void 0, false, {
        fileName: "[project]/src/components/BookingAddress/index.tsx",
        lineNumber: 127,
        columnNumber: 25
    }, this);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "min-h-screen bg-gray-50 pt-55 pb-10 px-4",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "max-w-[800px] mx-auto bg-white rounded-3xl shadow-xl p-6 space-y-6",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                            className: "text-2xl font-semibold text-[#14455b]",
                            children: "Address"
                        }, void 0, false, {
                            fileName: "[project]/src/components/BookingAddress/index.tsx",
                            lineNumber: 135,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "text-sm text-gray-500 mt-1",
                            children: "Choose your location and fill address details"
                        }, void 0, false, {
                            fileName: "[project]/src/components/BookingAddress/index.tsx",
                            lineNumber: 138,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/BookingAddress/index.tsx",
                    lineNumber: 134,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "rounded-2xl overflow-hidden border",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$google$2d$maps$2f$api$2f$dist$2f$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["GoogleMap"], {
                        mapContainerStyle: {
                            width: "100%",
                            height: "220px"
                        },
                        center: position,
                        zoom: 15,
                        onLoad: (map)=>{
                            mapRef.current = map;
                        },
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$google$2d$maps$2f$api$2f$dist$2f$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Marker"], {
                            position: position,
                            draggable: true,
                            onDragEnd: (e)=>{
                                const lat = e.latLng?.lat() || 0;
                                const lng = e.latLng?.lng() || 0;
                                const newPos = {
                                    lat,
                                    lng
                                };
                                setPosition(newPos);
                                if (mapRef.current) {
                                    mapRef.current.panTo(newPos);
                                }
                                fetchAddressFromLatLng(lat, lng);
                            }
                        }, void 0, false, {
                            fileName: "[project]/src/components/BookingAddress/index.tsx",
                            lineNumber: 155,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/components/BookingAddress/index.tsx",
                        lineNumber: 146,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/components/BookingAddress/index.tsx",
                    lineNumber: 144,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                    onClick: getCurrentLocation,
                    className: "w-full bg-[#3683ab] hover:bg-[#14455b] text-white py-3 rounded-xl font-medium transition",
                    children: "Use My Current Location"
                }, void 0, false, {
                    fileName: "[project]/src/components/BookingAddress/index.tsx",
                    lineNumber: 181,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                    type: "text",
                    value: formData.fullAddress,
                    readOnly: true,
                    placeholder: "Address will appear after clicking location button",
                    className: "w-full border border-gray-300 bg-gray-100 p-3 rounded-xl"
                }, void 0, false, {
                    fileName: "[project]/src/components/BookingAddress/index.tsx",
                    lineNumber: 189,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex gap-3",
                    children: [
                        "Home",
                        "Office",
                        "Other"
                    ].map((type)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            onClick: ()=>setAddressType(type),
                            className: `flex-1 py-2 rounded-xl border ${addressType === type ? "bg-[#3683ab] text-white" : "border-gray-300"}`,
                            children: type
                        }, type, false, {
                            fileName: "[project]/src/components/BookingAddress/index.tsx",
                            lineNumber: 202,
                            columnNumber: 13
                        }, this))
                }, void 0, false, {
                    fileName: "[project]/src/components/BookingAddress/index.tsx",
                    lineNumber: 198,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "space-y-4",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                            placeholder: "House / Office No.",
                            value: formData.houseNo,
                            onChange: (e)=>setFormData({
                                    ...formData,
                                    houseNo: e.target.value
                                }),
                            className: "w-full border border-gray-300 p-3 rounded-xl"
                        }, void 0, false, {
                            fileName: "[project]/src/components/BookingAddress/index.tsx",
                            lineNumber: 221,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                            placeholder: "Floor",
                            value: formData.floor,
                            onChange: (e)=>setFormData({
                                    ...formData,
                                    floor: e.target.value
                                }),
                            className: "w-full border border-gray-300 p-3 rounded-xl"
                        }, void 0, false, {
                            fileName: "[project]/src/components/BookingAddress/index.tsx",
                            lineNumber: 230,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                            placeholder: "Street / Area",
                            value: formData.street,
                            onChange: (e)=>setFormData({
                                    ...formData,
                                    street: e.target.value
                                }),
                            className: "w-full border border-gray-300 p-3 rounded-xl"
                        }, void 0, false, {
                            fileName: "[project]/src/components/BookingAddress/index.tsx",
                            lineNumber: 239,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                            value: formData.country,
                            readOnly: true,
                            placeholder: "Country auto detect",
                            className: "w-full border border-gray-200 bg-gray-100 p-3 rounded-xl"
                        }, void 0, false, {
                            fileName: "[project]/src/components/BookingAddress/index.tsx",
                            lineNumber: 248,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                            value: formData.state,
                            readOnly: true,
                            placeholder: "State auto detect",
                            className: "w-full border border-gray-200 bg-gray-100 p-3 rounded-xl"
                        }, void 0, false, {
                            fileName: "[project]/src/components/BookingAddress/index.tsx",
                            lineNumber: 255,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                            placeholder: "Pincode",
                            value: formData.pincode,
                            onChange: (e)=>setFormData({
                                    ...formData,
                                    pincode: e.target.value
                                }),
                            className: "w-full border border-gray-300 p-3 rounded-xl"
                        }, void 0, false, {
                            fileName: "[project]/src/components/BookingAddress/index.tsx",
                            lineNumber: 262,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/BookingAddress/index.tsx",
                    lineNumber: 219,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                    onClick: ()=>{
                        if (!validateAddress()) return;
                        const addressData = {
                            ...formData,
                            addressType,
                            lat: position.lat,
                            lng: position.lng
                        };
                        localStorage.setItem("selectedAddress", JSON.stringify(addressData));
                        router.push("/booking");
                    },
                    className: "w-full bg-[#3683ab] hover:bg-[#14455b] text-white py-4 rounded-2xl font-semibold",
                    children: "Add Address"
                }, void 0, false, {
                    fileName: "[project]/src/components/BookingAddress/index.tsx",
                    lineNumber: 274,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/BookingAddress/index.tsx",
            lineNumber: 132,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/components/BookingAddress/index.tsx",
        lineNumber: 130,
        columnNumber: 5
    }, this);
}
}),
];

//# sourceMappingURL=src_components_BookingAddress_index_tsx_7eddae11._.js.map