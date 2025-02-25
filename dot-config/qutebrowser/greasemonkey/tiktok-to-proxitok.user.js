/*
DESCRIPTION:
This is a file that after installing a greasemonkey extension can
be used to convert tiktok.com to any proxitok instance.
NOTE: I might change this really often because instances may fail.

----

Copyright (C) 2021 Zortazert and other contributors

This program is free software: you can redistribute it and/or modify
it under the terms of the GNU General Public License as published by
the Free Software Foundation, either version 3 of the License, or (at
your option) any later version.

This program is distributed in the hope that it will be useful, but
WITHOUT ANY WARRANTY; without even the implied warranty of
MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the GNU
General Public License for more details.

You should have received a copy of the GNU General Public License
along with this program. If not, see <https://www.gnu.org/licenses/>.
*/

// ==UserScript==
// @name           Tiktok to Proxitok
// @namespace      Zera's anti tiktok script
// @match          http://tiktok.com/*
// @match          https://tiktok.com/*
// @match          http://www.tiktok.com/*
// @match          https://www.tiktok.com/*
// @grant          none
// @run-at         document-start
// ==/UserScript==
url = location.href
url = url.replace(/\bwww\.\b/, "")
url = url.split('/')
if (url[3] === "") {
  url = "https://proxitok.herokuapp.com"
  location.href = url
} 
else {
  url = "https://proxitok.herokuapp.com/video/" + url[5]
  location.href = url
}
