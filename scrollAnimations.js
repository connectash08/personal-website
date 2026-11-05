document.addEventListener("DOMContentLoaded", () =>{
    const elements = document.querySelectorAll(".scrollReveal");
    const observer = new IntersectionObserver((entries, observer) =>{
        entries.forEach(entry =>{
            if(entry.isIntersecting){
                entry.target.classList.add("show");
                observer.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.40
    });
    elements.forEach(element =>{
        observer.observe(element);
    });
});
