export declare function createEditor(container: HTMLDivElement, editorConfig: any, onChange: (editorConfig: any) => void, stepOptions: any[], stepDbClick: any): Promise<{
    focusEditor: () => void;
    reRender: (json: any) => Promise<void>;
    dropNode: (labelText: string) => Promise<void>;
    callAction: (action: string) => Promise<void>;
}>;
