import s from "./Message.module.css"
const Message = (props) => {
    return(
        <div className={`${s.messageBlock} ${props.userId === props.currentUserId ? `${s.mine}` : ``}`}>
            <div className={`${s.inner} ${props.userId === props.currentUserId ? `${s.reverse}` : ``}`}>
                <div className={`${s.author} ${props.userId === props.currentUserId ? `${s.mine}` : ``}`}>
                    {props.userEmail[0]}
                </div>
                <div className={`${s.info} ${props.userId === props.currentUserId ? `${s.mine}` : ``}`}>
                    <div className={s.message}>
                        {props.message}
                    </div>
                    <div className={s.userEmail}>
                    {props.userEmail}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Message;