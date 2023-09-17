const controller = {};

controller.list = (req,res) => {
    req.getConnection((err, connection) => {
        connection.query('SELECT * FROM customer', (err, result) => {
            if (err) {
                res.json(err);
            }
            res.render('customers',{
                data: result
            });
        });
    });
};

controller.save = (req, res) => {
    const data = req.body;
    req.getConnection((err, connection) => {
        connection.query('INSERT INTO customer set ?',[data], (err, result) => {
            res.redirect('/');
        });
    });
};

controller.delete = (req, res) => {
    const { id } = req.params;
    req.getConnection((err, connection) => {
        connection.query('DELETE FROM customer WHERE id =?', [id], (err, result) => {
            res.redirect('/');
        });
    });
};

controller.edit = (req, res) => {
    const { id } = req.params;
    req.getConnection((err, connection) => {
        connection.query('SELECT * FROM customer WHERE id =?', [id], (err, result) => {
            console.log(result);
            res.render('customer_edit',{
                data: result[0]
            });
            //res.redirect('/');
        });
    });
};

controller.update = (req,res) => {
    const { id } = req.params;
    const data = req.body;
    req.getConnection((err, connection) => {
        connection.query('UPDATE customer SET ? WHERE id =?', [data, id], (err, result) => {
            res.redirect('/');
        });
    });
};


module.exports = controller;