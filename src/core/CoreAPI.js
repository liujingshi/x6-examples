import { Graph } from "@antv/x6";
import { modulerConfig } from '@config/x6DefaultConfig';
import { assign } from 'min-dash';


function CoreAPI(config) {
    this.config = assign({}, modulerConfig, config || {});
    this._init();
}

CoreAPI.prototype._init = function () {
    this.graph = new Graph(this.config);
}

// 注册 Node
CoreAPI.prototype.registerNode = function (name, nodeConfig) {
    Graph.registerNode(name, nodeConfig);
};

// 注册 Edge
CoreAPI.prototype.registerEdge = function (name, edgeConfig) {
    Graph.registerEdge(name, edgeConfig);
};

// 添加 Node 到 Graph
CoreAPI.prototype.addNode = function (node) {
    return this.graph.addNode(node);
};

// 添加 Edge 到 Graph
CoreAPI.prototype.addEdge = function (edge) {
    return this.graph.addEdge(edge);
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

export default CoreAPI;
