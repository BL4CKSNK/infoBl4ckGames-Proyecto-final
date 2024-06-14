DROP DATABASE IF EXISTS Login;
CREATE DATABASE Login;
USE Login;

CREATE TABLE Usuarios (
    idUsuarios INT AUTO_INCREMENT PRIMARY KEY NOT NULL,
    NombreUsuario VARCHAR(50) NOT NULL,
    Email VARCHAR(100) NOT NULL,
    contra VARCHAR(100) NOT NULL,
    imgPerfil VARCHAR(100),
    inventarioJuego VARCHAR(1000)
);
CREATE TABLE Juego (
    idJuego INT AUTO_INCREMENT PRIMARY KEY,
    Titulo VARCHAR(100),
    Descripcion TEXT,
    Imagen VARCHAR(100), 
    Precio FLOAT,
    FechaLanzamiento DATE
);
CREATE TABLE UsuarioJuego (
    id INT AUTO_INCREMENT PRIMARY KEY,
    idUsuario INT,
    idJuego INT,
    FOREIGN KEY (idUsuario) REFERENCES Usuarios(idUsuarios) ON DELETE CASCADE,
    FOREIGN KEY (idJuego) REFERENCES Juego(idJuego) ON DELETE CASCADE
);
CREATE TABLE Categoria (
   idCategoria INT AUTO_INCREMENT PRIMARY KEY,
   Nombre VARCHAR(100)
);
CREATE TABLE JuegoCategoria (
    idJuego INT,
    idCategoria INT,
    PRIMARY KEY (idJuego, idCategoria),
    FOREIGN KEY (idJuego) REFERENCES Juego(idJuego) ON DELETE CASCADE,
    FOREIGN KEY (idCategoria) REFERENCES Categoria(idCategoria) ON DELETE CASCADE
);
CREATE TABLE Imagenes (
    idImagen INT AUTO_INCREMENT PRIMARY KEY,
    idJuego INT,
    RutaImagen VARCHAR(100),
    FOREIGN KEY (idJuego) REFERENCES Juego(idJuego) ON DELETE CASCADE
);

CREATE TABLE Comentarios (
    idComentario INT AUTO_INCREMENT PRIMARY KEY,
    Usuario_ID INT NOT NULL,
    TextoComentario TEXT ,
    ValoracionComentario INT DEFAULT 0,
    idJuego INT,
    FOREIGN KEY (Usuario_ID) REFERENCES Usuarios(idUsuarios)ON DELETE CASCADE,
    FOREIGN KEY (idJuego) REFERENCES Juego(idJuego) ON DELETE CASCADE
);
CREATE TABLE Valoraciones (
    idValoracion INT AUTO_INCREMENT PRIMARY KEY NOT NULL,
    idUsuario INT NOT NULL,
    idComentario INT NOT NULL,
    valoracion INT ,
    UNIQUE KEY unique_user_comment (idUsuario, idComentario),
    FOREIGN KEY (idUsuario) REFERENCES Usuarios(idUsuarios) ON DELETE CASCADE,
    FOREIGN KEY (idComentario) REFERENCES Comentarios(idComentario) ON DELETE CASCADE
);

CREATE TABLE Requisitos (
    idRequisitos INT AUTO_INCREMENT PRIMARY KEY,
    Juego_ID INT,
    Recomendados TEXT,
    Minimos TEXT,
    FOREIGN KEY (Juego_ID) REFERENCES Juego(idJuego) ON DELETE CASCADE
);


CREATE TABLE Carrito (
    idCarrito INT AUTO_INCREMENT PRIMARY KEY,
    idUsuarios INT,
    FOREIGN KEY (idUsuarios) REFERENCES Usuarios(idUsuarios)ON DELETE CASCADE
);
CREATE TABLE CarritoJuego (
    idCarrito INT,
    idJuego INT,
    Unidades INT,
    PRIMARY KEY (idCarrito, idJuego),
    FOREIGN KEY (idCarrito) REFERENCES Carrito(idCarrito)ON DELETE CASCADE,
    FOREIGN KEY (idJuego) REFERENCES Juego(idJuego) ON DELETE CASCADE
);

CREATE TABLE Puntuaciones (
    idPuntuacion INT AUTO_INCREMENT PRIMARY KEY NOT NULL,
    idJuego INT NOT NULL,
    idUsuario INT NOT NULL,
    Puntuacion INT DEFAULT 0,
    FOREIGN KEY (idJuego) REFERENCES Juego(idJuego) ON DELETE CASCADE,
    FOREIGN KEY (idUsuario) REFERENCES Usuarios(idUsuarios) ON DELETE CASCADE
);



INSERT INTO Usuarios (NombreUsuario, Email, contra)
VALUES ('admin', 'admin@gmail.com', 'admin');




INSERT INTO Juego (Titulo, Descripcion, Imagen, Precio, FechaLanzamiento) 
VALUES ('Hogwarts Legacy', 
        'Hogwarts Legacy es un proximo videojuego de rol de accion de mundo abierto ambientado en el mundo magico de Harry Potter, desarrollado por Portkey Games y publicado por Warner Bros. Interactive Entertainment.', 
        'http://localhost/Login/img/img1.jpg', 49.58, '2023-02-10');


INSERT INTO Requisitos (Juego_ID, Minimos, Recomendados)
VALUES (1, 
        'Sistema operativo: 64-bit Windows 10\r\nCPU: Intel Core i5 6600 (3.3 GHz) o AMD Ryzen 5 1400\r\nTarjeta grafica: NVIDIA GeForce GTX 960 GB o AMD Radeon RX 470 4GB\r\nRAM: 16 GB\r\nDirectX: Version 12\r\nDisco duro: 85 GB HDD', 
        'Sistema operativo: 64-bit Windows 10\r\nCPU: Intel Core i7 8700 (3.2 GHz) o AMD Ryzen 5 3600\r\nTarjeta grafica: NVIDIA GeForce GTX 1080 Ti o AMD Radeon RX 5700 4\r\nRAM: 16GB\r\nDirectX: Version 12\r\nEspacio requerido en disco: 85 GB SSD');

INSERT INTO Imagenes (idJuego, RutaImagen) VALUES (1, 'http://localhost/Login/img/h1.jpg');   
INSERT INTO Imagenes (idJuego, RutaImagen) VALUES (1, 'http://localhost/Login/img/h2.jpg'); 
INSERT INTO Imagenes (idJuego, RutaImagen) VALUES (1, 'http://localhost/Login/img/h3.jpg');





