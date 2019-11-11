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
        console.log(res);
        
    })
}

$("#submit").on("click", function (event) {
    event.preventDefault();
    console.log('aasdas')
    createEmployees();
})



window.Salarii={
    Salarii: API_BASE_URL = "http://localhost:8087",

  getEmployeess : function(){

    $.ajax({
        url: Salarii.API_BASE_URL + "/employees",
        method: "GET",
            contentType: "application/json",
            data: JSON.stringify({
                marca: $('#Marca').val(),
                firstName: $('#Firstname').val(),
                lastName: $('#Lastname').val(),
                salary: $('#Salary').val()
            })
    }).done(function (response) {
        console.log(response);

        Salarii.displayEmployees(response.content);
    })
},

  displayEmployees : function(employeess){
    var  allEmployeesHtml = "";

    employeess.forEach(employees => allEmployeesHtml += Salarii.getEmployeesHtml(employees));

    $("col").html(allEmployeesHtmlsHtml);

},

 getEmployeesHtml : function (employees) {
    return `        
      
             <tr>
            <th scope="row">1</th>
            <td>${employees.marca}</td>
            <td>${employees.lastName}</td>
            <td>${employees.firstName}</td>
           <td>${employees.salary}</td>
          </tr>`

}};

Salarii.getEmployeess();



