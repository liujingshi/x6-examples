class Base {
    constructor(coreAPI, elementRepository) {
        this._coreAPI = coreAPI;
        this._elementRepository = elementRepository;
    }

    json() {
        return {
            id: this.id,
            shape: this.shape,
            markup: this.markup,
            attrs: this.attrs,
        }
    }
}

export default Base;
