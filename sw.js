/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2024/05/29/编程语言/python/库介绍/PYTHON-re/index.html","86ba77465c00d25eb57ee9766dfb82f0"],["/2024/05/29/编程语言/sql/sql-learning/index.html","b6fd968bc0be30f2105b9a71909c341d"],["/2024/05/29/编程语言/sql/sql-learning_1/index.html","e1e991c127e9ad5b0c7d0f62272d53ea"],["/2024/05/29/编程语言/sql/sql_learning_2/index.html","3cfc8a46fce8ef1b106f2b3ad09d655f"],["/2024/06/01/web安全/代码漏洞/sql注入/sql/index.html","ba7a11d724f676171d54f9260d5a0625"],["/2024/06/01/web安全/嗅探/web-basic/index.html","bfe42ff1be253a602f0fbcea451971f8"],["/2024/06/01/web安全/嗅探/web/index.html","d9cf412c5f0102971a79c9efc26a08b1"],["/2024/06/01/web安全/嗅探/wireshark/index.html","e3166cfa95f89bcad1f7291b8a002fbd"],["/2024/06/01/web安全/基础协议/DNS/index.html","eef1e14bf7d7f976d96c6a2d448392e5"],["/2024/06/01/web安全/基础协议/https/index.html","50727b70fe4a42112d608586fd05ac2c"],["/2024/06/01/web安全/密码学/crypto/index.html","36ef7532442777a0f7461655c1395bc7"],["/2024/06/01/web安全/密码学/passwd/index.html","c4549a2cd904f2eced760c92dc3749ff"],["/2024/06/06/linux/linux知识/基本特性/bash/index.html","31cd906660d352493ed1d35cfb291c81"],["/2024/06/06/linux/linux知识/系统文件/hosts/index.html","db04b8a9f0650fdf5a9c4fd84da5f831"],["/2024/06/09/linux/linux知识/命令介绍/linuxbasic-1/index.html","a6c261f0b2069a70cc67962f280037aa"],["/2024/06/09/linux/linux知识/基本特性/permission/index.html","76e0625a3c10970c21b0dbaff7225695"],["/2024/06/10/linux/linux知识/基本特性/shell/index.html","013f1bcdff84186c8fbe5ad3073e5215"],["/2024/06/10/linux/linux知识/系统文件/profile/index.html","67df00b0fd3153f8ce64c414cafae081"],["/2024/06/10/大数据/Java Hadoop框架/Hadoop/index.html","07c29324e3a679b4c230563b669905ca"],["/2024/06/10/大数据/web爬虫/beautifulsoup/index.html","f7fcb0c8625acd53a12e6441a23fd4bd"],["/2024/06/10/大数据/web爬虫/crawler/index.html","9adcfa3299006b58738fef2a97deedcd"],["/2024/06/11/linux/linux知识/基本特性/path/index.html","b6627d0b916ea00eb1c4a75d9a48dbec"],["/2024/06/11/linux/linux知识/系统文件/ssh/index.html","de43360219777b510f828a066d36d6bf"],["/2024/06/12/linux/ubuntu/Ubuntu/index.html","edcd5a8a4f5d922f1a1abe917baad18b"],["/2024/06/12/linux/ubuntu/ubuntubasic/index.html","028f40cc29671d829ee87d12f322d77c"],["/2024/06/12/大数据/办公自动化/excel/index.html","3639976b606c93ce20f7b8947ed10bff"],["/2024/06/12/大数据/数据清洗/mysql-data/index.html","3dfbb5668071a49db43eec95d314b7e7"],["/2024/06/12/编程语言/python/库介绍/Tkinter/index.html","a0551886c9f04bd898adc637528dd567"],["/2024/06/13/大数据/数据可视化/pandas/index.html","b49a322324a40d4326ab6618f89f091e"],["/2024/06/13/编程语言/python/基础/python class/index.html","1591b4013c579a755866bdefaf498d41"],["/2024/06/13/编程语言/python/基础/pythonbasic/index.html","5b550658302f235e89cd3858c11f7ea0"],["/2024/06/13/编程语言/python/基础/pythonstring/index.html","c885d3ac535ea06d7b4a4f57ee0ce48a"],["/2024/06/13/编程语言/python/库介绍/Numpy/index.html","29b3dd00a466922655ec61f952eaf672"],["/2024/06/14/编程语言/python/基础/symbol/index.html","08f5e9365b353fc791612106874c69b0"],["/2024/06/15/编程语言/Java/JAVAbasic/index.html","ef80cd04dfca52de196370380d8d6f2e"],["/2024/06/15/编程语言/前端/css/css_basic/index.html","df9070180445fce2c26484354fe75572"],["/2024/06/15/编程语言/前端/html/html/index.html","483001a7319201fd6a7e1e4b24e23db1"],["/2024/06/15/编程语言/数据结构与算法/Data Structures And Algorithms basic/index.html","75fe6ec56c31759cdac00d1dbe7740e5"],["/2024/06/22/linux/linux知识/命令介绍/linuxbasic-2/index.html","9e179ae53e6db8dca8189ba4bea0ae49"],["/2024/06/22/linux/linux知识/系统文件/proc/index.html","9a120aa6d95cdc5ba1e44fcef27f5cc6"],["/2024/06/27/linux/centos/firewalld/index.html","08c0d69243d582575707d4255389f7f2"],["/2024/06/30/编程语言/python/安装/python_download/index.html","f303cfd376bd637217e4477b55f047fc"],["/2024/07/11/大数据/数据可视化/matplotlib/index.html","87b85447982d3bf11c6da4be9438d12a"],["/2024/07/17/web安全/代码漏洞/xss跨站攻击/daima/index.html","41bd6474094f818f58c8a5b2ae3f2b91"],["/archives/2024/05/index.html","4cd70149f8dce491bb45118d1b009220"],["/archives/2024/06/index.html","3596b3ac1e8495926a364346bf63260e"],["/archives/2024/06/page/2/index.html","9d53b5250e5f1f49a3bcff642d58bbf8"],["/archives/2024/06/page/3/index.html","c18319d28063a389893b35c3a2828850"],["/archives/2024/06/page/4/index.html","4de2492d5906013ef829146ea2499867"],["/archives/2024/07/index.html","b0563af1b799b7590878161da62e498b"],["/archives/2024/index.html","541040e11caefe4b3e3b2bc2c710ae59"],["/archives/2024/page/2/index.html","6f5b359d5339336ee0319e029ceed040"],["/archives/2024/page/3/index.html","406e3c5e9362375b9d82fc2c36477d50"],["/archives/2024/page/4/index.html","1cf958ccb95ac81d1fe7d2fbea7a13d0"],["/archives/2024/page/5/index.html","590db7f0db43a96efc0ac1d4529000a6"],["/archives/index.html","54e7e7ccd5d722cf4f98ef23fa5f3586"],["/archives/page/2/index.html","0e5d5d28d3bf20ae234a322c05b583fb"],["/archives/page/3/index.html","0456189eb8879d6fc8b468fa3e21771c"],["/archives/page/4/index.html","2030507978c46edf6d36b070ac42b056"],["/archives/page/5/index.html","6a5ff35e75be778d71225d610819b75b"],["/categories/index.html","6caec02d0ac1ecc3608d6106a7234a1a"],["/categories/linux/centos/index.html","65c04f0d3c215b01dfef89a511718f89"],["/categories/linux/index.html","266ab8a3520f0104fba3cd318ed5b82f"],["/categories/linux/linux知识/index.html","aabb77dfd8580417f0182c88e4485f7b"],["/categories/linux/linux知识/命令介绍/index.html","7a896fd59521c9611ec8f30f5d04c6cc"],["/categories/linux/linux知识/基本特性/index.html","77e60fd14d92ce3a46c8ddf7809b662e"],["/categories/linux/linux知识/系统文件/index.html","3dae90d2603d8b259bf003d0bb1b7bb4"],["/categories/linux/page/2/index.html","eeac83de4c2c158cb02276750b84ca78"],["/categories/linux/ubuntu/index.html","59fedca7725be8436c8a1f3218b44aed"],["/categories/web安全/index.html","15b0f728057371c11bbf572e97cbae7f"],["/categories/web安全/代码漏洞/index.html","78582c9a926ae04026726ef53ba088d6"],["/categories/web安全/代码漏洞/sql注入/index.html","3f582c7e515d91367874de3a1ac01849"],["/categories/web安全/代码漏洞/xss跨站攻击/index.html","fe4b9b37fbfe3020c04ca4d7def338ed"],["/categories/web安全/基础协议/index.html","b8ed97a6feac6613c208cbf5986c296e"],["/categories/web安全/密码学/index.html","c89543b4fcd0a8afef4ee3bf8825cdec"],["/categories/信息收集/index.html","9fff0419fb9ece1cd9a1e67edbb95b62"],["/categories/信息收集/web安全/index.html","71495699a49ba28ef2c194a3c5939f47"],["/categories/信息收集/web安全/嗅探/index.html","234ba194ce78a63e7cca670bc5b5f041"],["/categories/大数据/Java-Hadoop框架/index.html","2b1c327f64580b971b1c430af019debd"],["/categories/大数据/index.html","8607f24148a7b187f7398809a5d878e0"],["/categories/大数据/web爬虫/index.html","89b22b8541c80169d3532d91a0d4827c"],["/categories/大数据/办公自动化/index.html","5ce50d4d14573e03c5c3db734b09a448"],["/categories/大数据/数据可视化/index.html","c055b51f9f0687764f2fc0853f95d0e2"],["/categories/大数据/数据清洗/index.html","8728f4fe9f11a4b79440c3028155b347"],["/categories/编程语言/Java/index.html","413c04e8db433b052261099c968f9a30"],["/categories/编程语言/index.html","2d1cbf47690ec38b5ece2ab10cccd781"],["/categories/编程语言/page/2/index.html","1e36bb4616eeec04c9fc52fa1b3e2223"],["/categories/编程语言/python/index.html","5ad360fb4bf5fb4f471535cb1e87e07d"],["/categories/编程语言/python/基础/index.html","5a88b96df6315488d548f7026369b51f"],["/categories/编程语言/python/安装/index.html","fd26d00ba3e70b3b494fbefe2ed2bd94"],["/categories/编程语言/python/库介绍/index.html","ba52b0f2d2706f0608d9f10cce65db33"],["/categories/编程语言/sql/index.html","cd7f899471469b1c7540a5f3eb6ad897"],["/categories/编程语言/前端/css/index.html","1a8eaaf0cf4ca9e53e544219da58891b"],["/categories/编程语言/前端/html/index.html","7ac8e2d12b2d6a5ffec08de06217a731"],["/categories/编程语言/前端/index.html","d90a800023711e899c3d14edead62059"],["/categories/编程语言/数据结构与算法/index.html","4fc3da9c79f1b381a0cffe5504b595cf"],["/categories/网络嗅探/index.html","619dead5e46c2e4af45e2eb451dbeb57"],["/categories/网络嗅探/web安全/index.html","50cb658a220dbfdb69b4eb71e5a1176a"],["/categories/网络嗅探/web安全/嗅探/index.html","f5a0e9f1b39c5151753a4b2b1f15e02d"],["/css/index.css","44f93f0b39d6250bb015e0f36cd0a5df"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/img/153785156.png","59dfe52937ed8ad5f196bd8a741f036c"],["/img/3wkO7fuQpgda6vz.png","e521776cb427f848546e20d784888a55"],["/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["/img/53eTB2uiNRlXwFP.png","db810792edf3d40de5baf5401a9a0626"],["/img/71wgohfPHqXRbG9.png","d7e9fe3e0e3db6b841ab12fad331daed"],["/img/T7Mu8Aod3egmC4Q.png","9f1914138052c3a631e1f2b2cf674a46"],["/img/bEJsXxewpOGuRD8.png","99898b727359e568759eebbb2c9e4a8b"],["/img/egVhFWopA5mP2Hk.png","069b687b7f1069254c816a56317bfaad"],["/img/favicon.png","7a8c47cb5a2149c1a1af21e90ecd9ca7"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/img/gcnavZbmepS8d4u.png","fa4f4588b9fab07979acd61b94d34fa0"],["/img/images.jpg","ef6ab345674cab43c5b96a53ac90f561"],["/img/images.png","53a1608942dced2169cdeb95e1c1e271"],["/img/lP3rLNUBaGtSVzc.png","0c4e486759ad62e3415f8f197f0311f7"],["/img/output.png","8057388b17b3a7410db8696a8d2261ee"],["/img/rJbFpE65tmxPv7R.png","418c3457b6792eb732844d41d2501294"],["/img/xthHmnbdNerWOqP.png","2263d9d1cc9b0724e6331374c33f988b"],["/index.html","7ee10f49eb0b23e19078e7647d98f127"],["/js/fishes.js","d7498b7d186aa147c2173a0cf0b4aaab"],["/js/jquery.js","f832e36068ab203a3f89b1795480d0d7"],["/js/main.js","960297fafacb19dff1246d71f6dfcf6f"],["/js/search/algolia.js","4491ac1d470a1693a502a9d09034aa21"],["/js/search/local-search.js","9da6b76672a143c8c8449770a8d259f3"],["/js/tw_cn.js","fb4da68124bbafbd2d3da537c80e27ce"],["/js/utils.js","420a15cf446b5670244a9ea05b2bccf0"],["/js/windows.js","cccb8741d88427cf9e760167cf8c0f9f"],["/page/2/index.html","9a596d09829cd77ccda560e7f6c36819"],["/page/3/index.html","1e3e7f24ac6dbc6c81fd529dccf21773"],["/page/4/index.html","3ce315468b29619b67dbfd31cfdf00ea"],["/page/5/index.html","4a1af85df089c52862e0c52cca44244f"],["/styles/fish-base.js","e37f93e48fca5f823ba549bf2703b79e"],["/styles/fish.js","7373738321ee0dee627a6ef8ec288272"],["/styles/main.css","000a2ac082ed534c4b8663ba7dc34d9b"],["/sw-register.js","a5caeeca3200325594f359ad9edc0567"],["/tags/Linux学习/index.html","4a8f13fdd678ad9b2286c6f8718c5449"],["/tags/centos/index.html","4f9ced4d767850a2a502085e8bb664f2"],["/tags/index.html","086c0dbff8505f67bc53728f9365aa33"],["/tags/java/index.html","ec4e83a548a778c5f4cf7572cfaabf36"],["/tags/mysql/index.html","81a4af11f50edbe3b4ee102956d1fa1a"],["/tags/python/index.html","779210ac6ad6b6cee6a283c9bb7d2a23"],["/tags/python库/index.html","3e3c34d7ece60a1fd27caa94161280b8"],["/tags/sql/index.html","969c1781e7f35cc77d7e409b57642092"],["/tags/ubuntu/index.html","8da12619d5a034c0c88b025e065faf2b"],["/tags/web/index.html","4963c86136990cb3cb36b5cc66b385cc"],["/tags/代码安全/index.html","7cb80cd714006f77a2efb31b9d2af93a"],["/tags/办公自动化/index.html","08ecdc05126f2d223314754ea618551c"],["/tags/协议安全/index.html","0860a5acebfccc9fd0aecda6987b12d4"],["/tags/大数据/index.html","d8e728b826c0156de0fc0219ef430e65"],["/tags/大数据基础/index.html","ae47b60cf6443de765d1133c6513ace5"],["/tags/安全/index.html","8a4a5a2825d4a4555774beeb0af29afc"],["/tags/数据可视化/index.html","024d020741c1fe3e84f7642726fb7219"],["/tags/数据清洗/index.html","3cecae1105a35469238722c36ce9a248"],["/tags/数据结构与算法/index.html","216d2e831181b9a711221ba4a0c38eae"],["/tags/爬虫/index.html","1d6ca45877241b7701e04235e01c8df2"]];
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
