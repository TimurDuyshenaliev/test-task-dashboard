function openSideBar() {
  let openBtn = document.getElementById("btn-open");
  let sidebar = document.getElementById("sidebar");
  let closeBtn = document.getElementById("btn-close");

  openBtn.onclick = function () {
      sidebar.style.display = "block";
      closeBtn.style.display = "block";

  }

  closeBtn.onclick = function () {
      sidebar.style.display = "none";
      closeBtn.style.display = "block";
  }


  function closeSide() {

  }
}
openSideBar();