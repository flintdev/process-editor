import Rete from "src/utils/rete-index";
export default class CardComponent extends Rete.Component {
    numSocket: any;
    constructor(numSocket: any);
    builder(node: any, label?: string, type?: string, group?: string, category?: string): any;
    worker(node: any, inputs: {
        [x: string]: any[];
    }, outputs: {
        [x: string]: any;
    }): void;
}
