
declare namespace WXML {
        
    interface WxBaseTag {
        wx_if?: Boolean;
        wx_elif?: Boolean;
        wx_else?: null;
        wx_for?: Array<any>;
        wx_key?: string;
        wx_for_item?: string;
        wx_for_index?: string;
    }

    interface WxmlElement extends WxBaseTag {
        id?: string;
        class?: string;
        style?: string;
        [property: string]: any;
    }

    
    interface WxBaseEvent {
        /**
         * 事件类型
         */
        type: string;
        /**
         * 事件生成时的时间戳
         */
        timeStamp: number;
        /**
         * 触发事件的组件的一些属性值集合
         */
        target: {
            /**
             * 事件源组件的id
             */
            id: string;
            /**
             * 当前组件的类型
             */
            tagName: string;
            /**
             * 事件源组件上由data-开头的自定义属性组成的集合
             */
            dataset: {
                [key: string]: any;
            };
            offsetTop: number;
            offsetLeft: number;
        };
        /**
         * 当前组件的一些属性值集合
         */
        currentTarget: {
            /**
             * 事件源组件的id
             */
            id: string;
            /**
             * 当前组件的类型
             */
            tagName: string;
            /**
             * 事件源组件上由data-开头的自定义属性组成的集合
             */
            dataset: {
                [key: string]: any;
            };
            offsetTop: number;
            offsetLeft: number;
        };
    }

    interface WxCanvasTouch {
        /**
             * 触摸点的标识符
             */
        identifier: number;
        /** 
         * 距离 Canvas 左上角的距离，Canvas 的左上角为原点 ，横向为X轴，纵向为Y轴
         */
        x: number;
        y: number;
    }

    interface WxTouch {
        /**
         * 触摸点的标识符
         */
        identifier: number;
        /** 
         * 距离文档左上角的距离，文档的左上角为原点 ，横向为X轴，纵向为Y轴
         */
        pageX: number;
        pageY: number;
        /** 
         * 距离页面可显示区域（屏幕除去导航条）左上角距离，横向为X轴，纵向为Y轴
         */
        clientX: number;
        clientY: number;
    }

    interface WxEvent extends WxBaseEvent {
        touches: Array<WxTouch | WxCanvasTouch>;
        changedTouches: Array<WxTouch | WxCanvasTouch>;
        detail: any;
    }


    interface EventHandle {
        (e: WxEvent): void;
    }

    /** 视图容器。 */
    interface View extends WxmlElement {
            
        /** 指定按下去的样式类。当 hover-class="none" 时，没有点击态效果; none */
        'hover-class'?: string;
                
        /** 指定是否阻止本节点的祖先节点出现点击态; false */
        'hover-stop-propagation'?: boolean;
                
        /** 按住后多久出现点击态，单位毫秒; 50 */
        'hover-start-time'?: number;
                
        /** 手指松开后点击态保留时间，单位毫秒; 400 */
        'hover-stay-time'?: number;
                
    }

    /** 可滚动视图区域。 */
    interface ScrollView extends WxmlElement {
            
        /** 允许横向滚动; false */
        'scroll-x'?: boolean;
                
        /** 允许纵向滚动; false */
        'scroll-y'?: boolean;
                
        /** 距顶部/左边多远时（单位px），触发 scrolltoupper 事件; 50 */
        'upper-threshold'?: number;
                
        /** 距底部/右边多远时（单位px），触发 scrolltolower 事件; 50 */
        'lower-threshold'?: number;
                
        /** 设置竖向滚动条位置;  */
        'scroll-top'?: number;
                
        /** 设置横向滚动条位置;  */
        'scroll-left'?: number;
                
        /** 值应为某子元素id（id不能以数字开头）。设置哪个方向可滚动，则在哪个方向滚动到该元素;  */
        'scroll-into-view'?: string;
                
        /** 在设置滚动条位置时使用动画过渡; false */
        'scroll-with-animation'?: boolean;
                
        /** iOS点击顶部状态栏、安卓双击标题栏时，滚动条返回顶部，只支持竖向; false */
        'enable-back-to-top'?: boolean;
                
        /** 滚动到顶部/左边，会触发 scrolltoupper 事件;  */
        bindscrolltoupper?: EventHandle;
                
        /** 滚动到底部/右边，会触发 scrolltolower 事件;  */
        bindscrolltolower?: EventHandle;
                
        /** 滚动时触发，event.detail = {scrollLeft, scrollTop, scrollHeight, scrollWidth, deltaX, deltaY};  */
        bindscroll?: EventHandle;
                
    }

    /** 滑块视图容器。 */
    interface Swiper extends WxmlElement {
            
        /** 是否显示面板指示点; false */
        'indicator-dots'?: boolean;
                
        /** 指示点颜色; rgba(0, 0, 0, .3) */
        'indicator-color'?: string;
                
        /** 当前选中的指示点颜色; #000000 */
        'indicator-active-color'?: string;
                
