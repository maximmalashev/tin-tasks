const Player = {
    x: 0,
    y: 0,
    moveSpeed: 1,
    sprintSpeed: 1.5,

    move: function(dx, dy) {
        x += dx * this.moveSpeed;
        y += dy * this.moveSpeed;
    },

    sprint: function(dx, dy) {
        x += dx * this.sprintSpeed;
        y += dy * this.sprintSpeed;
    }
}

function print(player) {
    for (var property in player) {
        console.log(property + ": " + player[property] + " " + typeof property);
    }
}

print(Player);