import * as React from 'react';
import { WithStyles } from '@material-ui/core/styles';
import { ProcessEditorProps } from "../interface";
declare const styles: Record<"root", import("@material-ui/styles").CSSProperties | (() => import("@material-ui/styles").CSSProperties)>;
export interface Props extends WithStyles<typeof styles>, ProcessEditorProps {
    operations: any;
    stepOptions: any;
    editorData: any;
    onSaved: any;
    onClose: any;
    stepDbClick: any;
}
declare const _default: React.ComponentType<Pick<Props, "onClose" | "stepOptions" | "stepDbClick" | "operations" | "editorData" | "onSaved"> & import("@material-ui/core/styles").StyledComponentProps<"root">>;
export default _default;
