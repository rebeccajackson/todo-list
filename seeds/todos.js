
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('todos').del()
    .then(function () {
      // Inserts seed entries
      return knex('todos').insert([
        {id: 1, task: 'Get soymilk', priority: 1, catagory: 'home', is_complete: true, due_at: 150040},
        {id: 2, task: 'Code', priority: 4, catagory: 'work', is_complete: false, due_at: 150040},
        {id: 3, task: 'Eat', priority: 5, catagory: 'home', is_complete: false, due_at: 150040}
      ]);
    });
};