INSERT INTO Juego (Titulo, Descripcion, Imagen, Precio, FechaLanzamiento) 
VALUES ('Grand Theft Auto V',
        'Grand Theft Auto V para PC ofrece a los jugadores la opcion de explorar el galardonado mundo de Los Santos y el condado de Blaine con una resolucion de 4K y disfrutar del juego a 60 fotogramas por segundo.',
        'http://localhost/Login/img/img2.jpg', 8.26, '2015-04-14');


INSERT INTO Requisitos (Juego_ID, Minimos, Recomendados)
VALUES (2,
        'Requiere un procesador y un sistema operativo de 64 bits\r\nSO: Windows 10 de 64 bits\r\nProcesador: Intel Core 2 Quad CPU Q6600 a 2,4 GHz (4 CPU)/AMD Phenom 9850 Quad-Core (4 CPU) a 2,5 GHz\r\nMemoria: 4 GB de RAM\r\nGraficos: NVIDIA 9800 GT 1 GB/AMD HD 4870 1 GB (DX 10, 10.1, 11)\r\nAlmacenamiento: 110 GB de espacio disponible\r\nTarjeta de sonido: compatible con DirectX 10',

        'Requiere un procesador y un sistema operativo de 64 bits\r\nSO: Windows 10 de 64 bits\r\nProcesador: Intel Core i5 3470 a 3,2 GHz (4 CPU)/AMD X8 FX-8350 a 4 GHz (8 CPU)\r\nMemoria: 8 GB de RAM\r\nGraficos: NVIDIA GTX 660 2 GB/AMD HD7870 2 GB\r\nAlmacenamiento: 110 GB de espacio disponible\r\nTarjeta de sonido: compatible con DirectX 10');


INSERT INTO Imagenes (idJuego, RutaImagen) VALUES (2, 'http://localhost/Login/carrousel/carrouselGta1.jpg');   
INSERT INTO Imagenes (idJuego, RutaImagen) VALUES (2, 'http://localhost/Login/carrousel/carrouselGta2.jpg'); 
INSERT INTO Imagenes (idJuego, RutaImagen) VALUES (2, 'http://localhost/Login/carrousel/carrouselGta3.jpg');




INSERT INTO Juego (Titulo, Descripcion, Imagen, Precio, FechaLanzamiento) 
VALUES ("Tom Clancys Rainbow Six Siege",
        "Tom Clancys Rainbow Six Siege es un shooter tactico realista por equipos donde una cuidadosa planificacion y ejecucion son claves para la victoria.",
        'http://localhost/Login/img/img3.jpg', 8.26, '2015-12-01');


INSERT INTO Requisitos (Juego_ID, Minimos, Recomendados)
VALUES (3,
        'SO : Originally released for Windows 7, the game can be played on Windows 10 and Windows 11 OS\r\nProcesador: Intel Core i3 560  3.3 GHz or AMD Phenom II X4 945 @ 3.0 GHz\r\nMemoria: 6 GB de RAM\r\nGraficos: NVIDIA GeForce GTX 460 or AMD Radeon HD 5870 (DirectX-11 compliant with 1GB of VRAM)\r\nRed: Conexion de banda ancha a Internet\r\nAlmacenamiento: 61 GB de espacio disponible\r\nTarjeta de sonido: DirectX 9.0c compatible sound card with latest drivers', 
        'SO : Originally released for Windows 7, the game can be played on Windows 10 and Windows 11 OS\r\nProcesador: Intel Core i5-2500K  3.3 GHz or better or AMD FX-8120 @ 3.1 Ghz or better\r\nMemoria: 8 GB de RAM\r\nGráficos: NVIDIA GeForce GTX 670 (or GTX 760 / GTX 960) or AMD Radeon HD 7970 (or R9 280x [2GB VRAM] / R9 380 / Fury X)\r\nRed: Conexion de banda ancha a Internet\r\nAlmacenamiento: 61 GB de espacio disponible\r\nTarjeta de sonido: DirectX 9.0c compatible sound card 5.1 with latest drivers');


INSERT INTO Imagenes (idJuego, RutaImagen) VALUES (3, 'http://localhost/Login/carrousel/carrouselRa1.jpg');   
INSERT INTO Imagenes (idJuego, RutaImagen) VALUES (3, 'http://localhost/Login/carrousel/carrouselRa2.jpg'); 
INSERT INTO Imagenes (idJuego, RutaImagen) VALUES (3, 'http://localhost/Login/carrousel/carrouselRa3.jpg'); 




INSERT INTO Juego (Titulo, Descripcion, Imagen, Precio, FechaLanzamiento) 
VALUES ('Counter-Strike 2',
        'Durante las dos ultimas decadas, Counter Strike ha proporcionado una experiencia competitiva de primer nivel para los millones de jugadores de todo el mundo que contribuyeron a darle forma. Ahora el proximo capitulo en la historia de CS esta a punto de comenzar. Hablamos de Counter Strike 2.',
        'http://localhost/Login/img/img4.jpg', 8.26, '2012-08-21');


INSERT INTO Requisitos (Juego_ID, Minimos, Recomendados)
VALUES (4,
        'SO: Windows 10.\r\nProcesador: CPU de 4 subprocesos - Intel Core i5 750 o superior.\r\nMemoria: 8 GB de RAM\r\nGraficos: La tarjeta grafica de ser de al menos 1 GB y debe ser compatible con DirectX 11 y Shader Model 5.0.\r\nDirectX: Version 11\r\nAlmacenamiento: 85 GB de espacio disponible', 
        '');


INSERT INTO Imagenes (idJuego, RutaImagen) VALUES (4, 'http://localhost/Login/Carrousel/carrouselCoun1.jpg');   
INSERT INTO Imagenes (idJuego, RutaImagen) VALUES (4, 'http://localhost/Login/Carrousel/carrouselCoun2.jpg'); 
INSERT INTO Imagenes (idJuego, RutaImagen) VALUES (4, 'http://localhost/Login/Carrousel/carrouselCoun3.jpg');



INSERT INTO Juego (Titulo, Descripcion, Imagen, Precio, FechaLanzamiento) 
VALUES ('Sea of Thieves: 2024 Edition',
        'Sea of Thieves es un exitoso juego de aventuras piratas que ofrece la experiencia pirata por excelencia de saquear tesoros perdidos, batallas intensas, vencer monstruos marinos y mas. Sumergete en esta edicion revisada del juego, que incluye acceso a medios digitales de bonificacion.',
        'http://localhost/Login/img/img5.jpg', 33.06, '2020-05-03');


