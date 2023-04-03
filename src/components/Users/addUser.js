import React ,{useState} from "react";
import Button from "../UI/Button";
import classes from './adduser.module.css'
import Card from "../UI/Card";
const AddUser = props => {

    const [enteredUserName , setEnteredUserName] = useState('')
    const [enteredAge , setEnteredAge] = useState(0)
    const addUserHandler = (event) =>{

        event.preventDefault();
        console.log("Entered user is "+enteredUserName +" and his age is " + enteredAge)
        setEnteredAge(0)
        setEnteredUserName('')
        return true
    }

    const userNameChange = (event) =>{
        setEnteredUserName(event.target.value);
    }

    const ageChange = (event) =>{
        setEnteredAge(event.target.value);
    }

    return (
        <Card className={classes.input} >
        <form onSubmit={addUserHandler}>
            <label  htmlFor="userName">
            UserName
            </label>
            <input  id="userName" type="text" onChange={userNameChange} value={enteredUserName}/>

            <label  htmlFor="age">
            Age
            </label>
            <input  id="age" type="number" onChange={ageChange} value={enteredAge}/>
            <Button type="submit">Add User</Button>
        </form>
        </Card>
    );
}

export default AddUser