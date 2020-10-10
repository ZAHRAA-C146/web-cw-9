// 1
// moon.jpg قم بالوصول إلى الصورة وتغيرها إلى

 document.getElementById("image").src="./images/moon.jpg";  
      

// 2
// "قم بالوصول إلى كلمة الأرض وتحويلها إلى "القمر
 document.getElementById("caption");

MOON.innerHTML="القمر";

// 3
// بحيث إن ضغطت على البطاقة تتغير الصورة للصورة الأخرى ويتغير الاسم onClick قم بإنشاء دالة واستخدام خاصية
// دون الحاجة إلى الخطوتين 2و1
function DARK () {
    let MOON = document.getElementById("caption")
    if(MOON.innerHTML=="القمر" ){
       MOON.innerHTML ="الشمس"
       let image=document.getElementById("image");
       image.src="./images/sun.jpg"
       let body =document.getElementById("body");
       body.style.background="#bb3817"
}
else{
    MOON.innerHTML="القمر";
    let image=document.getElementById("image")
    image.src="./images/moon.jpg"
    let body = document.getElementById("body")
    body.style.background="#ffffff"
}
}

// 4
// Night - Light Mode قم بالتعديل على الدالة بحيث تضم إليها خاصية

/*  الوضع الليلي
    يتغير لون خلفية الصفحة للرمادي
    تتغير الصورة لصورة القمر
    "يتغير الاسم أسفل الصورة ويصبح "القمر
*/

/*  الوضع النهاري
    يتغير لون خلفية الصفحة للأبيض
    تتغير الصورة لصورة الشمس
    "يتغير الاسم أسفل الصورة ويصبح "الشمس
*/
