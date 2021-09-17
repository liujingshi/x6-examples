import { isArray } from "min-dash";
import home from "@views/home";
import plantModeler from "@views/plant-modeler";
import workUnitModeler from "@views/work-unit-modeler";

function Router() {
    this._router = [
        {
            url: "/home",
            view: home,
        },
        {
            url: "/plant/modeler",
            view: plantModeler,
        },
        {
            url: "/work-unit/modeler",
            view: workUnitModeler,
        },
    ];
    this._container = document.body;
    this._init();
}

Router.prototype._init = function () {
    this._vivit();
};

Router.prototype._vivit = function () {
    if (this._router && isArray(this._router) && this._router.length > 0) {
        this._container.innerHTML = "";
        const url = window.location.hash.substring(1);
        if (url !== "") {
            const router = this._router.find((t) => t.url === url);
            if (router) {
                router.view.init(this._container, {
                    router: this
                });
                return;
            }
        }
        this._router[0].view.init(this._container, {
            router: this
        });
    }
};

Router.prototype.goto = function (url) {
    url = url || "";
    window.location.hash = "#" + url;
    this._vivit();
};

export default Router;
