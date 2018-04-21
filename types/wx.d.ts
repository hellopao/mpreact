/************************************************
 *                                               *
 *                 微信小程序  API                *
 *                                               *
 ************************************************/


declare namespace wx {

    import WxmlElement = WXML.WxmlElement;

    interface WxAnimation {
        /**
         * 透明度，参数范围 0~1
         */
        opacity(value: number): WxAnimation;

        /**
         * 颜色值
         */
        backgroundColor(color: string): WxAnimation;

        /**
         * 长度值，如果传入 Number 则默认使用 px，可传入其他自定义单位的长度值
         */
        width(length: number): WxAnimation;

        /**
         * 长度值，如果传入 Number 则默认使用 px，可传入其他自定义单位的长度值
         */
        height(length: number): WxAnimation;

        /**
         * 长度值，如果传入 Number 则默认使用 px，可传入其他自定义单位的长度值
         */
        top(length: number): WxAnimation;

        /**
         * 长度值，如果传入 Number 则默认使用 px，可传入其他自定义单位的长度值
         */
        left(length: number): WxAnimation;

        /**
         * 长度值，如果传入 Number 则默认使用 px，可传入其他自定义单位的长度值
         */
        bottom(length: number): WxAnimation;

        /**
         * 长度值，如果传入 Number 则默认使用 px，可传入其他自定义单位的长度值
         */
        right(length: number): WxAnimation;

        /**
         * deg的范围-180~180，从原点顺时针旋转一个deg角度
         */
        rotate(deg: number): WxAnimation;

        /**
         * deg的范围-180~180，在X轴旋转一个deg角度
         */
        rotateX(deg: number): WxAnimation;

        /**
         * deg的范围-180~180，在Y轴旋转一个deg角度
         */
        rotateY(deg: number): WxAnimation;

        /**
         * deg的范围-180~180，在Z轴旋转一个deg角度
         */
        rotateZ(deg: number): WxAnimation;

        /**
         * 同transform-function rotate3d
         */
        rotate3d(x: number, y: number, z: number, deg: number): WxAnimation;

        /**
         * 一个参数时，表示在X轴、Y轴同时缩放sx倍数；两个参数时表示在X轴缩放sx倍数，在Y轴缩放sy倍数
         */
        scale(sx: number, sy?: number): WxAnimation;

        /**
         * 在X轴缩放sx倍数
         */
        scaleX(sx: number): WxAnimation;

        /**
         * 在Y轴缩放sy倍数
         */
        scaleY(sy: number): WxAnimation;

        /**
         * 在Z轴缩放sy倍数
         */
        scaleZ(sz: number): WxAnimation;

        /**
         * 在X轴缩放sx倍数，在Y轴缩放sy倍数，在Z轴缩放sz倍数
         */
        scale3d(sx: number, sy: number, sz: number): WxAnimation;

        /**
         * 一个参数时，表示在X轴偏移tx，单位px；两个参数时，表示在X轴偏移tx，在Y轴偏移ty，单位px。
         */
        translate(tx: number, ty?: number): WxAnimation;

        /**
         * 在X轴偏移tx，单位px
         */
        translateX(tx: number): WxAnimation;

        /**
         * 在Y轴偏移tx，单位px
         */
        translateY(tx: number): WxAnimation;

        /**
         * 在Z轴偏移tx，单位px
         */
        translateZ(tx: number): WxAnimation;

        /**
         * 在X轴偏移tx，在Y轴偏移ty，在Z轴偏移tz，单位px
         */
        translate3d(tx: number, ty: number, tz: number): WxAnimation;

        /**
         * 参数范围-180~180；一个参数时，Y轴坐标不变，X轴坐标延顺时针倾斜ax度；两个参数时，分别在X轴倾斜ax度，在Y轴倾斜ay度
         */
        skew(ax: number, ay?: number): WxAnimation;

        /**
         * 参数范围-180~180；Y轴坐标不变，X轴坐标延顺时针倾斜ax度
         */
        skewX(ax: number): WxAnimation;

        /**
         * 参数范围-180~180；X轴坐标不变，Y轴坐标延顺时针倾斜ay度
         */
        skewY(ay: number): WxAnimation;

        /**
         * 同transform-function matrix
         */
        matrix(a: number, b: number, c: number, d: number, tx: number, ty: number): WxAnimation;

        /**
         * 同transform-function matrix3d
         */
        matrix3d(): WxAnimation;
    }

    interface WxCanvasContext {
        /**
         * 设置填充色, 如果没有设置 fillStyle，默认颜色为 black。
         */
        setFillStyle(color: string): void;

        /**
         * 设置边框颜色, 如果没有设置 fillStyle，默认颜色为 black。
         */
        setStrokeStyle(color: string): void;

        /**
         * 设置阴影
         */
        setShadow(offsetX: number, offsetY: number, blur: number, color: string): void;

        /**
         * 创建一个线性的渐变颜色。需要使用 addColorStop() 来指定渐变点，至少要两个。
         */
        createLinearGradient(x0: number, y0: number, x1: number, y1: number): void;

        /**
         * 创建一个圆形的渐变颜色。 起点在圆心，终点在圆环。 需要使用 addColorStop() 来指定渐变点，至少要两个。
         */
        createCircularGradient(x: number, y: number, r: number): void;

        /**
         * 创建一个颜色的渐变点。小于最小 stop 的部分会按最小 stop 的 color 来渲染，大于最大 stop 的部分会按最大 stop 的 color 来渲染。需要使用 addColorStop() 来指定渐变点，至少要两个。
         */
        addColorStop(stop: number, color: string): void;

        /**
         * 设置线条端点的样式
         */
        setLineCap(lineCap: 'butt' | 'round' | 'square'): void;

