var canvas = document.getElementById("mycanvas")
var ctx = canvas.getContext("2d");
let initialize = false;
let cells;
let sz;
let visited;
let route = false;
let grid_made = false;
let start_x, start_y, end_x, end_y;
let border;
let speed;

function index() {
    for (let i = 0; i < sz; i++) {
        visited[i].fill(0);

    }

}

// Queue class
class Queue {
    // Array is used to implement a Queue
    constructor() {
        this.items = [];
    }
    enqueue(element) {
        // adding element to the queue
        this.items.push(element);
    }
    dequeue() {
        if (this.size() == 0)
            return "Underflow";
        return this.items.shift();
    }
    front() {
        if (this.isEmpty())
            return "No elements in Queue";
        return this.items[0];
    }
    size() {
        return this.items.length;
    }
    // Functions to be implemented
    // enqueue(item)
    // dequeue()
    // front()
    // isEmpty()
    // printQueue()
}
function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}
function init() {
    initialize = true;
    grid_made = false;
    let spd = document.getElementById("speed").value;
    let size = document.getElementById("size").value;
    sz = +(size.split("x")[0]);
    if (spd == "fast") {
        speed = 50;
    }
    else if (speed == "average") {
        speed = 100;
    }
    else {
        speed = 150;
    }
    console.log(sz);
    if (sz == 16) {


        canvas.style.backgroundImage = "url('bg2.png')";
        canvas.style.backgroundSize = "initial"
        canvas.style.backgroundRepeat = "repeat -x ";
        border = 500 / 16;
    }
    else {

        canvas.style.backgroundImage = "url('img/bg2.png')";
        canvas.style.backgroundSize = "cover"
        border = 500 / 8;
    }
    cells = new Array(sz);
    visited = new Array(sz);
    for (let i = 0; i < sz; i++) {
        cells[i] = new Array(sz);
        visited[i] = new Array(sz);

    }
    for (let i = 0; i < sz; i++) {
        for (let j = 0; j < sz; j++) {
            cells[i][j] = 0;
            visited[i][j] = 0;

        }
    }
    ctx.clearRect(0, 0, 500, 500);


}
async function findroute_dfs() {
    if (initialize == false) {
        alert("Please Click Apply !")
        return;
    }
    //  if (grid_made == false) { alert("Create Grid First ! "); return; }


    var a = (document.getElementById("source").value);
    var b = document.getElementById("dst").value;

    if (a != "") {
        start_x = +(a.split(",")[0]);
        start_y = +(a.split(",")[1]);
    }
    else {
        alert("Source can't be Empty !")
        return;
    }
    if (b != "") {
        end_x = +(b.split(",")[0]);
        end_y = +(b.split(",")[1]);
    }
    else {
        alert("Destination can't be Empty !")
        return;
    }
    if (start_x >= sz || end_x >= sz || end_y >= sz || start_y >= sz || end_y < 0 || end_x < 0 || start_x < 0 || start_y < 0) {
        alert("Enter between 0-" + (sz - 1))
        return;
    }
    document.getElementById("button_0").disabled = "true";

    document.getElementById("button_1").disabled = "true";
    document.getElementById("button_2").disabled = "true";
    document.getElementById("button_3").disabled = "true";
    //   if (cells[start_x][start_y] == 1) { alert("Source same as blockage !"); return; }
    //   if (cells[end_x][end_y] == 1) { alert("Destination same as blockage !"); return; }
    ctx.fillStyle = "black";
    ctx.fillRect(start_y * border + 2, start_x * border + 2, border - 2, border - 2);
    ctx.fillStyle = "rgb(255, 254, 106)";
    ctx.fillRect(end_y * border + 2, end_x * border + 2, border - 2, border - 2);
    await sleep(300)
    ctx.fillStyle = "rgba(0, 217, 159, 0.75)";
    cells[end_x][end_y] = 2;
    await dfs(start_x, start_y);
    await sleep(speed);

    if (route == false) {
        alert("No Route Found !");
    }
    grid_made = false;
    route = false;

    document.getElementById("button_0").disabled = "";

    document.getElementById("button_1").disabled = "";
    document.getElementById("button_2").disabled = "";
    document.getElementById("button_3").disabled = "";

    //   clearcanvas();
    init();
    return;
}
async function findroute_bfs() {
    if (initialize == false) {
        alert("Please Click Apply !")
        return;
    }
    //  if (grid_made == false) { alert("Create Grid First ! "); return; }

    var a = (document.getElementById("source").value);
    var b = document.getElementById("dst").value;

    if (a != "") {
        start_x = +(a.split(",")[0]);
        start_y = +(a.split(",")[1]);
    }
    else {
        alert("Source can't be Empty !")
        return;
    }
    if (b != "") {
        end_x = +(b.split(",")[0]);
        end_y = +(b.split(",")[1]);
    }
    else {
        alert("Destination can't be Empty !")
        return;
    }
    if (start_x >= sz || end_x >= sz || end_y >= sz || start_y >= sz || end_y < 0 || end_x < 0 || start_x < 0 || start_y < 0) {
        alert("Enter between 0-" + (sz - 1))
        return;
    }
    document.getElementById("button_0").disabled = "true";

    document.getElementById("button_1").disabled = "true";
    document.getElementById("button_2").disabled = "true";
    document.getElementById("button_3").disabled = "true";
    //   if (cells[start_x][start_y] == 1) { alert("Source same as blockage !"); return; }
    //   if (cells[end_x][end_y] == 1) { alert("Destination same as blockage !"); return; }
    ctx.fillStyle = "black";
    ctx.fillRect(start_y * border + 2, start_x * border + 2, border - 2, border - 2);
    ctx.fillStyle = "rgb(255, 254, 106)";

    ctx.fillRect(end_y * border + 2, end_x * border + 2, border - 2, border - 2);
    await sleep(300)
    ctx.fillStyle = "rgba(0, 190, 218, 0.75)";
    cells[end_x][end_y] = 2;
    await bfs(start_x, start_y);
    await sleep(speed);
    if (route == false) {
        alert("No Route Found !");
    }
    document.getElementById("button_0").disabled = "";

    document.getElementById("button_1").disabled = "";
    document.getElementById("button_2").disabled = "";
    document.getElementById("button_3").disabled = "";

    route = false;
    grid_made = false;
    //   clearcanvas();
    init();
    return;
}