        /** 是否自动切换; false */
        autoplay?: boolean;
                
        /** 当前所在滑块的 index; 0 */
        current?: number;
                
        /** 当前所在滑块的 item-id ，不能与 current 被同时指定; "" */
        'current-item-id'?: string;
                
        /** 自动切换时间间隔; 5000 */
        interval?: number;
                
        /** 滑动动画时长; 500 */
        duration?: number;
                
        /** 是否采用衔接滑动; false */
        circular?: boolean;
                
        /** 滑动方向是否为纵向; false */
        vertical?: boolean;
                
        /** 前边距，可用于露出前一项的一小部分，接受 px 和 rpx 值; "0px" */
        'previous-margin'?: string;
                
        /** 后边距，可用于露出后一项的一小部分，接受 px 和 rpx 值; "0px" */
        'next-margin'?: string;
                
        /** 同时显示的滑块数量; 1 */
        'display-multiple-items'?: number;
                
        /** 是否跳过未显示的滑块布局，设为 true 可优化复杂情况下的滑动性能，但会丢失隐藏状态滑块的布局信息; false */
        'skip-hidden-item-layout'?: boolean;
                
        /** current 改变时会触发 change 事件，event.detail = {current: current, source: source};  */
        bindchange?: EventHandle;
                
        /** 动画结束时会触发 animationfinish 事件，event.detail 同上;  */
        bindanimationfinish?: EventHandle;
                
    }

    /** 仅可放置在<swiper/>组件中，宽高自动设置为100%。 */
    interface SwiperItem extends WxmlElement {
            
        /** 是否显示面板指示点; false */
        'indicator-dots'?: boolean;
                
        /** 指示点颜色; rgba(0, 0, 0, .3) */
        'indicator-color'?: string;
                
        /** 当前选中的指示点颜色; #000000 */
        'indicator-active-color'?: string;
                
        /** 是否自动切换; false */
        autoplay?: boolean;
                
        /** 当前所在滑块的 index; 0 */
        current?: number;
                
        /** 当前所在滑块的 item-id ，不能与 current 被同时指定; "" */
        'current-item-id'?: string;
                
        /** 自动切换时间间隔; 5000 */
        interval?: number;
                
        /** 滑动动画时长; 500 */
        duration?: number;
                
        /** 是否采用衔接滑动; false */
        circular?: boolean;
                
        /** 滑动方向是否为纵向; false */
        vertical?: boolean;
                
        /** 前边距，可用于露出前一项的一小部分，接受 px 和 rpx 值; "0px" */
        'previous-margin'?: string;
                
        /** 后边距，可用于露出后一项的一小部分，接受 px 和 rpx 值; "0px" */
        'next-margin'?: string;
                
        /** 同时显示的滑块数量; 1 */
        'display-multiple-items'?: number;
                
        /** 是否跳过未显示的滑块布局，设为 true 可优化复杂情况下的滑动性能，但会丢失隐藏状态滑块的布局信息; false */
        'skip-hidden-item-layout'?: boolean;
                
        /** current 改变时会触发 change 事件，event.detail = {current: current, source: source};  */
        bindchange?: EventHandle;
                
        /** 动画结束时会触发 animationfinish 事件，event.detail 同上;  */
        bindanimationfinish?: EventHandle;
                
    }

    /**  */
    interface MovableArea extends WxmlElement {
            
        /** 当里面的movable-view设置为支持双指缩放时，设置此值可将缩放手势生效区域修改为整个movable-area; false */
        'scale-area'?: boolean;
                
    }

    /**  */
    interface MovableView extends WxmlElement {
            
        /** 当里面的movable-view设置为支持双指缩放时，设置此值可将缩放手势生效区域修改为整个movable-area; false */
        'scale-area'?: boolean;
                
    }

    /**  */
    interface CoverView extends WxmlElement {
            
    }

    /**  */
    interface CoverImage extends WxmlElement {
            
    }

    /** 图标。 */
    interface Icon extends WxmlElement {
            
        /** icon的类型，有效值：success, success_no_circle, info, warn, waiting, cancel, download, search, clear;  */
        type?: string;
                
        /** icon的大小，单位px; 23 */
        size?: number;
                
        /** icon的颜色，同css的color;  */
        color?: string;
                
    }

    /** 文本。 */
    interface Text extends WxmlElement {
            
        /** 文本是否可选; false */
        selectable?: boolean;
                
        /** 显示连续空格; false */
        space?: string;
                
        /** 是否解码; false */
        decode?: boolean;
                
    }

    /**  */
    interface RichText extends WxmlElement {
            
        /** 节点列表 / HTML String; [] */
        nodes?: string|Array<any>;
                
    }

    /** 进度条。 */
    interface Progress extends WxmlElement {
            
        /** 百分比0~100; 无 */
        percent?: number;
                
        /** 在进度条右侧显示百分比; false */
        'show-info'?: boolean;
                
