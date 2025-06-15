import styling from './sudoku.module.css'

function display(n: Number): string {
    if (n === 0) {
        return "";
    }
    else {
        return n.toString();
    }
}

export default function Sudoku({ arr }: { arr: Number[][] }) {
    return (
        <div className={styling.sudoku}>
            <table>
                <tbody>
                    {arr.map((row, rowIndex) =>
                    <tr key={rowIndex}>
                        {row.map((x, i) => <td key={i}>{display(x)}</td>)}
                    </tr>)}
                </tbody>
        </table>
        </div>
        
    )
}