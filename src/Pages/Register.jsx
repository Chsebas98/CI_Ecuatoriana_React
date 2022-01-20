import React, { useState } from "react";
import { TextField, Button } from "@mui/material";

const Register = () => {
  const [username, setUsername] = useState("");
  const [lastname, setLastName] = useState("");
  const [edad, setEdad] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [cedula, setCedula] = useState("");

  //changes

  const usernameChange = (e) => {
    setUsername(e.target.value);
  };

  const lastnameChange = (e) => {
    setLastName(e.target.value);
  };
  const edadChange = (e) => {
    setEdad(e.target.value);
  };
  const emailChange = (e) => {
    if (/^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3,4})+$/.test(email)) {
      setEmail(e.target.value);
      return true;
    } else {
      setEmail(e.target.value);
      return false;
    }
  };
  const phoneChange = (e) => {
    setPhone(e.target.value);
  };
  const cedulaChange = (e) => {
    setCedula(e.target.value);
  };
  const notify = () => {
    alert("Datos ingresados correctamente");
  };
  //validations
  let has3nChar = username.length >= 3 && username.length <= 30;
  let has3lChar = lastname.length >= 3 && lastname.length <= 30;
  let hasNumber = /^([0-9])*$/.test(edad);
  let isNumber = /^([0-9])*$/.test(phone) && phone.length === 10;
  let isAdulto = edad >= 18 && edad <= 100;
  let trueEmail =
    /^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i.test(email);
  const validate_ci = (cedula) => {
    //Preguntamos si la cedula consta de 10 digitos
    if (cedula.length === 10) {
      //Obtenemos el digito de la region que sonlos dos primeros digitos
      let digito_region = cedula.substring(0, 2);

      //Pregunto si la region existe ecuador se divide en 24 regiones
      if (digito_region >= 1 && digito_region <= 24) {
        // Extraigo el ultimo digito
        let ultimo_digito = cedula.substring(9, 10);
        //console.log("ultimo digito: " + ultimo_digito);
        //Agrupo todos los pares y los sumo
        let pares =
          parseInt(cedula.substring(1, 2)) +
          parseInt(cedula.substring(3, 4)) +
          parseInt(cedula.substring(5, 6)) +
          parseInt(cedula.substring(7, 8));
        //console.log("Suma pares:" + pares);
        //Agrupo los impares, los multiplico por un factor de 2, si la resultante es > que 9 le restamos el 9 a la resultante
        let numero1 = cedula.substring(0, 1);
        //console.log(numero1);
        numero1 = numero1 * 2;
        if (numero1 > 9) {
          numero1 = numero1 - 9;
        }
        let numero3 = cedula.substring(2, 3);
        // console.log(numero3);
        numero3 = numero3 * 2;
        if (numero3 > 9) {
          numero3 = numero3 - 9;
        }
        let numero5 = cedula.substring(4, 5);
        // console.log(numero5);
        numero5 = numero5 * 2;
        if (numero5 > 9) {
          numero5 = numero5 - 9;
        }
        let numero7 = cedula.substring(6, 7);
        // console.log(numero7);
        numero7 = numero7 * 2;
        if (numero7 > 9) {
          numero7 = numero7 - 9;
        }
        let numero9 = cedula.substring(8, 9);
        // console.log(numero9);
        numero9 = numero9 * 2;
        if (numero9 > 9) {
          numero9 = numero9 - 9;
        }
        let impares = numero1 + numero3 + numero5 + numero7 + numero9;
        // console.log("SUma impares: " + impares);

        //Suma total
        let suma_total = pares + impares;
        // console.log("Suma total:" + suma_total);
        //extraemos el primero digito
        let primer_digito_suma = String(suma_total).substring(0, 1);
        // console.log("Primero digito:" + primer_digito_suma);
        //Obtenemos la decena inmediata
        let decena = (parseInt(primer_digito_suma) + 1) * 10;
        //  console.log("Decena:" + decena);
        //Obtenemos la resta de la decena inmediata - la suma_total esto nos da el digito validador
        let digito_validador = decena - suma_total;
        // console.log("DigitoValidador: " + digito_validador);
        //Si el digito validador es = a 10 toma el valor de 0
        if (digito_validador === 10) digito_validador = 0;

        //Validamos que el digito validador sea igual al de la cedula
        if (digito_validador == ultimo_digito) {
          //   console.log("la cedula:" + cedula + " es correcta");
          return true;
        } else {
          //   console.log("la cedula:" + cedula + " es incorrecta");
          return false;
        }
      } else {
        // imprimimos en consola si la region no pertenece
        //console.log("Esta cedula no pertenece a ninguna region");
        return false;
      }
    } else {
      //imprimimos en consola si la cedula tiene mas o menos de 10 digitos
      //console.log("Esta cedula tiene menos de 10 Digitos");
      return false;
    }
  };
  let isCI = validate_ci(cedula);
  return (
    <div className="container mt-5 mb-5 col-10 col-sm-8 col-md-6 col-lg-5">
      <div className="mb-5 alert alert-primary">
        <div className="text-center">
          <label htmlFor="" className="h2">
            Register
          </label>
        </div>

        <div className="form-group mb-3">
          <TextField
            size="small"
            variant="outlined"
            className="form-control"
            label="Nombre"
            value={username}
            onChange={usernameChange}
          />
        </div>
        {username && (
          <div className="ms-2 mb-2">
            <div className={has3nChar ? "text-success" : "text-danger"}>
              <small>
                Como mínimo 3 caracteres y como máximo 30 caracteres
              </small>
            </div>
          </div>
        )}
        <div className="form-group mb-3">
          <TextField
            size="small"
            variant="outlined"
            className="form-control"
            label="Apellido"
            value={lastname}
            onChange={lastnameChange}
          />
        </div>
        {lastname && (
          <div className="ms-2 mb-2">
            <div className={has3lChar ? "text-success" : "text-danger"}>
              <small>
                Como mínimo 3 caracteres y como máximo 30 caracteres
              </small>
            </div>
          </div>
        )}
        <div className="form-group mb-3">
          <TextField
            size="small"
            variant="outlined"
            className="form-control"
            label="Edad"
            value={edad}
            onChange={edadChange}
          />
        </div>
        {edad && (
          <div className="ms-2 mb-2">
            <div className={isAdulto ? "text-success" : "text-danger"}>
              <small>Es mayor de edad</small>
            </div>
          </div>
        )}
        {/* email */}
        <div className="form-group mb-3">
          <TextField
            size="small"
            variant="outlined"
            className="form-control"
            label="Email"
            type="email"
            value={email}
            onChange={emailChange}
          />
        </div>
        {email && (
          <div className="ms-2 mb-2">
            <div className={trueEmail ? "text-success" : "text-danger"}>
              <small>Email válido</small>
            </div>
          </div>
        )}
        <div className="form-group mb-3">
          <TextField
            size="small"
            variant="outlined"
            className="form-control"
            label="Teléfono"
            value={phone}
            onChange={phoneChange}
          />
        </div>
        {phone && (
          <div className="ms-2 mb-2">
            <div className={isNumber ? "text-success" : "text-danger"}>
              <small>Debe tener 10 dígitos y ser sólo números</small>
            </div>
          </div>
        )}
        <div className="form-group mb-3">
          <TextField
            size="small"
            variant="outlined"
            className="form-control"
            label="Cédula de Identidad"
            value={cedula}
            onChange={cedulaChange}
          />
        </div>
        {cedula && (
          <div className="ms-2 mb-2">
            <div className={isCI ? "text-success" : "text-danger"}>
              <small>Cédula válida</small>
            </div>
          </div>
        )}

        <div className="text-center mt-4">
          <Button
            variant="contained"
            disabled={
              !username ||
              !lastname ||
              !email ||
              !edad ||
              !phone ||
              !cedula ||
              !has3nChar ||
              !has3lChar ||
              !hasNumber ||
              !isAdulto ||
              !trueEmail ||
              !isCI
            }
            type="submit"
            onClick={notify}
          >
            Submit
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Register;
