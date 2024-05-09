import { HashRouter as Router, Route, Switch, Redirect } from "react-router-dom";

import Avaliacao from '../Pages/Avaliacao';
import Cardapio from '../Pages/Cardapio';
import Tutorial from '../Pages/Tutorial';
import Restaurante from '../Pages/Restaurante';
import Notificacao from '../Pages/Comunicados';
import Informacoes from '../Pages/Informacoes';
import FaleConosco from '../Pages/FaleConosco';
import GlobalComponents from '../Components/Global';

export default function Routes() {
    const isIos = () => {
        const userAgent = window.navigator.userAgent.toLowerCase();
        return /iphone|ipad|ipod/.test( userAgent );
    }

    const isInStandaloneMode = () => {
        if(isIos())
            return ('standalone' in window.navigator) && (window.navigator.standalone)
        else 
            return (window.matchMedia('(display-mode: standalone)').matches);
    };

    return (
        <Router basename='/'>
            <GlobalComponents/>

            <Switch>
                <Route exact path='/'>
                    <Redirect to={localStorage.getItem("bandejapp:ruDefault")?
                                '/Cardapio':'/Tutorial'}/>
                </Route>

                <Route path='/Tutorial'>
                {
                    (isInStandaloneMode()) ?
                        <Redirect to='/Restaurante'/>
                        :
                        <Tutorial/>
                }
                </Route>

                <Route path="/Restaurante">
                    <Restaurante/>
                </Route>

                <Route path="/Cardapio">
                    {() => {
                        const ruDefault = localStorage.getItem("bandejapp:ruDefault");

                        if (ruDefault) return <Cardapio />;
                        else return <Redirect to='/Restaurante' />;
                    }}
                </Route>

                <Route path="/Avaliacao">
                    <Avaliacao/>
                </Route>

                <Route path="/Notificacao">
                    <Notificacao/>
                </Route>

                <Route path='/Informacoes'>
                    <Informacoes/>
                </Route>

                <Route path='/FaleConosco'>
                    <FaleConosco/>
                </Route>
            </Switch>
        </Router>
    )
} 
