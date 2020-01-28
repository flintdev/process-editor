import * as React from 'react';
import { WithStyles } from '@material-ui/core/styles';
import { RootState } from "../redux/state";
declare const styles: Record<"root" | "container", import("@material-ui/styles").CSSProperties | (() => import("@material-ui/styles").CSSProperties)>;
export interface Props extends WithStyles<typeof styles>, RootState {
    operations: any;
    stepOptions: any;
    editorData: any;
    onSaved: any;
    stepDbClick: any;
    root?: any;
}
declare const _default: import("react-redux").ConnectedComponent<React.ComponentType<Pick<Props, "root" | "operations" | "stepOptions" | "editorData" | "onSaved" | "stepDbClick" | "projectName" | "setProjectName"> & import("@material-ui/core").StyledComponentProps<"root" | "container">>, Pick<Pick<Props, "root" | "operations" | "stepOptions" | "editorData" | "onSaved" | "stepDbClick" | "projectName" | "setProjectName"> & import("@material-ui/core").StyledComponentProps<"root" | "container">, "root" | "classes" | "innerRef" | "operations" | "stepOptions" | "editorData" | "onSaved" | "stepDbClick">>;
export default _default;