INSERT INTO Requisitos (Juego_ID, Minimos, Recomendados)
VALUES (5,
        'Requiere un procesador y un sistema operativo de 64 bits\r\nSO: Windows 10\r\nProcesador: Intel Q9450 @ 2.6GHz - AMD Phenom II X6 @ 3.3 GHz\r\nMemoria: 4 GB de RAM\r\nGraficos: Nvidia GeForce GTX 650 - AMD Radeon 7750 - Intel A310\r\nDirectX: Version 11\r\nAlmacenamiento: 100 GB de espacio disponible', 
        'Requiere un procesador y un sistema operativo de 64 bits\r\nSO: Windows 10\r\nProcesador: Intel i7 4790 @4Ghz - AMD Ryzen 5 1600 @3.6Ghz\r\nMemoria: 16 GB de RAM\r\nGraficos: Nvidia Geforce GTX 1080ti - AMD Radeon Rx Vega 64 - Intel A750\r\nDirectX: Version 12\r\nAlmacenamiento: 100 GB de espacio disponible');


INSERT INTO Imagenes (idJuego, RutaImagen) VALUES (5, 'http://localhost/Login/Carrousel/carrouselSea1.jpg');   
INSERT INTO Imagenes (idJuego, RutaImagen) VALUES (5, 'http://localhost/Login/Carrousel/carrouselSea2.jpg'); 
INSERT INTO Imagenes (idJuego, RutaImagen) VALUES (5, 'http://localhost/Login/Carrousel/carrouselSea3.jpg');



INSERT INTO Juego (Titulo, Descripcion, Imagen, Precio, FechaLanzamiento) 
VALUES ('Stardew Valley',
        'Acabas de heredar la vieja parcela agricola de tu abuelo de Stardew Valley. Decides partir hacia una nueva vida con unas herramientas usadas y algunas monedas ¿Te ves capaz de vivir de la tierra y convertir estos campos descuidados en un hogar prospero?',
        'http://localhost/Login/img/img6.jpg', 11.56, '2016-02-26');


INSERT INTO Requisitos (Juego_ID, Minimos, Recomendados)
VALUES (6,
        'SO *: Windows Vista or greater\r\nProcesador: 2 Ghz\r\nMemoria: 2 GB de RAM\r\nGraficos: 256 mb video memory, shader model 3.0+\r\nDirectX: Version 10\r\nAlmacenamiento: 500 MB de espacio disponible', 
        '');

INSERT INTO Imagenes (idJuego, RutaImagen) VALUES (6, 'http://localhost/Login/Carrousel/carrouselStar1.jpg');   
INSERT INTO Imagenes (idJuego, RutaImagen) VALUES (6, 'http://localhost/Login/Carrousel/carrouselStar2.jpg'); 
INSERT INTO Imagenes (idJuego, RutaImagen) VALUES (6, 'http://localhost/Login/Carrousel/carrouselStar3.jpg');



INSERT INTO Juego (Titulo, Descripcion, Imagen, Precio, FechaLanzamiento) 
VALUES ('STAR WARS Jedi: Survivor',
        'La historia de Cal Kestis continua en STAR WARS Jedi: Survivor, un juego de accion en tercera persona de proporciones galacticas.',
        'http://localhost/Login/img/img7.jpg', 57.84, '2023-04-28');


INSERT INTO Requisitos (Juego_ID, Minimos, Recomendados)
VALUES (7,
        'Requiere un procesador y un sistema operativo de 64 bits\r\
        SO: Windows 10 64-bit\r\
        Procesador: 4 core / 8 threads | Intel Core i7-7700 | Ryzen 5 1400\r\
        Memoria: 8 GB de RAM\r\
        Graficos: 8GB VRAM | GTX 1070 | Radeon RX 580\r\
        DirectX: Version 12\r\
        Red: Conexion de banda ancha a Internet\r\
        Almacenamiento: 155 GB de espacio disponible', 

        'Requiere un procesador y un sistema operativo de 64 bits\r\
        SO: Windows 10 64-bit\r\
        Procesador: 4 core / 8 threads | Intel Core i5 11600K | Ryzen 5 5600X\r\
        Memoria: 16 GB de RAM\r\
        Graficos: 8GB VRAM | RTX2070 | RX 6700 XT\r\
        DirectX: Version 12\r\
        Red: Conexión de banda ancha a Internet\r\
        Almacenamiento: 155 GB de espacio disponible\r\
        Notas adicionales: Internet required for non-optional');

INSERT INTO Imagenes (idJuego, RutaImagen) VALUES (7, 'http://localhost/Login/Carrousel/carrouselJedi1.jpg');   
INSERT INTO Imagenes (idJuego, RutaImagen) VALUES (7, 'http://localhost/Login/Carrousel/carrouselJedi2.jpg'); 
INSERT INTO Imagenes (idJuego, RutaImagen) VALUES (7, 'http://localhost/Login/Carrousel/carrouselJedi3.jpg');



INSERT INTO Juego (Titulo, Descripcion, Imagen, Precio, FechaLanzamiento) 
VALUES ('The Binding of Isaac: Rebirth',
        'The Binding of Isaac: Rebirth is a randomly generated action RPG shooter with heavy Rogue-like elements. Following Isaac on his journey players will find bizarre treasures that change Isaac  form giving him super human abilities and enabling him to fight off droves of mysterious creatures, discover secrets and fight his way.',
        'http://localhost/Login/img/img8.jpg', 12.39, '2014-11-04');


INSERT INTO Requisitos (Juego_ID, Minimos, Recomendados)
VALUES (8,
        'SO: XP\r\
        Procesador: Core 2 Duo\r\
        Memoria: 2 GB de RAM\r\
        Graficos: Discreet video card\r\
        Almacenamiento: 449 MB de espacio disponible\r\
        Tarjeta de sonido: Yes',

        'SO: Windows 8 / 7 / Vista / XP\r\
        Procesador: 2.4 GHz Quad Core 2.0 (or higher)\r\
        Memoria: 8 GB de RAM\r\
        Graficos: Intel HD Graphics 4000 and higher, ATI Radeon HD-Series 4650 and higher, Nvidia GeForce 2xx-Series and up\r\
        Almacenamiento: 449 MB de espacio disponible\r\
        Tarjeta de sonido: Yes');


