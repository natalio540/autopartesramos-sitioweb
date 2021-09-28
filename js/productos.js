// array de marcas y productos
let arrayMarcas=['ACOPLADOS', 'ACURA', 'AGRALE', 'ALFA ROMEO', 'ARO', 'ASIA', 'AUDI', 'AUTOS JAPONESES', 'BMW', 'BOERO', 'CHERY', 'CHEVROLET', 'CHRYSLER', 'CITROEN', 'CUMMINS', 'DACIA', 'DAIHATSU', 'DATSUN', 'DEUTZ', 'DIMEX', 'DODGE', 'EL DETALLE', 'FIAT', 'FORD', 'GMC', 'GROSSPAL', 'HONDA', 'HYUNDAI', 'IKA', 'IME', 'IMPORTADOS', 'INTERNACIONAL', 'ISUZ SCANIA', 'IVECO', 'JAC', 'JAGUAR', 'JEEP', 'JEEP WILLYS', 'JHONN DEERE', 'KIA', 'LADA', 'LAND ROVE DAEWOO', 'MAXION (MOTOR)', 'MAZDA', 'MERCEDES BENZ', 'MERCURY', 'MINI COOPER', 'MITSUBISHI', 'MWM', 'NISSAN', 'NO ESPECIFICADA', 'PERKINS', 'PEUGEOT', 'PORSCHE', 'PROTON', 'RENAULT', 'ROVER', 'SAAB', 'SEAT', 'SIAM DI TELLA', 'SKODA', 'SMART', 'SOCMA', 'SSANGYONG', 'SUBARU', 'SUZUKI', 'TATA', 'TOYOTA', 'TRACTOR', 'TRAILER', 'VARIOS', 'VOLKSWAGEN', 'VOLVO', 'YUEGIN', 'ZANELLO']

let arrayProductos = ['ABRAZADERA DE CAJA DE DIRECCION', 'ABRAZADERA DE HOMICINETICA', 'ABRAZADERA DE SUSPENSION', 'ACOPLE DE CREMALLERA', 'ACOPLE DE DIRECCION', 'ACOPLE TENSOR', 'ACOPLE-MANCHO-PALIER FIAT 600', 'ACTUADORES HIDRAULICOS', 'AISLADOR DE CARROCERIA', 'AMORTIGUADOR', 'AMORTIGUADOR ESTABILIZADOR', 'AMORTIGUADOR RALLY', 'ARANDELA JUNTA HOMOCINETA', 'AXIAL DE CREMALLERA', 'BARRA DE DIRECCION', 'BARRA TENSORA', 'BASE DE ESPIRAL', 'BIELETA DE SUSPENSION', 'BOCINA CARBURADOR', 'BOMBA DE AGUA', 'BOMBA DE EMBRAGUE', 'BOMBA DE FRENO', 'BOMBA DIRECCION HIDRAULICA', 'BOMBIN DE EMBRAGUE', 'BOTON VARIOS', 'BRAZO AUXILIAR DE DIRECCION', 'BRAZO PITMAN DE DIRECCION', 'BRAZO ROTULA DE DIRECCION', 'BRAZO SUSPENSION', 'BUJE DE SUSPENSION', 'BULON RUEDA / ESPARRAGO', 'CAJA DE DIRECCION', 'CAJA DE DIRECCION DESPIECE', 'CAJA DE DIRECCION REPARADA', 'CAMPANA DE FRENO', 'CAZOLETA DE SUSPENSION', 'CILINDRO DE RUEDA', 'COLUMNA DE DIRECCION', 'CORREAS POLY-V', 'CORREAS POLY-V ELASTICAS', 'CORREAS TRAPEZOIDALES', 'CRAPODINA DE SUSPENSION', 'CREMALLERA DIRECCION ELEC. ASIST.', 'CREMALLERA DIRECCION HIDRAULICA', 'CREMALLERA DIRECCION MECANICA', 'CREMALLERA REPARADA DIRECCION MECANICA', 'CRUCETA DE CARDAN', 'CRUCETA DE DIRECCION', 'DISCO DE FRENO', 'EJE DE PARRILLA', 'EJE DE PARRILLA (ABRAZADERA)', 'EJE DE PARRILLA (BULON)', 'EJE DE PARRILLA (SOPORTE MONTANTE)', 'EJE REGULADOR DE ALTURA', 'ELASTICO', 'EMBRAGUE KIT', 'EQUILIBRADOR DE BAUL Y COMPUERTA', 'ESPIGA DE SEMIEJE', 'EXTREMO DE DIRECCION', 'FUELLE DE AMORTIGUADOR', 'FUELLE DE CARDAN', 'FUELLE DE CREMALLERA', 'FUELLE DE SEMIEJE', 'GRASA SEMIEJE', 'HOMOCINETICA CARDAN', 'JUNTA DESLIZANTE', 'JUNTA HOMOCINETICA', 'KIT DE BUJES DE SUSPENSION', 'KIT DE DISTRIBUCION', 'MANCHON DE CARDAN', 'MANCHON DE DIRECCION', 'MAZA DE RUEDA', 'NO ESPECIFICADO', 'PALIER', 'PALIER FLOTANTE', 'PARRILLA DE SUSPENSION', 'PASTILLA DE FRENO', 'PLATO AMORTIGUADOR-ESPIRAL', 'POLEA BOMBA DE AGUA', 'POLEA CIGUEÑAL', 'PRECINTO PLASTICO', 'PUNTA (MANGA DIFERENCIAL)', 'PUNTA DE EJE', 'REGULADOR DE COMBA', 'RESORTE DE SUSPENSION PROGRESIVO', 'RESORTE DE SUSPENSION RALLY', 'RESORTE DE SUSPENSION STANDART', 'RODAMIENTO DE ALTERNADOR', 'RODAMIENTO DE CARDAN', 'RODAMIENTO DE RUEDA', 'RODAMIENTO DE SEMIEJE', 'RODAMIENTO EJE TRASERO', 'ROTULA DE SUSPENSION', 'SECTOR DE DIRECCION', 'SEGURO DE ROTULA', 'SEMIEJE', 'SINF�?N DE DIRECCION', 'SOPORTE ADON VARIOS', 'SOPORTE BARRA TENSORA','SOPORTE CAÑO DE ESCAPE',
 "SOPORTE DE AMORTIGUADOR",
 "SOPORTE DE CABINA Y CARROCERIA",
 "SOPORTE DE CARDAN",
 "SOPORTE DE CAZOLETA",
 "SOPORTE DE ELASTICO",
 "SOPORTE DE MOTOR / CAJA / DIFERENCIAL",
 "SOPORTE DE RADIDADOR",
 "TENSOR DE SUSPENSION",
 "TOPE DE SUSPENSION",
 "TUBO EJE TRASERO",
 "TUERCAS VARIAS",
 "VARIOS FACTURACION"]

