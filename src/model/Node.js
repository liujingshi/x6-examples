import { assign, isDefined, isUndefined } from "min-dash";
import Base from "./Base";

class Node extends Base {
    constructor(coreAPI, elementRepository) {
        super(coreAPI, elementRepository);
    }

    json() {
        return assign(
            {
                x: this.x,
                y: this.y,
                width: this.width,
                height: this.height,
                ports: this.ports,
            },
            super.json()
        );
    }

    // 注册
    register() {
        if (isUndefined(this._coreAPI) || this.shape === "html") {
            return;
        }
        this._coreAPI.registerNode(this.shape, this.json());
    }

    // 创建在画布上 返回 X6 Node 对象
    create(id, x, y, isCreatePort) {
        if (isUndefined(this._coreAPI)) {
            return;
        }
        this.createX6Element(id, x, y, isCreatePort);
        this.addToGraph();
        return this.x6Element;
    }

    // 创建 x6 对象
    createX6Element(id, x, y, isCreatePort) {
        if (isUndefined(this._coreAPI)) {
            return;
        }
        isCreatePort = isDefined(isCreatePort) ? isCreatePort : true;
        this.id = id;
        this.x = x;
        this.y = y;
        this.ports = {
            groups: {},
            items: [],
        };
        const portAttrs = {
            circle: {
                r: 6,
                magnet: true,
                stroke: "#31d0c6",
                strokeWidth: 2,
                fill: "#fff",
            },
        };
        const postion = ["top", "bottom", "left", "right", [0, 0], [0, this.height], [this.width, this.height], [this.width, 0]];
        postion.forEach((item, index) => {
            const group = "group" + index;
            const id = group;
            this.ports.groups[group] = {
                position: item,
                attrs: portAttrs,
            };
            if (isCreatePort) {
                this.ports.items.push({
                    id: id,
                    group: group,
                });
            }
        });
        this.x6Element = this._coreAPI.createNode(this.json(), this.graph);
        return this.x6Element;
    }

    // 添加到画布
    addToGraph() {
        if (isUndefined(this._coreAPI) || isUndefined(this.x6Element)) {
            return;
        }
        this._coreAPI.addNode(this.x6Element, this.graph);
        this._elementRepository.isCreate(this);
    }

    // 获取 设置 位置
    position(x, y) {
        if (this.x6Element) {
            if (isDefined(x) && isDefined(y)) {
                this.x6Element.position(x, y);
                return true;
            } else {
                return this.x6Element.position();
            }
        }
        return null;
    }
}

export default Node;
