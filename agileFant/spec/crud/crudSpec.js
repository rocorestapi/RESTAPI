/**
 * Created by ronald correa on 7/21/2015.
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

var createProduct = function(prod_name)
{
    var basicProduct =
    {
        "type": "product",
        "name": prod_name,
        "description": {
            "type": "html",
            "html": "<strong>Basic Product for FRISBY task</strong><br />"
        },
        "effortSpent": 50
    }

    frisby.create("Creating basic PRODUCT")
        .post('https://cloud.agilefant.com:443/ronaldcorreajala/api/v1/backlogs', basicProduct, {json: true})
        .expectStatus(201)
        .inspectJSON()
        .inspectBody()
        .afterJSON(function (jsonProd)
        {
            //console.log("New TASK created: ", jsonTask.type, jsonTask.id)
            //expect(true).toBe(false);
            /*
             frisby.create('Verifying the parent Project created')
             .get('https://todo.ly/api/projects/' + jsonParent.Id + '.json')
             .expectJSON({
             Id: jsonParent.Id,
             Content: jsonParent.Content
             })
             .toss();*/


        })
        .toss();

}

var createProject = function(proj_name, parent_id)
{
    var basicProject =
    {
        "type": "project",
        "name": proj_name,
        "description": {
            "type": "html",
            "html": "<strong>Basic Project under basic Product for FRISBY task</strong><br />"
        },
        "parent": {
            "type": "product",
            "id": parent_id
        },
        "effortSpent": 50,
        "startDate": "2015-07-21T12:00:00.000Z",
        "endDate": "2015-08-04T22:00:00.000Z",
        "assignments": [],
        "backlogSize": 0,
        "baselineLoad": 0
    }

    frisby.create("Creating basic PROJECT")
        .post('https://cloud.agilefant.com:443/ronaldcorreajala/api/v1/backlogs', basicProject, {json: true})
        .expectStatus(201)
        .inspectJSON()
        .inspectBody()
        .afterJSON(function (jsonProj)
        {
        })
        .toss();

}


var createIteration = function(iter_name, parent_id)
{
    var basicIteration =
    {
        "type": "iteration",
        "name": iter_name,
        "description": {
            "type": "html",
            "html": "<strong>Basic Iteration under basic Project for FRISBY task</strong><br />"
        },
        "parent": {
            "type": "project",
            "id": parent_id
        },
        "effortSpent": 50,
        "startDate": "2015-07-21T12:00:00.000Z",
        "endDate": "2015-08-04T22:00:00.000Z",
        "teams": [
            {
                "type": "team",
                "id": 25868,
                "name": "Admin team"
            }
        ],
        "assignments": [],
        "backlogSize": 0,
        "baselineLoad": 0
    }

    frisby.create("Creating basic PROJECT")
        .post('https://cloud.agilefant.com:443/ronaldcorreajala/api/v1/backlogs', basicIteration, {json: true})
        .expectStatus(201)
        .inspectJSON()
        .inspectBody()
        .afterJSON(function (jsonProj)
        {
        })
        .toss();
}


var createStory = function(story_name, parent_id)
{

    /*

    NO BORRAR, funciona!!!!!!!!!!!!!!!!!!!!!!!

     "type": "story",
     "name": story_name,
     "description":
     {
     "type": "html",
     "html": "<strong>Basic Story  under basic Iteration</strong><br />"
     },
     "state": "PENDING",
     "points": null,
     "value": null,
     "dueDate": null,
     "dependsOnStories": [],
     "requiredByStories": [],
     "tasks": [],
     "children": [],
     "backlog": {
     "type": "project",
     "id": 145121,
     "name": "Project TETS NAME",
     "parent": {
     "type": "product",
     "id": 145115,
     "name": "Prodcut TETS NAME"
     },
     "startDate": "2015-07-21T12:00:00.000Z"
     },
     "effortSpent": 0,
     "description": null,
     "labels": [],
     "parent": null,
     "treeRank": 0,
     "creator": {
     "type": "user",
     "id": 54991,
     "initials": "ronald.correa@jalasoft.com",
     "fullName": "ronald.correa@jalasoft.com"
     },
     "createDate": "2015-07-21T16:35:31.000Z",
     "timestamp": "2015-07-21T16:35:31.000Z",
     "trelloId": null,
     "archived": false,
     "responsibles": [
     {
     "type": "user",
     "id": 54991,
     "initials": "ronald.correa@jalasoft.com",
     "fullName": "ronald.correa@jalasoft.com",
     "emailMd5": "58530d62df77b1fb09277c92e9fff025"
     }
     ],
     "iteration": {
     "type": "iteration",
     "id": 145123,
     "name": "Iteration TETS NAME",
     "startDate": "2015-07-21T12:00:00.000Z"
     }

     */
    var basicStory =
    {
        "type": "story",
        "name": story_name,
        "description":
        {
            "type": "html",
            "html": "<strong>Basic Story  under basic Iteration</strong><br />"
        },
        "state": "PENDING",
        "points": null,
        "value": null,
        "dueDate": null,
        "dependsOnStories": [],
        "requiredByStories": [],
        "tasks": [],
        "children": [],
        "effortSpent": 0,
        "description": null,
        "labels": [],
        "parent": null,
        "treeRank": 0,
        "creator": {
            "type": "user",
            "id": 54991,
            "initials": "ronald.correa@jalasoft.com",
            "fullName": "ronald.correa@jalasoft.com"
        },
        "createDate": "2015-07-21T16:35:31.000Z",
        "timestamp": "2015-07-21T16:35:31.000Z",
        "trelloId": null,
        "archived": false,
        "responsibles": [
            {
                "type": "user",
                "id": 54991,
                "initials": "ronald.correa@jalasoft.com",
                "fullName": "ronald.correa@jalasoft.com",
                "emailMd5": "58530d62df77b1fb09277c92e9fff025"
            }
        ],
        "iteration": {
            "type": "iteration",
            "id": 145123,
            "name": "Iteration TETS NAME",
            "startDate": "2015-07-21T12:00:00.000Z"
        }
    }

    frisby.create("Creating basic STORY")
        .post('https://cloud.agilefant.com:443/ronaldcorreajala/api/v1/stories', basicStory, {json: true})
        .expectStatus(201)
        .inspectJSON()
        .inspectBody()
        .afterJSON(function (jsonProj)
        {
        })
        .toss();
}



