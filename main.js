function alternarModal(modalId, abrir) {
    const modal = document.querySelector(`#${modalId}`);

    if (abrir) {
        modal.style.display = 'block';
    } else {
        modal.style.display = 'none';
    }

    document.body.style.overflow = abrir ? "hidden" : "auto";
}

document.addEventListener('keydown', (event) => {
    if (event.key === "Escape") {
        alternarModal('ver-modal-inscrito', false);

        document.querySelectorAll(".cabecalho__lista-item").forEach((item) => {
            alternarSubmenu(item, false);
        });
    }
});

function alternarSubmenu(item, mostrar) {
    const submenu = item.querySelector(".submenu");

    if (submenu) {
        submenu.style.display = mostrar ? "block" : "none";

        const menuItem = item.querySelector(".cabecalho__lista-item a");
        menuItem.setAttribute("aria-expanded", mostrar ? true : false);
        
        const DropdownExpandedIcon = item.querySelector(
            ".material-symbols-outlined.icone"
        );

        DropdownExpandedIcon.classList.toggle("active", mostrar);
    }
}

// selecionar todo os cabecalho__lista-item
document.querySelectorAll(".cabecalho__lista-item").forEach(item => {
    // adicionar um ouvinte mouseover
    item.addEventListener("mouseover", () => alternarSubmenu(item, true));

    // adicionar um ouvinte mouseout
    item.addEventListener("mouseout", () => alternarSubmenu(item, false));

    item.addEventListener("click", () => {
        const submenu = item.querySelector(".submenu");

        const isDisplayed = submenu.style.display === "block";

        alternarSubmenu(item, !isDisplayed);
    })
});

/*
* Acordion
*/
document.querySelectorAll(".botao-acordeao").forEach(button => {
    button.addEventListener('click', ()=> alternarAcordeao(button));
});

function alternarAcordeao(button) {
    const content = button.nextElementSibling;

    content.classList.add("expandido");
}