import { assign } from 'min-dash';
import Menu from "./Menu";
import Palette from "./Palette";

function Toolbox(coreAPI, elementFactory, elementRepository) {
    this._coreAPI = coreAPI;
    this._elementFactory = elementFactory;
    this._elementRepository = elementRepository;
    this._init();
}

Toolbox.prototype._init = function () {

}

Toolbox.prototype.createMenu = function () {
    this.menu = new Menu(this._coreAPI, this._elementFactory, this._elementRepository, this);
}

Toolbox.prototype.createPalette = function (parent, props) {
    const defaults = {
        coreAPI: this._coreAPI,
        elementFactory: this._elementFactory,
        elementRepository: this._elementRepository,
    };
    props = assign({}, defaults, props || {});
    this.palette = new Palette(parent, props);
}

export default Toolbox;
