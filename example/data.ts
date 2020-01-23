export const initialData = {
    "id": "editor@0.0.1",
    "nodes": {
        "1": {
            "id": 1,
            "data": {
                "label": "Validate Expense Items",
                "type": "Code Block",
                "group": "Standard",
                "category": "Automation",
            },
            "inputs": {
                "input1": {
                    "connections": []
                }
            },
            "outputs": {
                "output1": {
                    "connections": [
                        {
                            "node": 2,
                            "input": "input1",
                            "data": {}
                        }
                    ]
                },
                "output2": {
                    "connections": []
                }
            },
            "position": [
                -492.69921875,
                -158.484375
            ],
            "name": "Card"
        },
        "2": {
            "id": 2,
            "data": {
                "label": "Notify User",
                "type": "Slack Message",
                "group": "Third-party",
                "category": "Notification",
            },
            "inputs": {
                "input1": {
                    "connections": [
                        {
                            "node": 1,
                            "output": "output1",
                            "data": {}
                        }
                    ]
                }
            },
            "outputs": {
                "output1": {
                    "connections": []
                },
                "output2": {
                    "connections": []
                }
            },
            "position": [
                233.7987357064079,
                -257.2386177570194
            ],
            "name": "Card"
        }
    }
}