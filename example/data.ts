export const initialData = {
  "id": "editor@0.0.1",
  "nodes": {
    "1": {
      "id": 1,
      "data": {
        "label": "Submit Expense",
        "type": "Object Add",
        "group": "Standard",
        "category": "Trigger",
        "code": "",
        "outputs": [
          {
            "name": "always",
            "condition": {
              "key": "null",
              "operator": "always",
              "value": "null"
            }
          }
        ]
      },
      "inputs": {},
      "outputs": {
        "always": {
          "connections": [
            {
              "node": 2,
              "input": "input1",
              "data": {}
            }
          ]
        }
      },
      "position": [
        -448.4749604625903,
        310.9276661376754
      ],
      "name": "Object Add"
    },
    "2": {
      "id": 2,
      "data": {
        "label": "Validate Expense Items",
        "type": "Script",
        "group": "Standard",
        "category": "Automation",
        "code": "",
        "outputs": [
          {
            "name": "Success",
            "condition": {
              "key": "null",
              "operator": "always",
              "value": "null"
            }
          },
          {
            "name": "Failed",
            "condition": {
              "key": "null",
              "operator": "always",
              "value": "null"
            }
          }
        ]
      },
      "inputs": {
        "input1": {
          "connections": [
            {
              "node": 1,
              "output": "always",
              "data": {}
            }
          ]
        }
      },
      "outputs": {
        "Success": {
          "connections": [
            {
              "node": 3,
              "input": "input1",
              "data": {}
            }
          ]
        },
        "Failed": {
          "connections": [
            {
              "node": 9,
              "input": "input5",
              "data": {}
            }
          ]
        }
      },
      "position": [
        49.29406697160319,
        241.28582278293297
      ],
      "name": "Script"
    },
    "3": {
      "id": 3,
      "data": {
        "label": "Direct Manager Approval",
        "type": "Approve/Reject",
        "group": "Standard",
        "category": "Automation",
        "code": "",
        "outputs": [
          {
            "name": "Approve",
            "condition": {
              "key": "null",
              "operator": "always",
              "value": "null"
            }
          },
          {
            "name": "Reject",
            "condition": {
              "key": "null",
              "operator": "always",
              "value": "null"
            }
          },
          {
            "name": "Expired",
            "condition": {
              "key": "null",
              "operator": "always",
              "value": "null"
            }
          }
        ]
      },
      "inputs": {
        "input1": {
          "connections": [
            {
              "node": 2,
              "output": "Success",
              "data": {}
            }
          ]
        }
      },
      "outputs": {
        "Approve": {
          "connections": [
            {
              "node": 56,
              "input": "input1",
              "data": {}
            }
          ]
        },
        "Reject": {
          "connections": [
            {
              "node": 9,
              "input": "input3",
              "data": {}
            }
          ]
        },
        "Expired": {
          "connections": [
            {
              "node": 9,
              "input": "input4",
              "data": {}
            }
          ]
        }
      },
      "position": [
        435.1681354362368,
        -23.50846318662782
      ],
      "name": "Approve/Reject"
    },
    "7": {
      "id": 7,
      "data": {
        "label": "End",
        "type": "End",
        "group": "Standard",
        "category": "Automation",
        "code": "",
        "outputs": []
      },
      "inputs": {
        "input1": {
          "connections": [
            {
              "node": 112,
              "output": "output1",
              "data": {}
            },
            {
              "node": 131,
              "output": "output1",
              "data": {}
            }
          ]
        }
      },
      "outputs": {},
      "position": [
        2966.999629376052,
        -67.71108806046463
      ],
      "name": "End"
    },
    "9": {
      "id": 9,
      "data": {
        "label": "Any",
        "type": "Hub",
        "group": "Standard",
        "category": "Automation",
        "code": "",
        "outputs": [
          {
            "name": "output1",
            "condition": {
              "key": "null",
              "operator": "always",
              "value": "null"
            }
          }
        ],
        "inputs": [
          {
            "name": "input1",
            "condition": {
              "key": "null",
              "operator": "always",
              "value": "null"
            }
          },
          {
            "name": "input2",
            "condition": {
              "key": "null",
              "operator": "always",
              "value": "null"
            }
          },
          {
            "name": "input3",
            "condition": {
              "key": "null",
              "operator": "always",
              "value": "null"
            }
          },
          {
            "name": "input4",
            "condition": {
              "key": "null",
              "operator": "always",
              "value": "null"
            }
          },
          {
            "name": "input5",
            "condition": {
              "key": "null",
              "operator": "always",
              "value": "null"
            }
          }
        ]
      },
      "inputs": {
        "input1": {
          "connections": [
            {
              "node": 56,
              "output": "Reject",
              "data": {}
            }
          ]
        },
        "input2": {
          "connections": [
            {
              "node": 56,
              "output": "Expired",
              "data": {}
            }
          ]
        },
        "input3": {
          "connections": [
            {
              "node": 3,
              "output": "Reject",
              "data": {}
            }
          ]
        },
        "input4": {
          "connections": [
            {
              "node": 3,
              "output": "Expired",
              "data": {}
            }
          ]
        },
        "input5": {
          "connections": [
            {
              "node": 2,
              "output": "Failed",
              "data": {}
            }
          ]
        }
      },
      "outputs": {
        "output1": {
          "connections": [
            {
              "node": 131,
              "input": "input1",
              "data": {}
            }
          ]
        }
      },
      "position": [
        1357.351909386833,
        110.93125592242765
      ],
      "name": "Hub"
    },
    "34": {
      "id": 34,
      "data": {
        "label": "Approve Gmail",
        "type": "Gmail",
        "group": "Third-party",
        "category": "Notification",
        "code": "",
        "outputs": [
          {
            "name": "output1",
            "condition": {
              "key": "null",
              "operator": "always",
              "value": "null"
            }
          }
        ]
      },
      "inputs": {
        "input1": {
          "connections": [
            {
              "node": 56,
              "output": "Approve",
              "data": {}
            }
          ]
        }
      },
      "outputs": {
        "output1": {
          "connections": [
            {
              "node": 103,
              "input": "input1",
              "data": {}
            }
          ]
        }
      },
      "position": [
        1346.2748553356253,
        -415.66386804165853
      ],
      "name": "Gmail"
    },
    "56": {
      "id": 56,
      "data": {
        "label": "HR Approval",
        "type": "Approve/Reject",
        "group": "Standard",
        "category": "Automation",
        "code": "",
        "outputs": [
          {
            "name": "Approve",
            "condition": {
              "key": "null",
              "operator": "always",
              "value": "null"
            }
          },
          {
            "name": "Reject",
            "condition": {
              "key": "null",
              "operator": "always",
              "value": "null"
            }
          },
          {
            "name": "Expired",
            "condition": {
              "key": "null",
              "operator": "always",
              "value": "null"
            }
          }
        ]
      },
      "inputs": {
        "input1": {
          "connections": [
            {
              "node": 3,
              "output": "Approve",
              "data": {}
            }
          ]
        }
      },
      "outputs": {
        "Approve": {
          "connections": [
            {
              "node": 34,
              "input": "input1",
              "data": {}
            }
          ]
        },
        "Reject": {
          "connections": [
            {
              "node": 9,
              "input": "input1",
              "data": {}
            }
          ]
        },
        "Expired": {
          "connections": [
            {
              "node": 9,
              "input": "input2",
              "data": {}
            }
          ]
        }
      },
      "position": [
        823.7072659394177,
        -415.8303457363197
      ],
      "name": "Approve/Reject"
    },
    "103": {
      "id": 103,
      "data": {
        "label": "File Payment Ticket",
        "type": "Script",
        "group": "Standard",
        "category": "Automation",
        "code": "",
        "outputs": [
          {
            "name": "output1",
            "condition": {
              "key": "null",
              "operator": "always",
              "value": "null"
            }
          }
        ]
      },
      "inputs": {
        "input1": {
          "connections": [
            {
              "node": 34,
              "output": "output1",
              "data": {}
            }
          ]
        }
      },
      "outputs": {
        "output1": {
          "connections": [
            {
              "node": 112,
              "input": "input1",
              "data": {}
            }
          ]
        }
      },
      "position": [
        1827.6064361605534,
        -411.5509782752126
      ],
      "name": "Script"
    },
    "112": {
      "id": 112,
      "data": {
        "label": "Send Payment",
        "type": "Script",
        "group": "Standard",
        "category": "Automation",
        "code": "",
        "outputs": [
          {
            "name": "output1",
            "condition": {
              "key": "null",
              "operator": "always",
              "value": "null"
            }
          }
        ]
      },
      "inputs": {
        "input1": {
          "connections": [
            {
              "node": 103,
              "output": "output1",
              "data": {}
            }
          ]
        }
      },
      "outputs": {
        "output1": {
          "connections": [
            {
              "node": 7,
              "input": "input1",
              "data": {}
            }
          ]
        }
      },
      "position": [
        2379.0620501623343,
        -424.38317312624304
      ],
      "name": "Script"
    },
    "131": {
      "id": 131,
      "data": {
        "label": "Reject Gmail",
        "type": "Gmail",
        "group": "Third-party",
        "category": "Notification",
        "code": "",
        "outputs": [
          {
            "name": "output1",
            "condition": {
              "key": "null",
              "operator": "always",
              "value": "null"
            }
          }
        ]
      },
      "inputs": {
        "input1": {
          "connections": [
            {
              "node": 9,
              "output": "output1",
              "data": {}
            }
          ]
        }
      },
      "outputs": {
        "output1": {
          "connections": [
            {
              "node": 7,
              "input": "input1",
              "data": {}
            }
          ]
        }
      },
      "position": [
        1845.9282310712051,
        -13.156369955334071
      ],
      "name": "Gmail"
    }
  }
}