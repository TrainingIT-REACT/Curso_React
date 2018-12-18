import React from "react";

/**
 * Un componente bastante desafortunado que no comprueba si el array
 * tiene elementos. SPOILER: Puede provocar errores
 */
const Title = ({ arr }) => <h1>{arr[0].toLowerCase()}</h1>

export default Title;
