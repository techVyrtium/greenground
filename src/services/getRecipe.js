const recipes = [
    {
        id: "patacon-pisao-con-hogao",
        slug: "patacon-pisao-con-hogao",
        title: "Receta Patacón Pisao con hogao",
        owner: 'Lina montero',
        image: "/recipes/patacon-pisao-con-hogao.png",
        ingredients: [
            "1 paquete <strong class='font-itcGBold'>de 300 gr de tajadas de platano GREEN GROUND</strong>",
            "2 a 3 tazas aceite vegetal",
            "1 cucharadita sal, para espolvorear sobre los patacones",
            "La Salsa Hogao",
            "4 a 5 Tomates Roma",
            "1 pequeña pimiento rojo, finamente picado",
            "3 a 4 cebolletas, las secciones superiores picadas",
            "1 cebolla blanca, grande, picada",
            "4 clavos de olor ajo picado",
            "2 cucharada aceite de oliva",
            "1⁄2 cucharadita sal, o al gusto",
            "1⁄4 taza cilantro fresco, picado",
        ],
        preparationPhases: [
            {
                title: 'Preparemos la Salsa de Hogao',
                phases: [
                    "Retire las semillas y las membranas interiores de los tomates. Dados los tomates.",
                    "Despepitar, desmembrar y picar finamente el pimiento rojo.",
                    "Pelar y picar la cebolla.",
                    "En una sartén, caliente el aceite de oliva a fuego medio-bajo. Agregue los tomates, la cebolla, el pimiento rojo, las cebolletas, el ajo y la sal. Cocine a fuego lento durante 5 minutos a fuego medio.",
                    "Baja el fuego, tapa y cocina a fuego lento durante 15 minutos, revolviendo regularmente, para asegurarte de que las verduras no se peguen a la sartén.",
                    "Destape, revuelva y saltee durante los últimos 5 minutos, sin tapar. Pruebe y ajuste la sal, según sea necesario. Añadir un chorrito final de aceite de oliva. Reserva mientras fríes los patacones.",
                ]
            },
            {
                title: 'Es hora de freír los tostones',
                phases: [
                    "En una sartén grande sobre un fuego medio-alto, agregue el aceite vegetal y caliente a unos 350°.",
                    "Pele y corte los plátanos verdes en rodajas gruesas, de una pulgada de ancho cada una.",
                    "Agregue las rodajas de plátano macho al aceite caliente en tandas para que no se toquen. Después de unos 2 minutos, dales la vuelta y fríe el otro lado durante 1 o 2 minutos.",
                    "Cuando ambos lados estén ligeramente dorados, saque los plátanos con una espumadera.",
                    "Coloque los platanos en un plato forrado con toallas de papel para drenar el exceso de aceite. Déjalos reposar durante varios minutos para que se enfríen un poco antes de aplanarlos.",
                    "Coloque un trozo de papel pergamino o una envoltura de plástico en su prensa de plátano, prensa de tortillas o una sartén redonda pesada o una lata ancha. Presione cada plátano, uno a la vez, de modo que cada uno tenga aproximadamente ¼ de pulgada de grosor.",
                    "Una vez que todos los Platanos estén prensados, regréselos en tandas al aceite caliente para su segunda fritura. Esta vez, deja cada plátano por solo 30 segundos a 1 minuto por lado.",
                    "Saque del aceite caliente y de nuevo descanse en un plato forrado con toallas de papel para drenar el exceso de aceite.",
                    "Espolvorear con sal. Agrega una cucharada de salsa hogao sobre cada patacón. Adorne con cilantro picado y una última pizca de sal. Sírvalas rápidamente, mientras aún están calientes."
                ]
            }
        ],
        preparationNotes: [
            "Los tomates Roma son ideales para el hogao. De color rojo brillante, sabroso y firme, resisten cuando se cocinan a fuego lento durante media hora con ajo, cebolla y cebollín y producen una dulzura rica en especias.",
            "Alternativamente, muchas recetas para la salsa hogao requieren marcar los tomates (cortar una X delgada en la parte inferior), hervir durante aproximadamente 1 minuto y luego pelarlos antes de saltearlos. Muy delicioso."
        ],
        recommendations: [],
    },
];
export const getRecipe = async (slug) => {
    console.log("Filter slug:", { slug });
    return recipes[0];
}


