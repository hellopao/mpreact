import { WxApp } from "./app";
import { WxPage } from "./page";

declare var getApp;
declare var getCurrentPages;

interface ExtendApi {
    getApp: () => WxApp;
    getCurrentPages: () => Array<WxPage<any, any>>;
    sleep: (time: number) => Promise<void>;
}

function isSyncApi(api: string): boolean {
    return /^(on|create|stop|pause|hide)/.test(api)
        || /Sync$/.test(api)
        || ["pageScrollTo", "showNavigationBarLoading", "navigateBack"].indexOf(api) !== -1;
}

function promisifyWxApi() {
    // 命令空间
    let ns = {} as ExtendApi;

    Object.keys(wx).forEach(api => {
        if (!isSyncApi(api)) {
            ns[api] = function (obj: any = {}) {
                return new Promise((resolve, reject) => {
                    obj.success = resolve;
                    obj.fail = reject;
                    wx[api](obj);
                });
            }
        } else {
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
            }, time)
        })
    };

    return ns;
};

export default promisifyWxApi();