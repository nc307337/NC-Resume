function openCertificate(path) {
  window.open(path, '_blank');
}

const toggleBtn = document.getElementById('theme-toggle');

toggleBtn.addEventListener('click', () => {
  document.body.classList.toggle('dark-mode');
});


function openProject() {

  window.open(
    'https://github.com/nileshchavan',
    '_blank'
  );

}



const hiddenElements =
document.querySelectorAll('.content-section,.section');

window.addEventListener('scroll', ()=>{

  hiddenElements.forEach(el=>{

    const top =
    el.getBoundingClientRect().top;

    if(top < window.innerHeight - 100){
      el.classList.add('show');
    }

  });

});



particlesJS("particles-js", {
  particles: {
    number: { value: 80 },
    size: { value: 3 },
    move: { speed: 2 },
    line_linked: {
      enable: true
    }
  }
});



document.getElementById('topBtn')
.onclick = ()=>{
  window.scrollTo({
    top:0,
    behavior:'smooth'
  });
};

