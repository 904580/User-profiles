import { useEffect, useState } from 'react';
import User from '../User/User';
import styles from './Profiles.module.css';
import { getUsers, removeUser } from './../services/users';

const Profiles = () => {
    const [page, setPage] = useState(1);
    const [users, setUsers] = useState([]);
    const [isError, setIsError] = useState(false);
    const [isLoading, setIsLoading] = useState(true);

    /* with promise example */
    useEffect(()=>{
        setIsLoading(true);
        getUsers(page).then((data)=>{
            setUsers(data);
            setIsError(false);
            setIsLoading(false);
        }).catch(()=>{
            setIsError(true);
            setIsLoading(false);
        });
    },[page]);

    /* with async await example */
    // useEffect(()=>{
    //     const getProfiles = async () => {
    //         const userList = await getUsers(page);
    //         setUsers(userList);
    //     }
    //     getProfiles();
    // },[page]);

    const removeUserHandler = (userIndex) => {
        const user = users[userIndex];
        removeUser(user.id)
        .then((isDelete)=>{
            if(isDelete){
                const userList = [...users];
                userList.splice(userIndex, 1);
                setUsers(userList);
            }
        });
   };

   const profiles = users.map((user,index)=>(
    <User 
        fname={user.first_name}
        email={user.email}
        userImg={user.avatar}
        key={index}
        userIndex={index}
        removeUser={removeUserHandler} />
   ));

   const pageSwitchHandler = () => {
        setPage(page === 1? 2: 1);
   }

    return (
        <div>
            <div>
                <h3>Page : {page}</h3>
            </div>

            {isLoading && (
                <div>Loading...</div>
            )}

            {!isLoading && (
                <>
                    {isError && (
                        <h3> Sorry, there is some error, please try after sometime</h3>
                    )}
                    {!isError && (
                        <div className={styles.profiles}>
                            {profiles}
                        </div>
                    )}
                </>
            )}
            
            <div>
                <button onClick={pageSwitchHandler}>Switch Page</button>
            </div>

        </div>
    );
};

export default Profiles;