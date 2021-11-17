const btn = document.getElementById('btn-dark-mode') /* Creation d'une constante btn egal au bouton dark-mode */
const bodyElement = document.body; /* Creation d'une constante bodyElement egal au body de la page */

/* Fonction permettant le changement de mode */
btn.addEventListener('click',()=>{ /* S'execute lors du clique sur le bouton */
    const currentMode = bodyElement.classList[0]; /* Creation d'une constante currentMode égal a la (premiere) classe actuelle du body */

    /* Creation d'une constante newModeToSet égal a "dark-mode" si currentMode est égal à "light-mode". Sinon, elle sera égal a "light-mode" */
    const newModeToSet = (currentMode==='light-mode')?'dark-mode':'light-mode'
    bodyElement.setAttribute('class',newModeToSet) /* Change la classe de body pour qu'elle soit celle de newModeToSet  */
})
