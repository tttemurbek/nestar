import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule } from '@nestjs/config';
import { GraphQLModule } from '@nestjs/graphql';
import { ApolloDriver } from '@nestjs/apollo';
import { AppResolver } from './app.resolver';
import { ComponentsModule } from './components/components.module';
import { DatabaseModule } from './database/database.module';
import { T } from './libs/types/common';

@Module({
	imports: [
		ConfigModule.forRoot(), // .env di oqishini aytyabmiz
		GraphQLModule.forRoot({
			// GraphQL modulimizdi chaqirib olyabmiz va configuratsiyalarini ham yozib olyabmiz
			driver: ApolloDriver,
			playground: true,
			uploads: false,
			autoSchemaFile: true,
			formatError: (error: T) => {
				const graphQLFormattedError = {
					code: error?.extensions.code,
					message:
						error?.extensions?.exception?.response?.message || error?.extensions?.response?.message || error?.message,
				};
				console.log('GRAPHQL GLOBAL ERROR:', graphQLFormattedError);

				return graphQLFormattedError;
			},
		}),
		ComponentsModule, // backendemizning asosiy mantigini shu yerda yozganmiz, bu standard, componentlarni yigib beradi, ko'prik misolida
		DatabaseModule, // buni chqarishdan maqsad bu mongodb ga successfull connect qilish uchun
	],
	controllers: [AppController],
	providers: [AppService, AppResolver],
})
export class AppModule {}
