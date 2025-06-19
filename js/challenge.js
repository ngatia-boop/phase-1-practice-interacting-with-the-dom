const counter = document.getElementById("counter");
const plusBtn = document.getElementById("plus");
const minusBtn = document.getElementById("minus");
const heartBtn = document.getElementById("heart");
const pauseBtn = document.getElementById("pause");
const commentForm = document.getElementById("comment-form");
const commentInput = document.getElementById("comment-input");
const commentList = document.getElementById("list");
const likesList = document.querySelector(".likes");

let count = 0;
let isPaused = false;
let interval = setInterval(incrementCounter, 1000);

function incrementCounter() {
    counter.textContent = ++count;
}

plusBtn.addEventListener("click", () => {
  count++;
  counter.textContent = count;
});

minusBtn.addEventListener("click", () => {
  count--;
  counter.textContent = count;
});

const likes = {};

heartBtn.addEventListener("click", () => {
  if (!likes[count]) {
    likes[count] = 1;
    const li = document.createElement("li");
    li.id = `like-${count}`;
    li.textContent = `${count} has been liked 1 time`;
    likesList.appendChild(li);
  } else {
    likes[count]++;
    const li = document.getElementById(`like-${count}`);
    li.textContent = `${count} has been liked ${likes[count]} times`;
  }
});

pauseBtn.addEventListener("click", () => {
  if (isPaused) {
    interval = setInterval(incrementCounter, 1000);
    pauseBtn.textContent = "pause";
    plusBtn.disabled = false;
    minusBtn.disabled = false;
    heartBtn.disabled = false;
    isPaused = false;
  } else {
    clearInterval(interval);
    pauseBtn.textContent = "resume";
    plusBtn.disabled = true;
    minusBtn.disabled = true;
    heartBtn.disabled = true;
    isPaused = true;
  }
});

commentForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const p = document.createElement("p");
  p.textContent = commentInput.value;
  commentList.appendChild(p);
  commentInput.value = "";
});
