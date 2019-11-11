var API_BASE_URL = "http://localhost:8087";

var createEmployees = function () {
    $.ajax({
        url: API_BASE_URL + "/employees",
        method: "POST",
        contentType: "application/json",
        data: JSON.stringify({
            marca: $('#Marca').val(),
            firstName: $('#Firstname').val(),
            lastName: $('#Lastname').val(),
            salary: $('#Salary').val(),
            standardHours: $('#Standardhours').val(),
            personalDeduction: $('#Personaldeduction').val(),
            ticket: $('#Tiket').val()
        })
    }).done(function (res) {


    })
}

$("#submit").on("click", function (event) {
    event.preventDefault();
    console.log('aasdas')
    createEmployees();
})


function getEmployeess() {

    $.ajax({
        url: API_BASE_URL + "/employees",
        method: "GET",
        contentType: "application/json",
    }).done(function (response) {
        displayEmployees(response.content);
    })
}

function displayEmployees(employeess) {
    var allEmployeesHtml = "";

    employeess.forEach(employees => allEmployeesHtml += getEmployeesHtml(employees));

    $("#employeesTable tbody").html(allEmployeesHtml);

}

function getEmployeesHtml(employees) {
    return `        
    <tr>
        <th scope="row">${employees.id}</th>
        <td>${employees.marca}</td>
        <td>${employees.lastName}</td>
        <td>${employees.firstName}</td>
        <td>${employees.salary}</td>
    </tr>`

}

getEmployeess();



