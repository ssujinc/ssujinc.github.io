
document.querySelectorAll('.function_list ul li a')[0].addEventListener('click', function () {
    document.querySelectorAll('.active').forEach((active_list) => {
        active_list.classList.remove('active');
    });
    document.querySelectorAll('.modal').forEach((open_modals) => {
        open_modals.style.display = 'none';
    });
    document.querySelectorAll('.function_list ul li a')[0].classList.add('active');
    document.getElementById('new_file').style.display = 'block';
});

document.querySelectorAll('.function_list ul li a')[1].addEventListener('click', () => {
    document.querySelectorAll('.active').forEach((active_list) => {
        active_list.classList.remove('active');
    });
    document.querySelectorAll('.modal').forEach((open_modals) => {
        open_modals.style.display = 'none';
    });
    document.querySelectorAll('.function_list ul li a')[1].classList.add('active');
    document.getElementById('import').style.display = 'block';
});

document.querySelectorAll('.function_list ul li a')[2].addEventListener('click', () => {
    document.querySelectorAll('.active').forEach((active_list) => {
        active_list.classList.remove('active');
    });
    document.querySelectorAll('.modal').forEach((open_modals) => {
        open_modals.style.display = 'none';
    });
    document.querySelectorAll('.function_list ul li a')[2].classList.add('active');
    document.getElementById('save').style.display = 'block';
});

document.querySelectorAll('.function_list ul li a')[3].addEventListener('click', () => {
    document.querySelectorAll('.active').forEach((active_list) => {
        active_list.classList.remove('active');
    });
    document.querySelectorAll('.modal').forEach((open_modals) => {
        open_modals.style.display = 'none';
    });
    document.querySelectorAll('.function_list ul li a')[3].classList.add('active');
    document.getElementById('new_name_save').style.display = 'block';
});

document.querySelectorAll('.function_list ul li a')[4].addEventListener('click', () => {
    document.querySelectorAll('.active').forEach((active_list) => {
        active_list.classList.remove('active');
    });
    document.querySelectorAll('.modal').forEach((open_modals) => {
        open_modals.style.display = 'none';
    });
    document.querySelectorAll('.function_list ul li a')[4].classList.add('active');
    document.getElementById('all_download').style.display = 'block';
});

document.querySelectorAll('.function_list ul li a')[5].addEventListener('click', () => {
    document.querySelectorAll('.active').forEach((active_list) => {
        active_list.classList.remove('active');
    });
    document.querySelectorAll('.modal').forEach((open_modals) => {
        open_modals.style.display = 'none';
    });
    document.querySelectorAll('.function_list ul li a')[5].classList.add('active');
    document.getElementById('all_delete').style.display = 'block';
});