INSERT INTO Imagenes (idJuego, RutaImagen) VALUES (8, 'http://localhost/Login/Carrousel/carrouselIsac1.jpg');   
INSERT INTO Imagenes (idJuego, RutaImagen) VALUES (8, 'http://localhost/Login/Carrousel/carrouselIsac2.jpg'); 
INSERT INTO Imagenes (idJuego, RutaImagen) VALUES (8, 'http://localhost/Login/Carrousel/carrouselIsac3.jpg');


        
INSERT INTO Juego (Titulo, Descripcion, Imagen, Precio, FechaLanzamiento) 
VALUES ('Grand Theft Auto IV: The Complete Edition',
        'Niko Bellic, Johnny Klebitz y Luis Lopez tienen una cosa en comun: viven en la peor ciudad de Estados Unidos. En Liberty City, el dinero y el estatus social lo son todo, y dependiendo de si los tienes o no vivirás en el cielo o en el infierno.',
        'http://localhost/Login/img/img9.jpg', 16.52, '2008-03-20');

INSERT INTO Requisitos (Juego_ID, Minimos, Recomendados)
VALUES (9,
        'SO: Windows 7 con Service Pack 1.\r\
        Procesador: Intel Core 2 Duo a 1.8 GHz, AMD Athlon X2 64 a 2.4 GHz\r\
        Memoria: 1.5 GB de RAM\r\
        Graficos: nVidia 7900 con 256 MB / ATI X1900 con 256 MB\r\
        Version de DirectX: DirectX 9.0c\r\
        Disco Duro: 22 GB de espacio libre\r\
        Sonido: Dispositivo de sonido 5.1\r\
        Otros Requisitos: Es necesario disponer de conexion a Internet para la activación inicial; para jugar online es necesario iniciar sesión en Rockstar Games Social Club (necesario ser mayor de 13 años para registrarse); es necesaria la instalacion de software adicional, incluyendo DirectX y .NET Framework 3.0 de Microsoft.',
        '');

INSERT INTO Imagenes (idJuego, RutaImagen) VALUES (9, 'http://localhost/Login/Carrousel/carrouselGta4-1.jpg');   
INSERT INTO Imagenes (idJuego, RutaImagen) VALUES (9, 'http://localhost/Login/Carrousel/carrouselGta4-2.jpg'); 
INSERT INTO Imagenes (idJuego, RutaImagen) VALUES (9, 'http://localhost/Login/Carrousel/carrouselGta4-3.jpg');



INSERT INTO Juego (Titulo, Descripcion, Imagen, Precio, FechaLanzamiento) 
VALUES ('ARK: Survival Ascended',
        'Ark se reinventa desde cero en esta proxima generacion de tecnologia de videojuegos con Unreal Engine 5! Forma una tribu, domestica y cria cientos de dinosaurios unicos y criaturas primitivas, exploran, cree, construyen y luchan hasta la cima de la cadena alimentaria. Tu nuevo mundo te espera!',
        'http://localhost/Login/img/img10.jpg', 16.52, '2023-10-26');

INSERT INTO Requisitos (Juego_ID, Minimos, Recomendados)
VALUES (10,
        'SO: Windows 10/11 with updates\r\
        Procesador: AMD Ryzen 5 2600X, Intel Core i7-6800K\r\
        Memoria: 16 GB de RAM\r\
        Graficos: AMD Radeon RX 5600 XT, NVIDIA GeForce 1080\r\
        DirectX: Version 12\r\
        Red: Conexión de banda ancha a Internet\r\
        Almacenamiento: 70 GB de espacio disponible\r\
        Notas adicionales: SSD Required',

        'SO: Windows 10/11 with updates\r\
        Procesador: AMD Ryzen 5 3600X, Intel i5-10600K\r\
        Memoria: 32 GB de RAM\r\
        Graficos: AMD Radeon RX 6800, NVIDIA GeForce RTX 3080\r\
        DirectX: Version 12\r\
        Red: Conexión de banda ancha a Internet\r\
        Almacenamiento: 70 GB de espacio disponible\r\
        Notas adicionales: SSD Required');

INSERT INTO Imagenes (idJuego, RutaImagen) VALUES (10, 'http://localhost/Login/Carrousel/carrouselArk1.jpg');   
INSERT INTO Imagenes (idJuego, RutaImagen) VALUES (10, 'http://localhost/Login/Carrousel/carrouselArk2.jpg'); 
INSERT INTO Imagenes (idJuego, RutaImagen) VALUES (10, 'http://localhost/Login/Carrousel/carrouselArk3.jpg');




INSERT INTO Juego (Titulo, Descripcion, Imagen, Precio, FechaLanzamiento) 
VALUES ('Diablo IV', 
        'Unete a la lucha por Santuario en Diablo IV, la mejor aventura de rol y accion. Vive la campana aclamada por la critica y el nuevo contenido de temporada.', 
        'http://localhost/Login/img/img11.jpg', 41.31, '2023-10-17');

INSERT INTO Requisitos (Juego_ID, Minimos, Recomendados)
VALUES (11, 
        'Sistema Operativo: Windows 10 de 64 bits versión 1909 o posterior\r\nCPU: Intel Core i5-2500K o AMD FX-8350\r\nTarjeta grafica: NVIDIA GeForce GTX 660 o Intel Arc A380 o AMD Radeon R9 280\r\nRAM: 8 GB de RAM\r\nDirectX: Version 12\r\nAlmacenamiento: 90 GB de espacio disponible', 
        'Sistema operativo: Windows 10 de 64 bits versión 1909 o posterior\r\nCPU: Intel Core i5-4670K o AMD Ryzen 1300X\r\nTarjeta grafica: NVIDIA GeForce GTX 970 o Intel Arc A750 o AMD Radeon RX 470\r\nRAM: 16GB\r\nDirectX: Version 12\r\nAlmacenamiento: 90 GB de espacio disponible');

INSERT INTO Imagenes (idJuego, RutaImagen) VALUES (11, 'http://localhost/Login/Carrousel/carrouselDiablo1.jpg');
INSERT INTO Imagenes (idJuego, RutaImagen) VALUES (11, 'http://localhost/Login/Carrousel/carrouselDiablo2.jpg'); 
INSERT INTO Imagenes (idJuego, RutaImagen) VALUES (11, 'http://localhost/Login/Carrousel/carrouselDiablo3.jpg');





