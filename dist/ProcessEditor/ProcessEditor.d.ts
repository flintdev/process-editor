import * as React from 'react';
import { WithStyles } from '@material-ui/core/styles';
import { ProcessEditorProps } from "../interface";
declare const styles: Record<"root", import("@material-ui/styles").CSSProperties | (() => import("@material-ui/styles").CSSProperties)>;
export interface Props extends WithStyles<typeof styles>, ProcessEditorProps {
    operations: any;
    stepOptions: any;
    editorData: any;
    onSaved: any;
    stepDbClick: any;
}
declare const _default: React.ComponentType<Pick<Props, "operations" | "stepOptions" | "editorData" | "onSaved" | "stepDbClick"> & import("@material-ui/core/styles").StyledComponentProps<"root">>;
export default _default;