        /** 进度条线的宽度，单位px; 6 */
        'stroke-width'?: number;
                
        /** 进度条颜色 （请使用 activeColor）; #09BB07 */
        color?: string;
                
        /** 已选择的进度条的颜色;  */
        activeColor?: string;
                
        /** 未选择的进度条的颜色;  */
        backgroundColor?: string;
                
        /** 进度条从左往右的动画; false */
        active?: boolean;
                
        /** backwards: 动画从头播；forwards：动画从上次结束点接着播; backwards */
        'active-mode'?: string;
                
    }

    /** 按钮。 */
    interface Button extends WxmlElement {
            
        /** 按钮的大小; default */
        size?: string;
                
        /** 按钮的样式类型; default */
        type?: string;
                
        /** 按钮是否镂空，背景色透明; false */
        plain?: boolean;
                
        /** 是否禁用; false */
        disabled?: boolean;
                
        /** 名称前是否带 loading 图标; false */
        loading?: boolean;
                
        /** 用于 <form/> 组件，点击分别会触发 <form/> 组件的 submit/reset 事件;  */
        'form-type'?: string;
                
        /** 微信开放能力;  */
        'open-type'?: string;
                
        /** 打开 APP 时，向 APP 传递的参数;  */
        'app-parameter'?: string;
                
        /** 指定按钮按下去的样式类。当 hover-class="none" 时，没有点击态效果; button-hover */
        'hover-class'?: string;
                
        /** 指定是否阻止本节点的祖先节点出现点击态; false */
        'hover-stop-propagation'?: boolean;
                
        /** 按住后多久出现点击态，单位毫秒; 20 */
        'hover-start-time'?: number;
                
        /** 手指松开后点击态保留时间，单位毫秒; 70 */
        'hover-stay-time'?: number;
                
        /** 用户点击该按钮时，会返回获取到的用户信息，从返回参数的detail中获取到的值同wx.getUserInfo;  */
        bindgetuserinfo?: EventHandle;
                
        /** 指定返回用户信息的语言，zh_CN 简体中文，zh_TW 繁体中文，en 英文。; en */
        lang?: string;
                
        /** 会话来源;  */
        'session-from'?: string;
                
        /** 会话内消息卡片标题; 当前标题 */
        'send-message-title'?: string;
                
        /** 会话内消息卡片点击跳转小程序路径; 当前分享路径 */
        'send-message-path'?: string;
                
        /** 会话内消息卡片图片; 截图 */
        'send-message-img'?: string;
                
        /** 显示会话内消息卡片; false */
        'show-message-card'?: boolean;
                
        /** 客服消息回调;  */
        bindcontact?: EventHandle;
                
        /** 获取用户手机号回调;  */
        bindgetphonenumber?: EventHandle;
                
        /** 当使用开放能力时，发生错误的回调;  */
        binderror?: EventHandle;
                
    }

    /** 多项选择器，内部由多个checkbox组成。 */
    interface CheckboxGroup extends WxmlElement {
            
        /** <checkbox-group/>中选中项发生改变是触发 change 事件，detail = {value:[选中的checkbox的value的数组]};  */
        bindchange?: EventHandle;
                
    }

    /** 多选项目。 */
    interface Checkbox extends WxmlElement {
            
        /** <checkbox-group/>中选中项发生改变是触发 change 事件，detail = {value:[选中的checkbox的value的数组]};  */
        bindchange?: EventHandle;
                
    }

    /** 表单，将组件内的用户输入的<switch/> <input/> <checkbox/> <slider/> <radio/> <picker/> 提交。 */
    interface Form extends WxmlElement {
            
        /** ; 是否返回 formId 用于发送模板消息 */
        'report-submit'?: boolean;
                
        /** ; 携带 form 中的数据触发 submit 事件，event.detail = {value : {'name': 'value'} , formId: ''} */
        bindsubmit?: EventHandle;
                
        /** ; 表单重置时会触发 reset 事件 */
        bindreset?: EventHandle;
                
    }

    /** 输入框。 */
    interface Input extends WxmlElement {
            
        /** 输入框的初始内容;  */
        value?: string;
                
        /** input 的类型; "text" */
        type?: string;
                
        /** 是否是密码类型; false */
        password?: boolean;
                
        /** 输入框为空时占位符;  */
        placeholder?: string;
                
        /** 指定 placeholder 的样式;  */
        'placeholder-style'?: string;
                
        /** 指定 placeholder 的样式类; "input-placeholder" */
        'placeholder-class'?: string;
                
        /** 是否禁用; false */
        disabled?: boolean;
                
        /** 最大输入长度，设置为 -1 的时候不限制最大长度; 140 */
        maxlength?: number;
                
        /** 指定光标与键盘的距离，单位 px 。取 input 距离底部的距离和 cursor-spacing 指定的距离的最小值作为光标与键盘的距离; 0 */
        'cursor-spacing'?: number;
                
        /** (即将废弃，请直接使用 focus )自动聚焦，拉起键盘; false */
        'auto-focus'?: boolean;
                
