import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import * as serviceWorkerRegistration from './serviceWorkerRegistration';
import Router from './Routes/Router';
import { NotificationProvider } from './Contexts/PendingNotificationContext';
import { InstallMessageProvider } from './Contexts/ShowInstallMessageContext';
import { PopupProvider } from './Contexts/PopupContext';

import Paisagem from './Pages/Paisagem/';
import ReactGA from "react-ga4";

const TRACKING_ID = "G-KZT0DEH3ZS";
ReactGA.initialize(TRACKING_ID);

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

    return (
        <React.StrictMode>
                <PopupProvider>
                    <InstallMessageProvider>
                        <NotificationProvider>
                            <Router/>
                        </NotificationProvider>
                    </InstallMessageProvider>
                </PopupProvider>
        </React.StrictMode>
    );
    // if((window.innerWidth/window.innerHeight) <= 1) {
    //     return (
    //         <React.StrictMode>
    //                 <PopupProvider>
    //                     <InstallMessageProvider>
    //                         <NotificationProvider>
    //                             <Router/>
    //                         </NotificationProvider>
    //                     </InstallMessageProvider>
    //                 </PopupProvider>
    //         </React.StrictMode>
    //     );
    // }
    // else return (<Paisagem/>);
};

root.render(<App/>);


// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://cra.link/PWA
serviceWorkerRegistration.register();