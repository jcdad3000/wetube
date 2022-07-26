const videoContainer = document.getElementById("videoContainer");
const form = document.getElementById("commentForm");
const deleteBtns = document.querySelectorAll("#deleteBtn");

const addComment = (text) => {
  const videoComments = document.querySelector(".video__comments ul");
  const newComment = document.createElement("li");
  newComment.className = "video__comment";
  const icon = document.createElement("i");
  icon.className = "fas fa-comment";
  const span = document.createElement("span");
  span.innerText = ` ${text}`;
  const delBtn = document.createElement("button");
  delBtn.innerText = "X";
  newComment.appendChild(icon);
  newComment.appendChild(span);
  newComment.appendChild(delBtn);
  videoComments.prepend(newComment);
};

const handleSubmit = async (event) => {
  event.preventDefault();
  const textarea = form.querySelector("textarea");
  const videoId = videoContainer.dataset.id;
  const text = textarea.value;
  if (text === "") {
    return;
  }
  const { status } = await fetch(`/api/videos/${videoId}/comment`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ text }),
  });

  textarea.value = "";
  if (status === 201) {
    addComment(text);
  }
  //window.location.reload();
};

if (form) {
  form.addEventListener("submit", handleSubmit);
}

const deleteSelectComment = (Id) => {
  console.log("hello");
};

const handleDelete = async (event) => {
  const selectComment = event.srcElement.parentNode;
  const commentId = selectComment.dataset.id;

  console.log(commentId);
  console.log("click");

  const { status } = await fetch(`/api/videos/${commentId}/delete`, {
    method: "DELETE",
  });
};

deleteBtns.forEach((deleteBtn) => {
  deleteBtn.addEventListener("click", handleDelete);
});
