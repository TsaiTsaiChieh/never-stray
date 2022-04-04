/* eslint-disable require-jsdoc */
/* eslint-disable max-len */
import {MigrationInterface, QueryRunner} from 'typeorm'

export class AddRefIndex1649087982301 implements MigrationInterface {
  name = 'AddRefIndex1649087982301'

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`
            CREATE INDEX \`IDX_c4435cf29e78420b95a58ba964\` ON \`pet\` (\`ref\`)
        `)
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`
            DROP INDEX \`IDX_c4435cf29e78420b95a58ba964\` ON \`pet\`
        `)
  }
}
