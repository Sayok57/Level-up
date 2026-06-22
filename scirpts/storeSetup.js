let switchbtn1 = document.querySelector('#switch-btn1');
let switchbtn2 = document.querySelector('#switch-btn2');
let setupImg = document.querySelector('.setup-img');
let count = 1;
let photoNumber = 3;
let setupData =[
    {
        name: "Стартовый набор",
        models: "Мышь + Клавиатура + Гарнитура",
        price: "$129.99",
    },
    {
        name: "Казуальный набор",
        models: "Геймпад + Гарнитура",
        price: "$89.99",
    },
    {
        name: "Ультимативный набор",
        models: "Мышь + Клавиатура + Геймпад + Гарнитура + Микрофон",
        price: "$229.99",
    }
]
let setupName = document.querySelector('#setupName');
let setupModels = document.querySelector('#setupModels');
let setupPrice = document.querySelector('#setupPrice')
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
    setupImg.classList.add(`setup${count}`);
    setupName.textContent = setupData[count-1].name;
    setupModels.textContent = setupData[count-1].models;
    setupPrice.textContent = setupData[count-1].price;
}
switchbtn1.addEventListener('click', ()=>{
    setupImg.classList.remove('setup1', 'setup2', 'setup3');
    slider("btn", "");
})
switchbtn2.addEventListener('click', ()=>{
    setupImg.classList.remove('setup1', 'setup2', 'setup3');
    slider("", "btn");
})
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


