// redux/state.ts

export interface RootState {
    projectName: String,
    setProjectName?: ((data: String) => void)
}

export interface StoreState {
    root: RootState,
}

export const initState: StoreState = {
    root: {
        projectName: "project-process-editor"
    },
};
