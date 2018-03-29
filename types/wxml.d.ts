/// <reference path="./wxss.d.ts" />

declare namespace WXML {
    /** JSX 写number不能用引号 所以适配下 */
    type WMLNumber = string;
    type WMLBoolean = 'true' | 'false' | string;

    type ICommonEventArgs = {
        target?: any;
        currentTarget?: {
            id: string;
            dataset: any;
        };
        detail?: {
            value?: string;
        }
    }

    interface EventHandle {

    }

    interface Template {
        is?: string;
        data?: any;
        name?: string;
    }

    interface Block {
        [prop: string]: any;
    }

    interface Import {
        src: string;
    }

    interface Tag {
        wx_for?: Array<any>;
        wx_if?: Boolean;
        wx_elif?: Boolean;
        wx_else?: null;
        wx_key?: string;
        wx_for_item?: string;
        wx_for_index?: string;
    }

    interface WxmlElement extends Tag, TouchEvent {
        id?: string;
        class?: string;
        style?: WXSS.CSSProperties | string;
        [property: string]: any;
    }

    interface TouchEvent {
        catchtap?: EventHandle;
        bindtap?: EventHandle;
        catchtouchstart?: EventHandle;
        bindtouchstart?: EventHandle;
        catchtouchmove?: EventHandle;
        bindtouchmove?: EventHandle;
        catchtouchend?: EventHandle;
        bindtouchend?: EventHandle;
        catchtouchcancel?: Function;
        bindtouchcancel?: Function;
        catchlongtap?: EventHandle;
        bindlongtap?: EventHandle;
    }
    interface View extends WxmlElement {

    }

    interface ScrollView extends WxmlElement {
        /** 默认值:false	允许横向滚动 */
        scrollX?: WMLBoolean;
        /** 默认值:false	允许纵向滚动 */
        scrollY?: WMLBoolean;
        /** 默认值:50	距顶部/左边多远时（单位px），触发 scrolltoupper 事件 */
        upperThreshold?: WMLNumber;
        /** 默认值:50	距底部/右边多远时（单位px），触发 scrolltolower 事件 */
        lowerThreshold?: WMLNumber;
        /** 设置竖向滚动条位置 */
        scrollTop?: WMLNumber;
        /** 设置横向滚动条位置 */
        scrollLeft?: WMLNumber;
        /** 值应为某子元素id，则滚动到该元素，元素顶部对齐滚动区域顶部 */
        scrollIntoView?: string;
        /** 滚动到顶部/左边，会触发 scrolltoupper 事件 */
        bindscrolltoupper?: EventHandle;
        /** 滚动到底部/右边，会触发 scrolltolower 事件 */
        bindscrolltolower?: EventHandle;
        /** 滚动时触发，event.detail = {scrollLeft, scrollTop, scrollHeight, scrollWidth, deltaX, deltaY} */
        bindscroll?: EventHandle;
    }

    interface Swiper extends WxmlElement {
        /** false	是否显示面板指示点 */
        indicatorDots?: WMLBoolean;
        /** false	是否自动切换 */
        autoplay?: WMLBoolean;
        /** 0	当前所在页面的 index */
        current?: WMLNumber;
        /** 5000	自动切换时间间隔 */
        interval?: WMLNumber;
        /** 1000	滑动动画时长 */
        duration?: WMLNumber;
        /** current 改变时会触发 change 事件，event.detail = {current: current} */
        bindchange?: EventHandle;
        /**是否采用衔接滑动	 */
        circular?: WMLBoolean;
        /**滑动方向是否为纵向 */
        vertical?: WMLBoolean;
    }
    interface SwiperItem extends WxmlElement {

    }

    interface Text extends WxmlElement {

    }

    interface Icon extends WxmlElement {
        /** icon的类型，有效值：success, success_no_circle, info, warn, waiting, cancel, download, search, clear */
        type: 'success' | 'success_no_circle' | 'info' | 'warn' | 'waiting' | 'cancel' | 'download' | 'search' | 'clear' | string;
        /** 23	icon的大小，单位px */
        size: WMLNumber;
        /** icon的颜色，同css的color */
        color?: string;
    }

    interface Progress extends WxmlElement {
        /** 百分比0~100 */
        percent?: WMLNumber;
        /** 在进度条右侧显示百分比, 默认false */
        showInfo?: WMLBoolean;
        /** 进度条线的宽度，单位px */
        strokeWidth: WMLNumber;
        /** 进度条颜色 */
        color?: string;
        /** 进度条从左往右的动画 */
        active?: WMLBoolean;
    }

