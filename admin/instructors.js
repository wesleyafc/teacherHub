const fs = require('fs');
const data = require('../dataUsers/data.json');

exports.post = function (req, res) {
    const keys = Object.keys(req.body);

    for (key of keys) {
        if (req.body[key] == '') {
            return res.send('fill all filds');
        }
    }

    let { avatar_url, name, birth, gender, skill } = req.body;

    birth = Date.parse(birth);
    const created_at = Date.now();
    const id = Number(data.instructors.length + 1);

    data.instructors.push({
        id,
        avatar_url,
        name,
        birth,
        gender,
        skill,
        created_at
    });

    fs.writeFile(
        './dataUsers/data.json',
        JSON.stringify(data, null, 2),
        function (err) {
            if (err) return res.send('Write file error');

            return res.redirect('/instructors');
        }
    );
};
