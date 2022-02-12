/* eslint-disable require-jsdoc */
/* eslint-disable max-len */
import {MigrationInterface, QueryRunner} from 'typeorm'

export class CreateTables1644681686853 implements MigrationInterface {
  name = 'CreateTables1644681686853'

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`
            CREATE TABLE \`area\` (
                \`id\` int NOT NULL,
                \`region\` enum ('E', 'W', 'S', 'N', 'M') NOT NULL,
                \`name\` varchar(4) NOT NULL,
                INDEX \`IDX_5cbaee55958c1fdde3d84e73c6\` (\`region\`),
                PRIMARY KEY (\`id\`)
            ) ENGINE = InnoDB
        `)
    await queryRunner.query(`
            CREATE TABLE \`shelter\` (
                \`id\` int NOT NULL AUTO_INCREMENT,
                \`name\` varchar(32) NOT NULL,
                PRIMARY KEY (\`id\`)
            ) ENGINE = InnoDB
        `)
    await queryRunner.query(`
            CREATE TABLE \`pet\` (
                \`id\` int NOT NULL AUTO_INCREMENT,
                \`sub_id\` int NOT NULL,
                \`accept_num\` varchar(32) NULL COMMENT 'sub id from shelter',
                \`ref\` enum ('gov', 'map', 'own') NOT NULL,
                \`city_id\` int NOT NULL,
                \`shelter_id\` int NOT NULL,
                \`kind\` enum ('dog', 'cat', 'other') NOT NULL,
                \`sex\` enum ('F', 'M', 'U') NOT NULL DEFAULT 'U',
                \`color\` varchar(32) NULL,
                \`age\` enum ('A', 'C', 'U') NOT NULL DEFAULT 'U',
                \`ligation\` enum ('T', 'F', 'U') NOT NULL COMMENT '結紮' DEFAULT 'U',
                \`rabies\` enum ('T', 'F', 'U') NOT NULL COMMENT '施打狂犬病疫苗' DEFAULT 'U',
                \`title\` varchar(255) NULL,
                \`status\` enum ('unknown', 'open', 'adopted', 'other', 'dead') NOT NULL DEFAULT 'unknown',
                \`remark\` text NULL,
                \`phone\` varchar(16) NULL,
                \`image\` json NULL,
                \`created_at\` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6),
                \`updated_at\` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6),
                INDEX \`IDX_2432943f48fb3a9f3142a1c530\` (
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
                ),
                INDEX \`IDX_9b835ccb7e05dfffaf4cc18e43\` (\`status\`, \`accept_num\`),
                UNIQUE INDEX \`IDX_6866d92fcfd2036f02c922f488\` (\`sub_id\`, \`accept_num\`),
                PRIMARY KEY (\`id\`)
            ) ENGINE = InnoDB
        `)
    await queryRunner.query(`
            ALTER TABLE \`pet\`
            ADD CONSTRAINT \`FK_07f92296249a82f4b00766b0c1c\` FOREIGN KEY (\`city_id\`) REFERENCES \`area\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION
        `)
    await queryRunner.query(`
            ALTER TABLE \`pet\`
            ADD CONSTRAINT \`FK_80e1ff45d1324b428780eacb7a2\` FOREIGN KEY (\`shelter_id\`) REFERENCES \`shelter\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION
        `)
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`
            ALTER TABLE \`pet\` DROP FOREIGN KEY \`FK_80e1ff45d1324b428780eacb7a2\`
        `)
    await queryRunner.query(`
            ALTER TABLE \`pet\` DROP FOREIGN KEY \`FK_07f92296249a82f4b00766b0c1c\`
        `)
    await queryRunner.query(`
            DROP INDEX \`IDX_6866d92fcfd2036f02c922f488\` ON \`pet\`
        `)
    await queryRunner.query(`
            DROP INDEX \`IDX_9b835ccb7e05dfffaf4cc18e43\` ON \`pet\`
        `)
    await queryRunner.query(`
            DROP INDEX \`IDX_2432943f48fb3a9f3142a1c530\` ON \`pet\`
        `)
    await queryRunner.query(`
            DROP TABLE \`pet\`
        `)
    await queryRunner.query(`
            DROP TABLE \`shelter\`
        `)
    await queryRunner.query(`
            DROP INDEX \`IDX_5cbaee55958c1fdde3d84e73c6\` ON \`area\`
        `)
    await queryRunner.query(`
            DROP TABLE \`area\`
        `)
  }
}
