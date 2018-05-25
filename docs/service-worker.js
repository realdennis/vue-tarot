/**
 * Copyright 2016 Google Inc. All rights reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
*/

// DO NOT EDIT THIS GENERATED OUTPUT DIRECTLY!
// This file should be overwritten as part of your build process.
// If you need to extend the behavior of the generated service worker, the best approach is to write
// additional code and include it using the importScripts option:
//   https://github.com/GoogleChrome/sw-precache#importscripts-arraystring
//
// Alternatively, it's possible to make changes to the underlying template file and then use that as the
// new base for generating output, via the templateFilePath option:
//   https://github.com/GoogleChrome/sw-precache#templatefilepath-string
//
// If you go that route, make sure that whenever you update your sw-precache dependency, you reconcile any
// changes made to this original template file with your modified copy.

// This generated service worker JavaScript will precache your site's resources.
// The code needs to be saved in a .js file at the top-level of your site, and registered
// from your pages in order to be used. See
// https://github.com/googlechrome/sw-precache/blob/master/demo/app/js/service-worker-registration.js
// for an example of how you can register this script and handle various service worker events.

/* eslint-env worker, serviceworker */
/* eslint-disable indent, no-unused-vars, no-multiple-empty-lines, max-nested-callbacks, space-before-function-paren, quotes, comma-spacing */
'use strict';

