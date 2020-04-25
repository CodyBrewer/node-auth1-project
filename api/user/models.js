const db = require('../../data/dbConfig.js')

const findAll = () => {
	return db('users').select('id', 'username')
};

const findBy = (filter) => {
	return db('users').where(filter);
}

const add = async (user) => {
	const [id] = await db('users').insert(user, "id");

	return findById(id)
}

const findById = (id) => {
	return db("users")
	  .where({ id })
	  .first();
}

module.exports = {
    findAll,
	findBy,
	findById,
	add,
}

