import styling from './solution-pane.module.css';
import Sudoku from "../sudoku/sudoku";

export default function SolutionPane({ solutionSteps }: { solutionSteps: Number[][][] }) {
    return (
        <div className={styling.pane}>
            {solutionSteps.map((step, i) =>
            <Sudoku key={i} arr={step} />)}
        </div>
    )
}