import "@css/palette.less";
import { viewerConfig } from "@config/x6DefaultConfig";
import { assign, isArray, isDefined } from "min-dash";
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

    this.unitWorkNode = [
        {
            text: ["一、配液", "牛血请培养液"],
            color: "green",
            extra: {
                btns: [
                    {
                        text: "法",
                        color: "blue",
                        click: () => {
                            console.log("法");
                        },
                    },
                    {
                        text: "料",
                        color: "blue",
                        click: () => {
                            console.log("料");
                        },
                    },
                    {
                        text: "机",
                        color: "blue",
                        click: () => {
                            console.log("机");
                        },
                    },
                    {
                        text: "人",
                        color: "blue",
                        click: () => {
                            console.log("人");
                        },
                    },
                    {
                        text: "环",
                        color: "blue",
                        click: () => {
                            console.log("环");
                        },
                    },
                    {
                        text: "测",
                        color: "blue",
                        click: () => {
                            console.log("测");
                        },
                    },
                    {
                        text: "存",
                        color: "blue",
                        click: () => {
                            console.log("存");
                        },
                    },
                    {
                        text: "规",
                        color: "gray",
                        click: () => {
                            console.log("规");
                        },
                    },
                    {
                        text: "质",
                        color: "red",
                        click: () => {
                            console.log("质");
                        },
                    },
                    {
                        text: "记",
                        color: "blue",
                        click: () => {
                            console.log("记");
                        },
                    },
                ],
                text: ["一、配液", "牛血请培养液"],
            },
        },
        {
            text: ["二、细胞培养", "狂犬病毒接种液"],
            color: "gray",
            extra: {
                btns: [
                    {
                        text: "法",
                        color: "blue",
                        click: () => {
                            console.log("法");
                        },
                    },
                    {
                        text: "料",
                        color: "blue",
                        click: () => {
                            console.log("料");
                        },
                    },
                    {
                        text: "机",
                        color: "blue",
                        click: () => {
                            console.log("机");
                        },
                    },
                    {
                        text: "人",
                        color: "blue",
                        click: () => {
                            console.log("人");
                        },
                    },
                    {
                        text: "环",
                        color: "blue",
                        click: () => {
                            console.log("环");
                        },
                    },
                    {
                        text: "测",
                        color: "blue",
                        click: () => {
                            console.log("测");
                        },
                    },
                    {
                        text: "存",
                        color: "blue",
                        click: () => {
                            console.log("存");
                        },
                    },
                    {
                        text: "规",
                        color: "gray",
                        click: () => {
                            console.log("规");
                        },
                    },
                    {
                        text: "质",
                        color: "gray",
                        click: () => {
                            console.log("质");
                        },
                    },
                    {
                        text: "记",
                        color: "blue",
                        click: () => {
                            console.log("记");
                        },
                    },
                ],
                text: ["二、细胞培养", "狂犬病毒接种液"],
            },
        },
        {
            text: ["三、生物反映", "狂犬病毒收获液"],
            color: "gray",
            extra: {
                btns: [
                    {
                        text: "法",
                        color: "blue",
                        click: () => {
                            console.log("法");
                        },
                    },
                    {
                        text: "料",
                        color: "blue",
                        click: () => {
                            console.log("料");
                        },
                    },
                    {
                        text: "机",
                        color: "blue",
                        click: () => {
                            console.log("机");
                        },
                    },
                    {
                        text: "人",
                        color: "blue",
                        click: () => {
                            console.log("人");
                        },
                    },
                    {
                        text: "环",
                        color: "blue",
                        click: () => {
                            console.log("环");
                        },
                    },
                    {
                        text: "测",
                        color: "blue",
                        click: () => {
                            console.log("测");
                        },
                    },
                    {
                        text: "存",
                        color: "blue",
                        click: () => {
                            console.log("存");
                        },
                    },
                    {
                        text: "规",
                        color: "red",
                        click: () => {
                            console.log("规");
                        },
                    },
                    {
                        text: "质",
                        color: "red",
                        click: () => {
                            console.log("质");
                        },
                    },
                    {
                        text: "记",
                        color: "blue",
                        click: () => {
                            console.log("记");
                        },
                    },
                ],
                text: ["三、生物反映", "狂犬病毒收获液"],
            },
        },
        {
            text: ["四、澄清浓缩", "狂犬病毒浓缩液"],
            color: "gray",
            extra: {
                btns: [
                    {
                        text: "法",
                        color: "blue",
                        click: () => {
                            console.log("法");
                        },
                    },
                    {
                        text: "料",
                        color: "gray",
                        click: () => {
                            console.log("料");
                        },
                    },
                    {
                        text: "机",
                        color: "blue",
                        click: () => {
                            console.log("机");
                        },
                    },
                    {
                        text: "人",
                        color: "blue",
                        click: () => {
                            console.log("人");
                        },
                    },
                    {
                        text: "环",
                        color: "blue",
                        click: () => {
                            console.log("环");
                        },
                    },
                    {
                        text: "测",
                        color: "blue",
                        click: () => {
                            console.log("测");
                        },
                    },
                    {
                        text: "存",
                        color: "blue",
                        click: () => {
                            console.log("存");
                        },
                    },
                    {
                        text: "规",
                        color: "gray",
                        click: () => {
                            console.log("规");
                        },
                    },
                    {
                        text: "质",
                        color: "red",
                        click: () => {
                            console.log("质");
                        },
                    },
                    {
                        text: "记",
                        color: "blue",
                        click: () => {
                            console.log("记");
                        },
                    },
                ],
                text: ["四、澄清浓缩", "狂犬病毒浓缩液"],
            },
        },
        {
            text: ["五、灭活", "狂犬病毒灭活液"],
            color: "gray",
            extra: {
                btns: [
                    {
                        text: "法",
                        color: "gray",
                        click: () => {
                            console.log("法");
                        },
                    },
                    {
                        text: "料",
                        color: "blue",
                        click: () => {
                            console.log("料");
                        },
                    },
                    {
                        text: "机",
                        color: "blue",
                        click: () => {
                            console.log("机");
                        },
                    },
                    {
                        text: "人",
                        color: "blue",
                        click: () => {
                            console.log("人");
                        },
                    },
                    {
                        text: "环",
                        color: "blue",
                        click: () => {
                            console.log("环");
                        },
                    },
                    {
                        text: "测",
                        color: "blue",
                        click: () => {
                            console.log("测");
                        },
                    },
                    {
                        text: "存",
                        color: "blue",
                        click: () => {
                            console.log("存");
                        },
                    },
                    {
                        text: "规",
                        color: "gray",
                        click: () => {
                            console.log("规");
                        },
                    },
                    {
                        text: "质",
                        color: "red",
                        click: () => {
                            console.log("质");
                        },
                    },
                    {
                        text: "记",
                        color: "blue",
                        click: () => {
                            console.log("记");
                        },
                    },
                ],
                text: ["五、灭活", "狂犬病毒灭活液"],
            },
        },
        {
            text: ["六、半成品配置", "狂犬病毒半成品"],
            color: "gray",
            extra: {
                btns: [
                    {
                        text: "法",
                        color: "blue",
                        click: () => {
                            console.log("法");
                        },
                    },
                    {
                        text: "料",
                        color: "gray",
                        click: () => {
                            console.log("料");
                        },
                    },
                    {
                        text: "机",
                        color: "blue",
                        click: () => {
                            console.log("机");
                        },
                    },
                    {
                        text: "人",
                        color: "blue",
                        click: () => {
                            console.log("人");
                        },
                    },
                    {
                        text: "环",
                        color: "blue",
                        click: () => {
                            console.log("环");
                        },
                    },
                    {
                        text: "测",
                        color: "blue",
                        click: () => {
                            console.log("测");
                        },
                    },
                    {
                        text: "存",
                        color: "blue",
                        click: () => {
                            console.log("存");
                        },
                    },
                    {
                        text: "规",
                        color: "gray",
                        click: () => {
                            console.log("规");
                        },
                    },
                    {
                        text: "质",
                        color: "red",
                        click: () => {
                            console.log("质");
                        },
                    },
                    {
                        text: "记",
                        color: "blue",
                        click: () => {
                            console.log("记");
                        },
                    },
                ],
                text: ["六、半成品配置", "狂犬病毒半成品"],
            },
        },
    ];
    this.unitWorkNode.forEach((item) => {
        item.extraData = encodeURI(JSON.stringify(item.extra));
    });

    this.edge = [
        {
            shape: "person-edge",
            img: "data:image/svg+xml;base64,PHN2ZyB2aWV3Qm94PSIwIDAgMTExMSAxMDI0IiB2ZXJzaW9uPSIxLjEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgd2lkdGg9IjEyOCIgaGVpZ2h0PSIxMjgiPg0KICAgIDxwYXRoDQogICAgICAgIGQ9Ik03OTguMzUxMzYgMzAzLjM5MDcyYTMwLjE4NzUyIDMwLjE4NzUyIDAgMCAxLTMwLjIyODQ4LTMwLjIyODQ4YzAtNzEuNjgtNjkuMzA0MzItMTI5LjkyNTEyLTE1NC41MDExMi0xMjkuOTI1MTItODUuMTU1ODQgMC0xNTQuNDYwMTYgNTguMjQ1MTItMTU0LjQ2MDE2IDEyOS45MjUxMmEzMC4xODc1MiAzMC4xODc1MiAwIDEgMS02MC40NTY5NiAwYzAtMTA1LjAyMTQ0IDk2LjQxOTg0LTE5MC4zODIwOCAyMTQuOTE3MTItMTkwLjM4MjA4IDExOC41MzgyNCAwIDIxNC45MTcxMiA4NS40ODM1MiAyMTQuOTE3MTIgMTkwLjM4MjA4YTMwLjIyODQ4IDMwLjIyODQ4IDAgMCAxLTMwLjE4NzUyIDMwLjIyODQ4eiBtLTE4NC43Mjk2IDE4MS4wNDMyYy04Mi44MjExMiAwLTE1OS4wODg2NC00Mi44MDMyLTE5NC4zNTUyLTEwOS4wNzY0OGEzMC4xODc1MiAzMC4xODc1MiAwIDEgMSA1My4zNzA4OC0yOC4zNDQzMmMyNC45NDQ2NCA0Ni44MTcyOCA4MC4yODE2IDc3LjAwNDggMTQxLjEwNzIgNzcuMDA0OCA2MC44MjU2IDAgMTE2LjE2MjU2LTMwLjE4NzUyIDE0MS4wNjYyNC03Ny4wMDQ4YTMwLjE4NzUyIDMwLjE4NzUyIDAgMSAxIDUzLjM3MDg4IDI4LjM0NDMyYy0zNS40NzEzNiA2Ni4yNzMyOC0xMTEuNzM4ODggMTA5LjExNzQ0LTE5NC41NiAxMDkuMTE3NDR6Ig0KICAgICAgICBmaWxsPSIjMTg5MGZmIj48L3BhdGg+DQogICAgPHBhdGgNCiAgICAgICAgZD0iTTc5OC4zNTEzNiAzMDMuMzkwNzJIMzA0LjI1MDg4YTMwLjE4NzUyIDMwLjE4NzUyIDAgMSAxIDAtNjAuNDE2aDQ5NC4xMDA0OGEzMC4xODc1MiAzMC4xODc1MiAwIDEgMSAwIDYwLjQxNnogbTQ5LjE1MiA2NTUuNjg3NjhhMzAuMTg3NTIgMzAuMTg3NTIgMCAxIDEgMC02MC40MTZjMzcuNjgzMiAwIDY4LjI4MDMyLTI0LjE2NjQgNjguMjgwMzItNTMuOTg1Mjh2LTMxLjUzOTJjMC0xMzkuOTYwMzItMTM1LjUzNjY0LTI1My43ODgxNi0zMDIuMjg0OC0yNTMuNzg4MTYtMTY2LjcwNzIgMC0zMDIuMDggMTEzLjkwOTc2LTMwMi4wOCAyNTMuODcwMDh2MzEuNTM5MmMwIDI5LjczNjk2IDMwLjU5NzEyIDUzLjk4NTI4IDY4LjIzOTM2IDUzLjk4NTI4YTMwLjE4NzUyIDMwLjE4NzUyIDAgMSAxIDAgNjAuNDU2OTZjLTcwLjk4MzY4IDAtMTI4LjY5NjMyLTUxLjM2Mzg0LTEyOC42OTYzMi0xMTQuNDAxMjh2LTMxLjU4MDE2YzAtMTczLjI2MDggMTYyLjczNDA4LTMxNC4xNjMyIDM2Mi42NTk4NC0zMTQuMTYzMiAxOTkuOTY2NzIgMCAzNjIuNjU5ODQgMTQwLjkwMjQgMzYyLjY1OTg0IDMxNC4xNjMydjMxLjUzOTJjMCA2My4wNzg0LTU3Ljc1MzYgMTE0LjMxOTM2LTEyOC43NzgyNCAxMTQuMzE5MzZ6Ig0KICAgICAgICBmaWxsPSIjMTg5MGZmIj48L3BhdGg+DQogICAgPHBhdGgNCiAgICAgICAgZD0iTTcwNi40MzcxMiA5NTkuMDc4NEg1MzEuNzgzNjhhOTAuNzY3MzYgOTAuNzY3MzYgMCAwIDEtOTAuNjQ0NDgtOTAuNjQ0NDh2LTEzMS40ODE2YzAtNDkuOTcxMiA0MC42NzMyOC05MC42NDQ0OCA5MC42NDQ0OC05MC42NDQ0OGgxNzQuNjUzNDRjNDkuOTcxMiAwIDkwLjY0NDQ4IDQwLjY3MzI4IDkwLjY0NDQ4IDkwLjY0NDQ4djEzMS40ODE2YzAgNDkuOTcxMi00MC42NzMyOCA5MC42NDQ0OC05MC42NDQ0OCA5MC42NDQ0OHogbS0xNzQuNjUzNDQtMjUyLjM1NDU2YTMwLjMxMDQgMzAuMzEwNCAwIDAgMC0zMC4xODc1MiAzMC4yMjg0OHYxMzEuNDgxNmEzMC4zMTA0IDMwLjMxMDQgMCAwIDAgMzAuMTg3NTIgMzAuMjI4NDhoMTc0LjY1MzQ0YTMwLjMxMDQgMzAuMzEwNCAwIDAgMCAzMC4xODc1Mi0zMC4yMjg0OHYtMTMxLjQ4MTZhMzAuMzEwNCAzMC4zMTA0IDAgMCAwLTMwLjE4NzUyLTMwLjIyODQ4SDUzMS43ODM2OHoiDQogICAgICAgIGZpbGw9IiMxODkwZmYiPjwvcGF0aD4NCjwvc3ZnPg==",
        },
    ];
    this.edge.forEach((item) => {
        item.extraData = encodeURI(JSON.stringify(item));
    });

    this._coreAPI.createDnd();
    this.dnd = this._coreAPI.dnd;

    this._init($parent);
}

