
function handleScroll(){
    let titles= document.querySelectorAll('.contents-title');

    // titles.forEach((contentstitle) => {
    //     let windowScroll = window.scrollY;
    //     const eventElement = contentstitle.getBoundingClientRect().top;
    //     const elementVisible = 100;
       
    //     if (eventElement < windowScroll-elementVisible) {
    //         contentstitle.classList.add("active");
    //     } else {
    //         contentstitle.classList.remove("active");

    //     }
    // });

    for(let i=0; i<titles.length; i++){
console.log(titles[i]);
        // let windowScroll = window.scrollY;
        // let eventElement = titles[i].getBoundingClientRect().top;
        // const elementVisible = 100;

        // if (eventElement < windowScroll - elementVisible) {
        //     titles[i].classList.add("active");
        // } else {
        //     titles[i].classList.remove("active");
        // }
    }
}

window.addEventListener("scroll",handleScroll);


export default handleScroll;