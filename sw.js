/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2024/05/29/编程语言/python/库介绍/PYTHON-re/index.html","be2e7965321bd9508b8028f6c7b035db"],["/2024/05/29/编程语言/sql/sql-learning/index.html","e3461cc9087a07c66ce3eafec4541a58"],["/2024/05/29/编程语言/sql/sql-learning_1/index.html","8d5a41a8a86d44a21c685d01267f1d64"],["/2024/05/29/编程语言/sql/sql_learning_2/index.html","6c5e2af5056c6057f0def9cc679f1292"],["/2024/06/01/web安全/代码漏洞/sql注入/sql/index.html","43176b5e1ea57cf0eec2e31d488a5803"],["/2024/06/01/web安全/嗅探/web-basic/index.html","71dd50fffc2554dcf42b4a1208973d4d"],["/2024/06/01/web安全/嗅探/web/index.html","bdaf4c1bd6e6ad194c88283a678751bb"],["/2024/06/01/web安全/嗅探/wireshark/index.html","ccdf972d5d7aeab8b9dd688096f51c34"],["/2024/06/01/web安全/基础协议/DNS/index.html","567f28e6c43f2d417ad8fb4bfa4a94ea"],["/2024/06/01/web安全/基础协议/https/index.html","3054d834b65ac952e209de77abf56cc9"],["/2024/06/01/web安全/密码学/crypto/index.html","ed5d809284af9ddea8dd2577ef482027"],["/2024/06/01/web安全/密码学/passwd/index.html","05409bd55ea0aaa009e283813066e3c5"],["/2024/06/06/linux/linux知识/基本特性/bash/index.html","b48b3498f8f0b194b1433f0127cf1cad"],["/2024/06/06/linux/linux知识/系统文件/hosts/index.html","6d9cd9f0fccaf187c91bb6d974746c3f"],["/2024/06/09/linux/linux知识/命令介绍/linuxbasic-1/index.html","9d055e8b6d078945277f706a1f57595e"],["/2024/06/09/linux/linux知识/基本特性/permission/index.html","c19fd86370ed66608a3f89153aac841a"],["/2024/06/10/linux/linux知识/基本特性/shell/index.html","729b64ec8b0a42f561921b79d450cfa5"],["/2024/06/10/linux/linux知识/系统文件/profile/index.html","cb3f76b47c59064f347ef06fdef6088d"],["/2024/06/10/大数据/Java Hadoop框架/Hadoop/index.html","5b0dc5a7afebb7078bf072ec7b328c0b"],["/2024/06/10/大数据/web爬虫/beautifulsoup/index.html","ad97b5e21604142f1d78104fc94209b5"],["/2024/06/10/大数据/web爬虫/crawler/index.html","6a1d7dd9fde6318e66c646eee6942783"],["/2024/06/11/linux/linux知识/基本特性/path/index.html","87910c8cab5794e838870d8c99e82e52"],["/2024/06/11/linux/linux知识/系统文件/ssh/index.html","9c4fab99619d9a20f48574690e7b9388"],["/2024/06/12/linux/ubuntu/Ubuntu/index.html","0e7fbf81f52ae5f55bff35ed75f606a3"],["/2024/06/12/linux/ubuntu/ubuntubasic/index.html","e4e25b5c8e91de77358ace547678998a"],["/2024/06/12/大数据/办公自动化/excel/index.html","bb89ae9c19347a817e6f9b847311fff5"],["/2024/06/12/大数据/数据清洗/mysql-data/index.html","0825144dc5cb0dff42e14c91cb6348f3"],["/2024/06/12/编程语言/python/库介绍/Tkinter/index.html","5ad5d5d5942c3c7954c0df73cbec825f"],["/2024/06/13/大数据/数据可视化/pandas/index.html","755fac1a9ed24f25745d21abecf47d16"],["/2024/06/13/编程语言/python/基础/python class/index.html","e7125cd58fb65ec9a5153ca4021810c7"],["/2024/06/13/编程语言/python/基础/pythonbasic/index.html","65f83cc5f19cace5dbdc35714b4cf5e2"],["/2024/06/13/编程语言/python/基础/pythonstring/index.html","3432fbd1d71761efdd60f3298ced2cbd"],["/2024/06/13/编程语言/python/库介绍/Numpy/index.html","725349a4a5cf2f80e7d1b0d3570293ba"],["/2024/06/14/编程语言/python/基础/symbol/index.html","62230f7663632983dbdc7aa8774e361a"],["/2024/06/15/编程语言/Java/JAVAbasic/index.html","32fb3abda61a85470cefdacb01a8d6b7"],["/2024/06/15/编程语言/前端/css/css_basic/index.html","510994ccc36125da7b302973c496869a"],["/2024/06/15/编程语言/前端/html/html/index.html","afce01519120b08aef2ed29131b1c6eb"],["/2024/06/15/编程语言/数据结构与算法/Data Structures And Algorithms basic/index.html","57bb155eb9c68c772b87d8208d1a550d"],["/2024/06/22/linux/linux知识/命令介绍/linuxbasic-2/index.html","4561863bbd55bdf4013ba7b8abb0cbe6"],["/2024/06/22/linux/linux知识/系统文件/proc/index.html","fb4163ed2400ab1d4183355fc77561ab"],["/2024/06/27/linux/centos/firewalld/index.html","7d74520ccb9080d1fdf149965cbda026"],["/2024/06/30/编程语言/python/安装/python_download/index.html","ce9d11f8d8bd21131b46cf6ddfa3b688"],["/2024/07/11/大数据/数据可视化/matplotlib/index.html","45d8d1eb4e742380d540e21f6613dbee"],["/2024/07/17/web安全/代码漏洞/xss跨站攻击/daima/index.html","0e81a4b7fbb8ae3451abe0987a94b239"],["/archives/2024/05/index.html","81a90d9b03cdbedb25db87e190b9ef61"],["/archives/2024/06/index.html","326286ef3cb9d4ce81b8da51c6ef4b28"],["/archives/2024/06/page/2/index.html","9d3dd54a64fa172ae776d8d477d6faa4"],["/archives/2024/06/page/3/index.html","f383d85683634293b3a793ab26446f0b"],["/archives/2024/06/page/4/index.html","db081288bba1c9b6899f4288ad466ac2"],["/archives/2024/07/index.html","f354b9c84a903d3d0aa90d3ee82ab71c"],["/archives/2024/index.html","932f753dd74aef2568fbf056d31eca91"],["/archives/2024/page/2/index.html","a2b68e74ed5abcc758b0a1b0fc5bcd35"],["/archives/2024/page/3/index.html","f316a8ab6dc76128e9f3f8d64ae5b4c5"],["/archives/2024/page/4/index.html","56694058103fe0e0017aeb44b4ced605"],["/archives/2024/page/5/index.html","1e26cfcf038b0a012ff9b311e8989019"],["/archives/index.html","56f4a3d42d1bcc746e0b632fe405da5b"],["/archives/page/2/index.html","55cb2cdff74fd68a25030f31987381f8"],["/archives/page/3/index.html","f4e1091680cb47816e886190217f8075"],["/archives/page/4/index.html","baac96d63eb654597fce64eeed089a3a"],["/archives/page/5/index.html","99944f9f6c971390db69681627d3cc86"],["/categories/index.html","2a16b741f6658087513fdee3f91033ce"],["/categories/linux/centos/index.html","73a7cca3c191e309d9f68c1538edfc68"],["/categories/linux/index.html","04b98ae39e1b6bd38e89c71af757a3f1"],["/categories/linux/linux知识/index.html","52386fc89f5ca7f4162c6dce44097476"],["/categories/linux/linux知识/命令介绍/index.html","5d82a4c1c91ef7417890bce333bd8497"],["/categories/linux/linux知识/基本特性/index.html","0748dfe9cebad69bab5be01ce9990701"],["/categories/linux/linux知识/系统文件/index.html","7344cc9261c80474b9a5abbd61f877d5"],["/categories/linux/page/2/index.html","b25fceb59bd40f5ac7647e79bde65197"],["/categories/linux/ubuntu/index.html","7cc8d9b33c54dd4c5ab27b3a8a90de10"],["/categories/web安全/index.html","b031069ef43d350794753bd6cf00669f"],["/categories/web安全/代码漏洞/index.html","73339d6ec383a52667b3861f483f02a9"],["/categories/web安全/代码漏洞/sql注入/index.html","fb8c96eac456ba888170887c547e3ad6"],["/categories/web安全/代码漏洞/xss跨站攻击/index.html","15747fac0ddf75a85217f4af42a5edd0"],["/categories/web安全/基础协议/index.html","41e70f767c73ee633f4ed2edaa4abc90"],["/categories/web安全/密码学/index.html","a9d86dd1291194ea92c0e70680cf36c0"],["/categories/信息收集/index.html","d344a8fe15f7011129dc59ffb110cb6f"],["/categories/信息收集/web安全/index.html","aad44464de32e61c1e60391a27f17de2"],["/categories/信息收集/web安全/嗅探/index.html","bbe877fb8f9014e1f93e2499814261ed"],["/categories/大数据/Java-Hadoop框架/index.html","47f414c54d615a01dda1ca31e96bd002"],["/categories/大数据/index.html","f205569c29324febd9a1416945b1e483"],["/categories/大数据/web爬虫/index.html","9890dd0f62988218a2053bc76185d1a3"],["/categories/大数据/办公自动化/index.html","9f513f1329569ecb284cf15edc5d87bd"],["/categories/大数据/数据可视化/index.html","1d50c383233f1bccc90bf51ebddc1808"],["/categories/大数据/数据清洗/index.html","2d3617f4c30bab536a97a429e1f8d56e"],["/categories/编程语言/Java/index.html","e07bb44515699dece63d0c219cecc1ce"],["/categories/编程语言/index.html","5c755cc7a78ce3abb6785d9f05574ba0"],["/categories/编程语言/page/2/index.html","fec2a69010a8bb947c5601a410bab5ba"],["/categories/编程语言/python/index.html","7e25fe30e59c3c5a6a7a00d8c00fcffa"],["/categories/编程语言/python/基础/index.html","bcc3d74c4f43e6559279182e48ef5cc2"],["/categories/编程语言/python/安装/index.html","640d1fa5fc7cb955f1aa2c9cee6dc047"],["/categories/编程语言/python/库介绍/index.html","0a85d73f0fa20543b99a06936bc9eb70"],["/categories/编程语言/sql/index.html","3a978adc3c82ffb1b8d0a651dfe6f8d4"],["/categories/编程语言/前端/css/index.html","3dffedb8848c8a0551eac5cd9648e84c"],["/categories/编程语言/前端/html/index.html","064e141db45941be83b28e0b0fef3e23"],["/categories/编程语言/前端/index.html","581820e041f720d894aa2caaec1263ac"],["/categories/编程语言/数据结构与算法/index.html","ce9a9efd8808dbd4cf13155a45c7f6e8"],["/categories/网络嗅探/index.html","78e0536f847d6a911b7b436fccddcf70"],["/categories/网络嗅探/web安全/index.html","cd75b797c766851f00c91c178db5af65"],["/categories/网络嗅探/web安全/嗅探/index.html","74b2391d5212b8ec077c4dad28ccb132"],["/css/index.css","44f93f0b39d6250bb015e0f36cd0a5df"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/img/153785156.png","59dfe52937ed8ad5f196bd8a741f036c"],["/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["/img/favicon.png","7a8c47cb5a2149c1a1af21e90ecd9ca7"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/img/images.jpg","ef6ab345674cab43c5b96a53ac90f561"],["/img/images.png","53a1608942dced2169cdeb95e1c1e271"],["/img/output.png","8057388b17b3a7410db8696a8d2261ee"],["/index.html","9081a11fb4ed82f47e997d41a876f8e2"],["/js/main.js","960297fafacb19dff1246d71f6dfcf6f"],["/js/search/algolia.js","4491ac1d470a1693a502a9d09034aa21"],["/js/search/local-search.js","9da6b76672a143c8c8449770a8d259f3"],["/js/tw_cn.js","fb4da68124bbafbd2d3da537c80e27ce"],["/js/utils.js","420a15cf446b5670244a9ea05b2bccf0"],["/page/2/index.html","fd193b3d54c64ccdbb828a764716974f"],["/page/3/index.html","8f81a2a866d419120b2eed88c24f64fc"],["/page/4/index.html","da70c4de60100dd3334461a77c3e4af4"],["/page/5/index.html","6901d834e1078c6381a96b2b27481c22"],["/styles/fish-base.js","e37f93e48fca5f823ba549bf2703b79e"],["/styles/fish.js","7373738321ee0dee627a6ef8ec288272"],["/styles/main.css","000a2ac082ed534c4b8663ba7dc34d9b"],["/sw-register.js","e63acdc47eb7ed841a9026764f2b6375"],["/tags/Linux学习/index.html","cc9617ddfafa6318917aade7dcf97745"],["/tags/centos/index.html","902b94517a81f66e1f971bbe5c67d05c"],["/tags/index.html","332bf30d1cced412df1cde0ac31ab28b"],["/tags/java/index.html","bbdf63020ab3470f1010aefb2cdd0e06"],["/tags/mysql/index.html","8015aa0b430b97f291c1f83bee371004"],["/tags/python/index.html","d192917b64c1bb5e5b901de1d42b232b"],["/tags/python库/index.html","fbe9b4ecc2fa2af49e8f8b29f325171b"],["/tags/sql/index.html","9123e9e6af2df8b82b5725ab65a5def6"],["/tags/ubuntu/index.html","d5b5439c6356e1c1327cf8fbe7052e14"],["/tags/web/index.html","ceaa294b9b26833a78923805933b5725"],["/tags/代码安全/index.html","c3b12d415b4ef99324effc6e91c4f45a"],["/tags/办公自动化/index.html","5543d82647167e36cfe453d8aff513fe"],["/tags/协议安全/index.html","c5bdb117a22764e8fa20db6976cb5651"],["/tags/大数据/index.html","6b20d63347663900c9053cfecba6cf13"],["/tags/大数据基础/index.html","d4da40aa128dafd9c331a7e481280ac3"],["/tags/安全/index.html","4c088b47038ae37deb6fcb82c1c4d206"],["/tags/数据可视化/index.html","9deac997bb54a2855c34a19fbd68ad6b"],["/tags/数据清洗/index.html","9c1d8d573b016716ccaef1a56781f1e6"],["/tags/数据结构与算法/index.html","b959e2339526d59e0a7e125482bc55ad"],["/tags/爬虫/index.html","929e15d69fd7007fb41f1ad163a57c1e"]];
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
