/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2024/05/29/编程语言/python/库介绍/PYTHON-re/index.html","1acc1538cf2467499fb7707361c479fa"],["/2024/05/29/编程语言/sql/sql-learning/index.html","0fdb47874c8115f9f386eae8f32b33d7"],["/2024/05/29/编程语言/sql/sql-learning_1/index.html","9034714c5d2b45da6888c824e4ebf4ac"],["/2024/05/29/编程语言/sql/sql_learning_2/index.html","080feff22490c46f35c4ff40648ddfd4"],["/2024/06/01/web安全/代码漏洞/sql注入/sql/index.html","dac59bfd41d7b17e27eb5ee1bd6cc162"],["/2024/06/01/web安全/嗅探/web-basic/index.html","4d1ef056395c60ef1195b8fa477e4f62"],["/2024/06/01/web安全/嗅探/web/index.html","ccecae1a4dc5d382757283d7b2b29566"],["/2024/06/01/web安全/嗅探/wireshark/index.html","c2fc3fe051f7d7b5ff519f34d5e9dfde"],["/2024/06/01/web安全/基础协议/DNS/index.html","ff2cd1a09f3996bc5b2dc1bd733cbf80"],["/2024/06/01/web安全/基础协议/https/index.html","20da4b4de36638fbef25fb1803c227e4"],["/2024/06/01/web安全/密码学/crypto/index.html","2c682a68426c6cc718e961f36f30333c"],["/2024/06/01/web安全/密码学/passwd/index.html","573e9735c939a97d001262fd6928fd2f"],["/2024/06/06/linux/linux知识/基本特性/bash/index.html","e42a1f496a3c228d75b1c3f4a99ff841"],["/2024/06/06/linux/linux知识/系统文件/hosts/index.html","7529638521ca58ea849f6c1489eaaf68"],["/2024/06/09/linux/linux知识/命令介绍/linuxbasic-1/index.html","838a4a38068371ed7adb23d54563a1c2"],["/2024/06/09/linux/linux知识/基本特性/permission/index.html","0c6df081dc1a94f08a7774dc12087252"],["/2024/06/10/linux/linux知识/基本特性/shell/index.html","5b327aed05e0d5fa928f2e89ea0bb241"],["/2024/06/10/linux/linux知识/系统文件/profile/index.html","5d442e71db8d7dbe2cbe39d4f61abdd0"],["/2024/06/10/大数据/Java Hadoop框架/Hadoop/index.html","56d46ce1c80f107fe67bca2085e75b23"],["/2024/06/10/大数据/web爬虫/beautifulsoup/index.html","4456a5c6dd5a52e5cab079b8809deaca"],["/2024/06/10/大数据/web爬虫/crawler/index.html","4af4db5e2a2915a0a81dab77f289b736"],["/2024/06/11/linux/linux知识/基本特性/path/index.html","508e23e1adf89d31454b297bcab256ca"],["/2024/06/11/linux/linux知识/系统文件/ssh/index.html","fd8b1e2fd7b985829eb5b4254fddee4f"],["/2024/06/12/linux/ubuntu/Ubuntu/index.html","d50d8d8d76689b7f7ea9195a7826af4f"],["/2024/06/12/linux/ubuntu/ubuntubasic/index.html","60610b20c55c801041a0888209e196ca"],["/2024/06/12/大数据/办公自动化/excel/index.html","2f481dd437541f590b119f1152a92c2b"],["/2024/06/12/大数据/数据清洗/mysql-data/index.html","bbe632ce8ff61d5245641193f00c1115"],["/2024/06/12/编程语言/python/库介绍/Tkinter/index.html","ff42fdd03cbc9e05a11e9e5037e7e980"],["/2024/06/13/大数据/数据可视化/pandas/index.html","62c16e357d18bd50cf8e238479541c2c"],["/2024/06/13/编程语言/python/基础/python class/index.html","2c5a9fb1c3a4be38e1b17932df4a9aae"],["/2024/06/13/编程语言/python/基础/pythonbasic/index.html","c4c80853a170507b5cbae8b7a1c32ce0"],["/2024/06/13/编程语言/python/基础/pythonstring/index.html","9962876ada27fb0bca9db56dc1d2a494"],["/2024/06/13/编程语言/python/库介绍/Numpy/index.html","f79574b40113bd15d8cdb5ee34f66ea9"],["/2024/06/14/编程语言/python/基础/symbol/index.html","6f4393919d1a5383f8d3eaf416a17c0b"],["/2024/06/15/编程语言/java/JAVAbasic/index.html","953078c50d24b54ca4c946d3d770d5a8"],["/2024/06/15/编程语言/前端/css/css_basic/index.html","5ec387f7ef05fb1bf842e00b90848f9c"],["/2024/06/15/编程语言/前端/html/html/index.html","17819eccf8c429fc82f464c8160ccfc4"],["/2024/06/15/编程语言/数据结构与算法/Data Structures And Algorithms basic/index.html","10a4234425ef2434f675a0787d02df53"],["/2024/06/22/linux/linux知识/命令介绍/linuxbasic-2/index.html","4f29ed746084e78bb7464aebc45bc1d5"],["/2024/06/22/linux/linux知识/系统文件/proc/index.html","c8b19057b88940f4bc73b2f2dff2eeb0"],["/2024/06/27/linux/centos/firewalld/index.html","e6223d4d78063c210868daa37ddc176b"],["/2024/06/30/编程语言/python/安装/python_download/index.html","3ef2eac5eae04194d1850df79a2c55cd"],["/2024/07/11/大数据/数据可视化/matplotlib/index.html","bfa3b1c69e53fe9195dccc537c4d3ee1"],["/2024/07/17/web安全/代码漏洞/xss跨站攻击/daima/index.html","439ec859bd1c87cea5cc962be9063dbb"],["/2024/08/06/编程语言/php/phparray/index.html","65a0e150532a5cfc0c3efdada1f2f4aa"],["/2024/08/06/编程语言/php/phpbasic/index.html","eb733c3c2b1eec24ce3194322e85af67"],["/2024/08/06/编程语言/php/phpprinthanshu/index.html","c1d892217b1cbd53175f0112ad7c8421"],["/2024/08/06/编程语言/php/phpshujuleixing/index.html","430f95f6f6c4857d876c4798410fbed1"],["/2024/08/06/编程语言/php/phpyuju/index.html","60066267fa1a8f9c866f984eb283a0a7"],["/2024/08/06/编程语言/php/yunsuanfu/index.html","a21a3c89176c028dc00d8903176d4dda"],["/2024/08/08/编程语言/php/phpfunctions/index.html","2e83bb9c4a4e76a8119b54ff8a104320"],["/2024/08/09/编程语言/js/js-basic/index.html","08e82c3db2cee9514d1e723e82e1c390"],["/2024/08/09/编程语言/php/forms/index.html","e2eb6c3205383d8304d50952237833c5"],["/archives/2024/05/index.html","8dbf9a0db627625e4534afae9556cc02"],["/archives/2024/06/index.html","abf8fe3672fda34a65b2d8ab7aaf611b"],["/archives/2024/06/page/2/index.html","80b539cf63dfafa8277e752d29d2f8c3"],["/archives/2024/06/page/3/index.html","ea9052eebd87cc628a0415778403a575"],["/archives/2024/06/page/4/index.html","d274fe072298321dc3becb28ee9263c3"],["/archives/2024/07/index.html","fb4c587b6ce9924dd48606126be8ae8e"],["/archives/2024/08/index.html","8db1e59e4776372017f96a62b8a97a6c"],["/archives/2024/index.html","aac602a2265ef990ed2ddca2f47462e7"],["/archives/2024/page/2/index.html","fbb4025f81cd2d33a112e2a026ab118c"],["/archives/2024/page/3/index.html","74f8bf2b4c04a6430930c0c9100b03a8"],["/archives/2024/page/4/index.html","56ed350feedce09eebdb7d5de23b07ae"],["/archives/2024/page/5/index.html","572441011b81aab8fd277841e03e585e"],["/archives/2024/page/6/index.html","b307149ff1aaeb61a7d424854dc86658"],["/archives/index.html","6730803c2efaa63ac88c76679777184b"],["/archives/page/2/index.html","52ea73ab6dbc39825d45929387b545da"],["/archives/page/3/index.html","82798631c1f7cf38cb63efffc110640d"],["/archives/page/4/index.html","9649bdefc847f4d7570008b446b5d38d"],["/archives/page/5/index.html","1b47b5d817af2550513d295327bb9c02"],["/archives/page/6/index.html","783a37c65e63bcf6d70de997192c8b98"],["/categories/index.html","c142268c185d2c2b58933791fbe9af95"],["/categories/linux/centos/index.html","04d1b52d5d8b7648e588845f0736d2af"],["/categories/linux/index.html","9002932e1339c30c8ec6470a27013482"],["/categories/linux/linux知识/index.html","bc54edcbc578426072a8e5392e8ab1bb"],["/categories/linux/linux知识/命令介绍/index.html","9a80220e5fe9e97ea7f1d91c21005777"],["/categories/linux/linux知识/基本特性/index.html","c3f678ebe7ad18c28070987309813824"],["/categories/linux/linux知识/系统文件/index.html","9c63c5495862e4e6be142977e6b4c902"],["/categories/linux/page/2/index.html","fa3719f7c79273a387a3c5124355b6fe"],["/categories/linux/ubuntu/index.html","88d179e1857e421943283905c2d71135"],["/categories/web安全/index.html","ad8ba279fe421dc6403dc798338b9c63"],["/categories/web安全/代码漏洞/index.html","c8c2f35c600abddc7017e8594cdec630"],["/categories/web安全/代码漏洞/sql注入/index.html","32765c6198fab7ded5ee6392a5c65f80"],["/categories/web安全/代码漏洞/xss跨站攻击/index.html","6363982454803e48bd8a569a7a8092f3"],["/categories/web安全/基础协议/index.html","a59acac123e8d546ca14eab35af81c6a"],["/categories/web安全/密码学/index.html","5b2de40828f6ddaaa23d34ea1921f34b"],["/categories/信息收集/index.html","a3fffe2b5f9c2e07753be009d4228366"],["/categories/信息收集/web安全/index.html","4b42ed3547aa361bc14b6b38e02070ea"],["/categories/信息收集/web安全/嗅探/index.html","df63f43b666b2762d4da050a8eac70cd"],["/categories/大数据/Java-Hadoop框架/index.html","6917e164262c8d66dddde0caaa7e1cc6"],["/categories/大数据/index.html","acf653ebc2b50ead64e537c0c2ab79b0"],["/categories/大数据/web爬虫/index.html","748fad062ec18f4341cb822662c1f752"],["/categories/大数据/办公自动化/index.html","e809f23b6e15cd0bb35fdcfae1c6b67e"],["/categories/大数据/数据可视化/index.html","d6935f73c6d59a5d9bec709f81b93d9b"],["/categories/大数据/数据清洗/index.html","36d5d5586bf8dfd67d841ff87279dea4"],["/categories/编程语言/index.html","4ea20e654bacc5d598d0fec27643a473"],["/categories/编程语言/java/index.html","4be34ee7a22370d46a7e11e84e8f9ba9"],["/categories/编程语言/js/index.html","7fcfa777580f209ab864332dcc60abe1"],["/categories/编程语言/page/2/index.html","991e1de11f179964b75e58ff8840dfea"],["/categories/编程语言/page/3/index.html","5386f6e218966c8b061a907b1f77bb57"],["/categories/编程语言/php/index.html","aade43f04031e12799953a830c3e4931"],["/categories/编程语言/python/index.html","332a28a2374ae4c1860f12a515c62d0c"],["/categories/编程语言/python/基础/index.html","26d4f4266af4e0c025371deb0c7f7d8a"],["/categories/编程语言/python/安装/index.html","df702f4733916b6fabeae760960b58f4"],["/categories/编程语言/python/库介绍/index.html","965f7db709d3da75bf7f5d105646ceca"],["/categories/编程语言/sql/index.html","958d936b52c723c478503d5ab6c44657"],["/categories/编程语言/前端/css/index.html","9bd4e1c769d9f50c75e8eaa4bae71724"],["/categories/编程语言/前端/html/index.html","3eb37db8f08353e0e69471545262881d"],["/categories/编程语言/前端/index.html","572f1fcbff4e22c297f13e186ce42100"],["/categories/编程语言/数据结构与算法/index.html","d27b1fdc3bfdaf1f587d51949431d943"],["/categories/网络嗅探/index.html","bcd05216937f92960a7f9c3008476669"],["/categories/网络嗅探/web安全/index.html","ac17eeac53e3d0c3ec21b38c01275159"],["/categories/网络嗅探/web安全/嗅探/index.html","435fc800a4dd05e4c96addcbe066abf9"],["/comments/index.html","51743d6ab53a821b3d47b88e8937a40c"],["/css/custom.css","dd2df6559c7bd902054996e19e1f6d8f"],["/css/index.css","cc856051f67ca2d5edd05f23d4614da0"],["/css/music.css","430f74302733be040c0c19ca2be988b0"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/img/153785156.png","59dfe52937ed8ad5f196bd8a741f036c"],["/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["/img/favicon.png","7a8c47cb5a2149c1a1af21e90ecd9ca7"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/img/images.png","53a1608942dced2169cdeb95e1c1e271"],["/img/lP3rLNUBaGtSVzc.png","0c4e486759ad62e3415f8f197f0311f7"],["/img/output.png","8057388b17b3a7410db8696a8d2261ee"],["/index.html","41e43aaa422cfa3a638e948ae820ba3c"],["/js/anzhiyu.js","684f8784ac6901e352832971e26e4174"],["/js/emoji.js","36b59b593d09fcd5d2b727a5787cd3a0"],["/js/fishes.js","d7498b7d186aa147c2173a0cf0b4aaab"],["/js/jquery.js","f832e36068ab203a3f89b1795480d0d7"],["/js/js.js","cbebf18071e8b76c5a65562caa272b26"],["/js/main.js","960297fafacb19dff1246d71f6dfcf6f"],["/js/pace-theme-flash.css","435d3f6b204c562fa2d4fd7c5172ea87"],["/js/pace.min.js","094ce2780af2906e8916dc4c4eab6ee1"],["/js/search/algolia.js","4491ac1d470a1693a502a9d09034aa21"],["/js/search/local-search.js","9da6b76672a143c8c8449770a8d259f3"],["/js/sun_moon.js","19cd9770a4c954957a232178a2ef064b"],["/js/title.js","c07740f77444c0e38d2c6d616afc366a"],["/js/tw_cn.js","fb4da68124bbafbd2d3da537c80e27ce"],["/js/utils.js","420a15cf446b5670244a9ea05b2bccf0"],["/message/index.html","d191f9e4de15f4448368a326a2d15102"],["/music/index.html","d6badc94e49b9bc0883910f4ead2a1db"],["/music/music.js","2634ab5f1f5bd87e31ceb49ce0cd2288"],["/page/2/index.html","40b03a2d7fd77cc263ade40bce94b29d"],["/page/3/index.html","bb6f214e1359d43d30e2583e51748c2e"],["/page/4/index.html","34f8c94b9ca5d42f7608d7bc110377dd"],["/page/5/index.html","7d7fbabd4277f0d738dcce750fdb0933"],["/page/6/index.html","a2038657664578158c4e9fe21080115a"],["/styles/fish-base.js","e37f93e48fca5f823ba549bf2703b79e"],["/styles/fish.js","7373738321ee0dee627a6ef8ec288272"],["/styles/main.css","000a2ac082ed534c4b8663ba7dc34d9b"],["/sw-register.js","6ad86ad849fb7a50a44954392567c665"],["/tags/Linux学习/index.html","3ab643979fc3c665f21afdb088a7712d"],["/tags/centos/index.html","857fca2a76cf96c0b48ac60d5f0d935b"],["/tags/index.html","743a88ea08603a630c389b1c92c42d3e"],["/tags/java/index.html","9e3d6f86d30c493066dbd82f513ed3b6"],["/tags/javascript/index.html","8bbedf54ad830418a5e003a005b560cc"],["/tags/mysql/index.html","51c5c7d5abed353eb7f89cfe6a92c0a0"],["/tags/php/index.html","533d9ea55fd19deba1d02ec5232c75b5"],["/tags/python/index.html","993af8e0ed7f3069bf87a65dd4ba2c8f"],["/tags/python库/index.html","fda19812382c21d76b8324c8b08d1cac"],["/tags/sql/index.html","7a4d38e8c8a2b19acf0aa112ddc0bd80"],["/tags/ubuntu/index.html","42ca27ae9b0e0d2ca645f3395a6136ed"],["/tags/web/index.html","fd917ccd76953be731ee247d2689a04c"],["/tags/代码安全/index.html","936a58f0bf6e052c3ce045610452e63c"],["/tags/办公自动化/index.html","a738588c3cb98605cf8b26e923703adb"],["/tags/协议安全/index.html","929559f85496a5cd7fa4dd317fb9ca75"],["/tags/大数据/index.html","65aa848553809b25be2d8d44fa7ab603"],["/tags/大数据基础/index.html","09ac133d99f461db7bce67a3d78d82d2"],["/tags/安全/index.html","6034a34dc42e9083bb3106cb9315ac0c"],["/tags/数据可视化/index.html","dd2bdd3bac3d16b59696322d5c2abf19"],["/tags/数据清洗/index.html","580e0c966175788555fe3023e6e7ee38"],["/tags/数据结构与算法/index.html","87b6eae57d045d85eb17682b94181d70"],["/tags/爬虫/index.html","d22a8226001a737537be254407044ec7"]];
var cacheName = 'sw-precache-v3--' + (self.registration ? self.registration.scope : '');
var firstRegister = 1; // 默认1是首次安装SW， 0是SW更新


