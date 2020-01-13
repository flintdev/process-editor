import LeaderLine from 'leader-line'

// Singleton Design Pattern
export default class LeaderLineManager {
    private static instance: LeaderLineManager;
    private lines: any[];
    private constructor() {
        this.lines = [];
    }

    public static getInstance(): LeaderLineManager {
        if (!LeaderLineManager.instance) {
            LeaderLineManager.instance = new LeaderLineManager();
        }

        return LeaderLineManager.instance;
    }

    public addLine(from: any, to: any) {
        LeaderLineManager.getInstance().lines.push(new LeaderLine(from, to, {path: 'grid'}));
    }

    public positionLines() {
        console.log('>>> positionLines');
        LeaderLineManager.getInstance().lines.forEach(line => line.position());
    }

    public removeAllLines() {
        LeaderLineManager.getInstance().lines = [];
    }

    public getLines() {
        return this.lines;
    }
}
