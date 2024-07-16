export const formatTime = (date) => {
    if (!date) {
        return ''
    }
const dateObj = new Date(date);
const hours = dateObj.getHours().toString().padStart(2, '0');
const minutes = dateObj.getMinutes().toString().padStart(2, '0'); 
const seconds = dateObj.getSeconds().toString().padStart(2, '0'); 
 return `${hours}:${minutes}:${seconds}`; 
}