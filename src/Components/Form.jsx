import { useState } from "react";

const Form = ({ handleSubmit }) => {
  const [formData, setFormData] = useState({
    nombre: "",
    mail: "",
  });

  const [errors, setErrors] = useState({
    nombre: "",
    mail: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));

    setErrors((prevErrors) => ({
      ...prevErrors,
      [name]: "",
    }));
  };

  const validateForm = () => {
    let valid = true;
    const newErrors = {};

    if (formData.nombre.trim() === "") {
      newErrors.nombre = "El nombre es obligatorio";
      valid = false;
    }

    if (formData.nombre.trim().length < 5) {
      newErrors.nombre = "El nombre debe tener al menos 5 caracteres";
      valid = false;
    }

    if (formData.nombre.trim().length > 30) {
      newErrors.nombre = "El nombre debe tener menos de 30 caracteres";
      valid = false;
    }


    if (formData.mail.trim().length < 5) {
      newErrors.mail = "El mail debe tener al menos 5 caracteres";
      valid = false;
    }

    if (formData.mail.trim().length > 30) {
      newErrors.mail = "El mail debe tener menos de 30 caracteres";
      valid = false;
    }

    if (formData.mail.trim() === "") {
      newErrors.mail = "El correo electrónico es obligatorio";
      valid = false;
    }

    if (!formData.mail.includes("@")) {
      newErrors.mail = "El correo electrónico debe ser un email válido";
      valid = false;
    }

    if (!formData.mail.includes(".")) {
      newErrors.mail = "El correo electrónico debe ser un email válido";
      valid = false;
    }

    setErrors(newErrors);
    return valid;
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();

    if (validateForm()) {
      handleSubmit(formData);
      console.log(1);
      setSubmitted(true);
    }
  };

  const handleRedirect = () => {
    window.location.href = "/";
  };

  return (
    <div>
      {submitted ? (
        <div className="success-message">
          <p>Gracias {formData.nombre}, te contactaremos lo antes posible vía correo electrónico.</p>
          <button onClick={handleRedirect}>Volver al inicio</button>
        </div>
      ) : (
        <form onSubmit={handleFormSubmit} className="form">
          <label>
            Ingrese su nombre
            <input
              name="nombre"
              type="text"
              value={formData.nombre}
              onChange={handleChange}
            />
            {errors.nombre && <p className="error">{errors.nombre}</p>}
          </label>
          <label>
            Ingrese su mail
            <input
              name="mail"
              type="email"
              value={formData.mail}
              onChange={handleChange}
            />
            {errors.mail && <p className="error">{errors.mail}</p>}
          </label>
          <button type="submit">Enviar</button>
        </form>
      )}
    </div>
  );
};

export default Form;