import { isDefined } from 'min-dash';

function ElementRepository() {
    this._store = [];
}

ElementRepository.prototype._createItem = function (element, isCreate, x6Element) {
    return {
        element: element,
        create: isCreate,
        x6Element: x6Element,
    }
}

ElementRepository.prototype.add = function (element, isCreate, x6Element) {
    isCreate = isDefined(isCreate) ? isCreate : false;
    x6Element = isDefined(x6Element)? x6Element : null;
    const el = this._createItem(element, isCreate, x6Element);
    this._store.push(el);
}

ElementRepository.prototype.isCreate = function (element) {
    const el = this._store.find(t => t.element == element);
    if (el) {
        el.element = element;
        el.x6Element = element.x6Element;
        el.isCreate = true;
    }
}

export default ElementRepository;
