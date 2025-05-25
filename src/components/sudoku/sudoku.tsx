import styling from './sudoku.module.css'

export default function Sudoku({ arr }: { arr: Number[][] }) {
    return (
        <div className={styling.sudoku}>
            <table>
                <tbody>
                    {arr.map(row =>
                    <tr>
                        {row.map(x => <td>{x.toString()}</td>)}
                    </tr>)}
                </tbody>
        </table>
        </div>
        
    )
}