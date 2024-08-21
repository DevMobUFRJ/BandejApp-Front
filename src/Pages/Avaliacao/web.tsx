import { AvaSection, Avadiv, Comentario,
        DateDiv, DateSelect, EmailInput, EnviarButton,
        AvaForm, TurnoButton, TurnoDiv, FormDiv,
        MensagemErro, DateIcon, SelecionaAvaDivBlock, SelecionaAvaDiv, AvaTitle, AvaSubtitle, SubFormDiv, OBS } from "./styleWeb";

import { UseFormReturn } from 'react-hook-form';
import { ToastContainer } from 'react-toastify';

import { formulario, enviar } from "../../Functions/Avaliacao/enviar";
import { selecionarTurno } from '../../Functions/Avaliacao/avaliacao';

import Nota from "../../Components/Nota";
import Cabecalho from "../../Components/Cabecalho";
import DownPop from "../../Components/PopUpIOS";
import DropDown from "../../Components/DropDown";
import datePicker from '../../Assets/Avaliacao/datePicker.svg';

import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

import PopUp from "../../Components/PopUp";
import { PopTexto } from "../../Components/PopUp/style";
import Footer from "../../Components/Footer";

type AvaliacaoProps = {
    UseForm: UseFormReturn<formulario>;
    showInstallMessage: boolean;
    mostrarPopup: Function;
    opcoes: string[];
    valores: string[];
    dataSelecionada: Date | null | undefined;
    setData: React.Dispatch<React.SetStateAction<Date | null | undefined>>;
};