    /**
        mode有12种模式，其中3种是缩放模式，9种是裁剪模式。
        模式	说明
        scaleToFill	不保持纵横比缩放图片，使图片的宽高完全拉伸至填满 image 元素
        aspectFit	保持纵横比缩放图片，使图片的长边能完全显示出来。也就是说，可以完整地将图片显示出来。
        aspectFill	保持纵横比缩放图片，只保证图片的短边能完全显示出来。也就是说，图片通常只在水平或垂直方向是完整的，另一个方向将会发生截取。
        裁剪模式
        模式	说明
        top	不缩放图片，只显示图片的顶部区域
        bottom	不缩放图片，只显示图片的底部区域
        center	不缩放图片，只显示图片的中间区域
        left	不缩放图片，只显示图片的左边区域
        right	不缩放图片，只显示图片的右边区域
        top left	不缩放图片，只显示图片的左上边区域
        top right	不缩放图片，只显示图片的右上边区域
        bottom left	不缩放图片，只显示图片的左下边区域
        bottom right	不缩放图片，只显示图片的右下边区域
     */
    type ImageMode = 'scaleToFill' | 'aspectFit' | 'aspectFill' | 'top' | 'bottom' | 'center' | 'left' | 'right' | 'top left' | 'top right' | 'bottom left' | 'bottom right';

    interface Image extends WxmlElement {
        src?: string;
        mode?: ImageMode;
        bindload?: Function;
        binderror?: Function;
        width?: WMLNumber;
        height?: WMLNumber;
    }
    namespace Form {
        interface FormElement extends WxmlElement {
            name?: string;
            value?: string | WMLNumber;
            bindchange?: EventHandle;
            disabled?: WMLBoolean;
        }
        interface Button extends FormElement {
            /** 无	有效值：submit, reset，用于 <form/> 组件，点击分别会触发 submit/reset 事件 */
            formType?: 'submit' | 'reset';
            /** default	有效值 default, mini */
            size?: string;
            /** default	按钮的样式类型，有效值 primary, default, warn */
            type?: string;
            /** false	按钮是否镂空，背景色透明 */
            plain?: WMLBoolean;
            /** false	是否禁用 */
            disabled?: WMLBoolean;
            /** false	名称前是否带 loading 图标 */
            loading?: WMLBoolean;
            /** button-hover	指定按钮按下去的样式类。当 hover-class="none" 时，没有点击态效果 */
            hoverClass?: string;
        }
        interface CheckboxGroup extends FormElement {

        }
        interface Checkbox extends FormElement {
            checked?: WMLBoolean;
        }
        interface Form extends FormElement {
            /** 是否返回formId用于发送模板消息 */
            reportSubmit?: WMLBoolean;
            bindsubmit?: EventHandle;
            bindreset?: EventHandle;

        }
        interface Input extends FormElement {
            value?: string;
            /** text	input 的类型，有效值：text, number, idcard, digit, time, date */
            type: 'text' | 'number' | 'idcard' | 'digit' | 'time' | 'date' | string;
            /** false	是否是密码类型 */
            password?: WMLBoolean;
            /** 输入框为空时占位符 */
            placeholder?: string;
            /** 指定 placeholder 的样式 */
            placeholderStyle?: string;
            /** input-placeholder	指定 placeholder 的样式类 */
            placeholderClass?: string;
            /** 140	最大输入长度，设置为 -1 的时候不限制最大长度 */
            maxlength?: WMLNumber;
            /** false	自动聚焦，拉起键盘。页面中只能有一个 <input/> 或 <textarea/> 设置 auto-focus 属性 */
            autoFocus?: WMLBoolean;
            /** false	获取焦点（开发工具暂不支持） */
            focus?: WMLBoolean;
            /** 除了date/time类型外的输入框，当键盘输入时，触发input事件，event.detail = {value: value}，处理函数可以直接 return 一个字符串，将替换输入框的内容。 */
            bindinput?: EventHandle;
            /** 输入框聚焦时触发，event.detail = {value: value} */
            bindfocus?: EventHandle;
            /** 输入框失去焦点时触发，event.detail = {value: value} */
            bindblur?: EventHandle;
        }
        interface Label extends FormElement {
            for?: string;
        }
        interface Picker extends FormElement {
            mode?: 'selector' | 'time' | 'date' | string;
            /** []	mode为 selector 时，range 有效 */
            range?: string;
            /** mode=selector,value为number类型, 
             * mode=time,value为hh:mm 
             * mode=date,value为yyyy-MM-dd
             * */
            value?: string | WMLNumber;
            /** 有效范围起始 hh:mm/yyyy-MM-dd */
            start?: string;
            /** 有效范围结束 hh:mm/yyyy-MM-dd */
            end?: string;
            /**
             * 默认为 day	有效值year,month,day，表示选择器的粒度
             */
            fields?: 'year' | 'month' | 'day' | string;
        }

