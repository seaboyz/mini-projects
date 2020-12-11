// document.getElementsByClassNames returns a Html
// collenction which does not have method
// const panels = document.getElementsByClassName('panel')

// querySelectorAll returns a nodeList which have methods
const panels = document.querySelectorAll('.panel')

panels.forEach(panel =>
    panel.addEventListener('click', () => {
        removeActiveClasses()
        panel.classList.toggle('active')
    })
)

function removeActiveClasses() {
    panels.forEach(panel => panel.classList.remove('active'))
}
