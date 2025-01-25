import {makeAutoObservable} from 'mobx';

class SubjectsStore{

    subjects = []

    constructor(){
        makeAutoObservable(this);
    }

    async loadSubjects(){
        const response = await fetch('http://localhost:3500/schedule/get-subjects');

        if (response.ok){
            this.subjects = await response.json();
        }
    }

    async addNewSubject(title){
        const response = await fetch('http://localhost:3500/schedule/create-subject', {
            method: 'POST',
            headers:{
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(title)
        });

        if (response.ok){
            this.subjects.push(await response.json());
        }
    }
}

export default SubjectsStore;