INSERT INTO Juego (Titulo, Descripcion, Imagen, Precio, FechaLanzamiento) 
VALUES ('Cuphead', 
        'Cuphead is a classic run and gun action game heavily focused on boss battles. Inspired by cartoons of the 1930s, the visuals and audio are painstakingly created with the same techniques of the era, i.e. traditional hand drawn cel animation, watercolor backgrounds, and original jazz recordings.', 
        'http://localhost/Login/img/img12.jpg', 16.52, '2017-09-29');

INSERT INTO Requisitos (Juego_ID, Minimos, Recomendados)
VALUES (12, 
        'Sistema Operativo: Windows 7\r\nCPU: Intel Core2 Duo E8400, 3.0GHz or AMD Athlon 64 X2 6000+, 3.0GHz or higher\r\nTarjeta grafica: Geforce 9600 GT or AMD HD 3870 512MB or higher\r\nRAM: 3 GB de RAM\r\nDirectX: Version 11\r\nAlmacenamiento: 4 GB de espacio disponible', 
        'Sistema operativo: Windows 7\r\nCPU: Intel Core2 Duo E8400, 3.0GHz or AMD Athlon 64 X2 6000+, 3.0GHz or higher\r\nTarjeta grafica: Geforce 9600 GT or AMD HD 3870 512MB or higher\r\nRAM: 3 GB de RAM\r\nDirectX: Version 11\r\nAlmacenamiento: 4 GB de espacio disponible');

INSERT INTO Imagenes (idJuego, RutaImagen) VALUES (12, 'http://localhost/Login/Carrousel/carrouselCup1.jpg');
INSERT INTO Imagenes (idJuego, RutaImagen) VALUES (12, 'http://localhost/Login/Carrousel/carrouselCup2.jpg'); 
INSERT INTO Imagenes (idJuego, RutaImagen) VALUES (12, 'http://localhost/Login/Carrousel/carrouselCup3.jpg');





INSERT INTO Juego (Titulo, Descripcion, Imagen, Precio, FechaLanzamiento) 
VALUES ('RimWorld', 
        'Un simulador de colonias de ciencia ficcion conducido por una IA cuentacuentos inteligente. Genera historias simulando la psicologia, la ecologia, tiroteos, combates cuerpo a cuerpo, el clima, los biomas, la diplomacia, las relaciones interpersonales, el arte, la medicina, el comercio y mucho mas.', 
        'http://localhost/Login/img/img13.jpg', 26.44, '2018-10-17');

INSERT INTO Requisitos (Juego_ID, Minimos, Recomendados)
VALUES (13, 
        'Sistema Operativo: Windows 7\r\nCPU: Core 2 Duo\r\nTarjeta grafica: Intel HD Graphics 4000 or other shader model 4.0\r\nRAM: 4 GB de RAM\r\nAlmacenamiento: 1 GB de espacio disponible', 
        'Sistema operativo: Windows 7\r\nCPU: Core 2 Duo\r\nTarjeta grafica: Intel HD Graphics 4000 or other shader model 4.0\r\nRAM: 4 GB de RAM\r\nAlmacenamiento: 1 GB de espacio disponible');

INSERT INTO Imagenes (idJuego, RutaImagen) VALUES (13, 'http://localhost/Login/Carrousel/carrouselRinw1.jpg');
INSERT INTO Imagenes (idJuego, RutaImagen) VALUES (13, 'http://localhost/Login/Carrousel/carrouselRinw2.jpg'); 
INSERT INTO Imagenes (idJuego, RutaImagen) VALUES (13, 'http://localhost/Login/Carrousel/carrouselRinw3.jpg');





INSERT INTO Juego (Titulo, Descripcion, Imagen, Precio, FechaLanzamiento) 
VALUES ('Dead by Daylight', 
        'Dead by Daylight is a multiplayer (4vs1) horror game where one player takes on the role of the savage Killer, and the other four players play as Survivors, trying to escape the Killer and avoid being caught and killed.', 
        'http://localhost/Login/img/img14.jpg', 16.52, '2016-06-14');

INSERT INTO Requisitos (Juego_ID, Minimos, Recomendados)
VALUES (14, 
        'Sistema Operativo: Windows 10 64-bit Operating System\r\nCPU: Intel Core i3-4170 or AMD FX-8120\r\nTarjeta grafica: DX11 Compatible GeForce GTX 460 1GB or AMD HD 6850 1GB\r\nRAM: 8 GB de RAM\r\nDirectX: Version 11\r\nAlmacenamiento: 50 GB de espacio disponible', 
        'Sistema operativo: Windows 10 64-bit Operating System\r\nCPU: Intel Core i3-4170 or AMD FX-8300 or higher\r\nTarjeta grafica: DX11 Compatible GeForce 760 or AMD HD 8800 or higher with 4GB of RAM\r\nRAM: 8 GB de RAM\r\nDirectX: Version 11\r\nAlmacenamiento: 50 GB de espacio disponible');

INSERT INTO Imagenes (idJuego, RutaImagen) VALUES (14, 'http://localhost/Login/Carrousel/carrouselDB1.jpg');
INSERT INTO Imagenes (idJuego, RutaImagen) VALUES (14, 'http://localhost/Carrousel/carrouselDB2.jpg'); 
INSERT INTO Imagenes (idJuego, RutaImagen) VALUES (14, 'http://localhost/Login/Carrousel/carrouselDB3.jpg');




INSERT INTO Juego (Titulo, Descripcion, Imagen, Precio, FechaLanzamiento) 
VALUES ('Little Nightmares', 
        'Immerse yourself in Little Nightmares, a dark whimsical tale that will confront you with your childhood fears! Help Six escape The Maw – a vast, mysterious vessel inhabited by corrupted souls looking for their next meal.', 
        'http://localhost/Login/img/img15.jpg', 16.52, '2017-04-28');

INSERT INTO Requisitos (Juego_ID, Minimos, Recomendados)
VALUES (15, 
        'Sistema Operativo: Windows 7, 64-bit\r\nCPU: Intel CPU Core i3\r\nTarjeta grafica: Nvidia GTX 460\r\nRAM: 4 GB de RAM\r\nDirectX: Version 11\r\nAlmacenamiento: 10 GB de espacio disponible', 
        'Sistema operativo: Windows 7, 64-bit\r\nCPU: Intel CPU Core i7\r\nTarjeta grafica: Nvidia GPU GeForce GTX 660\r\nRAM: 8 GB de RAM\r\nDirectX: Version 11\r\nAlmacenamiento: 10 GB de espacio disponible');

