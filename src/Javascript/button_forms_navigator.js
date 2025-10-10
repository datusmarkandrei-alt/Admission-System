const submitBtn_step1 = document.getElementById("first_button_submit");
const submitBtn_step2 = document.getElementById("second_button_submit");
const submitBtn_step3 = document.getElementById("third_button_submit");


const step_one_div = document.getElementById("forms_container_id"); // yung div ng forms step 1
const step_two_div = document.getElementById("requirements_container_id");
const step_3_div = document.getElementById("application_details_container_id")

// Back buttons (queried from each section to avoid changing HTML)
const backBtn_step2 = document.querySelector('#requirements_container_id .back_button_container button');
const backBtn_step3 = document.querySelector('#application_details_container_id .back_button_container button');

// Reusable animation helper - can be used for any element
function animateElement(element, animationClass, callback){
  element.classList.add(animationClass);
  element.addEventListener('animationend', function handler(){
    element.removeEventListener('animationend', handler);
    element.classList.remove(animationClass);
    if(callback) callback();
  });
}

// Smooth show/hide helper with reusable animations
function showSection(targetDiv, animationType = 'fade'){
  const sections = [step_one_div, step_two_div, step_3_div];
  const current = sections.find(sec => sec && sec.style.display !== 'none');

  // If no current (first load), just show target
  if(!current){
    targetDiv.style.display = 'block';
    animateElement(targetDiv, 'fade-in');
    return;
  }

  // Animate out current section
  animateElement(current, 'fade-out', () => {
    current.style.display = 'none';
    targetDiv.style.display = 'block';
    animateElement(targetDiv, 'fade-in');
  });
}
// ===== Step indicator handling =====
function setActiveStep(step){
  // Circles
  const step1Circle = document.querySelector('.circle_shape_container');
  const step2Circle = document.querySelector('.circle_two_shape_container');
  const step3Circle = document.querySelector('.circle_three_shape_container');

  const step1IconWrap = document.querySelector('.step_one_icon_container');
  const step2IconWrap = document.querySelector('.step_two_icon_container');
  const step3IconWrap = document.querySelector('.step_three_icon_container');

  const step1Svg = step1Circle?.querySelector('svg');
  const step2Svg = step2Circle?.querySelector('svg');
  const step3Svg = step3Circle?.querySelector('svg');

  const green = getComputedStyle(document.documentElement).getPropertyValue('--color-green-base') || '#2e7d32';
  const gray = getComputedStyle(document.documentElement).getPropertyValue('--color-gray') || 'gray';

  function activate(circle, wrap, svg){
    if(!circle || !wrap || !svg) return;
    circle.style.backgroundColor = green.trim();
    circle.style.borderColor = green.trim();
    wrap.style.borderColor = green.trim();
    svg.setAttribute('stroke', 'white');
  }

  function deactivate(circle, wrap, svg){
    if(!circle || !wrap || !svg) return;
    circle.style.backgroundColor = 'transparent';
    circle.style.borderColor = gray.trim();
    wrap.style.borderColor = gray.trim();
    svg.setAttribute('stroke', 'gray');
  }

  // reset
  deactivate(step2Circle, step2IconWrap, step2Svg);
  deactivate(step3Circle, step3IconWrap, step3Svg);
  // step1 is default active in UI; ensure it's active when step==1
  if(step === 1){
    activate(step1Circle, step1IconWrap, step1Svg);
  }
  if(step >= 2){
    activate(step2Circle, step2IconWrap, step2Svg);
  }
  if(step >= 3){
    activate(step3Circle, step3IconWrap, step3Svg);
  }

  // Descriptions (second <p> inside each .step_one_description block)
  const labels = document.querySelectorAll('.steps_description_container .step_one_description p:nth-child(2)');
  labels.forEach((el, idx) => {
    const isActive = (idx + 1) <= step && (idx + 1) === step; // highlight current step
    el.classList.toggle('active_Step_description', isActive);
    el.classList.toggle('active_Step3_description', isActive && step === 3);
    if(!isActive){
      el.classList.remove('active_Step3_description');
    }
  });
}



submitBtn_step1.onclick = function () { //  dinidisplay none yung mga divs  para mas maayos tignan
    showSection(step_two_div);
    setActiveStep(2);
  };

submitBtn_step2.onclick = function (){
    showSection(step_3_div);
    setActiveStep(3);
}

// Back buttons
if(backBtn_step2){
  backBtn_step2.onclick = function(){
    showSection(step_one_div);
    setActiveStep(1);
  }
}

if(backBtn_step3){
  backBtn_step3.onclick = function(){
    showSection(step_two_div);
    setActiveStep(2);
  }
}

// Ensure initial state
try{ setActiveStep(1); }catch(e){}
// Ensure initial visibility
if(step_one_div){ step_one_div.style.display = step_one_div.style.display || 'block'; }