        interface RadioGroup extends FormElement {

        }
        interface Radio extends FormElement {
            checked?: WMLBoolean;
        }
        interface Slider extends FormElement {
            /** 默认值:0	最小值 */
            min?: WMLNumber;
            /** 默认值:100	最大值 */
            max?: WMLNumber;
            /** 默认值:1	步长，取值必须大于0，并且可被(max - min)整除 */
            step?: WMLNumber;
            /** 当前取值 */
            value?: WMLNumber;
            /** false	是否显示当前 value */
            showValue?: WMLBoolean;
            /** 完成一次拖动后触发的事件，event.detail = {value: value} */
            bindchange?: EventHandle;
        }
        interface Switch extends FormElement {
            checked?: WMLBoolean;
            type: 'switch' | 'checkbox' | string;
        }
        interface TextArea extends Input {
            /** 输入框行数变化时调用，event.detail = {height: 0, heightRpx: 0, lineCount: 0} */
            bindlinechange: EventHandle;
        }
        interface RadioGroup extends FormElement {

        }
    }

    interface Audio extends WxmlElement {
        /** video 组件的唯一标识符 */
        id?: string;
        /** 要播放音频的资源地址 */
        src?: string;
        /** false	是否循环播放 */
        loop?: WMLBoolean;
        /** true	是否显示默认控件 */
        controls?: WMLBoolean;
        /** 默认控件上的音频封面的图片资源地址，如果 controls 属性值为 false 则设置 poster 无效 */
        poster?: string;
        /** 未知音频	默认控件上的音频名字，如果 controls 属性值为 false 则设置 name 无效 */
        name?: string;
        /** 未知作者	默认控件上的作者名字，如果 controls 属性值为 false 则设置 author 无效 */
        author?: string;
        /** 当发生错误时触发 error 事件，detail = {errMsg: MediaError.code} */
        binderror?: EventHandle;
        /** 当开始/继续播放时触发play事件 */
        bindplay?: EventHandle;
        /** 当暂停播放时触发 pause 事件 */
        bindpause?: EventHandle;
        /** 当播放进度改变时触发 timeupdate 事件，detail = {currentTime, duration} */
        bindtimeupdate?: EventHandle;
        /** 当播放到末尾时触发 ended 事件 */
        bindended?: EventHandle;
    }

    interface Video extends WxmlElement {
        /** 要播放视频的资源地址 */
        src?: string;
        /** true	是否显示默认播放控件（播放/暂停按钮、播放进度、时间） */
        controls?: WMLBoolean;
        /** Array		弹幕列表 */
        danmuList?: any[];
        /** false	是否显示弹幕按钮，只在初始化时有效，不能动态变更 */
        danmuBtn?: WMLBoolean;
        /** false	是否展示弹幕，只在初始化时有效，不能动态变更 */
        enableDanmu?: WMLBoolean;
        /** false	是否自动播放 */
        autoplay?: WMLBoolean;
        /** 当开始/继续播放时触发play事件 */
        bindplay?: EventHandle;
        /** 当暂停播放时触发 pause 事件 */
        bindpause?: EventHandle;
        /** 当播放到末尾时触发 ended 事件 */
        bindended?: EventHandle;
        /** 当发生错误时触发error事件，event.detail = {errMsg: 'something wrong'} */
        binderror?: EventHandle;
    }

    interface Map extends WxmlElement {
        /** 中心经度 */
        longitude: WMLNumber;
        /** 中心纬度 */
        latitude: WMLNumber;
        /** 16	缩放级别 */
        scale: WMLNumber;
        /** 标记点 */
        markers?: MapMarker[];
        /** 覆盖物 */
        covers?: MapCover[];
    }
    type MapMarker = {
        /** 纬度	浮点数，范围 -90 ~ 90 */
        latitude: WMLNumber;
        /** 经度	浮点数，范围 -180 ~ 180 */
        longitude: WMLNumber;
        /** 标注点名*/
        name: string;
        /** 标注点详细描述	否 */
        desc?: string;
    }
    type MapCover = {
        /** 纬度	是	浮点数，范围 -90 ~ 90 */
        latitude: WMLNumber;
        /** 经度	是	浮点数，范围 -180 ~ 180 */
        longitude: WMLNumber;
        /** 显示的图标	是	项目目录下的图片路径，支持相对路径写法 */
        iconPath: string;
        /** 旋转角度	否	顺时针旋转的角度，范围 0 ~ 360，默认为 0 */
        rotate?: string;
    }

    interface Navigator extends WxmlElement {
        /** 应用内的跳转链接 */
        url: string;
        /** false	是否关闭当前页面 */
        redirect?: WMLBoolean;
        /** navigator-hover	指定点击时的样式类，当hover-class="none"时，没有点击态效果 */
        hoverClass?: string;
    }


    interface Canvas extends WxmlElement {
        /** canvas 组件的唯一标识符 */
        'canvas-id': string;
        /** false	当在 canvas 中移动时，禁止屏幕滚动以及下拉刷新 */
        disableScroll?: WMLBoolean;
        /** 当发生错误时触发 error 事件，detail = {errMsg: 'something wrong'} */
        binderror?: EventHandle;
    }

    interface Slot extends WxmlElement {
        name?: string;
    }
}