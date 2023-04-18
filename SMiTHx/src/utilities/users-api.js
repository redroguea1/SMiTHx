// This is the base path of the Express route we'll define
import sendRequest from "./send-request";
const BASE_URL = '/api/users';

//old implementation CODE 
// export async function login(userData) {
//   // Fetch uses an options object as a second arg to make requests
//   // other than basic GET requests, include data, headers, etc. 
//   const res = await fetch(BASE_URL, {
//     method: 'POST',
//     headers: { 'Content-Type': 'application/json' },
//     // Fetch requires data payloads to be stringified
//     // and assigned to a body property on the options object
//     body: JSON.stringify(userData)
//   });
//   console.log(res)
//   // Check if request was successful
//   if (res.ok) {
//     // res.json() will resolve to the JWT
//     return res.json();
//   } else {
//     throw new Error('Invalid Sign Up');
//   }
// }



// export async function signUp(userData) {
//   // Fetch uses an options object as a second arg to make requests
//   // other than basic GET requests, include data, headers, etc. 
//   const res = await fetch(BASE_URL, {
//     method: 'POST',
//     headers: { 'Content-Type': 'application/json' },
//     // Fetch requires data payloads to be stringified
//     // and assigned to a body property on the options object
//     body: JSON.stringify(userData)
//   });
//   console.log(res)
//   // Check if request was successful
//   if (res.ok) {
//     // res.json() will resolve to the JWT
//     return res.json();
//   } else {
//     throw new Error('Invalid Sign Up');
//   }
// }

export function signUp(userData) {
    return sendRequest(BASE_URL, 'POST', userData);
  }
  
  export function login(credentials) {
    return sendRequest(`${BASE_URL}/login`, 'POST', credentials);
  }