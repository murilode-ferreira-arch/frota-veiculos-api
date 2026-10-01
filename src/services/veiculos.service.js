import pool from '../config/db.js'

class veiculoService{
    async create({nome,marca,ano,placa}) {
        const query ='Insert into veiculos(nome,marca,ano,placa) values(carro1,toyota,2009,ABC-EFG-HIJ'

         const values (nome,marca,ano,placa) await pool.query()
    }
}