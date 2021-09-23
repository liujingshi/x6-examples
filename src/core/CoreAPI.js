import { Graph, Addon } from "@antv/x6";
import { GridLayout } from "@antv/layout";
import { modulerConfig, stencilConfig, dndConfig, gridLayoutConfig } from "@config/x6DefaultConfig";
import { assign, bind, isArray } from "min-dash";

function CoreAPI(config) {
    this.config = assign({}, modulerConfig, config || {});
    this._eventBus = {};
    this._init();
}

CoreAPI.prototype._init = function () {
    this.graph = new Graph(this.config);
    [
        "blank:mouseup", 
        "node:click", "node:mouseup", "node:mouseenter", "node:mouseleave", 
        "edge:click", "edge:connected"
    ].forEach(eventName => {
        this.graph.on(eventName, (obj) => {
            const listeners = this._eventBus[eventName];
            if (listeners && isArray(listeners)) {
                listeners.forEach((item) => {
                    item(obj);
                });
            }
        });
    })
};

CoreAPI.prototype.createGraph = function (config) {
    const graph = new Graph(config);
    return graph;
};

// 订阅事件
CoreAPI.prototype.on = function (event, callback, that) {
    let myCallback = callback;
    if (that) {
        myCallback = bind(callback, that);
    }
    myCallback._fn = callback;
    const listeners = this._eventBus[event];
    if (listeners && isArray(listeners)) {
        listeners.push(myCallback);
    } else {
        this._eventBus[event] = [myCallback];
    }
};

// 取消订阅事件
CoreAPI.prototype.off = function (event, callback) {
    const listeners = this._eventBus[event];
    if (listeners && isArray(listeners)) {
        listeners.forEach((item, index) => {
            if (item === callback || item._fn === callback) {
                listeners.splice(index, 1);
                return false;
            }
        });
    }
};

// 注册 Node
CoreAPI.prototype.registerNode = function (name, nodeConfig) {
    Graph.registerNode(name, nodeConfig);
};

// 注册 Edge
CoreAPI.prototype.registerEdge = function (name, edgeConfig) {
    Graph.registerEdge(name, edgeConfig);
};

// 创建 Node
CoreAPI.prototype.createNode = function (node, graph) {
    return (graph || this.graph).createNode(node);
};

// 添加 Node 到 Graph
CoreAPI.prototype.addNode = function (node, graph) {
    return (graph || this.graph).addNode(node);
};

// 创建 Edge
CoreAPI.prototype.createEdge = function (edge, graph) {
    return (graph || this.graph).createEdge(edge);
};

// 添加 Edge 到 Graph
CoreAPI.prototype.addEdge = function (edge, graph) {
    return (graph || this.graph).addEdge(edge);
};

// 删除 Cell 从 Graph
CoreAPI.prototype.delCellFromGraph = function (cell) {
    if (cell) {
        return this.graph.removeCell(cell);
    }
    return null;
};

// 撤销
CoreAPI.prototype.undo = function () {
    this.graph.undo();
};

// 重做
CoreAPI.prototype.redo = function () {
    this.graph.redo();
};

CoreAPI.prototype.clientToLocal = function (options) {
    options = options || { x: 0, y: 0 };
    return this.graph.clientToLocal(options);
};

// 网格布局
CoreAPI.prototype.gridLayout = function (options, graph) {
    options = assign({}, gridLayoutConfig, options || {});
    graph = graph || this.graph;
    const nodes = graph.getNodes();
    const edges = graph.getEdges();
    const data = {
        nodes: nodes,
        edges: edges,
    };
    const gridLayout = new GridLayout(options);
    const model = gridLayout.layout(data);
    graph.fromJSON(model);
};

// 创建拖拽实例 调色板
CoreAPI.prototype.createStencil = function (options) {
    options = assign({}, stencilConfig, options || {});
    this.stencil = new Addon.Stencil(options);
};

// 创建拖拽实例 调色板
CoreAPI.prototype.createDnd = function (options) {
    options = assign(
        {
            target: this.graph,
        },
        dndConfig,
        options || {}
    );
    this.dnd = new Addon.Dnd(options);
};

// 通过Id获取
CoreAPI.prototype.getById = function (id) {
    return this.graph.getCellById(id);
};

export default CoreAPI;
