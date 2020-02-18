"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const styled_components_1 = require("styled-components");
const React = require("react");
const CustomizedTreeView_1 = require("./CustomizedTreeView");
const Wrapper = styled_components_1.default.div `
    .Resizer {
      background: #000;
      opacity: 0.2;
      z-index: 1;
      -moz-box-sizing: border-box;
      -webkit-box-sizing: border-box;
      box-sizing: border-box;
      -moz-background-clip: padding;
      -webkit-background-clip: padding;
      background-clip: padding-box;
    }
    
    .Resizer:hover {
      -webkit-transition: all 2s ease;
      transition: all 2s ease;
    }
    
    .Resizer.horizontal {
      height: 11px;
      margin: -5px 0;
      border-top: 5px solid rgba(255, 255, 255, 0);
      border-bottom: 5px solid rgba(255, 255, 255, 0);
      cursor: row-resize;
      width: 100%;
    }
    
    .Resizer.horizontal:hover {
      border-top: 5px solid rgba(0, 0, 0, 0.5);
      border-bottom: 5px solid rgba(0, 0, 0, 0.5);
    }
    
    .Resizer.vertical {
      width: 11px;
      margin: 0 -5px;
      border-left: 5px solid rgba(255, 255, 255, 0);
      border-right: 5px solid rgba(255, 255, 255, 0);
      cursor: col-resize;
    }
    
    .Resizer.vertical:hover {
      border-left: 5px solid rgba(0, 0, 0, 0.5);
      border-right: 5px solid rgba(0, 0, 0, 0.5);
    }
    .Resizer.disabled {
      cursor: not-allowed;
    }
    .Resizer.disabled:hover {
      border-color: transparent;
    }
`;
function LeftPaneContainer(props) {
    const [size, setSize] = React.useState(400);
    const { children, stepOptions } = props;
    return (React.createElement("div", { style: { display: 'flex', flexDirection: 'row', height: "calc(100% - 64px)" } },
        React.createElement("div", { style: { height: "100%", width: size, padding: 10 } }, !!stepOptions && React.createElement(CustomizedTreeView_1.default, { data: stepOptions, triggerDrop: props.triggerDrop })),
        React.createElement("div", { style: {
                width: "100%",
                height: "100%",
                overflow: 'auto',
                backgroundSize: `15px 15px`,
                backgroundImage: `linear-gradient(to right, lightgrey 1px, transparent 1px),linear-gradient(to bottom, lightgrey 1px, transparent 1px)`
            } }, children)));
}
exports.default = LeftPaneContainer;
;
//# sourceMappingURL=LeftPaneContainer.js.map