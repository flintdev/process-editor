import Rete from "src/utils/rete-index";
export default class NumComponent extends Rete.Component {
    numSocket: any;
    constructor(numSocket: any);
    builder(node: any): any;
    worker(node: {
        data: {
            num: any;
        };
    }, inputs: any, outputs: {
        [x: string]: any;
    }): void;
}
