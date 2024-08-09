/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2024/05/29/编程语言/python/库介绍/PYTHON-re/index.html","9328e1412158b294287596bdd203354e"],["/2024/05/29/编程语言/sql/sql-learning/index.html","f58158ae18c8344874c14a571b3f6c14"],["/2024/05/29/编程语言/sql/sql-learning_1/index.html","77dd7523e0af3fb741c50e0693e500db"],["/2024/05/29/编程语言/sql/sql_learning_2/index.html","691ffca412b375695b9878a6f7d314de"],["/2024/06/01/web安全/代码漏洞/sql注入/sql/index.html","dcd76a93d7d9593e8ae8a5f9b088af05"],["/2024/06/01/web安全/嗅探/web-basic/index.html","6f6af1189b985396c8d5e9e964c176e6"],["/2024/06/01/web安全/嗅探/web/index.html","7601ec12d871f7cfe66d4a7fe99cd08e"],["/2024/06/01/web安全/嗅探/wireshark/index.html","8935d17598cf128d94869dccbcd162c7"],["/2024/06/01/web安全/基础协议/DNS/index.html","970d2489b435c8383e723f342c5cbbf0"],["/2024/06/01/web安全/基础协议/https/index.html","17ef646585cd9750af7b1a71779d7af5"],["/2024/06/01/web安全/密码学/crypto/index.html","dfecba0f85fb559f4fd95d7c9eaaf4b6"],["/2024/06/01/web安全/密码学/passwd/index.html","4a10e236a18a367645060fec3331d642"],["/2024/06/06/linux/linux知识/基本特性/bash/index.html","aea217d41507d2f2855a329553187ae6"],["/2024/06/06/linux/linux知识/系统文件/hosts/index.html","55d5a5c4de1569a7f281ff664c94f08e"],["/2024/06/09/linux/linux知识/命令介绍/linuxbasic-1/index.html","c6f60b48176a0c53df2298b23a63d2db"],["/2024/06/09/linux/linux知识/基本特性/permission/index.html","068ca614d2feb88a61cebd40a7068d57"],["/2024/06/10/linux/linux知识/基本特性/shell/index.html","7d746faedd8d0ad728de00d1910c0229"],["/2024/06/10/linux/linux知识/系统文件/profile/index.html","1fd5d86b9eeaa7324de3e013f1872b44"],["/2024/06/10/大数据/Java Hadoop框架/Hadoop/index.html","3a9280439606cf1728daf804e605951b"],["/2024/06/10/大数据/web爬虫/beautifulsoup/index.html","142b4362651576d7dbd3b6d8ccd32094"],["/2024/06/10/大数据/web爬虫/crawler/index.html","46477c3efd3f4eb103b04cfbc2cff423"],["/2024/06/11/linux/linux知识/基本特性/path/index.html","94d043b852141c934c5c460ee8d55101"],["/2024/06/11/linux/linux知识/系统文件/ssh/index.html","ba59cc1cf0e492aee0c776b6b6ffd9bb"],["/2024/06/12/linux/ubuntu/Ubuntu/index.html","4c7fc081a5b770f95abfc0c1b0b5280a"],["/2024/06/12/linux/ubuntu/ubuntubasic/index.html","dc110fe999e0b063e9705e97939254a7"],["/2024/06/12/大数据/办公自动化/excel/index.html","553b76b44f0d7beaf620eb8fe2e164b0"],["/2024/06/12/大数据/数据清洗/mysql-data/index.html","4749c7cf286835f2d96d2c1d7088ba5f"],["/2024/06/12/编程语言/python/库介绍/Tkinter/index.html","d574209def4f97d515038b4c03c67bfb"],["/2024/06/13/大数据/数据可视化/pandas/index.html","939ad423ded2247e89dd37d3c60f91fb"],["/2024/06/13/编程语言/python/基础/python class/index.html","6ff22b6f178b85daad244efc2f6faa98"],["/2024/06/13/编程语言/python/基础/pythonbasic/index.html","aaee30c92f89802db4824330abf4edb8"],["/2024/06/13/编程语言/python/基础/pythonstring/index.html","1aac6909b3e7349b486f708ade24801f"],["/2024/06/13/编程语言/python/库介绍/Numpy/index.html","c9af2e4e138e8aefa49b4575c1e6d6c6"],["/2024/06/14/编程语言/python/基础/symbol/index.html","534cab24ea210b99ce271debf9c6b727"],["/2024/06/15/编程语言/java/JAVAbasic/index.html","928237a8389a94688b47a487ac22ee30"],["/2024/06/15/编程语言/前端/css/css_basic/index.html","2946584ed8600a89400575a98d0e92f8"],["/2024/06/15/编程语言/前端/html/html/index.html","bb7f1d1ab0364a981fe217055a097e06"],["/2024/06/15/编程语言/数据结构与算法/Data Structures And Algorithms basic/index.html","4ac4cc5768a2657e1436a42f9dd4b56e"],["/2024/06/22/linux/linux知识/命令介绍/linuxbasic-2/index.html","a5ab94dd266b294494d170f109027c8c"],["/2024/06/22/linux/linux知识/系统文件/proc/index.html","a6e75968b3d9822156a69ee8ccb9e144"],["/2024/06/27/linux/centos/firewalld/index.html","8f14ce972baa0f25b71bcdd48db4a3e5"],["/2024/06/30/编程语言/python/安装/python_download/index.html","8508028deaf933f0281aff4d81037e21"],["/2024/07/11/大数据/数据可视化/matplotlib/index.html","dd5b0984dcc689b183fc519d284f88a1"],["/2024/07/17/web安全/代码漏洞/xss跨站攻击/daima/index.html","3d8aad2276974f8c512034452307e1c0"],["/2024/08/06/编程语言/php/phparray/index.html","354bbc66e362763f13e9dae12d6e23ca"],["/2024/08/06/编程语言/php/phpbasic/index.html","f32cc9ad49973689c3c5a153668638df"],["/2024/08/06/编程语言/php/phpprinthanshu/index.html","920cce7559a40fb70072ffa4f3abb79f"],["/2024/08/06/编程语言/php/phpshujuleixing/index.html","da4c623a80d470d5ce3855d55fd433d2"],["/2024/08/06/编程语言/php/phpyuju/index.html","3ec715317786ee6d6cd31cc0c41c6a1e"],["/2024/08/06/编程语言/php/yunsuanfu/index.html","0424e6f8f84777b3a65be9dccc7e8bae"],["/2024/08/08/编程语言/php/phpfunctions/index.html","f7581891540830ce18f13c2ba1bfb1da"],["/2024/08/09/编程语言/js/js-basic/index.html","b5d6ab8e6e0f24f439901a13efca0526"],["/2024/08/09/编程语言/php/forms/index.html","8f3be3b004016f68dd28cb0ed5284357"],["/archives/2024/05/index.html","5699b403d72c2d268ff21f374ed33e52"],["/archives/2024/06/index.html","0bf92ffc4672517846989c687e47f07c"],["/archives/2024/06/page/2/index.html","f6dac1d05799de9d7726764e716f87f4"],["/archives/2024/06/page/3/index.html","be72fc8bcbc1215253262c3aa6d165b0"],["/archives/2024/06/page/4/index.html","a9e993b1261eeaf22bf338a241f210e9"],["/archives/2024/07/index.html","ac95eda7dfb5b7e76596c2bb590989bf"],["/archives/2024/08/index.html","68a80606b6ad5058d576e101e8f565f0"],["/archives/2024/index.html","b224af44907017a534d1385d3876668d"],["/archives/2024/page/2/index.html","4a3f45c935bac2fc87807b09d90d7ed0"],["/archives/2024/page/3/index.html","46078563a313126b255a0300a32f0ed3"],["/archives/2024/page/4/index.html","504dbdbe96323911f60d4ca87929c5fe"],["/archives/2024/page/5/index.html","616a5aa35854874952d3e904b9f3e0be"],["/archives/2024/page/6/index.html","5aa869e18f028597dc41d5f4f5c53c21"],["/archives/index.html","a1ebed02ed53d8216fa5ee42f736fa42"],["/archives/page/2/index.html","67be73515a78f0a8ad73f531d7907daf"],["/archives/page/3/index.html","4b7b83475ad4069ef7bcdff52b6036a4"],["/archives/page/4/index.html","dc1d8df0ae04111c4e6dc5606b0a788b"],["/archives/page/5/index.html","0d9244138412398412c434add0540481"],["/archives/page/6/index.html","92c45ebe8237ba5cf4c0baaf5d2dd6dc"],["/categories/index.html","773e3a5c56147b5ce0b5032a034c0ece"],["/categories/linux/centos/index.html","1aae4042d009ac675be263298ea67d7c"],["/categories/linux/index.html","2705426877da292a1f35a87054b80dc3"],["/categories/linux/linux知识/index.html","efaf5d7a71163d83654073087a11d62d"],["/categories/linux/linux知识/命令介绍/index.html","fc52115a3895024807d169d57a9ebd6c"],["/categories/linux/linux知识/基本特性/index.html","d9e502a89793efef08ef53507d76af2a"],["/categories/linux/linux知识/系统文件/index.html","23ac258e689b19dc6823c7d2d059b0a5"],["/categories/linux/page/2/index.html","8f6b47f4066836869b21072e8f3df746"],["/categories/linux/ubuntu/index.html","c198de606d9f069b93c519b8e3e084a4"],["/categories/web安全/index.html","f8efec240fb1748189a2062800f6cd87"],["/categories/web安全/代码漏洞/index.html","62519bec1b97627b260548a71cfb37c2"],["/categories/web安全/代码漏洞/sql注入/index.html","07d246594f06251fadc144187b60247f"],["/categories/web安全/代码漏洞/xss跨站攻击/index.html","52183249707f4db6214c5976a82e1145"],["/categories/web安全/基础协议/index.html","22da9a39508fbc7b1a7107d1448815b0"],["/categories/web安全/密码学/index.html","e1089ce86694fefc8a85a8f466104945"],["/categories/信息收集/index.html","6c9b6a260aebfb092747776a3a040c2c"],["/categories/信息收集/web安全/index.html","245edacc9c63b895048c36d3278bab74"],["/categories/信息收集/web安全/嗅探/index.html","efccf638449ec82e25ab4d750594af0c"],["/categories/大数据/Java-Hadoop框架/index.html","72d3e195c9ae612f6e5f97428c35c88f"],["/categories/大数据/index.html","9feb6ffb9225dbf56fc8b66f8b2874fe"],["/categories/大数据/web爬虫/index.html","48e8f67dde972ce1a2cafe57a81ebf45"],["/categories/大数据/办公自动化/index.html","706e33a617dbdd5f3e1ef172b8896366"],["/categories/大数据/数据可视化/index.html","addecf33dc10e79ca9d7fbc44302f5bc"],["/categories/大数据/数据清洗/index.html","b04f4e19bfc10cf5d77d77a9e3046084"],["/categories/编程语言/index.html","6c3f18874f910794f3ce1aa108654b69"],["/categories/编程语言/java/index.html","f28b1fa43bc53d77e50da23d8ddbd056"],["/categories/编程语言/js/index.html","727c865e95d0d40a9c1a6385c6a34112"],["/categories/编程语言/page/2/index.html","891dcb84566d0f2c885b4cf4503e70ec"],["/categories/编程语言/page/3/index.html","1b4d5946a9c13e66361e7df5bdd59533"],["/categories/编程语言/php/index.html","16cfe0cc8b2db5daf46b0bc297d26804"],["/categories/编程语言/python/index.html","77fd64cc837ed877e0a3063ca224f8cf"],["/categories/编程语言/python/基础/index.html","06edc06f186d643ef92233f7e7dcade9"],["/categories/编程语言/python/安装/index.html","86879e85e84966ec0bd5440eec1193df"],["/categories/编程语言/python/库介绍/index.html","2dec387a23cf1bbf05e85f9c565fccc9"],["/categories/编程语言/sql/index.html","e48e0fb76b8b9eb623429f00baa10b07"],["/categories/编程语言/前端/css/index.html","faef2c519f621cd83b00b125893fb5e0"],["/categories/编程语言/前端/html/index.html","b3820aab57e45d89ef0244d5774fd5af"],["/categories/编程语言/前端/index.html","a2e3b899b15f091d357bd516b0e901cd"],["/categories/编程语言/数据结构与算法/index.html","65e5d9512816545d002c14569271d045"],["/categories/网络嗅探/index.html","18bf5f98a816711416095ee83ace9f76"],["/categories/网络嗅探/web安全/index.html","2dae2ed9cc171a7fb22e5e3de56bd842"],["/categories/网络嗅探/web安全/嗅探/index.html","ec8938728cb6d903cbdb4bd094261752"],["/comments/index.html","9ad43203173d271f1a301b5edfd5b27c"],["/css/custom.css","dd2df6559c7bd902054996e19e1f6d8f"],["/css/index.css","cc856051f67ca2d5edd05f23d4614da0"],["/css/music.css","430f74302733be040c0c19ca2be988b0"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/img/153785156.png","59dfe52937ed8ad5f196bd8a741f036c"],["/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["/img/favicon.png","7a8c47cb5a2149c1a1af21e90ecd9ca7"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/img/images.png","53a1608942dced2169cdeb95e1c1e271"],["/img/lP3rLNUBaGtSVzc.png","0c4e486759ad62e3415f8f197f0311f7"],["/img/output.png","8057388b17b3a7410db8696a8d2261ee"],["/index.html","cbd7c3c05b92b03bf0bf0f63940a4e9c"],["/js/anzhiyu.js","684f8784ac6901e352832971e26e4174"],["/js/emoji.js","36b59b593d09fcd5d2b727a5787cd3a0"],["/js/fishes.js","d7498b7d186aa147c2173a0cf0b4aaab"],["/js/jquery.js","f832e36068ab203a3f89b1795480d0d7"],["/js/js.js","cbebf18071e8b76c5a65562caa272b26"],["/js/main.js","960297fafacb19dff1246d71f6dfcf6f"],["/js/pace-theme-flash.css","435d3f6b204c562fa2d4fd7c5172ea87"],["/js/pace.min.js","094ce2780af2906e8916dc4c4eab6ee1"],["/js/search/algolia.js","4491ac1d470a1693a502a9d09034aa21"],["/js/search/local-search.js","9da6b76672a143c8c8449770a8d259f3"],["/js/sun_moon.js","19cd9770a4c954957a232178a2ef064b"],["/js/title.js","c07740f77444c0e38d2c6d616afc366a"],["/js/tw_cn.js","fb4da68124bbafbd2d3da537c80e27ce"],["/js/utils.js","420a15cf446b5670244a9ea05b2bccf0"],["/message/index.html","296546115f6c784e4127ee66c008d4ba"],["/music/index.html","138e044e9ea8e311daebccc48c370a90"],["/music/music.js","2634ab5f1f5bd87e31ceb49ce0cd2288"],["/page/2/index.html","e8aef48aee79fd6f277d489dd429b533"],["/page/3/index.html","356371849ac9d62ec5f2808fc3f4ae8c"],["/page/4/index.html","f4681f76d1148cbf56d746b641ad877f"],["/page/5/index.html","e52556a8c5996c6f5df6b9d8a5d6de00"],["/page/6/index.html","82391d7c669e5423855454f0db04d443"],["/styles/fish-base.js","e37f93e48fca5f823ba549bf2703b79e"],["/styles/fish.js","7373738321ee0dee627a6ef8ec288272"],["/styles/main.css","000a2ac082ed534c4b8663ba7dc34d9b"],["/sw-register.js","5e8f2caa3b7067724bfa6ea7b9ae67cc"],["/tags/Linux学习/index.html","760d304c457f563c164bb7b3c91501fb"],["/tags/centos/index.html","3780bcb414ca0876414aecbf0d1e3313"],["/tags/index.html","d900d49531f4f45772635650e8c2b098"],["/tags/java/index.html","a6835390faa871fce9ce5b574333a70a"],["/tags/javascript/index.html","39ae107b364fa9cc552726f169e5ae25"],["/tags/mysql/index.html","453e30d50ae632675ef19ad724e697d0"],["/tags/php/index.html","6925314a9d70608f8ce93f4ebb1a5018"],["/tags/python/index.html","b49340b20f7d9836658e1ed5fed0637a"],["/tags/python库/index.html","a9aa7c352ba552c7f5d2283ba8462def"],["/tags/sql/index.html","0ee628fe9bce1cb815c83b002352f83e"],["/tags/ubuntu/index.html","98bce1998be48ef546a15bbb0a640e37"],["/tags/web/index.html","323103b6323d4dbfdd47a0c1a4252eab"],["/tags/代码安全/index.html","968c125787b6153f88e021f48d747bcb"],["/tags/办公自动化/index.html","eac79fd6a1ae92c175e406280bbe0e64"],["/tags/协议安全/index.html","9f8672e018dd1c33b18a51df9aac95fc"],["/tags/大数据/index.html","239b43ae28a32f9752f7f9ca0bc6f013"],["/tags/大数据基础/index.html","b35bfda903ecdf42fc0d343168bcfe86"],["/tags/安全/index.html","18727af778ad1c614d0c3806373348d1"],["/tags/数据可视化/index.html","089e82c7d4ce0dc813b95746c0a4ec15"],["/tags/数据清洗/index.html","ef4c552c7043a17c83db4b9b5dcb5def"],["/tags/数据结构与算法/index.html","a16dfed6c77c36a592daa2b379cf1e15"],["/tags/爬虫/index.html","cc181c3735dbc3d6e4c08049edb4460f"]];
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