var ignoreUrlParametersMatching = [/^utm_/];


var addDirectoryIndex = function (originalUrl, index) {
    var url = new URL(originalUrl);
    if (url.pathname.slice(-1) === '/') {
        url.pathname += index;
    }
    return url.toString();
};

var cleanResponse = function (originalResponse) {
    // 如果没有重定向响应，不需干啥
    if (!originalResponse.redirected) {
        return Promise.resolve(originalResponse);
    }

    // Firefox 50 及以下不知处 Response.body 流, 所以我们需要读取整个body以blob形式返回。
    var bodyPromise = 'body' in originalResponse ?
        Promise.resolve(originalResponse.body) :
        originalResponse.blob();

    return bodyPromise.then(function (body) {
        // new Response() 可同时支持 stream or Blob.
        return new Response(body, {
            headers: originalResponse.headers,
            status: originalResponse.status,
            statusText: originalResponse.statusText
        });
    });
};

var createCacheKey = function (originalUrl, paramName, paramValue,
    dontCacheBustUrlsMatching) {

    // 创建一个新的URL对象，避免影响原始URL
    var url = new URL(originalUrl);

    // 如果 dontCacheBustUrlsMatching 值没有设置，或是没有匹配到，将值拼接到url.serach后
    if (!dontCacheBustUrlsMatching ||
        !(url.pathname.match(dontCacheBustUrlsMatching))) {
        url.search += (url.search ? '&' : '') +
            encodeURIComponent(paramName) + '=' + encodeURIComponent(paramValue);
    }

    return url.toString();
};

