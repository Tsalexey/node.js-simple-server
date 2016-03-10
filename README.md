# node.js-simple-server
Простой сервер, который умеет обрабатывать запросы вида /article/:id и /photo/:id.
 
По запросу /article/:id отдается статья с комментариями к ней, а так же ссылки на 3 случайные статьи.
По запросу /photo/:id отдается фотография с комментариями к ней.
Причем комментарии могут быть вложенными (комментарии 1-го и 2-го уровня).
 
В ответ выводится json с данными, пришедшими от сервера.
Присутствует api для добавления/редактирования/удаления комментариев, к которому бы можно было обращаться через ajax.
 
Технологии:
•	Node.js версии не ниже версии 4.0.0
•	Фреймворк - express.js
•	База данных - postgresql
•	ORM (sequelize)
