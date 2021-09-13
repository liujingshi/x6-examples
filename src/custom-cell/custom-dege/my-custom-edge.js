import { Edge } from "@base-model";

class MyCustomEdge extends Edge {
    constructor(coreAPI, elementRepository) {
        super(coreAPI, elementRepository);
        this.shape = "my-custom-edge";
        this.connector = {
            name: "smooth",
        };
        this.attrs = {
            line: {
                stroke: "#1890ff",
                strokeDasharray: 5,
                targetMarker: "classic",
                style: {
                    animation: "ant-line 30s infinite linear",
                },
            },
        };
    }
}

export default MyCustomEdge;