var precacheConfig = [["index.html","12c648edb29381c97e131db9e261d1c2"],["service-worker.js","89be409bdac09f6666f1b1d033393f50"],["static/css/app.270ebb401978e299a2382c589ae9e398.css","62e868b118c661645287d1339693fd0a"],["static/img/jojo.3e28fcc.jpg","3e28fcca1996e69bc4bd9d9412aae26a"],["static/img/logo.9ba9aa7.jpg","9ba9aa7dfd3ddfe85cf4966f0fc9d7c0"],["static/js/app.0479980c2325ed03de40.js","3ec5a5d630109f009ff7a54bdbabe8c6"],["static/js/manifest.37a2ecbb1d1b7e6c9ada.js","d586c17710a9fd8b2027d23369daa47a"],["static/js/vendor.c43130bcab93ec69f059.js","bfdd1bf4a02f64b9af7ebce138e81668"],["static/tarot/ar0.jpg","5a9f7d296b849e6713fc23629848cd4a"],["static/tarot/ar1.jpg","0642c4156e79365b81ac64a5108c0683"],["static/tarot/ar10.jpg","55330ef809853b2531f2f0c530993b5d"],["static/tarot/ar11.jpg","15f7dfde57a6d9a58a582cf6a4ea9568"],["static/tarot/ar12.jpg","f8b2754c40fbb0ff928dd6b3505888f4"],["static/tarot/ar13.jpg","1cc8f34e930f13050210f5106a6815ba"],["static/tarot/ar14.jpg","36273cca21811245b451209efe9f3d0a"],["static/tarot/ar15.jpg","21aa459394f665aae9656360a943d54a"],["static/tarot/ar16.jpg","bebdc50940e89efd9ce467196945afa3"],["static/tarot/ar17.jpg","356b2725c06e01a0fa0bdf61a8d74ff1"],["static/tarot/ar18.jpg","d801bce8213e6b0cb06736b75acf5af8"],["static/tarot/ar19.jpg","7339529ade08cee060387a8f8f85188c"],["static/tarot/ar2.jpg","107c43a819524446609d235789e7c0d4"],["static/tarot/ar20.jpg","2acb6196dd452e1f44312a73db29fd72"],["static/tarot/ar21.jpg","003e1c8db78247c0b267079d3b63d522"],["static/tarot/ar3.jpg","ff6a2dbb792b3daa38a500ff1e2b1c9f"],["static/tarot/ar4.jpg","fbad41f0c2c0a6be43b134d9f26c96c9"],["static/tarot/ar5.jpg","76664e427693cbb9a806c4842568d0a1"],["static/tarot/ar6.jpg","b1b876c37b8916a5d068779a8e5f9e8c"],["static/tarot/ar7.jpg","30984738860c95d86565a4faa31c7387"],["static/tarot/ar8.jpg","d7a9fe5f754826bbdb40a7d97688a027"],["static/tarot/ar9.jpg","44001f82525287bb7befc8b2c16b801d"],["static/tarot/cu1.jpg","1fa3066fef4de383e9a6b11c835f815b"],["static/tarot/cu10.jpg","0d86c9a27704c1e5d7e82187676de4ac"],["static/tarot/cu2.jpg","fdfd1da966966576328bff29888c52eb"],["static/tarot/cu3.jpg","a7a70e217779f7abd1dc5b62f0445d88"],["static/tarot/cu4.jpg","878a84081fb30d9be86fd40c88cb4eb8"],["static/tarot/cu5.jpg","6801cd4492275bdea4017f0bbfd7e7a1"],["static/tarot/cu6.jpg","af239ad0b50f132167ab00f3990ea21d"],["static/tarot/cu7.jpg","ace4fe750e4a1ff17516b1df6599a21d"],["static/tarot/cu8.jpg","2b461e69389f789a30ceeaa47770450c"],["static/tarot/cu9.jpg","d404142bfd74d5e2e5787e7ff445af82"],["static/tarot/cuki.jpg","dd02d6128bfd0a3032eb3b406d50374f"],["static/tarot/cukn.jpg","a97d2c47217f28ef90a2653bf4c57399"],["static/tarot/cupa.jpg","0e1320bdf2cf87acd7f7e143f40e3ab0"],["static/tarot/cuqu.jpg","40ae83a7ec46f35ba80580bfe15dde51"],["static/tarot/pe1.jpg","752ec2bb5c99ad6e3c40ab1c14884726"],["static/tarot/pe10.jpg","eb4b22f278101fa46ab2b4dee9e81aaf"],["static/tarot/pe2.jpg","df3206bf3423cdd453f8830c239891bc"],["static/tarot/pe3.jpg","24b99fc663f60c09ec3f2c1c545aaa0e"],["static/tarot/pe4.jpg","60ae623db2cf96c0c5b7a0f8cb2db284"],["static/tarot/pe5.jpg","a3ddef793fc4ebfebb65844ca743b10a"],["static/tarot/pe6.jpg","a10e85b1ebac94f12c73abb10de9bf04"],["static/tarot/pe7.jpg","de6fabf3d5b03bf400a09382e0b97f92"],["static/tarot/pe8.jpg","509616c1bc6f99eb6af05e1c877a969d"],["static/tarot/pe9.jpg","78b4b50e2c49e06a7334471628cc0735"],["static/tarot/peki.jpg","c72885b4eda80656288873f5dcad9f8e"],["static/tarot/pekn.jpg","cad071ba691bf36a9282c6830ae239cd"],["static/tarot/pepa.jpg","e8453442a66c1ea06575b70e3d0d8771"],["static/tarot/pequ.jpg","d51e1aa9f8e18cf9016a35955d31c665"],["static/tarot/sw1.jpg","893c3bd607b94ef26ab58f5bee6b1240"],["static/tarot/sw10.jpg","9688a1e83741cbb04c367150ff100fba"],["static/tarot/sw2.jpg","37704c0dd4055752d87a427d978db3aa"],["static/tarot/sw3.jpg","ca32e4225fa693f71c1bdf47b113b3ff"],["static/tarot/sw4.jpg","cc52603486c8eb41d0f5c93d3c3176e4"],["static/tarot/sw5.jpg","c5d5fbae119aec509f392933b337720e"],["static/tarot/sw6.jpg","99dff52d286775152fb57039df414867"],["static/tarot/sw7.jpg","b2cf19f5bcf0b8d2ff2872419d50722b"],["static/tarot/sw8.jpg","bd6d2d725c0df3b20bec7f59c8f692e5"],["static/tarot/sw9.jpg","bbd47e732aa4f46eb10cc51017f29c5b"],["static/tarot/swki.jpg","3b52fac786666a449f2ea5609ea9eec0"],["static/tarot/swkn.jpg","ef0db8d93eff647a4f8f6d3466fe85d1"],["static/tarot/swpa.jpg","24da16f2a50e69c16b3b0a227e64b3ac"],["static/tarot/swqu.jpg","7b039b0a71bba4e24383c41c1e715b4c"],["static/tarot/wa1.jpg","e958beb81acf4b22e855d4fb1cabad88"],["static/tarot/wa10.jpg","ac7727a055a0d37fc6df8b3cc9fbf0ec"],["static/tarot/wa2.jpg","b33e18365f9ead7e851d59c6cdbc2be2"],["static/tarot/wa3.jpg","e6af0485f4d50e37f08118d1415f6f14"],["static/tarot/wa4.jpg","9a06370be56139780f357cbc76d318c9"],["static/tarot/wa5.jpg","f4c468acf1b89b2b88c4121de44eb679"],["static/tarot/wa6.jpg","5b06e1a11fc43f412af9ba270b3a81c6"],["static/tarot/wa7.jpg","0bc39421890a52817471fb2a852fdc95"],["static/tarot/wa8.jpg","baaa5fe452fbb8a7e7a13dea690ba020"],["static/tarot/wa9.jpg","c0f1d5480ced286c9455d859b79f89ad"],["static/tarot/waki.jpg","4439f716bdfe9cd95b65d130d69b992f"],["static/tarot/wakn.jpg","751dbb99138672884e655227bd9a21b4"],["static/tarot/wapa.jpg","68e3f2623a677c521bcaeb98d52d045f"],["static/tarot/waqu.jpg","49687583e90fbbdf3c41fce1e7dc671e"],["sw.js","e1e58f8649bcd7e066b0d7ed87d2acde"]];
var cacheName = 'sw-precache-v3-tarobot-' + (self.registration ? self.registration.scope : '');


