import { assign, isUndefined } from "min-dash";
import Base from "./Base";

class Node extends Base {
    constructor(coreAPI, elementRepository) { 
        super(coreAPI, elementRepository)
    }

    json() {
        return assign({
            x: this.x,
            y: this.y,
            width: this.width,
            height: this.height,
        }, super.json());
    }

    // 注册
    register() {
        if (isUndefined(this._coreAPI)) {
            return;
        }
        this._coreAPI.registerNode(this.shape, this.json());
    }

    // 创建在画布上 返回 X6 Node 对象
    create(id, x, y) {
        if (isUndefined(this._coreAPI)) {
            return;
        }
        this.id = id;
        this.x = x;
        this.y = y;
        this.x6Element = this._coreAPI.addNode(this.json());
        this._elementRepository.isCreate(this);
        return this.x6Element;
    }
}

export default Node;
