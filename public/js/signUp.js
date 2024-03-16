window.addEventListener('load' , () => {

    declareViewEvent();

});


const doPostApiObject = async(_body) => {

    let url = 'http://127.0.0.1:3002/users' ;

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

        if(data._id) {
            alert(`welcome ${data.name}`)
            window.location.href ='/html/login.html';
        }

    })

};



const declareViewEvent = async() => {

    document.querySelector('#id_form').addEventListener('submit' , async(e) => {

        e.preventDefault();

        let object = {

            name:document.querySelector('#id_name').value ,
            email:document.querySelector('#id_email').value ,
            password:document.querySelector('#id_password').value 


        }

        console.log(object);

        doPostApiObject(object)

    })

};