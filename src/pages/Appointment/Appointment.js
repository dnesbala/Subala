import React, { useState } from "react";
import Title from "../../components/Title/Title";
import "./Appointment.css";

const Appointment = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    service: "",
    date: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleForm = (e) => {
    e.preventDefault();
    alert(`${formData.name}, Your details has been received.`);
    setFormData({ name: "", phone: "", service: "", date: "" });
  };

  return (
    <div className="appointment">
      <Title
        title="Appointment"
        description="Make an early appointment for the services.."
      />
      <form className="appointment__form" onSubmit={handleForm}>
        <div className="form__group">
          <label htmlFor="name">Name</label>
          <input
            type="text"
            id="name"
            name="name"
            required
            value={formData.name}
            onChange={handleInputChange}
          />
        </div>
        <div className="form__group">
          <label htmlFor="phone">Phone Number</label>
          <input
            type="number"
            id="phone"
            name="phone"
            required
            value={formData.phone}
            onChange={handleInputChange}
          />
        </div>
        <div className="form__group">
          <label htmlFor="service">Service</label>
          <textarea
            id="service"
            name="service"
            cols="30"
            rows="10"
            placeholder="What service do you want?"
            required
            value={formData.service}
            onChange={handleInputChange}
          ></textarea>
        </div>
        <div className="form__group">
          <label htmlFor="date">Date</label>
          <input
            type="date"
            id="date"
            name="date"
            value={formData.date}
            onChange={handleInputChange}
          />
        </div>
        <div className="form__group">
          <input
            type="submit"
            value="Make an appointment"
            className="form__submit__button"
          />
        </div>
      </form>
    </div>
  );
};

export default Appointment;
