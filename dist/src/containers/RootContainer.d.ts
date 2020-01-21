import * as React from 'react';
import { WithStyles } from '@material-ui/core/styles';
import { StoreState } from "../redux/state";
declare const styles: Record<"root" | "container", import("@material-ui/styles").CSSProperties | (() => import("@material-ui/styles").CSSProperties)>;
export interface Props extends WithStyles<typeof styles>, StoreState {
}
declare const _default: import("react-redux").ConnectedComponent<React.ComponentType<Pick<Props, "root"> & import("@material-ui/core").StyledComponentProps<"root" | "container">>, Pick<Pick<Props, "root"> & import("@material-ui/core").StyledComponentProps<"root" | "container">, "classes" | "innerRef">>;
export default _default;
