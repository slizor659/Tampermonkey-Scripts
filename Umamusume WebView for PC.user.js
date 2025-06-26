// ==UserScript==
// @name         Umamusume WebView for PC
// @version      1
// @description  Remove zoom from Webview links opened in Umamusume
// @author       slizor659
// @match        https://webview.games.umamusume.com/*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=umamusume.com
// @grant        none
// @namespace    https://greasyfork.org/users/1303801
// ==/UserScript==

// WRITTEN WITH CHATGPT

(function() {
    'use strict';

    // Wait for the document to be available
    const observer = new MutationObserver(() => {
        const html = document.documentElement;
        const body = document.body;
        if (html) {
            // Example changes:
            html.setAttribute('lang', 'en-US');// Change or add attribute
            html.style.zoom = '1';// Modify style directly

            // Stop observing after making changes
            observer.disconnect();
        }
        if (body) {
            // Example changes:
            body.style.margin = 'auto';// Modify style directly

            // Stop observing after making changes
            observer.disconnect();
        }
    });

    // Start observing the document
    observer.observe(document.documentElement, { childList: true, subtree: true });
})();
