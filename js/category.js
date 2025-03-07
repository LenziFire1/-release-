document.querySelectorAll(".category").forEach(category => {
    category.addEventListener("click", () => {
        const desc = category.querySelector(".category__desc");
        const arrow = category.querySelector(".arrow__icon");

        document.querySelectorAll(".category__desc").forEach(otherDesc => {
            if (otherDesc !== desc) {
                otherDesc.style.maxHeight = "0";
                otherDesc.style.opacity = "0";
                setTimeout(() => otherDesc.style.display = "none", 300);

            }
        });
        document.querySelectorAll(".arrow__icon").forEach(otherArrow => {
            if (otherArrow !== arrow) {
                otherArrow.style.transform = "rotate(-45deg)";

            }
        });
        if (desc.style.display === "block") {
                desc.style.maxHeight = "0";
                desc.style.opacity = "0";
                setTimeout(() => otherDesc.style.display = "none", 300);
                arrow.style.transform = "rotate(-45deg)";
        } else {
            desc.style.display = "block";
            setTimeout(() => {
                desc.style.maxHeight = "100px";
                desc.style.opacity = "1";
            }, 10);
            arrow.style.transform = "rotate(45deg)";
        }
    });
});