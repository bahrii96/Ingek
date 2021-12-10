// const button = document.querySelector(".hero__button");
const form = document.querySelector(".form__overlay")
console.log(form);
const closeF=document.querySelector(".close-form")
function openForm() {
   form.classList.add("active") 
}
function closeForm() {
   form.classList.remove("active")
    closeF.classList.remove("close-form__active")
  
}
function toSendForm() {
    closeF.classList.add("close-form__active") 
}
function closeSms() {
   
   closeF.classList.remove("close-form__active") 
}