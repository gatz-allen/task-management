import React, {useState, useEffect} from 'react';
import styled from '@emotion/styled';
import { ActionBtn } from '../components/forms';

// actions
import { actionFetchTask, actionUpdateTask } from '../api';

const MainContainer = styled('div')({
    display: 'flex',
    width: '1024px',
    alignContent: 'center',
    justifyContent: 'center',
    flexDirection: 'column',
    paddingBottom: 20
});

const MainHeader = styled('div')({
    display: 'flex',
    border:'1px solid #ccc',
    width: '1024px',
    alignContent: 'center',
    justifyContent: 'center'
});

const ListContainer = styled('div')(({ isAddMode }) => ({
    color: '#fff',
    display: 'grid',
    gridTemplateColumns: isAddMode ? 'auto auto auto' : 'auto auto auto auto',
    backgroundColor: '#2196F3',
    border:'1px solid #000',
    minWidth: 200,
    justifyContent: 'center',
    margin: '5px auto'
}));

const ListHeader = styled('div')({
    color: '#000',
    fontWeight: 700,
    border: '1px solid #000',
    padding: '5px 20px',
    fontSize: 20,
    textAlign: 'center'
});

const ListItem = styled('div')(({ isBtn }) => ({
    border: '1px solid #000',
    padding: '5px 20px',
    fontSize: 14,
    textAlign: 'center',
    display: 'flex',
    flexDirection: isBtn ? 'row' : 'column'
}));

const InputElem = styled('input')({
    border:'1px solid black',
    width: '100%',
    height: 20
});

const Home = () => {
    const [task, setTask] = useState([]);
    const [mode, setMode] = useState(false);
    const [editIndex, setEditIndex] = useState(null);
    const [noData, setNoData] = useState(false);
    const [taskObj, setTaskObj] = useState({
        status: 'To Do',
        title: '',
        description: ''
    });
    
    const getTask = async () => {
        const data = await actionFetchTask();  
        if(data.length < 1) {
            setNoData(true); 
        } else {
            setNoData(false);
            setTask(data); 
        }
    }

    useEffect(() => {
        if(task.length === 0 && !noData) {
            getTask();
        }
    }, [task]);

    useEffect(() => {
        if(mode && mode !== 'edit') {
            setTimeout(() => {
                document.getElementsByClassName('input-field')[0].value = 'To Do';
            }, 100);
        }
    },[mode]);

    const onHandleSubmit = () => {
        const input1 = document.getElementsByClassName('input-field')[0];
        const input2 = document.getElementsByClassName('input-field')[1];
        const input3 = document.getElementsByClassName('input-field')[2];

        let newSetTask = task;
        if(mode === 'edit') {
            newSetTask[editIndex].status = input1.value;
            newSetTask[editIndex].title = input2.value;
            newSetTask[editIndex].description = input3.value;
            actionUpdateTask(newSetTask, 'edit');
        } else {
            newSetTask.push(taskObj);
            actionUpdateTask(newSetTask, 'add');
        }

        input1.value = '';
        input2.value = '';
        input3.value = '';
        setMode(false);
    }

    const onRemoveItem = index => {
        let newSetTask = task;
        newSetTask.splice(index, 1);
        actionUpdateTask(newSetTask);
        setTask([]);
    }

    const onEditItem = index => {
        setMode('edit');
        setEditIndex(index);

        setTimeout(() => {
            document.getElementsByClassName('input-field')[0].value = task[index].status;
            document.getElementsByClassName('input-field')[1].value = task[index].title;
            document.getElementsByClassName('input-field')[2].value = task[index].description;
        }, 100);
    }

    const renderList = () => {
        return task.map((val, index) => (
            <>
                <ListItem>{val.status}</ListItem>
                <ListItem>{val.title}</ListItem>
                <ListItem>{val.description}</ListItem>
                <ListItem isBtn>
                    <ActionBtn onClick={() => onEditItem(index)}>Edit</ActionBtn>
                    <ActionBtn onClick={() => onRemoveItem(index)}>Remove</ActionBtn>
                </ListItem>
            </>
        ));
    }

    const renderAddMode = () => {
        return(
           <>
            <center><h4>Add Task</h4></center>
            <ListContainer isAddMode={mode}>
                <ListHeader>Status</ListHeader>
                <ListHeader>Title</ListHeader>
                <ListHeader>Description</ListHeader>

                <ListItem>
                    <InputElem
                        className='input-field'
                        onChange={e => setTaskObj({...taskObj, status: e.target.value})}
                    />
                </ListItem>
                <ListItem>
                    <InputElem
                        className='input-field'
                        onChange={e => setTaskObj({...taskObj, title: e.target.value})}
                    />
                </ListItem>
                <ListItem>
                    <InputElem
                        className='input-field'
                        onChange={e => setTaskObj({...taskObj, description: e.target.value})}
                    />
                </ListItem>
            </ListContainer>
            <ActionBtn onClick={onHandleSubmit}>Submit</ActionBtn>
            </>
        )
    }

    return (
        <MainContainer>
            <MainHeader>
                <h1>TASK MANAGEMENT SYSTEM</h1>
            </MainHeader>
            {task && task.length > 0 && !mode ? 
                <ListContainer>
                    <ListHeader>Status</ListHeader>
                    <ListHeader>Title</ListHeader>
                    <ListHeader>Description</ListHeader>
                    <ListHeader>Actions</ListHeader>
                    {renderList()}
                </ListContainer>
                :
                mode ?
                    renderAddMode()
                :
                <h1>NO DATA</h1>
            }
        <ActionBtn onClick={() => setMode(!mode)}>{mode ? 'Cancel' : 'Add Task'}</ActionBtn>
        <br></br>
        {!mode ? <ActionBtn onClick={() => window.location.href = '/'}>Logout</ActionBtn> : ''}
        </MainContainer>

    )
}

export default Home;
