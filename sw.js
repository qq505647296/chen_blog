/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2024/06/06/bash/index.html","1fd4dc41fc07cbdf6cdcc1a5ddbc3d11"],["/2024/06/06/hosts/index.html","145ac277dd0e1b9f903faf0b4b41c8fc"],["/2024/06/09/linuxbasic-1/index.html","70508c26c7e27d1461aef98ba3e17620"],["/2024/06/09/permission/index.html","f504713bf3ebcc0678afad9d0faa1c0a"],["/2024/06/10/profile/index.html","77a34ce9cedd1662bf6e4953c5dac9c5"],["/2024/06/10/shell/index.html","85192c21a61ff6ed7ae85d1e4cc06c02"],["/2024/06/11/path/index.html","b55332a84bd23d9d850ed0e5104edca1"],["/2024/06/11/ssh/index.html","5d0a51a54de8ac79fb4cd5a6472a62cc"],["/2024/06/12/Ubuntu/index.html","f1ce77a5d007e5b18b61558d3b8626a6"],["/2024/06/12/ubuntubasic/index.html","e9306f78e55cd87f641792dcf175ac61"],["/2024/06/22/linuxbasic-2/index.html","5ef5e9cae5823d830d146f424279af21"],["/2024/06/22/proc/index.html","1cd75031edcf895853d8d8c94d8bd843"],["/2024/06/27/firewalld/index.html","5c1ae459633eaa6c76c3fbfc71e0ad89"],["/archives/2024/06/index.html","dd4e035e414f3fd894aba26e1f48274e"],["/archives/2024/06/page/2/index.html","743a1cf563e8322d75e730b58c0bb836"],["/archives/2024/index.html","400d08531d65937ea36b1d76bbf5b6c3"],["/archives/2024/page/2/index.html","0613cbecf2a48e4366f5a18d1870b4b8"],["/archives/index.html","df8f6d6ea745379edd213b27631c44ce"],["/archives/page/2/index.html","0952b5547b0228fd0f5c6f52598650b6"],["/categories/index.html","da101a2dc5353e9caf1e3595f37391e8"],["/categories/linux学习/bash基础/index.html","182b6e153568e0d48039fbe3de835f35"],["/categories/linux学习/index.html","3c825fb5da864ca8a3efe4de29588a43"],["/categories/linux通用命令/index.html","c330fc8430f5c23f023df0e4d5545648"],["/categories/shell/index.html","a195862c8a6ed710d3093fd01176cc01"],["/categories/ubuntu-命令/index.html","dd58ee9bbdf556f65aa52ad295346518"],["/categories/协议/index.html","4033886f4ad31b261d5f7d28bac52476"],["/categories/协议/文件介绍/index.html","1ce83caeecd93e38818e17cfe89d69c0"],["/categories/基础/index.html","82151144af89e7a039a2e49f260f0b8a"],["/categories/基础/概念/index.html","16f254991d54bf97757a14e9bd8670d1"],["/categories/基础配置/index.html","510d408ddd6b858470d190c0bfea9937"],["/categories/基础配置/文件介绍/index.html","032312ef8c52e2f455d52e4acd346c79"],["/categories/基础配置/目录介绍/index.html","8f4a5ea676c79913ae96a635074fe6eb"],["/categories/基础配置/管理配置/index.html","2347e1f9f4e5c19a86fa0eb44c7f70db"],["/css/fonts/icomoon.eot","652914bf9eb51ff458c3ca4ec406fe18"],["/css/fonts/icomoon.svg","22cbc6389da8d37fda8632c0d1121ff2"],["/css/fonts/icomoon.ttf","b9a83499ca3f941b2bb10f56d1b221a1"],["/css/fonts/icomoon.woff","9feb50ceffe68e1d5e030e8a464df854"],["/css/fonts/iconfont.eot","acf7a4f1503631a57b3b6299ba294544"],["/css/fonts/iconfont.svg","418fa80a399aa2dafac9bbbcd28b7c20"],["/css/fonts/iconfont.ttf","8440693fa1d6ef53e932b6d14fde6226"],["/css/fonts/iconfont.woff","d64c095df1c3e81507c05264f5fdd44b"],["/css/gitalk.css","095619498dc3d1e43e5c663a763f6341"],["/css/hl_theme/atom-dark.css","f35cb13d234290992cc4335ba49ed606"],["/css/hl_theme/atom-light.css","f945b47635b91ef043dd16c0b7b1b6e9"],["/css/hl_theme/brown-paper.css","01c61ded59552ec6aeacf79c5d07bbc6"],["/css/hl_theme/darcula.css","a5ea8b21e9208f074f1496fcbbce5e1f"],["/css/hl_theme/github-gist.css","05e43d5ebd7736615648f693928fa718"],["/css/hl_theme/github.css","477524a3765600bcd46a1ccce0a2dd82"],["/css/hl_theme/gruvbox-dark.css","f557961203bb996648744e7b0ca74b00"],["/css/hl_theme/gruvbox-light.css","86337fabc300ddd9fb28b5527282b7fa"],["/css/hl_theme/kimbie-dark.css","b994f574de77d06d6c1e5d7af399f533"],["/css/hl_theme/kimbie-light.css","2a2ca521450fcfecc9d43689010dea99"],["/css/hl_theme/railscasts.css","5e5d360b3a2fb190d18b84fe69713fde"],["/css/hl_theme/rainbow.css","8daeb4fbc93a86603e3dd60419be7abe"],["/css/hl_theme/school-book.css","ded70315efe7a0396a6ead156bc4032c"],["/css/hl_theme/sublime.css","c58ed1627a16672d1a9732044832d0c6"],["/css/hl_theme/sunburst.css","87c5cb1562ecfd5f6f6c7fa1d044421e"],["/css/hl_theme/zenbum.css","67cc6ec897305439616743f148967457"],["/css/index.css","44f93f0b39d6250bb015e0f36cd0a5df"],["/css/mobile.css","f95994bc8f3321a00ab84488d55b2ce9"],["/css/style.css","8ea3dc9c2d5765760bd5cbdb35736a78"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["/img/avatar.jpg","5986bdbf5985f20b1fec5c8a2d384e68"],["/img/brown-papersq.png","82cd9f5d6e9f0e3f3de24eaab6671d88"],["/img/favicon.png","7a8c47cb5a2149c1a1af21e90ecd9ca7"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/img/gov.png","37975a3be8087f62933f7aa3e7e80d12"],["/img/output.png","8057388b17b3a7410db8696a8d2261ee"],["/img/school-book.png","069f91d8694b98ca01fb750760f1563d"],["/index.html","3ad236b9336184d2fc33b7dceb815a6d"],["/js/gitalk.js","2dfdde371bea62d236e6fe84324a9e45"],["/js/gitment.js","9bb7854331f1c12b27f98680b660ba8d"],["/js/iconfont.js","a7cc2bd06cfcd312e119304b88863817"],["/js/jquery.pjax.js","3aa85c90af348ab53ffc252ce2c0c193"],["/js/main.js","960297fafacb19dff1246d71f6dfcf6f"],["/js/script.js","11d09ea78c5c93bc075e982e30882773"],["/js/search.js","33048831dd1330b3f98a6d72b19ca425"],["/js/search/algolia.js","4491ac1d470a1693a502a9d09034aa21"],["/js/search/local-search.js","9da6b76672a143c8c8449770a8d259f3"],["/js/titleTip.js","32fa751df09b886f5af979798e2e7b0e"],["/js/tw_cn.js","fb4da68124bbafbd2d3da537c80e27ce"],["/js/utils.js","420a15cf446b5670244a9ea05b2bccf0"],["/page/2/index.html","cee5a59203946e4fcfc1184f84da0209"],["/styles/fish-base.js","e37f93e48fca5f823ba549bf2703b79e"],["/styles/fish.js","7373738321ee0dee627a6ef8ec288272"],["/styles/main.css","000a2ac082ed534c4b8663ba7dc34d9b"],["/sw-register.js","2c00718522847c78a5a653bc8b7e30d4"],["/tags/Linux学习/index.html","d31266c3cda914f84ed7f93212b89245"],["/tags/Linux学习/page/2/index.html","a38cf491bf4896c96fe519bc26dadf5a"],["/tags/index.html","b4e714186cd7f42049ae6c3d6c81ab0c"]];
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