        /** 获取焦点; false */
        focus?: boolean;
                
        /** 设置键盘右下角按钮的文字; "done" */
        'confirm-type'?: string;
                
        /** 点击键盘右下角按钮时是否保持键盘不收起; false */
        'confirm-hold'?: boolean;
                
        /** 指定focus时的光标位置;  */
        cursor?: number;
                
        /** 光标起始位置，自动聚集时有效，需与selection-end搭配使用; -1 */
        'selection-start'?: number;
                
        /** 光标结束位置，自动聚集时有效，需与selection-start搭配使用; -1 */
        'selection-end'?: number;
                
        /** 键盘弹起时，是否自动上推页面; true */
        'adjust-position'?: boolean;
                
        /** 当键盘输入时，触发input事件，event.detail = {value, cursor}，处理函数可以直接 return 一个字符串，将替换输入框的内容。;  */
        bindinput?: EventHandle;
                
        /** 输入框聚焦时触发，event.detail = { value, height }，height 参数在基础库 1.9.90 起支持;  */
        bindfocus?: EventHandle;
                
        /** 输入框失去焦点时触发，event.detail = {value: value};  */
        bindblur?: EventHandle;
                
        /** 点击完成按钮时触发，event.detail = {value: value};  */
        bindconfirm?: EventHandle;
                
    }

    /** 用来改进表单组件的可用性，使用for属性找到对应的id，或者将控件放在该标签下，当点击时，就会触发对应的控件。 */
    interface Label extends WxmlElement {
            
        /** ; 绑定控件的 id */
        for?: string;
                
    }

    /** 从底部弹起的滚动选择器，现支持五种选择器，通过mode来区分，分别是普通选择器，多列选择器，时间选择器，日期选择器，省市区选择器，默认是普通选择器。 */
    interface Picker extends WxmlElement {
            
        /** mode为 selector 或 multiSelector 时，range 有效; [] */
        range?: Array<any>;
                
        /** 当 range 是一个 Object Array 时，通过 range-key 来指定 Object 中 key 的值作为选择器显示内容;  */
        'range-key'?: string;
                
        /** value 的值表示选择了 range 中的第几个（下标从 0 开始）; 0 */
        value?: number;
                
        /** value 改变时触发 change 事件，event.detail = {value: value};  */
        bindchange?: EventHandle;
                
        /** 是否禁用; false */
        disabled?: boolean;
                
        /** 取消选择或点遮罩层收起 picker 时触发;  */
        bindcancel?: EventHandle;
                
    }

    /** 嵌入页面的滚动选择器 */
    interface PickerView extends WxmlElement {
            
        /** ; 数组中的数字依次表示 picker-view 内的 picker-view-colume 选择的第几项（下标从 0 开始），数字大于 picker-view-column 可选项长度时，选择最后一项。 */
        value?: Array<number>;
                
        /** ; 设置选择器中间选中框的样式 */
        'indicator-style'?: string;
                
        /** 1.1.0; 设置选择器中间选中框的类名 */
        'indicator-class'?: string;
                
        /** 1.5.0; 设置蒙层的样式 */
        'mask-style'?: string;
                
        /** 1.5.0; 设置蒙层的类名 */
        'mask-class'?: string;
                
        /** ; 当滚动选择，value 改变时触发 change 事件，event.detail = {value: value}；value为数组，表示 picker-view 内的 picker-view-column 当前选择的是第几项（下标从 0 开始） */
        bindchange?: EventHandle;
                
    }

    /** 仅可放置于<picker-view />中，其孩子节点的高度会自动设置成与picker-view的选中框的高度一致 */
    interface PickerViewColumn extends WxmlElement {
            
        /** ; 数组中的数字依次表示 picker-view 内的 picker-view-colume 选择的第几项（下标从 0 开始），数字大于 picker-view-column 可选项长度时，选择最后一项。 */
        value?: Array<number>;
                
        /** ; 设置选择器中间选中框的样式 */
        'indicator-style'?: string;
                
        /** 1.1.0; 设置选择器中间选中框的类名 */
        'indicator-class'?: string;
                
        /** 1.5.0; 设置蒙层的样式 */
        'mask-style'?: string;
                
        /** 1.5.0; 设置蒙层的类名 */
        'mask-class'?: string;
                
        /** ; 当滚动选择，value 改变时触发 change 事件，event.detail = {value: value}；value为数组，表示 picker-view 内的 picker-view-column 当前选择的是第几项（下标从 0 开始） */
        bindchange?: EventHandle;
                
    }

    /**  */
    interface Tips extends WxmlElement {
            
        /** ; 数组中的数字依次表示 picker-view 内的 picker-view-colume 选择的第几项（下标从 0 开始），数字大于 picker-view-column 可选项长度时，选择最后一项。 */
        value?: Array<number>;
                
        /** ; 设置选择器中间选中框的样式 */
        'indicator-style'?: string;
                
