/**
 * Created by ronald correa on 7/14/2015.
 */

/*
*
*/

var frisby = require('frisby');

frisby.globalSetup({
    request: {

        headers: {
            'Authorization': 'Basic cm9uYWxkLmNvcnJlYUBqYWxhc29mdC5jb206Q29udHJvbDEyMw==',
            'Content-Type': 'application/json'
        },
//        proxy: "http://172.20.240.5:8080"
    }

})

/* BASIC CODE TO CREATE TASK
 var newTask =
 {
 "type":"task",
 "name":"hola",
 "state":"NOT_STARTED",
 "parent":
 {
 "type":"story",
 "id":642206
 }
 }
*/

var createTask = function(task_name, parent_id)
{
    var newTask =
    {
        "type": "task",
        "name": task_name,
        "state": "NOT_STARTED",
        "parent": {
            "type": "story",
            "id": parent_id
        }
    }
    frisby.create("creating tasks")
        .post('https://cloud.agilefant.com:443/ronaldcorreajala/api/v1/tasks', newTask, {json: true})
        .expectStatus(201)
        .inspectJSON()
        /*
         .afterJSON(function (jsonParent)
         {
         console.log("New project created: ", jsonParent.Content, jsonParent.Id)
         frisby.create('Verifying the parent Project created')
         .get('https://todo.ly/api/projects/' + jsonParent.Id + '.json')
         .expectJSON({
         Id: jsonParent.Id,
         Content: jsonParent.Content
         })
         .toss();
         })*/
        .toss();

}
createTask("task name", 642206);

/*

[
    {
        "type":"task",
        "name":"hola2",
        "state":"NOT_STARTED",
        "parent":{
            "type":"story",
            "id":642205},
        "effortLeft":null,
        "rank":0
    }
]
*/