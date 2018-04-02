# mpreact

 react like framework for wechat mini program

## usage for js

### app.js

```javascript
import wx, {WxApp, AppConfig} from "mpreact";

@AppConfig({
    /** content of app.json */
    pages: ["pages/home/index"]
})
class ExampleApp extends WxApp {

    // will be called after App.onLoad
    mounted() {
        this.login();
    }

    async login() {
        const res = await wx.login();
        // ...
    }
}
```

### page.jsx

```javascript
import wx, {WxPage, PageConfig} from "mpreact";

import "../styles/home.scss";

import Tabs from "../components/tabs/index";

@PageConfig({
    background: "#ddd"
})
class Home extends WxPage {

    /** content of page.wxml, jsx syntax */
    template = (
        <view class="container">
            <Tabs tabs={this.state.tabs}></Tabs>
        </view>
    );

    // will be called after Page.onLoad
    mounted() {
        this.setState({
            tabs: ["wxss", "wxml", "wxs"]
        })
    }
}
```

### component.jsx

```javascript
import wx, {WxComponent} from "mpreact";

import "../styles/tabs.scss";

class Tabs extends WxComponent {

    static propTypes = {
        tabs: Array
    };

    /** content of page.wxml, jsx syntax */
    template = (
        <view class="tabs">
            <view wx_for={this.props.tabs} bindtap={this.selectTab} data-index={index}>{item}</view>
            <view>{this.state.selectedTab}</view>
        </view>
    );

    // will be called after Component.attached
    mounted() {
    }
    
    onTabsChange(curr, prev) {
        console.log(curr)
    }

    selectTab(e) {
        this.setState({
            selectedTab: this.props.tabs[e.currentTarget.dataset.index]
        })
    }
}
```

## usage for ts

### app.ts

```javascript
import wx, {WxApp, AppConfig} from "mpreact";

@AppConfig({
    /** content of app.json */
    pages: ["pages/home/index"]
})
class ExampleApp extends WxApp {

    // will be called after App.onLoad
    mounted() {
        this.login();
    }

    async login() {
        const res = await wx.login();
        // ...
    }
}
```

### page.tsx

```javascript
import wx, {WxPage, PageConfig} from "mpreact";

import "../styles/home.scss";

import Tabs from "../components/tabs/index";

@PageConfig({
    background: "#ddd"
})
class Home extends WxPage<{}, {tabs: Array<string>}> {

    /** content of page.wxml, jsx syntax */
    template = (
        <view class="container">
            <Tabs tabs={this.state.tabs}></Tabs>
        </view>
    );

    // will be called after Page.onLoad
    mounted() {
        this.setState({
            tabs: ["wxss", "wxml", "wxs"]
        })
    }
}
```

### component.tsx

```javascript
import wx, {WxComponent} from "mpreact";

import "../styles/tabs.scss";

class Tabs extends WxComponent<{tabs: Array<string>}, {selectedTab: string}> {

    /** content of page.wxml, jsx syntax */
    template = (
        <view class="tabs">
            <view wx_for={this.props.tabs} bindtap={this.selectTab} data-index={index}>{item}</view>
            <view>{this.state.selectedTab}</view>
        </view>
    );

    // will be called after Component.attached
    mounted() {
    }

    onTabsChange(curr, prev) {
        console.log(curr)
    }

    selectTab(e) {
        this.setState({
            selectedTab: this.props.tabs[e.currentTarget.dataset.index]
        })
    }
}
```

## api
 
 ### wx

  promisified wx; 

 ### page

 * state: Object;

 * query: Object; 页面参数;

 * setState(state: Partial\<S>, cb?: Function): Promise<void>

 * navigateTo(page: string, query?: { [key: string]: number | string | boolean }): Promise<void>;

 * setTitle(title: string): Promise<void>;

 ### component

 * props: Object;

 * state: Object;

 * setState(state: Partial\<S>): Promise<void>;