        /** 1.1.0; 设置选择器中间选中框的类名 */
        'indicator-class'?: string;
                
        /** 1.5.0; 设置蒙层的样式 */
        'mask-style'?: string;
                
        /** 1.5.0; 设置蒙层的类名 */
        'mask-class'?: string;
                
        /** ; 当滚动选择，value 改变时触发 change 事件，event.detail = {value: value}；value为数组，表示 picker-view 内的 picker-view-column 当前选择的是第几项（下标从 0 开始） */
        bindchange?: EventHandle;
                
    }

    /** 单项选择器，内部由多个<radio/>组成。 */
    interface RadioGroup extends WxmlElement {
            
        /** <radio-group/> 中的选中项发生变化时触发 change 事件，event.detail = {value: 选中项radio的value};  */
        bindchange?: EventHandle;
                
    }

    /** 单选项目 */
    interface Radio extends WxmlElement {
            
        /** <radio-group/> 中的选中项发生变化时触发 change 事件，event.detail = {value: 选中项radio的value};  */
        bindchange?: EventHandle;
                
    }

    /** 滑动选择器。 */
    interface Slider extends WxmlElement {
            
        /** 最小值; 0 */
        min?: number;
                
        /** 最大值; 100 */
        max?: number;
                
        /** 步长，取值必须大于 0，并且可被(max - min)整除; 1 */
        step?: number;
                
        /** 是否禁用; false */
        disabled?: boolean;
                
        /** 当前取值; 0 */
        value?: number;
                
        /** 背景条的颜色（请使用 backgroundColor）; #e9e9e9 */
        color?: string;
                
        /** 已选择的颜色（请使用 activeColor）; #1aad19 */
        'selected-color'?: string;
                
        /** 已选择的颜色; #1aad19 */
        activeColor?: string;
                
        /** 背景条的颜色; #e9e9e9 */
        backgroundColor?: string;
                
        /** 滑块的大小，取值范围为 12 - 28; 28 */
        'block-size'?: number;
                
        /** 滑块的颜色; #ffffff */
        'block-color'?: string;
                
        /** 是否显示当前 value; false */
        'show-value'?: boolean;
                
        /** 完成一次拖动后触发的事件，event.detail = {value: value};  */
        bindchange?: EventHandle;
                
        /** 拖动过程中触发的事件，event.detail = {value: value};  */
        bindchanging?: EventHandle;
                
    }

    /** 开关选择器。 */
    interface Switch extends WxmlElement {
            
        /** 是否选中; false */
        checked?: boolean;
                
        /** 样式，有效值：switch, checkbox; switch */
        type?: string;
                
        /** checked 改变时触发 change 事件，event.detail={ value:checked};  */
        bindchange?: EventHandle;
                
        /** switch 的颜色，同 css 的 color;  */
        color?: string;
                
    }

    /** 多行输入框。 */
    interface Textarea extends WxmlElement {
            
        /** 输入框的内容;  */
        value?: string;
                
        /** 输入框为空时占位符;  */
        placeholder?: string;
                
        /** 指定 placeholder 的样式;  */
        'placeholder-style'?: string;
                
        /** 指定 placeholder 的样式类; textarea-placeholder */
        'placeholder-class'?: string;
                
        /** 是否禁用; false */
        disabled?: boolean;
                
        /** 最大输入长度，设置为 -1 的时候不限制最大长度; 140 */
        maxlength?: number;
                
        /** 自动聚焦，拉起键盘。; false */
        'auto-focus'?: boolean;
                
        /** 获取焦点; false */
        focus?: boolean;
                
        /** 是否自动增高，设置auto-height时，style.height不生效; false */
        'auto-height'?: boolean;
                
        /** 如果 textarea 是在一个 position:fixed 的区域，需要显示指定属性 fixed 为 true; false */
        fixed?: boolean;
                
        /** 指定光标与键盘的距离，单位 px 。取 textarea 距离底部的距离和 cursor-spacing 指定的距离的最小值作为光标与键盘的距离; 0 */
        'cursor-spacing'?: number;
                
        /** 指定focus时的光标位置;  */
        cursor?: number;
                
        /** 是否显示键盘上方带有”完成“按钮那一栏; true */
        'show-confirm-bar'?: boolean;
                
        /** 光标起始位置，自动聚集时有效，需与selection-end搭配使用; -1 */
        'selection-start'?: number;
                
        /** 光标结束位置，自动聚集时有效，需与selection-start搭配使用; -1 */
        'selection-end'?: number;
                
        /** 键盘弹起时，是否自动上推页面; true */
        'adjust-position'?: boolean;
                
        /** 输入框聚焦时触发，event.detail = { value, height }，height 参数在基础库 1.9.90 起支持;  */
        bindfocus?: EventHandle;
                
        /** 输入框失去焦点时触发，event.detail = {value, cursor};  */
        bindblur?: EventHandle;
                
