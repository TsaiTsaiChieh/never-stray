/* eslint-disable require-jsdoc */
/* eslint-disable max-len */
import {MigrationInterface, QueryRunner} from 'typeorm'

export class AddContactInPetTable1651945562298 implements MigrationInterface {
  name = 'AddContactInPetTable1651945562298'

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`
            ALTER TABLE \`pet\`
            ADD \`contact\` varchar(128) NULL
        `)
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`
            ALTER TABLE \`pet\` DROP COLUMN \`contact\`
        `)
  }
}
