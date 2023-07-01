//
//                                                             😰😰 that's hard todo this project 😰😰
//name :Ahmed Hossam Ahmed
alert('you should use live server to run this project')
const OPenApp =document.querySelector('.OpenTimer');
var MainBox =document.querySelector('#tests'); 
const msg =document.createElement('p')
setInterval(e =>{
document.querySelector('.time').textContent =new Date().toLocaleTimeString()
},1)
document.querySelector('p.done span').textContent =document.querySelectorAll('.d').length ;

OPenApp.addEventListener('click',e =>{
// black screen 
let blackScreen =document.createElement('div')
blackScreen.id ='black_screen';
document.body.append(blackScreen);
  // Main box
  let OPenApp_Box =document.createElement('div')
  OPenApp_Box.id ='write_TT';
  blackScreen.append(OPenApp_Box);
    // exit
    let Close_App =document.createElement('h1');
    Close_App.innerHTML='<ion-icon name="close-outline"></ion-icon>'
    Close_App.className ='ex2';
    OPenApp_Box.append(Close_App);
  // input
  let OPenApp_Inp =document.createElement('input')
  OPenApp_Inp.id ='write_test';
  OPenApp_Box.append(OPenApp_Inp);
 // put_time
 let OPenApp_put_t =document.createElement('button');
 OPenApp_put_t.innerHTML='<ion-icon name="alarm-outline"></ion-icon>'
 OPenApp_put_t.id ='put_time';
 OPenApp_Box.append(OPenApp_put_t);
// add_test
let OPenApp_add_test =document.createElement('button');
OPenApp_add_test.id ='add_test';
OPenApp_add_test.innerHTML='<ion-icon name="add-circle-outline"></ion-icon>'
OPenApp_Box.append(OPenApp_add_test);
// let's start :-)    (    بسم الله الرحمن الرحيم   )
  const audio =document.querySelector('audio'); 
window.addEventListener('load',e => document.querySelector('#write_test').focus());
document.querySelector('p.done span').textContent =document.querySelectorAll('.d').length ? document.querySelectorAll('.d').length : 0  ;
document.querySelector('.ex2').addEventListener('click',e =>{ blackScreen.remove()})

let put_time =document.querySelector('#put_time');
var year='';
  var month='';
  var day='';
  var hour='';
  var minute='';
  put_time.addEventListener('click',AddTime)

  function AddTime() {
    
    const box =document.createElement('div');
    box.innerHTML=`<p class='ex'> <ion-icon name="close-outline"></ion-icon></p> <h1>task completion time</h1> <div id='inps'><input type="number" min='1' max='31' id='day' placeholder='Day'>  <input type="number"  min='1' max='12' id='month' placeholder='Month'>  <input type="number" id='year'  min=${new Date().getFullYear()} max='3000' placeholder='Year'> <input type="number"  min='1' max='24' id='Time_H' placeholder='hour'> <input type="number"  min='1' max='60' id='Time_M' placeholder='minute'> <button id='TS'>Put the current time</button><button id='TS' class='saveTime'>save</button></div>`
    box.classList.add('add_time')
    document.body.append(box)
    document.querySelector('#TS').addEventListener('click',    function TS() {
      document.querySelector('#day').value =new Date().getUTCDate()
    document.querySelector('#month').value =new Date().getMonth()
    document.querySelector('#year').value =new Date().getFullYear()
    document.querySelector('#Time_H').value =new Date().getHours()
    document.querySelector('#Time_M').value =new Date().getMinutes()
 

  }
  )

    document.querySelector('.ex').addEventListener('click',function closeWindow() {
      box.remove()
    })

    document.querySelector('.saveTime').addEventListener('click',function saveTime() {
let getDay= document.querySelector('#day').value;
let getMonth= document.querySelector('#month').value;
let getFullYear= document.querySelector('#year').value;
let Time_H= document.querySelector('#Time_H').value;
let Time_M= document.querySelector('#Time_M').value;
day =getDay
month =getMonth
year=getFullYear 
hour =Time_H
 minute=Time_M
 box.remove()

})

}


let write_test =document.querySelector('#write_test');
write_test.addEventListener('keypress',(e) =>{
if (e.key === "Enter") {
  AddItem()
}
if (e.key === "Escape") {
  document.querySelector('.ex2').addEventListener('click',e =>{ OPenApp_Box.remove()})

}
})
function AddItem() {
 
    const tests__ = document.createElement('nav');
    if (write_test.value != '') {
      const test = document.createElement('p');
  const time_end = document.createElement('p');
  const ranking = document.createElement('p');
  const btns = document.createElement('section');  
 const remove_btn =document.createElement('button');
 const no_done_btn =document.createElement('button');
 const done_btn =document.createElement('button');
 const dots =document.createElement('button');
    const drop = document.createElement('section');
   const screen_ =document.createElement('div');
 dots.addEventListener('click', e =>{

  drop.classList.add('drop');
  screen_.className ='black_screen'
  drop.append(time_end)
  drop.append(no_done_btn)
  drop.append(done_btn)
  drop.append(remove_btn)
  screen_.append(drop)
  document.body.append(screen_)

 })
 dots.innerHTML='<ion-icon name="ellipsis-horizontal-outline"></ion-icon>';
 dots.classList.add('dots');
 done_btn.innerHTML='<ion-icon name="checkmark-done-outline"></ion-icon>';
 remove_btn.innerHTML='<ion-icon name="trash-outline"></ion-icon>'
 no_done_btn.innerHTML='<ion-icon name="close-outline"></ion-icon>'
 remove_btn.classList.add('remove_BTN')
 remove_btn.classList.add('Btn')
 no_done_btn.classList.add('X')
 no_done_btn.classList.add('Btn')
 done_btn.classList.add('done')
 done_btn.classList.add('Btn')
btns.append(dots)
 no_done_btn.addEventListener('click', e =>{
   tests__.classList.remove('d')
  tests__.classList.toggle('nd');
    screen_.remove()
    drop.remove()
  audio.remove()
  document.querySelector('p.done span').textContent =document.querySelectorAll('.d').length ;
  if (audio.src != '') {
    audio.src='';
  }
})
 done_btn.addEventListener('click', e =>{
  const audio =document.createElement('audio');
  audio.src ='src/new-level-142995.mp3';
  audio.autoplay =true;
  tests__.append(audio)
  tests__.classList.remove('nd');
   tests__.classList.add('d');
   screen_.remove()
   drop.remove()
   audio.remove();
   document.querySelector('p.done span').textContent =document.querySelectorAll('.d').length ;
  if (audio.src != '') {
    audio.src='';
  }
  
   if (audio.src != '') {
    audio.src='';
  }
 })
remove_btn.addEventListener('click',function () {
  screen_.remove()
  drop.remove()
let conf =confirm('are you sure you want to remove this ?');
conf ?tests__.remove() : false
test.addEventListener('click',e => box.remove())
document.querySelector('p.done span').textContent =document.querySelectorAll('.d').length ;
})
if (write_test.value == '') {
  const wrong =document.createElement('p');
  wrong.textContent='Add the hedding of test'
  document.body.append(wrong)
  wrong.classList.add('wrong');
  setTimeout(e => wrong.remove(),3000)
}
 

 test.textContent =write_test.value;
test.className='test' 
btns.classList.add('btns');
tests__.classList.add('tests__')
ranking.classList.add('rank');
ranking.textContent = document.querySelectorAll('.tests__').length + 1 ; 
  tests__.append(test);
  tests__.append(btns);
  tests__.append(ranking)

  if(hour != ''){
 time_end.textContent=`start at : ${new Date().getFullYear()}\\ ${new Date().getMonth()}\\${new Date().getUTCDay()} | ${new Date().getHours()}:${new Date().getSeconds()} -end at : ${year}\\${month}\\${day} | ${hour}:${minute}`
}

   setInterval(() => {
        if (minute == new Date().getMinutes() & hour == new Date().getHours() & day == new Date().getUTCDate() & year == new Date().getFullYear()& month == new Date().getMonth()) {
if (audio.src == '') {
  audio.src='src/notifications.mp3';
}

            audio.loop =true;
          audio.setAttribute('autoplay','true')
}

if (!(minute == new Date().getMinutes() & hour == new Date().getHours() & day == new Date().getUTCDate() & year == new Date().getFullYear()& month == new Date().getMonth())) {
  if (audio.src != '') {
    audio.src='';
  }
  return false
} 
     },1000)

    time_end.classList.add('Btn')
    time_end.classList.add('time____')
  MainBox.append(tests__)



}
      
write_test.value=''
}
if (hour != false ) {
}
document.querySelector('#add_test').addEventListener('click',AddItem)
  })

