import { isDefined } from "min-dash";

/**
 * 注册 jQuery 函数
 * @param {string} fn 函数名
 * @param {Function} callback 函数
 */
const registerFn = function (fn, callback) {
    if (isDefined(fn) && isDefined(callback)) {
        [$, $.fn].forEach((obj) => {
            obj[fn] = callback;
        });
    }
};

/**
 * 注册 jQuery 函数
 */
const register = () => {
    /**
     * 加载html模板
     * @param {*} templateStr 通过 html-loader 加载的 html 文件
     * @param {*} data 模板需要的数据
     * @returns jQuery 对象
     */
    registerFn("tmpl", function (templateStr, data) {
        const template = templateStr.default || "<div></div>";
        data = data || {};
        const tmpl = $.templates(template);
        const html = tmpl.render(data);
        return $(html);
    });
};

export default {
    register,
};
