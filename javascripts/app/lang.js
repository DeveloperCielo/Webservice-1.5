/*
Copyright 2008-2013 Concur Technologies, Inc.

Licensed under the Apache License, Version 2.0 (the "License"); you may
not use this file except in compliance with the License. You may obtain
a copy of the License at

  http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS, WITHOUT
WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied. See the
License for the specific language governing permissions and limitations
under the License.
*/
!function(a){function t(t){if(t&&""!==t){$(".lang-selector a").removeClass("active"),$(".lang-selector a[data-language-name='"+t+"']").addClass("active");for(var e=0;e<o.length;e++)$(".highlight."+o[e]).parent().hide();$(".highlight."+t).parent().show(),a.toc.calculateHeights(),$(window.location.hash).get(0)&&$(window.location.hash).get(0).scrollIntoView(!0)}}function e(a){if(history){var t=window.location.hash;t&&(t=t.replace(/^#+/,"")),history.pushState({},"","?"+a+"#"+t),localStorage.setItem("language",a)}}function n(a){var e=(a[0],localStorage.getItem("language"));o=a,""!==location.search.substr(1)&&-1!=jQuery.inArray(location.search.substr(1),o)?(t(location.search.substr(1)),localStorage.setItem("language",location.search.substr(1))):t(null!==e&&-1!=jQuery.inArray(e,o)?e:o[0])}var o=[];a.setupLanguages=n,a.activateLanguage=t,$(function(){$(".lang-selector a").on("click",function(){var a=$(this).data("language-name"),n=new CustomEvent("languagechange",{detail:a});return e(a),t(a),window.dispatchEvent(n),!1}),window.onpopstate=function(a){t(window.location.search.substr(1))}})}(window);