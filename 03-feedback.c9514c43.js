!function(){var e="feedback-form-state",t=document.querySelector(".feedback-form");!function(){var a=localStorage.getItem(e);if(!a)return;var r=JSON.parse(a);r.email?t.email.value=r.email:t.email.value="";r.message?t.message.value=r.message:t.message.value=""}();var a={};t.addEventListener("input",throttle((function(t){a[t.target.name]=t.target.value,localStorage.setItem(e,JSON.stringify(a))}),500)),t.addEventListener("submit",(function(t){t.preventDefault(),t.currentTarget.reset(),console.log(localStorage.getItem(e)),localStorage.removeItem(e)}))}();
//# sourceMappingURL=03-feedback.c9514c43.js.map