        /**
         * 设置两线相交处的样式
         */
        setLineJoin(lineJoin: 'bevel' | 'round' | 'miter'): void;

        /**
         * 设置线条宽度
         */
        setLineWidth(lineWidth: number): void;

        /**
         * 设置虚线
         */
        setLineDash(patten: number[], offset: number);

        /**
         * 设置最大倾斜
         */
        setMiterLimit(miterLimit: number): void;

        /**
         * 添加一个矩形路径到当前路径。
         */
        rect(x: number, y: number, width: number, height: number): void;

        /**
         * 填充一个矩形。用 setFillStyle() 设置矩形的填充色，如果没设置默认是黑色。
         */
        fillRect(x: number, y: number, width: number, height: number): void;

        /**
         * 一个矩形(非填充)。用 setFillStroke() 设置矩形线条的颜色，如果没设置默认是黑色。
         */
        strokeRect(x: number, y: number, width: number, height: number): void;

        /**
         * 在给定的矩形区域内，清除画布上的像素
         */
        clearRect(x: number, y: number, width: number, height: number): void;

        /**
         * 对当前路径进行填充
         */
        fill(): void;

        /**
         * 对当前路径进行描边
         */
        stroke(): void;

        /**
         * 开始一个路径
         */
        beginPath(): void;

        /**
         * 关闭一个路径
         */
        closePath(): void;

        /**
         * 把路径移动到画布中的指定点，但不创建线条。
         */
        moveTo(x: number, y: number): void;

        /**
         * 添加一个新点，然后在画布中创建从该点到最后指定点的线条。
         */
        lineTo(x: number, y: number): void;

        /**
         * 添加一个弧形路径到当前路径，顺时针绘制。
         */
        arc(x: number, y: number, radius: number, startAngle: number, sweepAngle: number): void;

        /**
         * 创建二次方贝塞尔曲线
         */
        quadraticCurveTo(cpx: number, cpy: number, x: number, y: number): void;

        /**
         * 创建三次方贝塞尔曲线
         */
        bezierCurveTo(cpx1: number, cpy1: number, cpx2: number, cpy2: number, x: number, y: number): void;

        /**
         * 对横纵坐标进行缩放
         */
        scale(scaleWidth: number/**横坐标缩放的倍数1 = 100%，0.5 = 50%，2 = 200%，依次类 */, scaleHeight: number/**    纵坐标轴缩放的倍数1 = 100%，0.5 = 50%，2 = 200%，依次类 */): void;

        /**
         * 对坐标轴进行顺时针旋转
         */
        rotate(deg: number/**degrees * Math.PI/180；degrees范围为0~360;旋转角度，以弧度计 */): void;

        /**
         * 对坐标原点进行缩放
         */
        translate(x: number/**水平坐标平移量 */, y: number/**竖直坐标平移量 */): void;

        /**
         * 设置字体字号
         */
        setFontSize(size: number): void;

        /**
         * 在画布上绘制被填充的文本
         */
        fillText(text: string, x: number, y: number): void;

        /**
         * 设置文字的对齐
         */
        setTextAlign(align: "left" | "center" | "right"): void;

        /**
         * 设置文字水平对齐
         */
        setTextBaseline(baseline: "top" | "bottom" | "middle" | "normal"): void;

        /**
         * 设置字体大小
         */
        setFontSize(fontSize: number): void;

        /**
         * 在画布上绘制图像
         */
        drawImage(imageResource: string, x: number, y: number, width: number, height: number): void;

        /**
         * 设置全局画笔透明度。
         */
        setGlobalAlpha(alpha: number): void;

        /**
         * 保存当前坐标轴的缩放、旋转、平移信息
         */
        save(): void;

        /**
         * 恢复之前保存过的坐标轴的缩放、旋转、平移信息
         */
        restore(): void;

        /**
         * 进行绘图
         */
        draw(reserve?: boolean): void;
    }

    interface WxAudioContext {
        /**
         * 播放
         */
        play: () => void;
        /**
         * 暂停
         */
        pause: () => void;
        /**
         * 跳转到指定位置，单位 s
         */
        seek: (position: number) => void;
    }

    interface WxVideoContext {
        /**
         * 播放
         */
        play: () => void;
        /**
         * 暂停
         */
        pause: () => void;
        /**
         * 跳转到指定位置，单位 s
         */
        seek: (position: number) => void;
        /**
         * 发送弹幕，danmu 包含两个属性 text, color。
         */
        sendDanmu: (danmu: { text: string; color: string; }) => void;
    }

    interface WxMapContext {
        /**
         * 获取当前地图中心的经纬度，返回的是 gcj02 坐标系，可以用于 wx.openLocation
         */
        getCenterLocation: (obj: {
            /**
             * 接口调用成功的回调函数 ，res = { longitude: "经度", latitude: "纬度"}
             */
            success?: (res: { longitude: string; latitude: string }) => void;
            /**
             * 接口调用失败的回调函数
             */
            fail?: () => void;
            /**
             * 接口调用结束的回调函数（调用成功、失败都会执行）
             */
            complete?: () => void;
        }) => void;
        /**
         * 将地图中心移动到当前定位点，需要配合map组件的show-location使用
         */
        moveToLocation: () => void;
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

    interface WxTouchEvent extends WxBaseEvent {
        touches: Array<WxTouch | WxCanvasTouch>;
        changedTouches: Array<WxTouch | WxCanvasTouch>;
    }

    interface SystemInfo {

