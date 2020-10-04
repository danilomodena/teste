import Knex from 'knex'

export async function up(knex: Knex){
    return knex.schema.createTable('favorites', table =>{
        table.increments('id').primary()
        table.string('title').notNullable()
        table.string('overview').notNullable()
    })
}

export async function down(knex: Knex){
    
}