function agee() {
    var now = new Date(); //Текущя дата
    var today = new Date(now.getFullYear(), now.getMonth(), now.getDate()); //Текущя дата без времени
    var dob = new Date(2000, 1, 20); //Дата рождения
    var dobnow = new Date(today.getFullYear(), dob.getMonth(), dob.getDate()); //ДР в текущем году
    var age; //Возраст

    age = today.getFullYear() - dob.getFullYear();
    if (today < dobnow) {
        age = age - 1;
    }

    console.log(`Возраст: ${age}`);

    document.getElementById("age").innerHTML = 5 + 6;
}

