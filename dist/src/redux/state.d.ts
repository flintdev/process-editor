export interface RootState {
    projectName: String;
    setProjectName?: ((data: String) => void);
}
export interface EditorState {
    editorJSON: object;
    setEditorJSON?: ((data: any) => void);
}
export interface StoreState {
    root: RootState;
    editor: EditorState;
}
export declare const initState: StoreState;
