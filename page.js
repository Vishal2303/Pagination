let data;

var req = new XMLHttpRequest();
req.open('GET', 'https://raw.githubusercontent.com/Rajavasanthan/jsondata/master/pagenation.json ', true);
req.send();
req.onload = function () {
    data = JSON.parse(this.response);
    tables();
    content(currentpage);
}

let currentpage = 1;

function tables() {
    var table = document.createElement('table');
    table.className = "table table-dark";
    document.body.append(table);
    var thead = document.createElement('thead');
    var tr = document.createElement('tr');
    var th1 = createth('th', 'ID');
    var th2 = createth('th', 'Name');
    var th3 = createth('th', 'Email');
    tr.append(th1, th2, th3);
    thead.append(tr);
    table.append(thead);
}

function cd(n) {
    deleteallrows();
    currentpage = n;
    content(parseInt(n));

}

function cdn() {
    if (currentpage + 1 > 10) {
        currentpage = 10;
    } else {
        currentpage = currentpage + 1;
        deleteallrows();
        content(currentpage);
    }

}

function cdp() {
    if (currentpage - 1 < 1) {
        currentpage = 1;
    } else {
        currentpage = currentpage - 1;
        deleteallrows();
        content(currentpage);
    }

}


function createth(elementname, value = "") {
    var td = document.createElement(elementname);
    td.innerHTML = value;
    return td;
}
function content(num) {
    var end = num * 10;
    var start = end - 9;
    var tbody = document.createElement('tbody');
    var table = document.getElementsByClassName("table");
    table[0].append(tbody);
    for (let i = start; i <= end; i++) {
        var tr = document.createElement("tr");
        var td1 = createth("td", data[i - 1].id);
        var td2 = createth("td", data[i - 1].name);
        var td3 = createth("td", data[i - 1].email);
        tr.append(td1, td2, td3);
        tbody.append(tr);
    }

}

function deleteallrows() {
    var tbody = document.getElementsByTagName('tbody')
    tbody[0].remove();
}










