import Image from "next/image";
import { useState } from "react";
import sheetWhite from '@/assets/home/sheetWhite.png';
import btnX from '@/assets/home/btnX.svg';
const FormContact = ({ toggleModalContact, contact = false }) => {
  const initialData = {
    fullname: "",
    email: "",
    phone: "",
    company: "",
    interes: "",
  };

  const [formData, setFormData] = useState(initialData);
  const [errors, setErrors] = useState({});
  const [isEnabledButton, setIsEnabledButton] = useState(false);
  const [successMessage, setSuccessMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false); // Nuevo estado

  const validateField = (name, value) => {
    let error = "";

    switch (name) {
      case "fullname":
        if (!value.trim()) error = "El nombre es obligatorio.";
        break;
      case "interes":
        if (!value.trim()) error = "Seleccione un Interes.";
        break;
      case "email":
        if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value))
          error = "Ingrese un correo válido.";
        break;
      case "phone":
        if (!/^\d{10,}$/.test(value))
          error = "El teléfono debe tener al menos 10 números.";
        break;
      case "company":
        if (!value.trim()) error = "La compañía es obligatoria.";
        break;
      default:
        break;
    }

    return error;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleBlur = (e) => {
    const { name, value } = e.target;
    const error = validateField(name, value);
    setErrors((prevErrors) => ({ ...prevErrors, [name]: error }));

    setIsEnabledButton(
      Object.values({ ...errors, [name]: error }).every((err) => !err) &&
      Object.values({ ...formData, [name]: value }).every((val) => val.trim())
    );
  };

  const onSubmit = async (e) => {
    e.preventDefault();

    if (!isEnabledButton || isLoading) return;

    setIsLoading(true); // Comienza el estado de carga

    try {
      const res = await fetch("/api/process", {
        method: "POST",
        body: JSON.stringify(formData),
        headers: {
          "Content-Type": "application/json",
        },
      });

      // Simulación del envío del formulario
      setTimeout(() => {
        setSuccessMessage("¡Formulario enviado con éxito!");
        setFormData(initialData);
        setErrors({});
        setIsEnabledButton(false);

        // Ocultar mensaje de éxito después de 2 segundos
        setTimeout(() => setSuccessMessage(""), 2000);
      }, 500);
    } catch (error) {
      console.error("Error al enviar el formulario", error);
    } finally {
      setIsLoading(false); // Finaliza el estado de carga
    }
  };

  const placeholders = {
    fullname: "Nombre",
    email: "E-Mail",
    interes: "Te interesa ser:",
    phone: "Teléfono",
    company: "Empresa",
    comment: "Escríbenos tus comentarios",
  };

  const data = [
    {
      title: (
        <>
          <h2 className="text-[32px] font-bold text-white mb-12 leading-[1]">
            Deja tus datos y pronto trabajaremos juntos
          </h2>
        </>
      ),
    },
  ];
  return (
    <div className="relative w-full md:w-1/3 h-full md:h-auto max-w-3xl bg-[url(/home/bgContact.svg)] bg-cover bg-no-repeat bg-center overflow-hidden pt-4 rounded-[8px] md:rounded-[16px]">
      {contact && (
        <div className="w-full md:h-auto flex flex-row justify-start items-center px-4 mt-4">
          <div className="relative flex h-full w-full py-2 md:py-8 px-4 md:px-0">
            {/* Imagen a la izquierda */}
            <div className="w-1/3 h-full">
              <Image
                src={sheetWhite}
                alt="Descripción de la imagen"
                className="w-[100px] h-[120px]"
              />
            </div>

            {/* Texto encima de la imagen */}
            <div className="absolute left-16 md:top-[70px] top-[50px] text-left">
              {data[0].title}
            </div>
          </div>
        </div>
      )}
      <div className="w-full p-8">
        <form onSubmit={onSubmit}>
          <div className="flex flex-col md:-mt-10 gap-1 mt-6">
            {/* Campos del formulario */}
            {["fullname", "email", "interes", "phone", "company"].map(
              (field) => (
                <div key={field}>
                  <label className="text-white text-[16px]">
                    {placeholders[field]}
                  </label>
                  <input
                    id={field}
                    type={field === "email" ? "email" : "text"}
                    name={field}
                    value={formData[field]}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    className={`w-full p-1 border bg-white text-gray-800 font-['Roboto']  ${errors[field]
                      ? "border-red-500"
                      : formData[field]
                        ? "border-green-500"
                        : "border-gray-300"
                      } rounded`}
                  />
                  {errors[field] && (
                    <p className="text-red-500 text-sm mt-1">{errors[field]}</p>
                  )}
                </div>
              )
            )}
            <div>
              <label className="text-white text-[16px]">
                {placeholders.comment}
              </label>
              <textarea name="textarea" rows="2" cols="48" className="bg-white p-1 rounded w-full"></textarea>

            </div>

            {/* Botón */}
            <div className="col-span-1 md:col-span-2 flex justify-center">
              <button
                type="submit"
                disabled={!isEnabledButton || isLoading}
                className={`w-1/2 md:w-auto font-bold py-2 px-6 rounded font-['Roboto'] ${isEnabledButton && !isLoading
                  ? "bg-[#FF5143] text-white"
                  : "bg-[#72777A]/80 text-white cursor-not-allowed"
                  } flex items-center justify-center gap-2`}
              >
                {isLoading ? (
                  <svg
                    className="animate-spin h-5 w-5 text-white font-['Roboto']"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <circle
                      className="opacity-25"
                      cx="12"
                      cy="12"
                      r="10"
                      stroke="currentColor"
                      strokeWidth="4"
                    ></circle>
                    <path
                      className="opacity-75"
                      fill="currentColor"
                      d="M4 12a8 8 0 018-8v8H4z"
                    ></path>
                  </svg>
                ) : (
                  "Contáctanos"
                )}
              </button>
            </div>
          </div>
        </form>
      </div>

      {/* Mensaje de éxito */}
      {successMessage && (
        <div className="absolute bottom-0 left-0 right-0 text-center">
          <p className="bg-green-500 text-white py-2 px-4 rounded">
            {successMessage}
          </p>
        </div>
      )}

      {/* Botón para cerrar */}
      {contact && (
        <div className="absolute top-6 left-4 z-30">
          <button
            onClick={toggleModalContact}
            className="transform text-white font-bold w-full cursor-pointer hover:scale-110 transition-transform duration-200"
          >
            <div className="w-6 h-6 bg-[#FF5143] rounded-full flex items-center justify-center mb-2">
              <Image src={btnX} className="w-12  object-fill" />
            </div>
          </button>
        </div>
      )}
    </div>
  );
};

export default FormContact;
