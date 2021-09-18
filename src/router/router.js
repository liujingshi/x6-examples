import { isArray } from "min-dash";
import home from "@views/home";
import plantModeler from "@views/plant-modeler";
import workUnitModeler from "@views/work-unit-modeler";

/**
 * 路由
 */
function Router() {
    // 定义路由 路由都写在这里
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
    // 路由的容器
    this._container = $(document.body);
    this._init();
}

/**
 * 初始化路由
 */
Router.prototype._init = function () {
    this._vivit();
};

/**
 * 访问当前路由
 */
Router.prototype._vivit = function () {
    if (this._router && isArray(this._router) && this._router.length > 0) {
        // 清空容器内容
        this._container.empty();
        // 获取当前路由
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
        // 默认访问第一个路由
        this._router[0].view.init(this._container, {
            router: this
        });
    }
};

/**
 * 当前页面跳转
 * @param {string} url 路由
 */
Router.prototype.goto = function (url) {
    url = url || "";
    window.location.hash = "#" + url;
    this._vivit();
};

/**
 * 新标签页跳转
 * @param {string} url 路由
 */
Router.prototype.gotoBlank = function (url) {
    url = url || "";
    const path = window.location.href.replace(window.location.hash, "");
    window.open(path + "#" + url, "_blank");
};

export default Router;
