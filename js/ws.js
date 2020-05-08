document.addEventListener('DOMContentLoaded', () => {
    document.querySelectorAll('#top_menu > div > .menu_parent').forEach(v => {
        v.addEventListener('click', event => {
            document.querySelectorAll('.selected_menu').forEach(v => {
                v.classList.remove('selected_menu')
            })
            v.parentElement.classList.add('selected_menu')
        })
    })
    document.getElementById('editor').addEventListener('click', () => {
        document.querySelectorAll('.selected_menu').forEach(v => {
            v.classList.remove('selected_menu')
        })
    })
})