function Carousel() {
    return (
        <div className="caroousel-container">
            <div id="carouselExample" class="carousel slide ">
                <div class="carousel-indicators">
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
                </div>
                <div class="carousel-inner ">
                    <div class="carousel-item active">
                        <img src="./corte1.png" class="d-block img-carousel " alt="photo1" />
                    </div>
                    <div class="carousel-item">
                        <img src="./corte2.png" class="d-block img-carousel " alt="photo2" />
                    </div>
                    <div class="carousel-item">
                        <img src="./corte3.png" class="d-block img-carousel " alt="photo3" />
                    </div>
                </div>
                <button class="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
                    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Previous</span>
                </button>
                <button class="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
                    <span class="carousel-control-next-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Next</span>
                </button>
            </div>
            <div className="card">
                <div className="card-conten">
                    <h3>
                        NUESTROS CLIENTES
                        <br />Y SUS ESTILOS
                    </h3>
                    <div className="arrows-container">
                        <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAAAXNSR0IArs4c6QAAAKJJREFUSEvtlNENgDAIBV831UnUSXQ03UQxbUKaAjXQP/l9zZ2lYMLgSoP5+AVmh7+0aAdwAtgaVDHrFRBgyuC1kmhZ1yNzADkOAHOWadl7xLqBC24J3HBNEAKXBGFwSbA8AU1KKT41WtbcCemRwyTaFIVIrDF1SywB9dUl6RHUEtpi2uZS/APqzNxkPhkEuio4lzSz3huYv2XpwC8wWze8RTfNtzgZio62xgAAAABJRU5ErkJggg==" className="arrow" alt="fecha izquierda" />
                        <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAAAXNSR0IArs4c6QAAAKJJREFUSEvtlNENgDAIBV831UnUSXQ03UQxbUKaAjXQP/l9zZ2lYMLgSoP5+AVmh7+0aAdwAtgaVDHrFRBgyuC1kmhZ1yNzADkOAHOWadl7xLqBC24J3HBNEAKXBGFwSbA8AU1KKT41WtbcCemRwyTaFIVIrDF1SywB9dUl6RHUEtpi2uZS/APqzNxkPhkEuio4lzSz3huYv2XpwC8wWze8RTfNtzgZio62xgAAAABJRU5ErkJggg==" className="arrow" alt="fecha izquierda" />
                    </div>



                </div>
            </div>

        </div>

    )
}

export default Carousel;