import React, { useState } from "react";
import {View, Text, TextInput, TouchableOpacity, FlatList} from "react-native"

const ToDoList=()=>{
    const[text, setText]=useState("")
    const[toDoList, setToDoList]=useState([])

    const handleAdd=()=>{
        if(text.trim() !== ""){
            setToDoList([...toDoList, text])
            setText("")
        }
    }
    return(
        <View>
            <Text>This is TODoList.....</Text>
            <TextInput
            placeholder="Enter Text"
            value={text}
            onChangeText={(text)=>{
                setText(text)
            }}
            />
            <TouchableOpacity
            onPress={()=>{
                handleAdd()
            }}
            >
                <Text>Add</Text>
            </TouchableOpacity>
            <FlatList
            data={toDoList}
            renderItem={({item})=>{
                return(
                    <View>
                        <Text>{item}</Text>
                        </View>
                )
            }}
            />
        </View>
    )
}
export default ToDoList