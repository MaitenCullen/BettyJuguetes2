

      //CATEGORY: vibradores, masturbadores, lubricantes, anales, salud, juegos, fetiche.
   
      const Productos = [{
            id: 1,
            Producto:"Vibrador Rabbit",
            category: "vibradores",
            Descripcion: "vibrador doble estimulacion",
            detalle: "Vibrador doble estimulación, con diez modos de vibración. Sus orejas estimulan directamente el clitoris. Funciona con dos pilas AAA",
            precio: 1500,
            imagen: "/img/Vrabbit1.jpg"
        },
        {
            id: 2,
            Producto:"Masturbador Tenga",
            category: "masturbadores",
            Descripcion: "Huevito masturbador",
            detalle: " ¡El clásico del mercado! Con sus diferentes texturas, invitan a descubrir nuevas maneras y sensaciones de percibir el placer. Fabricado en silicona hipoalergénica.  Consultar modelos disponibles. Se guardan dentro de su envase.",
            precio: 1000,
            imagen: "/img/huevoTenga1.jpg"
            
        },
        {
            id: 3,
            Producto:"Joya anal corazón",
            Descripcion: "Joya anal talle L con strass",
            category: "anales",
            detalle: "Las joyitas anales estimulan la zona mientras invitan a mirar y disfrutar. Son perfectos para quienes se inicien en los juegos anales y también para agregar un complemento brillante a los encuentros. Los diferentes tamaños permiten que puedas elegir la medida que sientas cómoda a tu cuerpo a la vez que el material permite jugar con las temperaturas. Consultar colores disponibles. Medidas: Talle L 9 x 5,6 cm",
            precio: 1500,
            imagen: '/img/joyaAnal1.jpg'
        },
        {
            id: 4,
            Producto:"Varita Anal",
            Descripcion: "Varita Anal escalonada",
            category: "anales",
            detalle: " De forma elástica y fabricada en silicona hipoalergénica de alta calidad que se desliza suavemente, podes elegir e ir regulando la cantidad de bolitas a introducir. Su tamaño es de 19,5 cm de largo total.  Punta cónica para facilitar su inserción y extractor.",
            precio: 2000,
            imagen: '/img/varitaAnal1.jpg'
        },
        {
            id: 5,
            Producto:"Lubricante Neutro",
            Descripcion: "Lubricante Miss V Neutro",
            category: "lubricantes",
            detalle: "Lubricante íntimo vegano con jojoba y caléndula, realizado sin testo en animales. Entre sus principales componentes la jojoba tiene propiedades hidratantes y es antioxidante, mientras la caléndula es regenerativa. Ideal para lubricación vagina y anal también. Es hidrosoluble y compatible con el uso de preservativos. Producto libre de Gluten, Sin TACC.",
            precio: 800,
            imagen: '/img/lubriVegan1.jpg'
        },
        {
            id: 6,
            Producto:"Bolas Kegel",
            Descripcion: "Bolitas kegel para suelo pelvico",
            category: "saludSexual",
            detalle: "Con un tamaño de 3,3 cm de diámetro y 16 cm de largo, son perfectas para ejercitar los musculos del suelo pelvico. Se pueden sacar las bolitas internas por si deseas usarla con menos peso. Cada bolita pesa 39 gramos. Fabricado con silicona hipoalergénica.",
            precio: 2000,
            imagen: '/img/bolasKegel1.jpg'
        }
        ]


export const  getProducts =  new Promise ((resolve, reject) => {
    //que hace la promesa, x fuera setTimeout no es necesario es solo practica para simular lo que el dato tarda
        let condition = true
                setTimeout(() => {
                    if (condition){
                        resolve(Productos)
                    } else {
                        reject ("algo salio mal")
                    }
                },2000 )
            
            })


export const getItem=(id) =>  new Promise ((resolve) => {

    let condition = true
            setTimeout(() => {
                if (condition){
                    resolve(Productos.find(producto => producto.id === parseInt(id)))
                }
                
            },2000 )
})