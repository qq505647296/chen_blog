/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2024/05/29/编程语言/python/库介绍/PYTHON-re/index.html","a22b8b258fa43bc1565d0789b907e7dc"],["/2024/05/29/编程语言/sql/sql-learning/index.html","8b79b06d89d29dd64b937be5931241b4"],["/2024/05/29/编程语言/sql/sql-learning_1/index.html","5d0e635fe0f7dc051dea09dab8ebf984"],["/2024/05/29/编程语言/sql/sql_learning_2/index.html","7b812fb0b06684881c9973ef1dd6850d"],["/2024/06/01/web安全/代码漏洞/sql注入/sql/index.html","56e6f18d235af133408e065559fea9aa"],["/2024/06/01/web安全/嗅探/web-basic/index.html","4d16ed2bc5c744e3706e1ebd3f8d928d"],["/2024/06/01/web安全/嗅探/web/index.html","950d1a662ac72a8c11b6805b051a2df0"],["/2024/06/01/web安全/嗅探/wireshark/index.html","65a97c0ca1a19d35f6694bdf0aac5e39"],["/2024/06/01/web安全/基础协议/DNS/index.html","03d958cb6e6a87cdd1e2e98d267cebc0"],["/2024/06/01/web安全/基础协议/https/index.html","b17f86c8736be5c88286064b103bf387"],["/2024/06/01/web安全/密码学/crypto/index.html","b4a76c630d89a9b983da32f45f66d999"],["/2024/06/01/web安全/密码学/passwd/index.html","4c164b6be7ac4c00693ee7267065556b"],["/2024/06/06/linux/linux知识/基本特性/bash/index.html","b0aff021370227c7f4a5d79abbd3774d"],["/2024/06/06/linux/linux知识/系统文件/hosts/index.html","3d05237cb7e8ce2efd7e60d622e758ec"],["/2024/06/09/linux/linux知识/命令介绍/linuxbasic-1/index.html","c99923e587e7cc1d1ed4b69bacc8db71"],["/2024/06/09/linux/linux知识/基本特性/permission/index.html","e57b549d3057f33fecff8f1fb71c45e0"],["/2024/06/10/linux/linux知识/基本特性/shell/index.html","6644cc8e57eecaae8a88a0ab1b074477"],["/2024/06/10/linux/linux知识/系统文件/profile/index.html","a11c894022207639cedbf90bf2c9618b"],["/2024/06/10/大数据/Java Hadoop框架/Hadoop/index.html","d12f275c9a65286cfb3e46f6b9500b8d"],["/2024/06/10/大数据/web爬虫/beautifulsoup/index.html","c8afaaff5f2c9bfce045a62d036db34d"],["/2024/06/10/大数据/web爬虫/crawler/index.html","d249a91787f11ddaf0150dddeab1648f"],["/2024/06/11/linux/linux知识/基本特性/path/index.html","39f64ca389e6d459c709bf076eb3e9b7"],["/2024/06/11/linux/linux知识/系统文件/ssh/index.html","8ceb775fb40fdbdb978f3a5feb809e2a"],["/2024/06/12/linux/ubuntu/Ubuntu/index.html","32dadf80e3edfdc04f1a017336b4c958"],["/2024/06/12/linux/ubuntu/ubuntubasic/index.html","d652c9ef862339e196e1a8c397f27428"],["/2024/06/12/大数据/办公自动化/excel/index.html","c57ab742a1a8985ee825e47a856dd06f"],["/2024/06/12/大数据/数据清洗/mysql-data/index.html","f0ebdcbbf4aa1581415f2fa6df5e6534"],["/2024/06/12/编程语言/python/库介绍/Tkinter/index.html","92ae58099483cc0a878e89b971eebd61"],["/2024/06/13/大数据/数据可视化/pandas/index.html","1560684633fa64b688c05e966831778e"],["/2024/06/13/编程语言/python/基础/python class/index.html","fe55349de0f050b70286da0fb1859e18"],["/2024/06/13/编程语言/python/基础/pythonbasic/index.html","57e5bb22a7fee5a7d78e522314bf57ce"],["/2024/06/13/编程语言/python/基础/pythonstring/index.html","dd888d02d8c4ad0132b7408c842723ed"],["/2024/06/13/编程语言/python/库介绍/Numpy/index.html","c44aefe972d088f22f664f7ee59a2fcd"],["/2024/06/14/编程语言/python/基础/symbol/index.html","307b7c028b7a24258a6028c4bb48f488"],["/2024/06/15/编程语言/Java/JAVAbasic/index.html","d7ed4e7b6cc1da9ecba3c7e2c830503d"],["/2024/06/15/编程语言/前端/css/css_basic/index.html","9962d1825a5ab85f527c5158e590685c"],["/2024/06/15/编程语言/前端/html/html/index.html","083f7126eff31c7e5a668d801b6484ea"],["/2024/06/15/编程语言/数据结构与算法/Data Structures And Algorithms basic/index.html","ee2d0f13f0b5936dc4b4bea2dec56970"],["/2024/06/22/linux/linux知识/命令介绍/linuxbasic-2/index.html","94224e8e918ac06fd8ced2336acd1afb"],["/2024/06/22/linux/linux知识/系统文件/proc/index.html","8254d61d9a297a983f1aa3e68246133e"],["/2024/06/27/linux/centos/firewalld/index.html","928fe79b4fcca683e6e15450244f1564"],["/2024/06/30/编程语言/python/安装/python_download/index.html","ae9060a30c051843b9b87d92fec7d15a"],["/2024/07/11/大数据/数据可视化/matplotlib/index.html","0971e7e7a4041f800979218618dbdaa0"],["/2024/07/17/web安全/代码漏洞/xss跨站攻击/daima/index.html","255519bf3f716e41d946d43052f8753f"],["/archives/2024/05/index.html","9e10a575b261999735bdc23f46d82e1b"],["/archives/2024/06/index.html","a20431f3b96761f3db7c744b1cc3b120"],["/archives/2024/06/page/2/index.html","eacd5f215a7b00841b110203f6507c32"],["/archives/2024/06/page/3/index.html","e17d16c3d75006e0d2ff82a55cfa2c00"],["/archives/2024/06/page/4/index.html","0d5818c28260a7add2ca6a70effbef17"],["/archives/2024/07/index.html","25aea3bc306a1eda86a3d77bc06f3225"],["/archives/2024/index.html","1699e0e1e9719638dc15d7e532f1efc1"],["/archives/2024/page/2/index.html","f77836b162bc89a231c4e8fe0300a2f4"],["/archives/2024/page/3/index.html","65cd6604f101b8ab4f60f78d5f5f30cf"],["/archives/2024/page/4/index.html","066d797d511e77ab264e0ae31d1f78ea"],["/archives/2024/page/5/index.html","2be6a3ae550620bcd8182d789e932172"],["/archives/index.html","d352a2d7c4dd09ab99250ecb1454ad96"],["/archives/page/2/index.html","a70dd24d742008de92cc54a3826cfdb0"],["/archives/page/3/index.html","a310128262ec42dd60eb6da4caec015f"],["/archives/page/4/index.html","5ae63ddaee2e040861dc93124bd9ba1d"],["/archives/page/5/index.html","98e2d6a1985eb2a925158d78ee590054"],["/categories/index.html","92a9b488787a01364a4255a5198f3571"],["/categories/linux/centos/index.html","d567bd2f6a2dd3cc4bc60cbd70c81fe5"],["/categories/linux/index.html","9127d9b658fc73696b165183a4b2d481"],["/categories/linux/linux知识/index.html","0121d85a26fbf6e0041a987abd592000"],["/categories/linux/linux知识/命令介绍/index.html","eaded57d8e9c8f665e4703297d063c08"],["/categories/linux/linux知识/基本特性/index.html","031c616b57b4e00ae4c9386f304c9089"],["/categories/linux/linux知识/系统文件/index.html","c6c168341e5491c2c2e4fec9614dc43a"],["/categories/linux/page/2/index.html","6d34b94b1a46db7ba05bb56716f97592"],["/categories/linux/ubuntu/index.html","d99183659e7670f2a659da68d96c19bb"],["/categories/web安全/index.html","a2657fe083d861c43caaae1513aee2b8"],["/categories/web安全/代码漏洞/index.html","2d388318e4f58acea4244809dad60f1c"],["/categories/web安全/代码漏洞/sql注入/index.html","05371596c8b3fae8cb0f5db0144c5e94"],["/categories/web安全/代码漏洞/xss跨站攻击/index.html","e1f753245727cbd0da08de58ee56c711"],["/categories/web安全/基础协议/index.html","628415e40513042876167e207da9f22c"],["/categories/web安全/密码学/index.html","4c3e8fd713a9ade74e77fcd4991529ab"],["/categories/信息收集/index.html","f477e5f02595c4ae0a3923017f81fe05"],["/categories/信息收集/web安全/index.html","30b3ea2d919ec7d685de60acabda557a"],["/categories/信息收集/web安全/嗅探/index.html","cc55b9dfc13da27ee6ba1c054c72fbe8"],["/categories/大数据/Java-Hadoop框架/index.html","6a42097bfa109b8fb8e99d138198a90b"],["/categories/大数据/index.html","c6cccbbbdf975dad767f9a2264e1005c"],["/categories/大数据/web爬虫/index.html","33244e1817d5a28b4f031077fb7c0c66"],["/categories/大数据/办公自动化/index.html","e34f56502d75a66f91917c3318cbc101"],["/categories/大数据/数据可视化/index.html","cdf79b726de2b6d83ccadff64b8aa1bf"],["/categories/大数据/数据清洗/index.html","da8f81da6eb6e22f0d2b04f695f56f20"],["/categories/编程语言/Java/index.html","dd9f55a8db9a194c1e2d6740ab98146c"],["/categories/编程语言/index.html","fa478812ea93183133f3f2d4f94bab1d"],["/categories/编程语言/page/2/index.html","17d4f0673743a16e97d3b4a132b929a0"],["/categories/编程语言/python/index.html","6b4bbfd433cbe74fc4f540ff25f413b0"],["/categories/编程语言/python/基础/index.html","4c165b2da86b617d016284ac70284472"],["/categories/编程语言/python/安装/index.html","3e5058b6156b29e0d72a336760084b78"],["/categories/编程语言/python/库介绍/index.html","347e207f912c40d4e1834cc781aceb58"],["/categories/编程语言/sql/index.html","3aae63d87dc273dad096ce32729481ac"],["/categories/编程语言/前端/css/index.html","f58f03c87b917b5a36fb6ef4ab281662"],["/categories/编程语言/前端/html/index.html","229515d58d7c10193fd4286eda01656c"],["/categories/编程语言/前端/index.html","3d2bc983fc6497ae616b843901a6acec"],["/categories/编程语言/数据结构与算法/index.html","46f7fa78f69e8df26fbc32df624abd4f"],["/categories/网络嗅探/index.html","b64d3e821c01d8c86331209811e95881"],["/categories/网络嗅探/web安全/index.html","f8c72c24762e29ab59120536d088fff5"],["/categories/网络嗅探/web安全/嗅探/index.html","276a01a1d353353bce19c3616ca105a1"],["/css/fonts/icomoon.eot","652914bf9eb51ff458c3ca4ec406fe18"],["/css/fonts/icomoon.svg","22cbc6389da8d37fda8632c0d1121ff2"],["/css/fonts/icomoon.ttf","b9a83499ca3f941b2bb10f56d1b221a1"],["/css/fonts/icomoon.woff","9feb50ceffe68e1d5e030e8a464df854"],["/css/fonts/iconfont.eot","acf7a4f1503631a57b3b6299ba294544"],["/css/fonts/iconfont.svg","418fa80a399aa2dafac9bbbcd28b7c20"],["/css/fonts/iconfont.ttf","8440693fa1d6ef53e932b6d14fde6226"],["/css/fonts/iconfont.woff","d64c095df1c3e81507c05264f5fdd44b"],["/css/gitalk.css","095619498dc3d1e43e5c663a763f6341"],["/css/hl_theme/atom-dark.css","f35cb13d234290992cc4335ba49ed606"],["/css/hl_theme/atom-light.css","f945b47635b91ef043dd16c0b7b1b6e9"],["/css/hl_theme/brown-paper.css","01c61ded59552ec6aeacf79c5d07bbc6"],["/css/hl_theme/darcula.css","a5ea8b21e9208f074f1496fcbbce5e1f"],["/css/hl_theme/github-gist.css","05e43d5ebd7736615648f693928fa718"],["/css/hl_theme/github.css","477524a3765600bcd46a1ccce0a2dd82"],["/css/hl_theme/gruvbox-dark.css","f557961203bb996648744e7b0ca74b00"],["/css/hl_theme/gruvbox-light.css","86337fabc300ddd9fb28b5527282b7fa"],["/css/hl_theme/kimbie-dark.css","b994f574de77d06d6c1e5d7af399f533"],["/css/hl_theme/kimbie-light.css","2a2ca521450fcfecc9d43689010dea99"],["/css/hl_theme/railscasts.css","5e5d360b3a2fb190d18b84fe69713fde"],["/css/hl_theme/rainbow.css","8daeb4fbc93a86603e3dd60419be7abe"],["/css/hl_theme/school-book.css","ded70315efe7a0396a6ead156bc4032c"],["/css/hl_theme/sublime.css","c58ed1627a16672d1a9732044832d0c6"],["/css/hl_theme/sunburst.css","87c5cb1562ecfd5f6f6c7fa1d044421e"],["/css/hl_theme/zenbum.css","67cc6ec897305439616743f148967457"],["/css/index.css","44f93f0b39d6250bb015e0f36cd0a5df"],["/css/mobile.css","f95994bc8f3321a00ab84488d55b2ce9"],["/css/style.css","8ea3dc9c2d5765760bd5cbdb35736a78"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["/img/avatar.jpg","5986bdbf5985f20b1fec5c8a2d384e68"],["/img/brown-papersq.png","82cd9f5d6e9f0e3f3de24eaab6671d88"],["/img/favicon.png","7a8c47cb5a2149c1a1af21e90ecd9ca7"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/img/gov.png","37975a3be8087f62933f7aa3e7e80d12"],["/img/output.png","8057388b17b3a7410db8696a8d2261ee"],["/img/school-book.png","069f91d8694b98ca01fb750760f1563d"],["/index.html","a4633ad170df182fa086f81c800f571f"],["/js/gitalk.js","2dfdde371bea62d236e6fe84324a9e45"],["/js/gitment.js","9bb7854331f1c12b27f98680b660ba8d"],["/js/iconfont.js","a7cc2bd06cfcd312e119304b88863817"],["/js/jquery.pjax.js","3aa85c90af348ab53ffc252ce2c0c193"],["/js/main.js","960297fafacb19dff1246d71f6dfcf6f"],["/js/script.js","11d09ea78c5c93bc075e982e30882773"],["/js/search.js","33048831dd1330b3f98a6d72b19ca425"],["/js/search/algolia.js","4491ac1d470a1693a502a9d09034aa21"],["/js/search/local-search.js","9da6b76672a143c8c8449770a8d259f3"],["/js/titleTip.js","32fa751df09b886f5af979798e2e7b0e"],["/js/tw_cn.js","fb4da68124bbafbd2d3da537c80e27ce"],["/js/utils.js","420a15cf446b5670244a9ea05b2bccf0"],["/page/2/index.html","5a9e7ecb399cc0e1bcc401005aa561c8"],["/page/3/index.html","de62a48d574103019906b3e5cada16a7"],["/page/4/index.html","7e25541ea1efc2d7e931db39ceee7787"],["/page/5/index.html","c1851b17fbfe0c5321d8c9dc73c9f14c"],["/styles/fish-base.js","e37f93e48fca5f823ba549bf2703b79e"],["/styles/fish.js","7373738321ee0dee627a6ef8ec288272"],["/styles/main.css","000a2ac082ed534c4b8663ba7dc34d9b"],["/sw-register.js","f283abb965d42b7a28b7349f85335226"],["/tags/Linux学习/index.html","2179cc209c727b318fa7d577075c7e7c"],["/tags/centos/index.html","08a4d7a54ff21fac39951c5fe16f90d1"],["/tags/index.html","17cda7d721101e6ded0ba12ca6d02800"],["/tags/java/index.html","ab8b7625b9bc74b0c8e087a9f496bae2"],["/tags/mysql/index.html","0e6192a946b973a94ef583ad9e544a0d"],["/tags/python/index.html","184f544f471ef7341464a3b4c8f6f6d4"],["/tags/python库/index.html","e492f8b03d6d4ced7b5c57bd6e85d561"],["/tags/sql/index.html","fa047b0c4839a6a8dbc2725baee707d7"],["/tags/ubuntu/index.html","07336aaca97dea74822d9882c5b900bd"],["/tags/web/index.html","c1bad134e2766d301f29a24887394d1a"],["/tags/代码安全/index.html","236cf11f9c8c5942b9525edf3f421b77"],["/tags/办公自动化/index.html","bbb0653e90742a4d8cf496de45d215f3"],["/tags/协议安全/index.html","d9d26401425925858d3ee332a98d257b"],["/tags/大数据/index.html","55374062a43a1ccc2a4a3a12357b6eca"],["/tags/大数据基础/index.html","e6888c64251b83d9af0977fe08d611fe"],["/tags/安全/index.html","a41ad70a3c9199418db1ac6f54a627ed"],["/tags/数据可视化/index.html","7aeed2d4d2c760d736c944d4fc3b9d0a"],["/tags/数据清洗/index.html","869f2dc5b9e5dd0f212521cc6757edf7"],["/tags/数据结构与算法/index.html","2cc083d2806dfb5537b53803595f0691"],["/tags/爬虫/index.html","b9d2cc060dfb5b64b6ecf1fe8db45b55"]];
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
