 import Swal from 'sweetalert2';
 import { ALERT_TYPES } from '../constants';

export const displayAlert = (type, title, text, onClose = null, timer=1500, position='center') => {
    const alertType = Object.values(ALERT_TYPES).includes(type) ? type : ALERT_TYPES.ERROR;

    Swal.fire({
        position,
        icon: alertType,
        title: title,
        text,
        timer,
        willClose: onClose
      })
}
