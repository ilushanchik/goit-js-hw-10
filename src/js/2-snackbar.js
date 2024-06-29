import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";
document.querySelector('.form').addEventListener('submit', function(event) {
    event.preventDefault();

    const form = event.currentTarget;
    const delay = parseInt(form.elements.delay.value);
    const state = form.elements.state.value;

    createPromise(delay, state)
        .then(delay => {
            iziToast.success({
                title: 'Success',
                message: `Fulfilled promise in ${delay}ms`,
            });
        })
        .catch(delay => {
            iziToast.error({
                title: 'Error',
                message: `Rejected promise in ${delay}ms`,
            });
        });
});

function createPromise(delay, state) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (state === 'fulfilled') {
                resolve(delay);
            } else {
                reject(delay);
            }
        }, delay);
    });
}
