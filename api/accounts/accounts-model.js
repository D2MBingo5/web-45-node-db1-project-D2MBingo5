const db = require('../../data/db-config') // the door to the database

const getAll = () => {
  // DO YOUR MAGIC
  // select * from accounts;
  return db('accounts');
}

const getById = id => {
  // DO YOUR MAGIC
  // select * from accounts where id = x;
  return db('accounts').where('id', id).first()
}

const create = async account => {
  // DO YOUR MAGIC
  // insert into accounts (name, budget) values ('foo', 1000);
  const [id] = await db('accounts').insert(account)
  return getById(id)
}

const updateById = (id, account) => {
  // DO YOUR MAGIC
}

const deleteById = id => {
  // DO YOUR MAGIC
}

module.exports = {
  getAll,
  getById,
  create,
  updateById,
  deleteById,
}
