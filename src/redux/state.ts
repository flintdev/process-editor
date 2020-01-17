// redux/state.ts

export interface ProjectState {
    projectName: String,
    setProjectName?: ((data: String) => void)
}

export interface StoreState {
    project: ProjectState,
}

export const initState: StoreState = {
    project: {
        projectName: "project-process-editor"
    },
};
