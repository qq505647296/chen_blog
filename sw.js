/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2024/05/29/编程语言/python/库介绍/PYTHON-re/index.html","a6231be816843d789f5fa0442353bf21"],["/2024/05/29/编程语言/sql/sql-learning/index.html","86ccdefc49d9b177df1b36aedd028303"],["/2024/05/29/编程语言/sql/sql-learning_1/index.html","dc1dca3717470e884c375ab6978275a5"],["/2024/05/29/编程语言/sql/sql_learning_2/index.html","8fc2fc8bb70f5904fa709ee66d432fee"],["/2024/06/01/web安全/代码漏洞/sql注入/sql/index.html","ee93d18e8dc0f32ca76be17e1863244e"],["/2024/06/01/web安全/嗅探/web-basic/index.html","84014e78992496807a6fa1cc5fdf51bb"],["/2024/06/01/web安全/嗅探/web/index.html","6c2b017360bf0fe51af309a2e3652674"],["/2024/06/01/web安全/嗅探/wireshark/index.html","29ec9683f99c3a4d072f110a555c6fff"],["/2024/06/01/web安全/基础协议/DNS/index.html","35a1de7150e17b436afe255c3cde5fd5"],["/2024/06/01/web安全/基础协议/https/index.html","d44794ff0ba39a0a703f3b137a46d86c"],["/2024/06/01/web安全/密码学/crypto/index.html","826d2603eca8954a3ea3981845817a1e"],["/2024/06/01/web安全/密码学/passwd/index.html","0959b483823fb62d332fdb0325f95a6f"],["/2024/06/06/linux/linux知识/基本特性/bash/index.html","018f2fcfca46743a9dc711229028e665"],["/2024/06/06/linux/linux知识/系统文件/hosts/index.html","b3ec57f664d0b8378cd3e355ef2ea092"],["/2024/06/09/linux/linux知识/命令介绍/linuxbasic-1/index.html","61f2bc243a2117842bb48569bedc4733"],["/2024/06/09/linux/linux知识/基本特性/permission/index.html","eb9963061715a42ae7abc5a8c8adc51f"],["/2024/06/10/linux/linux知识/基本特性/shell/index.html","e6c60df874347c64ae24c97e97d6b9f9"],["/2024/06/10/linux/linux知识/系统文件/profile/index.html","e6cf9a7ea6ddd31a22987e6c958d262a"],["/2024/06/10/大数据/Java Hadoop框架/Hadoop/index.html","0734f0ccc42671480dd4f57f2c968067"],["/2024/06/10/大数据/web爬虫/beautifulsoup/index.html","cb15d3a7a19a3b7c3fe78b13362c3eac"],["/2024/06/10/大数据/web爬虫/crawler/index.html","0c70d86cde2fcfc510d38fff8165d729"],["/2024/06/11/linux/linux知识/基本特性/path/index.html","e4e94a3bd4b3d6ba2de83078e91fcd53"],["/2024/06/11/linux/linux知识/系统文件/ssh/index.html","63fdd0c0fa6e5c082c47ff5c347edabb"],["/2024/06/12/linux/ubuntu/Ubuntu/index.html","83eecfab488247075f2cd2252c912d37"],["/2024/06/12/linux/ubuntu/ubuntubasic/index.html","8c32936a15f42d17c90908b604e5cc1a"],["/2024/06/12/大数据/办公自动化/excel/index.html","caffe8b2f94769047973deda2d631d2d"],["/2024/06/12/大数据/数据清洗/mysql-data/index.html","6c36a5f87d5e9d293da45e09865ba08a"],["/2024/06/12/编程语言/python/库介绍/Tkinter/index.html","b06095338676db8109e68f3caa5fabf1"],["/2024/06/13/大数据/数据可视化/pandas/index.html","71d02f1d7a9cef0c7e8a988174192e65"],["/2024/06/13/编程语言/python/基础/python class/index.html","24cbe99ba1fae8eb06723744dd56bfd3"],["/2024/06/13/编程语言/python/基础/pythonbasic/index.html","02216a37b097450da74c1ea630b5e472"],["/2024/06/13/编程语言/python/基础/pythonstring/index.html","ed2556cdcbb8dee0f423b8cce8564a6a"],["/2024/06/13/编程语言/python/库介绍/Numpy/index.html","cf22205fa37f19698f14f22a5b4a0fef"],["/2024/06/14/编程语言/python/基础/symbol/index.html","58417636b71c14da45249ff6febb5f1b"],["/2024/06/15/编程语言/Java/JAVAbasic/index.html","473adff7e77b8d7b282288797c394658"],["/2024/06/15/编程语言/前端/css/css_basic/index.html","083aa6bfc4c4928f65e421c395b35672"],["/2024/06/15/编程语言/前端/html/html/index.html","366245c5a0d30a8e80e459ccdc5c8137"],["/2024/06/15/编程语言/数据结构与算法/Data Structures And Algorithms basic/index.html","eb0d870576a1e198c333bf3b66b5a09a"],["/2024/06/22/linux/linux知识/命令介绍/linuxbasic-2/index.html","02b55fff0575badb2a3de94bcbe02a30"],["/2024/06/22/linux/linux知识/系统文件/proc/index.html","1077996fb35daf25e284640ce09713ff"],["/2024/06/27/linux/centos/firewalld/index.html","85ba7e0b28f7c475c5bddea650ded53c"],["/2024/06/30/编程语言/python/安装/python_download/index.html","3b4dee1f9c7f5fd176a3a214db7e436f"],["/2024/07/11/大数据/数据可视化/matplotlib/index.html","5fbaab85ae26b172b7f6246a374c4348"],["/2024/07/17/web安全/代码漏洞/xss跨站攻击/daima/index.html","f479fb151dd1997c02776480edcfe23f"],["/archives/2024/05/index.html","624f819a08a85c48e0fbf0b497637862"],["/archives/2024/06/index.html","1c53ed3f29f4e98a71bacbb7ce8de249"],["/archives/2024/06/page/2/index.html","e897018ab21a9f8bdd8b964697833c33"],["/archives/2024/06/page/3/index.html","7c322faee39c8b24a28d4025079f93e5"],["/archives/2024/06/page/4/index.html","de7e5ae87e3a7ed8b2b0960e76181fb1"],["/archives/2024/07/index.html","8b0dd252d3f469c59b76d535e2bca5ae"],["/archives/2024/index.html","588382f269aad01e7c0d91cbed374968"],["/archives/2024/page/2/index.html","9b9cfd2a60064e5917287227153e2c87"],["/archives/2024/page/3/index.html","fcb771aa512805906ac9846eba572660"],["/archives/2024/page/4/index.html","6015b12c17935b27fd870feb9d9d293e"],["/archives/2024/page/5/index.html","a909ab53abeb920d8e109354b3e955b4"],["/archives/index.html","6c6c08fa587cddda29d56c4757a1caca"],["/archives/page/2/index.html","13868680af8517c4a248c0eda25c7e5e"],["/archives/page/3/index.html","94bf9f29dabd256a226c97d8fe9b8ab4"],["/archives/page/4/index.html","30c95407e6ff62e06df9483195355a22"],["/archives/page/5/index.html","4b746ea88a50d21a7db3ce334c0215c8"],["/categories/index.html","fa38f78c6259d8682b10ce6ab36a7287"],["/categories/linux/centos/index.html","42e54b1dc4ab35d33b5aee6f69aa013d"],["/categories/linux/index.html","0a4710e42c167a0cb0c69bbf793dccc4"],["/categories/linux/linux知识/index.html","41e0eab997782bfc3098f2504d5b2b3c"],["/categories/linux/linux知识/命令介绍/index.html","d5bf217c8532be04bc47fa584af78066"],["/categories/linux/linux知识/基本特性/index.html","8887eaa0168d9e010f8a08a19f623661"],["/categories/linux/linux知识/系统文件/index.html","9cad8e36f7e02ceb547af227623e6f2b"],["/categories/linux/page/2/index.html","16628933c768651852fbdfea59408495"],["/categories/linux/ubuntu/index.html","2001d364787aeddbb25f17512806dfb3"],["/categories/web安全/index.html","9f2f7cb53aebf57045f705dcbbf2f9c5"],["/categories/web安全/代码漏洞/index.html","4ed891e44473303e537d766a221064e6"],["/categories/web安全/代码漏洞/sql注入/index.html","51a6beb9cc91f4494be9b64bc3f38504"],["/categories/web安全/代码漏洞/xss跨站攻击/index.html","794540e3fb46e2a2cfcf0502fc5417cc"],["/categories/web安全/基础协议/index.html","0758236f0c84b31fc90f46db7df4451e"],["/categories/web安全/密码学/index.html","9770672c2cae3b90a490d146478d7f23"],["/categories/信息收集/index.html","5656de61b79339ede10d9574215d72c2"],["/categories/信息收集/web安全/index.html","db3540906ea57e6e9d2a660fcb174186"],["/categories/信息收集/web安全/嗅探/index.html","8675d13b9b9d9c400cb07170733b1b5b"],["/categories/大数据/Java-Hadoop框架/index.html","a12b40cc187d63caab26fcb8f049908d"],["/categories/大数据/index.html","b262333e5c028a3a4df86cb7e07ecdbc"],["/categories/大数据/web爬虫/index.html","92e5b3a428db668e88b64a8ab34b4e94"],["/categories/大数据/办公自动化/index.html","3232f46ec0003a5e2f33310ba8158750"],["/categories/大数据/数据可视化/index.html","2a3e79ed8793c395ea4aa4244060f680"],["/categories/大数据/数据清洗/index.html","8b81702b492787c72b865b4dc1e00998"],["/categories/编程语言/Java/index.html","ddffe596177dbc24c83a753e015c047a"],["/categories/编程语言/index.html","1fc5e44751f956caa59b67222ade26dd"],["/categories/编程语言/page/2/index.html","49e6851a505c13d34dc00fcbb4ddb783"],["/categories/编程语言/python/index.html","bed0fdeb1f81a25bd4f51d7299f869bb"],["/categories/编程语言/python/基础/index.html","595b28f38f677eea67a72f0a06bb70d8"],["/categories/编程语言/python/安装/index.html","654120e09693142d37213aa0666aa6e4"],["/categories/编程语言/python/库介绍/index.html","68b53e9642d6c42c0f2cb7e4d3ef42b8"],["/categories/编程语言/sql/index.html","785f1b02421870b92c2a517952caf9f2"],["/categories/编程语言/前端/css/index.html","7050b0b6943857c35178de8060331757"],["/categories/编程语言/前端/html/index.html","5b72b395ddfbf6747e530e79ed72f071"],["/categories/编程语言/前端/index.html","702845510275d16aa7bb73c2416c074f"],["/categories/编程语言/数据结构与算法/index.html","0b8997365f8396c764a0d5f75077a01f"],["/categories/网络嗅探/index.html","1e2895d0cf97863361693df631d698bd"],["/categories/网络嗅探/web安全/index.html","394f391333d1058aee459941d251e268"],["/categories/网络嗅探/web安全/嗅探/index.html","0135f48cc3ed82fbaff1c0f334de1ef8"],["/css/fonts/icomoon.eot","652914bf9eb51ff458c3ca4ec406fe18"],["/css/fonts/icomoon.svg","22cbc6389da8d37fda8632c0d1121ff2"],["/css/fonts/icomoon.ttf","b9a83499ca3f941b2bb10f56d1b221a1"],["/css/fonts/icomoon.woff","9feb50ceffe68e1d5e030e8a464df854"],["/css/fonts/iconfont.eot","acf7a4f1503631a57b3b6299ba294544"],["/css/fonts/iconfont.svg","418fa80a399aa2dafac9bbbcd28b7c20"],["/css/fonts/iconfont.ttf","8440693fa1d6ef53e932b6d14fde6226"],["/css/fonts/iconfont.woff","d64c095df1c3e81507c05264f5fdd44b"],["/css/gitalk.css","095619498dc3d1e43e5c663a763f6341"],["/css/hl_theme/atom-dark.css","f35cb13d234290992cc4335ba49ed606"],["/css/hl_theme/atom-light.css","f945b47635b91ef043dd16c0b7b1b6e9"],["/css/hl_theme/brown-paper.css","01c61ded59552ec6aeacf79c5d07bbc6"],["/css/hl_theme/darcula.css","a5ea8b21e9208f074f1496fcbbce5e1f"],["/css/hl_theme/github-gist.css","05e43d5ebd7736615648f693928fa718"],["/css/hl_theme/github.css","477524a3765600bcd46a1ccce0a2dd82"],["/css/hl_theme/gruvbox-dark.css","f557961203bb996648744e7b0ca74b00"],["/css/hl_theme/gruvbox-light.css","86337fabc300ddd9fb28b5527282b7fa"],["/css/hl_theme/kimbie-dark.css","b994f574de77d06d6c1e5d7af399f533"],["/css/hl_theme/kimbie-light.css","2a2ca521450fcfecc9d43689010dea99"],["/css/hl_theme/railscasts.css","5e5d360b3a2fb190d18b84fe69713fde"],["/css/hl_theme/rainbow.css","8daeb4fbc93a86603e3dd60419be7abe"],["/css/hl_theme/school-book.css","ded70315efe7a0396a6ead156bc4032c"],["/css/hl_theme/sublime.css","c58ed1627a16672d1a9732044832d0c6"],["/css/hl_theme/sunburst.css","87c5cb1562ecfd5f6f6c7fa1d044421e"],["/css/hl_theme/zenbum.css","67cc6ec897305439616743f148967457"],["/css/index.css","44f93f0b39d6250bb015e0f36cd0a5df"],["/css/mobile.css","f95994bc8f3321a00ab84488d55b2ce9"],["/css/style.css","8ea3dc9c2d5765760bd5cbdb35736a78"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["/img/avatar.jpg","5986bdbf5985f20b1fec5c8a2d384e68"],["/img/brown-papersq.png","82cd9f5d6e9f0e3f3de24eaab6671d88"],["/img/favicon.png","7a8c47cb5a2149c1a1af21e90ecd9ca7"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/img/gov.png","37975a3be8087f62933f7aa3e7e80d12"],["/img/output.png","8057388b17b3a7410db8696a8d2261ee"],["/img/school-book.png","069f91d8694b98ca01fb750760f1563d"],["/index.html","4a692fbd563676515ecfe6b2ea5f0415"],["/js/gitalk.js","2dfdde371bea62d236e6fe84324a9e45"],["/js/gitment.js","9bb7854331f1c12b27f98680b660ba8d"],["/js/iconfont.js","a7cc2bd06cfcd312e119304b88863817"],["/js/jquery.pjax.js","3aa85c90af348ab53ffc252ce2c0c193"],["/js/main.js","960297fafacb19dff1246d71f6dfcf6f"],["/js/script.js","11d09ea78c5c93bc075e982e30882773"],["/js/search.js","33048831dd1330b3f98a6d72b19ca425"],["/js/search/algolia.js","4491ac1d470a1693a502a9d09034aa21"],["/js/search/local-search.js","9da6b76672a143c8c8449770a8d259f3"],["/js/titleTip.js","32fa751df09b886f5af979798e2e7b0e"],["/js/tw_cn.js","fb4da68124bbafbd2d3da537c80e27ce"],["/js/utils.js","420a15cf446b5670244a9ea05b2bccf0"],["/page/2/index.html","ed0e8f8d0de5f2bf9a92a3943acbe6fa"],["/page/3/index.html","30becdda274f88a4d3e984007689fbfe"],["/page/4/index.html","a50d10aa07314266e18e677c6a85713e"],["/page/5/index.html","a4dba571b18d50553115fea41237a295"],["/styles/fish-base.js","e37f93e48fca5f823ba549bf2703b79e"],["/styles/fish.js","7373738321ee0dee627a6ef8ec288272"],["/styles/main.css","000a2ac082ed534c4b8663ba7dc34d9b"],["/sw-register.js","9bdecce8acfa82edfbf86d18a8e752a9"],["/tags/Linux学习/index.html","8a5040058efd5fad165890c38c314afc"],["/tags/centos/index.html","302cec1190ac3bb30ec4d9185c7a2479"],["/tags/index.html","65bca67ea6fa1ca7643fdd5904ec4f4d"],["/tags/java/index.html","e5661f442f020122ae821417e478bde4"],["/tags/mysql/index.html","1a0c8a3a8e4efe44d487c21bac1434a2"],["/tags/python/index.html","92110ece721d49825766e43292d3700a"],["/tags/python库/index.html","19d50d1696c94b8728f3e7fcc4fa2199"],["/tags/sql/index.html","6bca9a7674b064814af82afb8b3bee68"],["/tags/ubuntu/index.html","7478fce2af9942f718e1edf6b4b19006"],["/tags/web/index.html","f8e9d2af49601ca09ccfe2366c1d1838"],["/tags/代码安全/index.html","6fad50cb25f46b42435708a231d6ab83"],["/tags/办公自动化/index.html","7c750afe826a740c4747519a736562b6"],["/tags/协议安全/index.html","2e548b383ab4544728671e54884d22c8"],["/tags/大数据/index.html","a05870c388bd23686df73087df04c5e6"],["/tags/大数据基础/index.html","974110933c0785fbaa5b0e447d8e8b66"],["/tags/安全/index.html","417dc7fc421a14d3fb77bcaf6f476a16"],["/tags/数据可视化/index.html","82934871def985eba52e2266b752b3c7"],["/tags/数据清洗/index.html","db9080fd6845ac4cbd6b9e6ef5a0b985"],["/tags/数据结构与算法/index.html","97b4034912015b9308792a1f96d15c64"],["/tags/爬虫/index.html","0bfc636c14d5255f56060a8d431730e9"]];
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
