/* eslint-disable */
import axios from 'axios';
import { showAlert } from './alerts';

 export const resetPassword = async (password, passwordConfirm) => {
  const resToken = user.createPasswordResetToken();
      try {
        const res = await axios({
          method: 'PATCH',
          url: `http://127.0.0.1:3000/api/v1/users/resetPassword/${resToken}`,
          data: {
            password,
            passwordConfirm
          }
        });
      
        if (res.data.status === 'success') {
          showAlert('success', 'Reset password sucessfully! Please log in again.');
            window.setTimeout(() => {
                location.assign('/login');
            }, 1500);
        }
    } catch (err) {

      showAlert('error', err.response.data.message);

    }
 };