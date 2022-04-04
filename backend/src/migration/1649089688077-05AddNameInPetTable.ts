/* eslint-disable require-jsdoc */
/* eslint-disable max-len */
import {MigrationInterface, QueryRunner} from 'typeorm'

export class AddNameInPetTable1649089688077 implements MigrationInterface {
  name = 'AddNameInPetTable1649089688077'

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`
            ALTER TABLE \`pet\`
            ADD \`name\` varchar(32) NOT NULL
        `)
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`
            ALTER TABLE \`pet\` DROP COLUMN \`name\`
        `)
  }
}
