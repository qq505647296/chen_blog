/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2024/05/29/编程语言/python/库介绍/PYTHON-re/index.html","5f4bcbc3a76c12cc534158c97eab7917"],["/2024/05/29/编程语言/sql/sql-learning/index.html","02fafe747c0cfb3fb852f3e29bc21392"],["/2024/05/29/编程语言/sql/sql-learning_1/index.html","a055a7993df95b09e5f19c5407acc484"],["/2024/05/29/编程语言/sql/sql_learning_2/index.html","46e76554e42cc2bbbc17a1c4a5c2a351"],["/2024/06/01/web安全/代码漏洞/sql注入/sql/index.html","46bbe6fee1cd24793d3c9ce36146d899"],["/2024/06/01/web安全/嗅探/web-basic/index.html","1efa421ee0fe2124192b1ff8d55e66c9"],["/2024/06/01/web安全/嗅探/web/index.html","65e0aabfbb577c2bf794a3fa8f60fee1"],["/2024/06/01/web安全/嗅探/wireshark/index.html","0bdc67c5d07fcd24a01cf9ed9e65db15"],["/2024/06/01/web安全/基础协议/DNS/index.html","1a75772844568a2b9d22f067458888a5"],["/2024/06/01/web安全/基础协议/https/index.html","e1243bfe05962b3b70fc06241dc7a1f5"],["/2024/06/01/web安全/密码学/crypto/index.html","b2d42b526ef2dd3a9b6028e1a22ef43b"],["/2024/06/01/web安全/密码学/passwd/index.html","3488f0f91427328deec075431e1c80db"],["/2024/06/06/linux/linux知识/基本特性/bash/index.html","e65586c7d264eb5ce0c425175e7eb2de"],["/2024/06/06/linux/linux知识/系统文件/hosts/index.html","5fbc41ce0c9b6a2bbb2232a26ff0a8cb"],["/2024/06/09/linux/linux知识/命令介绍/linuxbasic-1/index.html","6f28580147718fb6274a179d64c77e27"],["/2024/06/09/linux/linux知识/基本特性/permission/index.html","1125921ac0aa783302345e56019b2b11"],["/2024/06/10/linux/linux知识/基本特性/shell/index.html","5dcab27215ee2557e038456c76ea2a67"],["/2024/06/10/linux/linux知识/系统文件/profile/index.html","666789aa8505cf432114996e0deeeb17"],["/2024/06/10/大数据/Java Hadoop框架/Hadoop/index.html","01b19986fefb760083813ed69e5e646c"],["/2024/06/10/大数据/web爬虫/beautifulsoup/index.html","59ce0ac826bccf8c12c82bebf8ebbfca"],["/2024/06/10/大数据/web爬虫/crawler/index.html","4c82b7a2c4232b18c92ebf689fd093ab"],["/2024/06/11/linux/linux知识/基本特性/path/index.html","ac5f526092ce3f892e4050f98c08b5ce"],["/2024/06/11/linux/linux知识/系统文件/ssh/index.html","1131b658e9f05744a7484e78651b2e9e"],["/2024/06/12/linux/ubuntu/Ubuntu/index.html","0b4ed54fe2c7fe979a5135d21ef7d9e5"],["/2024/06/12/linux/ubuntu/ubuntubasic/index.html","26e2855025f56541ea055ea33a8030d4"],["/2024/06/12/大数据/办公自动化/excel/index.html","d5eb0606727dea661e977fa51d2dae16"],["/2024/06/12/大数据/数据清洗/mysql-data/index.html","af73e0e77f5705db491749e8c9874452"],["/2024/06/12/编程语言/python/库介绍/Tkinter/index.html","d894fcccd9f8a5f54e0daf38f3b1dbd3"],["/2024/06/13/大数据/数据可视化/pandas/index.html","9ac98b912d43ce6425c544f4ded82452"],["/2024/06/13/编程语言/python/基础/python class/index.html","574b7daa3b9ecbc710a0eed4247bd8b7"],["/2024/06/13/编程语言/python/基础/pythonbasic/index.html","2ecf9c3e16f19ca9db3f196ba7821e2d"],["/2024/06/13/编程语言/python/基础/pythonstring/index.html","95f36e81baecbb60d7706a3ff1713147"],["/2024/06/13/编程语言/python/库介绍/Numpy/index.html","12c6822748138ce19970f937afbf4396"],["/2024/06/14/编程语言/python/基础/symbol/index.html","1a6f8baea6df23e562e90fc0d7c37626"],["/2024/06/15/编程语言/java/JAVAbasic/index.html","919daaf1df7a7fcb9dbf481a7189df34"],["/2024/06/15/编程语言/前端/css/css_basic/index.html","9260b409c39827f307a014d9ac9b08e8"],["/2024/06/15/编程语言/前端/html/html/index.html","97af1f11598c5dae2650a332c0941aec"],["/2024/06/15/编程语言/数据结构与算法/Data Structures And Algorithms basic/index.html","688340a255ec347472b270215a3a6df5"],["/2024/06/22/linux/linux知识/命令介绍/linuxbasic-2/index.html","ec326632d23a5f9f9e707c5ebb5e5dd7"],["/2024/06/22/linux/linux知识/系统文件/proc/index.html","9ebb325bdd9ac55c70c822189c478df2"],["/2024/06/27/linux/centos/firewalld/index.html","5c58a3ff2e977885361594b60b2a1f43"],["/2024/06/30/编程语言/python/安装/python_download/index.html","461b9dba20ad3052a97166cf6b653fb3"],["/2024/07/11/大数据/数据可视化/matplotlib/index.html","72ea373fe25d61e1b9301b66f93dfb69"],["/2024/07/17/web安全/代码漏洞/xss跨站攻击/daima/index.html","faa1fa5bd18ba2e6d5efab60dad3f626"],["/2024/08/06/编程语言/php/phparray/index.html","753388ca18dfead3a3a717ccbae0f7ff"],["/2024/08/06/编程语言/php/phpbasic/index.html","0f7901930cf0de59ca9400d6163cd931"],["/2024/08/06/编程语言/php/phpprinthanshu/index.html","3e3e1be75556cd37bcf601c6c9839be1"],["/2024/08/06/编程语言/php/phpshujuleixing/index.html","960f3d24559db73602b09c6503ec0ad8"],["/2024/08/06/编程语言/php/phpyuju/index.html","ddd3533910862d8168428eab4e11a5b0"],["/2024/08/06/编程语言/php/yunsuanfu/index.html","d702458f75e251241735b6c0f36db011"],["/2024/08/08/编程语言/php/phpfunctions/index.html","f447ed11da32fda965de55909b55e1c2"],["/2024/08/09/编程语言/js/js-basic/index.html","d9880de8223b8ba426d2faa92faa4e3e"],["/2024/08/09/编程语言/php/forms/index.html","6acf437ad099f140aec0dd361c11b25c"],["/archives/2024/05/index.html","ef3cbcc64b1305551a03e6dbc0e5269e"],["/archives/2024/06/index.html","39c06f2bfe34817c3e8cd44c03f79ce9"],["/archives/2024/06/page/2/index.html","cb779f3308b57670823191bd2ccffe17"],["/archives/2024/06/page/3/index.html","27e3e46db32bfb11d4926fc784927189"],["/archives/2024/06/page/4/index.html","6aa59fb0c2a77d11eb113f242fc2d841"],["/archives/2024/07/index.html","bc1da570b832cfb268de726d136c1461"],["/archives/2024/08/index.html","aaa90b382cca7df0f78b037e63322073"],["/archives/2024/index.html","e5abef2d431c7f04dfba73766ca53963"],["/archives/2024/page/2/index.html","94b2262f067f95f48f542321fafa4709"],["/archives/2024/page/3/index.html","27205d6c3e6979b14e61e7738b24545d"],["/archives/2024/page/4/index.html","22ef32f6670de82b09e982a891c071cb"],["/archives/2024/page/5/index.html","c049581bd30af62bc82baf81c94309f5"],["/archives/2024/page/6/index.html","17b42c36b190fb9ae86a837618871a4d"],["/archives/index.html","821f1d99d52b11bb9aef901c4502cba5"],["/archives/page/2/index.html","bfaf2a570f90adc464f87d1eee7c9eec"],["/archives/page/3/index.html","b2f81d68a1752e3a297f24971634c178"],["/archives/page/4/index.html","492286ddcf59db578732f61354c81bc3"],["/archives/page/5/index.html","a6e6d43da3b2fe8ced0a21a70c0921d3"],["/archives/page/6/index.html","c74cb62a039c5e1a1609f3e82ca8a0c2"],["/categories/index.html","882085644392947b2a8def71c398611f"],["/categories/linux/centos/index.html","25cb369e71c9aa661420e92f049e0a6d"],["/categories/linux/index.html","3f2b6e2699287b0ff12090a56dfe3ff4"],["/categories/linux/linux知识/index.html","c186839161ce17f8669218dbd7c0ed64"],["/categories/linux/linux知识/命令介绍/index.html","323f6416cc78dbfae468be9b3e684820"],["/categories/linux/linux知识/基本特性/index.html","8c369b44962654c55d45770d1e26bfb0"],["/categories/linux/linux知识/系统文件/index.html","0b97f33836a3cf3763062e2f34eeeed3"],["/categories/linux/page/2/index.html","45df0fb2e904cc77b6b86e477e291a79"],["/categories/linux/ubuntu/index.html","b367dda838ff0e70215c44d708e7641c"],["/categories/web安全/index.html","4f59fbe3c247f1ce96535b2773cc2e5a"],["/categories/web安全/代码漏洞/index.html","33f5abedc6333859dafb272da40105ee"],["/categories/web安全/代码漏洞/sql注入/index.html","10ee87b2643b5bda77d5e8091ce50e82"],["/categories/web安全/代码漏洞/xss跨站攻击/index.html","96cc1e04b71a876b61b977c18a81afb1"],["/categories/web安全/基础协议/index.html","21bc48057779abfe4f8c95cb653774c8"],["/categories/web安全/密码学/index.html","dc9fe4f7c00ca7b53c04e0f4c4067bab"],["/categories/信息收集/index.html","1b3f6c9d234cf464ed2490a9697cc48d"],["/categories/信息收集/web安全/index.html","14ff6247641d6a2606e727b8afd2d3d0"],["/categories/信息收集/web安全/嗅探/index.html","4a9c2c61cfd5287ae31765b6243c831a"],["/categories/大数据/Java-Hadoop框架/index.html","e4a69fee9285b9eaaf27af5166047289"],["/categories/大数据/index.html","b69f8544a648969097842ffcf7aa2e31"],["/categories/大数据/web爬虫/index.html","3e2320709778062e0ec521dac5eeb17a"],["/categories/大数据/办公自动化/index.html","bde12b96863cc43a25857fba89b65d14"],["/categories/大数据/数据可视化/index.html","5a48f68bf117371d9b5a879c1e4f12c3"],["/categories/大数据/数据清洗/index.html","97d3b8bcfa49dc92e147fe2b35cce96d"],["/categories/编程语言/index.html","9121ae0db8ef0073f61ab249fa07702b"],["/categories/编程语言/java/index.html","8ce034886dc18f48f39239da32ccd814"],["/categories/编程语言/js/index.html","18ac8ac2ef9436f9cc512a41d47dcc6d"],["/categories/编程语言/page/2/index.html","dcf5f28e2f6ea42e2da6b21a7b99a203"],["/categories/编程语言/page/3/index.html","c28c2fd8d5b28c114684860689d1cf70"],["/categories/编程语言/php/index.html","fe86e9044ca4b3c70c67f436c4825057"],["/categories/编程语言/python/index.html","004177ad539820862f37aff84ca8f481"],["/categories/编程语言/python/基础/index.html","b118463244930a0dd622ddb9d9c1d9b3"],["/categories/编程语言/python/安装/index.html","4ae26df22906b71e842336d7ff9947c5"],["/categories/编程语言/python/库介绍/index.html","9f4264b2c3075532ee2ec080cef07c76"],["/categories/编程语言/sql/index.html","5308d7f4068750bd0858e281be5e056d"],["/categories/编程语言/前端/css/index.html","2cd5f2e62a84c49b8ca8cbdfb9d3da9d"],["/categories/编程语言/前端/html/index.html","b413b8ede930f57d9a39c041050d7e0b"],["/categories/编程语言/前端/index.html","42f180e790f2835a6c0994218972b912"],["/categories/编程语言/数据结构与算法/index.html","933c382bdeecdbf1ca6a25548a0109db"],["/categories/网络嗅探/index.html","2e2cab5a3fd9e81acb6f1bf0a1d94f9d"],["/categories/网络嗅探/web安全/index.html","61c8f379650b83d4f6df161af7f651b7"],["/categories/网络嗅探/web安全/嗅探/index.html","58a842b8969186e3c79c1d8b264133b7"],["/comments/index.html","491e6e4d338d3624ea512c15362502c8"],["/css/custom.css","dd2df6559c7bd902054996e19e1f6d8f"],["/css/index.css","cc856051f67ca2d5edd05f23d4614da0"],["/css/music.css","430f74302733be040c0c19ca2be988b0"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/img/153785156.png","59dfe52937ed8ad5f196bd8a741f036c"],["/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["/img/favicon.png","7a8c47cb5a2149c1a1af21e90ecd9ca7"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/img/images.png","53a1608942dced2169cdeb95e1c1e271"],["/img/lP3rLNUBaGtSVzc.png","0c4e486759ad62e3415f8f197f0311f7"],["/img/output.png","8057388b17b3a7410db8696a8d2261ee"],["/index.html","656ebc95dbe38e297077bf2ac1a149a8"],["/js/anzhiyu.js","684f8784ac6901e352832971e26e4174"],["/js/emoji.js","36b59b593d09fcd5d2b727a5787cd3a0"],["/js/fishes.js","d7498b7d186aa147c2173a0cf0b4aaab"],["/js/jquery.js","f832e36068ab203a3f89b1795480d0d7"],["/js/js.js","cbebf18071e8b76c5a65562caa272b26"],["/js/main.js","960297fafacb19dff1246d71f6dfcf6f"],["/js/pace-theme-flash.css","435d3f6b204c562fa2d4fd7c5172ea87"],["/js/pace.min.js","094ce2780af2906e8916dc4c4eab6ee1"],["/js/search/algolia.js","4491ac1d470a1693a502a9d09034aa21"],["/js/search/local-search.js","9da6b76672a143c8c8449770a8d259f3"],["/js/sun_moon.js","19cd9770a4c954957a232178a2ef064b"],["/js/title.js","c07740f77444c0e38d2c6d616afc366a"],["/js/tw_cn.js","fb4da68124bbafbd2d3da537c80e27ce"],["/js/utils.js","420a15cf446b5670244a9ea05b2bccf0"],["/message/index.html","0026e1da21ff321fcc86948eae51243e"],["/music/index.html","5b27359a00873c57912cbcb180b5377f"],["/music/music.js","2634ab5f1f5bd87e31ceb49ce0cd2288"],["/page/2/index.html","80583fc608f75018a9fefbcab868b50b"],["/page/3/index.html","f19c66e44d85223cf6206b6be2adb9f5"],["/page/4/index.html","9eaee47f30d33798cf350cbb9ad1c85b"],["/page/5/index.html","64533a47bb708b380841e65b165a84f7"],["/page/6/index.html","fb32135b86ca689df37e5659bb235b86"],["/styles/fish-base.js","e37f93e48fca5f823ba549bf2703b79e"],["/styles/fish.js","7373738321ee0dee627a6ef8ec288272"],["/styles/main.css","000a2ac082ed534c4b8663ba7dc34d9b"],["/sw-register.js","897370cdb82aab88a85c1405652de6c7"],["/tags/Linux学习/index.html","480d6d21d2ff8214d2c18add393f6924"],["/tags/centos/index.html","d2d113c54466eb51619d00c3760fccba"],["/tags/index.html","4a014d9f306fdf0d629c0435abd7bdd3"],["/tags/java/index.html","a15a89d66c6629519651f93d5cf10267"],["/tags/javascript/index.html","3da0c7f49964a3f260b32cce2b9295ec"],["/tags/mysql/index.html","db464571322129e62b3999068f2d6f0f"],["/tags/php/index.html","abf97f53b6c6170ecede97d06bc8442b"],["/tags/python/index.html","b3fb26130b37655b817386082ea2932c"],["/tags/python库/index.html","5c08349a6d529781c76243717046bae4"],["/tags/sql/index.html","22e7d0e02d03ecb9d6b2cabcc7a989ba"],["/tags/ubuntu/index.html","de4007e0d24aec919a7d7ffd3bf243df"],["/tags/web/index.html","1f0b19418764777f00baf50f330f7543"],["/tags/代码安全/index.html","989538117c44c93a7991f017291581d6"],["/tags/办公自动化/index.html","78daef9138df4642ce26da827efea6a4"],["/tags/协议安全/index.html","844f41a3b62aaad565fbe8aae0cd6aed"],["/tags/大数据/index.html","5c07695766a7303a1f26ca2795ef235c"],["/tags/大数据基础/index.html","eeb1b5f8db865fa5be25b08e430d7ebe"],["/tags/安全/index.html","d131b71045696d245ff915b4dac6df10"],["/tags/数据可视化/index.html","5519de41510e0e2ae23f4ba8168c90b5"],["/tags/数据清洗/index.html","a68f62aa624f0514b69d6e4beec35459"],["/tags/数据结构与算法/index.html","8994a6302fb65f5f1e5dd5368637bd63"],["/tags/爬虫/index.html","20076081783980e6f18166bdc1942807"]];
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
