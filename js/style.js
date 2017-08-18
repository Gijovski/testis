/*
function b() {

    var variable;
    console.log(variable)

};


function a() {

    var variable = 1;
    console.log(variable);
    b();
};


var variable = 2;
console.log(variable);
a();
console.log(variable)

*/





/*
var a;

a = "";

if (a) {
    console.log("its not empty")
} else {
    console.log("it is empty")
};
*/

/*
var myObject = {
    firstName: "Dragan",
    lastName: "Gijovski",
    location: {
        city: "Skopje",
        adress: "Fushtanska 99a",
    }
};
console.log(JSON.stringify(myObject));


var jsonValue = JSON.parse('{ "firstName": "Dragan", "lastName": "Gijovski", "location": { "city": "Skopje", "adress": "Fushtanska 99a" } }')

console.log(jsonValue);
*/


/*

function gago() {

    console.log("dragan");
};
gago.city = "skopje";
gago()
console.log(gago.city)







var d = {

    name: "gago",
    tog: function() {
        var self = this
        self.name = "dragan"
        console.log(self);

        var newname = function(nn) {

            self.name = nn

        }
        newname("gijovski")
        console.log(self)


    }
}

d.tog()





var arr = [
    3,
    true,
    function(name) {
        var greeting = "hello"
        console.log(greeting + " " + name)
    },
    {
        name: "dragan",
        address: "Fushtanska"
    }
]
console.log(arr)
arr[2](arr[3].name)



console.log("---------------------")



function jas(firstname, lastname, city) {
    fisrtname = firstname || "youre name here"
    city = city || "veles";
    console.log(firstname + " " + lastname + " lives in " + city);

}
jas("gijovski")

*/





function greeting(firstname, lastname, city) {
    firstname = firstname ? null : "no name"
    city = city || "enter location"
    if (city === "skopje" || "veles") {
        console.log("hello " + firstname + " " + lastname + " from " + city)
    } else {
        console.log("hello " + firstname + " " + lastname + " from " + city)
    }
};
greeting(null, "gijovski")


/*
var trt = function(name) {
    return "hello " + name
}("gago");

console.log(trt);
*/


var jas = "dragan";
(function(name) {

    console.log("hello " + name);
}(jas));





// $("#div").on("click", function() {
//     $.ajax({
//         method: "GET",
//         url: "contact.php",
//         success: function(response) {
//             // response.forEach(function(element) {
//             //     $(".list").append("<li>Name:" + element.name + ", Species: " + element.species + "</li>")
//             // }, this);

//             console.log(response)
//         },
//         error: function(error) {
//             console.log(error)
//         }

//     })
// })