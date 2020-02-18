import Rete from "../../../utils/rete-index";
export default class CardComponent extends Rete.Component {
    numSocket: any;
    stepDbClick: any;
    constructor(numSocket: any, icon: any, type: string, category: string, group: string, stepDbClick: any);
    builder(node: any, label?: string): any;
    worker(node: any, inputs: {
        [x: string]: any[];
    }, outputs: {
        [x: string]: any;
    }): void;
}
