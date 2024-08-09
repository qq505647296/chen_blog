/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2024/05/29/编程语言/python/库介绍/PYTHON-re/index.html","da9553a42cf4a06606f4a21c4c93562b"],["/2024/05/29/编程语言/sql/sql-learning/index.html","83137f4c9b6737610e691a2f336764b3"],["/2024/05/29/编程语言/sql/sql-learning_1/index.html","e3af70132325950e14359d4d69d6ad96"],["/2024/05/29/编程语言/sql/sql_learning_2/index.html","db8296151d2848d358bf5d3afa7c36b7"],["/2024/06/01/web安全/代码漏洞/sql注入/sql/index.html","1e7cb4ea1dc37e4d03c27cd142236433"],["/2024/06/01/web安全/嗅探/web-basic/index.html","ccd6a5aff18fea159cc37079ff60ebb4"],["/2024/06/01/web安全/嗅探/web/index.html","da0803c365f5b8a3fa01003b7488cbd3"],["/2024/06/01/web安全/嗅探/wireshark/index.html","8c00825221152448d4db133a83861076"],["/2024/06/01/web安全/基础协议/DNS/index.html","43515e0aa769285fca895873d0141e46"],["/2024/06/01/web安全/基础协议/https/index.html","a6fe175d85e3086793394af2ef7a6dd5"],["/2024/06/01/web安全/密码学/crypto/index.html","b3215de0a6511054e2b94c3cd8673940"],["/2024/06/01/web安全/密码学/passwd/index.html","6d2c71c3725439bd8b18b138b6d47455"],["/2024/06/06/linux/linux知识/基本特性/bash/index.html","8c78fe01ba454ecb6688f0c6d152c0d3"],["/2024/06/06/linux/linux知识/系统文件/hosts/index.html","50422f66f3e286e1a535e278cc941a16"],["/2024/06/09/linux/linux知识/命令介绍/linuxbasic-1/index.html","2e8fa07198dd149a87689c79ba63278d"],["/2024/06/09/linux/linux知识/基本特性/permission/index.html","a5dd0bccbaf8d12bff6ebc77888b8362"],["/2024/06/10/linux/linux知识/基本特性/shell/index.html","ef2258d4a8b079953051cf95e1c38aa5"],["/2024/06/10/linux/linux知识/系统文件/profile/index.html","8b9285df0512c8146cf5cb8cdcb4f4c3"],["/2024/06/10/大数据/Java Hadoop框架/Hadoop/index.html","c728c7b0c1b0b2ee3c4a2d930a556a31"],["/2024/06/10/大数据/web爬虫/beautifulsoup/index.html","2c8de2b9711c0818d92a7d3460f42ae5"],["/2024/06/10/大数据/web爬虫/crawler/index.html","b73ca10f01cb3e3d6c8731dfada02b86"],["/2024/06/11/linux/linux知识/基本特性/path/index.html","ad0b621bad1fd6a264c630cc4420f185"],["/2024/06/11/linux/linux知识/系统文件/ssh/index.html","5892b230acbfc0b03a24f41f4efbbfdb"],["/2024/06/12/linux/ubuntu/Ubuntu/index.html","02186ab4617fcd5a2b7e6667636693bb"],["/2024/06/12/linux/ubuntu/ubuntubasic/index.html","712c296c23c9cabf60dc6f3d0a68ec32"],["/2024/06/12/大数据/办公自动化/excel/index.html","c009dfc3da62f127aa625546e3e79b74"],["/2024/06/12/大数据/数据清洗/mysql-data/index.html","98284af675ea6252e6f06eee9b410cd4"],["/2024/06/12/编程语言/python/库介绍/Tkinter/index.html","c08f96a6307f2229dd15ad55f849df67"],["/2024/06/13/大数据/数据可视化/pandas/index.html","f4f7a5ff32c7ff3851755241272d5808"],["/2024/06/13/编程语言/python/基础/python class/index.html","e6a7e59b487c73fd1e71e2400d4e2a68"],["/2024/06/13/编程语言/python/基础/pythonbasic/index.html","6b12fe7ab06acd36159269ae50682c82"],["/2024/06/13/编程语言/python/基础/pythonstring/index.html","57adec85451fdf618534115a0c4d494d"],["/2024/06/13/编程语言/python/库介绍/Numpy/index.html","8b78c2e8ca2bdd2a464ca33eae979a40"],["/2024/06/14/编程语言/python/基础/symbol/index.html","049c55415ae15f021650ac8352ddeaf5"],["/2024/06/15/编程语言/java/JAVAbasic/index.html","70c382b0a812471182feba060c9d1303"],["/2024/06/15/编程语言/前端/css/css_basic/index.html","3e236fd784932125bcc1a5309868f364"],["/2024/06/15/编程语言/前端/html/html/index.html","5d6ed0aa007c07ff81f233f33c94655a"],["/2024/06/15/编程语言/数据结构与算法/Data Structures And Algorithms basic/index.html","639e8ac48c4f0921c0fc823af3e77306"],["/2024/06/22/linux/linux知识/命令介绍/linuxbasic-2/index.html","12fe028069497f4013f1b358b519f118"],["/2024/06/22/linux/linux知识/系统文件/proc/index.html","249a412f52243d073cdc1a9f85b3ac03"],["/2024/06/27/linux/centos/firewalld/index.html","5189cfb01f32df9507998a47af44c6f5"],["/2024/06/30/编程语言/python/安装/python_download/index.html","bd920a4e97cc279e8dfd16551274deae"],["/2024/07/11/大数据/数据可视化/matplotlib/index.html","b0b2c49c813a3d9ec4a4b867eb0094f7"],["/2024/07/17/web安全/代码漏洞/xss跨站攻击/daima/index.html","3a300866fbe6702dc7a12467e730bdff"],["/2024/08/06/编程语言/php/phparray/index.html","23d75b52e25812caec959d8313a97c82"],["/2024/08/06/编程语言/php/phpbasic/index.html","f268e8a8f1d884bf1fc739f72d4eeb8f"],["/2024/08/06/编程语言/php/phpprinthanshu/index.html","9907dfb4b5115a5388b119b9c88acd8b"],["/2024/08/06/编程语言/php/phpshujuleixing/index.html","d89e5025821af14c48f3df6c754f4e9c"],["/2024/08/06/编程语言/php/phpyuju/index.html","b1169ea598c97b56ebb86cbe14d445f3"],["/2024/08/06/编程语言/php/yunsuanfu/index.html","347936ae074fb8d0c5688d58b71107cb"],["/2024/08/08/编程语言/php/phpfunctions/index.html","1794f80e83fca5819cc7b1c22b9a9b63"],["/2024/08/09/编程语言/js/js-basic/index.html","24ea8a2f6be56a4dc282fa93466becb7"],["/2024/08/09/编程语言/php/forms/index.html","9a15388e8b389246875031d505a81112"],["/archives/2024/05/index.html","a4d1957504f7cbf51e1c43de076a8b1c"],["/archives/2024/06/index.html","833e075c8ec480f8d57d8dd2aac1d5c5"],["/archives/2024/06/page/2/index.html","2fddf513950a068001d73bf32b0398f9"],["/archives/2024/06/page/3/index.html","ff332419e0900fc70c7974b3dfb163fb"],["/archives/2024/06/page/4/index.html","d4de143708538e0a944e12ee47298f1b"],["/archives/2024/07/index.html","23416c50870ce9e91b8c25fe56454d56"],["/archives/2024/08/index.html","067bfc2c3c8853c98d0819c190029169"],["/archives/2024/index.html","a40faf7970dc3c7ab8c9692f9995a6c6"],["/archives/2024/page/2/index.html","b8dd216539b8e053dac52861c0b3983a"],["/archives/2024/page/3/index.html","f6662a25b982cd7d05289371a0bb52ba"],["/archives/2024/page/4/index.html","835703bd5fdbb65b06e2bdda80e88dc0"],["/archives/2024/page/5/index.html","d19374037c4cbfcc0c1d7930b1fac04f"],["/archives/2024/page/6/index.html","250b40c0c4b25731f41f1a24e45f89b6"],["/archives/index.html","0d1339183b375f4a8c114aca926ce0e5"],["/archives/page/2/index.html","cdbc5e83ca136924b7a9212eace4e097"],["/archives/page/3/index.html","07bf29fa8ca3ef71dbde026a1d107b62"],["/archives/page/4/index.html","295e0d953e979e5c05a9005a5b6e2250"],["/archives/page/5/index.html","2396e15bd0f2acbf1808f7729efbd32b"],["/archives/page/6/index.html","66fa71262f1bf6fd4ad738a4ed651313"],["/categories/index.html","9b4995ce723125eb45bae2a0f1c9d688"],["/categories/linux/centos/index.html","4ebc1eda68031653802f4b151d8b06a5"],["/categories/linux/index.html","2ccc398fc4cf5eac6045a9f524e527f5"],["/categories/linux/linux知识/index.html","8578bf9ad00198292b8a7f5cd555361f"],["/categories/linux/linux知识/命令介绍/index.html","e4215aa006c105170cba328ec288c063"],["/categories/linux/linux知识/基本特性/index.html","00a0f70b6466388f1f1cbcaf4932f4d3"],["/categories/linux/linux知识/系统文件/index.html","3d66da021ef5bfb1553dab5c93dc8a9e"],["/categories/linux/page/2/index.html","fb1b86c09e446ef4d8695d33c369a899"],["/categories/linux/ubuntu/index.html","25c2fcbe1e9f30815676267da2d2ee19"],["/categories/web安全/index.html","4e838f848540fb126f55e2ad47dbc802"],["/categories/web安全/代码漏洞/index.html","f2e1279f83c1911376916a1cfe4ca224"],["/categories/web安全/代码漏洞/sql注入/index.html","d0e05c255c425bb76c79ccd51a90c199"],["/categories/web安全/代码漏洞/xss跨站攻击/index.html","6da238db1118fe62f3fb4871ddc0abe8"],["/categories/web安全/基础协议/index.html","d0e66b6b032e178a1421631c493cfefc"],["/categories/web安全/密码学/index.html","12d1344d5bb4e4989b0223211279e7a5"],["/categories/信息收集/index.html","adb44c6489380fe14f6754b48f2a5f93"],["/categories/信息收集/web安全/index.html","2c058b8800e28bb2fb30f9871e0ecd2e"],["/categories/信息收集/web安全/嗅探/index.html","b565bd39f235eb0c687c52fd08c1fbbf"],["/categories/大数据/Java-Hadoop框架/index.html","e499e4eba6c8e8006c3bc358b7e987ef"],["/categories/大数据/index.html","5aeeba8c9835731f62725b06265d7479"],["/categories/大数据/web爬虫/index.html","c2b97b1ef8affb446e0a04c4ef76cd5b"],["/categories/大数据/办公自动化/index.html","2e94de90b1b2a62fd8e7dde656c053e2"],["/categories/大数据/数据可视化/index.html","da676185bb41b5442fe8b204528ff7d1"],["/categories/大数据/数据清洗/index.html","0b8d4132a9a7900208c8f5a5cc66efce"],["/categories/编程语言/index.html","babcdb6038ef42ba978111210d33630e"],["/categories/编程语言/java/index.html","b648ab1e229713ea5ff11b94c7eebac5"],["/categories/编程语言/js/index.html","714f9dc4eb8a7665cdd8e67c94358d12"],["/categories/编程语言/page/2/index.html","1cb7d6afaf35fd1a8d9b9ae0d4b3f331"],["/categories/编程语言/page/3/index.html","af34264b6dfcf293dbee7f88660cb479"],["/categories/编程语言/php/index.html","4e76e700ddd129be98b38cc727411d7a"],["/categories/编程语言/python/index.html","cfccaa8a551d536096dfa67a8314af9f"],["/categories/编程语言/python/基础/index.html","afaf89aa158497de1000d03b67e27c6c"],["/categories/编程语言/python/安装/index.html","fa9cbfe6f8faf2367ca7e25dce91ed85"],["/categories/编程语言/python/库介绍/index.html","73598acdbfa40f6cf626ca3cea17af89"],["/categories/编程语言/sql/index.html","090358903c4020f64e76724cc04c1a9e"],["/categories/编程语言/前端/css/index.html","6706003463bfc8d8522f1e34f6a27dfc"],["/categories/编程语言/前端/html/index.html","d3dd1c892d8ec72c08f52ce00b9d6b88"],["/categories/编程语言/前端/index.html","5354cf9ce0f666fb0d7336cb797aec7a"],["/categories/编程语言/数据结构与算法/index.html","2ab838017f40fee7f8b5b1dd7f767115"],["/categories/网络嗅探/index.html","cc031d508efaf92733927f84e67869a6"],["/categories/网络嗅探/web安全/index.html","f3d68623f2d18c5ab5705d817d37148f"],["/categories/网络嗅探/web安全/嗅探/index.html","7df844bad16a52a3bfba8a403607ed33"],["/comments/index.html","5d3be9a1383dcf2a5af5484b1c0735c7"],["/css/custom.css","dd2df6559c7bd902054996e19e1f6d8f"],["/css/index.css","cc856051f67ca2d5edd05f23d4614da0"],["/css/music.css","430f74302733be040c0c19ca2be988b0"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/img/153785156.png","59dfe52937ed8ad5f196bd8a741f036c"],["/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["/img/favicon.png","7a8c47cb5a2149c1a1af21e90ecd9ca7"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/img/images.png","53a1608942dced2169cdeb95e1c1e271"],["/img/lP3rLNUBaGtSVzc.png","0c4e486759ad62e3415f8f197f0311f7"],["/img/output.png","8057388b17b3a7410db8696a8d2261ee"],["/index.html","1ab893c16b28c8e9d648adb9dd3e320f"],["/js/anzhiyu.js","684f8784ac6901e352832971e26e4174"],["/js/emoji.js","36b59b593d09fcd5d2b727a5787cd3a0"],["/js/fishes.js","d7498b7d186aa147c2173a0cf0b4aaab"],["/js/jquery.js","f832e36068ab203a3f89b1795480d0d7"],["/js/js.js","cbebf18071e8b76c5a65562caa272b26"],["/js/main.js","960297fafacb19dff1246d71f6dfcf6f"],["/js/pace-theme-flash.css","435d3f6b204c562fa2d4fd7c5172ea87"],["/js/pace.min.js","094ce2780af2906e8916dc4c4eab6ee1"],["/js/search/algolia.js","4491ac1d470a1693a502a9d09034aa21"],["/js/search/local-search.js","9da6b76672a143c8c8449770a8d259f3"],["/js/sun_moon.js","19cd9770a4c954957a232178a2ef064b"],["/js/title.js","c07740f77444c0e38d2c6d616afc366a"],["/js/tw_cn.js","fb4da68124bbafbd2d3da537c80e27ce"],["/js/utils.js","420a15cf446b5670244a9ea05b2bccf0"],["/message/index.html","cb112d1863b1a802cb4e59173187faaa"],["/music/index.html","14c071e1a76fe5989b7c88ed312335f8"],["/music/music.js","2634ab5f1f5bd87e31ceb49ce0cd2288"],["/page/2/index.html","de2ee4baa9335491ee1f283e51138815"],["/page/3/index.html","5f915e2aeacccf19f4beafbe6ef12ae5"],["/page/4/index.html","5370cc4eef340aa6a3cc0da4cdd415d0"],["/page/5/index.html","971a79d6b7d29e957ea355a31a5174b8"],["/page/6/index.html","7d2f38e845b53a8e330ddfdf6a2e33ba"],["/styles/fish-base.js","e37f93e48fca5f823ba549bf2703b79e"],["/styles/fish.js","7373738321ee0dee627a6ef8ec288272"],["/styles/main.css","000a2ac082ed534c4b8663ba7dc34d9b"],["/sw-register.js","eda99dad21ca676dff6fc9bd4534eff4"],["/tags/Linux学习/index.html","63ec36401a6e0536478caf593e640c7b"],["/tags/centos/index.html","9ec5c821f445928654784037a1bb0244"],["/tags/index.html","cef4fd3c0f6ec021ed27f94f2cf96711"],["/tags/java/index.html","886e2bd8cd48f8d9f4bf370aa2ae082d"],["/tags/javascript/index.html","5feb7cb50d404831ba0bb318818f9378"],["/tags/mysql/index.html","5abcd4a3aefd34a9130f0ce8c79615be"],["/tags/php/index.html","0e9c0ff5d9b7028d849e2da60824d91b"],["/tags/python/index.html","858c885d62c718c79d6561e1ef214ea5"],["/tags/python库/index.html","3890a9eef6f67afaeba11772419f0647"],["/tags/sql/index.html","ce52fcb52f58505e6a73c92976d5cf0d"],["/tags/ubuntu/index.html","e3f23e2e42685b0f7c97c75b32ea1401"],["/tags/web/index.html","8fa5309f015ee2fbb1405c42b14cd987"],["/tags/代码安全/index.html","1f0fce510cef34115bf5ff75e5c38f81"],["/tags/办公自动化/index.html","3854e9c20fbf0cac8d88c86a77da0942"],["/tags/协议安全/index.html","a3792444ae7a510d09cbdf3e54e48f21"],["/tags/大数据/index.html","1915b04bf188e9b96db61efa146a1f13"],["/tags/大数据基础/index.html","ef705ea870a9443b845891ddd4df60ca"],["/tags/安全/index.html","f9e25d87902ce5b292376a89ca322ea8"],["/tags/数据可视化/index.html","301d85d563edf4f9bd13731153f29e40"],["/tags/数据清洗/index.html","0e8b3a7c7a21c7a730ae49ad1e264124"],["/tags/数据结构与算法/index.html","f8ce08a0c280522da7e59a6d4411d824"],["/tags/爬虫/index.html","e19a06151f78e895b265383fac68bb2b"]];
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
