var i = 0;
var n = 0;

function change_image() {
    var image = ["https://www.how-to-draw-funny-cartoons.com/image-files/cartoon-dad-005.jpg",
        "https://www.how-to-draw-funny-cartoons.com/image-files/cartoon-mom-005.jpg",
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQTjmPHPYonDtia33nsLmIYGmxctMc2j4GoOQ&usqp=CAU",
        "https://us.123rf.com/450wm/yupiramos/yupiramos1904/yupiramos190413445/121007387-stock-vector-little-girl-kid-character-vector-illustration-design.jpg?ver=6"
    ];

    var name = ["Father", "Mother", "Brother", "Sister"];

    document.getElementById("image_family").src = image[i];
    i++;

    document.getElementById("name_family").textContent = name[n];
    n++;

    if (n == 4) {
        n = 0;
    }

    if (i == 4) {
        i = 0;
    }
}