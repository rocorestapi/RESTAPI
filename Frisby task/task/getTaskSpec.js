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
            'Authorization': 'Basic cm9uYWxkLmNvcnJlYUBqYWxhc29mdC5jb206Q29udHJvbDEyMw=='
        },
//        proxy: "http://172.20.240.5:8080"
    }

})

var getTask = function(id_task)
{
    frisby.create("Getting a specific task")
        .get('https://cloud.agilefant.com:443/ronaldcorreajala/api/v1/tasks/'+id_task+'?templates=Summary,+ExpandContext,+Context,+Update')
        .expectStatus(200)
        .inspectJSON()
        .afterJSON(function (jsonTask) {
            console.log("\nTask requested: ", jsonTask[0].type, jsonTask[0].id, jsonTask[0].name)
/*
            frisby.create('Verifying the parent Project created')
                .get('https://cloud.agilefant.com:443/ronaldcorreajala/api/v1/tasks/' + jsonTask[0].id + '?templates=Summary')
                .expectStatus(200)
                .toss();*/
        })
        .toss();


}

getTask(455174);