// Destructure the prop.
const Register = ({ handleRegistration }) => {
  const [data, setData] = useState({
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  
  const handleSubmit = (e) => {
    e.preventDefault();
    handleRegistration(data);
  };

  return (
    <div className="register">
      <Logo title={"CryptoDucks"} />
      <p className="register__welcome">Please register.</p>
      {/* Add the submission handler as the form's onSubmit attribute. */} 
      <form className="register__form" onSubmit={handleSubmit}>
        {/* ... */}
      </form>
    </div>
  );
};