var isPathWhitelisted = function (whitelist, absoluteUrlString) {
    // 如果 whitelist 是空数组，则认为全部都在白名单内
    if (whitelist.length === 0) {
        return true;
    }

    // 否则逐个匹配正则匹配并返回
    var path = (new URL(absoluteUrlString)).pathname;
    return whitelist.some(function (whitelistedPathRegex) {
        return path.match(whitelistedPathRegex);
    });
};

var stripIgnoredUrlParameters = function (originalUrl,
    ignoreUrlParametersMatching) {
    var url = new URL(originalUrl);
    // 移除 hash; 查看 https://github.com/GoogleChrome/sw-precache/issues/290
    url.hash = '';

    url.search = url.search.slice(1) // 是否包含 '?'
        .split('&') // 分割成数组 'key=value' 的形式
        .map(function (kv) {
            return kv.split('='); // 分割每个 'key=value' 字符串成 [key, value] 形式
        })
        .filter(function (kv) {
            return ignoreUrlParametersMatching.every(function (ignoredRegex) {
                return !ignoredRegex.test(kv[0]); // 如果 key 没有匹配到任何忽略参数正则，就 Return true
            });
        })
        .map(function (kv) {
            return kv.join('='); // 重新把 [key, value] 格式转换为 'key=value' 字符串
        })
        .join('&'); // 将所有参数 'key=value' 以 '&' 拼接

    return url.toString();
};


