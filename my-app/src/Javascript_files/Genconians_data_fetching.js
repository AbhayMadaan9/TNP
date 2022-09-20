import { response } from "express";

function fetching()
{
    fetch('../Data/Genconians.json')
    .then(response => response.json)
    .then(rsp => {  
        console.log(rsp.genconians)
    })
}