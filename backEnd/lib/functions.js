module.exports = {
    getActives: function(data) {
        var activeUsers = [];
        data.forEach(function(users) {
            var profile = users.user_data.active;
            if (profile === 1) {
                activeUsers.push(users.user_data);
            }
        })
        return activeUsers;
    },
    userProfiles: function(data, userProfId) {
        var profile = [];
        data.forEach(function(users) {
            var userID = users.user_data.id;
            if (userID === +userProfId) {
                profile.push(users.user_data);
            }
        })
        return profile;
    }
}
