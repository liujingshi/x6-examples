import "@css/context-pad.less";
import { assign } from "min-dash";

function ContextPad(props) {
    const defaults = {
        coreAPI: null,
        elementFactory: null,
        elementRepository: null,
    };
    props = assign({}, defaults, props || {});
    this._coreAPI = props.coreAPI;
    this._elementFactory = props.elementFactory;
    this._elementRepository = props.elementRepository;

    this._initPad();

    this._initEvent();
}

ContextPad.prototype._initPad = function () {
    this.contextPadNode = this._elementFactory.createElement("context-pad-node");
    this.contextPadNode.create("context-pad-node", 0, 0, false);
    this.contextPadNode.hide();
};

ContextPad.prototype._initEvent = function () {
    this._coreAPI.on("node:click", (obj) => {
        const node = obj.node;
        if (node.id !== "context-pad-node") {
            const size = node.size();
            const position = node.position();
            const width = size.width;
            const height = size.height;
            const x = position.x + width;
            const y = position.y;

            this.contextPadNode.position(x, y);
            this.contextPadNode.show();
            this._selectCell = node;
            this._initPadEvent();
        }
    });

    this._coreAPI.on("edge:click", (obj) => {
        const edge = obj.edge;
        const point = edge.getSourcePoint();
        const x = point.x;
        const y = point.y;

        this.contextPadNode.position(x, y);
        this.contextPadNode.show();
        this._selectCell = edge;
        this._initPadEvent();
    });

    this._coreAPI.on("blank:mouseup", (obj) => {
        this._hide();
    });
};

ContextPad.prototype._hide = function () {
    this.contextPadNode.hide();
    this._selectCell = null;
    this._isBindPadEvent = false;
};

ContextPad.prototype._initPadEvent = function () {
    if (!this._isBindPadEvent) {
        const $del = $(`[context-pad-node-event="del"]`);
        if ($del.length > 0) {
            const tooltip = new bootstrap.Tooltip($del, {
                delay: { show: 200, hide: 100 },
            });
            $del.on("click", () => {
                if (this._selectCell) {
                    const element = this._elementRepository.find(this._selectCell);
                    if (element) {
                        element.remove();
                        this._hide();
                        tooltip.dispose();
                    }
                }
            });
        }
        $(`.context-pad-node .context-pad-toolbox .context-pad-toolbox-item[data-bs-toggle="tooltip"]:not([context-pad-node-event="del"])`).each((index, item) => {
            new bootstrap.Tooltip($(item), {
                delay: { show: 200, hide: 100 },
            });
        });
    }
    this._isBindPadEvent = true;
};

export default ContextPad;
