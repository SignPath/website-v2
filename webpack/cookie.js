// set cookie acknowledgement
// functions taken from https://www.w3schools.com/js/js_cookies.asp
import analytics from "./analytics.js";
import leadfeeder from "./leadfeeder.js";
import {setGoogleAdGroup} from "./adGroup";

export function setCookie(cname, cvalue, exdays) {
    const d = new Date();
    d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
    const expires = "expires=" + d.toUTCString();
    document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}

function getCookie(cname) {
    const name = cname + "=";
    const ca = document.cookie.split(';');
    for (var i = 0; i < ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) === ' ') {
            c = c.substring(1);
        }
        if (c.indexOf(name) === 0) {
            return c.substring(name.length, c.length);
        }
    }
    return "";
}

export function revokeCookie(cookieName) {
    setCookie(cookieName, null, 365 * -100);
}

export function isCookieSet(cookieName) {
    return getCookie(cookieName);
}

export function isCookieConsent(cookieName) {
    return getCookie(cookieName) === 'true';
}

function toggleMobile() {
    document.querySelectorAll('.information').forEach(info => {
        info.classList.toggle('active')
    })
    document.querySelectorAll('.show-less').forEach(showless => {
        showless.classList.toggle('active')
    })
    document.querySelectorAll('.show-more').forEach(showmore => {
        showmore.classList.toggle('active')
    })
}

export const cookieConsentCookieName = 'acknowledged-cookies2';

export function cookieBanner() {
    console.log('checking consent cookie');
    if (!isCookieSet(cookieConsentCookieName)) {
        console.log('cookie is set')
        isUserFromEu()
    } else {
        loadResources()
    }
}

function isUserFromEu() {
    console.log("checking user continent");
    const endpoint = 'https://pro.ip-api.com/json?fields=status,continentCode&key=eJ1eA5qDeyPkvao';
    const xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            var response = JSON.parse(this.responseText);
            if (response.status !== 'success') {
                console.log('query failed: ' + response.message);
                return
            }
            if (response.continentCode === 'EU') {
                console.log('user is from EU')
                showCookieBanner()
            } else {
                console.log('user is from elsewhere')
                loadResources()
            }
        }
    };
    xhr.open('GET', endpoint, true);
    xhr.send();
}

function showCookieBanner() {
    if (!isCookieSet(cookieConsentCookieName)) {
        document.getElementById('cookie-info').classList.add('show');
        document.getElementById('acknowledge-cookies-btn').addEventListener('click', function () {
            setCookie(cookieConsentCookieName, 'true', 365 * 20); // expires in 20 years
            document.getElementById('cookie-info').classList.remove('show');
            loadResources()
        })
        document.getElementById('refuse-cookies-btn').addEventListener('click', function () {
            setCookie(cookieConsentCookieName, 'false', 365 * 20); // expires in 20 years
            document.getElementById('cookie-info').classList.remove('show');
        })
        document.querySelectorAll('.show-more').forEach(btn => {
            btn.addEventListener('click', function () {
                toggleMobile()
            })
        });
        document.querySelectorAll('.show-less').forEach(btn => {
            btn.addEventListener('click', function () {
                toggleMobile()
            })
        });
    } else {
        document.querySelectorAll('.revoke-cookie-consent').forEach(c => {
            c.addEventListener('click', function () {
                document.cookie.split(";").forEach(function (c) {
                    document.cookie = c.replace(/^ +/, "").replace(/=.*/, "=;expires=" + new Date().toUTCString() + ";path=/");
                });
                showCookieBanner()
            })
        });
    }
}

function loadResources() {
    console.log('loading resources');
    setGoogleAdGroup()
    analytics()
    leadfeeder()
}