// MOSTRAR SELECT CUANDO LA PAGINA SE CARGA
function chargeOptionsSelect(){
    var selectMarcas = document.getElementById("arrayDeMarcas");
    var selectproductos = document.getElementById("arrayDeProductos");
    // var elmts = arrayMarcas;
    for (var i = 0; i < arrayMarcas.length; i++) {
        var optn = arrayMarcas[i];
        var el = document.createElement("option");
        el.textContent = optn;
        el.value = optn;
        selectMarcas.appendChild(el);
    }

    for (var i = 0; i < arrayProductos.length; i++) {
        var optn = arrayProductos[i];
        var el = document.createElement("option");
        el.textContent = optn;
        el.value = optn;
        selectproductos.appendChild(el);
    }
    // down.innerHTML = "Elements Added";
}
if(window.attachEvent) {
    window.attachEvent('onload', chargeOptionsSelect);
} else {
    if(window.onload) {
        var curronload = window.onload;
        var newonload = function(evt) {
            curronload(evt);
            chargeOptionsSelect(evt);
        };
        window.onload = newonload;
    } else {
        window.onload = chargeOptionsSelect;
    }
}








// READ JSON Y BUSCAR PRODUCTO
function searchProduct() {
    // tomamos el valor del input/select
    var productMarca = document.getElementById("arrayDeMarcas").value
    var productItem = document.getElementById("arrayDeProductos").value
    

    // leemos el json
    fetch('/js/listado.json')
        .then(res=>res.json())
        .then(data=>{ 
            // iteramos el json para buscar los elementos
            for (let i = 0; i < data.length; i++) {
                const marca = data[i].Marca.toUpperCase();
                const item = data[i].Elemento.toUpperCase();
                // console.log(marca);
                // comparamos valores del input con el json y cramos la tabla
                if (productMarca === marca && productItem === item ){                    
                        var table = document.getElementById("tableProducts");
                        var row = table.insertRow(1);
                        var cellid = row.insertCell(0);
                        var cellmarca = row.insertCell(1);
                        var cellelemento = row.insertCell(2);
                        var cellmodelo = row.insertCell(3);
                        var cellprecio = row.insertCell(4);
                        cellid.innerHTML = data[i].Id;
                        cellmarca.innerHTML = data[i].Marca;
                        cellelemento.innerHTML = data[i].Elemento;
                        cellmodelo.innerHTML = data[i].Modelo;
                        cellprecio.innerHTML = data[i].Precio;
                      }
                }        
                    // console.log(data[i].Elemento);
                    // document.getElementById("id").innerHTML = data[i].Id;
                    // document.getElementById("marca").innerHTML = data[i].Marca;
                    // document.getElementById("item").innerHTML = data[i].Elemento;
                    // document.getElementById("modelo").innerHTML = data[i].Modelo;
                    // document.getElementById("precio").innerHTML = data[i].Precio;
                }
        )};        


        
    



