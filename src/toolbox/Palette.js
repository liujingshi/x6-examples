import { viewerConfig } from "@config/x6DefaultConfig";
import { assign } from "min-dash";

function Palette(coreAPI, elementFactory, elementRepository, toolbox) {
    this._coreAPI = coreAPI;
    this._elementFactory = elementFactory;
    this._elementRepository = elementRepository;
    this._toolbox = toolbox;

    this.groups = [
        {
            code: "node",
            name: "节点",
            items: [
                "custom-switch",
                "custom-switch",
                "custom-switch",
                "custom-switch",
                "custom-switch",
                "custom-switch",
                "custom-switch",
                "custom-switch",
                "custom-switch",
                "custom-switch",
            ],
        },
        // {
        //     code: "edge",
        //     name: "连线",
        //     items: ["my-custom-edge"],
        // },
    ];

    this._initTree();
}

Palette.prototype._initTree = function () {
    layui.use("tree", function () {
        var tree = layui.tree;

        //渲染
        this.paletteTree = tree.render({
            elem: ".x6-palette", //绑定元素
            data: [
                {
                    title: "文本注释",
                    children: [
                        {
                            title: "环境因素",
                        },
                    ],
                },
                {
                    title: "容器",
                    children: [
                        {
                            title: "房子",
                        },
                    ],
                },
                {
                    title: "节点",
                    children: [
                        {
                            title: "淀粉",
                        },
                        {
                            title: "药粉",
                        },
                    ],
                },
                {
                    title: "连接",
                    children: [
                        {
                            title: "顺序流",
                        },
                    ],
                },
            ],
        });
    });
};

Palette.prototype._init = function () {
    // 插入 palette 到 toolbox
    // this.container_class = "x6-toolbox-palette-container";
    // this.group_class = "x6-toolbox-palette-group";
    // this.item_class = "x6-toolbox-palette-item";
    // const toolbox_container = this._toolbox.toolbox_container;
    // const containers = toolbox_container.querySelectorAll("." + this.container_class);
    // if (containers.length == 0) {
    //     this.container = document.createElement("div");
    //     this.container.setAttribute("class", this.container_class);
    //     toolbox_container.appendChild(this.container);
    // }
    // this._coreAPI.createStencil({
    //     stencilGraphWidth: this.container.offsetWidth,
    //     stencilGraphHeight: this.container.offsetHeight,
    // });
    // this.container.appendChild(this._coreAPI.stencil.container);
    // this.stencil = this._coreAPI.stencil;
    // this._coreAPI.createDnd({
    //     containerParent: this.container,
    // });
    // this.dnd = this._coreAPI.dnd;
    // this._update();
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
