/* eslint-disable require-jsdoc */
/* eslint-disable max-len */
import {MigrationInterface, QueryRunner} from 'typeorm'

export class AddUserTable1650726010605 implements MigrationInterface {
  name = 'AddUserTable1650726010605'

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`
            CREATE TABLE \`user\` (
                \`id\` int NOT NULL AUTO_INCREMENT,
                \`name\` varchar(128) NULL,
                \`email\` varchar(128) NOT NULL,
                \`picture\` varchar(512) NULL,
                \`created_at\` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6),
                \`updated_at\` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6),
                UNIQUE INDEX \`IDX_065d4d8f3b5adb4a08841eae3c\` (\`name\`),
                UNIQUE INDEX \`IDX_e12875dfb3b1d92d7d7c5377e2\` (\`email\`),
                PRIMARY KEY (\`id\`)
            ) ENGINE = InnoDB
        `)
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`
            DROP INDEX \`IDX_e12875dfb3b1d92d7d7c5377e2\` ON \`user\`
        `)
    await queryRunner.query(`
            DROP INDEX \`IDX_065d4d8f3b5adb4a08841eae3c\` ON \`user\`
        `)
    await queryRunner.query(`
            DROP TABLE \`user\`
        `)
  }
}
