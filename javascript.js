const acc = document.getElementsByClassName("accordion-holder");
let i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    if (this.classList.contains("active")) {
      this.classList.remove("active");
    } else {
      // Close any other open accordions
      const activeAccordions = document.getElementsByClassName("accordion-holder active");
      for (let j = 0; j < activeAccordions.length; j++) {
        activeAccordions[j].classList.remove("active");
      }
      
      this.classList.add("active");
    }
  });
}


