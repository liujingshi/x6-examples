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
ElementFactory.prototype.createElement = function (name, type, info) {
    type = type || 'node';
    info = info || {};
    if (isDefined(name) && isDefined(customCells[name])) {
        const element = new customCells[name](this._coreAPI, this._elementRepository);
        assign(element, info);
        if (element.shape === "html") {
            if (element.extra && element.extra.btns) {
                element.width = element.extra.btns.length * 38;
            }
            if (element.extra) {
                element.html = () => {
                    return $.tmpl(element.template, element.extra);
                };
            }
        }
        this._elementRepository.add(element, type);
        return element;
    }
    return null;
};

export default ElementFactory;
