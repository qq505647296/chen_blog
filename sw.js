/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2024/06/06/bash/index.html","3aeb02923132ee7eefd5c67f005d12b2"],["/2024/06/06/hosts/index.html","8e2c1f5437a7aa7421e3c8ca6374c009"],["/2024/06/09/linuxbasic-1/index.html","0c775e15550b60c6affade8cd11f6181"],["/2024/06/09/permission/index.html","3d8948ae28725e1487958da41934801a"],["/2024/06/10/profile/index.html","28107186f4078f1a75705ec8d2732806"],["/2024/06/10/shell/index.html","e647cae9fadd3164ce337d0af08a58a8"],["/2024/06/11/path/index.html","38ad09c472d10a23d53855afac32fda8"],["/2024/06/11/ssh/index.html","a3eed477f0a21ae6dc6e9a1c54e0eff6"],["/2024/06/12/Ubuntu/index.html","2cd587528fa13ea12c392cf8e96a4f35"],["/2024/06/12/ubuntubasic/index.html","347b78a9d9a7bcd233266d6b3346073a"],["/2024/06/22/linuxbasic-2/index.html","9a175edde11342f3fa8e18d4157b6753"],["/2024/06/22/proc/index.html","c82968cbb9c20b2f3be2e2137d72f2a6"],["/2024/06/27/firewalld/index.html","4e95c3211da5540a32c90df1bf869c39"],["/archives/2024/06/index.html","1c2b553486deb44aa212d468a819f039"],["/archives/2024/06/page/2/index.html","b8931db5949b891460e64968f2d75227"],["/archives/2024/index.html","66180f5c3096d10ba3659acc8b03c059"],["/archives/2024/page/2/index.html","a5ac93d3b77cc8d334616e27c98b90ee"],["/archives/index.html","4b1e144c24f852a01ccc9d2052657c85"],["/archives/page/2/index.html","2f0c65d9c85f37ef79e2ae2cd1b85162"],["/categories/index.html","497704f1fd867105a6902adb00471239"],["/categories/linux学习/bash基础/index.html","44bf4fb3a6c3d456942a5237f8ee2aab"],["/categories/linux学习/index.html","5da84620117ff4e98e25489363f04f96"],["/categories/linux通用命令/index.html","c26b0d94b2d8d564543898ae4665af90"],["/categories/shell/index.html","8cbca89b64d67413a2d38f7efa9d31c9"],["/categories/ubuntu-命令/index.html","0fcb0958cc24825c8885f3487cdf583e"],["/categories/协议/index.html","e7a0866ceb0be55da3398a76949cbcc7"],["/categories/协议/文件介绍/index.html","67ff033d984a294bbb0d7dd5ca1d7b0a"],["/categories/基础/index.html","4aa470ee08a98203ec9c027f00fff2a3"],["/categories/基础/概念/index.html","9d4600c1c19cbb17eb7cc5aef86e6604"],["/categories/基础配置/index.html","f2afac7cde20eca7539fa7dec17ba199"],["/categories/基础配置/文件介绍/index.html","993f6849b1dccc625f2f6ba43215509a"],["/categories/基础配置/目录介绍/index.html","b9564b5efdee3c4edd831b8791be55ae"],["/categories/基础配置/管理配置/index.html","c06e670c0db907f31b6b1652756ac5cf"],["/css/fonts/icomoon.eot","652914bf9eb51ff458c3ca4ec406fe18"],["/css/fonts/icomoon.svg","22cbc6389da8d37fda8632c0d1121ff2"],["/css/fonts/icomoon.ttf","b9a83499ca3f941b2bb10f56d1b221a1"],["/css/fonts/icomoon.woff","9feb50ceffe68e1d5e030e8a464df854"],["/css/fonts/iconfont.eot","acf7a4f1503631a57b3b6299ba294544"],["/css/fonts/iconfont.svg","418fa80a399aa2dafac9bbbcd28b7c20"],["/css/fonts/iconfont.ttf","8440693fa1d6ef53e932b6d14fde6226"],["/css/fonts/iconfont.woff","d64c095df1c3e81507c05264f5fdd44b"],["/css/gitalk.css","095619498dc3d1e43e5c663a763f6341"],["/css/hl_theme/atom-dark.css","f35cb13d234290992cc4335ba49ed606"],["/css/hl_theme/atom-light.css","f945b47635b91ef043dd16c0b7b1b6e9"],["/css/hl_theme/brown-paper.css","01c61ded59552ec6aeacf79c5d07bbc6"],["/css/hl_theme/darcula.css","a5ea8b21e9208f074f1496fcbbce5e1f"],["/css/hl_theme/github-gist.css","05e43d5ebd7736615648f693928fa718"],["/css/hl_theme/github.css","477524a3765600bcd46a1ccce0a2dd82"],["/css/hl_theme/gruvbox-dark.css","f557961203bb996648744e7b0ca74b00"],["/css/hl_theme/gruvbox-light.css","86337fabc300ddd9fb28b5527282b7fa"],["/css/hl_theme/kimbie-dark.css","b994f574de77d06d6c1e5d7af399f533"],["/css/hl_theme/kimbie-light.css","2a2ca521450fcfecc9d43689010dea99"],["/css/hl_theme/railscasts.css","5e5d360b3a2fb190d18b84fe69713fde"],["/css/hl_theme/rainbow.css","8daeb4fbc93a86603e3dd60419be7abe"],["/css/hl_theme/school-book.css","ded70315efe7a0396a6ead156bc4032c"],["/css/hl_theme/sublime.css","c58ed1627a16672d1a9732044832d0c6"],["/css/hl_theme/sunburst.css","87c5cb1562ecfd5f6f6c7fa1d044421e"],["/css/hl_theme/zenbum.css","67cc6ec897305439616743f148967457"],["/css/index.css","44f93f0b39d6250bb015e0f36cd0a5df"],["/css/mobile.css","f95994bc8f3321a00ab84488d55b2ce9"],["/css/style.css","8ea3dc9c2d5765760bd5cbdb35736a78"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["/img/avatar.jpg","5986bdbf5985f20b1fec5c8a2d384e68"],["/img/brown-papersq.png","82cd9f5d6e9f0e3f3de24eaab6671d88"],["/img/favicon.png","7a8c47cb5a2149c1a1af21e90ecd9ca7"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/img/gov.png","37975a3be8087f62933f7aa3e7e80d12"],["/img/output.png","8057388b17b3a7410db8696a8d2261ee"],["/img/school-book.png","069f91d8694b98ca01fb750760f1563d"],["/index.html","f84694ab07747a28ab3c88a854288687"],["/js/gitalk.js","2dfdde371bea62d236e6fe84324a9e45"],["/js/gitment.js","9bb7854331f1c12b27f98680b660ba8d"],["/js/iconfont.js","a7cc2bd06cfcd312e119304b88863817"],["/js/jquery.pjax.js","3aa85c90af348ab53ffc252ce2c0c193"],["/js/main.js","960297fafacb19dff1246d71f6dfcf6f"],["/js/script.js","11d09ea78c5c93bc075e982e30882773"],["/js/search.js","33048831dd1330b3f98a6d72b19ca425"],["/js/search/algolia.js","4491ac1d470a1693a502a9d09034aa21"],["/js/search/local-search.js","9da6b76672a143c8c8449770a8d259f3"],["/js/titleTip.js","32fa751df09b886f5af979798e2e7b0e"],["/js/tw_cn.js","fb4da68124bbafbd2d3da537c80e27ce"],["/js/utils.js","420a15cf446b5670244a9ea05b2bccf0"],["/page/2/index.html","215f5d8eb96220667ac85091a84dc4a6"],["/styles/fish-base.js","e37f93e48fca5f823ba549bf2703b79e"],["/styles/fish.js","7373738321ee0dee627a6ef8ec288272"],["/styles/main.css","000a2ac082ed534c4b8663ba7dc34d9b"],["/sw-register.js","5469cedb5dcc19290f5fee5ef3b0c079"],["/tags/Linux学习/index.html","84b4e178bbdbf54cbf33c33006172e5d"],["/tags/Linux学习/page/2/index.html","e5b76405a74479498776ede86ba2c22b"],["/tags/index.html","e7236f48dc0c93517c1782be79762891"]];
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
