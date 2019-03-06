export class Utils {

    static isNull(data) {
        return data === 'null' || data === null || data === undefined || data === '';
    }

    static isEmpty(array) {
        return array === null || array === undefined || array.length === 0;
    }

    static  getTimeIn12FormatTime = (date) => {
        let hours = date.getHours();
        let minutes = date.getMinutes();
        let ampm = hours >= 12 ? 'pm' : 'am';
        hours = hours % 12;
        hours = hours ? hours : 12; // the hour '0' should be '12'
        minutes = minutes < 10 ? '0' + minutes : minutes;
        return hours + ':' + minutes + ' ' + ampm;
    };

    static getImageUrl = (url) => {
        return url;
    };

    static isObjectEmpty = (obj) => {
        return Object.keys(obj).length === 0 && obj.constructor === Object;
    };

}