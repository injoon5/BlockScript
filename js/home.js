document.addEventListener('DOMContentLoaded', () => {
    document.querySelector('[data-menu-type-name=new-proj]').addEventListener('click', (e) => {
        window.location.href = '/new_proj.html'
    })
    document.querySelector('[data-project-type-name=web-app]').addEventListener('click', (e) => {
        window.location.href = '/ws/web.html'
    })
})