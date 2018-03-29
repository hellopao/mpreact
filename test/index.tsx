import wx, { WxApp, WxComponent, WxPage } from "../index"

export class App extends WxApp {

}

export class Page extends WxPage<{}, {}> {

    template = (
        <view>
            <Component name={"xx"} age={12}></Component>
        </view>
    );

    mounted() {

    }


}

export class Component extends WxComponent<{ name: string; age: number }, {}> {

    template = (
        <view></view>
    );

}