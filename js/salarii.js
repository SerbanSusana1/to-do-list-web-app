var API_BASE_URL = "http://localhost:8087";

var createSalary = function () {
    $.ajax({
        url: API_BASE_URL + "/salaries",
        method: "POST",
        contentType: "application/json",
        data: JSON.stringify({
            marca: $('#marca').val(),
            workingdaysmonth: $('#workingdaymonth').val(),
            workeddays: $('#workeddays').val(),
            holidaydays: $('#holidaydays').val(),
            sickdays: $('#sickdays').val()
        })

    }).done(function (res) {
        console.log(res);
        $('#rightworkeddays').val(res.rightworkeddays)
        $('#rightholidaydays').val(res.rightholidaydays)
        $('#rightsickdays').val(res.rightsickdays)
        $('#brutincome').val(res.brutincome)
        $('#CAS').val(res.cas)
        $('#CASS').val(res.cass)
        $('#taxable').val(res.taxable)
        $('#tax').val(res.tax)
        $('#righttickets').val(res.righttickets)
        $('#netincome').val(res.netincome)
    })
}

$("#submit").on("click", function (event) {
    event.preventDefault();
    console.log('aasdas')
    createSalary();
})