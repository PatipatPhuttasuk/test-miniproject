let express = require('express'),
    app = express(),
    bodyParser = require('body-parser'),
    router = express.Router(),
    cors = require('cors'),
    port = process.env.PORT || 8080;

app.use(cors());

// all of our routes will be prefixed with /api
app.use('/api', bodyParser.json(), router);   //[use json]
app.use('/api', bodyParser.urlencoded({ extended: false }), router);

let students = [
     {   
        'id': 1, 
        'name': 'Perfact Man', 
        'surname':'Business ', 
        'fac': 'CoE',
        'img':'https://image.freepik.com/free-vector/fashion-illustration-with-male-model_23-2148216248.jpg'
    }
];

router.route('/students')
        .get(cors(),(req, res) => res.json(students))

        .post( cors(),(req,res) => {
            let student = {}
            student.id = students[students.length-1].id+1
            student.name = req.body.name
            student.surname = req.body.surname
            // student.grade = req.body.grade
            // student.year = req.body.year
            student.fac = req.body.fac
            student.img = req.body.img
            students.push(student)            
            res.json( {message: 'student created!'} )
        })

router.route('/students/:student_id')
        .get((req,res) => {
            let id = req.params.student_id
            let index = students.findIndex( student => (student.id === +id) )
            res.json(students[index])
        })

        .put ( (req,res) => {                               // Update a bear
            let id = req.params.student_id
            let index = students.findIndex( student => (student.id === +id) )
            students[index].name = req.body.name
            students[index].surname = req.body.surname
            // students[index].grade = req.body.grade
            // students[index].year = req.body.year
            students[index].fac = req.body.fac
            students[index].img = req.body.img   
            res.json({ message: 'Student updated!' + req.params.student_id});
        })
     
        .delete ( (req,res) => {                   // Delete a bear
            // delete     bears[req.params.bear_id]
            let id = req.params.student_id
            let index = students.findIndex( student => (student.id === +id)  )
            students.splice(index,1) 
            res.json({ message: 'Student deleted: ' + req.params.student_id});
        })
     

app.use("*", (req, res) => res.status(404).send('404 Not found'));

app.use((err, req, res, next) => {
    console.error(err.stack)
    res.status(500).send('Something broke!!!')
  })

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`)
})