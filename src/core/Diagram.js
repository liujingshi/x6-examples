import CoreAPI from "./CoreAPI";
import ElementFactory from "./ElementFactory";
import ElementRepository from "./ElementRepository";
import Toolbox from "../toolbox";

function Diagram() {
    const config = {
        container: document.querySelector('.x6-examples')
    }
    const coreAPI = new CoreAPI(config);
    const elementRepository = new ElementRepository();
    const elementFactory = new ElementFactory(coreAPI, elementRepository);
    const toolbox = new Toolbox(coreAPI, elementFactory, elementRepository);
    // toolbox.createMenu();
    toolbox.createPalette();
    const node1 = elementFactory.createElement("custom-switch-4");
    const node2 = elementFactory.createElement("custom-switch-4");
    const edge = elementFactory.createElement("my-custom-edge");
    const x6Node1 = node1.create("node1", 500, 100);
    const x6Node2 = node2.create("node2", 500, 500);
    edge.create("edge1", x6Node1, x6Node2);
    coreAPI.graph.zoomToFit({
        padding: 20
    });
}

export default Diagram;
