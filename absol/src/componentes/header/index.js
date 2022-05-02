import style from './Header.module.scss'

export default function Header(){
    return (
        <div className={style.header}>
            <h1 className={style.titulo}>Dark Pokedex</h1>
        </div>
    )
}