$(document).ready(function() {
    $.get("http://localhost:3000/", function(data, status) {
        getUsers(data);
    })
    function getUsers(data) {
        data.forEach(function(user) {
            var first = user.user_data.first_name;
            var last = user.user_data.last_name;
            var userID = user.user_data.id;
            var list = document.createElement('p');
            $(list).html(`<a href='/users/${userID}'>${first}</a> ${last}`);
            $('.userList').append(list);
        })
    }
    $.get("http://localhost:3000/active_users", function(data, status) {
      activeUsers(data);
    })
    function activeUsers(data) {
      data.forEach(function(user) {
        var first = user.first_name;
        var last = user.last_name;
        var list = document.createElement('p');
        $(list).html(`<a href='#'>${first}</a> ${last}`);
        $('.activeUserList').append(list);
      })
    }

})
