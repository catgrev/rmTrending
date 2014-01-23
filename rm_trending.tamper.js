// ==UserScript==
// @name       Remove trending
// @namespace  RMtrending
// @version    0.1
// @description  enter something useful
// @match      https://*.facebook.com/*
// @match      http://*.facebook.com/*
// @require	http://code.jquery.com/jquery-latest.js
// @require  https://gist.github.com/raw/2625891/waitForKeyElements.js
// @copyright  2014, Catherine Grevet
// ==/UserScript==


function addCustomSearchResult (jNode) {
    var element = document.getElementById("pagelet_trending_tags_and_topics");
	element.parentNode.removeChild(element);
}

waitForKeyElements ("#pagelet_trending_tags_and_topics", addCustomSearchResult);


