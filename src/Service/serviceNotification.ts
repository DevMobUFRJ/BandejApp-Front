import { initializeApp } from 'firebase/app';
import { getToken } from 'firebase/messaging';
import { getMessaging } from 'firebase/messaging/sw';

const firebaseConfig = {
    apiKey: "AIzaSyDXV7C9l_JKyFjG9W1AbY5-x2C8PdP4oLo",
    authDomain: "bandejapp-73d9a.firebaseapp.com",
    projectId: "bandejapp-73d9a",
    storageBucket: "bandejapp-73d9a.appspot.com",
    messagingSenderId: "1033790459132",
    appId: "1:1033790459132:web:47dd564a20dc15caec9b79",
    measurementId: "G-BLP8G81BZ2"
};

const firebase = initializeApp(firebaseConfig);
const FCM = getMessaging(firebase);

export function registrarNoFCM(serviceAtual: ServiceWorkerRegistration) {

    if(Notification.permission !== 'granted') {
        Notification.requestPermission().then(permissao => {
            console.log(`Notificações: ${permissao}`);
        }).catch(error => console.log(`[ERRO] Notificações: ${error}`));
    }

    navigator.serviceWorker.ready.then(async () => {
        if(localStorage.getItem('tokenFCM') === null) {
            const token = await getToken(FCM, {
                serviceWorkerRegistration: serviceAtual,
                vapidKey: 'BDTjdUhkSoZwgRG9QlX1Or-lEbRPIMNujH2d07MSz1ombadFxZ4Izqsv7iZEhnEf-n3y0Eprp0TQEcXi_Co1jIc'
            }).then(token => {return token})
            .catch(error => console.log(`[ERRO] Token: ${error}`));

            fetch(`${process.env.REACT_APP_REGISTRO_TOKEN}`, {
                method: 'post',
                body: JSON.stringify({token: token}),
                mode: 'cors',
                headers: {'Content-Type': 'application/json'}
            }).then(resposta => {
                resposta.json().then(r => console.log(r));
                localStorage.setItem('tokenFCM', `${token}`)
            })
            .catch(erro => console.log(`[ERRO] Token: Falha ao registrar: ${erro}`));
        }
    });
}

export default FCM;