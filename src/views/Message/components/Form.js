
function Form({ handleChange, handleSubmit }) {

    return (


        <section id="contact">
            <form onSubmit={handleSubmit} >

                <div class="mb-3">
                    <label for="name" class="form-label">
                        Nombre:
                    </label>
                    <input
                        type="text"
                        class="form-control"
                        id="name"
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
        </section>
    );
}

export default Form;