        /**
         * 手机品牌
         */
        brand: string;
        /**
         * 手机型号
         */
        model: string;
        /**
         * 设备像素比
         */
        pixelRatio: number;
        /**
         * 屏幕宽度
         */
        screenWidth: number;
        /**
         * 屏幕高度
         */
        screenHeight: number;
        /**
         * 可使用窗口宽度
         */
        windowWidth: number;
        /**
         * 可使用窗口高度
         */
        windowHeight: number;
        /**
         * 微信设置的语言
         */
        language: string;
        /**
         * 微信版本号
         */
        version: string;
        /**
         * 操作系统版本
         */
        system: string;
        /**
         * 客户端平台
         */
        platform: string;
        /**
         * 用户字体大小设置。以“我-设置-通用-字体大小”中的设置为准，单位：px
         */
        fontSizeSetting: number;
        /**
         * 客户端基础库版本
         */
        SDKVersion: string;

    }

    // # 网络 #

    /**
     * 发起网络请求。使用前请先阅读说明。
     */
    export function request(obj: {
        /**
         *
         */
        url: string;
        /**
         *
         */
        data?: any;
        /**
         *
         */
        header?: any;
        /**
         * GET
         */
        method?: string;
        /**
         * json
         */
        dataType?: string;
    }): Promise<any>;

    /**
     * 将本地资源上传到开发者服务器，客户端发起一个 HTTPS POST 请求，其中 content-type 为 multipart/form-data 。使用前请先阅读说明。
     */
    export function uploadFile(obj: {
        /**
         * 开发者服务器 url
         */
        url: string;
        /**
         * 要上传文件资源的路径
         */
        filePath: string;
        /**
         * 文件对应的 key , 开发者在服务器端通过这个 key 可以获取到文件二进制内容
         */
        name: string;
        /**
         * HTTP 请求 Header, header 中不能设置 Referer
         */
        header?: any;
        /**
         * HTTP 请求中其他额外的 form data
         */
        formData?: any;
    }): Promise<any>;

    /**
     * 下载文件资源到本地，客户端直接发起一个 HTTP GET 请求，返回文件的本地临时路径。使用前请先阅读说明。
     */
    export function downloadFile(obj: {
        /**
         * 下载资源的 url
         */
        url: string;
        /**
         * HTTP 请求 Header，header 中不能设置 Referer
         */
        header?: any;
    }): Promise<any>;

    /**
     * 创建一个 WebSocket 连接。使用前请先阅读说明。
     */
    export function connectSocket(obj: {
        /**
         * 开发者服务器接口地址，必须是 wss 协议，且域名必须是后台配置的合法域名
         */
        url: string;
        /**
         * HTTP Header , header 中不能设置 Referer
         */
        header?: any;
        /**
         * 默认是GET，有效值：OPTIONS, GET, HEAD, POST, PUT, DELETE, TRACE, CONNECT
         */
        method?: string;
        /**
         * 子协议数组
         */
        protocols?: string[];
    }): Promise<any>;

    /**
     * 监听WebSocket连接打开事件。
     */
    export function onSocketOpen(callback: Function): void;

    /**
     * 监听WebSocket错误。
     */
    export function onSocketError(callback: Function): void;

    /**
     * 通过 WebSocket 连接发送数据，需要先 wx.connectSocket，并在 wx.onSocketOpen 回调之后才能发送。
     */
    export function sendSocketMessage(obj: {
        /**
         * 需要发送的内容
         */
        data: undefined;
    }): Promise<any>;

    /**
     * 监听WebSocket接受到服务器的消息事件。
     */
    export function onSocketMessage(callback: Function): void;

    /**
     * 关闭WebSocket连接。
     */
    export function closeSocket(obj: {
        /**
         * 一个数字值表示关闭连接的状态号，表示连接被关闭的原因。如果这个参数没有被指定，默认的取值是1000 （表示正常连接关闭）
         */
        code?: number;
        /**
         * 一个可读的字符串，表示连接被关闭的原因。这个字符串必须是不长于123字节的UTF-8 文本（不是字符）
         */
        reason?: string;
        /**
         * 接口调用成功的回调函数
         */
        success?: Function;
        /**
         * 接口调用失败的回调函数
         */
        fail?: Function;
        /**
         * 接口调用结束的回调函数（调用成功、失败都会执行）
         */
        complete?: Function;
    }): void;

    /**
     * 监听WebSocket关闭。
     */
    export function onSocketClose(callback: Function): void;

    // # 媒体 #

    /**
     * 从本地相册选择图片或使用相机拍照。
     */
    export function chooseImage(obj: {
        /**
         * 最多可以选择的图片张数，默认9
         */
        count?: number;
        /**
         * original 原图，compressed 压缩图，默认二者都有
         */
        sizeType?: string[];
        /**
         * album 从相册选图，camera 使用相机，默认二者都有
         */
        sourceType?: string[];
    }): Promise<any>;

    /**
     * 预览图片。
     */
    export function previewImage(obj: {
        /**
         * 当前显示图片的链接，不填则默认为 urls 的第一张
         */
        current?: string;
        /**
         * 需要预览的图片链接列表
         */
        urls: string[];
    }): Promise<any>;

    /**
     * 获取图片信息
     */
    export function getImageInfo(obj: {
        /**
         * 图片的路径，可以是相对路径，临时文件路径，存储文件路径，网络图片路径
         */
        src: string;
    }): Promise<any>;

    export function saveImageToPhotosAlbum(obj: {
        /**
         * 图片文件路径，可以是临时文件路径也可以是永久文件路径，不支持网络图片路径
         */
        filePath: string;
    }): Promise<any>;

    /**
     * 开始录音。当主动调用wx.stopRecord，或者录音超过1分钟时自动结束录音，返回录音文件的临时文件路径。当用户离开小程序时，此接口无法调用。
     */
    export function startRecord(): Promise<any>;

