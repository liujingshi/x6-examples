import CoreAPI from "./CoreAPI";
import ElementFactory from "./ElementFactory";
import ElementRepository from "./ElementRepository";
import Toolbox from "../toolbox";
import { assign, isDefined } from "min-dash";

function Diagram(props) {
    const defaults = {
        paletteContainer: null,
        x6Container: null,
    };
    props = assign({}, defaults, props || {});
    const coreAPI = new CoreAPI({
        container: props.x6Container && isDefined(props.x6Container.length) && props.x6Container.length > 0 ? props.x6Container[0] : null,
    });
    const elementRepository = new ElementRepository(coreAPI);
    const elementFactory = new ElementFactory(coreAPI, elementRepository);
    const toolbox = new Toolbox(coreAPI, elementFactory, elementRepository);
    toolbox.createPalette(props.paletteContainer);
    toolbox.createContextPad();

}

export default Diagram;
