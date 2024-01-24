function Accordion() {
    return (
        <section id="service">
            <div className="accordion" id="accordionExample">
                <div className="accordion-item">
                    <h2 className="accordion-header">
                        <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                            Corte
                        </button>
                    </h2>
                    <div id="collapseOne" className="accordion-collapse collapse show" data-bs-parent="#accordionExample">
                        <div className="accordion-body">
                            <p><strong>Clásico o moderno</strong>. <br /> Marcamos tendencia combinando máquinas y tijeras.</p>
                        </div>
                    </div>
                </div>
                <div className="accordion-item">
                    <h2 className="accordion-header">
                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                            Barba
                        </button>
                    </h2>
                    <div id="collapseTwo" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                        <div className="accordion-body">
                            <p><strong>Afeitada tradicional o recorte de barba</strong>. <br /> Contamos con el servicio de toalla caliente.</p>
                        </div>
                    </div>
                </div>
                <div className="accordion-item">
                    <h2 className="accordion-header">
                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                            Niños
                        </button>
                    </h2>
                    <div id="collapseThree" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                        <div className="accordion-body">
                            <p>El <strong>Mini Raustin</strong> <br />sabe lo que quiere, por eso atendemos sus antojos.</p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="image-local">
                <img src="./local2.png" alt="img-local" className="img-local2" />

            </div>
        </section>
    )
}

export default Accordion;