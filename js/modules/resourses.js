export const WORDS = {
    HOURS: ['час', 'часа', 'часов'],
    DAYS: ['день', 'дня', 'дней'],

    CASE(words, num) {
        if(Array.isArray(words)) {
            return words[(num % 100 > 4 && num % 100 < 20) ? 2 : [2, 0, 1, 1, 1, 2][(num % 10 < 5) ? num % 10 : 5]];
        }else{
            return words
        }
    },
}

export const SETTINGS = {
    TABLES: {
        4: [2, 2, 16],
        6: [3, 2, 16],
        16: [4, 4, 8],
        20: [5, 4, 8]
    }
}

export const HINT = {
    EDIT: 'Перейти к редактированию',
    SCREEN: 'На полный экран'
}

export const STATUS = {
    ERROR: 'Потеряно соединение',
}

export const SYSTEM_ERRORS = {
    POPUP: {
        NOT_FOUND: 'Такого поп-ап нет, проверьте корректность id'
    }
}