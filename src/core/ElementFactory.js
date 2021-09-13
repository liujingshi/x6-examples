import { customCells } from "@custom-cell";
import { assign, isDefined } from "min-dash";

function ElementFactory(coreAPI, elementRepository) {
    this._coreAPI = coreAPI;
    this._elementRepository = elementRepository;
    this._init();
}

// 初始化 ElementFactory
ElementFactory.prototype._init = function () {
    this._register();
    console.info("ElementFactory init success!");
};

// 注册所有自定义节点
ElementFactory.prototype._register = function () {
    for (let name in customCells) {
        const element = new customCells[name](this._coreAPI, this._elementRepository);
        element.register();
    }
};

// 创建元素
ElementFactory.prototype.createElement = function (name, info) {
    info = info || {};
    if (isDefined(name) && isDefined(customCells[name])) {
        const element = new customCells[name](this._coreAPI, this._elementRepository);
        assign(element, info);
        this._elementRepository.add(element);
        return element;
    }
    return null;
};

export default ElementFactory;
