import {MigrationInterface, QueryRunner} from "typeorm";

export class MyMigrationsClass1648132490792 implements MigrationInterface {
    name = 'MyMigrationsClass1648132490792'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE \`company\` (\`id\` varchar(36) NOT NULL, \`name\` varchar(255) NOT NULL, \`fantasyName\` varchar(255) NOT NULL, \`cnpj\` varchar(255) NOT NULL, \`status\` varchar(255) NOT NULL, PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`employee\` (\`id\` varchar(36) NOT NULL, \`name\` varchar(255) NOT NULL, \`email\` varchar(255) NOT NULL, \`cpf\` varchar(255) NOT NULL, \`position\` varchar(255) NOT NULL, \`companyId\` varchar(36) NULL, PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`ALTER TABLE \`employee\` ADD CONSTRAINT \`FK_26c3d513e0832e5abbbdd3d2a88\` FOREIGN KEY (\`companyId\`) REFERENCES \`company\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`employee\` DROP FOREIGN KEY \`FK_26c3d513e0832e5abbbdd3d2a88\``);
        await queryRunner.query(`DROP TABLE \`employee\``);
        await queryRunner.query(`DROP TABLE \`company\``);
    }

}
