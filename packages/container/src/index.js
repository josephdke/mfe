window.getRandomString = () => {
    const date = new Date();
    let minutesFixed = Number(date.toISOString().substring(14,16));
    minutesFixed = minutesFixed - minutesFixed%5;
    const result = date.toISOString().substring(0,14) + minutesFixed;
    return result;
};
import('./bootstrap')