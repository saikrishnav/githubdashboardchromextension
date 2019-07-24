// Copyright 2018 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

'use strict';

// Record current version (in case a future update wants to know)
//chrome.storage.local.set({appVersion: browser.runtime.getManifest().version});

// chrome.tabs.executeScript(tabs[0].id, {
//   code: 'document.body.style.backgroundColor="red"'
// });
// chrome.tabs.onUpdated.addListener( function (tabId, changeInfo, tab) {
//   if (changeInfo.status == 'complete' && tab.active) {

//       var h1ELE = document.createElement("h1");       h1ELE.nodeValue = "TEST STRING";       document.body.append(h1ELE);

//   }
// })
console.log('TEST');

var doc = document.getElementById("org-repositories");
if(doc)
{
  
  var floatBar = doc.getElementsByClassName("col-4 float-right pl-4 js-profile-tab-count-container");
  if(floatBar)
  {
    var firstChild = floatBar[0].childNodes[0]
    var firstChild = floatBar[0].childNodes[0]
    var element = document.createElement("div");
    element.className = "Box mb-3";
    element.style= "width: 450px;";
    element.innerHTML = "<div class='Box-body'><h4 class='f4 mb-2 text-normal'>Issue Dashboard</h4><div id='issueDashboard'></div></div>"
    floatBar[0].insertBefore(element, firstChild);
  }

  
}