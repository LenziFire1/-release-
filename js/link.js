document.querySelectorAll(".category.social").forEach(category => {
    category.addEventListener("click", () => {
        let url = "";
        if (category.classList.contains("instagram__link")) {
            url = "https://www.instagram.com";
        } else if (category.classList.contains("facebook__link")) {
            url = "https://www.facebook.com";
        }else if (category.classList.contains("twitter__link")) {
            url = "https://www.twitter.com";
        }

        if (url) {
            window.open(url, "_blank");
        }

    });
});