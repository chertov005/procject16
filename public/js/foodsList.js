window.addEventListener('load' ,() => {

    doApiGetList();
    declareViewEvent();

});



const doApiGetList = async() => {

    let url = 'http://127.0.0.1:3002/foods'

    fetch(url ,{
        method:'GET' ,
        headers: {
            'content-type':'application/json' ,
            'x-api-key': localStorage['user']
        }
    })
    .then(resp => resp.json())
    .then(data => {

        console.log(data)

        arrayFoods(data)

    })


};



const doDeleteApi = async(_id) => {

    let url = `http://127.0.0.1:3002/foods/${_id}`
    fetch(url , {
        method:'DELETE' ,
        headers: {
            'content-type':'application/json' ,
            'x-api-key': localStorage['user']
        }
    })
    .then(resp => resp.json())
    .then(data => {

        if(data.deletedCount == 1) {
            
            doApiGetList();

        }

    })

    

};




const doPostApi = async(_body) => {

    let url = `http://127.0.0.1:3002/foods/` ;
    fetch(url ,{
        method:'POST' ,
        body:JSON.stringify(_body) ,
        headers:{'content-type':'application/json' , 'x-api-key':localStorage['user']}

    }) 
    .then(resp => resp.json()) 
    .then(data => {

        if(data._id) {
            doApiGetList();
        }

    })

}















const arrayFoods = async(_array) => {

    document.querySelector('#id_ul').innerHTML ='';

    for(let i = 0 ; i < _array.length; i++) {

        let item = _array[i]


        let li = document.createElement('li') ;
        li.className = 'list-group-item'

        document.querySelector('#id_ul').append(li)

        li.innerHTML += `<button class='btn btn-dark btnD'>x</button> foods: ${item.name} , price: ${item.price} nis`

        let btn = li.querySelector('.btnD') ;

        btn.addEventListener('click' , async() => {

            if(confirm(`sure delete ${item.name}`)) {

                doDeleteApi(item._id)

            }


        })

        


    }


};









const declareViewEvent = () => {


    document.querySelector('#id_form').addEventListener('submit' , async(e) => {

        e.preventDefault() ;

        let object = {

            name: document.querySelector('#id_name').value ,
            cals: document.querySelector('#id_cals').value ,
            price: document.querySelector('#id_price').value ,
            img_url: document.querySelector('#id_img_url').value ,
            category_id: document.querySelector('#id_category_id').value 



        };
        
        doPostApi(object)
        console.log(object)


    });


};