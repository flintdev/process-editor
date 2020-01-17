export interface ProjectState {
    projectName: String;
    setProjectName?: ((data: String) => void);
}
export interface StoreState {
    project: ProjectState;
}
export declare const initState: StoreState;
