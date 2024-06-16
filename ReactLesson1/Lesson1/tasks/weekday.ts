enum Days {
    Monday = "Понеділок",
    Tuesday = "Вівторок",
    Wednesday = "Середа",
    Thursday = "Четвер",
    Friday = "П'ятниця",
    Saturday = "Субота",
    Sunday = "Неділя"
}

function getActivity(day: Days): string {
    switch (day) {
        case Days.Monday:
            return "Робота над проектом";
        case Days.Tuesday:
            return "Робота над проектом";
        case Days.Wednesday:
            return "Робота над проектом";
        case Days.Thursday:
            return "Робота над проектом";
        case Days.Friday:
            return "Робота над проектом";
        case Days.Saturday:
            return "Відпочинок";
        case Days.Sunday:
            return "Відпочинок";
        default:
            return "Не визначено";
    }
}


export function checkActivity() {
    const result = `Активність на ${Days.Monday}: ${getActivity(Days.Monday)}`;
    console.log(result);
}

