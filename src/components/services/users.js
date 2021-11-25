export const getUsers = (page=1) => {
    // How to make ajax request
    return fetch(`https://reqres.in/api/users?page=${page}`)
    .then((res) => (res.json()))
    .then((response) => (response.data));
};

export const removeUser = (id) => {
    const config = {
        method: 'delete'
    };
    return fetch(`https://reqres.in/api/users/${id}`, config)
    .then((res)=>(res.status === 204));
};