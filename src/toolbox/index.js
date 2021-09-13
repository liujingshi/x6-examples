import Menu from "./Menu";
import Palette from "./Palette";

function Toolbox(coreAPI, elementFactory, elementRepository) {
    this._coreAPI = coreAPI;
    this._elementFactory = elementFactory;
    this._elementRepository = elementRepository;
    this._init();
}

Toolbox.prototype._init = function () {
    const toolbox_container_class = "x6-toolbox-container";
    const container = this._coreAPI.config.container;
    const toolbox_containers = container.querySelectorAll("." + toolbox_container_class);
    if (toolbox_containers.length == 0) {
        const toolbox_container = document.createElement("div");
        toolbox_container.setAttribute("class", toolbox_container_class);
        container.appendChild(toolbox_container);
        this.toolbox_container = toolbox_container;
    }
}

Toolbox.prototype.createMenu = function () {
    this.menu = new Menu(this._coreAPI, this._elementFactory, this._elementRepository, this);
}

Toolbox.prototype.createPalette = function () {
    this.palette = new Palette(this._coreAPI, this._elementFactory, this._elementRepository, this);
}

export default Toolbox;
