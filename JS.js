const mouse = document.querySelector("#mouse");
const html = document.querySelector("html");
const qualities = document.querySelector(".qualities");
const caring = document.querySelector(".subtitle");
const caringText = document.querySelector(".subtext");
const mouseWrapper = document.querySelector(".mouse-wrapper");
const hardworking = document.createElement('div');
const hardworkingText = document.createElement('div');
const hardworkingIMG = document.createElement('img');
hardworkingIMG.setAttribute("src", "/imgs/mouse-simple.png")
hardworkingIMG.setAttribute("id", "mouse");
hardworking.textContent = "2. Hardworking";
hardworkingText.textContent = "Does basically everything around the house and doesn't ask for nearly enough help (you know it's true)";
hardworking.classList.add("subtitle");
hardworkingText.classList.add("subtext");
const funny = document.createElement("div");
const funnyText = document.createElement("div");
const funnyIMG = document.createElement("img");
funnyIMG.setAttribute("src", "/imgs/doodle_mouse.png");
funnyIMG.setAttribute('id', "mouse")
funny.textContent = "3. Funny";
funnyText.textContent = "Always manages to make everyone laugh, even if she doesn't mean to";
funny.classList.add("subtitle");
funnyText.classList.add("subtext");
const patient = document.createElement('div');
const patientText = document.createElement('div');
patient.textContent = "4. Patient";
patientText.textContent = "Deals with countless chores and problems each day, and still keeps her cool (except when she's hangry)"
patient.classList.add("subtitle");
patientText.classList.add("subtext");
const admirable = document.createElement('div');
const admirableText = document.createElement('div');
admirable.textContent = "5. Admirable";
admirableText.textContent = "All of these qualities and many more make her not only admirable, but the best mom anyone could ask for"
admirable.classList.add("subtitle");
admirableText.classList.add("subtext");

const qualitiesArr = [caring, hardworking, funny, patient, admirable];
const qualitiesTextArr = [caringText, hardworkingText, funnyText, patientText, admirableText]
const styles = ["caring", "hardworking", "funny", "patient", "admirable"];
let i = 1;
let style;
mouse.addEventListener('click', () => {
    while (qualities.firstChild) {
        qualities.removeChild(qualities.firstChild);
    }
    qualities.appendChild(qualitiesArr[i]);
    qualities.appendChild(qualitiesTextArr[i]);

    style = styles[i];
    switch (style) {
        case "caring":
            mouse.setAttribute("src", "/imgs/doodle-mouse-transparent.png");
            html.style.cssText = "font-family: 'Gloria Hallelujah', cursive; background: url(/imgs/big_paper_bg.jpg);";
            qualities.style.cssText = "border: none";
            break;
        case "hardworking":
            mouse.setAttribute("src", "/imgs/mouse-simple.svg");
            html.style.cssText = "font-family: 'Josefin Sans', sans-serif; background: center / 100% 100% no-repeat url(imgs/drawing.svg);";
            qualities.style.cssText = "border: 4px dashed black";
            break;
        case "funny":
            mouse.setAttribute("src", "/imgs/mouse-funny.svg");
            html.style.cssText = "font-family: 'PT Mono', monospace, sans-serif0; color: white; text-shadow: 5px 5px 5px black; background: center / 100% 100% no-repeat url(imgs/office-funny.webp);";
            qualities.style.cssText = "border: 4px solid white; box-shadow: 5px 5px 5px black; background-color: rgba(0, 0, 0, 0.3)";
            break;
        case "patient":
            mouse.setAttribute("src", "/imgs/pixel-mouse.png");
            html.style.cssText = "font-family: 'Press Start 2P', cursive; font-size: 12px; color: white;text-shadow: 5px 5px 0 black; background: center / 150% 100% no-repeat url(imgs/dark-forest-bg.jpg);";
            qualities.style.cssText = "border: none";
            break;
        case "admirable":
            mouse.setAttribute("src", "/imgs/mouse-3d.png");
            html.style.cssText = "font-family: 'Montserrat', sans-serif; color: rgb(255, 252, 216);text-shadow: 5px 5px 5px rgb(109, 73, 19); font-weight: 600;background-image: linear-gradient(to right,#462523 0,#cb9b51 22%,#f6e27a 45%,#f6f2c0 50%,#f6e27a 55%,#cb9b51 78%, #462523 100%);";
            qualities.style.cssText = "text-shadow: 5px 5px 5px rgb(109, 73, 19); background-color: rgb(109, 73, 19, 0.5); border: 15px ridge rgb(255, 237, 156); box-shadow: 5px 5px 5px rgb(109, 73, 19); border-radius:0px;";
            break;
    }
    i++;
    if (i > 4) {
        i = 0;
    }
})