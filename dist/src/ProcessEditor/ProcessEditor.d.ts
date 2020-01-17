import * as React from 'react';
import { WithStyles } from '@material-ui/core/styles';
import { ProcessEditorProps } from "../interface";
declare const styles: Record<"root", import("@material-ui/styles").CSSProperties | (() => import("@material-ui/styles").CSSProperties)>;
export interface Props extends WithStyles<typeof styles>, ProcessEditorProps {
}
declare const _default: React.ComponentType<Pick<Props, never> & import("@material-ui/core/styles").StyledComponentProps<"root">>;
export default _default;
