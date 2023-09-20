export const WORDS = {
    HOURS: ['час', 'часа', 'часов'],
    DAYS: ['день', 'дня', 'дней'],
    SPEED: 'Мбит/с',

    CASE(words, num) {
        if(Array.isArray(words)) {
            return words[(num % 100 > 4 && num % 100 < 20) ? 2 : [2, 0, 1, 1, 1, 2][(num % 10 < 5) ? num % 10 : 5]];
        }else{
            return words
        }
    },
}

export const SYSTEM_ERRORS = {
    POPUP: {
        NOT_FOUND: 'Такого поп-ап нет, проверьте корректность id'
    },
    FITLERS: {
        TABLE_MASK: 'Ошибка во время генерации шаблонов'
    }
}