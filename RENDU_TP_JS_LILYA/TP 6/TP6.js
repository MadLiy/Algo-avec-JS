
//------------------------------- TP 6 -----------------------------------------------

//-------------------- JSON ----------------------------------------------------------

let monJSON = {
    "squadName":"Google",
    "homeTown" : "Googleplex, Mountain View, California, United States",
    "Fondateurs" : [
        {
            "name": "Larrry Page",
            "birthday" : "26/03/2973",
            "cityBirth": "East Lansing, Michigan"
        },
        {
            "name": "Sergey Brin",
            "birthday" : "21/08/1973",
            "cityBirth": "Moscou, Union Soviétique"
        }
    ],
    "CA" : [
        {
            "2008" : "16.48M $",
            "2012" : "37.97M $",
            "2016" : "89.46M $",
            "2018" : "136.2M $"
        }
    ]
}

for (i = 0; i < monJSON["Fondateurs"].length; i++) {
    console.log(monJSON["Fondateurs"][i]["name"] + " est né le " + monJSON["Fondateurs"][i]["birthday"] + " à " + monJSON["Fondateurs"][i]["cityBirth"] + ".");
}

"\n"

for(i=0;i< monJSON["CA"].length;i++){
    console.log("En 2008 le CA est de : " + monJSON["CA"][i]["2008"] + "."
    + "\n" + "En 2012 le CA est de : " + monJSON["CA"][i]["2012"] + "." 
    + "\n" + "En 2016 le CA est de : " + monJSON["CA"][i]["2016"] + "."
    + "\n" + "En 2018 le CA est de " + monJSON["CA"][i]["2018"] + "." );
}
