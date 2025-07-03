import s from './index.module.css';

type ButtonWppProps = {
    title: string;
}

export const ButtonWpp = ({ title }: ButtonWppProps) => {

    return (
        <button className={s.buttonWpp}>
            <h4 className={s.desc}>
                {title}
            </h4>
        </button>
    )
}