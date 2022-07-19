const imgContainer = document.querySelector(".img");
const heartReaction = document.querySelector(".heart2");


imgContainer.addEventListener("dblclick", displayLiked)
let likes = 0


function displayLiked(e) {
    const span = document.createElement('span');
    span.className = "love";
    span.style.top = `50%`;
    span.style.left = `50%`;
    span.style.transform = `translate(-50%, -50%) rotate(45deg)`
    imgContainer.appendChild(span);
    setTimeout(() => span.remove(), 1000);
    likesCount()
    changeLikeColor()
}

function likesCount() {
    const span3 = document.querySelector(".spannn");
    const span2 = document.querySelector(".likes-picture")
    const text = document.querySelector(".text")
    const likeCounter = document.querySelector(".likes");
    likes++
    console.log(likes)
    if (span2 === null) {
        const span2 = document.createElement("img");
        span2.src = `/anita.jpg`;
        span2.className = "likes-picture";
        likeCounter.appendChild(span2);
        const text = document.createElement("small")
        text.className = "text"
        text.innerText = "liked by ahneetah";
        likeCounter.appendChild(text)
    }
    if (likes > 1) {
        if (!span3) {
            const span3 = document.createElement("span");
            span3.className = "spannn"
            span3.innerText = ` and ${likess()} other`
            text.appendChild(span3);
        }
    }

    if (likes >= 2) {
        if (span3) {
            span3.innerText = ` and ${likess()} others`
        }
    }
}

function likess() {
    new_like = likes - 1;
    console.log(new_like)
    return new_like
}
    const styleElem = document.head.appendChild(document.createElement("style"));

function changeLikeColor() {
    styleElem.innerHTML = ".heart2::before{background: red;}";
    heartReaction.style.backgroundColor = "red";
    setTimeout(clearLike, 1500)
}

function clearLike() {
    styleElem.innerHTML = ".heart2::before{background: white;}";
    heartReaction.style.backgroundColor = "white";
}