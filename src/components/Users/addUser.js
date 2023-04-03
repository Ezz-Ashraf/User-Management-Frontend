import React from "react";

import classes from './adduser.module.css'
import Card from "../UI/Card";
const AddUser = props => {

    const addUserHandler = (event) =>{
        event.preventDefault();
        return true
    }

    return (
        <Card className={classes.input} >
        <form onSubmit={addUserHandler}>
            <label  htmlFor="userName">
            UserName
            </label>
            <input  id="userName" type="text"/>

            <label  htmlFor="age">
            Age
            </label>
            <input  id="age" type="number"/>
            <button type="submit">Add User</button>
        </form>
        </Card>
    );
}

export default AddUser