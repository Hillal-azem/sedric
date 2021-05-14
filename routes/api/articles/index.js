const express  = require('express')
const router = express.Router()

router.get('/', (req, res) => {

    // appel vers la base de données pour chercher tous les articles
    const articles = [
        {
            title: "Barça a remporté la league",
            author: "Sédric",
            body: "Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant impression. Le Lorem Ipsum est le faux texte standard de l'imprimerie depuis les années 1500, quand un imprimeur anonyme assembla ensemble des morceaux de texte pour réaliser un livre spécimen de polices de texte. Il n'a pas fait que survivre cinq siècles, mais s'est aussi adapté à la bureautique informatique, sans que son contenu n'en soit modifié. Il a été popularisé dans les années 1960 grâce à la vente de feuilles Letraset contenant des passages du Lorem Ipsum, et, plus récemment, par son inclusion dans des applications de mise en page de texte, comme Aldus PageMaker."
        },
        {
            title: "Madric aurait du gagner le match",
            author: "Hillal",
            body: "Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant impression. Le Lorem Ipsum est le faux texte standard de l'imprimerie depuis les années 1500, quand un imprimeur anonyme assembla ensemble des morceaux de texte pour réaliser un livre spécimen de polices de texte. Il n'a pas fait que survivre cinq siècles, mais s'est aussi adapté à la bureautique informatique, sans que son contenu n'en soit modifié. Il a été popularisé dans les années 1960 grâce à la vente de feuilles Letraset contenant des passages du Lorem Ipsum, et, plus récemment, par son inclusion dans des applications de mise en page de texte, comme Aldus PageMaker."
        }
    ]

    res.json({ articles })
})

router.post('/', (req, res) => {
    //Enregistrer l'article dans la base de donnée

    res.json({ msg: "L'article a bien été enregistré dans la base de donnée" })
})

router.patch('/', (req, res) => {

})

module.exports = router