    /**
     * ​主动调用停止录音。
     */
    export function stopRecord(): void;

    export function getRecorderManager(): Promise<any>;

    /**
     * 开始播放语音，同时只允许一个语音文件正在播放，如果前一个语音文件还没播放完，将中断前一个语音播放。
     */
    export function playVoice(obj: {
        /**
         * 需要播放的语音文件的文件路径
         */
        filePath: string;
        /**
         * 指定录音时长，到达指定的录音时长后会自动停止录音，单位：秒，默认值：60
         */
        duration?: number;
    }): Promise<any>;

    /**
     * 暂停正在播放的语音。再次调用wx.playVoice播放同一个文件时，会从暂停处开始播放。如果想从头开始播放，需要先调用 wx.stopVoice。
     */
    export function pauseVoice(): void;

    /**
     * 结束播放语音。
     */
    export function stopVoice(): void;

    /**
     * 获取后台音乐播放状态。
     */
    export function getBackgroundAudioPlayerState(): Promise<any>;

    /**
     * 使用后台播放器播放音乐，对于微信客户端来说，只能同时有一个后台音乐在播放。当用户离开小程序后，音乐将暂停播放；当用户点击“显示在聊天顶部”时，音乐不会暂停播放；当用户在其他小程序占用了音乐播放器，原有小程序内的音乐将停止播放。
     */
    export function playBackgroundAudio(obj: {
        /**
         * 音乐链接，目前支持的格式有 m4a, aac, mp3, wav
         */
        dataUrl: string;
        /**
         * 音乐标题
         */
        title?: string;
        /**
         * 封面URL
         */
        coverImgUrl?: string;
    }): Promise<any>;

    /**
     * 暂停播放音乐。
     */
    export function pauseBackgroundAudio(): void;

    /**
     * 控制音乐播放进度。
     */
    export function seekBackgroundAudio(obj: {
        /**
         * 音乐位置，单位：秒
         */
        position: number;
    }): Promise<any>;

    /**
     * 停止播放音乐。
     */
    export function stopBackgroundAudio(): void;

    /**
     * 监听音乐播放。
     */
    export function onBackgroundAudioPlay(callback: Function): void;

    /**
     * 监听音乐暂停。
     */
    export function onBackgroundAudioPause(callback: Function): void;

    /**
     * 监听音乐停止。
     */
    export function onBackgroundAudioStop(callback: Function): void;

    export function getBackgroundAudioManager(): Promise<any>;

    /**
     * 1.6.0 版本开始，建议使用能力更强的 wx.createInnerAudioContext 接口
     */
    export function createAudioContext(): WxAudioContext;

    /**
     * 拍摄视频或从手机相册中选视频，返回视频的临时文件路径。
     */
    export function chooseVideo(obj: {
        /**
         * album 从相册选视频，camera 使用相机拍摄，默认为：['album', 'camera']
         */
        sourceType?: string[];
        /**
         * 是否压缩所选的视频源文件，默认值为true，需要压缩
         */
        compressed?: undefined;
        /**
         * 拍摄视频最长拍摄时间，单位秒。最长支持 60 秒
         */
        maxDuration?: number;
        /**
         * 默认调起的为前置还是后置摄像头。front: 前置，back: 后置，默认 back
         */
        camera?: string;
    }): Promise<any>;

    export function saveVideoToPhotosAlbum(obj: {
        /**
         * 视频文件路径，可以是临时文件路径也可以是永久文件路径
         */
        filePath: string;
    }): Promise<any>;

    /**
     * 创建并返回 video 上下文 videoContext 对象
     */
    export function createVideoContext(): WxVideoContext;

    export function createCameraContext(): void;

    // # 文件 #

    /**
     * 保存文件到本地。注意：saveFile 会把临时文件移动，因此调用成功后传入的 tempFilePath 将不可用
     */
    export function saveFile(obj: {
        /**
         * 需要保存的文件的临时路径
         */
        tempFilePath: string;
    }): Promise<any>;

    /**
     * 获取本地已保存的文件列表
     */
    export function getSavedFileList(): Promise<any>;

    /**
     * 获取本地文件的文件信息。此接口只能用于获取已保存到本地的文件，若需要获取临时文件信息，请使用 wx.getFileInfo 接口。
     */
    export function getSavedFileInfo(obj: {
        /**
         * 文件路径
         */
        filePath: string;
    }): Promise<any>;

    /**
     * 删除本地存储的文件
     */
    export function removeSavedFile(obj: {
        /**
         * 需要删除的文件路径
         */
        filePath: string;
    }): Promise<any>;

    /**
     * 新开页面打开文档，支持格式：doc, xls, ppt, pdf, docx, xlsx, pptx
     */
    export function openDocument(obj: {
        /**
         * 文件路径，可通过 downFile 获得
         */
        filePath: string;
        /**
         * 文件类型，指定文件类型打开文件，有效值 doc, xls, ppt, pdf, docx, xlsx, pptx
         */
        fileType?: string;
    }): Promise<any>;

    export function getFileInfo(obj: {
        /**
         * 本地文件路径
         */
        filePath: string;
        /**
         * 计算文件摘要的算法，默认值 md5，有效值：md5，sha1
         */
        digestAlgorithm?: string;
    }): Promise<any>;

    // # 数据缓存 #

    /**
     * 将数据存储在本地缓存中指定的 key 中，会覆盖掉原来该 key 对应的内容，这是一个异步接口。
     */
    export function setStorage(obj: {
        /**
         * 本地缓存中的指定的 key
         */
        key: string;
        /**
         * 需要存储的内容
         */
        data: any;
    }): Promise<any>;

