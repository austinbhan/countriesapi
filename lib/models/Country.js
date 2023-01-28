const pool = require('../../sql/pool');

class Country {
  id;
  country;
  capitol;
  langue;
  continent;

  constructor(row) {
    this.id = row.id;
    this.country = row.country;
    this.capitol = row.capitol;
    this.langue = row.langue;
    this.continent = row.continent;
  }

  static async getAll() {
    const { rows } = await pool.query(
      `
            SELECT * from countries
            `
    );
    return rows.map((row) => new Country(row));
  }
}

module.exports = { Country };
