import styling from './button.module.css';

export default function Button({ text }: { text: string }) {
    return (
        <div className={styling.button}>
            {text}
        </div>
    )
}