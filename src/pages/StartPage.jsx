import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import Button from '../components/Button';

const schema = yup.object({
    difficulty: yup.number().oneOf([1, 2, 3]).required(),
}).required();

function StartPage({ difficulty, setDifficulty, onStart }) {
    const { register, handleSubmit, formState: { errors } } = useForm({
        defaultValues: { difficulty },
        resolver: yupResolver(schema),
    });

    const onSubmit = (data) => {
        setDifficulty(data.difficulty);
        onStart();
    };

    return (
        <>
            <h2 className="page-title">Стартова сторінка</h2>
            <form onSubmit={handleSubmit(onSubmit)} className="settings-form">
                <label htmlFor="difficulty">Оберіть рівень складності:</label>
                <select id="difficulty" {...register('difficulty')} className="select-input">
                    <option value={1}>Легкий (4×4)</option>
                    <option value={2}>Середній (5×5)</option>
                    <option value={3}>Складний (6×6)</option>
                </select>
                {errors.difficulty && <p className="error">Оберіть рівень</p>}
                <div className="button-group">
                    <Button type="submit" className="btn-green">Почати гру</Button>
                </div>
            </form>
        </>
    );
}

export default StartPage;
