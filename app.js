let productCount = document.getElementById("product-count");
console.log(productCount);

let addToCartBtns = document.querySelectorAll(".add-to-cart");
console.log(addToCartBtns);

/* for (let i=0; i<addToCartBtns.length; i++ ){
  addToCartBtns[i].addEventListener("click", function(){
    console.log("clicked");
  });
}; */


/* for (let i=0; i < addToCartBtns.length; i++ ){
  addToCartBtns[i].addEventListener("click", function(){
    let prevProductsCount = +productCount.textContent;
    productCount.textContent = prevProductsCount +1;
  });
} */

// another version of the same code /short one

 for (let i=0; i < addToCartBtns.length; i++ ){
  addToCartBtns[i].addEventListener("click", function(){
    let prevProductsCount = +productCount.textContent;
    productCount.textContent = +productCount.textContent+1;
  });
} ;

//modal 

const modal = document.querySelector(".modal");
const moreDetailsBtns = document.querySelectorAll(".show-more-btns");
console.log(modal);
console.log(moreDetailsBtns);
const closeBtn = document.querySelector(".btn-close");
console.log(closeBtn);

// first version
//  moreDetailsBtns.forEach((btn)=>{
//   btn.addEventListener("click", function(){
//     modal.classList.add("show");
//     modal.classList.remove("hide");

//     closeBtn.addEventListener("click",function(){
//       modal.classList.add("hide");
//       modal.classList.remove("show");
//   });
// });
// });

//second version:
function openModal() {
  modal.classList.add("show");
  modal.classList.remove("hide");
}

function closeModal() {
  modal.classList.add("hide");
  modal.classList.remove("show");
}

moreDetailsBtns.forEach((btn)=>{
  btn.addEventListener("click", openModal)
});

closeBtn.addEventListener("click",closeModal);


  
const likeProduct = document.getElementById("like");
console.log(likeProduct);

const likeHeart = document.querySelectorAll(".heart-blue");
console.log(likeHeart);

likeHeart.forEach((heart)=>{
  heart.addEventListener("click", function(){
    // if (heart.classList.contains("heart-white")){
    //   heart.classList.remove("heart-white")
    // }else{
    //   heart.classList.add("heart-white")
    //}
 heart.classList.toggle("heart-white");
  });
});
  

modal.addEventListener("click", function(e){
 if (e.target === modal){
   closeModal();
 }
});
 
function showModalByScroll(){
  // console.log(window.pageYOffset);
  // console.log(document.body.scrollHeight / 2);

   if (window.pageYOffset > document.body.scrollHeight / 2){
     openModal();
     //zabraty scroll pisla pershogo razu
     window.removeEventListener
     ("scroll", showModalByScroll)
   }
 }
 window.addEventListener("scroll", showModalByScroll);

$(".slider").slick({
  autoplay: false,
  autoplaySpeed: 2000,
  dots:true
});

// // change product quantity 

// const decrementBtns = document.querySelectorAll(".decrement-button");
// const incrementBtns = document.querySelectorAll(".increment-button");
// const quantityInputs = document.querySelectorAll(".product-quantity input");

// console.log(decrementBtns);
// console.log(incrementBtns);
// console.log(quantityInputs);



// //version 1
// // const currentValue = +quantityInput.value;


// // if(currentValue <= 1){
// //   decrementBtns.disabled = true;
// // }else{
// //   decrementBtns.disabled = false;
// // }

// // incrementBtns.addEventListener("click", function(){
// // const nextValue = +quantityInput.value + 1;
// // quantityInput.value = nextValue;
  
// // if(nextValue <= 1){
// //   decrementBtns.disabled = true;
// // }else{
// //   decrementBtns.disabled = false;
// // }
// // })

// // decrementBtns.addEventListener("click", function(){
// //   const nextValue = +quantityInput.value - 1;
// //   quantityInput.value = nextValue;
  
// //   if(nextValue <= 1){
// //     decrementBtns.disabled = true;
// //   }else{
// //     decrementBtns.disabled = false;
// //   }
// // })




// //version 2


// quantityInputs.forEach((item, i)=>{
//   const currentValue = +item.value;
//   toggleButtonState(currentValue, incrementBtns[i],decrementBtns[i]); 
// });

//   function toggleButtonState(count, incrementBtn, decrementBtn) {
//     decrementBtn.disabled = count <= 1;
//     incrementBtn.disabled = count >= 5;
//   }

// incrementBtns.forEach((incrementBtn,i)=>{
//   incrementBtn.addEventListener("click", function(){
// const nextValue = +quantityInputs[i].value + 1;
// quantityInputs[i].value = nextValue;
// toggleButtonState(nextValue, incrementBtns[i],decrementBtns[i]);
// });
// });

  

// decrementBtns.forEach((decrementBtn,i)=>{
//   decrementBtn.addEventListener("click", function(){
//     const nextValue = +quantityInputs[i].value - 1;
//     quantityInputs[i].value = nextValue;
    
//     toggleButtonState(nextValue, incrementBtns[i],decrementBtns[i]);
//   });
// });

//third version - object, class

// function Car(model, color, year){
//   this.model = model;
//   this.color = color;
//   this.year = year;
// }

// const audi = new Car ("Audi", "blue", "1990");
// const bmw = new Car ("BMW", "red", "2020");
// const toyota = new Car ("Toyota", "gray", "2022");

// console.log(audi, bmw, toyota);

// function Calculator (a, b){
//   this.a = a;
//   this.b = b;

//   this.sum = function () {
//     return this.a + this.b;
//   };
//   this.mul = function () {
//     return this.a * this.b;
//   };
// }

// let calc1 = new Calculator(10,20);
// console.log(calc1.sum());

// let calc2 = new Calculator(10,20);
// console.log(calc2.mul());

const decrementBtns = document.querySelectorAll(".decrement-button");
const incrementBtns = document.querySelectorAll(".increment-button");
const quantityInputs = document.querySelectorAll(".product-quantity input");

function Counter(incrementBtn, decrementBtn, quantityInput, maxCount = 5, minCount = 1){
  this.domRefs = {
    incrementBtn,
    decrementBtn,
    quantityInput
  };

  this.toggleButtonState = function () {
    const count = this.domRefs.quantityInput.value;
    this.domRefs.incrementBtn.disabled = count >= maxCount;
    this.domRefs.decrementBtn.disabled = count <= minCount;
    
  }

this.toggleButtonState();

this.increment = function(){
this.domRefs.quantityInput.value = +this.domRefs.quantityInput.value+1;
this.toggleButtonState();
}

this.decrement = function(){
  this.domRefs.quantityInput.value = +this.domRefs.quantityInput.value -1;
  this.toggleButtonState();
  }

  this.domRefs.incrementBtn.addEventListener("click",this.increment.bind(this));

  this.domRefs.decrementBtn.addEventListener("click",this.decrement.bind(this));

}

for (let i = 0; i<quantityInputs.length; i++){

  const counter1 = new Counter(
    incrementBtns[i],
    decrementBtns[i],
    quantityInputs[i]
  );

}



console.log(counter1);



// function hi(surname) {
//   console.log(this);
//   console.log(this.name + surname);
// }

// const user = {
//   name: "Ivan",
// };

// hi.call(user, "Call");//vyklyk vidrazu
// hi.apply(user, ["Apply"]); //vyklyk vidrazu
// let test = hi.bind(user, "Bind") //vyklyk ne vidrazu a cherez obgortku;
// test();