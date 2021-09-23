class Base {
    constructor(coreAPI, elementRepository) {
        this._coreAPI = coreAPI;
        this._elementRepository = elementRepository;
        this.graph = null;
    }

    json() {
        return {
            id: this.id,
            shape: this.shape,
            markup: this.markup,
            attrs: this.attrs,
            html: this.html,
            extra: this.extra,
        }
    }

    show() {
        if (this.x6Element) {
            this.x6Element.show();
        }
    }

    hide() {
        if (this.x6Element) {
            this.x6Element.hide();
        }
    }

    remove() {
        if (this.x6Element && this._coreAPI) {
            this._coreAPI.delCellFromGraph(this.x6Element);
        }
        if (this._elementRepository) {
            this._elementRepository.remove(this);
        }
    }
}

export default Base;