Palette.prototype._init = function ($parent) {
    $parent.empty();
    this._el = $.tmpl(templateStr, {
        unitWorkNode: this.unitWorkNode,
        edge: this.edge,
    });
    $parent.append(this._el);
    this._bindUnitWorkNodeEvent();
    this._bindEdgeEvent();

    this._coreAPI.on("edge:connected", ({ edge, currentCell, currentMagnet }) => {
        const portId = currentMagnet.getAttribute('port');
        const extra = this.edgeExtra;
        currentCell.setPortProp(portId, 'connected', true)
        const actualEdge = this._elementFactory.createElement(extra.shape, 'edge');
        edge.attrs = actualEdge.attrs;
        edge.labels = [actualEdge.defaultLabel];
        edge.connector = actualEdge.connector;
        actualEdge.x6Element = edge;
        this._elementRepository.isCreate(actualEdge);
        this.edgeExtra = null;
        this._togglePort(false);
        $(".edge-toolbox", this.el).removeClass("active");
    });
};

Palette.prototype._bindUnitWorkNodeEvent = function () {
    const that = this;
    $(".work-unit-toolbox", this.el).on("mousedown", function (e) {
        const extra = JSON.parse(decodeURI($(this).data("extra")));
        that._dndStart(e, "work-unit-node", extra);
    });
};

Palette.prototype._dndStart = function (e, name, extra) {
    extra = extra || {};
    const node = this._elementFactory.createElement(name, "node", {
        extra: extra,
    });
    const x6Node = node.createX6Element();
    this.dnd.start(x6Node, e);
    this._elementRepository.isCreate(node);
};

Palette.prototype._bindEdgeEvent = function () {
    const that = this;
    $(".edge-toolbox", this.el).on("click", function (e) {
        $(".edge-toolbox", this.el).removeClass("active");
        $(this).addClass("active");
        that.edgeExtra = JSON.parse(decodeURI($(this).data("extra")));
        that._togglePort(true);
    });
};

Palette.prototype._togglePort = function (status) {
    status = isDefined(status) ? status : false;
    const $ports = $('.x6-port-body');
    if ($ports.length > 0) {
        $ports.each((index, port) => {
            if (status) {
                $(port).show();
            } else {
                $(port).hide();
            }
        })
    }
}

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
