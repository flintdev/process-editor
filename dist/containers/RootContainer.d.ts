import * as React from 'react';
import { WithStyles } from '@material-ui/core/styles';
import { RootState } from "../redux/state";
declare const styles: Record<"root" | "container", import("@material-ui/styles").CSSProperties | (() => import("@material-ui/styles").CSSProperties)>;
export interface Props extends WithStyles<typeof styles>, RootState {
    operations: any;
    stepOptions: any;
    editorData: any;
    onSaved: any;
    onClose: any;
    stepDbClick: any;
    root?: any;
}
declare const _default: import("react-redux").ConnectedComponent<React.ComponentType<Pick<Props, "root" | "onClose" | "projectName" | "stepOptions" | "stepDbClick" | "operations" | "editorData" | "onSaved" | "setProjectName"> & import("@material-ui/core").StyledComponentProps<"root" | "container">>, Pick<Pick<Props, "root" | "onClose" | "projectName" | "stepOptions" | "stepDbClick" | "operations" | "editorData" | "onSaved" | "setProjectName"> & import("@material-ui/core").StyledComponentProps<"root" | "container">, "classes" | "root" | "innerRef" | "onClose" | "stepOptions" | "stepDbClick" | "operations" | "editorData" | "onSaved">>;
export default _default;
