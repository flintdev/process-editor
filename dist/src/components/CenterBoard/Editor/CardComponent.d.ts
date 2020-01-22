import Rete from "src/utils/rete-index";
export default class CardComponent extends Rete.Component {
    numSocket: any;
    constructor(numSocket: any);
    builder(node: any): any;
    worker(node: any, inputs: {
        [x: string]: any[];
    }, outputs: {
        [x: string]: any;
    }): void;
}
