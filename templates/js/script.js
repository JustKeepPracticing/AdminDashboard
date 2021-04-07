$.fn.exists = function(callback) {
    if (this.length) {
        var args = [].slice.call(arguments, 1);
        callback.call(this, args);
    }
    return this;
};

//chart.js charts

//pie chart
if(document.getElementById('pieChart')) {
    Chart.defaults.global.legend.display = false;
    var data = {
        labels: ['dribble', 'pinterest', 'behance'],
        datasets: [{
            data: [7689, 498 , 573],
            backgroundColor: [
                "#ff9800",
                "#FFC107",
                "#00bcd4"
            ],
            hoverBackgroundColor: [
                "#FB8C00",
                "#FFB300",
                "#00ACC1"
            ]
        }]
    };

    var pie = $("#pieChart");
    new Chart(pie, {
        type: 'pie',
        data: data
    });
}

// line chart
if(document.getElementById('barChart')) {
    var dataChartist = {
        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
        series: [
            [5, 4, 3, 7, 5, 10, 3, 4, 8, 10, 6, 8],
            [3, 2, 9, 5, 4, 6, 4, 6, 7, 8, 7, 4]
        ]
    };

    var options = {
        seriesBarDistance: 10,
        width: "100%",
        height: "100%"
    };

    var responsiveOptions = [
        ['screen and (max-width: 640px)', {
            seriesBarDistance: 5,
            axisX: {
                labelInterpolationFnc: function (value) {
                    return value[0];
                }
            }
        }]
    ];
    new Chartist.Bar('#barChart', dataChartist, options, responsiveOptions);
}

// doughnut chart
if(document.getElementById("chartjs-4")) {
    var ctx = document.getElementById("chartjs-4").getContext('2d');

    data = {
        labels: ['USA', 'Europe', 'Asia'],
        datasets: [{
            data: [50, 30, 20],
            backgroundColor: [
                "#00bcd4",
                "#4caf50",
                "#E91E63"
            ],
            hoverBackgroundColor: [
                "#00ACC1",
                "#43A047",
                "#D81B60"
            ]
        }]
    };
    new Chart(ctx, {
        type: 'doughnut',
        data: data,
        options: options
    });
}

if(document.getElementById("homeLineChart")) {
    new Chartist.Line('#homeLineChart', {
        labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug"],
        series: [
            [1, 2, 4, 2, 5, 5, 4, 8, 9]
        ]
    }, {
        low: 0,
        showArea: true
    });
}


//click on enter
if(document.getElementById("textfield")) {
    (this).addEventListener("keypress", function(event) {
        if (event.keyCode === 13) {
            event.preventDefault();
            document.getElementById("addBtn").click();
        }
    });
}


// checkbox

$('#addBtn').exists(function() {
    addBtn.onclick = function() {
        var listItem = document.createElement('li');
        var newCheckbox = document.createElement("input");
        var controlItems = document.createElement('span');
        controlItems.setAttribute('class', 'show-on-hover float-right');
        var spanElement = document.createElement('span');
        spanElement.setAttribute('class', 'delete');
        var trashIcon = document.createElement('i');
        trashIcon.setAttribute('class', 'fas fa-trash-alt');
        spanElement.appendChild(trashIcon);
        controlItems.appendChild(spanElement);
        newCheckbox.type = "checkbox";
        newCheckbox.name = "name";
        newCheckbox.value = "value";
        newCheckbox.id = (new Date().getTime()).valueOf(); // will output unique ID each time
        var label = document.createElement("label");
        label.htmlFor = (new Date().getTime()).valueOf();
        label.appendChild(document.createTextNode(document.getElementById("textfield").value)
        );
        listItem.appendChild(newCheckbox);
        listItem.appendChild(label);
        listItem.appendChild(controlItems);
        checklist.appendChild(listItem);
    };
});

$('#addBtn').on('click', function () {
    if ($(this).val() == "add")
        $('#textfield').val("")
});



$(document).on('click','.delete',function() {
    $(this).closest("li").remove();
});


$('[data-toggle="sidebar"]').click(function(e) {
    e.preventDefault();
    $("#mobile-sidebar").toggleClass("toggled-sidebar");
    $(".content-wrapper").toggleClass("toggled-content");
});


$('.fa-star').click(function () {
    $(this).toggleClass('fas','fa-star');
    $(this).toggleClass('far')

});


// var editor = new wysihtml5.Editor("wysihtml5-textarea", { // id of textarea element
//     toolbar:      "wysihtml5-toolbar", // id of toolbar element
//     parserRules:  wysihtml5ParserRules // defined in parser rules set
// });


if(document.getElementById("calendar")) {
    var initialize_calendar;
    initialize_calendar = function () {
        $('#calendar').each(function () {
            var calendar = $(this);
            calendar.fullCalendar({});
        })
    };
    $(document).on('turbolinks:load', initialize_calendar);



    $(function() {
        $('#calendar').fullCalendar({
            header: {
                left:   'title',
                center: 'month, agendaWeek, agendaDay',
                right:  'prev,next, today'
            },
            selectable: true,
            selectHelper: true,
            editable: true,
            eventLimit: true,
            eventBackgroundColor: "#00bcd4",
            eventBorderColor: 'transparent',
            events: [],
            eventRender: function(event, element) {
                element.attr('title', event.tip);
            },
            select: function (start) {
                var dialogModal = document.getElementById('#createEventModal');
                $('#createEventModal').modal();
                var newEvent = new Object();
                newEvent.title = dialogModal;
                newEvent.start = moment(start).format();
                newEvent.allDay = false;

                $('#calendar').fullCalendar('renderEvent', newEvent, true);
            },
            // eventClick:  function() {
            //     $('#createEventModal').modal();
            // }
            eventClick: function(calEvent, jsEvent) {
                var title = prompt('Event Title:', calEvent.title, {
                    buttons: {
                        Ok: true,
                        Cancel: false
                    }
                });

                if (title) {
                    calEvent.title = title;
                    $('#calendar').fullCalendar('updateEvent', calEvent);
                }
            }
        })
    });
}


$('#submitButton').on('click', function(e){
    e.preventDefault();
    doSubmit();
});

function doSubmit(){
    $("#createEventModal").modal('hide') }


if(document.getElementById("editor")) {
    ClassicEditor.create(document.querySelector('#editor'));
}














