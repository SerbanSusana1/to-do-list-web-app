var API_BASE_URL = "http://localhost:8087";

var createSalary = function () {
    $.ajax({
        url: API_BASE_URL + "/salaries",
        method: "POST",
        contentType: "application/json",
        data: JSON.stringify({
            marca: $('#Marca').val(),
            workingdaysmonth: $('#Workingdaysmonth').val(),
            workeddays : $('#Workeddays').val(),
            holidaydays: $('#Holidaydays').val(),
            sickdays: $('#Sickdayss').val(),
            withoutsalarydays: $('#Withoutsalarydays').val(),
            rightworkeddays : $('#Rightworkeddays').val(),
            rightholidaydays: $('#rightholidaydays').val(),
            rightsickdays: $('#Rightsickdays').val(),
            brutincome: $('#Brutinncome').val(),
            CAS: $('#CAS').val(),
            CASS: $('#CASS').val(),
            taxable: $('#Taxable').val(),
            righttickets: $('#Righttikets').val(),
            tax: $('#Tax').val(),
            netincome: $('#Netincome').val()
        })






}).done(function (res) {
        console.log(res);

    })
}

$("#submit").on("click", function (event) {
    event.preventDefault();
    console.log('aasdas')
    createSalary();
})