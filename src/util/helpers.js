import moment from 'moment-timezone';

// let cachedTimeZoneStr = null; 

export const timeZoneStr = () => {

    const raw = moment.tz.guess();
    const city = raw.slice(raw.indexOf('/') + 1);
    const cachedTimeZoneStr = `${city}.`;

    return cachedTimeZoneStr;
}




