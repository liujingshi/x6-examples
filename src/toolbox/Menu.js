function Menu(coreAPI, elementFactory, elementRepository, toolbox) {
    this._coreAPI = coreAPI;
    this._elementFactory = elementFactory;
    this._elementRepository = elementRepository;
    this._toolbox = toolbox;

    this.items = [
        {
            name: "新建",
            callback: () => {},
        },
        {
            name: "撤销",
            callback: () => { this._coreAPI.undo() },
        },
        {
            name: "重做",
            callback: () => { this._coreAPI.redo() },
        },
        {
            name: "导出",
            callback: () => {},
        },
    ];

    this._init();
}

Menu.prototype._init = function () {
    // 插入 menu 到 toolbox
    this.container_class = "x6-toolbox-menu-container";
    this.item_class = "x6-toolbox-menu-item";
    const toolbox_container = this._toolbox.toolbox_container;
    const containers = toolbox_container.querySelectorAll("." + this.container_class);
    if (containers.length == 0) {
        this.container = document.createElement("div");
        this.container.setAttribute("class", this.container_class);
        toolbox_container.appendChild(this.container);
    }

    this._update();
};

Menu.prototype._addItem = function (item) {
    const itemEl = document.createElement("div");
    itemEl.setAttribute("class", this.item_class);
    itemEl.innerHTML = item.name;
    this.container.appendChild(itemEl);
    item.element = itemEl;
    itemEl.addEventListener("click", () => {
        this._clickItem(item);
    });
};

Menu.prototype._clickItem = function (item) {
    item.callback();
};

Menu.prototype._update = function () {
    this.container.innerHTML = "";
    this.items.forEach((item) => {
        this._addItem(item);
    });
};

Menu.prototype._remove = function (index) {
    this.items.splice(index, 1);
    this._update();
}

Menu.prototype.add = function (name, callback) {
    this.items.push({
        name: name,
        callback: callback,
    });
    this._update();
};

Menu.prototype.remove = function (item) {
    let index = this.items.indexOf(item);
    if (index >= 0) {
        this._remove(index);
        return;
    }

    index = this.items.findIndex(t => t.element == item);
    if (index >= 0) {
        this._remove(index);
        return;
    }

    index = this.items.findIndex(t => t.name == item);
    if (index >= 0) {
        this._remove(index);
        return;
    }

    index = this.items.findIndex(t => t.callback == item);
    if (index >= 0) {
        this._remove(index);
        return;
    }
};

export default Menu;