var ignoreUrlParametersMatching = [/^utm_/];



var addDirectoryIndex = function(originalUrl, index) {
    var url = new URL(originalUrl);
    if (url.pathname.slice(-1) === '/') {
      url.pathname += index;
    }
    return url.toString();
  };

var cleanResponse = function(originalResponse) {
    // If this is not a redirected response, then we don't have to do anything.
    if (!originalResponse.redirected) {
      return Promise.resolve(originalResponse);
    }

    // Firefox 50 and below doesn't support the Response.body stream, so we may
    // need to read the entire body to memory as a Blob.
    var bodyPromise = 'body' in originalResponse ?
      Promise.resolve(originalResponse.body) :
      originalResponse.blob();

    return bodyPromise.then(function(body) {
      // new Response() is happy when passed either a stream or a Blob.
      return new Response(body, {
        headers: originalResponse.headers,
        status: originalResponse.status,
        statusText: originalResponse.statusText
      });
    });
  };

var createCacheKey = function(originalUrl, paramName, paramValue,
                           dontCacheBustUrlsMatching) {
    // Create a new URL object to avoid modifying originalUrl.
    var url = new URL(originalUrl);

    // If dontCacheBustUrlsMatching is not set, or if we don't have a match,
    // then add in the extra cache-busting URL parameter.
    if (!dontCacheBustUrlsMatching ||
        !(url.pathname.match(dontCacheBustUrlsMatching))) {
      url.search += (url.search ? '&' : '') +
        encodeURIComponent(paramName) + '=' + encodeURIComponent(paramValue);
    }

    return url.toString();
  };

var isPathWhitelisted = function(whitelist, absoluteUrlString) {
    // If the whitelist is empty, then consider all URLs to be whitelisted.
    if (whitelist.length === 0) {
      return true;
    }

    // Otherwise compare each path regex to the path of the URL passed in.
    var path = (new URL(absoluteUrlString)).pathname;
    return whitelist.some(function(whitelistedPathRegex) {
      return path.match(whitelistedPathRegex);
    });
  };

var stripIgnoredUrlParameters = function(originalUrl,
    ignoreUrlParametersMatching) {
    var url = new URL(originalUrl);
    // Remove the hash; see https://github.com/GoogleChrome/sw-precache/issues/290
    url.hash = '';

    url.search = url.search.slice(1) // Exclude initial '?'
      .split('&') // Split into an array of 'key=value' strings
      .map(function(kv) {
        return kv.split('='); // Split each 'key=value' string into a [key, value] array
      })
      .filter(function(kv) {
        return ignoreUrlParametersMatching.every(function(ignoredRegex) {
          return !ignoredRegex.test(kv[0]); // Return true iff the key doesn't match any of the regexes.
        });
      })
      .map(function(kv) {
        return kv.join('='); // Join each [key, value] array into a 'key=value' string
      })
      .join('&'); // Join the array of 'key=value' strings into a string with '&' in between each

    return url.toString();
  };


