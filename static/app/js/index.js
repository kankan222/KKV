function openNav(){
    document.querySelector(`nav`).classList.toggle(`open`);
    document.querySelector(`#hamburger i`).classList.toggle(`uil-times`)
}
function closeNav(){
    document.querySelector(`nav`).style.display = `none`;
}
(()=>{
    let pageCtn=document.querySelector('nav')
    let pageDataList= pageCtn.getElementsByTagName('a')
    let activeElm=document.querySelector('main')
   for (const e of pageDataList) {
       if(activeElm.dataset.appPage==e.dataset.appPage)   {
    e.classList.add('active')}
   }
})()


// function activate(){
//     let navIcon = document.querySelectorAll(`nav ul li a`);
//     navIcon.forEach(function(icon){
//         icon.addEventListener('click', ()=>{
//             navIcon.forEach(function(icons){
//                 if(icons !== icon){
//                     icons.classList.remove(`active`);
//                 }
//             })
//             icon.classList.toggle(`active`);
//         })
//     })
// }
// activate();