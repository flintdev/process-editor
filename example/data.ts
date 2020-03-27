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
        -447.30577461300226,
        -261.59317711994066
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
        8.239484171841557,
        -420.720513060225
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
        459.35982638909474,
        -558.2541473689364
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
        1584.3260754129808,
        166.9381353064267
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
        1483.0696492920474,
        -454.6177326538063
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
        929.7609006785053,
        -699.714167685128
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
        1930.856007103335,
        -466.8164107676794
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
        2394.936367854449,
        -457.8618239715296
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
        2385.2462464754663,
        108.04929711497121
      ],
      "name": "Gmail"
    }
  }
}