INSERT INTO Imagenes (idJuego, RutaImagen) VALUES (15, 'http://localhost/Login/Carrousel/carrouselLite1.jpg');
INSERT INTO Imagenes (idJuego, RutaImagen) VALUES (15, 'http://localhost/Login/Carrousel/carrouselLite2.jpg'); 
INSERT INTO Imagenes (idJuego, RutaImagen) VALUES (15, 'http://localhost/Login/Carrousel/carrouselLite3.jpg');



INSERT INTO Juego (Titulo, Descripcion, Imagen, Precio, FechaLanzamiento) 
VALUES ('Grounded', 
        'The world is a vast, beautiful and dangerous place – especially when you have been shrunk to the size of an ant. Can you thrive alongside the hordes of giant insects, fighting to survive the perils of the backyard?', 
        'http://localhost/Login/img/img16.jpg', 33.05, '2022-09-27');

INSERT INTO Requisitos (Juego_ID, Minimos, Recomendados)
VALUES (16, 
        'Sistema Operativo: Windows 10 64bit\r\nCPU: Intel Core i3-3225\r\nTarjeta grafica: Nvidia GTX 650 Ti\r\nRAM: 4 GB de RAM\r\nAlmacenamiento: 8 GB de espacio disponible', 
        'Sistema operativo: Windows 11 64bit\r\nCPU: Intel Core i7-7700K or Ryzen 5 1600\r\nTarjeta grafica: GeForce GTX 1060 6GB or Radeon RX 470\r\nRAM: 8 GB de RAM\r\nAlmacenamiento: 8 GB de espacio disponible');

INSERT INTO Imagenes (idJuego, RutaImagen) VALUES (16, 'http://localhost/Login/Carrousel/carrouselGroun1.jpg');
INSERT INTO Imagenes (idJuego, RutaImagen) VALUES (16, 'http://localhost/Login/Carrousel/carrouselGroun2.jpg'); 
INSERT INTO Imagenes (idJuego, RutaImagen) VALUES (16, 'http://localhost/Login/Carrousel/carrouselGroun3.jpg');



INSERT INTO Juego (Titulo, Descripcion, Imagen, Precio, FechaLanzamiento) 
VALUES ('Another Crabs Treasure', 
        'En un reino submarino trepidante al borde del colapso, un cangrejo  se embarca en una busqueda del tesoro para recuperar su caparazon robado. El segundo videojuego de AGGRO CRAB.', 
        'http://localhost/Login/img/img17.jpg', 24.79, '2024-04-25');

INSERT INTO Requisitos (Juego_ID, Minimos, Recomendados)
VALUES (17, 
        'Sistema Operativo: Windows 10 or newer, 64-bit\r\nCPU: 2.5 GHz or faster\r\nTarjeta grafica: Nvidia GTX 970 or equivalent\r\nRAM: 4 GB de RAM\r\nDirectX: Version 10\r\nAlmacenamiento: 6 GB de espacio disponible', 
        'Sistema operativo: Windows 10 or newer, 64-bit\r\nCPU: 2.5 GHz or faster\r\nTarjeta grafica: Nvidia GTX 970 or equivalent\r\nRAM: 4 GB de RAM\r\nDirectX: Version 10\r\nAlmacenamiento: 6 GB de espacio disponible');

INSERT INTO Imagenes (idJuego, RutaImagen) VALUES (17, 'http://localhost/Login/Carrousel/carrouselAnot1.jpg');
INSERT INTO Imagenes (idJuego, RutaImagen) VALUES (17, 'http://localhost/Login/Carrousel/carrouselAnot2.jpg'); 
INSERT INTO Imagenes (idJuego, RutaImagen) VALUES (17, 'http://localhost/Login/Carrousel/carrouselAnot3.jpg');




INSERT INTO Juego (Titulo, Descripcion, Imagen, Precio, FechaLanzamiento) 
VALUES ('HELLDIVERS 2', 
        'La ultima linea ofensiva de la galaxia. Enlistate en los Helldivers y unete a la lucha por la libertad en una galaxia hostil en este juego de disparos en tercera persona frenetico y feroz.', 
        'http://localhost/Login/img/img18.jpg', 33.05, '2024-02-08');

INSERT INTO Requisitos (Juego_ID, Minimos, Recomendados)
VALUES (18, 
        'Sistema Operativo: Windows 10, 64-bit\r\nCPU: Intel Core i7-4790K or AMD Ryzen 5 1500X\r\nTarjeta grafica: NVIDIA GeForce GTX 1050 Ti or AMD Radeon RX 470\r\nRAM: 8 GB de RAM\r\nAlmacenamiento: 100 GB de espacio disponible', 
        'Sistema operativo: Windows 10, 64-bit\r\nCPU: Intel Core i7-9700K or AMD Ryzen 7 3700X\r\nTarjeta grafica: NVIDIA GeForce RTX 2060 or AMD Radeon RX 6600XT\r\nRAM: 16 GB de RAM\r\nAlmacenamiento: 100 GB de espacio disponible');

INSERT INTO Imagenes (idJuego, RutaImagen) VALUES (18, 'http://localhost/Login/Carrousel/carrouselHel1.jpg');
INSERT INTO Imagenes (idJuego, RutaImagen) VALUES (18, 'http://localhost/Login/Carrousel/carrouselHel2.jpg'); 
INSERT INTO Imagenes (idJuego, RutaImagen) VALUES (18, 'http://localhost/Login/Carrousel/carrouselHel3.jpg');



INSERT INTO Juego (Titulo, Descripcion, Imagen, Precio, FechaLanzamiento) 
VALUES ('MotoGP19', 
        'Compite con los pilotos oficiales del Campeonato 2019! Diviertete con la nueva experiencia multijugador y conviertete en director de carrera. Desafia la nueva IA, recorre la historia de MotoGP y desata tu creatividad con los editores graficos.', 
        'http://localhost/Login/img/img19.jpg', 16.52, '2019-06-06');

