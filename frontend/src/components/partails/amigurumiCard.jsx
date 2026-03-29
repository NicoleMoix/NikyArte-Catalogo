import React, { useState } from 'react';

function AmigurumiCard({ producto }) {
    const [solapaActiva, setSolapaActiva] = useState(null);
    const [fotoActual, setFotoActual] = useState(0);

    const fotosGaleria = producto.gallery ? Object.values(producto.gallery).filter(img => img !== "") : [];

    // Función para alternar solapas
    const toggleSolapa = (solapa) => {
        if (solapaActiva === solapa) setSolapaActiva(null);
        else setSolapaActiva(solapa);
    };

    const siguienteFoto = () => {
        setFotoActual((prev) => (prev + 1) % fotosGaleria.length);
    };

    const fotoAnterior = () => {
        setFotoActual((prev) => (prev === 0 ? fotosGaleria.length - 1 : prev - 1));
    };

    return (
        <div className="folder-card">

            {/* --- LADO IZQUIERDO: Imagen y Solapas --- */}
            <div className="folder-front">
                <h2 className="tittle-card">{producto.nombre}</h2>
                {/* Contenedor de tu imagen con marco */}
                <div className="folder-image-wrapper">
                    <img
                        src={producto.img_portada}
                        alt={producto.nombre}
                        className="main-image"
                    />
                    <img
                        src="/img/marco.png"
                        alt=""
                        className="frame-image"
                    />
                </div>
                <p className="subtittle-card">{producto.creadora}</p>
                {/* Las solapas interactivas */}
                <div className="folder-tabs">
                    <div
                        className={`tab bottom-tab ${solapaActiva === 'galeria' ? 'oculta' : ''}`}
                        onClick={() => toggleSolapa('galeria')}>
                        Galeria
                    </div>
                    <div
                        className={`tab top-tab ${solapaActiva === 'amigurumi' ? 'oculta' : ''}`}
                        onClick={() => toggleSolapa('amigurumi')}>
                        amigurumi
                    </div>
                    <div
                        className={`tab bottom-tab ${solapaActiva === 'patron' ? 'oculta' : ''}`}
                        onClick={() => toggleSolapa('patron')}>
                        Patrón
                    </div>

                </div>

            </div>

            {/* --- LADO DERECHO: Panel Desplegable --- */}
            <div className={`folder-content ${solapaActiva ? 'abierto' : ''}`}>
                <div className="folder-content-inner">

                    {/* Contenido dinámico según la solapa */}
                    {solapaActiva === 'galeria' && (
                        <div className="info-view">
                            <h2>Galeria de fotos</h2>
                            {/* Contenedor de la pila de fotos */}
                            <div className='div-container-view'>
                                <div className="stack-gallery">
                                    {fotosGaleria.map((img, index) => {
                                        // Lógica para saber qué clase CSS darle a la foto según su posición
                                        let posicion = "oculta";
                                        if (index === fotoActual) posicion = "activa";
                                        else if (index === (fotoActual + 1) % fotosGaleria.length) posicion = "siguiente";
                                        else if (index === (fotoActual + 2) % fotosGaleria.length) posicion = "tercera";

                                        return (
                                            <div key={index} className={`stack-item ${posicion}`}>
                                                <img src={img} alt={`Foto ${index}`} className="gallery-main-img" />
                                                <img src="/img/marco.png" alt="Marco dorado" className="gallery-frame-img" />
                                            </div>
                                            
                                        );
                                    })}
                                </div>

                                {/* Controles de la galería */}
                                <div className="gallery-controls">
                                    <button onClick={fotoAnterior}><i className="ri-arrow-left-line"></i></button>
                                    <button onClick={siguienteFoto}><i className="ri-arrow-right-line"></i></button>
                                </div>
                            </div>
                        </div>
                    )}
                    {solapaActiva === 'amigurumi' && (
                        <div className="info-view">
                            <h2>Amigurumi {producto.available}</h2>
                            {producto.available === 'Disponible' ? (
                                <div className="stock-info">
                                    <p>Tengo stock de este amigurumi, para solicitar uno escríbeme por Instagram.</p>
                                    <p>Por favor, indícame el nombre:<strong> {producto.nombre}</strong></p>
                                </div>
                            ) : (
                                <div className="stock-info">
                                    <p>No tengo disponibilidad de stock, pero puedes solicitar uno a pedido escribiéndome por mis redes.</p>
                                </div>
                            )}
                            <div className='div-btn'>
                                <button className='ig-btn'><i className="ri-instagram-line "></i></button>
                            </div>

                        </div>
                    )}

                    {solapaActiva === 'patron' && (
                        <div className="info-view">
                            <h2>Patrón PDF</h2>
                            <p>Documento descargable con instrucciones paso a paso e imágenes de apoyo para que lo tejas tú misma.</p>
                            <p><strong>Nivel:</strong> {producto.dificultad}</p>
                            
                            <div className='div-btn'>
                                <button className="card-btn">Ver en Ravelry</button>
                            </div>
                        </div>
                    )}

                </div>
            </div>


        </div>
    );
}

export default AmigurumiCard;