import styles from './User.module.css';

const User  = (props) => {
    return (
        <div className={styles.userCard}>
            <div className={styles.fname}>{props.fname}</div>
            <div className={styles.email}>{props.email}</div>
            <div className={styles.userImg}>
                <img 
                    className={styles.img}
                    src={props.userImg}
                    alt="user-profile" />
            </div>
            <div>
                <button 
                    onClick={()=>{props.removeUser(props.userIndex)}}>
                    Remove User
                </button>
            </div>
        </div>
    );
};

export default User;