function clearcanvas() {
    if (initialize == false) {
        alert("Please Click Apply !")
        retrun;
    }
    for (let i = 0; i < sz; i++) {
        for (let j = 0; j < sz; j++) {
            cells[i][j] = 0;
            visited[i][j] = 0;

        }
    }

    grid_made = false;
    var a = (document.getElementById("source").value);
    var b = document.getElementById("dst").value;

    if (a != "") {
        start_x = +(a.split(",")[0]);
        start_y = +(a.split(",")[1]);
    }
    else {
        alert("Source can't be Empty !")
        return;
    }
    if (b != "") {
        end_x = +(b.split(",")[0]);
        end_y = +(b.split(",")[1]);
    }
    else {
        alert("Destination can't be Empty !")
        return;
    }
    if (start_x >= sz || end_x >= sz || end_y >= sz || start_y >= sz || end_y < 0 || end_x < 0 || start_x < 0 || start_y < 0) {
        alert("Enter between 0-" + (sz - 1))
        return;
    }
    ctx.fillStyle = "#F64C7299";
    ctx.clearRect(0, 0, 500, 500);


    let up = Math.floor((sz * sz) * (3 / 4));

    let obstacles = Math.floor(Math.random() * (up - 10) + 10);
    console.log(obstacles)
    for (let i = 0; i < obstacles; i++) {
        let x = Math.floor(Math.random() * (sz - 0));
        let y = Math.floor(Math.random() * (sz - 0));
        if ((x == start_x && y == start_y) || (x == end_x && y == end_y)) { continue; }
        cells[x][y] = 1;
        ctx.fillRect(y * border + 2, x * border + 2, border - 2, border - 2);
    }
    document.getElementById("button_2").disabled = "";
    document.getElementById("button_3").disabled = "";
    grid_made = true;

}

async function dfs(x, y) {
    if (route) { return; }
    if (x >= sz || x < 0 || y >= sz || y < 0 || cells[x][y] == 1 || visited[x][y] == 1) {
        return;
    }
    if (cells[x][y] == 2) {
        route = true;

        ctx.fillRect(y * border + 2, x * border + 2, border - 2, border - 2);
        await sleep(100)
        alert("Route Found")
        ctx.clearRect(y * border + 2, x * border + 2, border - 2, border - 2);
        return;
    }

    ctx.fillRect(y * border + 2, x * border + 2, border - 2, border - 2);

    visited[x][y] = 1;

    await sleep(speed);
    await dfs(x + 1, y);

    await dfs(x - 1, y);

    await dfs(x, y + 1);

    await dfs(x, y - 1);

    await sleep(speed / 4)

    ctx.clearRect(y * border, x * border, border, border);
    return;
}
function valid(x, y) {
    if (x < 0 || x >= sz || y < 0 || y >= sz || visited[x][y] == 1 || cells[x][y] == 1) {
        return false;
    }
    return true;
}
async function bfs(x, y) {

    let q = new Queue;

    q.enqueue([x, y]);

    visited[x][y] = 1;
    ctx.fillRect(y * border + 2, (x) * border + 2, border - 2, border - 2);

    while (q.size() > 0) {
        let size = q.size();
        for (let i = 0; i < size; i++) {
            let t = q.dequeue();

            let X = t[0], Y = t[1];

            await sleep(speed / 2)
            if (valid(X + 1, Y)) {
                q.enqueue([X + 1, Y]);
                visited[X + 1][Y] = 1;
                ctx.fillRect(Y * border + 2, (X + 1) * border + 2, border - 2, border - 2);
                if (cells[X + 1][Y] == 2) {
                    await sleep(50)
                    alert("Route Found !")


                    route = true;
                    return;
                }
            }
            await sleep(speed / 2)
            if (valid(X - 1, Y)) {
                q.enqueue([X - 1, Y]);
                visited[X - 1][Y] = 1;
                ctx.fillRect(Y * border + 2, (X - 1) * border + 2, border - 2, border - 2);

                if (cells[X - 1][Y] == 2) {
                    await sleep(50)
                    alert("Route Found !")

                    route = true;
                    return;
                }
            }
            await sleep(speed / 2)
            if (valid(X, Y - 1)) {
                q.enqueue([X, Y - 1]);
                visited[X][Y - 1] = 1;
                ctx.fillRect((Y - 1) * border + 2, (X) * border + 2, border - 2, border - 2);

                if (cells[X][Y - 1] == 2) {
                    await sleep(50)
                    alert("Route Found !")

                    route = true;
                    return;
                }
            }
            await sleep(speed / 2)
            if (valid(X, Y + 1)) {
                q.enqueue([X, Y + 1]);
                visited[X][Y + 1] = 1;
                ctx.fillRect((Y + 1) * border + 2, X * border + 2, border - 2, border - 2);

                if (cells[X][Y + 1] == 2) {
                    await sleep(50)
                    alert("Route Found !")
                    ctx.fillStyle = "red";
                    route = true;
                    return;
                }
            }


        }
    }

}