var createTask = function(task_name, parent_id)
{
    var basicTask =
    {
        "type": "task",
        "name": task_name,
        "state": "NOT_STARTED",
        "description":
        {
            "type": "html",
            "html": "<strong>Basic TASK under basic STORY </strong><br />"
        },
        "parent":{
            "type":"story",
            "id":parent_id
        },
        "effortLeft":null,
        "rank":0,
        "responsibles": [
            {
                "type": "user",
                "id": 54991,
                "initials": "ronald.correa@jalasoft.com",
                "fullName": "ronald.correa@jalasoft.com",
                "emailMd5": "58530d62df77b1fb09277c92e9fff025"
            }
        ],
        "effortSpent": 0,
        "effortLeft": null,
        "originalEstimate": null,
        "rank": -1,
        "priorities": {},
        "trelloId": null,
        "archived": false
    }

    frisby.create("Creating basic TASK")
        .post('https://cloud.agilefant.com:443/ronaldcorreajala/api/v1/tasks', basicTask, {json: true})
        .expectStatus(201)
        .inspectJSON()
        .inspectBody()
        .afterJSON(function (jsonTask)
        {
        })
        .toss();
}


var updateTaskName = function(task_id, task_name)
{
/*


 var taskToUpdate =
 {
 "type": "task",
 "id": 463267,
 "name": "AAAAAACCCCC",
 "description": {
 "type": "html",
 "html": "<strong>Basic TASK under basic STORY </strong><br />"
 },
 "state": "DEFERRED",
 "parent": {
 "type": "story",
 "id": 650885,
 "name": "MyStory",
 "backlog": {
 "type": "project",
 "id": 145121,
 "name": "Project TETS NAME"
 },
 "iteration": {
 "type": "iteration",
 "id": 145123,
 "name": "Iteration TETS NAME"
 }
 },
 "responsibles": [
 {
 "type": "user",
 "id": 54991,
 "initials": "ronald.correa@jalasoft.com",
 "fullName": "ronald.correa@jalasoft.com",
 "emailMd5": "58530d62df77b1fb09277c92e9fff025"
 }
 ],
 "effortSpent": 0,
 "effortLeft": null,
 "originalEstimate": null,
 "rank": -1,
 "priorities": {},
 "creator": {
 "type": "user",
 "id": 54991,
 "initials": "ronald.correa@jalasoft.com",
 "fullName": "ronald.correa@jalasoft.com"
 },
 "createDate": "2015-07-24T21:38:15.000Z",
 "trelloId": null,
 "archived": false
 }


*/

    var taskToUpdate =
    {
        "type": "task",
        "id": task_id,
        "name": task_name,
        "state": "STARTED",
        "description":
        {
            "type": "html",
            "html": "<strong>Basic TASK under basic STORY </strong><br />"
        }
    }

    frisby.create("Updating basic Task")
        .post('https://cloud.agilefant.com:443/ronaldcorreajala/api/v1/tasks/'+task_id, taskToUpdate, {json: true})
        .expectStatus(200)
        .inspectBody()
        /*
        .afterJSON(function (jsonTask)
        {
        })*/
        .toss();
}


var updateTaskStatus = function(task_id, task_status)
{

    var taskToUpdate =
    {
        "type": "task",
        "id": task_id,
        "state": task_status
    }

    // OJO con este param, puede q no sea nbecesario: {json: true}
    frisby.create("Updating basic Task")
        .post('https://cloud.agilefant.com:443/ronaldcorreajala/api/v1/tasks/'+task_id, taskToUpdate, {json: true})
        .expectStatus(200)
        .inspectBody()
        .after(function (jsonTask)
        {
        })
        .toss();
}

var deleteTask = function(task_id)
{
    frisby.create("Updating basic Task")
        .delete('https://cloud.agilefant.com:443/ronaldcorreajala/api/v1/tasks/'+task_id)
        .expectStatus(200)
        .inspectBody()
        .after(function (jsonTask)
        {
        })
        .toss();
}

//createProduct("Prodcut TETS NAME");
//createProject("Project TETS NAME", 145115);
//createIteration("Iteration TETS NAME", 145121);
//updateTaskName(463267, "RENAMED");
//updateTaskStatus(463267, "DONE");
deleteTask(463270);

