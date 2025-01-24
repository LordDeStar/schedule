import {makeAutoObservable} from 'mobx';


class UserStore{
    currentUser = null
    role = null
    constructor(){
        makeAutoObservable(this)
    }
    setRole(title){
        this.role = title;
    }
    async loginAsStudent(login, password){
        const response = await fetch('http://localhost:3500/users/auth-student', {
            method: "POST",
            headers:{ 
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({login, password})
        })

        if (response.ok){
            this.currentUser = await response.json();
        }
        else{
            alert("Неверный логин или пароль");
        }
    }

    async loginAsTeacher(login, password){
        const response = await fetch('http://localhost:3500/users/auth-teacher', {
            method: "POST",
            headers:{ 
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({login, password})
        })

        if (response.ok){
            this.currentUser = await response.json();
        }
        else{
            alert("Неверный логин или пароль");
        }
    }
}



export default UserStore;