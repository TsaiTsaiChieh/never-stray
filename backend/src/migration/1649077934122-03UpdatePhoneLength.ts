/* eslint-disable require-jsdoc */
/* eslint-disable max-len */
import {MigrationInterface, QueryRunner} from 'typeorm'

export class UpdatePhoneLength1649077934122 implements MigrationInterface {
  name = 'UpdatePhoneLength1649077934122'

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`
            ALTER TABLE \`pet\` DROP COLUMN \`phone\`
        `)
    await queryRunner.query(`
            ALTER TABLE \`pet\`
            ADD \`phone\` varchar(128) NULL
        `)
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`
            ALTER TABLE \`pet\` DROP COLUMN \`phone\`
        `)
    await queryRunner.query(`
            ALTER TABLE \`pet\`
            ADD \`phone\` varchar(16) NULL
        `)
  }
}
