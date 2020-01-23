export declare const initialData: {
    "id": string;
    "nodes": {
        "1": {
            "id": number;
            "data": {
                "label": string;
                "type": string;
                "group": string;
                "category": string;
            };
            "inputs": {
                "input1": {
                    "connections": never[];
                };
            };
            "outputs": {
                "output1": {
                    "connections": {
                        "node": number;
                        "input": string;
                        "data": {};
                    }[];
                };
                "output2": {
                    "connections": never[];
                };
            };
            "position": number[];
            "name": string;
        };
        "2": {
            "id": number;
            "data": {
                "label": string;
                "type": string;
                "group": string;
                "category": string;
            };
            "inputs": {
                "input1": {
                    "connections": {
                        "node": number;
                        "output": string;
                        "data": {};
                    }[];
                };
            };
            "outputs": {
                "output1": {
                    "connections": never[];
                };
                "output2": {
                    "connections": never[];
                };
            };
            "position": number[];
            "name": string;
        };
    };
};
