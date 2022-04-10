/* eslint-disable require-jsdoc */
/* eslint-disable max-len */
import {MigrationInterface, QueryRunner} from 'typeorm'

export class TuneNameToNullable1649590341183 implements MigrationInterface {
  name = 'TuneNameToNullable1649590341183'

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`
            ALTER TABLE \`pet\` CHANGE \`name\` \`name\` varchar(32) NULL
        `)
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`
            ALTER TABLE \`pet\` CHANGE \`name\` \`name\` varchar(32) NOT NULL
        `)
  }
}
