/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2024/05/29/编程语言/python/库介绍/PYTHON-re/index.html","eb9c96327ca89faf2aaca4c438160b9c"],["/2024/05/29/编程语言/sql/sql-learning/index.html","7ff44784b4a054eca089e11ac270571a"],["/2024/05/29/编程语言/sql/sql-learning_1/index.html","bbebd69303844107f8a32a80d59317f6"],["/2024/05/29/编程语言/sql/sql_learning_2/index.html","d5c2e08ca70fbfcefcf9c61fb8adb681"],["/2024/06/01/web安全/代码漏洞/sql注入/sql/index.html","98a4202b8e89c86585138109d8d100d0"],["/2024/06/01/web安全/嗅探/web-basic/index.html","0cacd1c443301bdb3805473455f10dee"],["/2024/06/01/web安全/嗅探/web/index.html","dfd1572bbbf1db399ae025aea32aa9f9"],["/2024/06/01/web安全/嗅探/wireshark/index.html","d846b5d3fb0a22169a71177ec2a61ed7"],["/2024/06/01/web安全/基础协议/DNS/index.html","c5497b4099f2f304a54b80c32af8cc6f"],["/2024/06/01/web安全/基础协议/https/index.html","03b06120db0dfd4d6f949fd93476c377"],["/2024/06/01/web安全/密码学/crypto/index.html","48567fe446ac046289a92f2263f717bf"],["/2024/06/01/web安全/密码学/passwd/index.html","d1037025613c6de467ccbf9c651478d9"],["/2024/06/06/linux/linux知识/基本特性/bash/index.html","2e5908986b00afe3f28b01655a41f789"],["/2024/06/06/linux/linux知识/系统文件/hosts/index.html","cdb660f014ae88a2a5c9efd3bf490bf1"],["/2024/06/09/linux/linux知识/命令介绍/linuxbasic-1/index.html","30aec17675d247b4e0cd47d73962d69b"],["/2024/06/09/linux/linux知识/基本特性/permission/index.html","5e69b197302dd78c202bb5f0ab9677cb"],["/2024/06/10/linux/linux知识/基本特性/shell/index.html","b70bdf07695fbfe9e9c541126fc6668c"],["/2024/06/10/linux/linux知识/系统文件/profile/index.html","639abf0e57fdca60d9b0ff7c9d642c4a"],["/2024/06/10/大数据/Java Hadoop框架/Hadoop/index.html","460689b6a7c0cc089e6592f473e077dd"],["/2024/06/10/大数据/web爬虫/beautifulsoup/index.html","efc0a0baaabc5c9a2a9cb321e3d0bc1b"],["/2024/06/10/大数据/web爬虫/crawler/index.html","861f113f66831cb1d5d449361b54166b"],["/2024/06/11/linux/linux知识/基本特性/path/index.html","c166db403459d296332ae371068d802c"],["/2024/06/11/linux/linux知识/系统文件/ssh/index.html","73fe20fe105667fd78420a0f821421b2"],["/2024/06/12/linux/ubuntu/Ubuntu/index.html","3d0907838c022d0810f33d97d2244542"],["/2024/06/12/linux/ubuntu/ubuntubasic/index.html","da7e5f3c32fdf465215b1a32a7079f39"],["/2024/06/12/大数据/办公自动化/excel/index.html","bd3e3b1277fa419446ee854bbcc72a6f"],["/2024/06/12/大数据/数据清洗/mysql-data/index.html","5c750a1b491a78b86d4e382a5c8a89e3"],["/2024/06/12/编程语言/python/库介绍/Tkinter/index.html","d47f7a5ca2bf20c81b433ed904c27f47"],["/2024/06/13/大数据/数据可视化/pandas/index.html","8ec716bad950877b5cb3bc441e1630d5"],["/2024/06/13/编程语言/python/基础/python class/index.html","e9bc937818b4bf18d11f3a59cd41e6d2"],["/2024/06/13/编程语言/python/基础/pythonbasic/index.html","e296b4c0c2cb8cd5581bc9313dc57b6a"],["/2024/06/13/编程语言/python/基础/pythonstring/index.html","1dbed1a4f4921f4442fcb5132fc08126"],["/2024/06/13/编程语言/python/库介绍/Numpy/index.html","0397bbe11bca5dc05a8d1aba5c8716cd"],["/2024/06/14/编程语言/python/基础/symbol/index.html","fc7bcf06f83c095a90ef0544cb3b72cb"],["/2024/06/15/编程语言/Java/JAVAbasic/index.html","2fe341398678be2df32ed15946c4dcf8"],["/2024/06/15/编程语言/前端/css/css_basic/index.html","0668c1d8e59f876c08c1ecf75c9a36d5"],["/2024/06/15/编程语言/前端/html/html/index.html","c13911ad2c6b97373f699febeda30b03"],["/2024/06/15/编程语言/数据结构与算法/Data Structures And Algorithms basic/index.html","4d128497c7ddc7f82515d774def240fe"],["/2024/06/22/linux/linux知识/命令介绍/linuxbasic-2/index.html","090308eddb82368a45d682df2db3da7a"],["/2024/06/22/linux/linux知识/系统文件/proc/index.html","bb0f56b3b6b217186fb118eef7a7f143"],["/2024/06/27/linux/centos/firewalld/index.html","14c590c2f64e36c06daf603edcb00400"],["/2024/06/30/编程语言/python/安装/python_download/index.html","5642f74924d512fcef59cb7117670dfa"],["/2024/07/11/大数据/数据可视化/matplotlib/index.html","3c838dbfbec78aa54b1e04edffd67841"],["/2024/07/17/web安全/代码漏洞/xss跨站攻击/daima/index.html","29d6e3bdb1e5b80f1a18db4c3df6f0ea"],["/archives/2024/05/index.html","a5baa8f280fb18bd7f477e8eac7d67c4"],["/archives/2024/06/index.html","c3ed3f3de0d4e9dafee3b7fbc926bdb9"],["/archives/2024/06/page/2/index.html","7db7b394351d048888a0380b4898995f"],["/archives/2024/06/page/3/index.html","f68865d1c6714ff093c5ee0c80c3f7b5"],["/archives/2024/06/page/4/index.html","9c8cc98f1c89f272a2aacab13b1916ee"],["/archives/2024/07/index.html","17fd93d823aad6c86f905379b8759f5f"],["/archives/2024/index.html","e792538fb97e8f7538d5e1ac5fea6f34"],["/archives/2024/page/2/index.html","98252e48a0aab9a05cefbeb5a26ead83"],["/archives/2024/page/3/index.html","d970232f28de8bc761abb693a1113f3d"],["/archives/2024/page/4/index.html","3f56b7abddba1f1961cfda382de688bf"],["/archives/2024/page/5/index.html","cfe49326dc9e810a1fabbd3f57ba7ea1"],["/archives/index.html","e758e2127a397404e60707563f140b45"],["/archives/page/2/index.html","8ab4fbb241267acaa8a04e0e99ac79a3"],["/archives/page/3/index.html","a125d015b073ae16ac881b4eb9498b50"],["/archives/page/4/index.html","987beef00f1b2164235d1ee8b73915e1"],["/archives/page/5/index.html","182a3b065547d169c774d36737e20a0d"],["/categories/index.html","b6700aec0d0d4ca0bdfaa5259cd30f44"],["/categories/linux/centos/index.html","30e999cb68a126e8fb47981417536a1f"],["/categories/linux/index.html","8036b19d4ddbc01a679537b8f5368950"],["/categories/linux/linux知识/index.html","72b8b47a8f1fb80fde7ba203e257c103"],["/categories/linux/linux知识/命令介绍/index.html","4f572f6c307e41e9112c6398b53555d8"],["/categories/linux/linux知识/基本特性/index.html","56ded37603e11c19ebf532822ff223a8"],["/categories/linux/linux知识/系统文件/index.html","f1c7cd6be8411a94ed2abf4e099aefeb"],["/categories/linux/page/2/index.html","5b6ff4a7d1ba6a14c7491684d6dcba83"],["/categories/linux/ubuntu/index.html","21bf3559c28aa524d43bd6cd297d0a8b"],["/categories/web安全/index.html","4dd3ed7b5e18c09e89f5bf712c25f935"],["/categories/web安全/代码漏洞/index.html","6a59b3c013a402e315bb878bef6efcd5"],["/categories/web安全/代码漏洞/sql注入/index.html","580dad435f10fc61f49b43f7069e0b33"],["/categories/web安全/代码漏洞/xss跨站攻击/index.html","1db449075bb05b31edb8134e0bc616dc"],["/categories/web安全/基础协议/index.html","ae3389c637a193a1ee60344ea9f873c7"],["/categories/web安全/密码学/index.html","95fa03844d06efff998aafb9729f06b0"],["/categories/信息收集/index.html","e1cd3c5a483a5aa9413e1731b7f71f78"],["/categories/信息收集/web安全/index.html","2e3b15f5c7288fca35beead1b107e158"],["/categories/信息收集/web安全/嗅探/index.html","d285c5f9d462bdbd20f2321f775bd3ae"],["/categories/大数据/Java-Hadoop框架/index.html","3ba9b8f83634db04d24bfcf3dd9eee18"],["/categories/大数据/index.html","35840c223101840d39e2d29ea799e383"],["/categories/大数据/web爬虫/index.html","d6ad0f69803f010923568a951c99b42f"],["/categories/大数据/办公自动化/index.html","0aeb7adbbcb3a41b19f7456319d05c0e"],["/categories/大数据/数据可视化/index.html","9c5c6d509ec381430d676a8663728cfc"],["/categories/大数据/数据清洗/index.html","d6348e06ff30110a74b3aeb0a61e7cf4"],["/categories/编程语言/Java/index.html","720663828520ac34810de1ac74b4c72c"],["/categories/编程语言/index.html","163a7f587b193676b00421dba599b64d"],["/categories/编程语言/page/2/index.html","c6ec5f40357920b1006ae444d4c02203"],["/categories/编程语言/python/index.html","baf16a1793b8afd18bea3ea9201bffba"],["/categories/编程语言/python/基础/index.html","8c095bc4ff849f2107c88a2ac96cb112"],["/categories/编程语言/python/安装/index.html","172ec83a643563b7b2e427c0e3f4553a"],["/categories/编程语言/python/库介绍/index.html","ae947217d2cc49c3995e9809f00e61ab"],["/categories/编程语言/sql/index.html","6f52009f01131edaf674bf03e3711c73"],["/categories/编程语言/前端/css/index.html","55788d20a09752b86ffa82ac0490774f"],["/categories/编程语言/前端/html/index.html","6571510f932751fdb4b9b48852398238"],["/categories/编程语言/前端/index.html","58be356b1c5dc333474cb6ec83b19e60"],["/categories/编程语言/数据结构与算法/index.html","13085eb81bd8001bd29c83224830866b"],["/categories/网络嗅探/index.html","2404b4086eadd859d60c73c01d42cc72"],["/categories/网络嗅探/web安全/index.html","04492090457dbc88ff491da587ad18ad"],["/categories/网络嗅探/web安全/嗅探/index.html","6bb2b1ebdf053f8812b8a2ff34836c33"],["/css/index.css","44f93f0b39d6250bb015e0f36cd0a5df"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/img/153785156.png","59dfe52937ed8ad5f196bd8a741f036c"],["/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["/img/favicon.png","7a8c47cb5a2149c1a1af21e90ecd9ca7"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/img/images.jpg","ef6ab345674cab43c5b96a53ac90f561"],["/img/images.png","53a1608942dced2169cdeb95e1c1e271"],["/img/output.png","8057388b17b3a7410db8696a8d2261ee"],["/index.html","6c721f9a36ade05097d8cd54794ef55e"],["/js/main.js","960297fafacb19dff1246d71f6dfcf6f"],["/js/search/algolia.js","4491ac1d470a1693a502a9d09034aa21"],["/js/search/local-search.js","9da6b76672a143c8c8449770a8d259f3"],["/js/tw_cn.js","fb4da68124bbafbd2d3da537c80e27ce"],["/js/utils.js","420a15cf446b5670244a9ea05b2bccf0"],["/page/2/index.html","cb0a9474a276a00ceb3dc801d8a70e90"],["/page/3/index.html","d6d5be7580f236a71c6cfed9dac29101"],["/page/4/index.html","9777970b097342cd6d6a8bf252bb16eb"],["/page/5/index.html","248673217585f715c982bd723aa01e2d"],["/styles/fish-base.js","e37f93e48fca5f823ba549bf2703b79e"],["/styles/fish.js","7373738321ee0dee627a6ef8ec288272"],["/styles/main.css","000a2ac082ed534c4b8663ba7dc34d9b"],["/sw-register.js","288103f0db18671a156808d6b22de365"],["/tags/Linux学习/index.html","b26b5d7cc9791d5af1a2027e9b886899"],["/tags/centos/index.html","d97d4b7f05101a4f734b353263ca398e"],["/tags/index.html","86ce60b579b4c660bc3e8858ba273580"],["/tags/java/index.html","3eb2c82780cdffc6f00cc199a509f639"],["/tags/mysql/index.html","99325f924c48695ad616fc3946449a60"],["/tags/python/index.html","2fad5a15b0a3c0038360dbecae15f2b0"],["/tags/python库/index.html","caa2dd5dba70912f6452345ecea78f53"],["/tags/sql/index.html","1aded057fe22de2552ef7c5982438df4"],["/tags/ubuntu/index.html","2042227bcd5d5ba3c7447eee7d8004cb"],["/tags/web/index.html","0ff4dd05d79b0ff183adf9d73cf219b9"],["/tags/代码安全/index.html","90a8680d9bfc413f19a417c34f210351"],["/tags/办公自动化/index.html","3809aebb693cd7e498f1060feef65473"],["/tags/协议安全/index.html","43bc4a4f8a52c3ce0b24f7925195c208"],["/tags/大数据/index.html","8a9e71d765f7a8cf20e7a2ed0307ef47"],["/tags/大数据基础/index.html","1da154b92615a27aa35ea632ba82f3f0"],["/tags/安全/index.html","391a27673d8653f59f07ca19415462b4"],["/tags/数据可视化/index.html","7088e998ada889340132e2e6ddc2d167"],["/tags/数据清洗/index.html","a49493552cf3511103e26574b825a906"],["/tags/数据结构与算法/index.html","97112a15dfc22a867d070be7f6fb81e5"],["/tags/爬虫/index.html","c6bff05c8cfec3b5dccf9f2ed202b10f"]];
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
