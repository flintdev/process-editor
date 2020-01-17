import * as React from 'react';
import { WithStyles } from '@material-ui/core/styles';
import { ProjectState } from "../redux/state";
declare const styles: Record<"root" | "container", import("@material-ui/styles").CSSProperties | (() => import("@material-ui/styles").CSSProperties)>;
export interface Props extends WithStyles<typeof styles>, ProjectState {
}
declare const _default: import("react-redux").ConnectedComponent<React.ComponentType<Pick<Props, "projectName" | "setProjectName"> & import("@material-ui/core/styles").StyledComponentProps<"root" | "container">>, Pick<Pick<Props, "projectName" | "setProjectName"> & import("@material-ui/core/styles").StyledComponentProps<"root" | "container">, "classes" | "innerRef">>;
export default _default;
