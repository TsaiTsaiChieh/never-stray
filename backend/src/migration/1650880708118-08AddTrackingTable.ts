/* eslint-disable require-jsdoc */
/* eslint-disable max-len */
import {MigrationInterface, QueryRunner} from 'typeorm'

export class AddTrackingTable1650880708118 implements MigrationInterface {
  name = 'AddTrackingTable1650880708118'

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`
            CREATE TABLE \`tracking\` (
                \`id\` int NOT NULL AUTO_INCREMENT,
                \`user_id\` int NOT NULL,
                \`pet_id\` int NOT NULL,
                \`created_at\` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6),
                UNIQUE INDEX \`IDX_0c68b271bc837c9c722d2319f6\` (\`pet_id\`, \`user_id\`),
                PRIMARY KEY (\`id\`)
            ) ENGINE = InnoDB
        `)
    await queryRunner.query(`
            ALTER TABLE \`tracking\`
            ADD CONSTRAINT \`FK_a2b147a66cbf2b142b5ed5d0b5f\` FOREIGN KEY (\`user_id\`) REFERENCES \`user\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION
        `)
    await queryRunner.query(`
            ALTER TABLE \`tracking\`
            ADD CONSTRAINT \`FK_a0c62cb57d5c5bc6637b92c962d\` FOREIGN KEY (\`pet_id\`) REFERENCES \`pet\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION
        `)
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`
            ALTER TABLE \`tracking\` DROP FOREIGN KEY \`FK_a0c62cb57d5c5bc6637b92c962d\`
        `)
    await queryRunner.query(`
            ALTER TABLE \`tracking\` DROP FOREIGN KEY \`FK_a2b147a66cbf2b142b5ed5d0b5f\`
        `)
    await queryRunner.query(`
            DROP INDEX \`IDX_0c68b271bc837c9c722d2319f6\` ON \`tracking\`
        `)
    await queryRunner.query(`
            DROP TABLE \`tracking\`
        `)
  }
}
