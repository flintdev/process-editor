"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const styled_components_1 = require("styled-components");
const react_split_pane_1 = require("react-split-pane");
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
    const [size, setSize] = React.useState(`400px`);
    const { children } = props;
    const updateSize = (input) => {
        // console.log('>>> size', input[0]);
        setSize(input[0]);
        // const maxHeight = 1000;
        // const padding = 225;
        // const btmPaneHeight = maxHeight - topPaneHeight - padding;
        // this.setState({ btmHeight: btmPaneHeight + "px" });
    };
    return (React.createElement(Wrapper, null,
        React.createElement(react_split_pane_1.default, { onChange: size => updateSize(size), split: "vertical", defaultSize: size, style: { display: 'flex', flexDirection: 'row' } },
            React.createElement("div", { style: { height: "100%", overflow: 'auto', width: size } },
                React.createElement(CustomizedTreeView_1.default, null)),
            React.createElement("div", { style: { height: "100%", overflow: 'auto' } }, children))));
}
exports.default = LeftPaneContainer;
;
//# sourceMappingURL=LeftPaneContainer.js.map