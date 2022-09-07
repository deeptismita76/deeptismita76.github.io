function login(){
    let email = document.getElementById("email")
    let password = document.getElementById("password")

    console.log(email.value)
    console.log(password.value)

    let appRegister = localStorage.getItem("appRegister")
    console.log(appRegister)
    console.log(appRegister.email)
    let appRegisterObject = JSON.parse(appRegister)
    console.log(appRegisterObject)
    console.log(appRegisterObject.email)

    if(email.value == appRegister.email && password.value == appRegister.password){
        let loginMessage = document.getElementById("loginMessage")
        loginMessage.innerHTML = "login success"
        loginMessage.style.color = "green"
        window.location.href="https://facebook.com"

    }else{
        let loginMessage = document.getElementById("loginMessage")
        loginMessage.innerHTML = "invalid email or password"
        loginMessage.style.color = "red"
    }
}