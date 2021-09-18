import CoreAPI from "./CoreAPI";
import ElementFactory from "./ElementFactory";
import ElementRepository from "./ElementRepository";
import Toolbox from "../toolbox";
import { assign, isDefined } from 'min-dash';

function Diagram(props) {
    const defaults = {
        paletteContainer: null,
        x6Container: null,
    }
    props = assign({}, defaults, props || {});
    const coreAPI = new CoreAPI({
        container: props.x6Container && isDefined(props.x6Container.length) && props.x6Container.length > 0 ? props.x6Container[0] : null,
    });
    const elementRepository = new ElementRepository();
    const elementFactory = new ElementFactory(coreAPI, elementRepository);
    const toolbox = new Toolbox(coreAPI, elementFactory, elementRepository);
    // toolbox.createMenu();
    toolbox.createPalette(props.paletteContainer);
    const node1 = elementFactory.createElement("custom-switch-4");
    const node2 = elementFactory.createElement("custom-switch-4");
    const edge = elementFactory.createElement("my-custom-edge");
    const x6Node1 = node1.create("node1", 500, 100);
    const x6Node2 = node2.create("node2", 500, 500);
    edge.create("edge1", x6Node1, x6Node2);
}

export default Diagram;
