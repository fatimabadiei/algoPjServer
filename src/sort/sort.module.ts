import { Module } from '@nestjs/common';
import { SortController } from './sort.controller';
import { SortService } from './sort.service'
import { AlgoBase } from './algoBase';
import { GenRandom } from './gen-random';
import { GetFile } from './get-file';

@Module({
  controllers: [SortController],
  providers: [SortService],
})
export class SortModule {}
