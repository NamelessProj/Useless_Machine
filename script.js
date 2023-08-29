const input = document.querySelector('input[type="checkbox"]');
const arm = document.querySelector('.arm');

input.addEventListener('change', function(){
    if(this.checked){
        let interval = Math.floor((Math.random() * 1500) + 300); // Get a number between 300ms and 1500ms
        let intervalEnd = interval + 700;

        setTimeout(() => {
            arm.classList.add('active');
            input.checked = false;
        }, interval);

        setTimeout(() => {
            arm.classList.remove('active');
        }, intervalEnd);
    }
});