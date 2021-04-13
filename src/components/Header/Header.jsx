import s from "../Chat/Chat.module.css";

const Header = (props) => {
    return(
        <div className={s.header}>
            <button onClick={props.logOut} className={s.exit}>Выйти</button>
        </div>
    )
}

export default Header;