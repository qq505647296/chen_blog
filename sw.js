/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2024/05/29/编程语言/python/库介绍/PYTHON-re/index.html","42e17b2bd6e00e89da8f6782e184084e"],["/2024/05/29/编程语言/sql/sql-learning/index.html","31079e9eb6410b9c98b6955e0c9b1b91"],["/2024/05/29/编程语言/sql/sql-learning_1/index.html","14dde25b317e81ae2855100db0d2c2f9"],["/2024/05/29/编程语言/sql/sql_learning_2/index.html","ca1d87c91552c0ef212db5f36541bf50"],["/2024/06/01/web安全/代码漏洞/sql注入/sql/index.html","e6b5e4fade045c9453bb01a7af93e297"],["/2024/06/01/web安全/嗅探/web-basic/index.html","aac628cae26bdad5cbabec39dbb05c73"],["/2024/06/01/web安全/嗅探/web/index.html","30d2f16410bbe06ddac24d89362c4105"],["/2024/06/01/web安全/嗅探/wireshark/index.html","e4699bcb53e8678a7b66ac2af7d3c4c4"],["/2024/06/01/web安全/基础协议/DNS/index.html","621930c41c0ee8bbe3c6f0aedac1e4af"],["/2024/06/01/web安全/基础协议/https/index.html","add219b4837bfbca2f3acf39872cb58c"],["/2024/06/01/web安全/密码学/crypto/index.html","3ed8575e0c3ac0cdf521ba46c55c7038"],["/2024/06/01/web安全/密码学/passwd/index.html","5961c236b3017f81143a510fe317b5cb"],["/2024/06/06/linux/linux知识/基本特性/bash/index.html","98ff60d37d6aedada26a8f6a75ca3c04"],["/2024/06/06/linux/linux知识/系统文件/hosts/index.html","3403b8defeaaca139511ce17ae26de4c"],["/2024/06/09/linux/linux知识/命令介绍/linuxbasic-1/index.html","ebea0c5c54fb298fae877e1795d4101e"],["/2024/06/09/linux/linux知识/基本特性/permission/index.html","4f9e04c1dd3ba513ab8366efdc6f6414"],["/2024/06/10/linux/linux知识/基本特性/shell/index.html","c80363f5b6c50ed8481e2d7f16f88696"],["/2024/06/10/linux/linux知识/系统文件/profile/index.html","7c834ac9c55263b1a8c9c1bffb21e810"],["/2024/06/10/大数据/Java Hadoop框架/Hadoop/index.html","3d910997f1c20abc0ad43cf7c0d1cd0f"],["/2024/06/10/大数据/web爬虫/beautifulsoup/index.html","0cbfdafcf8a361804ff840b66ad3ef4f"],["/2024/06/10/大数据/web爬虫/crawler/index.html","550357e56299331399cf4851cb57a31c"],["/2024/06/11/linux/linux知识/基本特性/path/index.html","27c75976bc87ec485c9f551de32f2c27"],["/2024/06/11/linux/linux知识/系统文件/ssh/index.html","acd20c31160cba3a951479e290a1ba59"],["/2024/06/12/linux/ubuntu/Ubuntu/index.html","4ff56265f9fe1c8349ec692093b1540a"],["/2024/06/12/linux/ubuntu/ubuntubasic/index.html","439c44fa1da241114be93bb136cfc244"],["/2024/06/12/大数据/办公自动化/excel/index.html","4a0d9ce34e19ce7aabb4179b49b4bb05"],["/2024/06/12/大数据/数据清洗/mysql-data/index.html","de615c2d9e5ba313044e3ae15a7981c0"],["/2024/06/12/编程语言/python/库介绍/Tkinter/index.html","11006e88688431c0d0418c32883c2246"],["/2024/06/13/大数据/数据可视化/pandas/index.html","a9981d3ed1135a5e660f656329f0c053"],["/2024/06/13/编程语言/python/基础/python class/index.html","c9dd51a1c96fa2fde356d7c8e7f5f758"],["/2024/06/13/编程语言/python/基础/pythonbasic/index.html","1515165e42458549b94f0c3f654771d1"],["/2024/06/13/编程语言/python/基础/pythonstring/index.html","2ca71faeedbefeba30079ed50d847b7f"],["/2024/06/13/编程语言/python/库介绍/Numpy/index.html","cb696ea84e1a760feb9fc5df78861257"],["/2024/06/14/编程语言/python/基础/symbol/index.html","b416b6f384692119eb37882057dbc12a"],["/2024/06/15/编程语言/Java/JAVAbasic/index.html","957628d060c07b2091d266e2c8c45c1b"],["/2024/06/15/编程语言/前端/css/css_basic/index.html","08b37ccc7261584ce0c775979f9129cd"],["/2024/06/15/编程语言/前端/html/html/index.html","3ef45c5cdc1193e313a5a206f5c3b038"],["/2024/06/15/编程语言/数据结构与算法/Data Structures And Algorithms basic/index.html","bdfb095d71262b217ee4b62b9fd9b124"],["/2024/06/22/linux/linux知识/命令介绍/linuxbasic-2/index.html","3639175b36b43caf1f66693dffc67090"],["/2024/06/22/linux/linux知识/系统文件/proc/index.html","e3e2d9953708612ffdd6e36a73ed4471"],["/2024/06/27/linux/centos/firewalld/index.html","05fda97af9e49528b64027a08464cbc1"],["/2024/06/30/编程语言/python/安装/python_download/index.html","db82d7f570bb8176ad40f35f90d8fab9"],["/2024/07/11/大数据/数据可视化/matplotlib/index.html","fa2b814d20081a0d63ce2417f38323ed"],["/2024/07/17/web安全/代码漏洞/xss跨站攻击/daima/index.html","909e10a23cc31ec25e1c6242a92bff9f"],["/archives/2024/05/index.html","1537dfbcd6416c1d18bd369d5e54e0cd"],["/archives/2024/06/index.html","a687a05eb95d6af50731d49da10e955c"],["/archives/2024/06/page/2/index.html","84c824656324931b41cc1392300a7a0c"],["/archives/2024/06/page/3/index.html","a5ff2df277b44601a1379e63133978dc"],["/archives/2024/06/page/4/index.html","09d66b0ddf020584038b2d848e5b5734"],["/archives/2024/07/index.html","686ad58ed3f9aa776fc66ee50c9e910c"],["/archives/2024/index.html","6497786c2e358d1c4555b9d1241e6b8e"],["/archives/2024/page/2/index.html","426415aeb30c891195c89832ffbb06a8"],["/archives/2024/page/3/index.html","d33bf4603cf5995a3ea713fdda4fe2a9"],["/archives/2024/page/4/index.html","e738de128d0c6377914010147e5a9be7"],["/archives/2024/page/5/index.html","b4af2c9aa470b3e1a1cf51115fdfdbe6"],["/archives/index.html","2c8558d134e503b7b3571424e635316b"],["/archives/page/2/index.html","f3667178baafb573d67df1bc5d72c9c6"],["/archives/page/3/index.html","e695e8fc59f43cd2412b9fa8762c83ec"],["/archives/page/4/index.html","22b3a4dcfe5cf9f943af65cc32d8cda0"],["/archives/page/5/index.html","8ebdab4fe228bc6e871eab46e8628543"],["/categories/index.html","c2986c85c805392f57bf416972df529c"],["/categories/linux/centos/index.html","e7cd500fc49c64c104e88ff0499ff06a"],["/categories/linux/index.html","bbff3bcc390cc2f73e35b634b23c6238"],["/categories/linux/linux知识/index.html","b53933b4ee043eea3468349e4f9c2fa5"],["/categories/linux/linux知识/命令介绍/index.html","6604990cfea13b773426d189243a9172"],["/categories/linux/linux知识/基本特性/index.html","b30caf4342806ec15cfb930ec0b24397"],["/categories/linux/linux知识/系统文件/index.html","f79a6084288001410e52c71853ea3c56"],["/categories/linux/page/2/index.html","295de945eb0a8a151435b814957b5f51"],["/categories/linux/ubuntu/index.html","61ac40c43daf1cd87c0a28854fcb398e"],["/categories/web安全/index.html","1fb029a295ee3e78370ee2b1ae6436a3"],["/categories/web安全/代码漏洞/index.html","3a20c82624967233d3029e876d51ec1a"],["/categories/web安全/代码漏洞/sql注入/index.html","d3340b9a7ca7270fde8d16d05d4a0a8b"],["/categories/web安全/代码漏洞/xss跨站攻击/index.html","818176493e78d4b5752de31d136f1c87"],["/categories/web安全/基础协议/index.html","f98b9c9b3d526715766f17b630418219"],["/categories/web安全/密码学/index.html","b5d818e64cb7d1a8c3f39e1546eed80a"],["/categories/信息收集/index.html","4faca096fd6bf6f0e8d991b5c64e9faa"],["/categories/信息收集/web安全/index.html","5479a48ae7ba09c0929d1497bfa8c370"],["/categories/信息收集/web安全/嗅探/index.html","78013a89dec667884ae550d3dc9313fd"],["/categories/大数据/Java-Hadoop框架/index.html","4f7e7e92a60f9590bf54e609a9423d6a"],["/categories/大数据/index.html","2e7eac7add47a31f76d725b38f8d8f86"],["/categories/大数据/web爬虫/index.html","d0e21bc5ca3525dc1e92c607fd2b527f"],["/categories/大数据/办公自动化/index.html","f3e910c5d189bd7c08b98afb52769ee0"],["/categories/大数据/数据可视化/index.html","ecbb2cfb0e31fc19f5808e7652f3caf8"],["/categories/大数据/数据清洗/index.html","ce22da4faa5f31f83555f89110633eec"],["/categories/编程语言/Java/index.html","32d5c69d9efffee4a17691026007c047"],["/categories/编程语言/index.html","cfaab1dd129c4dc40d76089f1926272c"],["/categories/编程语言/page/2/index.html","f50c83e9ba2ee48472eac2666dc04cd6"],["/categories/编程语言/python/index.html","7236705b01458486e183e3317e53a900"],["/categories/编程语言/python/基础/index.html","3c96c848ff2a3169f2149d9fdb262666"],["/categories/编程语言/python/安装/index.html","1ed2c5220b81ead8921b58f697d47596"],["/categories/编程语言/python/库介绍/index.html","f3a1fdf0c6e0316152005e9078085070"],["/categories/编程语言/sql/index.html","6b869d322d449bda7d8545ecb26e464a"],["/categories/编程语言/前端/css/index.html","43553cf54235961be3d5406c4dffc7bf"],["/categories/编程语言/前端/html/index.html","cec0c5da2162dc599a1858388a5813af"],["/categories/编程语言/前端/index.html","5705165f0f5588d3d3eb6aac4bef9195"],["/categories/编程语言/数据结构与算法/index.html","bdeee99546d5820e8b317f8e7e62c338"],["/categories/网络嗅探/index.html","15af36f35cf86eefde4e52a0a2141516"],["/categories/网络嗅探/web安全/index.html","955a77c296272bbcfe926cced6266775"],["/categories/网络嗅探/web安全/嗅探/index.html","9c8b8c09229b56249aa6e2c6feb32230"],["/css/index.css","44f93f0b39d6250bb015e0f36cd0a5df"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/img/153785156.png","59dfe52937ed8ad5f196bd8a741f036c"],["/img/3wkO7fuQpgda6vz.png","e521776cb427f848546e20d784888a55"],["/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["/img/53eTB2uiNRlXwFP.png","db810792edf3d40de5baf5401a9a0626"],["/img/71wgohfPHqXRbG9.png","d7e9fe3e0e3db6b841ab12fad331daed"],["/img/T7Mu8Aod3egmC4Q.png","9f1914138052c3a631e1f2b2cf674a46"],["/img/bEJsXxewpOGuRD8.png","99898b727359e568759eebbb2c9e4a8b"],["/img/egVhFWopA5mP2Hk.png","069b687b7f1069254c816a56317bfaad"],["/img/favicon.png","7a8c47cb5a2149c1a1af21e90ecd9ca7"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/img/gcnavZbmepS8d4u.png","fa4f4588b9fab07979acd61b94d34fa0"],["/img/images.jpg","fcf8d94aa25f4161da0e49afedfd4494"],["/img/images.png","53a1608942dced2169cdeb95e1c1e271"],["/img/lP3rLNUBaGtSVzc.png","0c4e486759ad62e3415f8f197f0311f7"],["/img/output.png","8057388b17b3a7410db8696a8d2261ee"],["/img/rJbFpE65tmxPv7R.png","418c3457b6792eb732844d41d2501294"],["/img/xthHmnbdNerWOqP.png","2263d9d1cc9b0724e6331374c33f988b"],["/index.html","4f5db47aab2b7d45a2ad460a6d9b742b"],["/js/fishes.js","d7498b7d186aa147c2173a0cf0b4aaab"],["/js/jquery.js","f832e36068ab203a3f89b1795480d0d7"],["/js/main.js","960297fafacb19dff1246d71f6dfcf6f"],["/js/search/algolia.js","4491ac1d470a1693a502a9d09034aa21"],["/js/search/local-search.js","9da6b76672a143c8c8449770a8d259f3"],["/js/tw_cn.js","fb4da68124bbafbd2d3da537c80e27ce"],["/js/utils.js","420a15cf446b5670244a9ea05b2bccf0"],["/js/windows.js","cccb8741d88427cf9e760167cf8c0f9f"],["/page/2/index.html","52e6347af2e6bd391d3240f33f499bc1"],["/page/3/index.html","58bd267fa8760bf7dd4f09828ff1dd60"],["/page/4/index.html","a1f000e6551676afd5d6b5affe9936aa"],["/page/5/index.html","937498891db497cb0820d6058a0ea5ad"],["/styles/fish-base.js","e37f93e48fca5f823ba549bf2703b79e"],["/styles/fish.js","7373738321ee0dee627a6ef8ec288272"],["/styles/main.css","000a2ac082ed534c4b8663ba7dc34d9b"],["/sw-register.js","046fbb435e1cc5334d7a3e3cb8a77ca9"],["/tags/Java/index.html","1cdfe5c16bd27ce3a6f174a4add26e77"],["/tags/Linux学习/index.html","3581adbb13646129db9d9029cce97c76"],["/tags/centos/index.html","9ce2ac795b6b0c397e9ae30cc4de68c3"],["/tags/index.html","fbb533cd331e134cc86bae7a0271dad9"],["/tags/mysql/index.html","087dc0bb81bcf571fb9bce0ffbdfd3aa"],["/tags/python/index.html","82da6b14cb185a4aa771acfd2debb588"],["/tags/python库/index.html","7d734610ec7c6a34074a711fce48610c"],["/tags/sql/index.html","a95b76a91a957c704636a899eacdcef9"],["/tags/ubuntu/index.html","a13e6005d9bf1f6dd57b873af00a384d"],["/tags/web/index.html","b89639c6484671d3ce1b2f270508b6a4"],["/tags/代码安全/index.html","feb238e38fd640616218ceb6f47c2864"],["/tags/办公自动化/index.html","1a8fdef9c7a8599aca597df7a63106a7"],["/tags/协议安全/index.html","983d1a64d121b71c0874ce276b3da7fe"],["/tags/大数据/index.html","077ac78d8fbac9ed95813bfc5f396c96"],["/tags/大数据基础/index.html","6f926ed7a6bdcc5fea40a1c6cca25013"],["/tags/安全/index.html","cebf395a6538e1198daa4849f106da0f"],["/tags/数据可视化/index.html","ef3a9aa344970b653994bf90bb44d164"],["/tags/数据清洗/index.html","6812d2cf076fc8b99ff416abeb4c6ad7"],["/tags/数据结构与算法/index.html","815f5efbdeec8a1b81558cfffc6890e1"],["/tags/爬虫/index.html","ecec9e238ba71980f05967d310a64edb"]];
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
