let submitdata = document.getElementById('submitdata')

function setlocalStorage() {
    if (localStorage.getItem('userdata')) {
        let showdiv = document.querySelector('#show')
        showdiv.innerHTML = "";
        let arr = JSON.parse(localStorage.getItem('userdata'))
        console.log(arr)
        arr.forEach((user,id) => {
            let newdiv = document.createElement('table');
            let htmldata = `
            <tr>
                <td width="100">${id}</td>
                <td width="100">${user.name}</td>
                <td width="100">${user.password}</td>
                <td width="100"><button class="btn btn-danger"
                onclick="deletedata(${id})">Delete</button></td>
            </tr>
            `
            newdiv.insertAdjacentHTML('afterbegin',htmldata)
            showdiv.insertAdjacentElement('afterbegin',newdiv)
        });
    }
    else{
        let arr = []
        let arrdata = {
            name:"",
            password:"",
        }
        arr.push(arrdata);
        localStorage.setItem('userdata',JSON.stringify(arr))
    }
}

submitdata.addEventListener('click',function (e) {
    e.preventDefault()

    let arr = Array.from(JSON.parse(localStorage.getItem('userdata')))
    // let a = Array.from(arr)
    // a = Array.from(arr)
    
    console.log("btn clicked");
    
    let name = document.getElementById('name').value
    let password = document.getElementById('password').value
    
    // let arr = []
    let arrdata =  {
        name:name,
        password:password
    }
    arr.push(arrdata)
    // a.push(arrdata)
    localStorage.setItem('userdata',JSON.stringify(arr))
    // localStorage.setItem('userdata',JSON.stringify(a))
    alert("data added successfully")

    setlocalStorage()
})

// delete data 

function deletedata(id) {
    let arr = JSON.parse(localStorage.getItem('userdata'))
    let deletearr = [...arr]
    deletearr.splice(id,1)
    arr = [...deletearr]
    alert("data deleted successfully")
    localStorage.setItem('userdata',JSON.stringify(arr));

    setlocalStorage()
}