var addDirectoryIndex = function (originalUrl, index) {
    var url = new URL(originalUrl);
    if (url.pathname.slice(-1) === '/') {
        url.pathname += index;
    }
    return url.toString();
};

var hashParamName = '_sw-precache';
var urlsToCacheKeys = new Map(
    precacheConfig.map(function (item) {
        var relativeUrl = item[0];
        var hash = item[1];
        var absoluteUrl = new URL(relativeUrl, self.location);
        var cacheKey = createCacheKey(absoluteUrl, hashParamName, hash, false);
        return [absoluteUrl.toString(), cacheKey];
    })
);

function setOfCachedUrls(cache) {
    return cache.keys().then(function (requests) {
        // 如果原cacheName中没有缓存任何收，就默认是首次安装，否则认为是SW更新
        if (requests && requests.length > 0) {
            firstRegister = 0; // SW更新
        }
        return requests.map(function (request) {
            return request.url;
        });
    }).then(function (urls) {
        return new Set(urls);
    });
}

self.addEventListener('install', function (event) {
    event.waitUntil(
        caches.open(cacheName).then(function (cache) {
            return setOfCachedUrls(cache).then(function (cachedUrls) {
                return Promise.all(
                    Array.from(urlsToCacheKeys.values()).map(function (cacheKey) {
                        // 如果缓存中没有匹配到cacheKey，添加进去
                        if (!cachedUrls.has(cacheKey)) {
                            var request = new Request(cacheKey, { credentials: 'same-origin' });
                            return fetch(request).then(function (response) {
                                // 只要返回200才能继续，否则直接抛错
                                if (!response.ok) {
                                    throw new Error('Request for ' + cacheKey + ' returned a ' +
                                        'response with status ' + response.status);
                                }

                                return cleanResponse(response).then(function (responseToCache) {
                                    return cache.put(cacheKey, responseToCache);
                                });
                            });
                        }
                    })
                );
            });
        })
            .then(function () {
            
            // 强制 SW 状态 installing -> activate
            return self.skipWaiting();
            
        })
    );
});

