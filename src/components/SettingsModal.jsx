import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import Button from './Button';
import { createPortal } from 'react-dom';

const schema = yup.object({
    difficulty: yup.number().min(1).max(3).required(),
});

function SettingsModal({ isOpen, onClose, currentDifficulty, onSave }) {
    const { register, handleSubmit, formState: { errors } } = useForm({
        resolver: yupResolver(schema),
        defaultValues: { difficulty: currentDifficulty },
    });

    if (!isOpen) return null;

    return createPortal(
        <div className="settings-modal-overlay" onClick={onClose}>
            <div onClick={(e) => e.stopPropagation()}>
                <form onSubmit={handleSubmit(onSave)} className="settings-form">
                    <h3>Налаштування гри</h3>
                    <label>
                        <input type="radio" value="1" {...register('difficulty')} />
                        Легкий (4×4)
                    </label>
                    <label>
                        <input type="radio" value="2" {...register('difficulty')} />
                        Середній (5×5)
                    </label>
                    <label>
                        <input type="radio" value="3" {...register('difficulty')} />
                        Складний (6×6)
                    </label>
                    {errors.difficulty && <p className="error">Виберіть рівень</p>}

                    <div className="button-group">
                        <Button type="submit" className="btn-green">Зберегти</Button>
                        <Button type="button" onClick={onClose} className="btn-red">Скасувати</Button>
                    </div>
                </form>
            </div>
        </div>,
        document.body
    );
}

export default SettingsModal;
