'use client'

import Button from "@/components/button/button";
import SolutionPane from "@/components/solution-pane/solution-pane";

const testSudoku: Number[][] = [
    [1, 1, 1, 1, 1, 1, 1, 1, 1],
    [2, 2, 2, 2, 2, 2, 2, 2, 2],
    [3, 3, 3, 3, 3, 3, 3, 3, 3],
    [4, 4, 4, 4, 4, 4, 4, 4, 4],
    [5, 5, 5, 5, 5, 5, 5, 5, 5],
    [6, 6, 6, 6, 6, 6, 6, 6, 6],
    [7, 7, 7, 7, 7, 7, 7, 7, 7],
    [8, 8, 8, 8, 8, 8, 8, 8, 8],
    [9, 9, 9, 9, 9, 9, 9, 9, 9],
]

export default function Home() {
  return (
    <>
      <Button callback={() => console.log("Recommendation: eat cheese.")} text={"Click me"} />
      <SolutionPane solutionSteps={[testSudoku, testSudoku]} />
    </>
  );
}
