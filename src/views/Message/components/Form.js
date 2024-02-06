
function Form({ handleChange, handleSubmit }) {

    return (
        <section id="contact">

            <div className="contact-content">
                <div>
                    <h2 className="contact-title">

                        PONTE EN CONTACTO<br />POR CUALQUIER CONSULTA
                    </h2>
                </div>
                <form onSubmit={handleSubmit} >

                    <div class="mb-3">
                        <label for="full_name" class="form-label">
                            Nombre:
                        </label>
                        <input
                            type="text"
                            class="form-control"
                            id="full_name"
                            onChange={handleChange}
                            required
                            maxLength={15}
                        />
                        <div id="nameHelp" class="form-text">
                            Maximo de 15 caracteres.
                        </div>
                    </div>

                    <div class="mb-3">
                        <label for="email" class="form-label">
                            Correo:
                        </label>
                        <input

                            type="email"
                            class="form-control"
                            id="email"
                            aria-describedby="emailHelp"
                            onChange={handleChange}
                            required
                        />
                        <div id="emailHelp" class="form-text">
                            Nunca compartiremos su correo electrónico con nadie más.
                        </div>
                    </div>

                    <div class="mb-3">
                        <label for="cell" class="form-label">
                            Celular:
                        </label>
                        <input
                            type="number"
                            class="form-control"
                            id="cell"
                            onChange={handleChange}
                            required
                        />
                        <div id="cellHelp" class="form-text">
                            (+54)
                        </div>
                    </div>
                    <div class="mb-3">
                        <textarea
                            type="text"
                            class="form-control"
                            id="message"
                            placeholder="Escribe tu consulta..."
                            onChange={handleChange}
                        />
                    </div>

                    <button type="submit" class="btn btn-primary">
                        Submit
                    </button>
                </form>
            </div>

        </section>
    );
}

export default Form;
