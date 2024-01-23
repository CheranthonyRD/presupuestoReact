import { useState } from "react";
import Mensaje from "./Mensaje";


export default function NuevoPresupuesto({presupuesto, setPresupuesto}){
    const [errorPresupuesto, setErrorPresupuesto] = useState(false);

    const handleForm = e =>{
        e.preventDefault();
        const regex = new RegExp('^[0-9]+$');

        if(!regex.test(presupuesto) || presupuesto <= 0){
            setErrorPresupuesto(true);            
            return;
        }
        
        const parsePresupuesto = parseInt(presupuesto);
        setErrorPresupuesto(false);
        
        
    }

    return(
        <div className="contenedor-presupuesto contenedor sombra">
            <form onSubmit={handleForm} className="formulario">
                <div className="campo">
                    <label htmlFor="">Definir presupuesto</label>
                    <input
                    className="nuevo-presupuesto"
                    type="text"
                    placeholder="Ingresa tu presupuesto"
                    value={presupuesto}
                    onChange={e=>setPresupuesto(e.target.value)}
                     />
                     <input type="submit" value="Añadir" />

                     {errorPresupuesto && <Mensaje tipo={'error'}>{"Presupuesto Invalido"}</Mensaje>}
                </div>
            </form>
        </div>
    );
}