let submitdata = document.getElementById('submitdata')

function setlocalStorage() {
    if (localStorage.getItem('userdata')) {
        let showdiv = document.querySelector('#show')
        showdiv.innerHTML = "";
        let arr = JSON.parse(localStorage.getItem('userdata'))
        console.log(arr);
        arr.forEach((user,id) => {
            let newdiv = document.createElement('table')
            let htmldata = `
            <tr>
                <td width="100">${id}</td>
                <td width="100">${user.name}</td>
                <td width="100">${user.password}</td>
                <td width="100"><button class="btn btn-danger"
                onclick="deletedata(${id})">Delete</button></td>
                <td><button class="btn btn-warning"
                onclick="onedit(${id})" id="btnedit">Update</button></td>
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
            password:""
        }
        arr.push(arrdata)
        localStorage.setItem('userdata',JSON.stringify(arr));
    }
}

submitdata.addEventListener('click',function (e) {
    e.preventDefault()

    // let arr = JSON.parse(localStorage.getItem('userdata'))
    // let arr = Array.from(JSON.parse(localStorage.getItem('userdata')))

    console.log("btn clicked");
    let name = document.getElementById('name').value;
    let password = document.getElementById('password').value;

    let arr = []

    let arrdata = {
        name : name,
        password : password
    }

    arr.push(arrdata);
    localStorage.setItem('userdata',JSON.stringify(arr))


    alert("data added successfully")
    setlocalStorage()   
})

// delete data

function deletedata(id) {
    let arr = JSON.parse(localStorage.getItem('userdata'))
    let deletearr = [...arr]
    deletearr.splice(id,1)
    arr = [...deletearr]
    alert("delete data successfully")
    localStorage.setItem('userdata',JSON.stringify(arr));

    setlocalStorage()
}

function onedit(id) {
    console.log(id)

    let arr = JSON.parse(localStorage.getItem('userdata'))
    
    let name = document.querySelector('#name').value = arr[id].name
    let password = document.querySelector('#password').value = arr[id].password

    console.log(name," ",password);

    submitdata.setAttribute('disabled',true)
    let editbtn = document.createElement('button')
    let form = document.querySelector('#form')
    let btnedit = document.querySelectorAll('#btnedit')

    editbtn.innerHTML = "update task"
    editbtn.style.backgroundColor = "yellow"
    editbtn.style.padding = "5px"
    editbtn.style.borderRadius = "5px"

    btnedit.forEach((ele)=>{
        ele.setAttribute('disabled',true)
    })

    form.insertAdjacentElement('beforeend',editbtn)

    editbtn.addEventListener('click',(e)=>{
        e.preventDefault()

        let newname = document.querySelector('#name')
        let newpassword = document.querySelector('#password')

        arr.splice(id,1,{
            name:newname.value,
            password:newpassword.value
        })
        localStorage.setItem('userdata',JSON.stringify(arr));
        setlocalStorage();

        newname.value = ""
        newpassword.value = ""

        form.removeChild(form.lastElementChild)
        submitdata.removeAttribute('disabled')
    })
}