    /**
     * 将 data 存储在本地缓存中指定的 key 中，会覆盖掉原来该 key 对应的内容，这是一个同步接口。
     */
    export function setStorageSync(key: string, data: any,): void;

    /**
     * 从本地缓存中异步获取指定 key 对应的内容。
     */
    export function getStorage(obj: {
        /**
         * 本地缓存中的指定的 key
         */
        key: string;
    }): Promise<any>;

    /**
     * 从本地缓存中同步获取指定 key 对应的内容。
     */
    export function getStorageSync(key: string): void;

    /**
     * 异步获取当前storage的相关信息
     */
    export function getStorageInfo(): Promise<any>;

    /**
     * 同步获取当前storage的相关信息
     */
    export function getStorageInfoSync(): void;

    /**
     * 从本地缓存中异步移除指定 key 。
     */
    export function removeStorage(obj: {
        /**
         * 本地缓存中的指定的 key
         */
        key: string;
    }): Promise<any>;

    /**
     * 从本地缓存中同步移除指定 key 。
     */
    export function removeStorageSync(key: string): void;

    /**
     * 清理本地数据缓存。
     */
    export function clearStorage(): void;

    /**
     * 同步清理本地数据缓存
     */
    export function clearStorageSync(): void;

    // # 位置 #

    /**
     * 获取当前的地理位置、速度。当用户离开小程序后，此接口无法调用；当用户点击“显示在聊天顶部”时，此接口可继续调用。
     */
    export function getLocation(obj: {
        /**
         * 默认为 wgs84 返回 gps 坐标，gcj02 返回可用于wx.openLocation的坐标
         */
        type?: string;
    }): Promise<any>;

    /**
     * 打开地图选择位置。
     */
    export function chooseLocation(): Promise<any>;

    /**
     * ​使用微信内置地图查看位置。
     */
    export function openLocation(obj: {
        /**
         * 纬度，范围为-90~90，负数表示南纬
         */
        latitude: number;
        /**
         * 经度，范围为-180~180，负数表示西经
         */
        longitude: number;
        /**
         * 缩放比例，范围5~18，默认为18
         */
        scale?: number;
        /**
         * 位置名
         */
        name?: string;
        /**
         * 地址的详细说明
         */
        address?: string;
    }): Promise<any>;

    /**
     * 创建并返回 map 上下文 mapContext 对象
     */
    export function createMapContext(): void;

    // # 设备 #

    /**
     * 获取系统信息。
     */
    export function getSystemInfo(): Promise<SystemInfo>;

    /**
     * 获取系统信息同步接口
     */
    export function getSystemInfoSync(): SystemInfo;

    /**
     * 获取网络类型。
     */
    export function getNetworkType(): Promise<any>;

    export function onNetworkStatusChange(callback: Function): void;

    export function setScreenBrightness(obj: {
        /**
         * 屏幕亮度值，范围 0~1，0 最暗，1 最亮
         */
        value: number;
    }): Promise<any>;

    export function getScreenBrightness(): Promise<any>;

    export function vibrateLong(): Promise<any>;

    export function vibrateShort(): Promise<any>;

    /**
     * 监听加速度数据，频率：5次/秒，接口调用后会自动开始监听，可使用 wx.stopAccelerometer 停止监听。
     */
    export function onAccelerometerChange(callback: Function): void;

    export function startAccelerometer(): Promise<any>;

    export function stopAccelerometer(): void;

    /**
     * 监听罗盘数据，频率：5次/秒，接口调用后会自动开始监听，可使用wx.stopCompass停止监听。
     */
    export function onCompassChange(callback: Function): void;

    export function startCompass(): Promise<any>;

    export function stopCompass(): void;

    export function makePhoneCall(obj: {
        /**
         * 需要拨打的电话号码
         */
        phoneNumber: string;
    }): Promise<any>;

    /**
     * 调起客户端扫码界面，扫码成功后返回对应的结果
     */
    export function scanCode(obj: {
        /**
         * 是否只能从相机扫码，不允许从相册选择图片
         */
        onlyFromCamera?: boolean;
    }): Promise<any>;

    export function setClipboardData(obj: {
        /**
         * 需要设置的内容
         */
        data: string;
    }): Promise<any>;

    export function getClipboardData(): Promise<any>;

    export function openBluetoothAdapter(): Promise<any>;

    export function closeBluetoothAdapter(): void;

    export function getBluetoothAdapterState(): Promise<any>;

    export function onBluetoothAdapterStateChange(callback: Function): void;

    export function startBluetoothDevicesDiscovery(obj: {
        /**
         * 蓝牙设备主 service 的 uuid 列表
         */
        services?: Array<any>;
        /**
         * 是否允许重复上报同一设备， 如果允许重复上报，则onDeviceFound 方法会多次上报同一设备，但是 RSSI 值会有不同
         */
        allowDuplicatesKey?: boolean;
        /**
         * 上报设备的间隔，默认为0，意思是找到新设备立即上报，否则根据传入的间隔上报
         */
        interval?: number;
    }): Promise<any>;

    export function stopBluetoothDevicesDiscovery(): void;

    export function getBluetoothDevices(): Promise<any>;

    export function onBluetoothDeviceFound(callback: Function): void;

    export function getConnectedBluetoothDevices(obj: {
        /**
         * 蓝牙设备主 service 的 uuid 列表
         */
        services: Array<any>;
    }): Promise<any>;

    export function createBLEConnection(obj: {
        /**
         * 蓝牙设备 id，参考 getDevices 接口
         */
        deviceId: string;
        /**
         * 成功则返回本机蓝牙适配器状态
         */
        success: Function;
        /**
         * 接口调用失败的回调函数
         */
        fail?: Function;
        /**
         * 接口调用结束的回调函数（调用成功、失败都会执行）
         */
        complete?: Function;
    }): void;

