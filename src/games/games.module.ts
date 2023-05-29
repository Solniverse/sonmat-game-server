import { Module } from '@nestjs/common';
import { GamesGateway } from './games.gateway';

@Module({
  providers: [GamesGateway],
})
export class GamesModule {}
