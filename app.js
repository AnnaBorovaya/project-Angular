const express = require('express');//подключаем фреймворк express
const http = require('http');//встроенный модуль нужен для создания сервера
const path = require('path');//встроенный модуль нужен для правильной работы с путями
const compression = require('compression');

const app = express();//вызов експресс который даст нам набор методов для реализации сервера
//кроме того на express можно написать свое API
//compression - ужимает приложение и архивирует его что влияет на скорость загрузки приложения
app.use(compression());

//определяемся с папкой из которой мы будем отдавать статические данные(контент)
app.use(express.static(path.join(__dirname, 'dist/lesson8auth')));

//создание маршрута по которому могут прийти на этот сервер и он отдаст index.html
//и так как к нему могут прийти по любому маршруту то *
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'dist/lesson8auth/index.html'));
});

//определяем порт сервера - 
//если сервер запускаеться локально то используеться порт 9999
//если запускается на хостинге (например хирко) то порт определяеться динамически
const port = process.env.PORT || '9999';
app.set('port', port);

//создали и запустили сервер
const server = http.createServer(app);
server.listen(port, () => console.log('server running ' + port));