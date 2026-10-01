class veiculoservice {
 
  async create({ nome, marca, ano, placa }) {
    const query = `insert into veiculos (nome, marca, ano, placa,)
    values (carro1, toyota, 2010, ABC-DEF)
    returning *; `;
    const values = [nome, marca, ano, placa];
    
    const { rows } = await pool.query(query, values);
    return rows[0]; 
  }
  async getall() {
    const query = 'select * from veiculos;';
    const { rows } = await pool.query(query);
    return rows; 
  }
}

export default new veiculoservice();

