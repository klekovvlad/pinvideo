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

export const SETTINGS = {
    TABLES: {
        DESKTOP: {
            4: [2, 2, 16],
            6: [3, 2, 16],
            16: [4, 4, 8],
            20: [5, 4, 8]
        },
        ADAPTIVE: {
            2: [1, 2, 16],
            4: [2, 2, 16],
            6: [2, 3, 8]
        }
    },

    CHECK_WIDTH() {
        if(window.innerWidth < 768 ) {
            return 'ADAPTIVE';
        } else return 'DESKTOP';
    }
}

export const SYSTEM_ERRORS = {
    POPUP: {
        NOT_FOUND: 'Такого поп-ап нет, проверьте корректность id'
    },
    FITLERS: {
        TABLE_MASK: 'Ошибка во время генерации шаблонов'
    }
}