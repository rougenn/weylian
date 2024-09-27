document.getElementById('registration-form').addEventListener('submit', function(e) {
    e.preventDefault(); // Предотвращаем отправку формы
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    console.log('Регистрация:', { username, password });
    // Здесь можно добавить логику для отправки данных на сервер
    
});
