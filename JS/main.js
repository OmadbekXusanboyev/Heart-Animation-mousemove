const bodyEl = document.querySelector("body");

bodyEl.addEventListener("mousemove", (event)=>{
     const xPos = event.offsetX;
     const yPos = event.offsetY;
     const heart = document.createElement("span");
     heart.style.left = xPos + "px";
     heart.style.top = yPos + "px";

     const size = Math.random() * 100;
     heart.style.width = size + "px";
     heart.style.height = size + "px";
     bodyEl.appendChild(heart);
     setTimeout(()=>{
          heart.remove();
     }, 3000)
})