/////////////////////////////////////     frame_header_ignore.js     //////////////////////////////////////
//
// VeRsIoN: 0.1
// Last updated: 04/13/2017
// Full Path: /frame_header_ignore.js
//
// Description: Ignores Iframe headers
//
// Notes:
//
// Based on: gleekbfjekiniecknbkamfmkohkpodhe
//
///////////////////////////////////////////////////////////////////////////////////////////////////////

// TODO Add option to disable.
// TODO PeekIT & POPIT, add check for this failure & message saying how to resolve...
// TODO consider only running this when in pop/peek or similar iframe... how though?

// var forceIframe;

// var requestVars = ['forceIframe'];
// getVars(JSON.stringify(requestVars), init_iframeIgnore);



// var HEADERS_TO_STRIP_LOWERCASE = [
//     'content-security-policy',
//     'x-frame-options',
// ];
//
// console.log('forceIframe: ' + forceIframe);
//
// 		// if (forceIframe) {
// 			console.log('adding iframe ignore');
// 			// if () {
// 				chrome.webRequest.onHeadersReceived.addListener(
// 					function(details) {
// 						return {
// 							responseHeaders: details.responseHeaders.filter(function(header) {
// 								return HEADERS_TO_STRIP_LOWERCASE.indexOf(header.name.toLowerCase()) < 0;
// 							})
// 						};
// 					}, {
// 						urls: ["<all_urls>"]
// 					}, ["blocking", "responseHeaders"]);
// 			// }
// 		// }
