let submitdata = document.getElementById('submitdata')
submitdata.addEventListener('click',function (e) {
    e.preventDefault()

    console.log("btn clicked");
    let name = document.getElementById('name').value
    let password = document.getElementById('password').value

    // let arr = []
    let arr = [JSON.parse(localStorage.getItem("userdata"))]
    let arrdata = {
        name: name,
        password: password
    }
    arr.push(arrdata);
    localStorage.setItem("userdata",JSON.stringify(arr));

    let data = localStorage.getItem("userdata");

    let parse = JSON.parse(data)
    console.log(parse)


    // view html data
    htmldata = ''
    parse.forEach((user,id) => {
        console.log(user.name);
        htmldata += `
        <tr>
            <td>${id}</td>
            <td>${user.name}</td>
            <td>${user.password}</td>
        </tr>
        `
        document.getElementById('showdata').innerHTML = htmldata
    });
})