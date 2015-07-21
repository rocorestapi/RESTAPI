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

var deleteTask = function(id_task)
{
    frisby.create("Deleting a specific task")
        .delete('https://cloud.agilefant.com:443/ronaldcorreajala/api/v1/tasks/'+id_task)
        .expectStatus(200)
        .inspectJSON()
        .toss();

}

deleteTask(453104);