        /** 输入框行数变化时调用，event.detail = {height: 0, heightRpx: 0, lineCount: 0};  */
        bindlinechange?: EventHandle;
                
        /** 当键盘输入时，触发 input 事件，event.detail = {value, cursor}， bindinput 处理函数的返回值并不会反映到 textarea 上 ;  */
        bindinput?: EventHandle;
                
        /** 点击完成时， 触发 confirm 事件，event.detail = {value: value};  */
        bindconfirm?: EventHandle;
                
    }

    /** 页面链接。 */
    interface Navigator extends WxmlElement {
            
        /** 应用内的跳转链接;  */
        url?: string;
                
        /** 跳转方式; navigate */
        'open-type'?: string;
                
        /** 当 open-type 为 'navigateBack' 时有效，表示回退的层数;  */
        delta?: number;
                
        /** 指定点击时的样式类，当hover-class="none"时，没有点击态效果; navigator-hover */
        'hover-class'?: string;
                
        /** 指定是否阻止本节点的祖先节点出现点击态; false */
        'hover-stop-propagation'?: boolean;
                
        /** 按住后多久出现点击态，单位毫秒; 50 */
        'hover-start-time'?: number;
                
        /** 手指松开后点击态保留时间，单位毫秒; 600 */
        'hover-stay-time'?: number;
                
    }

    /** 注意：1.6.0 版本开始，该组件不再维护。建议使用能力更强的 wx.createInnerAudioContext 接口 */
    interface Audio extends WxmlElement {
            
        /** audio 组件的唯一标识符;  */
        id?: string;
                
        /** 要播放音频的资源地址;  */
        src?: string;
                
        /** 是否循环播放; false */
        loop?: boolean;
                
        /** 是否显示默认控件; false */
        controls?: boolean;
                
        /** 默认控件上的音频封面的图片资源地址，如果 controls 属性值为 false 则设置 poster 无效;  */
        poster?: string;
                
        /** 默认控件上的音频名字，如果 controls 属性值为 false 则设置 name 无效; 未知音频 */
        name?: string;
                
        /** 默认控件上的作者名字，如果 controls 属性值为 false 则设置 author 无效; 未知作者 */
        author?: string;
                
        /** 当发生错误时触发 error 事件，detail = {errMsg: MediaError.code};  */
        binderror?: EventHandle;
                
        /** 当开始/继续播放时触发play事件;  */
        bindplay?: EventHandle;
                
        /** 当暂停播放时触发 pause 事件;  */
        bindpause?: EventHandle;
                
        /** 当播放进度改变时触发 timeupdate 事件，detail = {currentTime, duration};  */
        bindtimeupdate?: EventHandle;
                
        /** 当播放到末尾时触发 ended 事件;  */
        bindended?: EventHandle;
                
    }

    /** 图片。 */
    interface Image extends WxmlElement {
            
        /** 图片资源地址;  */
        src?: string;
                
        /** 图片裁剪、缩放的模式; 'scaleToFill' */
        mode?: string;
                
        /** 图片懒加载。只针对page与scroll-view下的image有效; false */
        'lazy-load'?: boolean;
                
        /** 当错误发生时，发布到 AppService 的事件名，事件对象event.detail = {errMsg: 'something wrong'};  */
        binderror?: EventHandle;
                
        /** 当图片载入完毕时，发布到 AppService 的事件名，事件对象event.detail = {height:'图片高度px', width:'图片宽度px'};  */
        bindload?: EventHandle;
                
    }

    /** 视频。 */
    interface Video extends WxmlElement {
            
        /** 要播放视频的资源地址;  */
        src?: string;
                
        /** 指定视频初始播放位置;  */
        'initial-time'?: number;
                
        /** 指定视频时长;  */
        duration?: number;
                
        /** 是否显示默认播放控件（播放/暂停按钮、播放进度、时间）; true */
        controls?: boolean;
                
        /** 弹幕列表;  */
        'danmu-list'?: Array<object>;
                
        /** 是否显示弹幕按钮，只在初始化时有效，不能动态变更; false */
        'danmu-btn'?: boolean;
                
        /** 是否展示弹幕，只在初始化时有效，不能动态变更; false */
        'enable-danmu'?: boolean;
                
        /** 是否自动播放; false */
        autoplay?: boolean;
                
        /** 是否循环播放; false */
        loop?: boolean;
                
        /** 是否静音播放; false */
        muted?: boolean;
                
        /** 在非全屏模式下，是否开启亮度与音量调节手势; false */
        'page-gesture'?: boolean;
                
        /** 设置全屏时视频的方向，不指定则根据宽高比自动判断。有效值为 0（正常竖向）, 90（屏幕逆时针90度）, -90（屏幕顺时针90度）;  */
        direction?: number;
                
        /** 若不设置，宽度大于240时才会显示; true */
        'show-progress'?: boolean;
                
        /** 是否显示全屏按钮; true */
        'show-fullscreen-btn'?: boolean;
                
