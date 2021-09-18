import '@css/modeler.less';
import { assign } from 'min-dash';
import { Diagram } from '@core';
const templateStr = require("./template.html");

const init = function ($parent, props) {
    const defaults = {
        router: null
    };
    props = assign({}, defaults, props || {});
    const $element = $.tmpl(templateStr);
    $parent.append($element);
    new Diagram({
        paletteContainer: $('.modeler-palette', $element),
        x6Container: $('.modeler-x6', $element),
    });
};

export default {
    init: init,
};
