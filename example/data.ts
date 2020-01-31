export const initialData = {
    "id": "editor@0.0.1",
    "nodes": {
      "1": {
        "id": 1,
        "data": {
          "label": "label",
          "icon": {
            "type": {
              "type": {},
              "compare": null,
              "displayName": "AddCircleTwoToneIcon",
              "muiName": "SvgIcon"
            },
            "key": null,
            "ref": null,
            "props": {},
            "_owner": null,
            "_store": {}
          },
          "type": "Object Add",
          "group": "group",
          "category": "Trigger"
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
          -987.2137307722923,
          -562.5988348021511
        ],
        "name": "Object Add"
      },
      "2": {
        "id": 2,
        "data": {
          "label": "label",
          "icon": {
            "type": {
              "type": {},
              "compare": null,
              "displayName": "CodeIcon",
              "muiName": "SvgIcon"
            },
            "key": null,
            "ref": null,
            "props": {},
            "_owner": null,
            "_store": {}
          },
          "type": "Script",
          "group": "group",
          "category": "Automation"
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
            "connections": [
              {
                "node": 4,
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
          -533.4155756074404,
          -562.8627532819976
        ],
        "name": "Script"
      },
      "4": {
        "id": 4,
        "data": {
          "label": "label",
          "icon": {
            "type": {
              "type": {},
              "compare": null,
              "displayName": "EmailTwoToneIcon",
              "muiName": "SvgIcon"
            },
            "key": null,
            "ref": null,
            "props": {},
            "_owner": null,
            "_store": {}
          },
          "type": "Gmail",
          "group": "group",
          "category": "Notification"
        },
        "inputs": {
          "input1": {
            "connections": [
              {
                "node": 2,
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
          -78.91586149104691,
          -563.0828912651829
        ],
        "name": "Gmail"
      }
    }
  }