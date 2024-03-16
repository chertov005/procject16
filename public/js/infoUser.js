window.addEventListener('load' , async() => {

    doGetApi()


});




const doGetApi = async() => {

    let url = 'http://127.0.0.1:3002/users/info' ;

    let resp = await fetch(url ,{
        method:'GET',
        headers: {
            'content-type':'application/json' ,
            'x-api-key':localStorage.user
        }
    }) 
    let data = await resp.json()

    console.log(data)

    listInfoAboutUser(data)
};





const listInfoAboutUser = async(_item) =>{

    document.querySelector('#id_name').innerHTML = `${_item.name}`
    document.querySelector('#id_email').innerHTML = `${_item.email}`
    document.querySelector('#id_type').innerHTML = `${_item.role}`
    document.querySelector('#id_date').innerHTML = `${_item.date_created}`


}