        /** 是否显示视频底部控制栏的播放按钮; true */
        'show-play-btn'?: boolean;
                
        /** 是否显示视频中间的播放按钮; true */
        'show-center-play-btn'?: boolean;
                
        /** 是否开启控制进度的手势; true */
        'enable-progress-gesture'?: boolean;
                
        /** 当视频大小与 video 容器大小不一致时，视频的表现形式。contain：包含，fill：填充，cover：覆盖; contain */
        objectFit?: string;
                
        /** 视频封面的图片网络资源地址，如果 controls 属性值为 false 则设置 poster 无效;  */
        poster?: string;
                
        /** 当开始/继续播放时触发play事件;  */
        bindplay?: EventHandle;
                
        /** 当暂停播放时触发 pause 事件;  */
        bindpause?: EventHandle;
                
        /** 当播放到末尾时触发 ended 事件;  */
        bindended?: EventHandle;
                
        /** 播放进度变化时触发，event.detail = {currentTime, duration} 。触发频率 250ms 一次;  */
        bindtimeupdate?: EventHandle;
                
        /** 当视频进入和退出全屏是触发，event.detail = {fullScreen, direction}，direction取为 vertical 或 horizontal;  */
        bindfullscreenchange?: EventHandle;
                
        /** 视频出现缓冲时触发;  */
        bindwaiting?: EventHandle;
                
        /** 视频播放出错时触发;  */
        binderror?: EventHandle;
                
    }

    /**  */
    interface Camera extends WxmlElement {
            
        /** 前置或后置，值为front, back; back */
        'device-position'?: string;
                
        /** 闪光灯，值为auto, on, off; auto */
        flash?: string;
                
        /** 摄像头在非正常终止时触发，如退出后台等情况;  */
        bindstop?: EventHandle;
                
        /** 用户不允许使用摄像头时触发;  */
        binderror?: EventHandle;
                
    }

    /**  */
    interface LivePlayer extends WxmlElement {
            
        /** 音视频地址。目前仅支持 flv, rtmp 格式;  */
        src?: string;
                
        /** live（直播），RTC（实时通话）; live */
        mode?: string;
                
        /** 自动播放; false */
        autoplay?: boolean;
                
        /** 是否静音; false */
        muted?: boolean;
                
        /** 画面方向，可选值有 vertical，horizontal; vertical */
        orientation?: string;
                
        /** 填充模式，可选值有 contain，fillCrop; contain */
        'object-fit'?: string;
                
        /** 进入后台时是否静音; false */
        'background-mute'?: boolean;
                
        /** 最小缓冲区，单位s; 1 */
        'min-cache'?: number;
                
        /** 最大缓冲区，单位s; 3 */
        'max-cache'?: number;
                
        /** 播放状态变化事件，detail = {code};  */
        bindstatechange?: EventHandle;
                
        /** 全屏变化事件，detail = {direction, fullScreen};  */
        bindfullscreenchange?: EventHandle;
                
        /** 网络状态通知，detail = {info};  */
        bindnetstatus?: EventHandle;
                
    }

    /**  */
    interface LivePusher extends WxmlElement {
            
        /** 推流地址。目前仅支持 flv, rtmp 格式;  */
        url?: string;
                
        /** SD（标清）, HD（高清）, FHD（超清）, RTC（实时通话）; RTC */
        mode?: string;
                
        /** 自动推流; false */
        autopush?: boolean;
                
        /** 是否静音; false */
        muted?: boolean;
                
        /** 开启摄像头; true */
        'enable-camera'?: boolean;
                
        /** 自动聚集; true */
        'auto-focus'?: boolean;
                
        /** vertical，horizontal; vertical */
        orientation?: string;
                
        /** 美颜; 0 */
        beauty?: number;
                
        /** 美白; 0 */
        whiteness?: number;
                
        /** 宽高比，可选值有 3:4, 9:16; 9:16 */
        aspect?: string;
                
        /** 最小码率; 200 */
        'min-bitrate'?: number;
                
        /** 最大码率; 1000 */
        'max-bitrate'?: number;
                
        /** 进入后台时推流的等待画面;  */
        'waiting-image'?: string;
                
        /** 等待画面资源的MD5值;  */
        'waiting-image-md5'?: string;
                
        /** 进入后台时是否静音; false */
        'background-mute'?: boolean;
                
        /** 状态变化事件，detail = {code};  */
        bindstatechange?: EventHandle;
                
        /** 网络状态通知，detail = {info};  */
        bindnetstatus?: EventHandle;
                
        /** 渲染错误事件，detail = {errMsg, errCode};  */
        binderror?: EventHandle;
                
    }

    /** 地图。 */
    interface Map extends WxmlElement {
            
        /** 中心经度;  */
        longitude?: number;
                
        /** 中心纬度;  */
        latitude?: number;
                
        /** 缩放级别，取值范围为5-18; 16 */
        scale?: number;
                
        /** 标记点;  */
        markers?: Array<any>;
                
