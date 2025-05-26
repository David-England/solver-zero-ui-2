import styling from './sudoku.module.css'

export default function Sudoku({ arr }: { arr: Number[][] }) {
    return (
        <div className={styling.sudoku}>
            <table>
                <tbody>
                    {arr.map((row, rowIndex) =>
                    <tr key={rowIndex}>
                        {row.map((x, i) => <td key={i}>{x.toString()}</td>)}
                    </tr>)}
                </tbody>
        </table>
        </div>
        
    )
}