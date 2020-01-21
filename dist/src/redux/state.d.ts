export interface RootState {
    projectName: String;
    setProjectName?: ((data: String) => void);
}
export interface StoreState {
    root: RootState;
}
export declare const initState: StoreState;
