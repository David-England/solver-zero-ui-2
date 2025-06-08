'use client'

import { use } from 'react';
import styling from './solution-pane.module.css';
import Sudoku from "../sudoku/sudoku";

export default function SolutionPane({ payload }: { payload: Promise<Number[][][]> }) {
    var solutionSteps = use(payload);

    return (
        <div className={styling.pane}>
            {solutionSteps.map((step, i) =>
            <Sudoku key={i} arr={step} />)}
        </div>
    )
}