INSERT INTO Requisitos (Juego_ID, Minimos, Recomendados)
VALUES (19, 
        'Sistema Operativo: Windows 7 64-Bit or later\r\nCPU: Intel Core i5-2500, AMD FX-8100 or equivalent\r\nTarjeta grafica: NVIDIA GeForce GTX 1050 with 2 GB VRAM or more / AMD Radeon HD 7950 with 2 GB VRAM or more\r\nRAM: 8 GB de RAM\r\nDirectX: Version 11\r\nAlmacenamiento: 16 GB de espacio disponible', 
        'Sistema operativo: Windows 7 64-Bit or later\r\nCPU: Intel Core i7-6700K, AMD Ryzen 7 1700X or equivalent\r\nTarjeta grafica: NVIDIA GeForce GTX 1060 with 6 GB VRAM or more / AMD Radeon RX 480 with 4 GB VRAM or more\r\nRAM: 16 GB de RAM\r\nDirectX: Version 11\r\nAlmacenamiento: 16 GB de espacio disponible');

INSERT INTO Imagenes (idJuego, RutaImagen) VALUES (19, 'http://localhost/Login/Carrousel/carrouselGp1.jpg');
INSERT INTO Imagenes (idJuego, RutaImagen) VALUES (19, 'http://localhost/Login/Carrousel/carrouselGp2.jpg'); 
INSERT INTO Imagenes (idJuego, RutaImagen) VALUES (19, 'http://localhost/Login/Carrousel/carrouselGp2.jpg');




INSERT INTO Juego (Titulo, Descripcion, Imagen, Precio, FechaLanzamiento) 
VALUES ('Slime Rancher 2', 
        'Continua las aventuras de Beatrix LeBeau mientras navega por el Mar Slime hasta la Isla Arcoiris, una tierra rebosante de misterios ancestrales y repleta de nuevos y ondulantes slimes que arrear en esta secuela del exitoso Slime Rancher.', 
        'http://localhost/Login/img/img20.jpg', 23.55, '2022-09-22');

INSERT INTO Requisitos (Juego_ID, Minimos, Recomendados)
VALUES (20, 
        'Sistema Operativo: Windows 10 64-Bit \r\nCPU: Intel Core i5-2500K / AMD FX-6300\r\nTarjeta grafica: NVIDIA GeForce GTX 960 2GB / AMD Radeon R9 280 3GB\r\nRAM: 8 GB de RAM\r\nDirectX: Version 11\r\nAlmacenamiento: 8 GB de espacio disponible', 
        'Sistema operativo: Windows 10 64-Bit \r\nCPU: Intel i5-8400 / AMD Ryzen 5 1500X\r\nTarjeta grafica: NVIDIA GeForce RTX 2070 / AMD RX 5700\r\nRAM: 16 GB de RAM\r\nDirectX: Version 11\r\nAlmacenamiento: 8 GB de espacio disponible');

INSERT INTO Imagenes (idJuego, RutaImagen) VALUES (20, 'http://localhost/Login/Carrousel/carrouselRan1.jpg');
INSERT INTO Imagenes (idJuego, RutaImagen) VALUES (20, 'http://localhost/Login/Carrousel/carrouselRan2.jpg'); 
INSERT INTO Imagenes (idJuego, RutaImagen) VALUES (20, 'http://localhost/Login/Carrousel/carrouselRan3.jpg');





INSERT INTO Juego (Titulo, Descripcion, Imagen, Precio, FechaLanzamiento) 
VALUES ('7 Days to Die', 
        '7 Days to Die es un juego de mundo abierto que combina de forma extraordinaria juegos de disparos en primera persona, supervivencia de terror, defensa de torres y rol. Juega al primer RPG de supervivencia zombi de entorno abierto ¡Navezgane te espera!', 
        'http://localhost/Login/img/img21.jpg',  19.00 , '2013-12-13');

INSERT INTO Requisitos (Juego_ID, Minimos, Recomendados)
VALUES (21, 
        'Sistema Operativo: Windows 7 or higher (64-bit) \r\nCPU: 2.8 Ghz Quad Core CPU\r\nTarjeta grafica: 4 GB Dedicated Memory\r\nRAM: 8 GB de RAM\r\nDirectX: Version 11\r\nAlmacenamiento: 15 GB de espacio disponible', 
        'Sistema operativo: Windows 7 or higher (64-bit) \r\nCPU: 3.2 Ghz Quad Core CPU or faster\r\nTarjeta grafica: 4 GB Dedicated Memory\r\nRAM: 12 GB de RAM\r\nDirectX: Version 11\r\nAlmacenamiento: 15 GB de espacio disponible');

INSERT INTO Imagenes (idJuego, RutaImagen) VALUES (21, 'http://localhost/Login/Carrousel/carrouselSev1.jpg');
INSERT INTO Imagenes (idJuego, RutaImagen) VALUES (21, 'http://localhost/Login/Carrousel/carrouselSev2.jpg');
INSERT INTO Imagenes (idJuego, RutaImagen) VALUES (21, 'http://localhost/Login/Carrousel/carrouselSev3.jpg');


-- Insertar categorías
-- INSERT INTO Categoria (Nombre) VALUES (0, 'NoTocar');
INSERT INTO Categoria (idCategoria, Nombre) VALUES 
    (1, 'Aventura'),
    (2, 'Magia'),
    (3, 'Mundo Abierto'),
    (4, 'Un Jugador'),
    (5, 'Deportes'),
    (6, 'Estrategia'),
    (7, 'Shooter'),
    (8, 'Competitivos'),
    (9, 'Multijugador'),
    (10, 'Simulador'),
    (11, 'Cooperativo'),
    (12, 'Supervivencia'),
    (13, 'Rol'),
    (14, 'Accion');

-- Asegúrate de que no hay duplicados en idCategoria

-- Harry Potter
INSERT INTO JuegoCategoria (idJuego, idCategoria) VALUES (1, 1);
INSERT INTO JuegoCategoria (idJuego, idCategoria) VALUES (1, 2);
INSERT INTO JuegoCategoria (idJuego, idCategoria) VALUES (1, 3);
INSERT INTO JuegoCategoria (idJuego, idCategoria) VALUES (1, 4);
INSERT INTO JuegoCategoria (idJuego, idCategoria) VALUES (1, 13);

-- GTA V
INSERT INTO JuegoCategoria (idJuego, idCategoria) VALUES (2, 3);
INSERT INTO JuegoCategoria (idJuego, idCategoria) VALUES (2, 9);
INSERT INTO JuegoCategoria (idJuego, idCategoria) VALUES (2, 1);
INSERT INTO JuegoCategoria (idJuego, idCategoria) VALUES (2, 14);