self.addEventListener('activate', function (event) {
    var setOfExpectedUrls = new Set(urlsToCacheKeys.values());

    event.waitUntil(
        caches.open(cacheName).then(function (cache) {
            return cache.keys().then(function (existingRequests) {
                return Promise.all(
                    existingRequests.map(function (existingRequest) {
                        // 删除原缓存中相同键值内容
                        if (!setOfExpectedUrls.has(existingRequest.url)) {
                            return cache.delete(existingRequest);
                        }
                    })
                );
            });
        }).then(function () {
            
            return self.clients.claim();
            
        }).then(function () {
                // 如果是首次安装 SW 时, 不发送更新消息（是否是首次安装，通过指定cacheName 中是否有缓存信息判断）
                // 如果不是首次安装，则是内容有更新，需要通知页面重载更新
                if (!firstRegister) {
                    return self.clients.matchAll()
                        .then(function (clients) {
                            if (clients && clients.length) {
                                clients.forEach(function (client) {
                                    client.postMessage('sw.update');
                                })
                            }
                        })
                }
            })
    );
});



    self.addEventListener('fetch', function (event) {
        if (event.request.method === 'GET') {

            // 是否应该 event.respondWith()，需要我们逐步的判断
            // 而且也方便了后期做特殊的特殊
            var shouldRespond;


            // 首先去除已配置的忽略参数及hash
            // 查看缓存简直中是否包含该请求，包含就将shouldRespond 设为true
            var url = stripIgnoredUrlParameters(event.request.url, ignoreUrlParametersMatching);
            shouldRespond = urlsToCacheKeys.has(url);

            // 如果 shouldRespond 是 false, 我们在url后默认增加 'index.html'
            // (或者是你在配置文件中自行配置的 directoryIndex 参数值)，继续查找缓存列表
            var directoryIndex = 'index.html';
            if (!shouldRespond && directoryIndex) {
                url = addDirectoryIndex(url, directoryIndex);
                shouldRespond = urlsToCacheKeys.has(url);
            }

            // 如果 shouldRespond 仍是 false，检查是否是navigation
            // request， 如果是的话，判断是否能与 navigateFallbackWhitelist 正则列表匹配
            var navigateFallback = '';
            if (!shouldRespond &&
                navigateFallback &&
                (event.request.mode === 'navigate') &&
                isPathWhitelisted([], event.request.url)
            ) {
                url = new URL(navigateFallback, self.location).toString();
                shouldRespond = urlsToCacheKeys.has(url);
            }

            // 如果 shouldRespond 被置为 true
            // 则 event.respondWith()匹配缓存返回结果，匹配不成就直接请求.
            if (shouldRespond) {
                event.respondWith(
                    caches.open(cacheName).then(function (cache) {
                        return cache.match(urlsToCacheKeys.get(url)).then(function (response) {
                            if (response) {
                                return response;
                            }
                            throw Error('The cached response that was expected is missing.');
                        });
                    }).catch(function (e) {
                        // 如果捕获到异常错误，直接返回 fetch() 请求资源
                        console.warn('Couldn\'t serve response for "%s" from cache: %O', event.request.url, e);
                        return fetch(event.request);
                    })
                );
            }
        }
    });









/* eslint-enable */
