import style from './index.module.css';
import { useToast } from '../../hooks/useToast';

type ToastProps = {
    message: string;
    type: 'success' | 'danger';
}

export const Toast = ({ message, type}: ToastProps) => {

    const { isHidden } = useToast();

    return (
        <aside className={isHidden ? style.container : style.container_show}>
            <p className={type === "success" ? style.success : style.danger}>{message}</p>
        </aside>
    )

}