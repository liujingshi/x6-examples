import { viewerConfig } from "@config/x6DefaultConfig";
import { assign, isArray } from "min-dash";
const templateStr = require("@tmpl/toolbox/palette/template.html");

function Palette($parent, props) {
    const defaults = {
        coreAPI: null,
        elementFactory: null,
        elementRepository: null,
    };
    props = assign({}, defaults, props || {});
    this._coreAPI = props.coreAPI;
    this._elementFactory = props.elementFactory;
    this._elementRepository = props.elementRepository;

    this.data = [
        {
            title: "文本注释",
            id: "text-annotation",
            spread: true,
            children: [
                {
                    title: "环境因素",
                    id: "custom-switch-4",
                    icon: "layui-icon layui-icon-snowflake",
                },
            ],
        },
        {
            title: "容器",
            id: "the-container",
            spread: true,
            children: [
                {
                    title: "房子",
                    id: "custom-switch-1",
                    icon: "layui-icon layui-icon-home",
                },
            ],
        },
        {
            title: "节点",
            id: "the-node",
            spread: true,
            children: [
                {
                    title: "淀粉",
                    id: "custom-switch-2",
                    icon: "layui-icon layui-icon-tree",
                },
                {
                    title: "药粉",
                    id: "custom-switch-3",
                    icon: "layui-icon layui-icon-fonts-clear",
                },
            ],
        },
        {
            title: "连接",
            id: "the-edge",
            spread: true,
            children: [
                {
                    title: "顺序流",
                    id: "my-custom-edge",
                    icon: "layui-icon layui-icon-return",
                    click: "link",
                },
            ],
        },
    ];

    this._coreAPI.createDnd();
    this.dnd = this._coreAPI.dnd;

    this._init($parent);
}

Palette.prototype._init = function ($parent) {
    $parent.empty();
    this._el = $.tmpl(templateStr);
    $parent.append(this._el);
};

Palette.prototype._loadTreeIcon = function () {
    const load = (tree) => {
        tree.forEach((item) => {
            const el = document.querySelector(`div[data-id="${item.id}"]`);
            if (item.icon && item.id) {
                if (el) {
                    const iconEl = el.querySelector(".layui-tree-main i");
                    if (iconEl) {
                        iconEl.setAttribute("class", item.icon);
                    }
                }
            }
            if (item.click) {
                el.setAttribute("click-type", item.click);
            }
            if (item.children && isArray(item.children)) {
                load(item.children);
            } else if (el && item.id) {
                this._bindEvent(el, item.id);
            }
        });
    };
    load(this.data);
};

Palette.prototype._bindEvent = function (el, name) {
    ["mousedown", "click"].forEach((event) => {
        if (el) {
            el.addEventListener(event, (e) => {
                this._removeActive();
                const clickType = el.getAttribute("click-type");
                if (clickType) {
                    this._click(el, clickType);
                } else {
                    this._dndStart(e, name);
                }
            });
        }
    });
};

Palette.prototype._dndStart = function (e, name) {
    const node = this._elementFactory.createElement(name).createX6Element();
    this.dnd.start(node, e);
    this._elementRepository.isCreate(node);
};

Palette.prototype._click = function (el, clickType) {
    if (clickType == "link") {
        this._linkMode(el);
    }
};

Palette.prototype._linkMode = function (el) {
    this._addActive(el);
    this._clickTypeLink = true;
    this._linkModeEdgeName = el.getAttribute("data-id");
};

Palette.prototype._linkModeNodeClick = function (e, node) {
    if (this._linkModeSource) {
        document.removeEventListener("mousemove", this._linkModeNodeMouseMoveCallback);
        if (this._linkModeEdge) {
            this._linkModeEdge.setTarget(node);
        }
        this._removeActive();
        this._linkModeSource = null;
        this._linkModeEdge = null;
        this._linkModeEdgeName = null;
    } else {
        const p = this._coreAPI.clientToLocal({
            x: e.clientX,
            y: e.clientY,
        });
        const linkModeEdge = this._elementFactory.createElement(this._linkModeEdgeName);
        this._linkModeSource = node;
        this._linkModeEdge = linkModeEdge.create(undefined, node, p);
        const linkModeNodeMouseMove = (e) => {
            this._linkModeNodeMouseMove(e);
        };
        this._linkModeNodeMouseMoveCallback = linkModeNodeMouseMove;
        document.addEventListener("mousemove", linkModeNodeMouseMove);
    }
};

Palette.prototype._linkModeNodeMouseMove = function (e) {
    const p = this._coreAPI.clientToLocal({
        x: e.clientX - 20,
        y: e.clientY - 20,
    });
    if (this._linkModeEdge) {
        this._linkModeEdge.setTarget(p);
    }
};

Palette.prototype._addActive = function (el) {
    const mainEl = el.querySelector(".layui-tree-main");
    if (mainEl) {
        mainEl.classList.add("active");
    }
};

Palette.prototype._removeActive = function () {
    const remove = (tree) => {
        tree.forEach((item) => {
            if (item.id) {
                const el = document.querySelector(`div[data-id="${item.id}"] .layui-tree-main`);
                if (el) {
                    el.classList.remove("active");
                }
            }
            if (item.children && isArray(item.children)) {
                remove(item.children);
            }
        });
    };
    remove(this.data);
    this._clickTypeLink = false;
};

Palette.prototype._addItem = function (item, index) {
    // const itemEl = document.createElement("div");
    // itemEl.setAttribute("class", this.item_class);
    // groupEl.appendChild(itemEl);
    const el = this._elementFactory.createElement(item);
    el.graph = this.graph;
    el.create(`${item}-${index + 1}`, 10, (index + 1) * 150);
};

Palette.prototype._addGroup = function (group) {
    // const groupEl = document.createElement("div");
    // groupEl.setAttribute("class", this.group_class);
    // this.container.appendChild(groupEl);
    group.items.forEach((item, index) => {
        this._addItem(item, index);
    });
};

Palette.prototype._createGraph = function () {
    this.graph = this._coreAPI.createGraph(
        assign(
            {
                container: this.container,
            },
            viewerConfig
        )
    );
};

Palette.prototype._event = function () {
    this.graph.on("node:mousedown", ({ node, e }) => {
        this.dnd.start(node.clone(), e);
    });
};

Palette.prototype._update = function () {
    this.container.innerHTML = "";
    this._createGraph();
    // this.groups.forEach((group) => {
    //     const x6Elements = [];
    //     group.items.forEach((item) => {
    //         x6Elements.push(this._elementFactory.createElement(item).createX6Element());
    //     });
    //     this.stencil.load(x6Elements, group.code);
    // });
    this.groups.forEach((group) => {
        this._addGroup(group);
    });
    this._coreAPI.gridLayout(
        {
            width: this.container.offsetWidth,
            // cols: 1,
            // nodeSize: [200, 200],
        },
        this.graph
    );
    this._event();
};

Palette.prototype._remove = function (index) {
    this._update();
};

Palette.prototype.add = function (name, callback) {
    this._update();
};

Palette.prototype.remove = function (item) {};

export default Palette;