    export function closeBLEConnection(obj: {
        /**
         * 蓝牙设备 id，参考 getDevices 接口
         */
        deviceId: string;
        /**
         * 成功则返回本机蓝牙适配器状态
         */
        success: Function;
        /**
         * 接口调用失败的回调函数
         */
        fail?: Function;
        /**
         * 接口调用结束的回调函数（调用成功、失败都会执行）
         */
        complete?: Function;
    }): void;

    export function onBLEConnectionStateChange(callback: Function): void;

    export function getBLEDeviceServices(obj: {
        /**
         * 蓝牙设备 id，参考 getDevices 接口
         */
        deviceId: string;
    }): Promise<any>;

    export function getBLEDeviceCharacteristics(obj: {
        /**
         * 蓝牙设备 id，参考 device 对象
         */
        deviceId: string;
        /**
         * 蓝牙服务 uuid
         */
        serviceId: string;
    }): Promise<any>;

    export function readBLECharacteristicValue(obj: {
        /**
         * 蓝牙设备 id，参考 device 对象
         */
        deviceId: string;
        /**
         * 蓝牙特征值对应服务的 uuid
         */
        serviceId: string;
        /**
         * 蓝牙特征值的 uuid
         */
        characteristicId: string;
    }): Promise<any>;

    export function writeBLECharacteristicValue(obj: {
        /**
         * 蓝牙设备 id，参考 device 对象
         */
        deviceId: string;
        /**
         * 蓝牙特征值对应服务的 uuid
         */
        serviceId: string;
        /**
         * 蓝牙特征值的 uuid
         */
        characteristicId: string;
        /**
         * 蓝牙设备特征值对应的二进制值
         */
        value: undefined;
    }): Promise<any>;

    export function notifyBLECharacteristicValueChange(obj: {
        /**
         * 蓝牙设备 id，参考 device 对象
         */
        deviceId: string;
        /**
         * 蓝牙特征值对应服务的 uuid
         */
        serviceId: string;
        /**
         * 蓝牙特征值的 uuid
         */
        characteristicId: string;
        /**
         * true: 启用 notify; false: 停用 notify
         */
        state: boolean;
    }): Promise<any>;

    export function onBLECharacteristicValueChange(callback: Function): void;

    export function startBeaconDiscovery(obj: {
        /**
         * iBeacon设备广播的 uuids
         */
        uuids: string[];
    }): Promise<any>;

    export function stopBeaconDiscovery(): void;

    export function getBeacons(): Promise<any>;

    export function onBeaconUpdate(callback: Function): void;

    export function onBeaconServiceChange(callback: Function): void;

    export function onUserCaptureScreen(callback: Function): void;

    export function addPhoneContact(obj: {
        /**
         * 头像本地文件路径
         */
        photoFilePath?: string;
        /**
         * 昵称
         */
        nickName?: string;
        /**
         * 姓氏
         */
        lastName?: string;
        /**
         * 中间名
         */
        middleName?: string;
        /**
         * 名字
         */
        firstName: string;
        /**
         * 备注
         */
        remark?: string;
        /**
         * 手机号
         */
        mobilePhoneNumber?: string;
        /**
         * 微信号
         */
        weChatNumber?: string;
        /**
         * 联系地址国家
         */
        addressCountry?: string;
        /**
         * 联系地址省份
         */
        addressState?: string;
        /**
         * 联系地址城市
         */
        addressCity?: string;
        /**
         * 联系地址街道
         */
        addressStreet?: string;
        /**
         * 联系地址邮政编码
         */
        addressPostalCode?: string;
        /**
         * 公司
         */
        organization?: string;
        /**
         * 职位
         */
        title?: string;
        /**
         * 工作传真
         */
        workFaxNumber?: string;
        /**
         * 工作电话
         */
        workPhoneNumber?: string;
        /**
         * 公司电话
         */
        hostNumber?: string;
        /**
         * 电子邮件
         */
        email?: string;
        /**
         * 网站
         */
        url?: string;
        /**
         * 工作地址国家
         */
        workAddressCountry?: string;
        /**
         * 工作地址省份
         */
        workAddressState?: string;
        /**
         * 工作地址城市
         */
        workAddressCity?: string;
        /**
         * 工作地址街道
         */
        workAddressStreet?: string;
        /**
         * 工作地址邮政编码
         */
        workAddressPostalCode?: string;
        /**
         * 住宅传真
         */
        homeFaxNumber?: string;
        /**
         * 住宅电话
         */
        homePhoneNumber?: string;
        /**
         * 住宅地址国家
         */
        homeAddressCountry?: string;
        /**
         * 住宅地址省份
         */
        homeAddressState?: string;
        /**
         * 住宅地址城市
         */
        homeAddressCity?: string;
        /**
         * 住宅地址街道
         */
        homeAddressStreet?: string;
        /**
         * 住宅地址邮政编码
         */
        homeAddressPostalCode?: string;
    }): Promise<any>;

    // # 界面 #

    /**
     * 显示消息提示框
     */
    export function showToast(obj: {
        /**
         * 提示的内容
         */
        title: string;
        /**
         * 图标，有效值 "success", "loading"
         */
        icon?: string;
        /**
         * 自定义图标的本地路径，image 的优先级高于 icon
         */
        image?: string;
        /**
         * 提示的延迟时间，单位毫秒，默认：1500
         */
        duration?: number;
        /**
         * 是否显示透明蒙层，防止触摸穿透，默认：false
         */
        mask?: boolean;
    }): Promise<any>;

