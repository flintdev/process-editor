import React from 'react';
import { DraggableContainer, DraggableChild } from 'react-dragline'
import LeaderLine from 'leader-line';


const lines: any[] = [];
export default class SketchContainer extends React.Component {
    componentDidMount() {
        const a = document.getElementById('start');
        const b = document.getElementById('end');
        if (a && b) {
            lines.push(new LeaderLine(a, b));
        }
    }

    render() {
        const children = [
            { id: 'start', position: { x: 100, y: 10 } },
            { id: 'end', position: { x: 400, y: 200 } },
        ]

        return (
            <DraggableContainer style={{ height: 600, position: 'relative' }}>
                {
                    children.map(({ id, position }) => {
                        const style = {
                            width: 100,
                            height: 100,
                            cursor: 'move',
                            background: '#8ce8df',
                        }

                        return (
                            <DraggableChild key={id} defaultPosition={position} 
                                onDrag={() => lines.forEach(line => line.position())}>
                                <div style={style} id={id} />
                            </DraggableChild>
                        )
                    })
                }
            </DraggableContainer>
        )
    }
}