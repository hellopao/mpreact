(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports) :
	typeof define === 'function' && define.amd ? define(['exports'], factory) :
	(factory((global.mpreact = {})));
}(this, (function (exports) { 'use strict';

function isSyncApi(api) {
    return /^(on|create|stop|pause|hide)/.test(api)
        || /Sync$/.test(api)
        || ["pageScrollTo", "showNavigationBarLoading", "navigateBack"].indexOf(api) !== -1;
}
function promisifyWxApi() {
    // 命令空间
    let ns = {};
    Object.keys(wx).forEach(api => {
        if (!isSyncApi(api)) {
            ns[api] = function (obj = {}, ...args) {
                return new Promise((resolve, reject) => {
                    obj.success = resolve;
                    obj.fail = reject;
                    wx[api](obj, ...args);
                });
            };
        }
        else {
            ns[api] = wx[api];
        }
    });
    ns.getApp = function () {
        return getApp();
    };
    ns.getCurrentPages = function () {
        return getCurrentPages();
    };
    ns.sleep = function (time = 500) {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve();
            }, time);
        });
    };
    return ns;
}
var wx$1 = promisifyWxApi();

class WxComponent {
    constructor(component) {
        this.component = component;
        this.state = {};
        this.props = Object.assign({}, this.component.properties);
        [
            // 实例方法
            ...Object.getOwnPropertyNames(Object.getPrototypeOf(this)),
        ].forEach(method => {
            if (typeof this[method] == "function" && ['constructor', 'mounted'].indexOf(method) === -1) {
                component[method] = this[method].bind(this);
            }
        });
    }
    setState(state, cb) {
        this.state = Object.assign({}, this.state, state);
        this.component.setData(state, () => {
            cb && cb();
        });
    }
}

/**
 * 小程序Page类, P为page query,S为Page state
 */
class WxPage {
    constructor(page, options) {
        this.page = page;
        this.query = options;
        [
            // 实例方法
            ...Object.getOwnPropertyNames(Object.getPrototypeOf(this)),
        ].forEach(method => {
            if (typeof this[method] == "function" && ['constructor', 'mounted'].indexOf(method) === -1) {
                page[method] = this[method].bind(this);
            }
        });
    }
    setState(state, cb) {
        this.state = Object.assign({}, this.state, state);
        return new Promise((resolve, reject) => {
            this.page.setData(state, () => {
                cb && cb();
                resolve();
            });
        });
    }
    navigateTo(page, query = {}) {
        let url = page + `?${Object.keys(query).map(key => `${key}=${query[key]}`).join('&')}`;
        return wx.navigateTo({ url });
    }
    setTitle(title) {
        wx.setNavigationBarTitle({ title });
    }
}

class WxApp {
    constructor(app, options) {
        this.app = app;
        this.options = options;
    }
}

exports.default = wx$1;
exports.WxComponent = WxComponent;
exports.WxPage = WxPage;
exports.WxApp = WxApp;

Object.defineProperty(exports, '__esModule', { value: true });

})));
