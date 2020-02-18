/// <reference types="react" />
declare module 'csstype' {
    interface Properties {
        '--tree-view-color'?: string;
        '--tree-view-bg-color'?: string;
    }
}
interface Props {
    data: any[];
    triggerDrop: any;
}
export default function CustomizedTreeView(props: Props): JSX.Element;
export {};
