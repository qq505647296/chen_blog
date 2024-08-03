/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2024/05/29/编程语言/python/库介绍/PYTHON-re/index.html","980f8aef9babecce346b5e147be3f760"],["/2024/05/29/编程语言/sql/sql-learning/index.html","863b99ab724dd160d957a0f2c0f8375e"],["/2024/05/29/编程语言/sql/sql-learning_1/index.html","dfc8d9f8a4b340fb7c2266abb400bab1"],["/2024/05/29/编程语言/sql/sql_learning_2/index.html","57bc32444f50b1ee0a7f4d0cf823db3d"],["/2024/06/01/web安全/代码漏洞/sql注入/sql/index.html","ca7470679806769e7f72a7459bc4614e"],["/2024/06/01/web安全/嗅探/web-basic/index.html","3d2b95161b1af5990bcdb160f9d233b9"],["/2024/06/01/web安全/嗅探/web/index.html","9ba6228a04e88d6808b13ca39c2d88e0"],["/2024/06/01/web安全/嗅探/wireshark/index.html","f564352ac7458efc475a7d00e17cb20f"],["/2024/06/01/web安全/基础协议/DNS/index.html","e3802e0d70ec250ba0491747ebc58dbe"],["/2024/06/01/web安全/基础协议/https/index.html","d1d7bcbbbf162e8f792beb9ffdf388d7"],["/2024/06/01/web安全/密码学/crypto/index.html","d76b3047008f87607cf6a95f2ec5cfa2"],["/2024/06/01/web安全/密码学/passwd/index.html","ab14bdbbe87021c1f047fe84b03dca04"],["/2024/06/06/linux/linux知识/基本特性/bash/index.html","8af531571e568b52ff4483978b8dba15"],["/2024/06/06/linux/linux知识/系统文件/hosts/index.html","4e76630742eb412581a785690476c9b2"],["/2024/06/09/linux/linux知识/命令介绍/linuxbasic-1/index.html","fab1bc2dde1782cdeff605517efe71b0"],["/2024/06/09/linux/linux知识/基本特性/permission/index.html","dd1cff97f0a4161d39d669b8fbb6535d"],["/2024/06/10/linux/linux知识/基本特性/shell/index.html","ec5728a72af67b8e4c37104d24ecc378"],["/2024/06/10/linux/linux知识/系统文件/profile/index.html","1a78c57c4ef367ee9c981d9c38a35f44"],["/2024/06/10/大数据/Java Hadoop框架/Hadoop/index.html","1411b2aa9ef764ad6b50bd61eb0988cc"],["/2024/06/10/大数据/web爬虫/beautifulsoup/index.html","48f1e4b2284704a4ecb2405889ad885f"],["/2024/06/10/大数据/web爬虫/crawler/index.html","42a146d2f25c5dd8efe9bb295885967a"],["/2024/06/11/linux/linux知识/基本特性/path/index.html","b1a74616724392ca2476383e11a55932"],["/2024/06/11/linux/linux知识/系统文件/ssh/index.html","be7f7e9065f47e49d7f2c5202d5f13ea"],["/2024/06/12/linux/ubuntu/Ubuntu/index.html","83e610578b22bc9199afdd8c98599306"],["/2024/06/12/linux/ubuntu/ubuntubasic/index.html","3a70c035a14fb0d13566fd383a47a8b7"],["/2024/06/12/大数据/办公自动化/excel/index.html","90fa3267c7b5f0916daa8e666e72b467"],["/2024/06/12/大数据/数据清洗/mysql-data/index.html","92e93a334c925fd594f0db880783e328"],["/2024/06/12/编程语言/python/库介绍/Tkinter/index.html","ca932cf988c2bb530559bb14a11c7f67"],["/2024/06/13/大数据/数据可视化/pandas/index.html","1251c16872a3c25e1dfed4bf81935dd3"],["/2024/06/13/编程语言/python/基础/python class/index.html","bc51aaf84fd960567b756c39c87b89d8"],["/2024/06/13/编程语言/python/基础/pythonbasic/index.html","791559494c8265cec12cf0c4eb722fc2"],["/2024/06/13/编程语言/python/基础/pythonstring/index.html","30486d40ec796b8e23944f23958206b5"],["/2024/06/13/编程语言/python/库介绍/Numpy/index.html","8d00cf5c5a459c03561272a10cf00035"],["/2024/06/14/编程语言/python/基础/symbol/index.html","b2e1c66bb03f3bfccef5b09c80d19503"],["/2024/06/15/编程语言/Java/JAVAbasic/index.html","ff93d7e2e598ca245745caaecb7dffe9"],["/2024/06/15/编程语言/前端/css/css_basic/index.html","6bcc6df83be7a911d5787e16ad47dfe9"],["/2024/06/15/编程语言/前端/html/html/index.html","7ac3e594de082ca124fef9c90abc5443"],["/2024/06/15/编程语言/数据结构与算法/Data Structures And Algorithms basic/index.html","773ee018e5358ecaab71f5cf25132f59"],["/2024/06/22/linux/linux知识/命令介绍/linuxbasic-2/index.html","fe0651b48d5e47d28130b38431218e93"],["/2024/06/22/linux/linux知识/系统文件/proc/index.html","eb02efa7eebdfc99d0abd05935292c7a"],["/2024/06/27/linux/centos/firewalld/index.html","0075b66975acb61f336f0d106c348ae5"],["/2024/06/30/编程语言/python/安装/python_download/index.html","1866887f14976ff350cb28a06f7b99f7"],["/2024/07/11/大数据/数据可视化/matplotlib/index.html","03089b966c48194efa744845195f06d9"],["/2024/07/17/web安全/代码漏洞/xss跨站攻击/daima/index.html","3aa8ad98d3e1a24fdf40f6978711e2c5"],["/archives/2024/05/index.html","0cbc85f1474999739b99dc1d555e077c"],["/archives/2024/06/index.html","5c59349602b278eaf22e80fb28de0703"],["/archives/2024/06/page/2/index.html","110d393624c1b5ea4104ba66e4283a9b"],["/archives/2024/06/page/3/index.html","eb69ca7eaf36c03368469312ea648ffe"],["/archives/2024/06/page/4/index.html","36e8f1344b1c2f87ebc71718a8bfaca7"],["/archives/2024/07/index.html","aed276268881d41daf2f11047860c73a"],["/archives/2024/index.html","d9ef232ab97379efd656638f47f80344"],["/archives/2024/page/2/index.html","d1dd493dc23c1a22e04d821c28681bd7"],["/archives/2024/page/3/index.html","5b18b85c2124ca6ac0f5d93b09f1a7eb"],["/archives/2024/page/4/index.html","ecf94bbb1196f15d66a0b8bda88821b3"],["/archives/2024/page/5/index.html","ac55f84ee1a0bc8341eaf80418000b40"],["/archives/index.html","f7006a845f6c74228b170e1cee390d39"],["/archives/page/2/index.html","f23cf4cf255d17611b4837ecce80790e"],["/archives/page/3/index.html","dfc14aa15837a2e29dfb81e11e6addc3"],["/archives/page/4/index.html","fa40d55acad5e1e7ad3664f23b9b9863"],["/archives/page/5/index.html","161c09ce85c19e6796c34a69354daaef"],["/categories/index.html","b7a8daf27f298a3aff08f9f6e9345a7b"],["/categories/linux/centos/index.html","dc46f6f4f0ba3d434409c4217fb3b74e"],["/categories/linux/index.html","19a1877113800873940a039a7986cd95"],["/categories/linux/linux知识/index.html","d78bb14767498f708197759706e08c5f"],["/categories/linux/linux知识/命令介绍/index.html","ffc2b9635f069bad1973910fb2fbb634"],["/categories/linux/linux知识/基本特性/index.html","8fdf37a70ff7cf0300a837c1835e53bd"],["/categories/linux/linux知识/系统文件/index.html","14f2578f597e1719b496103a90f32aab"],["/categories/linux/page/2/index.html","b8b7c5d5499fa77d441f4d1f1cc043b4"],["/categories/linux/ubuntu/index.html","0fbddf64867b005aa63e4e6af71e00eb"],["/categories/web安全/index.html","124beb7fa00fb60c56882cbb765a0351"],["/categories/web安全/代码漏洞/index.html","d4aed8ef62d42df25c8cd980940384bc"],["/categories/web安全/代码漏洞/sql注入/index.html","dbf7fb061d40ea7668cdd8185aa177cc"],["/categories/web安全/代码漏洞/xss跨站攻击/index.html","784ade20d91194503b87c9301d17e2cd"],["/categories/web安全/基础协议/index.html","b03125137f6fb1dabf7b4f625357fb30"],["/categories/web安全/密码学/index.html","08ec782c22d7ba25d63541de2f1f8f5f"],["/categories/信息收集/index.html","e6fb1bca9eb8ab52244a986f917c4b26"],["/categories/信息收集/web安全/index.html","2bdd708bed991e8e6f5d4ad134ca7daa"],["/categories/信息收集/web安全/嗅探/index.html","1d800c536a4513a0f11d9e56537365ff"],["/categories/大数据/Java-Hadoop框架/index.html","3059c5daafb902bb86d9e5ae1ba4bb25"],["/categories/大数据/index.html","6d3b2cb43821b9c7fb2dd8c4081f0f4e"],["/categories/大数据/web爬虫/index.html","368a91739b043c64aa60e70cd9109400"],["/categories/大数据/办公自动化/index.html","310f6a5fa3b24149e5a74397f98b966d"],["/categories/大数据/数据可视化/index.html","c2f389dd6b4758b966e72ba126175ada"],["/categories/大数据/数据清洗/index.html","b92e2fcd9e6450f26272de52d18d4b7a"],["/categories/编程语言/Java/index.html","7e9bca26549a5bbcc7505bdb542cd455"],["/categories/编程语言/index.html","9d81b4f00d9105852d129eba61411e88"],["/categories/编程语言/page/2/index.html","9b1304d4de39568abfae3ba361effb66"],["/categories/编程语言/python/index.html","b630402419a633efc0b1045a3a4d3947"],["/categories/编程语言/python/基础/index.html","e29fbd13730e881db45d76c793b49bb1"],["/categories/编程语言/python/安装/index.html","462be1f4c591faaadcd4fbcace0bff3c"],["/categories/编程语言/python/库介绍/index.html","58ee3ec391878f7d217a6b1057c5df13"],["/categories/编程语言/sql/index.html","0e52ea6bc62eee546bbaa562a61b7137"],["/categories/编程语言/前端/css/index.html","7b0751a499d27d2ed5037c81203441f1"],["/categories/编程语言/前端/html/index.html","5f0a7d9bfca6d33cf96a8c9469105a2c"],["/categories/编程语言/前端/index.html","74e92ba114ff49c8e4a2968f07ed392e"],["/categories/编程语言/数据结构与算法/index.html","4245a0294afac4898a0dc0d52b976efb"],["/categories/网络嗅探/index.html","b46bbf3bd835dac42580b54f49e20ddc"],["/categories/网络嗅探/web安全/index.html","8241ade1b6c079239c4824bb3b9f4cb9"],["/categories/网络嗅探/web安全/嗅探/index.html","b0ca229ae8679d6926c214d8251ddf9e"],["/css/index.css","44f93f0b39d6250bb015e0f36cd0a5df"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/img/153785156.png","59dfe52937ed8ad5f196bd8a741f036c"],["/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["/img/favicon.png","7a8c47cb5a2149c1a1af21e90ecd9ca7"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/img/images.jpg","ef6ab345674cab43c5b96a53ac90f561"],["/img/images.png","53a1608942dced2169cdeb95e1c1e271"],["/img/output.png","8057388b17b3a7410db8696a8d2261ee"],["/index.html","56b0968fdbce8f7bdb699949822a2bdc"],["/js/fishes.js","d7498b7d186aa147c2173a0cf0b4aaab"],["/js/jquery.js","f832e36068ab203a3f89b1795480d0d7"],["/js/main.js","960297fafacb19dff1246d71f6dfcf6f"],["/js/search/algolia.js","4491ac1d470a1693a502a9d09034aa21"],["/js/search/local-search.js","9da6b76672a143c8c8449770a8d259f3"],["/js/tw_cn.js","fb4da68124bbafbd2d3da537c80e27ce"],["/js/utils.js","420a15cf446b5670244a9ea05b2bccf0"],["/js/windows.js","cccb8741d88427cf9e760167cf8c0f9f"],["/page/2/index.html","c5a68ae051e41ab1e8ff554c78215f6a"],["/page/3/index.html","84f7416ac9fa8c70779ce69e4ee1c5b5"],["/page/4/index.html","bb1f7b722316fff5a94b46a730e56b81"],["/page/5/index.html","c43d5b094bea23bef48c70f0b2d70f4b"],["/styles/fish-base.js","e37f93e48fca5f823ba549bf2703b79e"],["/styles/fish.js","7373738321ee0dee627a6ef8ec288272"],["/styles/main.css","000a2ac082ed534c4b8663ba7dc34d9b"],["/sw-register.js","d0b7df31f9137103acd5239a02831a01"],["/tags/Linux学习/index.html","9e9a5f53df1988ff154206a7ebdbf7b0"],["/tags/centos/index.html","f31afe3777f153e5f8bc6a510009332c"],["/tags/index.html","dabb075c7283ece0cc7e681cb26c4d67"],["/tags/java/index.html","8948639a1055566050474cb41ffdaea0"],["/tags/mysql/index.html","f6144c67749c1a217f404d4ef7b2c6a6"],["/tags/python/index.html","bc9830a87bd569d30660432ce85f1bb8"],["/tags/python库/index.html","fd9c494dca1fad7f0cb612f55bc132a7"],["/tags/sql/index.html","ced73f29c5cca165ba1beaefd5e108a2"],["/tags/ubuntu/index.html","a634d795be139cebc8a4608009c89866"],["/tags/web/index.html","02a998f792ccc28e8b09cb4f741f1b8f"],["/tags/代码安全/index.html","f3ebf9fe372f3bf491b965bb418e21ec"],["/tags/办公自动化/index.html","2afb5636207f6c51e5657f30af299845"],["/tags/协议安全/index.html","2122f358c0988bb02bb5c5b61f838d95"],["/tags/大数据/index.html","77cc5b0fa947c367619cbc58ecf78447"],["/tags/大数据基础/index.html","81169f99a553a56ebe013b51629adbb7"],["/tags/安全/index.html","b6200c83494284831ff628e96d833068"],["/tags/数据可视化/index.html","19df0bcfe6e00daa7f80a1392d9c0c7e"],["/tags/数据清洗/index.html","d197666e132027a00ad16c64464e4360"],["/tags/数据结构与算法/index.html","63bf79bb2dcb46e325c97db57b537c68"],["/tags/爬虫/index.html","6cf87aa154ef0a480055fa915092f597"]];
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
