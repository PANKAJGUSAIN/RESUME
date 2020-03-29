// smooth scroll
var navMenuAnchorTags=document.querySelectorAll('.nav-menu a');
//console.log(navMenuAnchorTags);
var interval;
for(var i=0;i<navMenuAnchorTags.length;i++){
    navMenuAnchorTags[i].addEventListener('click',function(event){
        event.preventDefault();
        var targetSectionID=this.textContent.trim().toLowerCase();
        //console.log(targetSectionID);
        if(targetSectionID!='home'){
        var targetSection=document.getElementById(targetSectionID);
        //console.log(targetSection);
         interval=setInterval(scrolLVertically,20,targetSection);
    };
    });
};

function scrolLVertically(targetSection){
    var targetSectionCoordinates=targetSection.getBoundingClientRect();
            if(targetSectionCoordinates.top<=0){
                clearInterval(interval);
                return;
            }
            window.scrollBy(0,50);
};

//smooth scroll end


//auto fill skill bar
var progressBars=document.querySelectorAll('.skill-progress > div');
//console.log(progressBars);
var skillsContainer=document.getElementById('skills-container');
window.addEventListener('scroll',checkScroll);
var animation=false;

function intialiseBars(){
    for(let bar of progressBars){
        bar.style.width= 0 +'%';
    }
}

intialiseBars();

function fillBars(){
    for (let bar of progressBars){
        let targetWidth=bar.getAttribute('data-bar-width');
        let currentWidth=0;
        let interval=setInterval(function(){
            if(currentWidth>targetWidth){
                clearInterval();
                return;
            }
            currentWidth++;
            bar.style.width= currentWidth +'%';
        },7);
    }

}


function checkScroll(){
    var coordinates=skillsContainer.getBoundingClientRect();
    if (!animation && coordinates.top<=window.innerHeight){
        console.log('skill section visible');
        animation=true;
        fillBars();
    }
    else if(coordinates.top>window.innerHeight){
        animation=false;
        intialiseBars();
    }

}