
exports.up = function(knex) {
  return knex.schema.createTable('projects', tbl => {
      tbl.increments()
      tbl.string('name', 80).notNullable().unique()
      tbl.text('description')
      tbl.boolean('completed').defaultTo(false)
  })
  .createTable('resources', tbl => {
      tbl.increments()
      tbl.string('resources_name').notNullable().unique()
      tbl.text('resource_desc')
  })
  .createTable('tasks', tbl => {
      tbl.increments()
      tbl.text('task_desc').notNullable()
      tbl.text('notes')
      tbl.boolean('task_complete').defaultTo(false)
      tbl.integer('project_id')
        .unsigned()
        .notNullable()
        .references('id')
        .inTable('projects')
  })
  .createTable('projects_resources', tbl => {
      tbl.increments()
      tbl.integer('project_id')
        .unsigned()
        .notNullable()
        .references('id')
        .inTable('projects')
    tbl.integer('resources_id')
        .unsigned()
        .notNullable()
        .references('id')
        .inTable('resources')
  })
};

exports.down = function(knex) {
  return knex.schema
    .dropTableIfExists('project_resources')
    .dropTableIfExists('tasks')
    .dropTableIfExists('resources')
    .dropTableIfExists('projects')
};