    export function showLoading(obj: {
        /**
         * 提示的内容
         */
        title: string;
        /**
         * 是否显示透明蒙层，防止触摸穿透，默认：false
         */
        mask?: boolean;
    }): Promise<any>;

    /**
     * 隐藏消息提示框
     */
    export function hideToast(): void;

    export function hideLoading(): Promise<any>;

    /**
     * ​显示模态弹窗
     */
    export function showModal(obj: {
        /**
         * 提示的标题
         */
        title: string;
        /**
         * 提示的内容
         */
        content: string;
        /**
         * 是否显示取消按钮，默认为 true
         */
        showCancel?: boolean;
        /**
         * 取消按钮的文字，默认为"取消"，最多 4 个字符
         */
        cancelText?: string;
        /**
         * 取消按钮的文字颜色，默认为"#000000"
         */
        cancelColor?: undefined;
        /**
         * 确定按钮的文字，默认为"确定"，最多 4 个字符
         */
        confirmText?: string;
        /**
         * 确定按钮的文字颜色，默认为"#3CC51F"
         */
        confirmColor?: undefined;
    }): Promise<any>;

    /**
     * ​显示操作菜单
     */
    export function showActionSheet(obj: {
        /**
         * 按钮的文字数组，数组长度最大为6个
         */
        itemList: undefined;
        /**
         * 按钮的文字颜色，默认为"#000000"
         */
        itemColor?: undefined;
    }): Promise<any>;

    export function setTopBarText(obj: {
        /**
         * 置顶栏文字内容
         */
        text: string;
    }): Promise<any>;

    /**
     * 动态设置当前页面的标题。
     */
    export function setNavigationBarTitle(obj: {
        /**
         * 页面标题
         */
        title: string;
    }): Promise<any>;

    /**
     * 在当前页面显示导航条加载动画。
     */
    export function showNavigationBarLoading(): void;

    /**
     * 隐藏导航条加载动画。
     */
    export function hideNavigationBarLoading(): void;

    /**
     * 保留当前页面，跳转到应用内的某个页面，使用wx.navigateBack可以返回到原页面。
     */
    export function navigateTo(obj: {
        /**
         * 需要跳转的应用内非 tabBar 的页面的路径 , 路径后可以带参数。参数与路径之间使用?分隔，参数键与参数值用=相连，不同参数用&分隔；如 'path?key=value&key2=value2'
         */
        url: string;
    }): Promise<any>;

    /**
     * 关闭当前页面，跳转到应用内的某个页面。
     */
    export function redirectTo(obj: {
        /**
         * 需要跳转的应用内非 tabBar 的页面的路径，路径后可以带参数。参数与路径之间使用?分隔，参数键与参数值用=相连，不同参数用&分隔；如 'path?key=value&key2=value2'
         */
        url: string;
    }): Promise<any>;

    export function reLaunch(obj: {
        /**
         * 需要跳转的应用内页面路径 , 路径后可以带参数。参数与路径之间使用?分隔，参数键与参数值用=相连，不同参数用&分隔；如 'path?key=value&key2=value2'，如果跳转的页面路径是 tabBar 页面则不能带参数
         */
        url: string;
    }): Promise<any>;

    /**
     * 跳转到 tabBar 页面，并关闭其他所有非 tabBar 页面
     */
    export function switchTab(obj: {
        /**
         * 需要跳转的 tabBar 页面的路径（需在 app.json 的 tabBar 字段定义的页面），路径后不能带参数
         */
        url: string;
    }): Promise<any>;

    /**
     * 关闭当前页面，返回上一页面或多级页面。可通过 getCurrentPages()) 获取当前的页面栈，决定需要返回几层。
     */
    export function navigateBack(obj: {
        /**
         * 返回的页面数，如果 delta 大于现有页面数，则返回到首页。
         */
        delta?: number;
    }): Promise<any>;

    /**
     * 创建一个动画实例animation。调用实例的方法来描述动画。最后通过动画实例的export方法导出动画数据传递给组件的animation属性。
     */
    export function createAnimation(obj: {
        /**
         * 400
         */
        duration?: number;
        /**
         * "linear"
         */
        timingFunction?: string;
        /**
         * 0
         */
        delay?: number;
        /**
         * "50% 50% 0"
         */
        transformOrigin?: string;
    }): WxAnimation;

    export function pageScrollTo(obj: {
        /**
         * 滚动到页面的目标位置（单位px）
         */
        scrollTop: number;
    }): Promise<any>;

    /**
     * 创建 canvas 绘图上下文（指定 canvasId）.Tip: 需要指定 canvasId，该绘图上下文只作用于对应的 <canvas/>
     */
    export function createCanvasContext(canvasId: string): WxCanvasContext;

    /**
     * 把当前画布的内容导出生成图片，并返回文件路径
     */
    export function canvasToTempFilePath(obj: {
        /**
         * 画布x轴起点（默认0）    1.2.0
         */
        x?: number;
        /**
         * 画布y轴起点（默认0）    1.2.0
         */
        y?: number;
        /**
         * 画布宽度（默认为canvas宽度-x）    1.2.0
         */
        width?: number;
        /**
         * 画布高度（默认为canvas高度-y）    1.2.0
         */
        height?: number;
        /**
         * 输出图片宽度（默认为width）    1.2.0
         */
        destWidth?: number;
        /**
         * 输出图片高度（默认为height）    1.2.0
         */
        destHeight?: number;
        /**
         * 画布标识，传入 <canvas/> 的 cavas-id
         */
        canvasId: string;
        /**
         * 目标文件的类型，只支持 'jpg' 或 'png'。默认为 'png'    1.7.0
         */
        fileType?: string;
        /**
         * 图片的质量，取值范围为 (0, 1]，不在范围内时当作1.0处理    1.7.0
         */
        quality?: number;
    }): Promise<any>;

