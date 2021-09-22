import { assign, isUndefined } from "min-dash";
import Base from "./Base";

class Edge extends Base {
    constructor(coreAPI, elementRepository) { 
        super(coreAPI, elementRepository)
    }

    json() {
        return assign({
            source: this.source,
            target: this.target,
            vertices: this.vertices,
            connector: this.connector,
            defaultLabel: this.defaultLabel,
            labels: this.labels,
        }, super.json());
    }

    // 注册
    register() {
        if (isUndefined(this._coreAPI)) {
            return;
        }
        this._coreAPI.registerEdge(this.shape, this.json());
    }

    // 创建在画布上 返回 X6 Edge 对象
    create(id, source, target, vertices) {
        if (isUndefined(this._coreAPI)) {
            return;
        }
        this.createX6Element(id, source, target, vertices);
        this.addToGraph();
        return this.x6Element;
    }

    // 创建 x6 对象
    createX6Element(id, source, target, vertices) {
        if (isUndefined(this._coreAPI)) {
            return;
        }
        this.id = id;
        this.source = source;
        this.target = target;
        this.vertices = vertices;
        this.x6Element = this._coreAPI.createEdge(this.json(), this.graph);
        return this.x6Element;
    }

    // 添加到画布
    addToGraph() {
        if (isUndefined(this._coreAPI) || isUndefined(this.x6Element)) {
            return;
        }
        this._coreAPI.addEdge(this.x6Element, this.graph);
        this._elementRepository.isCreate(this);
    }
}

export default Edge;
