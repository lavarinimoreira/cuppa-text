import styles from '@/components/Form.module.css'

interface Props{
    numbersOfParagraphs: string;
    setNumbersOfParagraphs:React.Dispatch<React.SetStateAction<string>>
    handleSubmit:(event:React.FormEvent) => void;
}

const Form: React.FC<Props> = ( { handleSubmit, numbersOfParagraphs, setNumbersOfParagraphs } ) => {
    return (
        <form className={styles.form} onSubmit={(e) => handleSubmit(e)}>
            <div>
                <label htmlFor='amount' className={styles.label}>Paragraphs:</label>
                <input
                    name='amount'
                    value={numbersOfParagraphs}
                    className={styles.input}
                    type='number'
                    onChange={
                        (e) => setNumbersOfParagraphs(e.target.value)
                    }
                />
            </div>

            <button className={styles.button}>Submit</button>
        </form>
    )
}

export default Form
