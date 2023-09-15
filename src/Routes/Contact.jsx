import Form from '../Components/Form';
import { useOdontoStates } from '../Context/Context';

const Contact = () => {
  const { state } = useOdontoStates();
  const themeClass = state.theme ? 'light' : 'dark';

  const handleSubmit = (formData) => {
    console.log("Formulario enviado:", formData);
  };

  return (
    <div className={`contact ${themeClass}`}>
      <h2>Want to know more?</h2>
      <p>Send us your questions and we will contact you</p>
      <Form handleSubmit={handleSubmit}/>
    </div>
  );
}

export default Contact;