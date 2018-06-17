
interface AppOptions {
    /** 
     * 打开小程序的路径
    */
    path: string;
    /** 
     * 打开小程序的query
    */
    query: { [field: string]: number | string | boolean };
    /** 
     * 打开小程序的场景值
    */
    scene: number;
    /**
     * shareTicket，详见 获取更多转发信息
     */
    shareTicket: string;
    /**
     * 当场景为由从另一个小程序或公众号或App打开时，返回此字段
     */
    referrerInfo: {
        /**
         * 来源小程序或公众号或App的 appId，详见下方说明
         */
        appId: string
        /**
         * 来源小程序传过来的数据，scene=1037或1038时支持
         */
        extraData: object;
    }
}

interface App {
    globalData: any;

    setData(data: any, cb?: Function): void;
}

export abstract class WxApp {

    constructor(private app: App, public options?: AppOptions) {

    }

}

export function AppConfig<T extends { new(...args: any[]): any }>(config: {
    /**
     * 设置页面路径
     */
    pages: Array<string>;
    /**
     * 设置默认页面的窗口表现
     */
    window?: {
        /**
         * #000000 导航栏背景颜色，如#000000	
         */
        navigationBarBackgroundColor?: string;
        /**
         * white 导航栏标题颜色，仅支持 black/white	
         */
        navigationBarTextStyle?: string;
        /**
         * 导航栏标题文字内容	
         */
        navigationBarTitleText?: string;
        /**
         * default	导航栏样式，仅支持 default/custom。custom 模式可自定义导航栏，只保留右上角胶囊状的按钮	微信版本 6.6.0
         */
        navigationStyle?: string;
        /**
         * #ffffff	窗口的背景色	
         */
        backgroundColor?: string;
        /**
         *	dark	下拉背景字体、loading 图的样式，仅支持 dark/light	 
         */
        backgroundTextStyle?: string;
        /**
         * 	#ffffff	顶部窗口的背景色，仅 iOS 支持	微信版本 6.5.16
         */
        backgroundColorTop?: string;
        /**
         * #ffffff	底部窗口的背景色，仅 iOS 支持	微信版本 6.5.16
         */
        backgroundColorBottom?: string;
        /**
         * false	是否开启下拉刷新，详见页面相关事件处理函数	
         */
        enablePullDownRefresh?: boolean;
        /**
         * 50	页面上拉触底事件触发时距页面底部距离，单位为px
         */
        onReachBottomDistance?: number;
    };
    /**
     * 设置底部 tab 的表现
     */
    tabBar?: {
        /**
         * tab 上的文字默认颜色
         */
        color: string;
        /**
         * tab 上的文字选中时的颜色
         */
        selectedColor: string;
        /**
         * tab 的背景色
         */
        backgroundColor: string;
        /**
         * black	tabbar上边框的颜色， 仅支持 black/white
         */
        borderStyle?: string;
        /**
         * tab 的列表，详见 list 属性说明，最少2个、最多5个 tab
         */
        list: Array<{
            /**
             * 页面路径，必须在 pages 中先定义
             */
            pagePath: string;
            /**
             * tab 上按钮文字
             */
            text: string;
            /**
             * 图片路径，icon 大小限制为40kb，建议尺寸为 81px * 81px，当 postion 为 top 时，此参数无效，不支持网络图片
             */
            iconPath?: string;
            /**
             * 选中时的图片路径，icon 大小限制为40kb，建议尺寸为 81px * 81px ，当 postion 为 top 时，此参数无效
             */
            selectedIconPath?: string
        }>;
        /**
         *bottom	可选值 bottom、top 
         */
        position?: string;
    };
    /**
     * 设置网络超时时间
     */
    networkTimeout?: {
        /**
         * wx.request的超时时间，单位毫秒，默认为：60000
         */
        request?: number;
        /**
         * wx.connectSocket的超时时间，单位毫秒，默认为：60000
         */
        connectSocket?: number;
        /**
         * wx.uploadFile的超时时间，单位毫秒，默认为：60000
         */
        uploadFile?: number;
        /**
         * wx.downloadFile的超时时间，单位毫秒，默认为：60000
         */
        downloadFile?: number;
    };
    /**
     * 设置是否开启 debug 模式
     */
    debug?: boolean;
}) {
    return (constructor: T) => {
        return class extends constructor {
            config = config;
        }
    }
}