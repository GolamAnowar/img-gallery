const galleryImg = document.querySelectorAll(".row .colum img"),
previewBox = document.querySelector(".preview-box"),
previewImg = previewBox.querySelector(".image img"),
closeIcon = previewBox.querySelector(".bx-x"),
prevBtn = document.querySelector(".bx-chevron-left"),
nextBtn = document.querySelector(".bx-chevron-right"),
title = document.querySelector(".title");

window.onload = () => {
    for(let i = 0; i < galleryImg.length; i++){
        // console.log(galleryImg[i])
        galleryImg[i].addEventListener("click", () => {
            previewBox.classList.add("active");
            function prevImg(){
                title.innerHTML = `<p>${i + 1}</p> out of <p>${galleryImg.length - 1}</p>`;
                let selectedImg = galleryImg[i].src;
                // console.log(selectedImg);
                previewImg.src = selectedImg;
            }
            prevImg();

            prevBtn.addEventListener("click", () => {
                if(i == 0) return;
                i--;
                // console.log(i);
                prevImg();
            });

            nextBtn.addEventListener("click", () => {
                if(i == galleryImg.length - 1) return;
                i++;
                prevImg();
            });


        });

        closeIcon.addEventListener("click", () => {
            previewBox.classList.remove("active");
        });
    }
}