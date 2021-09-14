import { Node } from "@base-model";

class CustomSwitch3 extends Node {
    constructor(coreAPI, elementRepository) {
        super(coreAPI, elementRepository);
        this.shape = "custom-switch-3";
        this.width = 100;
        this.height = 30;
        this.markup = [
            {
                tagName: "g",
                selector: "left-group",
                children: [
                    {
                        tagName: "rect",
                        selector: "left",
                        groupSelector: "line",
                        attrs: {
                            x: 0,
                            y: 0,
                        },
                    },
                    {
                        tagName: "circle",
                        selector: "lco",
                        groupSelector: "co",
                        attrs: {
                            cx: 30,
                        },
                    },
                    {
                        tagName: "circle",
                        selector: "lci",
                        groupSelector: "ci",
                        attrs: {
                            cx: 30,
                        },
                    },
                ],
            },
            {
                tagName: "rect",
                selector: "switch",
                groupSelector: "line",
            },
            {
                tagName: "g",
                selector: "right-group",
                children: [
                    {
                        tagName: "rect",
                        selector: "right",
                        groupSelector: "line",
                        attrs: {
                            x: 70,
                            y: 0,
                        },
                    },
                    {
                        tagName: "circle",
                        selector: "rco",
                        groupSelector: "co",
                        attrs: {
                            cx: 70,
                        },
                    },
                    {
                        tagName: "circle",
                        selector: "rci",
                        groupSelector: "ci",
                        attrs: {
                            cx: 70,
                        },
                    },
                ],
            },
        ];
        this.attrs = {
            line: {
                width: 30,
                height: 2,
                fill: "#13c2c2",
                stroke: "#13c2c2",
            },
            co: {
                r: 8,
                fill: "#13c2c2",
            },
            ci: {
                r: 4,
                fill: "#52c41a",
            },
            switch: {
                x: 35,
                y: -2,
                width: 35,
                transform: "rotate(-30 35 -2)",
            },
        };
    }
}

export default CustomSwitch3;
