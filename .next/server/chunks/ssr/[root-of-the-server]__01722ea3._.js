module.exports=[93695,(a,b,c)=>{b.exports=a.x("next/dist/shared/lib/no-fallback-error.external.js",()=>require("next/dist/shared/lib/no-fallback-error.external.js"))},8558,a=>{a.n(a.i(88789))},96362,a=>{a.n(a.i(77363))},10366,a=>{a.n(a.i(93739))},99074,a=>{a.n(a.i(28334))},29603,a=>{a.n(a.i(17811))},91025,a=>{a.n(a.i(77478))},37989,(a,b,c)=>{let{createClientModuleProxy:d}=a.r(86727);a.n(d("[project]/new-website-dofix/node_modules/next/dist/client/app-dir/link.js <module evaluation>"))},8858,(a,b,c)=>{let{createClientModuleProxy:d}=a.r(86727);a.n(d("[project]/new-website-dofix/node_modules/next/dist/client/app-dir/link.js"))},19597,a=>{"use strict";a.i(37989);var b=a.i(8858);a.n(b)},42,(a,b,c)=>{"use strict";Object.defineProperty(c,"__esModule",{value:!0});var d={default:function(){return i},useLinkStatus:function(){return h.useLinkStatus}};for(var e in d)Object.defineProperty(c,e,{enumerable:!0,get:d[e]});let f=a.r(27450),g=a.r(72492),h=f._(a.r(19597));function i(a){let b=a.legacyBehavior,c="string"==typeof a.children||"number"==typeof a.children||"string"==typeof a.children?.type,d=a.children?.type?.$$typeof===Symbol.for("react.client.reference");return!b||c||d||(a.children?.type?.$$typeof===Symbol.for("react.lazy")?console.error("Using a Lazy Component as a direct child of `<Link legacyBehavior>` from a Server Component is not supported. If you need legacyBehavior, wrap your Lazy Component in a Client Component that renders the Link's `<a>` tag."):console.error("Using a Server Component as a direct child of `<Link legacyBehavior>` is not supported. If you need legacyBehavior, wrap your Server Component in a Client Component that renders the Link's `<a>` tag.")),(0,g.jsx)(h.default,{...a})}("function"==typeof c.default||"object"==typeof c.default&&null!==c.default)&&void 0===c.default.__esModule&&(Object.defineProperty(c.default,"__esModule",{value:!0}),Object.assign(c.default,c),b.exports=c.default)},39274,(a,b,c)=>{"use strict";c._=function(a){return a&&a.__esModule?a:{default:a}}},54213,(a,b,c)=>{"use strict";Object.defineProperty(c,"__esModule",{value:!0}),Object.defineProperty(c,"warnOnce",{enumerable:!0,get:function(){return d}});let d=a=>{}},70917,(a,b,c)=>{"use strict";Object.defineProperty(c,"__esModule",{value:!0});var d={getDeploymentId:function(){return f},getDeploymentIdQueryOrEmptyString:function(){return g}};for(var e in d)Object.defineProperty(c,e,{enumerable:!0,get:d[e]});function f(){return!1}function g(){return""}},16416,(a,b,c)=>{"use strict";function d({widthInt:a,heightInt:b,blurWidth:c,blurHeight:d,blurDataURL:e,objectFit:f}){let g=c?40*c:a,h=d?40*d:b,i=g&&h?`viewBox='0 0 ${g} ${h}'`:"";return`%3Csvg xmlns='http://www.w3.org/2000/svg' ${i}%3E%3Cfilter id='b' color-interpolation-filters='sRGB'%3E%3CfeGaussianBlur stdDeviation='20'/%3E%3CfeColorMatrix values='1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 100 -1' result='s'/%3E%3CfeFlood x='0' y='0' width='100%25' height='100%25'/%3E%3CfeComposite operator='out' in='s'/%3E%3CfeComposite in2='SourceGraphic'/%3E%3CfeGaussianBlur stdDeviation='20'/%3E%3C/filter%3E%3Cimage width='100%25' height='100%25' x='0' y='0' preserveAspectRatio='${i?"none":"contain"===f?"xMidYMid":"cover"===f?"xMidYMid slice":"none"}' style='filter: url(%23b);' href='${e}'/%3E%3C/svg%3E`}Object.defineProperty(c,"__esModule",{value:!0}),Object.defineProperty(c,"getImageBlurSvg",{enumerable:!0,get:function(){return d}})},27804,(a,b,c)=>{"use strict";Object.defineProperty(c,"__esModule",{value:!0});var d={VALID_LOADERS:function(){return f},imageConfigDefault:function(){return g}};for(var e in d)Object.defineProperty(c,e,{enumerable:!0,get:d[e]});let f=["default","imgix","cloudinary","akamai","custom"],g={deviceSizes:[640,750,828,1080,1200,1920,2048,3840],imageSizes:[32,48,64,96,128,256,384],path:"/_next/image",loader:"default",loaderFile:"",domains:[],disableStaticImages:!1,minimumCacheTTL:14400,formats:["image/webp"],maximumRedirects:3,maximumResponseBody:5e7,dangerouslyAllowLocalIP:!1,dangerouslyAllowSVG:!1,contentSecurityPolicy:"script-src 'none'; frame-src 'none'; sandbox;",contentDispositionType:"attachment",localPatterns:void 0,remotePatterns:[],qualities:[75],unoptimized:!1}},7951,(a,b,c)=>{"use strict";Object.defineProperty(c,"__esModule",{value:!0}),Object.defineProperty(c,"getImgProps",{enumerable:!0,get:function(){return j}}),a.r(54213);let d=a.r(70917),e=a.r(16416),f=a.r(27804),g=["-moz-initial","fill","none","scale-down",void 0];function h(a){return void 0!==a.default}function i(a){return void 0===a?a:"number"==typeof a?Number.isFinite(a)?a:NaN:"string"==typeof a&&/^[0-9]+$/.test(a)?parseInt(a,10):NaN}function j({src:a,sizes:b,unoptimized:c=!1,priority:j=!1,preload:k=!1,loading:l,className:m,quality:n,width:o,height:p,fill:q=!1,style:r,overrideSrc:s,onLoad:t,onLoadingComplete:u,placeholder:v="empty",blurDataURL:w,fetchPriority:x,decoding:y="async",layout:z,objectFit:A,objectPosition:B,lazyBoundary:C,lazyRoot:D,...E},F){var G;let H,I,J,{imgConf:K,showAltText:L,blurComplete:M,defaultLoader:N}=F,O=K||f.imageConfigDefault;if("allSizes"in O)H=O;else{let a=[...O.deviceSizes,...O.imageSizes].sort((a,b)=>a-b),b=O.deviceSizes.sort((a,b)=>a-b),c=O.qualities?.sort((a,b)=>a-b);H={...O,allSizes:a,deviceSizes:b,qualities:c}}if(void 0===N)throw Object.defineProperty(Error("images.loaderFile detected but the file is missing default export.\nRead more: https://nextjs.org/docs/messages/invalid-images-config"),"__NEXT_ERROR_CODE",{value:"E163",enumerable:!1,configurable:!0});let P=E.loader||N;delete E.loader,delete E.srcSet;let Q="__next_img_default"in P;if(Q){if("custom"===H.loader)throw Object.defineProperty(Error(`Image with src "${a}" is missing "loader" prop.
Read more: https://nextjs.org/docs/messages/next-image-missing-loader`),"__NEXT_ERROR_CODE",{value:"E252",enumerable:!1,configurable:!0})}else{let a=P;P=b=>{let{config:c,...d}=b;return a(d)}}if(z){"fill"===z&&(q=!0);let a={intrinsic:{maxWidth:"100%",height:"auto"},responsive:{width:"100%",height:"auto"}}[z];a&&(r={...r,...a});let c={responsive:"100vw",fill:"100vw"}[z];c&&!b&&(b=c)}let R="",S=i(o),T=i(p);if((G=a)&&"object"==typeof G&&(h(G)||void 0!==G.src)){let b=h(a)?a.default:a;if(!b.src)throw Object.defineProperty(Error(`An object should only be passed to the image component src parameter if it comes from a static image import. It must include src. Received ${JSON.stringify(b)}`),"__NEXT_ERROR_CODE",{value:"E460",enumerable:!1,configurable:!0});if(!b.height||!b.width)throw Object.defineProperty(Error(`An object should only be passed to the image component src parameter if it comes from a static image import. It must include height and width. Received ${JSON.stringify(b)}`),"__NEXT_ERROR_CODE",{value:"E48",enumerable:!1,configurable:!0});if(I=b.blurWidth,J=b.blurHeight,w=w||b.blurDataURL,R=b.src,!q)if(S||T){if(S&&!T){let a=S/b.width;T=Math.round(b.height*a)}else if(!S&&T){let a=T/b.height;S=Math.round(b.width*a)}}else S=b.width,T=b.height}let U=!j&&!k&&("lazy"===l||void 0===l);(!(a="string"==typeof a?a:R)||a.startsWith("data:")||a.startsWith("blob:"))&&(c=!0,U=!1),H.unoptimized&&(c=!0),Q&&!H.dangerouslyAllowSVG&&a.split("?",1)[0].endsWith(".svg")&&(c=!0);let V=i(n),W=Object.assign(q?{position:"absolute",height:"100%",width:"100%",left:0,top:0,right:0,bottom:0,objectFit:A,objectPosition:B}:{},L?{}:{color:"transparent"},r),X=M||"empty"===v?null:"blur"===v?`url("data:image/svg+xml;charset=utf-8,${(0,e.getImageBlurSvg)({widthInt:S,heightInt:T,blurWidth:I,blurHeight:J,blurDataURL:w||"",objectFit:W.objectFit})}")`:`url("${v}")`,Y=g.includes(W.objectFit)?"fill"===W.objectFit?"100% 100%":"cover":W.objectFit,Z=X?{backgroundSize:Y,backgroundPosition:W.objectPosition||"50% 50%",backgroundRepeat:"no-repeat",backgroundImage:X}:{},$=function({config:a,src:b,unoptimized:c,width:e,quality:f,sizes:g,loader:h}){if(c){let a=(0,d.getDeploymentId)();if(b.startsWith("/")&&!b.startsWith("//")&&a){let c=b.includes("?")?"&":"?";b=`${b}${c}dpl=${a}`}return{src:b,srcSet:void 0,sizes:void 0}}let{widths:i,kind:j}=function({deviceSizes:a,allSizes:b},c,d){if(d){let c=/(^|\s)(1?\d?\d)vw/g,e=[];for(let a;a=c.exec(d);)e.push(parseInt(a[2]));if(e.length){let c=.01*Math.min(...e);return{widths:b.filter(b=>b>=a[0]*c),kind:"w"}}return{widths:b,kind:"w"}}return"number"!=typeof c?{widths:a,kind:"w"}:{widths:[...new Set([c,2*c].map(a=>b.find(b=>b>=a)||b[b.length-1]))],kind:"x"}}(a,e,g),k=i.length-1;return{sizes:g||"w"!==j?g:"100vw",srcSet:i.map((c,d)=>`${h({config:a,src:b,quality:f,width:c})} ${"w"===j?c:d+1}${j}`).join(", "),src:h({config:a,src:b,quality:f,width:i[k]})}}({config:H,src:a,unoptimized:c,width:S,quality:V,sizes:b,loader:P}),_=U?"lazy":l;return{props:{...E,loading:_,fetchPriority:x,width:S,height:T,decoding:y,className:m,style:{...W,...Z},sizes:$.sizes,srcSet:$.srcSet,src:s||$.src},meta:{unoptimized:c,preload:k||j,placeholder:v,fill:q}}}},5239,(a,b,c)=>{let{createClientModuleProxy:d}=a.r(86727);a.n(d("[project]/new-website-dofix/node_modules/next/dist/client/image-component.js <module evaluation>"))},78269,(a,b,c)=>{let{createClientModuleProxy:d}=a.r(86727);a.n(d("[project]/new-website-dofix/node_modules/next/dist/client/image-component.js"))},30275,a=>{"use strict";a.i(5239);var b=a.i(78269);a.n(b)},20038,(a,b,c)=>{"use strict";function d(a,b){let c=a||75;return b?.qualities?.length?b.qualities.reduce((a,b)=>Math.abs(b-c)<Math.abs(a-c)?b:a,0):c}Object.defineProperty(c,"__esModule",{value:!0}),Object.defineProperty(c,"findClosestQuality",{enumerable:!0,get:function(){return d}})},85614,(a,b,c)=>{"use strict";Object.defineProperty(c,"__esModule",{value:!0}),Object.defineProperty(c,"default",{enumerable:!0,get:function(){return g}});let d=a.r(20038),e=a.r(70917);function f({config:a,src:b,width:c,quality:f}){if(b.startsWith("/")&&b.includes("?")&&a.localPatterns?.length===1&&"**"===a.localPatterns[0].pathname&&""===a.localPatterns[0].search)throw Object.defineProperty(Error(`Image with src "${b}" is using a query string which is not configured in images.localPatterns.
Read more: https://nextjs.org/docs/messages/next-image-unconfigured-localpatterns`),"__NEXT_ERROR_CODE",{value:"E871",enumerable:!1,configurable:!0});let g=(0,d.findClosestQuality)(f,a),h=(0,e.getDeploymentId)();return`${a.path}?url=${encodeURIComponent(b)}&w=${c}&q=${g}${b.startsWith("/")&&h?`&dpl=${h}`:""}`}f.__next_img_default=!0;let g=f},15151,(a,b,c)=>{"use strict";Object.defineProperty(c,"__esModule",{value:!0});var d={default:function(){return k},getImageProps:function(){return j}};for(var e in d)Object.defineProperty(c,e,{enumerable:!0,get:d[e]});let f=a.r(39274),g=a.r(7951),h=a.r(30275),i=f._(a.r(85614));function j(a){let{props:b}=(0,g.getImgProps)(a,{defaultLoader:i.default,imgConf:{deviceSizes:[640,750,828,1080,1200,1920,2048,3840],imageSizes:[32,48,64,96,128,256,384],qualities:[75],path:"/_next/image",loader:"default",dangerouslyAllowSVG:!1,unoptimized:!1}});for(let[a,c]of Object.entries(b))void 0===c&&delete b[a];return{props:b}}let k=h.Image},73618,(a,b,c)=>{b.exports=a.r(15151)},47395,a=>{"use strict";let b=[{slug:"split-ac-vs-window-ac",date:"Mar 27, 2022",views:3e5,title:"Split AC vs Window AC – Which Is Best for Delhi Homes?",img:"/images/blog/blog-01.jpg",content:`
Split AC and Window AC are the two most common air conditioners used in homes. 
Both have their own advantages and disadvantages depending on your budget and room size.

Split AC Advantages:
• Better cooling performance
• Quiet operation
• Modern design and aesthetics
• Energy efficient

Window AC Advantages:
• Lower price compared to split AC
• Easy installation
• Less maintenance

For Delhi homes, Split AC is generally preferred because it provides better cooling 
in extreme summer temperatures. However, if you want a budget-friendly option, 
Window AC can still be a good choice.

Before buying any AC, always consider room size, electricity consumption, and 
maintenance cost.
`},{slug:"ac-service-guide",date:"Mar 28, 2022",views:25e4,title:"Complete Guide to AC Service and Maintenance",img:"/images/blog/blog-02.jpg",content:`
Regular AC service is essential to maintain cooling performance and extend the life 
of your air conditioner.

A professional AC service usually includes:

• Cleaning of air filters
• Cleaning cooling coils
• Checking refrigerant gas pressure
• Inspecting electrical components
• Cleaning condenser unit
• Checking thermostat and airflow

Experts recommend servicing your AC at least twice a year – once before summer 
and once after the season ends.

Benefits of Regular AC Service:
• Better cooling efficiency
• Lower electricity bills
• Longer AC lifespan
• Prevention of major breakdowns

If your AC is making unusual noise, leaking water, or not cooling properly, 
it is best to call a professional AC technician immediately.
`},{slug:"ac-not-cooling",date:"Mar 29, 2022",views:18e4,title:"Why Your AC Is Not Cooling Properly",img:"/images/blog/blog-03.jpg",content:`
If your AC is not cooling properly, there could be several reasons behind it.

Common Causes of AC Cooling Problems:

1. Dirty Air Filters  
Clogged filters block airflow and reduce cooling efficiency.

2. Low Refrigerant Gas  
If the AC gas level is low due to leakage, the cooling capacity decreases.

3. Dirty Condenser Coils  
Dust and debris on condenser coils prevent proper heat exchange.

4. Faulty Compressor  
The compressor is the heart of an AC system. If it stops working, 
cooling performance drops significantly.

5. Thermostat Issues  
Incorrect thermostat settings can also cause cooling problems.

Solutions:
• Clean filters regularly
• Schedule professional AC servicing
• Check refrigerant gas levels
• Repair or replace faulty components

Regular maintenance is the best way to avoid AC cooling issues during 
peak summer months.
`}];a.s(["default",0,b])},94045,a=>{"use strict";var b=a.i(72492),c=a.i(47395),d=a.i(73618),e=a.i(42);let f=({blog:a})=>(0,b.jsxs)("div",{className:"bg-white rounded-xl shadow-md overflow-hidden",children:[(0,b.jsx)(d.default,{src:a.img,alt:a.title,width:400,height:250,className:"w-full object-cover"}),(0,b.jsxs)("div",{className:"p-5",children:[(0,b.jsxs)("span",{className:"text-sm text-gray-500",children:[a.date," • ",a.views," views"]}),(0,b.jsx)("h3",{className:"mt-2 font-semibold text-lg",children:a.title}),(0,b.jsx)(e.default,{href:`/blog/${a.slug}`,className:"text-[#3683ab] mt-3 inline-block",children:"Read More →"})]})]}),g=()=>(0,b.jsx)("section",{className:"pt-55 bg-gray-100",children:(0,b.jsxs)("div",{className:"max-w-[1170px] mx-auto px-4",children:[(0,b.jsx)("h2",{className:"text-3xl font-bold mb-10",children:"Our Blogs"}),(0,b.jsx)("div",{className:"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8",children:c.default.map((a,c)=>(0,b.jsx)(f,{blog:a},c))})]})});function h(){return(0,b.jsx)(b.Fragment,{children:(0,b.jsx)(g,{})})}a.s(["default",()=>h,"metadata",0,{title:"Blogs",description:"This is Privacy Policy"}],94045)}];

//# sourceMappingURL=%5Broot-of-the-server%5D__01722ea3._.js.map