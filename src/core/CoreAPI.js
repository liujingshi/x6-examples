import { Graph, Addon } from "@antv/x6";
import { modulerConfig, stencilConfig, dndConfig } from "@config/x6DefaultConfig";
import { assign } from "min-dash";

function CoreAPI(config) {
    this.config = assign({}, modulerConfig, config || {});
    this._init();
}

CoreAPI.prototype._init = function () {
    this.graph = new Graph(this.config);
};

CoreAPI.prototype.createGraph = function (config) {
    const graph = new Graph(config);
    return graph;
}

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
}

// 添加 Node 到 Graph
CoreAPI.prototype.addNode = function (node, graph) {
    return (graph || this.graph).addNode(node);
};

// 创建 Edge
CoreAPI.prototype.createEdge = function (edge, graph) {
    return (graph || this.graph).createEdge(edge);
}

// 添加 Edge 到 Graph
CoreAPI.prototype.addEdge = function (edge, graph) {
    return (graph || this.graph).addEdge(edge);
};

// 删除 Cell 从 Graph
CoreAPI.prototype.delCellToGraph = function () {};

// 删除 Node 从 Graph
CoreAPI.prototype.delNodeToGraph = function () {};

// 删除 Edge 从 Graph
CoreAPI.prototype.delEdgeToGraph = function () {};

// 撤销
CoreAPI.prototype.undo = function () {
    this.graph.undo();
};

// 重做
CoreAPI.prototype.redo = function () {
    this.graph.redo();
};

// 创建拖拽实例 调色板
CoreAPI.prototype.createStencil = function (options) {
    options = assign({}, stencilConfig, options || {});
    this.stencil = new Addon.Stencil(options);
};

// 创建拖拽实例 调色板
CoreAPI.prototype.createDnd = function (options) {
    options = assign({
        target: this.graph
    }, dndConfig, options || {});
    this.dnd = new Addon.Dnd(options);
};

export default CoreAPI;
