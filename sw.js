/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2024/05/29/编程语言/python/库介绍/PYTHON-re/index.html","82cb9939228c8075af3a096e474056da"],["/2024/05/29/编程语言/sql/sql-learning/index.html","f6863f153544b91683f716443ef8b576"],["/2024/05/29/编程语言/sql/sql-learning_1/index.html","b1b7ee3b08defe20ace4e31ce3488733"],["/2024/05/29/编程语言/sql/sql_learning_2/index.html","a9b4df98b8cd56835c537e603f264bc0"],["/2024/06/01/web安全/代码漏洞/sql注入/sql/index.html","1a9892282efe0611ff9173e69422b4cc"],["/2024/06/01/web安全/嗅探/web-basic/index.html","23727db93351826d3b7e714f5cc44d42"],["/2024/06/01/web安全/嗅探/web/index.html","1694a059fe8033236b4f796f2084e0c9"],["/2024/06/01/web安全/嗅探/wireshark/index.html","f68f39ffb899c51f4ebcc75d92111d02"],["/2024/06/01/web安全/基础协议/DNS/index.html","89381ee96e8e094e0d509ffc041d1c80"],["/2024/06/01/web安全/基础协议/https/index.html","fffbed9b764fc0fe450ad80dfa94295d"],["/2024/06/01/web安全/密码学/crypto/index.html","b06eb54dbc829847763f56d27eeaddf7"],["/2024/06/01/web安全/密码学/passwd/index.html","00bfa24d1843dc695882562ca36cd3bd"],["/2024/06/06/linux/linux知识/基本特性/bash/index.html","7bc1cf9290f9265ec10c577a8f8db0ad"],["/2024/06/06/linux/linux知识/系统文件/hosts/index.html","b43f5e61391ec28e43eb4a1dca05a940"],["/2024/06/09/linux/linux知识/命令介绍/linuxbasic-1/index.html","f72cc4b0455e6f2632a5cf82e1541e06"],["/2024/06/09/linux/linux知识/基本特性/permission/index.html","6d96232a93d790522016c083150cf215"],["/2024/06/10/linux/linux知识/基本特性/shell/index.html","e04ab5fe5e9bfb5734c0c4068057c27b"],["/2024/06/10/linux/linux知识/系统文件/profile/index.html","8e4ace91df395533bf92c0ba15ee7b8e"],["/2024/06/10/大数据/Java Hadoop框架/Hadoop/index.html","c61ab5e94c7be155a9c30923b737f449"],["/2024/06/10/大数据/web爬虫/beautifulsoup/index.html","3cd046017fc8324632a1ac0ee014da0f"],["/2024/06/10/大数据/web爬虫/crawler/index.html","9c22d909fe47afdff7d4f9edddea62ad"],["/2024/06/11/linux/linux知识/基本特性/path/index.html","3b7779498c3861ea6e425f04874a4d45"],["/2024/06/11/linux/linux知识/系统文件/ssh/index.html","329b98ae9e73cd726db8205172e5c265"],["/2024/06/12/linux/ubuntu/Ubuntu/index.html","0e1236a1dfdcdbc4bf1bfe2220112ac3"],["/2024/06/12/linux/ubuntu/ubuntubasic/index.html","8b707ad1d83bdd5d03b699faa85d976d"],["/2024/06/12/大数据/办公自动化/excel/index.html","14d1de239ded3ac578dc790252702fdc"],["/2024/06/12/大数据/数据清洗/mysql-data/index.html","13616fc97bd395cc4f05f5f9ccc10794"],["/2024/06/12/编程语言/python/库介绍/Tkinter/index.html","a22d4a95032827ab5e8db73ddb6f806e"],["/2024/06/13/大数据/数据可视化/pandas/index.html","8628eb400dd3d035428542d0c1c1b4db"],["/2024/06/13/编程语言/python/基础/python class/index.html","2ec3a66e4203ed50e36ef04ee29f627e"],["/2024/06/13/编程语言/python/基础/pythonbasic/index.html","388a0e3405b70d1a4e2f8a23ffb23699"],["/2024/06/13/编程语言/python/基础/pythonstring/index.html","510dbfb1167b832a60937c56062e281e"],["/2024/06/13/编程语言/python/库介绍/Numpy/index.html","351bd9abbd1f2bd72691b2c6091c2b83"],["/2024/06/14/编程语言/python/基础/symbol/index.html","ef5dada0833b16050d08b83cce62df85"],["/2024/06/15/编程语言/java/JAVAbasic/index.html","292c15c1a0853f600c2fefc994c4a0be"],["/2024/06/15/编程语言/前端/css/css_basic/index.html","d6e379d53cc28fec9ececb8757776d73"],["/2024/06/15/编程语言/前端/html/html/index.html","0c383f35d6647bc717e8e4c3aa907d47"],["/2024/06/15/编程语言/数据结构与算法/Data Structures And Algorithms basic/index.html","e47fca79ff82dae62a4c0f79665c435c"],["/2024/06/22/linux/linux知识/命令介绍/linuxbasic-2/index.html","b0a0ce0805e340c674e77280b6182e4d"],["/2024/06/22/linux/linux知识/系统文件/proc/index.html","eb0796a9632857f540a73dcc01776110"],["/2024/06/27/linux/centos/firewalld/index.html","ca9b03c8be3dcfe4befa9017df020cc5"],["/2024/06/30/编程语言/python/安装/python_download/index.html","82dda53bcf33f2e40001ea25ff0abfb8"],["/2024/07/11/大数据/数据可视化/matplotlib/index.html","eda6d7b29679b3ae470dabdf4a350e39"],["/2024/07/17/web安全/代码漏洞/xss跨站攻击/daima/index.html","73bf279a9e483fe881efb092e4e38721"],["/2024/08/06/编程语言/php/phpbasic/index.html","d6878f39f6ca8b4ac8c0b5f70aade80c"],["/2024/08/06/编程语言/php/phpprinthanshu/index.html","172a3625a436aa7afab81c60cd7b2f2d"],["/2024/08/06/编程语言/php/phpshujuleixing/index.html","3623c0ac8c0f7b7bb76afb2256b7e3bf"],["/2024/08/06/编程语言/php/yunsuanfu/index.html","161dda9042f666bbec6806f3a9360935"],["/archives/2024/05/index.html","c1aef7305b9c5f6fdd5d41d4f4c8c1c2"],["/archives/2024/06/index.html","149b3c4024df432fdb4817aa18f45e96"],["/archives/2024/06/page/2/index.html","fa623528baa4ab81c111501430c7a906"],["/archives/2024/06/page/3/index.html","1fc8173018743b2bc5efe249bde42bb6"],["/archives/2024/06/page/4/index.html","8dc68fabf1e2f7b0e4d5deb357b27f6f"],["/archives/2024/07/index.html","4172bcd08453cadba3228c306a69ee32"],["/archives/2024/08/index.html","4052c384b3ed3a9b7e0bea6217b6ff3f"],["/archives/2024/index.html","dd4a8e604a2a289ed09940b66caab092"],["/archives/2024/page/2/index.html","4098333d97f432d2f35f2619f85f9763"],["/archives/2024/page/3/index.html","e575a950573c9a621eca5c072288b233"],["/archives/2024/page/4/index.html","50961e5d4e431ff5b2afd2becc52b7c6"],["/archives/2024/page/5/index.html","f7e875a67bb45bff41eebcea302c931e"],["/archives/index.html","9bb9903b63b02a70692bed8c332d24be"],["/archives/page/2/index.html","1ec9b5f6bee19ea5a4e4b332839d43fc"],["/archives/page/3/index.html","eb22da6271a50523851b8bc9079fb339"],["/archives/page/4/index.html","746fb41bb490d9ccfe6ed2b1bace1d37"],["/archives/page/5/index.html","14c817a46cd1b45e7bd9a68ffc2dc7bf"],["/categories/index.html","e7bddb84bd7525b5e0c7a1394a709b16"],["/categories/linux/centos/index.html","0254aa8804110a957f91bb0e8ee6a89d"],["/categories/linux/index.html","a23c4dd448f484ccddb52308247ef8d2"],["/categories/linux/linux知识/index.html","bfef920f29858f34eb9a04a880b9148e"],["/categories/linux/linux知识/命令介绍/index.html","5daf30d919c40d2452dc536e99a1cb1d"],["/categories/linux/linux知识/基本特性/index.html","81e911e6d53b53f70522f69783e1b99b"],["/categories/linux/linux知识/系统文件/index.html","f0f5566cec3ac27d7506e789e68a4032"],["/categories/linux/page/2/index.html","9f06fe55f79cac3c95e99c1be06dafa8"],["/categories/linux/ubuntu/index.html","8ddd755f3229f5ad1c1950cb855d6aa7"],["/categories/web安全/index.html","805169e962e0b780078a0e44d1cb7bda"],["/categories/web安全/代码漏洞/index.html","5847d53b2c567bdcb0c2dd7dfa51ad5b"],["/categories/web安全/代码漏洞/sql注入/index.html","1c03e9582ab6cb6e355470fb978b925e"],["/categories/web安全/代码漏洞/xss跨站攻击/index.html","37835696545a4afe1af01157a6fe6199"],["/categories/web安全/基础协议/index.html","c55ae91cafde65c7c13982cf2e4e2dac"],["/categories/web安全/密码学/index.html","655d8adbc047439854bd9493505bb1ef"],["/categories/信息收集/index.html","df037d245921523eada6bd56cfa8affc"],["/categories/信息收集/web安全/index.html","37c492617e9b622f702a9542aa0899b3"],["/categories/信息收集/web安全/嗅探/index.html","f7bd2b1050319bb95aa576de30e056f2"],["/categories/大数据/Java-Hadoop框架/index.html","7bc0d786edc5e589f8d3887e74be3d7f"],["/categories/大数据/index.html","267cbba72b95e55790e5e1343788d84f"],["/categories/大数据/web爬虫/index.html","c3b99b5b09c623ea2f7c77759e6ee598"],["/categories/大数据/办公自动化/index.html","102feea0fb8320d84ce7d1d0c7664fcd"],["/categories/大数据/数据可视化/index.html","cfbbffba124f5306e39e4cbe504e79f5"],["/categories/大数据/数据清洗/index.html","b7015f693ddf5bde114e09224983469c"],["/categories/编程语言/index.html","f3b7f47a321a2cddd3d53f35215d432c"],["/categories/编程语言/java/index.html","44a9d7590eba9afab589dd22cc4d0bcd"],["/categories/编程语言/page/2/index.html","82950c47e30e481a6680875568029632"],["/categories/编程语言/php/index.html","0314b5660acd1ba6dc99b370bf2eb091"],["/categories/编程语言/python/index.html","84daf5ab0cf9d837c47194e45c96eb3f"],["/categories/编程语言/python/基础/index.html","787126df0d282eb0d03acf12a08c7cd9"],["/categories/编程语言/python/安装/index.html","ffe9fd3613541cb961a5eaa319e57a33"],["/categories/编程语言/python/库介绍/index.html","4fe7141f551b6ecf5650099a1cfc63b2"],["/categories/编程语言/sql/index.html","70310529ac5ce7d70fc6d03580342644"],["/categories/编程语言/前端/css/index.html","4da771d17eb5adcb7ceccab91fa95276"],["/categories/编程语言/前端/html/index.html","43bc5212533a2f545213b8371df205f3"],["/categories/编程语言/前端/index.html","7845e1cad4135fe1de4efbffdc2311e8"],["/categories/编程语言/数据结构与算法/index.html","2dc519fa15a90ebd0b5626f653a19892"],["/categories/网络嗅探/index.html","8b360047db160e2bd1babfd37f6ff19b"],["/categories/网络嗅探/web安全/index.html","b917ae79125f7acba5d9e8439247e8dc"],["/categories/网络嗅探/web安全/嗅探/index.html","4f581a9a54257f3ccc5bb9e478e3f118"],["/css/index.css","44f93f0b39d6250bb015e0f36cd0a5df"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/img/153785156.png","59dfe52937ed8ad5f196bd8a741f036c"],["/img/3wkO7fuQpgda6vz.png","e521776cb427f848546e20d784888a55"],["/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["/img/53eTB2uiNRlXwFP.png","db810792edf3d40de5baf5401a9a0626"],["/img/71wgohfPHqXRbG9.png","d7e9fe3e0e3db6b841ab12fad331daed"],["/img/T7Mu8Aod3egmC4Q.png","9f1914138052c3a631e1f2b2cf674a46"],["/img/bEJsXxewpOGuRD8.png","99898b727359e568759eebbb2c9e4a8b"],["/img/egVhFWopA5mP2Hk.png","069b687b7f1069254c816a56317bfaad"],["/img/favicon.png","7a8c47cb5a2149c1a1af21e90ecd9ca7"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/img/gcnavZbmepS8d4u.png","fa4f4588b9fab07979acd61b94d34fa0"],["/img/images.jpg","fcf8d94aa25f4161da0e49afedfd4494"],["/img/images.png","53a1608942dced2169cdeb95e1c1e271"],["/img/lP3rLNUBaGtSVzc.png","0c4e486759ad62e3415f8f197f0311f7"],["/img/output.png","8057388b17b3a7410db8696a8d2261ee"],["/img/rJbFpE65tmxPv7R.png","418c3457b6792eb732844d41d2501294"],["/img/xthHmnbdNerWOqP.png","2263d9d1cc9b0724e6331374c33f988b"],["/index.html","eb7d894accc4133d0dcd1ca19319ca64"],["/js/fishes.js","d7498b7d186aa147c2173a0cf0b4aaab"],["/js/jquery.js","f832e36068ab203a3f89b1795480d0d7"],["/js/main.js","960297fafacb19dff1246d71f6dfcf6f"],["/js/pace-theme-flash.css","435d3f6b204c562fa2d4fd7c5172ea87"],["/js/pace.min.js","094ce2780af2906e8916dc4c4eab6ee1"],["/js/search/algolia.js","4491ac1d470a1693a502a9d09034aa21"],["/js/search/local-search.js","9da6b76672a143c8c8449770a8d259f3"],["/js/tw_cn.js","fb4da68124bbafbd2d3da537c80e27ce"],["/js/utils.js","420a15cf446b5670244a9ea05b2bccf0"],["/page/2/index.html","ea9ed26288c8514f149335687af10411"],["/page/3/index.html","098c3c89090262fe10212a320a3c3be6"],["/page/4/index.html","e37a493f8948688b754894c4f1d4b2a3"],["/page/5/index.html","63f0caa707b15cff5dd45ae57f64cca1"],["/styles/fish-base.js","e37f93e48fca5f823ba549bf2703b79e"],["/styles/fish.js","7373738321ee0dee627a6ef8ec288272"],["/styles/main.css","000a2ac082ed534c4b8663ba7dc34d9b"],["/sw-register.js","efa0a3f9625f37754feb55e4b2ca62f3"],["/tags/Linux学习/index.html","ff89e99280e942f6bbd161aa11b487b3"],["/tags/centos/index.html","187a27dd72b83b5f0f75ae6feaa36b4c"],["/tags/index.html","3edf2a55c855a458da41c39860c684f5"],["/tags/java/index.html","94f0b8be53a336c6317025ae80d73ed2"],["/tags/mysql/index.html","dd4d721b5131c8d197cab17118c26570"],["/tags/php/index.html","fb138205658729c81e9b1128821ea411"],["/tags/python/index.html","53a58f8bb64a1306e199456a9113cd47"],["/tags/python库/index.html","de1c565a8c3f55e97964a8a7bb0e171d"],["/tags/sql/index.html","7d1f45146a09a01bb42521c4a58209b3"],["/tags/ubuntu/index.html","f3885d11bee79c6457e698885f4c718e"],["/tags/web/index.html","056f5aded86c4a7250a600caba058672"],["/tags/代码安全/index.html","093865e7ef1221fd45b74d2c41755df5"],["/tags/办公自动化/index.html","e41c581375ae20c19565a1d9cf3fd88c"],["/tags/协议安全/index.html","ad872c88962caf228c7cf79ea0f88ed1"],["/tags/大数据/index.html","4b822da48420721189c30572288c27ef"],["/tags/大数据基础/index.html","8d86456b8bcc78b681f057ec4f465ba9"],["/tags/安全/index.html","2c427b75fcd94801433d86a442f4e32f"],["/tags/数据可视化/index.html","70ede821c001a4cf7aa086d783d62358"],["/tags/数据清洗/index.html","5218a45901c51f50ebfdd60fe4341618"],["/tags/数据结构与算法/index.html","b7ca6444933c4f0dbe99b53692909ed1"],["/tags/爬虫/index.html","ef1ea1c3e1216155164490af45df898c"]];
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
