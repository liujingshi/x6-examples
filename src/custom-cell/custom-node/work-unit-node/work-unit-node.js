import { Node } from "@base-model";
import './work-unit-node.less';
const templateStr = require('./work-unit-node.html');

class WorkUnitNode extends Node {
    constructor(coreAPI, elementRepository) {
        super(coreAPI, elementRepository);
        this.shape = "html";
        this.width = 380;
        this.height = 150;
        this.template = templateStr;
    }
}

export default WorkUnitNode;
