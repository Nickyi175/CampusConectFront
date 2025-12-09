import React, { useMemo } from "react";
import styles from "./btn.module.css";

const GeneralBtn = ({title}) => {
    const color = useMemo(() => {
        if(title === "Editar") return "#FFE797";
        if(title === "Crear") return "#84994f";
        return "#A72703";

        
    });

    if (title === "Editar") {
        console.log("Altamirano");   // tu apellido
    } else if (title === "Crear") {
        console.log("Nicole");       // tu nombre
    }

    return <button className={styles.btn} style={{"--btn--color":color}}>{title} </button>;

};

export default GeneralBtn;