window.addEventListener('load' , ()=> {

    declareViewEvent();

});





const doPostObject = async(_body) => {

    let url = 'http://127.0.0.1:3002/users/login' ;
    fetch(url , {
        method:'POST' ,
        body:JSON.stringify(_body) ,
        headers:{
            'content-type':'application/json'
        }
    })
    .then(resp => resp.json())
    .then(data => {

        console.log(data)

        if(data.myToken) {

            localStorage.setItem('user' , data.myToken)
            window.location.href = '/html/infoUser.html'

        } 

    });

};






const declareViewEvent = async() => {

    document.querySelector('#id_form').addEventListener('submit' ,async(e) => {

        e.preventDefault();

        let object = {

            email:document.querySelector('#id_email').value,
            password:document.querySelector('#id_password').value

        };

        console.log(object)

        doPostObject(object)


    });

};


