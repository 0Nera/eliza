// Переменная для хранения контекста текущей беседы
var context = {
    family: "",
    work: "",
    love: "",
    state: ""
};

// Функция для обработки ответов Элизы
function getResponse() {
    // Получаем введенный пользователем текст
    var input = document.getElementById("userInput").value;

    // Добавляем введенный текст к контексту беседы
    context = updateContext(input);

    // Очищаем поле для ввода текста
    document.getElementById("userInput").value = "";

    // Генерируем ответ Элизы на основе контекста текущей беседы
    var response = generateResponse(input);

    // Отображаем ответ Элизы
    document.getElementById("chat").innerHTML += "<p><strong>Вы:</strong> " + input + "</p>";
    document.getElementById("chat").innerHTML += "<p><strong>Элиза:</strong> " + response + "</p>";
}

// Функция для обновления контекста беседы
function updateContext(input) {
    // Приводим введенный текст к нижнему регистру для удобства обработки
    input = input.toLowerCase();

    // Обновляем контекст в зависимости от введенного текста пользователя
    if (
        input.includes("мама") ||
        input.includes("мамы") ||
        input.includes("маме") ||
        input.includes("мамой") ||
        input.includes("папа") ||
        input.includes("папы") ||
        input.includes("папе") ||
        input.includes("папой") ||
        input.includes("родители") ||
        input.includes("родителей") ||
        input.includes("родителю") ||
        input.includes("родителям") ||
        input.includes("сестра") ||
        input.includes("сестры") ||
        input.includes("сестре") ||
        input.includes("сестрой") ||
        input.includes("брат") ||
        input.includes("брата") ||
        input.includes("брату") ||
        input.includes("братом")
    ) {
        context.family = "Расскажите мне больше о вашей семье и проблемах, которые вы испытываете.";
    }

    if (input.includes("рабочие") || input.includes("подработка") || input.includes("работа")) {
        context.work = "Пожалуйста, расскажите мне подробнее о своей работе. Я готова выслушать вас.";
    }

    if (input.includes("любовь") || input.includes("любимая") || input.includes("милая")) {
        context.love = "Пожалуйста, расскажите мне подробнее о своей половинке. Я готова выслушать вас.";
    }

    if (input.includes("состояние") || input.includes("настроение") || input.includes("проблемы")) {
        context.state = "Пожалуйста, расскажите мне подробнее о своих проблемах. Я готова выслушать вас.";
    }

    // Возвращаем обновленный контекст
    return context;
}

// Функция для генерации ответа Элизы
function generateResponse(input) {
    // Приводим введенный текст к нижнему регистру для удобства обработки
    input = input.toLowerCase();

    // Получаем сохраненную информацию из контекста
    var familyInfo = context.family;
    var stateInfo = context.state;

    // Проверяем наличие ключевых слов или фраз во введенном тексте пользователя и используем сохраненную информацию из контекста при генерации ответа
    if (
        input.includes("привет") ||
        input.includes("здравствуйте") ||
        input.includes("здравствуй") ||
        input.includes("ку") ||
        input.includes("прив") ||
        input.includes("добрый день") ||
        input.includes("добрый вечер")
    ) {
        return "Здравствуйте! Как я могу помочь вам? " + familyInfo;
    } else if (input.includes("проблемы") || input.includes("семья")|| input.includes("проблема")) {
        return "Расскажите мне о вашей семье и проблемах, которые вы испытываете." + stateInfo;
    } else if (input.includes("сложности") || input.includes("сложно") || input.includes("трудности") || input.includes("больно") || input.includes("плохо")) {
        return "Мне очень жаль слышать, что у вас возникли сложности. Пожалуйста, расскажите подробнее о ваших проблемах." + familyInfo;
    } else if (input.includes("любовь") || input.includes("милая") || input.includes("жена") || input.includes("невеста") || input.includes("муж")) {
        return "Мне очень жаль слышать, что у вас возникли сложности в отношениях. Пожалуйста, расскажите подробнее о ваших проблемах." + context.love;
    } else if (input.includes("постоянно") || input.includes("кричит") || input.includes("бегает")) {
        return (
            "Понимаю, это может быть действительно трудно. Как вы реагируете на такое поведение? " +
            stateInfo
        );
    } else if (input.includes("синапс") || input.includes("бмпос")) {
        return "О, я вижу Вы тоже знакомы с проектами <a href=\"https://vk.com/0nera\">Арена</a>? Расскажите мне что вы думаете о них?";
    } else if (input.includes("родственники") || input.includes("отношения")) {
        return "Отношения внутри семьи не всегда легкие. Расскажите, какие сложности вы испытываете в общении с родственниками.";
    } else if (input.includes("помощь") || input.includes("помощи") || input.includes("консультация") || input.includes("поддержка")) {
        return (
            "Я готова предложить вам поддержку и решения. Поделитесь своими заботами и мы рассмотрим возможные шаги для помощи вам."
        );
    } else if (input.includes("пока") || input.includes("покеда") || input.includes("до встречи") || input.includes("до скорого") || input.includes("до свидания")) {
        return "До свидания! Было приятно пообщаться.";
    } else {
        return "Извините, я не совсем понимаю вас. Можете пояснить?";
    }
}
