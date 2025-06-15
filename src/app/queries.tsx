'use server';

export async function query(input: number[][]): Promise<number[][][]> {
  var response = await fetch("http://localhost:8081/sudoku", {
    method: "POST",
    body: JSON.stringify(input),
  });

  return await response.json();
}