    export function startPullDownRefresh(): Promise<any>;

    /**
     * 停止当前页面下拉刷新。
     */
    export function stopPullDownRefresh(): void;

    // # WXML节点信息 #

    // # 第三方平台 #

    export function getExtConfig(): Promise<any>;

    export function getExtConfigSync(): void;

    // # 开放接口 #

    /**
     * 调用接口获取登录凭证（code）进而换取用户登录态信息，包括用户的唯一标识（openid） 及本次登录的 会话密钥（session_key）等。用户数据的加解密通讯需要依赖会话密钥完成。
     */
    export function login(): Promise<any>;

    /**
     * 通过上述接口获得的用户登录态拥有一定的时效性。用户越久未使用小程序，用户登录态越有可能失效。反之如果用户一直在使用小程序，则用户登录态一直保持有效。具体时效逻辑由微信维护，对开发者透明。开发者只需要调用wx.checkSession接口检测当前用户登录态是否有效。登录态过期后开发者可以再调用wx.login获取新的用户登录态。
     */
    export function checkSession(): Promise<any>;

    /**
     * 获取用户信息，withCredentials 为 true 时需要先调用 wx.login 接口。
     */
    export function getUserInfo(obj: {
        /**
         * 是否带上登录态信息
         */
        withCredentials?: boolean;
        /**
         * 指定返回用户信息的语言，zh_CN 简体中文，zh_TW 繁体中文，en 英文。默认为en。
         */
        lang?: string;
    }): Promise<any>;

    /**
     * 发起微信支付。
     */
    export function requestPayment(obj: {
        /**
         * 时间戳从1970年1月1日00:00:00至今的秒数,即当前的时间
         */
        timeStamp: string;
        /**
         * 随机字符串，长度为32个字符以下。
         */
        nonceStr: string;
        /**
         * 统一下单接口返回的 prepay_id 参数值，提交格式如：prepay_id=*
         */
        package: string;
        /**
         * 签名算法，暂支持 MD5
         */
        signType: string;
        /**
         * 签名,具体签名方案参见小程序支付接口文档;
         */
        paySign: string;
    }): Promise<any>;

    export function chooseAddress(): Promise<any>;

    export function addCard(obj: {
        /**
         * 需要添加的卡券列表，列表内对象说明请参见请求对象说明
         */
        cardList: undefined;
    }): Promise<any>;

    export function openCard(obj: {
        /**
         * 需要打开的卡券列表，列表内参数详见openCard 请求对象说明
         */
        cardList: undefined;
    }): Promise<any>;

    export function openSetting(): Promise<any>;

    export function getSetting(): Promise<any>;

    export function getWeRunData(): Promise<any>;

    export function navigateToMiniProgram(obj: {
        /**
         * 要打开的小程序 appId
         */
        appId: string;
        /**
         * 打开的页面路径，如果为空则打开首页
         */
        path?: string;
        /**
         * 需要传递给目标小程序的数据，目标小程序可在 App.onLaunch()，App.onShow() 中获取到这份数据。详情
         */
        extraData?: any;
        /**
         * 要打开的小程序版本，有效值 develop（开发版），trial（体验版），release（正式版） ，仅在当前小程序为开发版或体验版时此参数有效；如果当前小程序是体验版或正式版，则打开的小程序必定是正式版。默认值 release
         */
        envVersion?: string;
    }): Promise<any>;

    export function chooseInvoiceTitle(): Promise<any>;

    export function checkIsSupportSoterAuthentication(): Promise<any>;

    // # 数据 #

    /**
     * 自定义分析数据上报接口。使用前，需要在小程序管理后台自定义分析中新建事件，配置好事件名与字段。
     */
    export function reportAnalytics(eventName: string, data: object): Promise<any>;

    // # 拓展接口 #

    export function arrayBufferToBase64(): Promise<any>;

    export function base64ToArrayBuffer(): Promise<any>;

    // # 调试接口 #

    export function setEnableDebug(obj: {
        /**
         * 是否打开调试
         */
    }): Promise<any>;

    /*--------------------------------------实时音频--------------------------------------------*/

    export interface LiverPlayerCallback {
        success?: () => void,
        fail?: () => void,
        complete?: () => void
    }

    export interface PlayerFullScreenCallback extends LiverPlayerCallback {
        /**
         * 有效值为 0（正常竖向）, 90（屏幕逆时针90度）, -90（屏幕顺时针90度）
         */
        direction?: number
    }

    /**
     * https://developers.weixin.qq.com/miniprogram/dev/api/api-live-player.html
     * 操作对应的 <live-player/> 组件。 创建并返回 live-player 上下文 LivePlayerContext 对象。
     * 在自定义组件下，第二个参数传入组件实例this，以操作组件内 <live-player/> 组件
     * @param {string} domId
     * @param {WxmlElement} _this 组件实例
     * @returns {LivePlayerContext}
     */
    function createLivePlayerContext(domId: string, _this?: WxmlElement): {
        play: (p: LiverPlayerCallback) => void
        stop: (p: LiverPlayerCallback) => void
        mute: (p: LiverPlayerCallback) => void
        pause: (p: LiverPlayerCallback) => void
        resume: (p: LiverPlayerCallback) => void
        requestFullScreen: (p: PlayerFullScreenCallback) => void
        exitFullScreen: (p: LiverPlayerCallback) => void
    };

    /**
     * https://developers.weixin.qq.com/mi
     * @returns {LivePlayerContext}niprogram/dev/api/api-live-pusher.html
     * @param {WXML.WxmlElement} _this
     */
    function createLivePusherContext(_this: WxmlElement):{

    };
}
