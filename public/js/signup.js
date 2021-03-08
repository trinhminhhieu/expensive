/* eslint-disable */
import axios from 'axios';
import { showAlert } from './alerts';

 export const signup = async (name, email, password, passwordConfirm) => {
      try {
        const res = await axios({
          method: 'POST',
          url: 'http://127.0.0.1:3000/api/v1/users/signup',
          data: {
            name,
            email,
            password,
            passwordConfirm
          }
        });
      
        if (res.data.status === 'success') {
          showAlert('success', 'Signup sucessfully!');
            window.setTimeout(() => {
                location.assign('/');
            }, 1500);
        }
    } catch (err) {

      showAlert('error', err.response.data.message);

    }
 };

//   const SignupForm =  document.querySelector('.form__signup'); //tu the css pug

//  if (SignupForm)
//       SignupForm.addEventListener('submit', e => {
//       e.preventDefault();
//       const name = document.getElementById('name').value;
//       const email = document.getElementById('email').value;
//       const password = document.getElementById('password').value;
//       const passwordConfirm = document.getElementById('passwordConfirm').value;
//       signup(name, email, password, passwordConfirm) 
      
//     });

    //an thong bao
// const hideAlert = () => {
//   const el = document.querySelector('.alert'); //tep css
//   if (el) el.parentElement.removeChild(el);
// };

// // type is 'success' or 'error'
// const showAlert = (type, msg) => {
//   hideAlert();
//   const markup = `<div class="alert alert--${type}">${msg}</div>`;
//   document.querySelector('body').insertAdjacentHTML('afterbegin', markup);
//   window.setTimeout(hideAlert, 5000);
// };
 
