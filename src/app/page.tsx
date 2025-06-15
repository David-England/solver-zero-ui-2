'use client'

import { Suspense, useState } from "react";
import './reset.css'
import './globals.css'
import { query } from "./queries"
import Button from "@/components/button/button";
import SolutionPane from "@/components/solution-pane/solution-pane";

const testSudoku: number[][] = [
    [0, 0, 0, 0, 0, 0, 9, 0, 2],
    [0, 0, 0, 4, 0, 3, 0, 0, 0],
    [4, 7, 9, 0, 0, 0, 0, 0, 0],
    [0, 0, 1, 0, 7, 5, 0, 0, 0],
    [0, 0, 5, 0, 0, 0, 2, 0, 0],
    [0, 0, 0, 0, 3, 0, 6, 0, 0],
    [0, 6, 0, 9, 0, 0, 0, 0, 0],
    [0, 3, 0, 6, 0, 0, 0, 1, 0],
    [0, 8, 4, 0, 0, 0, 0, 5, 0],
]

export default function Home() {
  const [displayPane, setDisplayPane] = useState(false);

  if (!displayPane) {
    return <Button callback={() => {setDisplayPane(true)}} text={"Solve"} />;
  }
  else {
    var payload = query(testSudoku);

    return (
      <>
        <Button callback={() => {}} text={"Solve"} />
        <Suspense fallback={<p>Solution loading.... 🔃🔃🔃🔃</p>}>
          <SolutionPane payload={payload} />
        </Suspense>
      </>
    );
  }
}
