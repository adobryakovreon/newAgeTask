# Boilerplate (JS)

## Шаблон приложения для amoCRM. 

#### Структура проекта и описание модулей:

_Данные модули относятся к серверной части приложения и запускаются с помощью NodeJS_

- api: Модуль для работы c API amoCRM;
- config: Модуль с данными конфигурации интеграции в amoCRM и другими конфигурациями необходимыми для нормальной работы приложения;
- logger: Модуль содержит конфигурации log4js и позваляет создавать экземпляр функции logger для сохранения логов в папку logs/;
- utils: Модуль содержит набор шаблонных функций для взаимодействия с amoCRM;
- index: Главный модуль приложения(Точка входа), данный модуль должен содержать основную логику приложения.
    
_Данные модули относятся к клиентской части приложения и запускаются в браузере после загрузки в amoCRM_

* widget: директория в которой хранятся файлы front-end части приложения(виджета):
    -  manifest.json - файл с конфигурацией виджета [подробнее](https://www.amocrm.ru/developers/content/integrations/structure);
    -  script - файл с основной логикой виджета, будет подключен на стороне пользователя в указанных в manifest.json областях  [подробнее](https://www.amocrm.ru/developers/content/integrations/script_js);
    * i18: директория содержащая файлы локализаций в формате ключ:значение. На текущий момент возможно использование только двух локализаций: русской (ru) и английской (en). Все переводы будут доступны в JS.
        - en.json - файл настроек английской локализации;
        - ru.json - файл настроек русской локализации;
    * images: директория для размещения файлов изображений, которые используются в виджете. Должна содержать в себе 5 файлов в формате (png, jpeg,jpg или gif), которые будут использоваться как логотип виджета в разных областях видимости. Размер каждого файла не должен превышать 300 КБ. logo_min.png и logo_medium.png — обязательно, если виджет работает в карточках, используется во всех списках и карточках контактов или сделок в свернутом и развернутом состоянии соответственно. Изображения logo_main и logo_small дублируют цели logo_min соответственно, обязательны к отгрузке с ноября 2018 года. Также необходимо загрузить logo.png для поддержки старых версий.
        - logo_main.png 400px x 272px;
        - logo_small.png 108px x 108px;
        - logo.png 130px x 100px;
        - logo_medium.png 240px x 84px;
        - logo_min.png 84px x 84px;
        - logo_dp.png 174px x 109px;
    