import { Module } from '@nestjs/common';

import { SortController } from './sort/sort.controller';
import { SortService } from './sort/sort.service';
import { SortModule } from './sort/sort.module';

@Module({
  imports: [SortModule],
  controllers: [SortController],
  providers: [SortService],
})
export class AppModule {}
