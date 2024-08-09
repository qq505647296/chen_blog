/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2024/05/29/编程语言/python/库介绍/PYTHON-re/index.html","ad4bc631a994d71c657980364eb84661"],["/2024/05/29/编程语言/sql/sql-learning/index.html","2f8b9b614db7d1a984154b385db5eca5"],["/2024/05/29/编程语言/sql/sql-learning_1/index.html","2804b1eb573bc6bffc729707759d0319"],["/2024/05/29/编程语言/sql/sql_learning_2/index.html","ec11ce187bcea24d7137a4d5d98f94af"],["/2024/06/01/web安全/代码漏洞/sql注入/sql/index.html","8abccdb37a14dbae3bff83d4ad73bff0"],["/2024/06/01/web安全/嗅探/web-basic/index.html","c766071c0a99caea4f039196969abaa0"],["/2024/06/01/web安全/嗅探/web/index.html","37c9acf3207c2a69cc2d1987b43220c2"],["/2024/06/01/web安全/嗅探/wireshark/index.html","0492f9ce3142b01782639157e6ba9aa3"],["/2024/06/01/web安全/基础协议/DNS/index.html","bdb3d0cb5126d1e24d4539d21a7664c1"],["/2024/06/01/web安全/基础协议/https/index.html","10457ddcd5b17799b49aee581fa05a74"],["/2024/06/01/web安全/密码学/crypto/index.html","287213f6de753ddaf387b48290101446"],["/2024/06/01/web安全/密码学/passwd/index.html","ada25c1ba3c113f512c053a773d29525"],["/2024/06/06/linux/linux知识/基本特性/bash/index.html","7169ef16e59698a04f56531ae93fab2a"],["/2024/06/06/linux/linux知识/系统文件/hosts/index.html","fef022db45f4ea530f97b772b9eaac12"],["/2024/06/09/linux/linux知识/命令介绍/linuxbasic-1/index.html","3b4ff8eb095f3a40dfd4a90e3cc3721d"],["/2024/06/09/linux/linux知识/基本特性/permission/index.html","f8d174a0793f8ee118c094de8ff7e6e9"],["/2024/06/10/linux/linux知识/基本特性/shell/index.html","691daf481ac8f77e71ea94eeafa47088"],["/2024/06/10/linux/linux知识/系统文件/profile/index.html","66599ccaaadc3f2b3ec2751cbb6f1861"],["/2024/06/10/大数据/Java Hadoop框架/Hadoop/index.html","9be6e15d316f8ac67fe4274bb842dba8"],["/2024/06/10/大数据/web爬虫/beautifulsoup/index.html","97873b39e84adb94fc3398569ecdb991"],["/2024/06/10/大数据/web爬虫/crawler/index.html","1ec942add9fea696dda3514d651b0bf5"],["/2024/06/11/linux/linux知识/基本特性/path/index.html","e1322c9d78cee2f5b681586617013d7b"],["/2024/06/11/linux/linux知识/系统文件/ssh/index.html","fd00d9d92ba52d76334c36a0b1ff4312"],["/2024/06/12/linux/ubuntu/Ubuntu/index.html","f7e056a6cb99646497864c483ec215f4"],["/2024/06/12/linux/ubuntu/ubuntubasic/index.html","40e74a950fb696524629aa73c586fb96"],["/2024/06/12/大数据/办公自动化/excel/index.html","2d8c119ce6bb8b76e0be7f08bf7b051d"],["/2024/06/12/大数据/数据清洗/mysql-data/index.html","f91a4c31bc781c9dfc25a8eff3ca7f0c"],["/2024/06/12/编程语言/python/库介绍/Tkinter/index.html","3a22f710961854653694e64356dbec23"],["/2024/06/13/大数据/数据可视化/pandas/index.html","b37836c9bee2c222c0d4fadad00f4c8c"],["/2024/06/13/编程语言/python/基础/python class/index.html","db199743399fb29c27c731e20e28aed8"],["/2024/06/13/编程语言/python/基础/pythonbasic/index.html","407b1523a285b6d9999f8897f8620cf4"],["/2024/06/13/编程语言/python/基础/pythonstring/index.html","4792da49f05dd36db9d98bd0054265bc"],["/2024/06/13/编程语言/python/库介绍/Numpy/index.html","d8c5c80e5397eff956468d4120f60fb8"],["/2024/06/14/编程语言/python/基础/symbol/index.html","46444011453d62329f8afd9d1beb8c30"],["/2024/06/15/编程语言/java/JAVAbasic/index.html","489c1344865f6885bfd98974efe06bb5"],["/2024/06/15/编程语言/前端/css/css_basic/index.html","ca4a242aed84c6653e35560c33a3c6cf"],["/2024/06/15/编程语言/前端/html/html/index.html","0ce620a3315df758dd9203d2385d6193"],["/2024/06/15/编程语言/数据结构与算法/Data Structures And Algorithms basic/index.html","b01769add6010f4f5a58ce2dc0b31fb3"],["/2024/06/22/linux/linux知识/命令介绍/linuxbasic-2/index.html","7fe034a771b6583fdedaf39a8a6a0cc3"],["/2024/06/22/linux/linux知识/系统文件/proc/index.html","6de23e53e50726937907a101b0e55953"],["/2024/06/27/linux/centos/firewalld/index.html","c7c92e0a1ac204df36c6bf7c683b88c8"],["/2024/06/30/编程语言/python/安装/python_download/index.html","8d7801a3cc0360e0cc91ea2382fef412"],["/2024/07/11/大数据/数据可视化/matplotlib/index.html","910213774d35db8b590444e7215b5565"],["/2024/07/17/web安全/代码漏洞/xss跨站攻击/daima/index.html","bb5196144b496969d2f97a42210de112"],["/2024/08/06/编程语言/php/phparray/index.html","9571afa66ea43080ed5845e71116680b"],["/2024/08/06/编程语言/php/phpbasic/index.html","d0c348bc66c2644cece38ec0aa2fb6e4"],["/2024/08/06/编程语言/php/phpprinthanshu/index.html","eae9503f91d087dfa93e135925ade7ca"],["/2024/08/06/编程语言/php/phpshujuleixing/index.html","13bad3c78844723ccdebea927df66a69"],["/2024/08/06/编程语言/php/phpyuju/index.html","0381600f1f59b56fc13a564c7ced0edf"],["/2024/08/06/编程语言/php/yunsuanfu/index.html","defb7a30d27606880c053258ef3fc443"],["/2024/08/08/编程语言/php/phpfunctions/index.html","0247ba6347797e6570ac91688a9c3c5d"],["/2024/08/09/编程语言/js/js-basic/index.html","3d8c4c2e97f7162d7ab4417977c4ee12"],["/2024/08/09/编程语言/php/forms/index.html","10c215e7e99a66a0d66ba2b2a327c614"],["/archives/2024/05/index.html","cdced80e1b71df9d8188e8ae275f8bd3"],["/archives/2024/06/index.html","d0544096fc8c5681306aec1d1955dc8b"],["/archives/2024/06/page/2/index.html","8a7cf7fc245d105c17712c8876ab6577"],["/archives/2024/06/page/3/index.html","b3c200b29a1e97155f0bfc0160743de7"],["/archives/2024/06/page/4/index.html","d08d4ec01dcc26b6432ec8710e182bab"],["/archives/2024/07/index.html","593bf67f90ae355191b2ebe2ad92b87a"],["/archives/2024/08/index.html","ab8c5aa7467cd255380f650d515368dd"],["/archives/2024/index.html","862321124d3486c7854a41fe7e9c6f6e"],["/archives/2024/page/2/index.html","c29eb816894a1865af5aaeda69613c48"],["/archives/2024/page/3/index.html","6bf872155c475819b8aa6e84daeea81d"],["/archives/2024/page/4/index.html","67face9e70309c43173e021ca2d8274f"],["/archives/2024/page/5/index.html","0a3dd4d74ab9a98b36bd66b1c239b2d7"],["/archives/2024/page/6/index.html","68e34e7ff27206607d4f28ec1b13fe85"],["/archives/index.html","a3df606a1db5b2c74d139fe936cb4bc9"],["/archives/page/2/index.html","82019bf598b94a18555d6cf7e610bbae"],["/archives/page/3/index.html","a9e0f1a7a449ae188278191594109b5a"],["/archives/page/4/index.html","a67a3fb65b458ae5ca19b0821b447902"],["/archives/page/5/index.html","4bf75165222f747b9227ff64b3fcf73f"],["/archives/page/6/index.html","030995042c6f24e231294f0d266f195d"],["/categories/index.html","37eb2344052f7b39e4c5ec543657c679"],["/categories/linux/centos/index.html","5df4c674019d58a4af5451e71a7398da"],["/categories/linux/index.html","6c8292d0c31623bb5b9ef2142d756ed0"],["/categories/linux/linux知识/index.html","9ef6fdcf88042f928efde07eba7b756b"],["/categories/linux/linux知识/命令介绍/index.html","68e0e81efb47598ecd40e6920dad790c"],["/categories/linux/linux知识/基本特性/index.html","bc75c737e184bf4a54c9c89c0ce805f5"],["/categories/linux/linux知识/系统文件/index.html","982c45e019f345a32841c4f3f8821740"],["/categories/linux/page/2/index.html","654388241bb50ca31ee964b3f25b4a6c"],["/categories/linux/ubuntu/index.html","d5a921fe979da3849abc59c7dbb02df3"],["/categories/web安全/index.html","a32e97cde88e7fa6d553610478406898"],["/categories/web安全/代码漏洞/index.html","c218fcd12f5fa81b3b0ef369baf1f4de"],["/categories/web安全/代码漏洞/sql注入/index.html","b4c298fdb4a3da1b818e76fceb2b1d9f"],["/categories/web安全/代码漏洞/xss跨站攻击/index.html","534d0847ada973f593e2c4760b8ab960"],["/categories/web安全/基础协议/index.html","b7acf1eacab72b2497aba92962a8a7fd"],["/categories/web安全/密码学/index.html","394efe7f40adf0092aaf12e7aa3cab7b"],["/categories/信息收集/index.html","0d061710d89485bf63df62aa21ea7a9e"],["/categories/信息收集/web安全/index.html","ade8e9a79927144f93f97c13ececdfd5"],["/categories/信息收集/web安全/嗅探/index.html","79a627aa7a9f7a82d86f9f9a2f08ad8e"],["/categories/大数据/Java-Hadoop框架/index.html","71f9962a7fdd5871b8e6f66f561767ac"],["/categories/大数据/index.html","27c5a54925e40fc586eb5fe5d2f0786b"],["/categories/大数据/web爬虫/index.html","af710ffbdda613a35e05be97240a4f43"],["/categories/大数据/办公自动化/index.html","ae4e4537d9b2d6d176d31d53b288d6de"],["/categories/大数据/数据可视化/index.html","9d4fb30ee52d5c05f1a84ec7fdd0a007"],["/categories/大数据/数据清洗/index.html","0dafd2cb56399962687c1095478ffea4"],["/categories/编程语言/index.html","c3e09522ec299af0a6e2a9ae9a723fb8"],["/categories/编程语言/java/index.html","c419d4ccbd0de56a2a673d5fb8806d0d"],["/categories/编程语言/js/index.html","9c082a3a1b7d842f38897e1c5701a4f0"],["/categories/编程语言/page/2/index.html","3f6def789ebb46a3ea359dcc14bda2bd"],["/categories/编程语言/page/3/index.html","fbd90941ecc1f3eff331cd301a90d672"],["/categories/编程语言/php/index.html","689a7b5d679b053eb5eec9ff6167febb"],["/categories/编程语言/python/index.html","d37907acaeaf219b95ad71a6e4cf3a21"],["/categories/编程语言/python/基础/index.html","255d363b93a9351268de5c3dd7daf997"],["/categories/编程语言/python/安装/index.html","d57e5ee48f17ea11f7d29dd8e910ea7d"],["/categories/编程语言/python/库介绍/index.html","c893e1b54fc0806447389412e4a8a2e9"],["/categories/编程语言/sql/index.html","94c22d52323c5a3f4e576f19e69c0a9e"],["/categories/编程语言/前端/css/index.html","fa58b2a4a93d0518af01b2e73a26d647"],["/categories/编程语言/前端/html/index.html","ef51ff9577123c7a413a83db22eeef76"],["/categories/编程语言/前端/index.html","353aa9295bb8c0d20bfec129bca72062"],["/categories/编程语言/数据结构与算法/index.html","5bb3dd37cabedca0660bc50241e2ac17"],["/categories/网络嗅探/index.html","763106cff9f311cd72b6d210292a9fef"],["/categories/网络嗅探/web安全/index.html","25eba9464d697daeec08141a65964864"],["/categories/网络嗅探/web安全/嗅探/index.html","0f765aa01a1e48172728533adbd03643"],["/comments/index.html","3ac2ce6dbff871d2271cdfbb8053b8a5"],["/css/custom.css","dd2df6559c7bd902054996e19e1f6d8f"],["/css/index.css","cc856051f67ca2d5edd05f23d4614da0"],["/css/music.css","430f74302733be040c0c19ca2be988b0"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/img/153785156.png","59dfe52937ed8ad5f196bd8a741f036c"],["/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["/img/favicon.png","7a8c47cb5a2149c1a1af21e90ecd9ca7"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/img/images.png","53a1608942dced2169cdeb95e1c1e271"],["/img/lP3rLNUBaGtSVzc.png","0c4e486759ad62e3415f8f197f0311f7"],["/img/output.png","8057388b17b3a7410db8696a8d2261ee"],["/index.html","30fddf1acf102b46005b6facfb547c1d"],["/js/anzhiyu.js","684f8784ac6901e352832971e26e4174"],["/js/emoji.js","36b59b593d09fcd5d2b727a5787cd3a0"],["/js/fishes.js","d7498b7d186aa147c2173a0cf0b4aaab"],["/js/jquery.js","f832e36068ab203a3f89b1795480d0d7"],["/js/js.js","cbebf18071e8b76c5a65562caa272b26"],["/js/main.js","960297fafacb19dff1246d71f6dfcf6f"],["/js/pace-theme-flash.css","435d3f6b204c562fa2d4fd7c5172ea87"],["/js/pace.min.js","094ce2780af2906e8916dc4c4eab6ee1"],["/js/search/algolia.js","4491ac1d470a1693a502a9d09034aa21"],["/js/search/local-search.js","9da6b76672a143c8c8449770a8d259f3"],["/js/sun_moon.js","19cd9770a4c954957a232178a2ef064b"],["/js/title.js","c07740f77444c0e38d2c6d616afc366a"],["/js/tw_cn.js","fb4da68124bbafbd2d3da537c80e27ce"],["/js/utils.js","420a15cf446b5670244a9ea05b2bccf0"],["/message/index.html","2103be72ce20b928f436a6b70350e4e2"],["/music/index.html","94add74cfb853723e75c5a51d45455d1"],["/music/music.js","2634ab5f1f5bd87e31ceb49ce0cd2288"],["/page/2/index.html","bc8dd4e64f1735074685acf821280c2f"],["/page/3/index.html","9fdee7e9584903d36d506396a65a802a"],["/page/4/index.html","7bfb8d80bb55c82d1dbbe9cc63f9184e"],["/page/5/index.html","1802feff6859f6a03f5595aebf6881be"],["/page/6/index.html","edf76c73439b2154fe9c7aeed71fa8f6"],["/styles/fish-base.js","e37f93e48fca5f823ba549bf2703b79e"],["/styles/fish.js","7373738321ee0dee627a6ef8ec288272"],["/styles/main.css","000a2ac082ed534c4b8663ba7dc34d9b"],["/sw-register.js","df11fcbc01cd4f93afe08c3c5e15da50"],["/tags/Linux学习/index.html","a379d69d2dac0b596e9a0eff6da050cd"],["/tags/centos/index.html","60fab44253196512c0ff29e13dcad319"],["/tags/index.html","afdfbd94caf5b8aeb017a21b3958c0b9"],["/tags/java/index.html","fc5cd04a767be4c43179a4a96e2475b7"],["/tags/javascript/index.html","81f771eb72bccad6e246d889d804e75c"],["/tags/mysql/index.html","7b8be008d9bc914d9882f25e230760e9"],["/tags/php/index.html","d9c917e97822d59dc90df7a0989c3949"],["/tags/python/index.html","f05f5c9c025c7bda517215c4b5defe39"],["/tags/python库/index.html","ea7678581a94b0ff5bfdaf651bf4087d"],["/tags/sql/index.html","2fb63b17dbc7ca5be75389f4b1d9e06c"],["/tags/ubuntu/index.html","fd55e349528ab968277184c07bb5f049"],["/tags/web/index.html","4a15509797c7d0634bafe0626a1b0243"],["/tags/代码安全/index.html","47c44605d3c0dd2d3bf10e805b967d52"],["/tags/办公自动化/index.html","4799a0816d1d1378557bcee738f12c11"],["/tags/协议安全/index.html","a7331ab1e7b60f83c30f32a30673c921"],["/tags/大数据/index.html","a71991679ac7f994f4bea73465527d02"],["/tags/大数据基础/index.html","eca87251ed732f93a772d113714b47a0"],["/tags/安全/index.html","d7c009139bfb60079805ce63a81bd1b1"],["/tags/数据可视化/index.html","397c106d339e1dcd8cedd8d4f31dfd14"],["/tags/数据清洗/index.html","bf47bde2f34bab9c6f2386ab22d7c6bc"],["/tags/数据结构与算法/index.html","06d57d050e83dcf07a211c502544094f"],["/tags/爬虫/index.html","08dad0b690e03bf20716291762932fe2"]];
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