-- Rainbow Six
INSERT INTO JuegoCategoria (idJuego, idCategoria) VALUES (3, 7);
INSERT INTO JuegoCategoria (idJuego, idCategoria) VALUES (3, 9);
INSERT INTO JuegoCategoria (idJuego, idCategoria) VALUES (3, 8);
INSERT INTO JuegoCategoria (idJuego, idCategoria) VALUES (3, 14);

-- CS:GO
INSERT INTO JuegoCategoria (idJuego, idCategoria) VALUES (4, 7);
INSERT INTO JuegoCategoria (idJuego, idCategoria) VALUES (4, 9);
INSERT INTO JuegoCategoria (idJuego, idCategoria) VALUES (4, 8);
INSERT INTO JuegoCategoria (idJuego, idCategoria) VALUES (4, 14);

-- Sea of Thieves
INSERT INTO JuegoCategoria (idJuego, idCategoria) VALUES (5, 9);
INSERT INTO JuegoCategoria (idJuego, idCategoria) VALUES (5, 1);
INSERT INTO JuegoCategoria (idJuego, idCategoria) VALUES (5, 11);
INSERT INTO JuegoCategoria (idJuego, idCategoria) VALUES (5, 14);
INSERT INTO JuegoCategoria (idJuego, idCategoria) VALUES (5, 4);

-- Stardew Valley
INSERT INTO JuegoCategoria (idJuego, idCategoria) VALUES (6, 10);
INSERT INTO JuegoCategoria (idJuego, idCategoria) VALUES (6, 3);
INSERT INTO JuegoCategoria (idJuego, idCategoria) VALUES (6, 13);

-- Star wars
INSERT INTO JuegoCategoria (idJuego, idCategoria) VALUES (7, 14);
INSERT INTO JuegoCategoria (idJuego, idCategoria) VALUES (7, 13);
INSERT INTO JuegoCategoria (idJuego, idCategoria) VALUES (7, 4);

-- isac
INSERT INTO JuegoCategoria (idJuego, idCategoria) VALUES (8, 4);
INSERT INTO JuegoCategoria (idJuego, idCategoria) VALUES (8, 14);
INSERT INTO JuegoCategoria (idJuego, idCategoria) VALUES (8, 11);

-- Gta 4
INSERT INTO JuegoCategoria (idJuego, idCategoria) VALUES (9, 3);
INSERT INTO JuegoCategoria (idJuego, idCategoria) VALUES (9, 4);
INSERT INTO JuegoCategoria (idJuego, idCategoria) VALUES (9, 1);

-- Ark
INSERT INTO JuegoCategoria (idJuego, idCategoria) VALUES (10, 14);
INSERT INTO JuegoCategoria (idJuego, idCategoria) VALUES (10, 9);
INSERT INTO JuegoCategoria (idJuego, idCategoria) VALUES (10, 13);

-- diablo
INSERT INTO JuegoCategoria (idJuego, idCategoria) VALUES (11, 4);
INSERT INTO JuegoCategoria (idJuego, idCategoria) VALUES (11, 11);
INSERT INTO JuegoCategoria (idJuego, idCategoria) VALUES (11, 9);
INSERT INTO JuegoCategoria (idJuego, idCategoria) VALUES (11, 13);
INSERT INTO JuegoCategoria (idJuego, idCategoria) VALUES (11, 14);

-- cuphead
INSERT INTO JuegoCategoria (idJuego, idCategoria) VALUES (12, 4);
INSERT INTO JuegoCategoria (idJuego, idCategoria) VALUES (12, 11);
INSERT INTO JuegoCategoria (idJuego, idCategoria) VALUES (12, 1);

-- rimworld
INSERT INTO JuegoCategoria (idJuego, idCategoria) VALUES (13, 4);
INSERT INTO JuegoCategoria (idJuego, idCategoria) VALUES (13, 10);

-- dbd
INSERT INTO JuegoCategoria (idJuego, idCategoria) VALUES (14, 12);
INSERT INTO JuegoCategoria (idJuego, idCategoria) VALUES (14, 9);

-- grounded
INSERT INTO JuegoCategoria (idJuego, idCategoria) VALUES (15, 1);
INSERT INTO JuegoCategoria (idJuego, idCategoria) VALUES (15, 4);
INSERT INTO JuegoCategoria (idJuego, idCategoria) VALUES (15, 9);
INSERT INTO JuegoCategoria (idJuego, idCategoria) VALUES (15, 14);

-- Another Crab's Treasure
INSERT INTO JuegoCategoria (idJuego, idCategoria) VALUES (17, 1);
INSERT INTO JuegoCategoria (idJuego, idCategoria) VALUES (17, 4);
INSERT INTO JuegoCategoria (idJuego, idCategoria) VALUES (17, 6);
INSERT INTO JuegoCategoria (idJuego, idCategoria) VALUES (17, 13);
INSERT INTO JuegoCategoria (idJuego, idCategoria) VALUES (17, 14);


INSERT INTO JuegoCategoria (idJuego, idCategoria) VALUES (18, 4);
INSERT INTO JuegoCategoria (idJuego, idCategoria) VALUES (18, 7);
INSERT INTO JuegoCategoria (idJuego, idCategoria) VALUES (18, 9);
INSERT INTO JuegoCategoria (idJuego, idCategoria) VALUES (18, 11);
INSERT INTO JuegoCategoria (idJuego, idCategoria) VALUES (18, 14);

INSERT INTO JuegoCategoria (idJuego, idCategoria) VALUES (19, 4);
INSERT INTO JuegoCategoria (idJuego, idCategoria) VALUES (19, 5);
INSERT INTO JuegoCategoria (idJuego, idCategoria) VALUES (19, 10);

INSERT INTO JuegoCategoria (idJuego, idCategoria) VALUES (20, 1);
INSERT INTO JuegoCategoria (idJuego, idCategoria) VALUES (20, 3);
INSERT INTO JuegoCategoria (idJuego, idCategoria) VALUES (20, 4);
INSERT INTO JuegoCategoria (idJuego, idCategoria) VALUES (20, 9);
INSERT INTO JuegoCategoria (idJuego, idCategoria) VALUES (20, 10);
INSERT INTO JuegoCategoria (idJuego, idCategoria) VALUES (20, 14);




