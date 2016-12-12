
document.querySelector("#inject-html button").addEventListener('click',function(){
  // TASK #1
  var answerBoxEl = document.querySelector('#inject-html .answer-box')
  answerBoxEl.innerHTML = "<h2>Here is some text for you!!</h2>"
})

document.querySelector("#double button").addEventListener('click',function(){
  // TASK #2
  var answerPTagWithValue = document.querySelector('#compoundInvestment')
  // you do the rest
  var strGrabber = answerPTagWithValue.innerText
  var turnNum = parseInt(strGrabber)

  var dblX = turnNum * 2

   answerPTagWithValue.innerText =  dblX


})


document.querySelector("#color-circle button").addEventListener('click',function(){
  // TASK #3
   var circleSelector = document.querySelector("#circle-bw")



   if(circleSelector.style.backgroundColor === ""){
      circleSelector.style.backgroundColor = "black"
   }
   else if(circleSelector.style.backgroundColor === "black"){
      circleSelector.style.backgroundColor = ""
   }
})

document.querySelector("#blow-up button").addEventListener('click',function(){
  // TASK #4}
  var redCircleEl = document.querySelector("div.circle-red")


    var rdCirc = window.getComputedStyle(redCircleEl)
    var circleWidth = rdCirc.width.slice(0, -2)
    var circleHeight = rdCirc.height.slice(0, -2)


    var circleHeightNum = parseInt(circleHeight)
    var circleWidthNum = parseInt(circleWidth)
      var circleWidthDbld = circleWidthNum * 2
      redCircleEl.style.width = circleWidthDbld + "px"
      redCircleEl.style.height = circleWidthDbld + "px"
      if(circleWidthDbld > 320){
         redCircleEl.style.width = 40 + "px"
         redCircleEl.style.height = 40 + "px"

      }
})

document.querySelector("#remove button").addEventListener('click',function(){
  // TASK #5
  var userList = document.querySelector('#user-list')
  var allUsers = document.querySelectorAll("#user-list li")


     for(var i = 0; i < allUsers.length; i++){
        var allUsersLi = allUsers[i];

        if(allUsersLi.classList.contains('inactive') === true){
           userList.removeChild(allUsersLi)

        }

     }
})


document.querySelector("#reverse-squares button").addEventListener('click',function(){
  // TASK #6
  var sqrSelect = document.querySelectorAll('.square')
   console.log(sqrSelect)
   var switchUp = []



   // console.log(sqrSelect)
   for(var i = sqrSelect.length - 1; i >= 0 ; i--){

      switchUp.push(sqrSelect[i])


   }
   for(var i = 0; i < sqrSelect.length; i++){

      for(var i = 0; i < switchUp.length; i++){
         sqrSelect[i].outerHTML = switchUp[i].outerHTML

      }
   }
})

document.querySelector("#pig-latin button").addEventListener('click',function(){
  // TASK #7
  var compListSel = document.querySelectorAll("#tasks li")

     for(var i = 0; i < compListSel.length; i++){
        var lisTxt = compListSel[i].innerText

        var textArr = lisTxt.split('')

        var reverseTxt = textArr.reverse();

        var reverseStr =reverseTxt.join("")


        compListSel[i].innerText = reverseStr

     }

})

document.querySelector("#cycle-image button").addEventListener('click',function(){
   //TASK #8
})