        /** 即将移除，请使用 markers;  */
        covers?: Array<any>;
                
        /** 路线;  */
        polyline?: Array<any>;
                
        /** 圆;  */
        circles?: Array<any>;
                
        /** 控件;  */
        controls?: Array<any>;
                
        /** 缩放视野以包含所有给定的坐标点;  */
        'include-points'?: Array<any>;
                
        /** 显示带有方向的当前定位点;  */
        'show-location'?: boolean;
                
        /** 点击标记点时触发;  */
        bindmarkertap?: EventHandle;
                
        /** 点击标记点对应的气泡时触发;  */
        bindcallouttap?: EventHandle;
                
        /** 点击控件时触发;  */
        bindcontroltap?: EventHandle;
                
        /** 视野发生变化时触发;  */
        bindregionchange?: EventHandle;
                
        /** 点击地图时触发;  */
        bindtap?: EventHandle;
                
        /** 在地图渲染更新完成时触发;  */
        bindupdated?: EventHandle;
                
    }

    /** 画布。 */
    interface Canvas extends WxmlElement {
            
        /** canvas 组件的唯一标识符;  */
        'canvas-id'?: string;
                
        /** 当在 canvas 中移动时且有绑定手势事件时，禁止屏幕滚动以及下拉刷新; false */
        'disable-scroll'?: boolean;
                
        /** 手指触摸动作开始;  */
        bindtouchstart?: EventHandle;
                
        /** 手指触摸后移动;  */
        bindtouchmove?: EventHandle;
                
        /** 手指触摸动作结束;  */
        bindtouchend?: EventHandle;
                
        /** 手指触摸动作被打断，如来电提醒，弹窗;  */
        bindtouchcancel?: EventHandle;
                
        /** 手指长按 500ms 之后触发，触发了长按事件后进行移动不会触发屏幕的滚动;  */
        bindlongtap?: EventHandle;
                
        /** 当发生错误时触发 error 事件，detail = {errMsg: 'something wrong'};  */
        binderror?: EventHandle;
                
    }

    /**  */
    interface OpenData extends WxmlElement {
            
        /** 开放数据类型;  */
        type?: string;
                
        /** 当 type="groupName" 时生效, 群id;  */
        'open-gid'?: string;
                
        /** 当 type="user*" 时生效，以哪种语言展示 userInfo，有效值有：en, zh_CN, zh_TW; en */
        lang?: string;
                
    }

    /**  */
    interface WebView extends WxmlElement {
            
        /** webview 指向网页的链接。需登录小程序管理后台配置域名白名单。;  */
        src?: string;
                
        /** 网页向小程序 postMessage 时，会在特定时机（小程序后退、组件销毁、分享）触发并收到消息。e.detail = { data };  */
        bindmessage?: EventHandle;
                
    }

    /**  */
    interface Ad extends WxmlElement {
            
        /** 广告单元id，可在小程序管理后台的流量主模块新建;  */
        'unit-id'?: string;
                
    }

    /** 组件插槽 */
    interface Slot extends WxmlElement {
        name?: string;
    }
}

declare global {
    namespace JSX {
        interface ElementAttributesProperty { props: {}; }
        interface ElementChildrenAttribute { children: {}; }
        interface Element { }
        interface IntrinsicElements {


            view: WXML.View;
            
            'scroll-view': WXML.ScrollView;
            
            swiper: WXML.Swiper;
            
            'swiper-item': WXML.SwiperItem;
            
            'movable-area': WXML.MovableArea;
            
            'movable-view': WXML.MovableView;
            
            'cover-view': WXML.CoverView;
            
            'cover-image': WXML.CoverImage;
            
            icon: WXML.Icon;
            
            text: WXML.Text;
            
            'rich-text': WXML.RichText;
            
            progress: WXML.Progress;
            
            button: WXML.Button;
            
            'checkbox-group': WXML.CheckboxGroup;
            
            checkbox: WXML.Checkbox;
            
            form: WXML.Form;
            
            input: WXML.Input;
            
            label: WXML.Label;
            
            picker: WXML.Picker;
            
            'picker-view': WXML.PickerView;
            
            'picker-view-column': WXML.PickerViewColumn;
            
            tips: WXML.Tips;
            
            'radio-group': WXML.RadioGroup;
            
            radio: WXML.Radio;
            
            slider: WXML.Slider;
            
            switch: WXML.Switch;
            
            textarea: WXML.Textarea;
            
            navigator: WXML.Navigator;
            
            audio: WXML.Audio;
            
            image: WXML.Image;
            
            video: WXML.Video;
            
            camera: WXML.Camera;
            
            'live-player': WXML.LivePlayer;
            
            'live-pusher': WXML.LivePusher;
            
            map: WXML.Map;
            
            canvas: WXML.Canvas;
            
            'open-data': WXML.OpenData;
            
            'web-view': WXML.WebView;
            
            ad: WXML.Ad;
            
        }
    }
}