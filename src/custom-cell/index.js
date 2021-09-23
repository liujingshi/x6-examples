import PersonEdge from "./custom-dege/person-edge";
import WorkUnitNode from "./custom-node/work-unit-node/work-unit-node";
import ContextPadNode from "./custom-node/context-pad-node/context-pad-node";

const customCells = {
    "person-edge": PersonEdge,
    "work-unit-node": WorkUnitNode,
    "context-pad-node": ContextPadNode,
}

export {
    customCells,
    PersonEdge,
    WorkUnitNode,
    ContextPadNode,
}
