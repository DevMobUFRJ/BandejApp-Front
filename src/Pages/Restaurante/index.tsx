import { useState } from "react";
import { useHistory } from "react-router-dom";
import * as styleMobile from "./style";
import * as styleWeb from "./styleWeb";
import RestSelect from "../../Components/RestSelect";
import ImportStyle from "../../Functions/ImportStyle";

export default function Restaurante() {
    const history = useHistory();

    const [data, setData] = useState('');
    const childToParent = (childData: string) => setData(childData);

    const {RestDiv, RestHeader, RestTitle, RestP, RestButton} = ImportStyle(styleMobile, styleWeb)

    function RU(){
        if(data.length > 1){
            localStorage.setItem("bandejapp:ruDefault", data);
            return history.push('/Cardapio');
        }
        else return alert('Por favor, seleciona um restaurante.');
    }

    return (
        <RestDiv>
            <RestHeader>
                <RestTitle>Qual restaurante você quer consultar ?</RestTitle>
                <RestP>Essa opção poderá ser alterada depois</RestP>
            </RestHeader>

            <RestSelect
            childToParent={childToParent}/>

            <RestButton id='confirm' onClick={RU}>Confirmar</RestButton>
        </RestDiv>
    );
}