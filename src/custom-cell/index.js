import MyCustomNode from "./custom-node/my-custom-node";
import CustomSwitch from "./custom-node/custom-switch";
import MyCustomEdge from "./custom-dege/my-custom-edge";

const customCells = {
    "my-custom-node": MyCustomNode,
    "custom-switch": CustomSwitch,
    "my-custom-edge": MyCustomEdge,
}

export {
    customCells,
    MyCustomNode,
    CustomSwitch,
    MyCustomEdge,
}
