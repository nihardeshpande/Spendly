// main.js — students will add JavaScript here as features are built

/* ------------------------------------------------------------------ */
/* "See how it works" modal                                             */
/* ------------------------------------------------------------------ */

(function () {
    var VIDEO_URL = "https://www.youtube.com/watch?v=dQw4w9WgXcQ";
    var modal = document.getElementById("how-modal");
    var openBtn = document.getElementById("see-how-btn");
    var closeBtn = document.getElementById("modal-close");
    var iframe = document.getElementById("modal-iframe");

    if (!modal || !openBtn || !closeBtn || !iframe) return;

    function openModal() {
        iframe.src = VIDEO_URL;
        modal.setAttribute("aria-hidden", "false");
        document.body.style.overflow = "hidden";
    }

    function closeModal() {
        iframe.src = "about:blank";
        modal.setAttribute("aria-hidden", "true");
        document.body.style.overflow = "";
    }

    openBtn.addEventListener("click", function (e) {
        e.preventDefault();
        openModal();
    });

    closeBtn.addEventListener("click", closeModal);

    modal.addEventListener("click", function (e) {
        if (e.target === modal) closeModal();
    });

    document.addEventListener("keydown", function (e) {
        if (e.key === "Escape" && modal.getAttribute("aria-hidden") === "false") {
            closeModal();
        }
    });
})();