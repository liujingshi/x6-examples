import { isDefined } from "min-dash";

function ElementRepository(coreAPI) {
    this._store = [];
    this._coreAPI = coreAPI;
}

ElementRepository.prototype._createItem = function (element, isCreate, x6Element, type) {
    return {
        element: element,
        create: isCreate,
        x6Element: x6Element,
        type: type,
    };
};

ElementRepository.prototype.add = function (element, type, isCreate, x6Element) {
    isCreate = isDefined(isCreate) ? isCreate : false;
    x6Element = isDefined(x6Element) ? x6Element : null;
    type = isDefined(type) ? type : "node";
    const el = this._createItem(element, isCreate, x6Element, type);
    this._store.push(el);
};

ElementRepository.prototype.isCreate = function (element) {
    const el = this._store.find((t) => t.element == element);
    if (el) {
        el.element = element;
        el.x6Element = element.x6Element;
        el.create = true;
    }
};

/**
 * 遍历全部节点
 * @param {*} callback
 */
ElementRepository.prototype.forEach = function (callback) {
    callback = callback || function () {};
    this._store.forEach((item, index) => {
        // 更新X6节点
        if (item.x6Element || (item.element && item.element.x6Element)) {
            if (item.x6Element.id || item.element.x6Element.id) {
                const graphElement = this._coreAPI.getById(item.x6Element.id || item.element.x6Element.id);
                if (graphElement) {
                    item.x6Element = graphElement;
                    item.element.x6Element = graphElement;
                    item.create = true;
                } else {
                    item.create = false;
                    item.x6Element = null;
                }
            }
        } else {
            item.create = false;
        }
        callback(item, index);
    });
};

export default ElementRepository;
