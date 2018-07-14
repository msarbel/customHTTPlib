/**
 * EasyHTTP Library
 * Library for making HTTP requests
 * 
 * @version 2.0.0
 * @author Michael Sarbello
 * @license MIT
 * 
 */

 class EasyHTTP {
     // make an HTTP GET request
     get(url) {
         return new Promise((resolve, reject) => {
            fetch(url)
            .then(res => res.json())
            .then(data => resolve(data))
            .catch(err => reject(err));
         });
     }

     // make an HTTP POST Request
     post(url, data) {
        return new Promise((resolve, reject) => {
           fetch(url, {
               method: 'POST',
               headers: {
                   'Content-type': 'application/json'
               },
               body: JSON.stringify(data)
           })
           .then(res => res.json())
           .then(data => resolve(data))
           .catch(err => reject(err));
        });
    }

    // make an HTTP PUT Request
    put(url, data) {
        return new Promise((resolve, reject) => {
           fetch(url, {
               method: 'PUT',
               headers: {
                   'Content-type': 'application/json'
               },
               body: JSON.stringify(data)
           })
           .then(res => res.json())
           .then(data => resolve(data))
           .catch(err => reject(err));
        });
    }

    // make an HTTP DELETE Request
    delete(url) {
        return new Promise((resolve, reject) => {
           fetch(url, {
               method: 'DELETE',
               headers: {
                   'Content-type': 'application/json'
               }
           })
           .then(res => res.json())
           .then(data => resolve('Resource Deleted...'))
           .catch(err => reject(err));
        });
    }
 }