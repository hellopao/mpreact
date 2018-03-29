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

export abstract class WxComponent<P, S>{

    props: P;

    state: Partial<S> = {};

    abstract template: JSX.Element;

    constructor(public component: Component<S>) {
        this.props = Object.assign({}, this.component.properties);
        [
            // 实例方法
            ...Object.getOwnPropertyNames(Object.getPrototypeOf(this)),
            // 生命周期函数
            "created", "attached", "ready", "moved", "detached"
        ].forEach(method => {
            if (typeof this[method] == "function" && ['constructor', 'mounted'].indexOf(method) === -1) {
                component[method] = this[method].bind(this);
            }
        });
    }

    setState(state: Partial<S>, cb?: Function) {
        this.state = Object.assign({}, this.state, state);
        this.component.setData(state, () => {
            cb && cb();
        });
    }

}