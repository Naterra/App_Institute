## Приложение выполнено для московского института МТИ

<b> Практическая работа к курсовой работе на тему:</b>

### "Объектно-ориентированные языки высокого уровня"

Поставленные задачи:

• Реализовать приложение, используя ОО языки на фронтенде и бэкенде

• Продемонстрировать преимущества объектно ориентированной реализации


## Установка

1. Скачать проект на локальный компьютер
<pre><code>git clone git@github.com:Naterra/App_Institute.git</code></pre>

2. Загрузить npm модули
<pre><code>npm install</code></pre>

3. Зарегистрироваться на mplab.com и создать тестовую базу данных <a href="https://mlab.com/signup/">mLab</a>

4. Отредактировать конфиг файлы config > prod.js, dev.js и установить полученную на mLab ссылку на базу данных
<pre><code>// образец
export default {
    "serverPort": "3001",
    "mongo_URL": "mongodb://username:passw@host.mlab.com:port/dbName",
};
</code></pre>

5. Запустить приложение локально
<pre><code>npm run dev</code></pre>

6.  Приложение доступно по адресу <a href="http://localhost:3000/list">http://localhost:3000</a>

<img src="https://user-images.githubusercontent.com/8204364/42196948-84ffa466-7e4e-11e8-9556-66cc77dc17ef.png"/>