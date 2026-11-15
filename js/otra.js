function  calcularPresupuesto(){
    let ninvitados =parseInt(document.getElementById("numero-inv").value);
    
    let costo_comida =parseInt(document.getElementById("cost-comida").value);

    let costo_bebida =parseInt(document.getElementById("cost-bebida").value);

    let costo_decoracion =parseInt(document.getElementById("cost-decor").value);

    let cost_musica =parseInt(document.getElementById("cost-musica").value);

    let porcentaje_propina =parseInt(document.getElementById("propina-porc").value);



    let comida_total = ninvitados * costo_comida;
    document.getElementById("comida-total-s").innerText=comida_total.toLocaleString('es-CO');

    let bebida_total = ninvitados * costo_bebida;
    document.getElementById("bebida-total-s").innerText=bebida_total.toLocaleString('es-CO');


    document.getElementById("decoracion").innerText= costo_decoracion.toLocaleString('es-CO');

    
    document.getElementById("musica").innerText= cost_musica.toLocaleString('es-CO');


    let subtotal = comida_total + bebida_total + costo_decoracion + cost_musica;
    document.getElementById("subtotal").innerText= subtotal.toLocaleString('es-CO');

    let propinas = subtotal * (porcentaje_propina / 100);
    document.getElementById("propina").innerText= propinas.toLocaleString('es-CO');

    let total_general = subtotal + propinas;
    document.getElementById("total-general").innerText= total_general.toLocaleString('es-CO');


    let cost_invitados = total_general / ninvitados;
    document.getElementById("costo-inv").innerText= cost_invitados.toLocaleString('es-CO');
}
