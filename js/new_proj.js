document.addEventListener('DOMContentLoaded', () => {
    document.querySelector('[data-project-type-name=console-app]').addEventListener('click', (e) => {
        window.location.href = '/ws.html?type=console'
    })
    document.querySelector('[data-project-type-name=web-app]').addEventListener('click', (e) => {
        window.location.href = '/ws.html?type=web'
    })
})