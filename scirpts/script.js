function page404() {
    let fileName = window.location.pathname.split('/').pop();
    if(fileName=="index.html" || fileName == "regpage.html"){
        window.open('page404.html', '_self');
    }
    else if (fileName == "devices.html" || fileName == "setup.html"){
        window.open('../../page404.html', '_self');
    }
    else{
        window.open('../page404.html', '_self');
    }
}
function indexhtml(){
    window.open('index.html', '_self');
}
function regpage(){
    window.open('../regpage.html', '_self');
}
function eventshtml(){
    window.open('htmls/events.html', '_self');
}
let scrollbtn1 = document.querySelector('#main-page-scroll-btn1');
let scrollbtn2 = document.querySelector('#main-page-scroll-btn2');
let mainEventsImg = document.querySelector('.main-events-img');
let count = 1;
let photoNumber = 3;
let mainEventsContent =[
    {
        name: "Level Up Cup",
        date: "13.08.2026",
    },
    {
        name: "Level Up Finals",
        date: "07.04.2025",
    },
    {
        name: "Level Up Summer Scirmish",
        date: "29.06.2024",
    }
]
let mainEventName = document.querySelector('#main-event-name-id');
let mainEventDate = document.querySelector('#main-event-date-id');
let scrollBtn3 = document.querySelector('#partners-page-scroll-btn');
let scrollBtn4 = document.querySelector('#partners-page-scroll-btn2');
function slider(leftBtn, rightBtn, name){
        if(leftBtn=="" && rightBtn != ""){
            if(count>=1 && count<=photoNumber){
                count++;
            }
            if(count>photoNumber){
                count = 1;
            }
        }
        else if(leftBtn!="" && rightBtn == ""){
            if(count>=1 && count<=photoNumber){
                count--;
            }
            if(count<1){
                count = photoNumber;
            }
        }
    mainEventsImg.src = `assets/images/cybersport${count}.jpg`;
    mainEventName.textContent = mainEventsContent[count-1].name;
    mainEventDate.textContent = mainEventsContent[count-1].date;
}
scrollbtn1.addEventListener('click', ()=>{
    slider("btn", "");
})
scrollbtn2.addEventListener('click', ()=>{
    slider("", "btn");
})
