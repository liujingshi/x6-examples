import MyCustomEdge from "./custom-dege/my-custom-edge";
import CustomSwitch from "./custom-node/custom-switch";
import CustomSwitch1 from "./custom-node/custom-switch-1";
import CustomSwitch2 from "./custom-node/custom-switch-2";
import CustomSwitch3 from "./custom-node/custom-switch-3";
import CustomSwitch4 from "./custom-node/custom-switch-4";

const customCells = {
    "my-custom-edge": MyCustomEdge,
    "custom-switch": CustomSwitch,
    "custom-switch-1": CustomSwitch1,
    "custom-switch-2": CustomSwitch2,
    "custom-switch-3": CustomSwitch3,
    "custom-switch-4": CustomSwitch4,
}

export {
    customCells,
    MyCustomEdge,
    CustomSwitch,
    CustomSwitch1,
    CustomSwitch2,
    CustomSwitch3,
    CustomSwitch4,
}
