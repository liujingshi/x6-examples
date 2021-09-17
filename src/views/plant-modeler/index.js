import { assign } from 'min-dash';
import { Diagram } from '@core';
const templateStr = require("./template.html");

const template = function () {
    const box = document.createElement("div");
    box.innerHTML = templateStr.default;
    return box.children;
};

const init = function (parentElement, props) {
    const defaults = {
        router: null
    };
    props = assign({}, defaults, props);
    const element = template();
    [].slice.call(element).forEach((el) => {
        parentElement.appendChild(el);
    });
    new Diagram();
};

export default {
    init: init,
};
