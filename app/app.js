pickmeup.defaults.locales['ru'] = {
    days: ['Воскресенье', 'Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота'],
    daysShort: ['Вс', 'Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб'],
    daysMin: ['Вс', 'Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб'],
    months: ['Январь', 'Февраль', 'Март', 'Апрель', 'Май', 'Июнь', 'Июль', 'Август', 'Сентябрь', 'Октябрь', 'Ноябрь', 'Декабрь'],
    monthsShort: ['Янв', 'Фев', 'Мар', 'Апр', 'Май', 'Июн', 'Июл', 'Авг', 'Сен', 'Окт', 'Ноя', 'Дек']
};

var calendar = document.getElementsByClassName("calendar")[0];
var now = new Date;
pickmeup(calendar, {
    render : function (date) {
        if (date > now) {
            return {disabled: true, class_name: 'date-in-past'};
        }
        return {};
    },
    flat : true,
    calendars: 1,
    locale: "ru"
});

calendar.addEventListener('pickmeup-change', function (e) {
    console.log(e.detail.formatted_date); // New date according to current format
    console.log(e.detail.date);           // New date as Date object
})
