// **********************navbar color change**********************
$(window).scroll(function () {
  $("nav").toggleClass("scrolled", $(this).scrollTop() > 530);
});

// ****************************************************************

// ***********************Invoke Search Box ********************
$(".search-button").click(function () {
  $(this).parent().toggleClass("open");
});
// *************************************************************

const github = new Github();
const ui = new UI();
// Search Input
const searchUser = document.getElementById("search-box");

// Search Input Event Listener
searchUser.addEventListener("keyup", (e) => {
  const userText = e.target.value;

  if (userText !== "") {
    github.getUser(userText).then((data) => {
      if (data.profile.message === "Not Found") {
        // swal({
        //   title: "OOPS!",
        //   text: `${userText} NOT FOUND`,
        //   icon: "error",
        //   timer: 1000,
        // });

        ui.showAlert(`${userText} not found`, "alert alert-danger");
      } else {
        ui.showProfile(data.profile);
        ui.showRepos(data.repo);
      }
    });
  } else {
    ui.clearProfile();
  }
});
