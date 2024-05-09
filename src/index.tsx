import React, { useEffect, useState } from 'react';
import ReactGA from "react-ga4";
import ReactDOM from 'react-dom/client';
import Router from './Routes/Router';
import './index.css';

/*----------------   SERVICE   ----------------*/
import * as serviceWorkerRegistration from './Service/serviceWorkerRegistration';

/*----------------   CONTEXTOS   ----------------*/
import { NotificationProvider } from './Contexts/PendingNotificationContext';
import { PopupProvider } from './Contexts/PopupContext';

/*     Apagar quando a versão desktop estiver pronta     */
import Paisagem from './Pages/Paisagem/';

ReactGA.initialize("G-KZT0DEH3ZS");

const root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement
);

function App() {
    const [proporcao, setProporcao] = useState(window.innerWidth/window.innerHeight);

    window.addEventListener('resize', () => {
        const proporTela = window.innerWidth/window.innerHeight;
        setProporcao(proporTela);
    })

    useEffect(() => {}, [proporcao]);

    if((window.innerWidth/window.innerHeight) <= 1) {
        return (
            <React.StrictMode>
                <PopupProvider>
                    <NotificationProvider>
                        <Router/>
                    </NotificationProvider>
                </PopupProvider>
            </React.StrictMode>
        );
    }
    else return (<Paisagem/>);
};

root.render(<App/>);


// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://cra.link/PWA
serviceWorkerRegistration.register({onUpdate: () => {location.reload()}});