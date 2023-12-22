export const DateUtils = {
    getHourOfDay: () => {
        const currentDate = new Date();
        const hour = currentDate.getHours(); //returns an int from 0 to 23
        console.log("hour:"+hour);
        return hour;
    }
}

export const greeting = (name) => {

    const currentHour = DateUtils.getHourOfDay();
    let message; //declare message without a value
    if (currentHour<12){
        message = "Good morning"
    }
    else if (currentHour<18){
        message = "Good afternoon"
    }
    else {
        message = "Good evening"
    }

    return `${message}, ${name}! How's it going?`
}