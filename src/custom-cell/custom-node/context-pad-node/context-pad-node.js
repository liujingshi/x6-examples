import { Node } from "@base-model";
import './context-pad-node.less';
const templateStr = require('./context-pad-node.html');

class ContextPadNode extends Node {
    constructor(coreAPI, elementRepository) {
        super(coreAPI, elementRepository);
        this.shape = "html";
        this.width = 300;
        this.height = 400;
        this.template = templateStr;
    }
}

export default ContextPadNode;
