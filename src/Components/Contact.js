import React from "react";

const Contact = () => {
  return (
    <div>
      <h2>It's your turn to say Hello!</h2>

      <div class="mail-form col-12 col-md-6">
        <form
          action="mailto:pulkitahuja2431@gmail.com"
          method="POST"
          enctype="multipart/form-data"
          name="EmailForm"
        >
          <input
            type="text"
            name="name"
            placeholder="Name"
            required
            class="form-control"
          />
          <input
            type="text"
            name="mail-body"
            required
            placeholder="Say Hi"
            class="form-control"
          />
          <div class="spacing"></div>
          <input type="submit" />
        </form>
      </div>
      <div class="spacing d-md-none"></div>
      <div class="social-links col-12 col-md-6">
        <h4>Here's the social me!</h4>
        <br />
        <a href="https://www.facebook.com/pulkit.ahuja.5437/">
          <i class="fab fa-facebook fa-2x"></i>
        </a>{" "}
        &ensp;&ensp;
        <a href="https://www.instagram.com/ahuja_pulkit_/">
          <i class="fab fa-instagram fa-2x"></i>
        </a>
        &ensp;&ensp;
        <a href="https://github.com/">
          <i class="fab fa-github fa-2x"></i>
        </a>
        &ensp;&ensp;
        <a href="https://www.linkedin.com/in/pulkit-ahuja-00b6681b4/">
          <i class="fab fa-linkedin fa-2x"></i>
        </a>
        <div class="spacing"></div>
        <a href="mailto:pulkitahuja2431@gmail.com">pulkitahuja2431@gmail.com</a>
      </div>
    </div>
  );
};

export default Contact;
