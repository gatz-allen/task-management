import axios from 'axios';

let newData;
export const actionLogin = async email => {
    try {
        const { data } = await axios.get('http://localhost:9000/users');
        console.log('data --> ', data.emails);
        if (data.emails.includes(email)) {
            alert('successfully logged in!');
            window.location.href = '/home';
        } else {
            alert('email incorrect or not existing');
        }
    } catch (err) {
        console.log('ERROR ON USERS ', err);
    }
}

export const actionRegister = async email => {
    try {
        const { data } = await axios.get('http://localhost:9000/users', {
            headers: {'Cache-Control':'no-cache'}
        });

        newData = newData ? newData : data.emails;
        newData.push(email);

        const { postData } = axios.post('http://localhost:9000/users', {
            emails: newData
        });

        alert("Successful registration! You may try logging in your email now!");
        window.location.href = "/";
    } catch (err) {
        console.log('ERROR REGISTRATION ', err);
    }
}

export const actionFetchTask = async() => {
    try {
        const { data } = await axios.get('http://localhost:9000/task');
        // console.log('data --> ', data);
        return data.task;
    } catch (err) {
        console.log('ERROR FETCHING LIST ', err);
    }
}

export const actionUpdateTask = async (task, method) => {
    try {
        const { postData } = axios.post('http://localhost:9000/task', {
            task: task
        });

        switch(method) {
            case 'add':
                alert("Task created successfully");
                break;
            case 'edit':
                alert("Task updated successfully");
                break;
            default:
                break;
        }
    } catch (err) {
        console.log('ERROR FETCHING LIST ', err);
    }
}