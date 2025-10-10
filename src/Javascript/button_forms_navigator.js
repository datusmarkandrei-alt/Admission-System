const submitBtn_step1 = document.getElementById("first_button_submit");
const submitBtn_step2 = document.getElementById("second_button_submit");
const submitBtn_step3 = document.getElementById("third_button_submit");


const step_one_div = document.getElementById("forms_container_id"); // yung div ng forms step 1
const step_two_div = document.getElementById("requirements_container_id");
const step_3_div = document.getElementById("application_details_container_id")



submitBtn_step1.onclick = function () { //  dinidisplay none yung mga divs  para mas maayos tignan
    step_one_div.style.display ="none";
    step_two_div.style.display="block";
  };

submitBtn_step2.onclick = function (){
    step_two_div.style.display ="none";
    step_3_div.style.display="block";
} 