import styling from './button.module.css';

export default function Button({ callback, text }: { callback: () => void, text: string }) {
    return (
        <div className={styling.button} onClick={callback}>
            {text}
        </div>
    )
}