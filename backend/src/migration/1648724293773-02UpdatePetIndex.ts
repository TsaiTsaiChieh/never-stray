/* eslint-disable require-jsdoc */
/* eslint-disable max-len */
import {MigrationInterface, QueryRunner} from 'typeorm'

export class UpdatePetIndex1648724293773 implements MigrationInterface {
  name = 'UpdatePetIndex1648724293773'

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`
            DROP INDEX \`IDX_2432943f48fb3a9f3142a1c530\` ON \`pet\`
        `)
    await queryRunner.query(`
            CREATE INDEX \`IDX_aee08d5b34073605fefadc59d0\` ON \`pet\` (
                \`status\`,
                \`city_id\`,
                \`shelter_id\`,
                \`color\`,
                \`kind\`,
                \`age\`,
                \`sex\`,
                \`ref\`,
                \`ligation\`,
                \`created_at\`,
                \`updated_at\`
            )
        `)
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`
            DROP INDEX \`IDX_aee08d5b34073605fefadc59d0\` ON \`pet\`
        `)
    await queryRunner.query(`
            CREATE INDEX \`IDX_2432943f48fb3a9f3142a1c530\` ON \`pet\` (
                \`status\`,
                \`city_id\`,
                \`shelter_id\`,
                \`color\`,
                \`kind\`,
                \`age\`,
                \`sex\`,
                \`ref\`,
                \`created_at\`,
                \`updated_at\`
            )
        `)
  }
}