var hashParamName = '_sw-precache';
var urlsToCacheKeys = new Map(
  precacheConfig.map(function(item) {
    var relativeUrl = item[0];
    var hash = item[1];
    var absoluteUrl = new URL(relativeUrl, self.location);
    var cacheKey = createCacheKey(absoluteUrl, hashParamName, hash, false);
    return [absoluteUrl.toString(), cacheKey];
  })
);

function setOfCachedUrls(cache) {
  return cache.keys().then(function(requests) {
    return requests.map(function(request) {
      return request.url;
    });
  }).then(function(urls) {
    return new Set(urls);
  });
}

self.addEventListener('install', function(event) {
  event.waitUntil(
    caches.open(cacheName).then(function(cache) {
      return setOfCachedUrls(cache).then(function(cachedUrls) {
        return Promise.all(
          Array.from(urlsToCacheKeys.values()).map(function(cacheKey) {
            // If we don't have a key matching url in the cache already, add it.
            if (!cachedUrls.has(cacheKey)) {
              var request = new Request(cacheKey, {credentials: 'same-origin'});
              return fetch(request).then(function(response) {
                // Bail out of installation unless we get back a 200 OK for
                // every request.
                if (!response.ok) {
                  throw new Error('Request for ' + cacheKey + ' returned a ' +
                    'response with status ' + response.status);
                }

                return cleanResponse(response).then(function(responseToCache) {
                  return cache.put(cacheKey, responseToCache);
                });
              });
            }
          })
        );
      });
    }).then(function() {
      
      // Force the SW to transition from installing -> active state
      return self.skipWaiting();
      
    })
  );
});

self.addEventListener('activate', function(event) {
  var setOfExpectedUrls = new Set(urlsToCacheKeys.values());

  event.waitUntil(
    caches.open(cacheName).then(function(cache) {
      return cache.keys().then(function(existingRequests) {
        return Promise.all(
          existingRequests.map(function(existingRequest) {
            if (!setOfExpectedUrls.has(existingRequest.url)) {
              return cache.delete(existingRequest);
            }
          })
        );
      });
    }).then(function() {
      
      return self.clients.claim();
      
    })
  );
});


self.addEventListener('fetch', function(event) {
  if (event.request.method === 'GET') {
    // Should we call event.respondWith() inside this fetch event handler?
    // This needs to be determined synchronously, which will give other fetch
    // handlers a chance to handle the request if need be.
    var shouldRespond;

    // First, remove all the ignored parameters and hash fragment, and see if we
    // have that URL in our cache. If so, great! shouldRespond will be true.
    var url = stripIgnoredUrlParameters(event.request.url, ignoreUrlParametersMatching);
    shouldRespond = urlsToCacheKeys.has(url);

    // If shouldRespond is false, check again, this time with 'index.html'
    // (or whatever the directoryIndex option is set to) at the end.
    var directoryIndex = 'index.html';
    if (!shouldRespond && directoryIndex) {
      url = addDirectoryIndex(url, directoryIndex);
      shouldRespond = urlsToCacheKeys.has(url);
    }

    // If shouldRespond is still false, check to see if this is a navigation
    // request, and if so, whether the URL matches navigateFallbackWhitelist.
    var navigateFallback = '';
    if (!shouldRespond &&
        navigateFallback &&
        (event.request.mode === 'navigate') &&
        isPathWhitelisted([], event.request.url)) {
      url = new URL(navigateFallback, self.location).toString();
      shouldRespond = urlsToCacheKeys.has(url);
    }

    // If shouldRespond was set to true at any point, then call
    // event.respondWith(), using the appropriate cache key.
    if (shouldRespond) {
      event.respondWith(
        caches.open(cacheName).then(function(cache) {
          return cache.match(urlsToCacheKeys.get(url)).then(function(response) {
            if (response) {
              return response;
            }
            throw Error('The cached response that was expected is missing.');
          });
        }).catch(function(e) {
          // Fall back to just fetch()ing the request if some unexpected error
          // prevented the cached response from being valid.
          console.warn('Couldn\'t serve response for "%s" from cache: %O', event.request.url, e);
          return fetch(event.request);
        })
      );
    }
  }
});