export default function AvaliacaoWeb({UseForm, showInstallMessage, mostrarPopup, opcoes, valores, dataSelecionada, setData}: AvaliacaoProps) {

    /* Funções do useForm */
    const {register, handleSubmit, formState: { errors }, setValue, getValues, reset} = UseForm;

/*----------------------------------------------------------------------------*/

    return (
        <Avadiv id="AvaPage">
            <ToastContainer autoClose={3000}/>

            <Cabecalho nome='Avaliação'/>

            <PopUp popID='avaliacao' titulo="Avaliação enviada"
                opcoes={['Fechar']} tiposOpcoes={[0]}
                funcoesOpcoes={[mostrarPopup]}
                componente={
                    <PopTexto>
                        Caso tenha informado seu e-mail, o RU poderá entrar em contato com você.
                    </PopTexto>
                }
            />

{/*--------------------------------------------------------------------------*/}

            <AvaForm onSubmit={handleSubmit(async dados => {
                if(await enviar(dados, valores)) {
                    reset();
                    setData(null);
                    mostrarPopup('avaliacao');
                }
            })}>
                <FormDiv style={{ gap: '24px'}}>
                    <SubFormDiv>

                        <AvaSection style={{marginBottom: 'auto'}}>
                            <AvaTitle>Qual restaurante deseja avaliar?</AvaTitle>
                            <input type="hidden" {...register('ru', {
                                required: true, 
                                validate: valor => {
                                    if(valores.includes(valor) && valor !== 'selec')
                                        return true;
                                    else {
                                        window.scrollTo(0, 0);
                                        return 'Selecione um restaurante';
                                    }
                                }})}
                            />
                            {errors.ru? <MensagemErro>{errors.ru.message}</MensagemErro>:
                            <MensagemErro style={{opacity: '0', pointerEvents: 'none', userSelect: 'none'}}>Sem erro</MensagemErro>}
                            <SelecionaAvaDivBlock>
                                <SelecionaAvaDiv>
                                    <DropDown
                                        height='4.375vw'
                                        opcaoInicial={getValues('ru')}
                                        valoresState={valores}
                                        valoresOpcoes={opcoes}
                                        tela='avaliacao'
                                        alterarState={(ru: string) => setValue('ru', ru)}
                                    />
                                </SelecionaAvaDiv>
                            </SelecionaAvaDivBlock>
                        </AvaSection>

                        <AvaSection>
                            <div style={{display: 'inline-flex'}}>
                                <AvaTitle>Seu e-mail</AvaTitle>
                                <AvaSubtitle>(Opcional)</AvaSubtitle>
                            </div>
                            
                            <MensagemErro style={{opacity: '0', pointerEvents: 'none', userSelect: 'none'}}>sem erro</MensagemErro>
                            <EmailInput {...register('email')} autoComplete="on"
                            name="email" type="email" placeholder="Insira seu e-mail..."/>
                            <OBS>O RU poderá te enviar uma resposta.</OBS>
                            
                        </AvaSection>

                    </SubFormDiv>

{/*--------------------------------------------------------------------------*/}
                    <SubFormDiv>

                        <AvaSection>
                            <div style={{display: 'inline-flex'}}>
                                <AvaTitle>Avaliar refeição específica</AvaTitle>
                                <AvaSubtitle>(Opcional)</AvaSubtitle>
                            </div>
                            
                            <MensagemErro style={{opacity: '0', pointerEvents: 'none', userSelect: 'none'}}>Sem erro</MensagemErro>
                            <TurnoDiv {...register('turno', {value: '----'})}>
                                <TurnoButton name="almoco" id="almoco" type="button"
                                onClick={(elem) => selecionarTurno(elem.currentTarget, setValue, getValues())}
                                >   Almoço
                                </TurnoButton>
                                <TurnoButton name='janta' id="janta" type="button"
                                onClick={(elem) => selecionarTurno(elem.currentTarget, setValue, getValues())}
                                >   Jantar
                                </TurnoButton>
                            </TurnoDiv>
                        </AvaSection>

                        <AvaSection style={{marginTop: 'auto'}}>
                            {errors.data? <MensagemErro>{errors.data.message}</MensagemErro>:
                            <MensagemErro style={{opacity: '0', pointerEvents: 'none', userSelect: 'none'}}>Sem erro</MensagemErro>}
                            <DateDiv>
                                <DatePicker
                                    id="dataSelect"
                                    disabledKeyboardNavigation
                                    placeholderText="Selecione uma data"

                                    selected={dataSelecionada}
                                    dateFormat="dd/MM/yyyy"
                                    maxDate={new Date()}

                                    onFocus={e => e.target.blur()}
                                    onChange={(data: Date) => {
                                            setValue('data', data.toLocaleDateString('pt-BR'));
                                            setData(data);
                                        }
                                    }
                                    customInput={
                                        <DateSelect {...register('data')} name="data"
                                        type="text" placeholder="Selecione uma data"/>
                                    }
                                />

                                <DateIcon src={datePicker}
                                    alt='Ícone de calendário para selecionar data'
                                    onClick={() => setTimeout(() => {
                                        document.getElementById('dataSelect')?.click()
                                    }, 100)}
                                />
                            </DateDiv>
                        </AvaSection>

                    </SubFormDiv>
                </FormDiv>

{/*--------------------------------------------------------------------------*/}

                <FormDiv>
                    <AvaSection>
                        <AvaTitle>Avaliação</AvaTitle>
                        
                        <input type="hidden"
                            {...register('nota', {
                                required: true,
                                max: { value: 5, message: 'Máximo de estrelas é 5!' },
                                min: { value: 1, message: 'Selecione uma nota!' }
                            })}
                            />
                            
                        {errors.nota? <MensagemErro>{errors.nota.message}</MensagemErro>:
                        <MensagemErro style={{opacity: '0', pointerEvents: 'none', userSelect: 'none'}}>Sem erro</MensagemErro>}
                        <div style={{width:'30%'}}>
                            <Nota fontSize='5vw' NotaToParent={(nota: number) => setValue('nota', nota)}/>
                        </div>
                        
                        {errors.comentario? <MensagemErro>{errors.comentario.message}</MensagemErro>:
                        <MensagemErro style={{opacity: '0', pointerEvents: 'none', userSelect: 'none'}}>Sem erro</MensagemErro>}
                        <Comentario {...register('comentario',{
                            required: true,
                            maxLength: {value: 200, message: 'Comentário deve conter no máximo 200 caracteres'},
                            validate: comentario => comentario.trim().length !== 0 ? true : 'Escreva um comentário'
                        })}cor={errors.comentario?.type === 'required'? true:false}
                        placeholder={'Nos conte um pouco mais sobre a sua experiência'}/>

                        <EnviarButton id='botaoEnvio'>
                            Enviar Avaliação
                        </EnviarButton>
                    </AvaSection>
                </FormDiv>
                    
{/*--------------------------------------------------------------------------*/}

            </AvaForm>
    
            { showInstallMessage && <DownPop/> }
            <Footer/>
        </Avadiv>
    );
}