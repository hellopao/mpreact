interface Page<S> {
    data: S;
    setData(data: Partial<S>, cb?: Function): void;
}

/**
 * 小程序Page类, P为page query,S为Page state
 */
export abstract class WxPage<P, S> {

    state: Partial<S>;
    query: P;

    constructor(private page: Page<S>, options: P) {
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

    abstract template: JSX.Element;

    mounted?(): void;

    setState(state: Partial<S>, cb?: Function) {
        this.state = Object.assign({}, this.state, state);
        return new Promise((resolve, reject) => {
            this.page.setData(state, () => {
                cb && cb();
                resolve();
            })
        })
    }

    navigateTo(page: string, query: { [key: string]: number | string | boolean } = {}) {
        let url = page + `?${Object.keys(query).map(key => `${key}=${query[key]}`).join('&')}`;
        return wx.navigateTo({ url });
    }

    setTitle(title: string) {
        wx.setNavigationBarTitle({ title })
    }
}

export function PageConfig<T extends { new(...args: any[]): any }>(config: {
    /**
     * #000000	导航栏背景颜色，如"#000000"
     */
    navigationBarBackgroundColor?: string;
    /**
     * 	white	导航栏标题颜色，仅支持 black/white
     */
    navigationBarTextStyle?: string;
    /**
     * 		导航栏标题文字内容
     */
    navigationBarTitleText?: string;
    /**
     * #ffffff	窗口的背景色
     */
    backgroundColor?: string;
    /**
     * dark	下拉背景字体、loading 图的样式，仅支持 dark/light
     */
    backgroundTextStyle?: string;
    /**
     * 	false	是否开启下拉刷新，详见页面相关事件处理函数。
     */
    enablePullDownRefresh?: boolean;
    /**
     * false	设置为 true 则页面整体不能上下滚动；只在 page.json 中有效，无法在 app.json 中设置该项
     */
    disableScroll?: boolean;
    /**
     * 50	页面上拉触底事件触发时距页面底部距离，单位为px
     */
    onReachBottomDistance?: number;
}) {
    return (constructor: T) => {
        return class extends constructor {
        }
    }
}
