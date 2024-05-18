// ==UserScript==
// @name         HIDIVE New GUI Subtitle Editor
// @namespace    http://tampermonkey.net/
// @version      1
// @description  Edit inline CSS within the <style id="ds-vtt-styles"> element to invert text from yellow to white
// @author       slizor659
// @match        https://www.hidive.com/video/*
// @grant        none
// @run-at       context-menu
// @run-at       document-idle
// ==/UserScript==

(function() {
    'use strict';

    // Function to modify the CSS
    function modifyCSS() {
        try {
            const styleElement = document.getElementById('ds-vtt-styles');
            if (styleElement) {
                let cssContent = styleElement.innerHTML;

                if (cssContent) {
                    cssContent = cssContent.replace(/color:#FFFFFF/g, 'color:black')
                                             .replace(/color:#FFFF00/g, 'color:white')
                                             .replace(/color:white/g, 'color:black')
                                             .replace(/color:yellow/g, 'color:white')
                                             .replace(/color:black/g, 'color:yellow');
                    console.log('cssContent after:', cssContent);

                    styleElement.innerHTML = cssContent;
                    console.log('Modified CSS in ds-vtt-styles');

                } else {
                    console.error('The style element does not contain any CSS content.');
                }
            } else {
                console.error('No element with id ds-vtt-styles found.');
            }
        } catch (error) {
            console.error('An error occurred while modifying the CSS:', error);
        }
    }

    // Run the function to modify the CSS
    modifyCSS();

})();
