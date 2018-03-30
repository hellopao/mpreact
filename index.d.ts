/// <reference path="./types/wxml.d.ts" />
/// <reference path="./types/wx.d.ts" />

declare namespace mp {
    /********** App **********/

    /**
     * App生命周期
     */
    interface AppLifeCycle {
        /**
         * 生命周期函数--监听小程序初始化	当小程序初始化完成时，会触发 onLaunch（全局只触发一次）
         */
        onLaunch?(): void;
        /**
         * 生命周期函数--监听小程序显示	当小程序启动，或从后台进入前台显示，会触发 onShow
         */
        onShow?(): void;
        /**
         * 生命周期函数--监听小程序隐藏	当小程序从前台进入后台，会触发 onHide
         */
        onHide?(): void;
        /**
         * 错误监听函数	当小程序发生脚本错误，或者 api 调用失败时，会触发 onError 并带上错误信息
         */
        onError?(): void;
    }

    interface WxApp extends AppLifeCycle {

    }

    class WxApp {

    }

    /********** Page **********/

    /**
     * Page生命周期
     */
    interface PageLifeCycle {
        /**
         * 生命周期函数--监听页面加载
         */
        onLoad?(): void;
        /**
         * 生命周期函数--监听页面初次渲染完成
         */
        onReady?(): void;
        /**
         * 生命周期函数--监听页面显示 
         */
        onShow?(): void;
        /**
         * 生命周期函数--监听页面隐藏
         */
        onHide?(): void;
        /**
         * 生命周期函数--监听页面卸载
         */
        onUnload?(): void;
        /**
         * 页面相关事件处理函数--监听用户下拉动作
         */
        onPullDownRefresh?(): void;
        /**
         * 页面上拉触底事件的处理函数
         */
        onReachBottom?(): void;
        /**
         * 用户点击右上角转发
         */
        onShareAppMessage?(): void;
        /**
         * 页面滚动触发事件的处理函数
         */
        onPageScroll?(): void;
    }

    interface Page<S> {
        data: S;
        setData(data: Partial<S>, cb?: Function): void;
    }

    interface WxPage<P, S> extends PageLifeCycle { }

    class WxPage<P, S> {

        state: Readonly<S>;
        query: P;

        constructor(page: Page<S>, options: P);

        setState(state: Partial<S>, cb?: Function): Promise<void>

        navigateTo(page: string, query?: { [key: string]: number | string | boolean }): Promise<void>;

        setTitle(title: string): Promise<void>;

    }

    /********** 组件 **********/

    /**
     * 组件生命周期
     */
    interface ComponentLifeCycle {
        /**
         * 组件生命周期函数，在组件实例进入页面节点树时执行，注意此时不能调用 setData
         */
        created?(): void;
        /**
         * 组件生命周期函数，在组件实例进入页面节点树时执行
         */
        attached?(): void;
        /**
         * 组件生命周期函数，在组件布局完成后执行，此时可以获取节点信息（使用 SelectorQuery ）
         */
        ready?(): void;
        /**
         * 组件生命周期函数，在组件实例被移动到节点树另一个位置时执行
         */
        moved?(): void;
        /**
         * 组件生命周期函数，在组件实例被从页面节点树移除时执行
         */
        detached?(): void;
    }


    interface Component<S> {
        /**
         * 组件的文件路径
         */
        is: string;
        /**
         * 节点id
         */
        id: string;
        /**
         * 节点dataset
         */
        dataset: string;
        /**
         * 组件数据，包括内部数据和属性值
         */
        data: S;
        properties: any;
        methods: {
            [method: string]: Function;
        };
        /**
         * 
         * 设置data并执行视图层渲染
         */
        setData: (data: Partial<S>, cb?: Function) => void;
        /**
         * 检查组件是否具有 behavior （检查时会递归检查被直接或间接引入的所有behavior）
         */
        hasBehavior: (behavior: object) => boolean;
        /**
         * 
         * 触发事件，参见 组件事件
         */
        triggerEvent: (name: string, detail: object, options: any) => void;
        /** 
         * 创建一个 SelectorQuery 对象，选择器选取范围为这个组件实例内
         */
        createSelectorQuery: () => any;
        /**
         * 使用选择器选择组件实例节点，返回匹配到的第一个组件实例对象
         */
        selectComponent: (selector: string) => void;
        /**
         * 使用选择器选择组件实例节点，返回匹配到的全部组件实例对象组成的数组
         */
        selectAllComponents: (selector: string) => void;
        /**
         * 获取所有这个关系对应的所有关联节点，参见 组件间关系
         */
        getRelationNodes: (relationKey: string) => Array<any>;
    }

    interface WxComponent<P, S> extends ComponentLifeCycle { }

    class WxComponent<P, S> {
        constructor(component: Component<S>);
        /**
         * 组件属性
         */
        props: Readonly<P>;
        /**
         * 组件状态
         */
        state: Readonly<S>;

        template: JSX.Element;

        setState(state: Partial<S>): Promise<void>;

    }

}

declare global {
    namespace JSX {
        interface ElementAttributesProperty { props: {}; }
        interface Element { }
        interface IntrinsicElements {
            template: WXML.Template;
            block: WXML.Block;
            import: WXML.Import;
            view: WXML.View;
            'scroll-view': WXML.ScrollView;
            swiper: WXML.Swiper;
            'swiper-item': WXML.SwiperItem;
            icon: WXML.Icon;
            text: WXML.Text;
            progress: WXML.Progress;
            button: WXML.Form.Button;
            'checkbox-group': WXML.Form.CheckboxGroup;
            checkbox: WXML.Form.Checkbox;
            form: WXML.Form.Form;
            input: WXML.Form.Input;
            label: WXML.Form.Label;
            picker: WXML.Form.Picker;
            'radio-group': WXML.Form.RadioGroup;
            radio: WXML.Form.Radio;
            slider: WXML.Form.Slider;
            switch: WXML.Form.Switch;
            textarea: WXML.Form.TextArea;
            navigator: WXML.Navigator;
            audio: WXML.Audio;
            image: WXML.Image;
            video: WXML.Video;
            map: WXML.Map;
            canvas: WXML.Canvas;
            slot: WXML.Slot;
        }
    }
}

export default wx;

export declare class WxApp extends mp.WxApp { }
export declare class WxPage<P, S> extends mp.WxPage<P, S> { }
export declare class WxComponent<P, S> extends mp.WxComponent<P, S>{ }
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
}): (constructor: T) => any;


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
}): (constructor: T) => any;
