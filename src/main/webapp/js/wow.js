
        $(document).ready(function(){
    $("#myBtn").click(function(){
        $("#form1").hide(100);
         $("#myBtn2").show(100);
        $("#print1").show(100);
    }); 
});
              

$(function(){
    $("#result").hide();
   
});

    $(document).ready(function(){
    $("#myBtn2").click(function(){
        $("#myBtn2").hide(100);
        $("#print1").hide(100);
        $("#result").hide(100);
         $("#form1").show(100);
            modal.style.display = "block";

    });
    
});


        
// Get the modal
var y = document.getElementById("dl");
var x = document.getElementById("ddlViewBy");
var modal = document.getElementById('myModal');
var input = document.getElementById("degree");

// Get the button that opens the modal
var btn = document.getElementById("myBtn"); 
btn.onclick = function() {
document.getElementById("result").innerHTML = "";
document.getElementById('result').style.display = 'block';
document.getElementById('redo').style.display = 'block';

    // 2016 llllllllllllllllllllllllllllll

if(y.value==1){
    
if (input.value=="")
    {
document.getElementById('result').innerHTML += ' من فضلك قم بادخال مجموعك وأعد المحاولة';
}
    else{
    if ( (x.value) ==1)
    
    {
        
       
 if(input.value>410 )
        {
document.getElementById('result').innerHTML += '  من فضلك أدخل مجموع صحيح وأعد المحاوله';
        
        }
        if(input.value>=405 && input.value <= 410 )
        {
            document.getElementById('result').innerHTML += '<table class="table" > <thead class="thead-inverse"><tr class="table-active" dir="rtl"><th id="table">أفضل الكليات المتوقعه</th></tr></thead> <tbody id="t-body"><tr id="thebest"><td>هندسة بترول وتعدين</td></tr><tr><td>هندسة</td></tr><tr><td>حاسبات ومعلومات</td></tr><tr><td>فنون تطبيقية</td></tr> <tr><td>فنون جميلة</td> <tr><td>علوم</td></tr></tr> <tr><td>تجاره</td></tr></table>';

        
        }
        
         if( input.value >= 382&& input.value < 405 )
        {
            document.getElementById('result').innerHTML += '<table class="table" > <thead class="thead-inverse"><tr class="table-active" dir="rtl"><th id="table">أفضل الكليات المتوقعه</th></tr></thead> <tbody id="t-body"><tr id="thebest"><td>هندسة</td></tr><tr><td>حاسبات ومعلومات</td></tr><tr><td>فنون تطبيقية</td></tr> <tr><td>فنون جميلة</td> <tr><td>علوم</td></tr></tr><tr><td>تربية</td></tr> <tr><td>تجاره</td></tr> <tr><td>حقوق</td></tr></table>';        
        }
  if( input.value >= 377 && input.value < 382 )
        {
            document.getElementById('result').innerHTML += '<table class="table" > <thead class="thead-inverse"><tr class="table-active" dir="rtl"><th id="table">أفضل الكليات المتوقعه</th></tr></thead> <tbody id="t-body"><tr id="thebest"><td>حاسبات ومعلومات</td></tr><tr><td>فنون تطبيقية</td></tr> <tr><td>فنون جميلة</td> <tr><td>علوم</td></tr></tr><tr><td>تربية</td></tr> <tr><td>تجاره</td></tr> <tr><td>حقوق</td></tr></table>';        
        }
        
         if( input.value >= 368 && input.value < 377)
        {
            document.getElementById('result').innerHTML += '<table class="table" > <thead class="thead-inverse"><tr class="table-active" dir="rtl"><th id="table">أفضل الكليات المتوقعه</th></tr></thead> <tbody id="t-body"><tr id="thebest"><td>فنون تطبيقية</td></tr> <tr><td>فنون جميلة</td> <tr><td>علوم</td></tr></tr><tr><td>تربية</td></tr> <tr><td>تجاره</td></tr> <tr><td>حقوق</td></tr></table>';        
        
        }
        
         if( input.value >= 346.5 && input.value < 368 )
        {
document.getElementById('result').innerHTML += ' مجموعك ليس ضمن المرحلة الاولي ';
        
        }
        
         if( input.value >= 280.5 && input.value < 346.5 )
        {
document.getElementById('result').innerHTML += ' مجموعك ليس ضمن المرحلة الاولي ';
        }
        
         if( input.value >= 271.5 && input.value < 280.5 )
        {
document.getElementById('result').innerHTML += ' مجموعك ليس ضمن المرحلة الاولي ';
        
        }
        
         if( input.value >= 232 && input.value < 271.5 )
        {
document.getElementById('result').innerHTML += ' مجموعك ليس ضمن المرحلة الاولي ';
        
        }
        
         if( input.value >= 223 && input.value < 232 )
        {
document.getElementById('result').innerHTML += ' مجموعك ليس ضمن المرحلة الاولي ';
        
        }
         if( input.value >= 0 && input.value < 223 )
        {
       document.getElementById('result').innerHTML += 'انتظر نتيجة مكتب التنسيق';

        }
    
        
    }

if ( (x.value) ==2)
    
    {
        
 if(input.value>410 )
        {
document.getElementById('result').innerHTML += 'من فضلك أدخل مجموع صحيح';
        
        }
        if(input.value>=403.5 && input.value <= 410 )
        {
            document.getElementById('result').innerHTML += '<table class="table" > <thead class="thead-inverse"><tr class="table-active" dir="rtl"><th id="table">أفضل الكليات المتوقعه</th></tr></thead> <tbody id="t-body"><tr id="thebest"><td>كلية الطب</td></tr><tr><td>طب الأسنان</td></tr><tr><td>كلية الصيدلة</td></tr><tr><td>كلية العلاج الطبيعي</td></tr> <tr><td>طب بيطري</td> <tr><td>علوم</td></tr> <tr><td>كلية التمريض</td></tr> <tr><td>تجاره</td></tr></table>';
        
        }
        
         if( input.value >= 402.5 && input.value < 403.5 )
        {
            document.getElementById('result').innerHTML += '<table class="table" > <thead class="thead-inverse"><tr class="table-active" dir="rtl"><th id="table">أفضل الكليات المتوقعه</th></tr></thead> <tbody id="t-body"><tr id="thebest"><td>طب الأسنان</td></tr><tr><td>كلية الصيدلة</td></tr><tr><td>كلية العلاج الطبيعي</td></tr> <tr><td>طب بيطري</td> <tr><td>علوم</td></tr> <tr><td>كلية التمريض</td></tr> <tr><td>تجاره</td></tr></table>';
        
        }
  if( input.value >= 399 && input.value < 402.5 )
        {
            document.getElementById('result').innerHTML += '<table class="table" > <thead class="thead-inverse"><tr class="table-active" dir="rtl"><th id="table">أفضل الكليات المتوقعه</th></tr></thead> <tbody id="t-body"><tr id="thebest"><td>كلية الصيدلة</td></tr><tr><td>كلية العلاج الطبيعي</td></tr> <tr><td>طب بيطري</td> <tr><td>علوم</td></tr> <tr><td>كلية التمريض</td></tr> <tr><td>تجاره</td></tr> <tr><td>الحقوق</td></tr></table>';
        
        }
        
         if( input.value >= 398.5 && input.value < 399)
        {
            document.getElementById('result').innerHTML += '<table class="table" > <thead class="thead-inverse"><tr class="table-active" dir="rtl"><th id="table">أفضل الكليات المتوقعه</th></tr></thead> <tbody id="t-body"><tr id="thebest"><td>كلية العلاج الطبيعي</td></tr> <tr><td>طب بيطري</td> <tr><td>علوم</td></tr> <tr><td>كلية التمريض</td></tr> <tr><td>تجاره</td></tr> <tr><td>الحقوق</td></tr></table>';
        
        }
        
         if( input.value >= 383 && input.value < 397 )
        {
            document.getElementById('result').innerHTML += '<table class="table" > <thead class="thead-inverse"><tr class="table-active" dir="rtl"><th id="table">أفضل الكليات المتوقعه</th></tr></thead> <tbody id="t-body"><tr id="thebest"><td>طب بيطري</td> <tr><td>علوم</td></tr> <tr><td>كلية التمريض</td></tr> <tr><td>تجاره</td></tr> <tr><td>الحقوق</td></tr></table>';
        
        }
        
         if( input.value >= 363 && input.value < 382 )
        {
document.getElementById('result').innerHTML += ' مجموعك ليس ضمن المرحلة الاولي ';
        
        }
        
         if( input.value >= 280.5 && input.value < 363 )
        {
document.getElementById('result').innerHTML += ' مجموعك ليس ضمن المرحلة الاولي ';
        
        }
        
         if( input.value >= 271.5 && input.value < 280.5 )
        {
document.getElementById('result').innerHTML += ' مجموعك ليس ضمن المرحلة الاولي ';
        }
        
         if( input.value >= 232 && input.value < 271.5 )
        {
document.getElementById('result').innerHTML += ' مجموعك ليس ضمن المرحلة الاولي ';
        
        }
        
         if( input.value >= 223 && input.value < 232 )
        {
document.getElementById('result').innerHTML += ' مجموعك ليس ضمن المرحلة الاولي ';
        
        }
         if( input.value >= 0 && input.value < 223 )
        {
       document.getElementById('result').innerHTML += 'انتظر نتيجة مكتب التنسيق';

        }        
        
        
         

    }

    if ( (x.value) ==3)
    
    {
        document.getElementById('result').innerHTML += 'انتظرونا قريبا ';

        
        
        }
    }
}
// 2015  llllllllllllllllllllll

if(y.value==2)
{

    if (input.value=="")
    {
document.getElementById('result').innerHTML += 'من فضلك قم بادخال مجموعك ';

}
    else {
        
    if ( (x.value) ==1)
    
    {
        if(input.value>410 )
        {
document.getElementById('result').innerHTML += '  من فضلك أدخل مجموع صحيح وأعد المحاوله';
        
        }
        if(input.value>=406 && input.value <= 410 )
        {
            document.getElementById('result').innerHTML += '<table class="table" > <thead class="thead-inverse"><tr class="table-active" dir="rtl"><th id="table">أفضل الكليات المتوقعه</th></tr></thead> <tbody id="t-body"><tr id="thebest"><td>هندسة بترول وتعدين</td></tr><tr><td>هندسة</td></tr><tr><td>حاسبات ومعلومات</td></tr><tr><td>فنون تطبيقية</td></tr> <tr><td>فنون جميلة</td> <tr><td>علوم</td></tr></tr> <tr><td>تجاره</td></tr></table>';

        
        }
        
         if( input.value >= 386 && input.value < 406 )
        {
            document.getElementById('result').innerHTML += '<table class="table" > <thead class="thead-inverse"><tr class="table-active" dir="rtl"><th id="table">أفضل الكليات المتوقعه</th></tr></thead> <tbody id="t-body"><tr id="thebest"><td>هندسة</td></tr><tr><td>حاسبات ومعلومات</td></tr><tr><td>فنون تطبيقية</td></tr> <tr><td>فنون جميلة</td> <tr><td>علوم</td></tr></tr><tr><td>تربية</td></tr> <tr><td>تجاره</td></tr> <tr><td>حقوق</td></tr></table>';        
        }
  if( input.value >= 376 && input.value < 386 )
        {
            document.getElementById('result').innerHTML += '<table class="table" > <thead class="thead-inverse"><tr class="table-active" dir="rtl"><th id="table">أفضل الكليات المتوقعه</th></tr></thead> <tbody id="t-body"><tr id="thebest"><td>حاسبات ومعلومات</td></tr><tr><td>فنون تطبيقية</td></tr> <tr><td>فنون جميلة</td> <tr><td>علوم</td></tr></tr><tr><td>تربية</td></tr> <tr><td>تجاره</td></tr> <tr><td>حقوق</td></tr></table>';        
        }
        
         if( input.value >= 368 && input.value < 376)
        {
            document.getElementById('result').innerHTML += '<table class="table" > <thead class="thead-inverse"><tr class="table-active" dir="rtl"><th id="table">أفضل الكليات المتوقعه</th></tr></thead> <tbody id="t-body"><tr id="thebest"><td>فنون تطبيقية</td></tr> <tr><td>فنون جميلة</td> <tr><td>علوم</td></tr></tr><tr><td>تربية</td></tr> <tr><td>تجاره</td></tr> <tr><td>حقوق</td></tr></table>';        
        
        }
        
         if( input.value >= 346.5 && input.value < 368 )
        {
            document.getElementById('result').innerHTML += '<table class="table" > <thead class="thead-inverse"><tr class="table-active" dir="rtl"><th id="table">أفضل الكليات المتوقعه</th></tr></thead> <tbody id="t-body"><tr id="thebest"><td>علوم</td></tr></tr><tr><td>تربية</td></tr> <tr><td>تجاره</td></tr> <tr><td>حقوق</td></tr> <tr><td>أداب</td></tr></table>';        
        
        }
        
         if( input.value >= 280.5 && input.value < 346.5 )
        {
            document.getElementById('result').innerHTML += '<table class="table" > <thead class="thead-inverse"><tr class="table-active" dir="rtl"><th id="table">أفضل الكليات المتوقعه</th></tr></thead> <tbody id="t-body"><tr id="thebest"><td>تربية</td></tr> <tr><td>تجاره</td></tr> <tr><td>حقوق</td></tr> <tr><td>أداب</td></tr></table>';                
        }
        
         if( input.value >= 271.5 && input.value < 280.5 )
        {
            document.getElementById('result').innerHTML += '<table class="table" > <thead class="thead-inverse"><tr class="table-active" dir="rtl"><th id="table">أفضل الكليات المتوقعه</th></tr></thead> <tbody id="t-body"><tr id="thebest"><td>تربية</td></tr> <tr><td>تجاره</td></tr> <tr><td>حقوق</td></tr> <tr><td>أداب</td></tr></table>';                
        
        }
        
         if( input.value >= 232 && input.value < 271.5 )
        {
            document.getElementById('result').innerHTML += '<table class="table" > <thead class="thead-inverse"><tr class="table-active" dir="rtl"><th id="table">أفضل الكليات المتوقعه</th></tr></thead> <tbody id="t-body"><tr id="thebest"><tr><td>حقوق</td></tr> <tr><td>أداب</td></tr></table>';                
        
        }
        
         if( input.value >= 223 && input.value < 232 )
        {
            document.getElementById('result').innerHTML += '<table class="table" > <thead class="thead-inverse"><tr class="table-active" dir="rtl"><th id="table">أفضل الكليات المتوقعه</th></tr></thead> <tbody id="t-body"><tr id="thebest">><td>أداب</td></tr></table>';                
        
        }
         if( input.value >= 0 && input.value < 223 )
        {
       document.getElementById('result').innerHTML += 'انتظر نتيجة مكتب التنسيق';

        }
        
    }

if ( (x.value) ==2)
    
    {
        if(input.value>410 )
        {
document.getElementById('result').innerHTML += 'من فضلك أدخل مجموع صحيح';
        
        }
        if(input.value>=403 && input.value <= 410 )
        {
            document.getElementById('result').innerHTML += '<table class="table" > <thead class="thead-inverse"><tr class="table-active" dir="rtl"><th id="table">أفضل الكليات المتوقعه</th></tr></thead> <tbody id="t-body"><tr id="thebest"><td>كلية الطب</td></tr><tr><td>طب الأسنان</td></tr><tr><td>كلية الصيدلة</td></tr><tr><td>كلية العلاج الطبيعي</td></tr> <tr><td>طب بيطري</td> <tr><td>علوم</td></tr> <tr><td>كلية التمريض</td></tr> <tr><td>تجاره</td></tr></table>';
        
        }
        
         if( input.value >= 402 && input.value < 403 )
        {
            document.getElementById('result').innerHTML += '<table class="table" > <thead class="thead-inverse"><tr class="table-active" dir="rtl"><th id="table">أفضل الكليات المتوقعه</th></tr></thead> <tbody id="t-body"><tr id="thebest"><td>طب الأسنان</td></tr><tr><td>كلية الصيدلة</td></tr><tr><td>كلية العلاج الطبيعي</td></tr> <tr><td>طب بيطري</td> <tr><td>علوم</td></tr> <tr><td>كلية التمريض</td></tr> <tr><td>تجاره</td></tr></table>';
        
        }
  if( input.value >= 398 && input.value < 402 )
        {
            document.getElementById('result').innerHTML += '<table class="table" > <thead class="thead-inverse"><tr class="table-active" dir="rtl"><th id="table">أفضل الكليات المتوقعه</th></tr></thead> <tbody id="t-body"><tr id="thebest"><td>كلية الصيدلة</td></tr><tr><td>كلية العلاج الطبيعي</td></tr> <tr><td>طب بيطري</td> <tr><td>علوم</td></tr> <tr><td>كلية التمريض</td></tr> <tr><td>تجاره</td></tr> <tr><td>الحقوق</td></tr></table>';
        
        }
        
         if( input.value >= 397 && input.value < 398)
        {
            document.getElementById('result').innerHTML += '<table class="table" > <thead class="thead-inverse"><tr class="table-active" dir="rtl"><th id="table">أفضل الكليات المتوقعه</th></tr></thead> <tbody id="t-body"><tr id="thebest"><td>كلية العلاج الطبيعي</td></tr> <tr><td>طب بيطري</td> <tr><td>علوم</td></tr> <tr><td>كلية التمريض</td></tr> <tr><td>تجاره</td></tr> <tr><td>الحقوق</td></tr></table>';
        
        }
        
         if( input.value >= 382 && input.value < 397 )
        {
            document.getElementById('result').innerHTML += '<table class="table" > <thead class="thead-inverse"><tr class="table-active" dir="rtl"><th id="table">أفضل الكليات المتوقعه</th></tr></thead> <tbody id="t-body"><tr id="thebest"><td>طب بيطري</td> <tr><td>علوم</td></tr> <tr><td>كلية التمريض</td></tr> <tr><td>تجاره</td></tr> <tr><td>الحقوق</td></tr></table>';
        
        }
        
         if( input.value >= 363 && input.value < 382 )
        {
            document.getElementById('result').innerHTML += '<table class="table" > <thead class="thead-inverse"><tr class="table-active" dir="rtl"><th id="table">أفضل الكليات المتوقعه</th></tr></thead> <tbody id="t-body"><tr id="thebest"><td>علوم</td></tr> <tr><td>كلية التمريض</td></tr> <tr><td>كلية التربية</td></tr><tr><td>تجاره</td></tr> <tr><td>الحقوق</td></tr></table>';
        
        }
        
         if( input.value >= 280.5 && input.value < 363 )
        {
            document.getElementById('result').innerHTML += '<table class="table" > <thead class="thead-inverse"><tr class="table-active" dir="rtl"><th id="table">أفضل الكليات المتوقعه</th></tr></thead> <tbody id="t-body"><tr id="thebest"><tr><td>كلية التمريض</td></tr> <tr><td>كلية التربية</td></tr><tr><td>تجاره</td></tr> <tr><td>الحقوق</td></tr></table>';
        
        }
        
         if( input.value >= 271.5 && input.value < 280.5 )
        {
            document.getElementById('result').innerHTML += '<table class="table" > <thead class="thead-inverse"><tr class="table-active" dir="rtl"><th id="table">أفضل الكليات المتوقعه</th></tr></thead> <tbody id="t-body"><tr id="thebest"><td>كلية التربية</td></tr><tr><td>تجاره</td></tr> <tr><td>الحقوق</td></tr></table>';        
        }
        
         if( input.value >= 232 && input.value < 271.5 )
        {
            document.getElementById('result').innerHTML += '<table class="table" > <thead class="thead-inverse"><tr class="table-active" dir="rtl"><th id="table">أفضل الكليات المتوقعه</th></tr></thead> <tbody id="t-body"><tr id="thebest"> <td>الحقوق</td></tr><tr><td>الأداب</td></tr></table>';        
        
        }
        
         if( input.value >= 223 && input.value < 232 )
        {
            document.getElementById('result').innerHTML += '<table class="table" > <thead class="thead-inverse"><tr class="table-active" dir="rtl"><th id="table">أفضل الكليات المتوقعه</th></tr></thead> <tbody id="t-body"><tr id="thebest"><td>الأداب</td></tr></table>';        
        
        }
         if( input.value >= 0 && input.value < 223 )
        {
       document.getElementById('result').innerHTML += 'انتظر نتيجة مكتب التنسيق';

        }
        
    }

    
    
    if ( (x.value) ==3)
    
    { if(input.value>410 )
        {
document.getElementById('result').innerHTML += 'من فضلك أدخل مجموع صحيح';
        
        }
        if(input.value>=390 && input.value <= 410 )
        {
                        document.getElementById('result').innerHTML += '<table class="table" > <thead class="thead-inverse"><tr class="table-active" dir="rtl"><th id="table">أفضل الكليات المتوقعه</th></tr></thead> <tbody id="t-body"><tr id="thebest"><td>اقتصاد وعلوم سياسية </td></tr><tr><td>الالسن أو اعلام</td></tr><tr><td>اعلام</td></tr><tr><td>كلية التربية</td></tr> <tr><td>الفنون الجميلة</td> <tr><td>كلية الآداب</td></tr> <tr><td>تجاره</td></tr></table>';

        
        }
        
         if( input.value >= 383 && input.value < 390 )
        {
                        document.getElementById('result').innerHTML += '<table class="table" > <thead class="thead-inverse"><tr class="table-active" dir="rtl"><th id="table">أفضل الكليات المتوقعه</th></tr></thead> <tbody id="t-body"><tr id="thebest"><td>الالسن أو اعلام</td></tr><tr><td>اعلام</td></tr><tr><td>كلية التربية</td></tr> <tr><td>الفنون الجميلة</td> <tr><td>كلية الآداب</td></tr> <tr><td>تجاره</td></tr><tr><td>  الحقوق </td></tr></table>';
        
        }
  if( input.value >= 382 && input.value < 383 )
        {
                        document.getElementById('result').innerHTML += '<table class="table" > <thead class="thead-inverse"><tr class="table-active" dir="rtl"><th id="table">أفضل الكليات المتوقعه</th></tr></thead> <tbody id="t-body"><tr id="thebest"><td>اعلام</td></tr><tr><td>كلية التربية</td></tr> <tr><td>الفنون الجميلة</td> <tr><td>كلية الآداب</td></tr> <tr><td>تجاره</td></tr><tr><td>  الحقوق </td></tr></table>';
        
        }
        
         if( input.value >= 367 && input.value < 382)
        {
                        document.getElementById('result').innerHTML += '<table class="table" > <thead class="thead-inverse"><tr class="table-active" dir="rtl"><th id="table">أفضل الكليات المتوقعه</th></tr></thead> <tbody id="t-body"><tr id="thebest"><td>كلية التربية</td></tr> <tr><td>الفنون الجميلة</td> <tr><td>كلية الآداب</td></tr> <tr><td>تجاره</td></tr><tr><td>  الحقوق </td></tr></table>';
        
        }
        
         if( input.value >= 276.5 && input.value < 367 )
        {
                        document.getElementById('result').innerHTML += '<table class="table" > <thead class="thead-inverse"><tr class="table-active" dir="rtl"><th id="table">أفضل الكليات المتوقعه</th></tr></thead> <tbody id="t-body"><tr id="thebest"><td>كلية الآداب</td></tr> <tr><td>تجاره</td></tr><tr><td>  الحقوق </td></tr><tr><td>  خدمة اجتماعية </td></table>';
        
        }
        
         if( input.value >= 270.5 && input.value < 276.5 )
        {
                        document.getElementById('result').innerHTML += '<table class="table" > <thead class="thead-inverse"><tr class="table-active" dir="rtl"><th id="table">أفضل الكليات المتوقعه</th></tr></thead> <tbody id="t-body"><tr id="thebest"><td>تجاره</td></tr><tr><td>  الحقوق </td></tr><tr><td>  خدمة اجتماعية </td></table>';
        
        }
        
         if( input.value >= 260.5 && input.value < 270.5 )
        {
                        document.getElementById('result').innerHTML += '<table class="table" > <thead class="thead-inverse"><tr class="table-active" dir="rtl"><th id="table">أفضل الكليات المتوقعه</th></tr></thead> <tbody id="t-body"><tr id="thebest"><td>  الحقوق </td></tr><tr><td>  خدمة اجتماعية </td></table>';
        
        }
        
         if( input.value >= 256 && input.value < 260.5 )
        {
                        document.getElementById('result').innerHTML += '<table class="table" > <thead class="thead-inverse"><tr class="table-active" dir="rtl"><th id="table">أفضل الكليات المتوقعه</th></tr></thead> <tbody id="t-body"><tr id="thebest"><td>  خدمة اجتماعية </td></table>';
        
        }
        if( input.value >= 0 && input.value < 256 )
        {
       document.getElementById('result').innerHTML += 'انتظر نتيجة مكتب التنسيق';

        }
    }
    
}}
}


// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks the button, open the modal
window.onload  = function() {
    modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
    modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}
