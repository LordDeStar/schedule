import {makeAutoObservable} from 'mobx';

class GroupsStore{
    groups = []
    constructor(){
        makeAutoObservable(this);
    }

    async loadGroups(){
        const response = await fetch('http://localhost:3500/users/get-groups');

        if (response.ok){
            this.groups = await response.json();
        }
    }

    async addNewGroup(title){
        const response = await fetch('http://localhost:3500/users/create-group', {
            method: 'POST',
            headers:{
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({title})
        });

        if (response.ok){
            this.groups.push(await response.json());
        }
    }
}

export default GroupsStore;