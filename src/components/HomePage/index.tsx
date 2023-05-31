import { Link } from 'react-router-dom';
import FtTela from '../../assets/image 1.svg';
import style from './index.module.css';


export const HomePage = () => {
    
    return (
        <>
            <article className={style.homePage}>
                <article className={style.container_title}>
                    <Link to={'/to-do'} className={style.title}>
                        <h1>ToDo List</h1>
                    </Link>

                </article>
                <article className={style.ftTela}>
                    <img src={FtTela} alt="" />
                </article>

            </article>
        </>
    )
}