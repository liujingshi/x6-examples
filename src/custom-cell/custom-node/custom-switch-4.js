import { Node } from "@base-model";

class CustomSwitch4 extends Node {
    constructor(coreAPI, elementRepository) {
        super(coreAPI, elementRepository);
        this.shape = "custom-switch-4";
        this.width = 150;
        this.height = 100;
        this.markup = [
            {
                tagName: "rect",
                selector: "switch",
            },
        ];
        this.attrs = {
            switch: {
                x: 0,
                y: 0,
                width: 150,
                height: 100,
                fill: "#722ed1",
                class: "pointer"
            },
        };
    }
}

export default CustomSwitch4;
