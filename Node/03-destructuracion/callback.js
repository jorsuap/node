const getUserById = (id, fun) => {
    const user = {
        id,
        name: 'jorddi'
    }
    setTimeout(() => {
        fun(user)
    }, 1000);
}
getUserById(10,(user)=>{
    console.log(user)
})