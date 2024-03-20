
window.addEventListener('load' , async() => {

    declareViewEvent()

});




const declareViewEvent = async() => {

    let id_form = document.querySelector('#id_form');
    id_form.addEventListener('submit' , (e) => {

        e.preventDefault()

        let inp_file = document.querySelector('#id_file').files[0] 

        let dataMyForm = new FormData();

        dataMyForm.append('file' ,inp_file)

        doApiUpload(dataMyForm)


    });
    


};



const doApiUpload = async(_file) => {

    let url = `http://127.0.0.1:3002/upload` ;

    let resp = await fetch(url ,{
        method:'POST',
        body:_file
    })
    let data = await resp.json()

    console.log(data)



};